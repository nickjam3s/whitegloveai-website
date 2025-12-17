import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, formData, ipAddress, userAgent } = await req.json();

    if (!email || !formData) {
      return new Response(
        JSON.stringify({ error: "Email and form data are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const slackWebhookUrl = Deno.env.get("SLACK_WEBHOOK_URL")!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Verify email was verified via OTP
    const { data: otpRecord, error: otpError } = await supabase
      .from('civic_gift_otp')
      .select('*')
      .eq('email', email.trim().toLowerCase())
      .eq('verified', true)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (otpError || !otpRecord) {
      return new Response(
        JSON.stringify({ error: "Email not verified. Please verify your email first." }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Save request to database with pending status
    const { data: logRecord, error: logError } = await supabase
      .from('civic_gift_logs')
      .insert({
        email: email.trim().toLowerCase(),
        entity_type: formData.entity_type || 'municipal',
        primary_name: formData.primary_name,
        secondary_name: formData.primary_name,
        region: formData.state || 'Texas',
        phone_area_code: 'auto',
        specialization: 'General Services',
        website: formData.website || null,
        provision_kb: false,
        enhanced_crawl: false,
        crawl_max_pages: 10,
        crawl_max_depth: 2,
        api_status: 'pending',
        status: 'pending',
        ip_address: ipAddress || null,
        user_agent: userAgent || null,
        first_name: formData.first_name || null,
        last_name: formData.last_name || null,
        title: formData.title || null,
      })
      .select()
      .single();

    if (logError) {
      console.error("Error saving to database:", logError);
      return new Response(
        JSON.stringify({ error: "Failed to save request" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Request saved to database:", logRecord.id);

    // Send Slack notification with approval buttons
    const slackCallbackUrl = `${supabaseUrl}/functions/v1/civic-gift-slack-callback`;
    const submittedAt = new Date().toLocaleString('en-US', { 
      timeZone: 'America/Chicago',
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const slackMessage = {
      text: `🎁 New Civic Gift Request from ${formData.first_name || 'Unknown'} ${formData.last_name || ''}`,
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🎁 New Civic Gift Request",
            emoji: true
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*👤 Requestor:*\n${formData.first_name || ''} ${formData.last_name || ''}${formData.title ? ` (${formData.title})` : ''}`
            },
            {
              type: "mrkdwn",
              text: `*📧 Email:*\n${email.trim().toLowerCase()}`
            }
          ]
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*🏛️ Entity:*\n${formData.primary_name} (${formData.entity_type || 'Municipal'})`
            },
            {
              type: "mrkdwn",
              text: `*📍 State:*\n${formData.state || 'Texas'}`
            }
          ]
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*🌐 Website:*\n${formData.website || 'Not provided'}`
            },
            {
              type: "mrkdwn",
              text: `*📅 Submitted:*\n${submittedAt} CT`
            }
          ]
        },
        {
          type: "divider"
        },
        {
          type: "actions",
          elements: [
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "✅ Approve",
                emoji: true
              },
              style: "primary",
              action_id: "approve_request",
              value: logRecord.id
            },
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "❌ Deny",
                emoji: true
              },
              style: "danger",
              action_id: "deny_request",
              value: logRecord.id
            }
          ]
        }
      ]
    };

    try {
      const slackResponse = await fetch(slackWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(slackMessage),
      });

      if (!slackResponse.ok) {
        console.error("Slack notification failed:", await slackResponse.text());
      } else {
        console.log("Slack notification sent successfully");
      }
    } catch (slackError) {
      console.error("Error sending Slack notification:", slackError);
    }

    // Send confirmation email to the user
    try {
      const confirmationResponse = await fetch(`${supabaseUrl}/functions/v1/civic-gift-send-confirmation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          firstName: formData.first_name || null,
          lastName: formData.last_name || null,
          title: formData.title || null,
          entityName: formData.primary_name,
          requestId: logRecord.id,
        }),
      });

      if (!confirmationResponse.ok) {
        console.error("Confirmation email failed:", await confirmationResponse.text());
      } else {
        console.log("Confirmation email sent successfully");
      }
    } catch (emailError) {
      console.error("Error sending confirmation email:", emailError);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Request submitted successfully",
        request_id: logRecord.id,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in civic-gift-provision:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
