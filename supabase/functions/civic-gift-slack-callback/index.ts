import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AgentCreateRequest {
  entity_type: string;
  primary_name: string;
  secondary_name: string;
  region: string;
  specialization: string;
  website?: string;
  provision_kb: boolean;
  enhanced_crawl: boolean;
  crawl_max_pages: number;
  crawl_max_depth: number;
}

// Verify Slack signature
async function verifySlackRequest(req: Request, body: string): Promise<boolean> {
  const signingSecret = Deno.env.get("SLACK_SIGNING_SECRET");
  if (!signingSecret) {
    console.error("SLACK_SIGNING_SECRET not configured");
    return false;
  }

  const timestamp = req.headers.get("x-slack-request-timestamp");
  const signature = req.headers.get("x-slack-signature");

  if (!timestamp || !signature) {
    console.error("Missing Slack headers");
    return false;
  }

  // Check timestamp is within 5 minutes
  const currentTime = Math.floor(Date.now() / 1000);
  if (Math.abs(currentTime - parseInt(timestamp)) > 300) {
    console.error("Slack request timestamp too old");
    return false;
  }

  const sigBasestring = `v0:${timestamp}:${body}`;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(signingSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signatureBuffer = await crypto.subtle.sign("HMAC", key, encoder.encode(sigBasestring));
  const computedSignature = `v0=${Array.from(new Uint8Array(signatureBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")}`;

  return computedSignature === signature;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const civicApiKey = Deno.env.get("CIVIC_GIFT_API_KEY")!;
  const slackWebhookUrl = Deno.env.get("SLACK_WEBHOOK_URL")!;

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    const bodyText = await req.text();
    
    // Verify Slack signature
    const isValid = await verifySlackRequest(req, bodyText);
    if (!isValid) {
      console.error("Invalid Slack signature");
      return new Response("Invalid signature", { status: 401 });
    }

    // Parse URL-encoded body
    const params = new URLSearchParams(bodyText);
    const payloadStr = params.get("payload");
    
    if (!payloadStr) {
      console.error("No payload in request");
      return new Response("No payload", { status: 400 });
    }

    const payload = JSON.parse(payloadStr);
    console.log("Slack callback payload:", JSON.stringify(payload, null, 2));

    const action = payload.actions?.[0];
    if (!action) {
      return new Response("No action found", { status: 400 });
    }

    const requestId = action.value;
    const actionId = action.action_id;
    const userName = payload.user?.name || payload.user?.username || "Unknown admin";

    console.log(`Processing ${actionId} for request ${requestId} by ${userName}`);

    // Get the request from database
    const { data: requestData, error: fetchError } = await supabase
      .from('civic_gift_logs')
      .select('*')
      .eq('id', requestId)
      .single();

    if (fetchError || !requestData) {
      console.error("Request not found:", fetchError);
      return new Response(JSON.stringify({ text: "Request not found" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Check if already processed
    if (requestData.status !== 'pending') {
      return new Response(JSON.stringify({
        response_type: "ephemeral",
        text: `This request has already been ${requestData.status}.`
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    const processedAt = new Date().toISOString();
    const processedAtFormatted = new Date().toLocaleString('en-US', {
      timeZone: 'America/Chicago',
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    if (actionId === "approve_request") {
      // Call external API to provision agent
      const apiRequestBody: AgentCreateRequest = {
        entity_type: requestData.entity_type || 'municipal',
        primary_name: requestData.primary_name,
        secondary_name: requestData.secondary_name || requestData.primary_name,
        region: requestData.region || 'Texas',
        specialization: requestData.specialization || 'General Services',
        website: requestData.website || undefined,
        provision_kb: requestData.provision_kb || false,
        enhanced_crawl: requestData.enhanced_crawl || false,
        crawl_max_pages: requestData.crawl_max_pages || 10,
        crawl_max_depth: requestData.crawl_max_depth || 2,
      };

      console.log("Calling external API:", JSON.stringify(apiRequestBody));

      let apiResponse: Response;
      let apiData: any;

      try {
        apiResponse = await fetch("https://agentic-iac-pg23c.ondigitalocean.app/agents", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Token": civicApiKey,
          },
          body: JSON.stringify(apiRequestBody),
        });

        apiData = await apiResponse.json();
        console.log("API Response:", JSON.stringify(apiData));

        if (!apiResponse.ok) {
          throw new Error(apiData?.error || apiData?.detail || "API call failed");
        }
      } catch (apiError) {
        console.error("API call failed:", apiError);
        
        // Update database with failed status
        await supabase
          .from('civic_gift_logs')
          .update({
            status: 'failed',
            api_status: 'failed',
            processed_at: processedAt,
            processed_by: userName,
            api_response: { error: apiError instanceof Error ? apiError.message : "API call failed" },
          })
          .eq('id', requestId);

        // Update Slack message to show failure
        return new Response(JSON.stringify({
          response_type: "in_channel",
          replace_original: true,
          text: `🎁 Civic Gift Request — ❌ FAILED`,
          blocks: [
            {
              type: "header",
              text: { type: "plain_text", text: "🎁 Civic Gift Request — ❌ FAILED", emoji: true }
            },
            {
              type: "section",
              fields: [
                { type: "mrkdwn", text: `*👤 Requestor:*\n${requestData.first_name || ''} ${requestData.last_name || ''}` },
                { type: "mrkdwn", text: `*📧 Email:*\n${requestData.email}` }
              ]
            },
            {
              type: "section",
              fields: [
                { type: "mrkdwn", text: `*🏛️ Entity:*\n${requestData.primary_name}` },
                { type: "mrkdwn", text: `*❌ Error:*\n${apiError instanceof Error ? apiError.message : "API failed"}` }
              ]
            },
            {
              type: "context",
              elements: [{ type: "mrkdwn", text: `Attempted by ${userName} at ${processedAtFormatted} CT` }]
            }
          ]
        }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      }

      // Update database with success
      const { error: updateError } = await supabase
        .from('civic_gift_logs')
        .update({
          status: 'approved',
          api_status: 'success',
          processed_at: processedAt,
          processed_by: userName,
          phone_number_returned: apiData.phone_number,
          agent_id: apiData.agent_id,
          api_response: apiData,
        })
        .eq('id', requestId);

      if (updateError) {
        console.error("Error updating database:", updateError);
      }

      // Send email to user with phone number
      try {
        const emailResponse = await fetch(`${supabaseUrl}/functions/v1/civic-gift-send-phone-number`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${supabaseServiceKey}`,
          },
          body: JSON.stringify({
            email: requestData.email,
            phoneNumber: apiData.phone_number,
            agentId: apiData.agent_id,
            agentName: apiData.name || requestData.primary_name,
            firstName: requestData.first_name,
            lastName: requestData.last_name,
            title: requestData.title,
          }),
        });

        if (!emailResponse.ok) {
          console.error("Failed to send phone number email:", await emailResponse.text());
        } else {
          console.log("Phone number email sent successfully");
        }
      } catch (emailError) {
        console.error("Error sending email:", emailError);
      }

      // Format phone number for display
      const phone = apiData.phone_number || '';
      const cleaned = phone.replace(/\D/g, '');
      let formattedPhone = phone;
      if (cleaned.length === 10) {
        formattedPhone = `+1 ${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
      } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
        formattedPhone = `+1 ${cleaned.slice(1, 4)}-${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
      }

      // Update Slack message to show approval
      return new Response(JSON.stringify({
        response_type: "in_channel",
        replace_original: true,
        text: `🎁 Civic Gift Request — ✅ APPROVED`,
        blocks: [
          {
            type: "header",
            text: { type: "plain_text", text: "🎁 Civic Gift Request — ✅ APPROVED", emoji: true }
          },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: `*👤 Requestor:*\n${requestData.first_name || ''} ${requestData.last_name || ''}${requestData.title ? ` (${requestData.title})` : ''}` },
              { type: "mrkdwn", text: `*📧 Email:*\n${requestData.email}` }
            ]
          },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: `*🏛️ Entity:*\n${requestData.primary_name} (${requestData.entity_type})` },
              { type: "mrkdwn", text: `*📍 State:*\n${requestData.region}` }
            ]
          },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: `*🌐 Website:*\n${requestData.website || 'Not provided'}` },
              { type: "mrkdwn", text: `*📅 Submitted:*\n${new Date(requestData.created_at).toLocaleString('en-US', { timeZone: 'America/Chicago', dateStyle: 'medium', timeStyle: 'short' })} CT` }
            ]
          },
          { type: "divider" },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: `*📞 Phone Number:*\n\`${formattedPhone}\`` },
              { type: "mrkdwn", text: `*🤖 Agent ID:*\n\`${apiData.agent_id || 'N/A'}\`` }
            ]
          },
          {
            type: "context",
            elements: [{ type: "mrkdwn", text: `✅ Approved by ${userName} at ${processedAtFormatted} CT • Email sent to ${requestData.email}` }]
          }
        ]
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });

    } else if (actionId === "deny_request") {
      // Update database with denial
      const { error: updateError } = await supabase
        .from('civic_gift_logs')
        .update({
          status: 'denied',
          api_status: 'denied',
          processed_at: processedAt,
          processed_by: userName,
        })
        .eq('id', requestId);

      if (updateError) {
        console.error("Error updating database:", updateError);
      }

      // Update Slack message to show denial (no email sent per user preference)
      return new Response(JSON.stringify({
        response_type: "in_channel",
        replace_original: true,
        text: `🎁 Civic Gift Request — ❌ DENIED`,
        blocks: [
          {
            type: "header",
            text: { type: "plain_text", text: "🎁 Civic Gift Request — ❌ DENIED", emoji: true }
          },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: `*👤 Requestor:*\n${requestData.first_name || ''} ${requestData.last_name || ''}` },
              { type: "mrkdwn", text: `*📧 Email:*\n${requestData.email}` }
            ]
          },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: `*🏛️ Entity:*\n${requestData.primary_name}` },
              { type: "mrkdwn", text: `*📍 State:*\n${requestData.region}` }
            ]
          },
          {
            type: "context",
            elements: [{ type: "mrkdwn", text: `❌ Denied by ${userName} at ${processedAtFormatted} CT` }]
          }
        ]
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ text: "Unknown action" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Error in civic-gift-slack-callback:", error);
    return new Response(
      JSON.stringify({ text: error instanceof Error ? error.message : "Unknown error" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
});
