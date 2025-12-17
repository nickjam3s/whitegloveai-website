import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Hardcoded admin credentials (as per requirements)
const ADMIN_EMAIL = "admin@whitegloveai.com";
const ADMIN_PASSWORD = "10172023WGAI";

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

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { action, email, password, requestId, reason } = await req.json();

    // Verify admin credentials
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return new Response(
        JSON.stringify({ error: "Invalid credentials" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const civicApiKey = Deno.env.get("CIVIC_GIFT_API_KEY")!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    if (action === "login") {
      return new Response(
        JSON.stringify({ success: true, authenticated: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (action === "getLogs") {
      const { data: logs, error } = await supabase
        .from('civic_gift_logs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching logs:", error);
        return new Response(
          JSON.stringify({ error: "Failed to fetch logs" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ success: true, logs }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (action === "getPendingRequests") {
      const { data: requests, error } = await supabase
        .from('civic_gift_logs')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching pending requests:", error);
        return new Response(
          JSON.stringify({ error: "Failed to fetch pending requests" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ success: true, requests }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (action === "getApprovedRequests") {
      const { data: requests, error } = await supabase
        .from('civic_gift_logs')
        .select('*')
        .eq('status', 'approved')
        .order('processed_at', { ascending: false });

      if (error) {
        return new Response(
          JSON.stringify({ error: "Failed to fetch approved requests" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ success: true, requests }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (action === "getDeniedRequests") {
      const { data: requests, error } = await supabase
        .from('civic_gift_logs')
        .select('*')
        .eq('status', 'denied')
        .order('processed_at', { ascending: false });

      if (error) {
        return new Response(
          JSON.stringify({ error: "Failed to fetch denied requests" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ success: true, requests }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (action === "approveRequest") {
      if (!requestId) {
        return new Response(
          JSON.stringify({ error: "Request ID is required" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Get the request
      const { data: requestData, error: fetchError } = await supabase
        .from('civic_gift_logs')
        .select('*')
        .eq('id', requestId)
        .single();

      if (fetchError || !requestData) {
        return new Response(
          JSON.stringify({ error: "Request not found" }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      if (requestData.status !== 'pending') {
        return new Response(
          JSON.stringify({ error: `Request already ${requestData.status}` }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Call external API
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

      let apiData: any;
      try {
        const apiResponse = await fetch("https://agentic-iac-pg23c.ondigitalocean.app/agents", {
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
        
        await supabase
          .from('civic_gift_logs')
          .update({
            status: 'failed',
            api_status: 'failed',
            processed_at: new Date().toISOString(),
            processed_by: 'Web Admin',
            api_response: { error: apiError instanceof Error ? apiError.message : "API call failed" },
          })
          .eq('id', requestId);

        return new Response(
          JSON.stringify({ error: apiError instanceof Error ? apiError.message : "API call failed" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Update database
      const { error: updateError } = await supabase
        .from('civic_gift_logs')
        .update({
          status: 'approved',
          api_status: 'success',
          processed_at: new Date().toISOString(),
          processed_by: 'Web Admin',
          phone_number_returned: apiData.phone_number,
          agent_id: apiData.agent_id,
          api_response: apiData,
        })
        .eq('id', requestId);

      if (updateError) {
        console.error("Error updating database:", updateError);
      }

      // Send email
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
          console.error("Failed to send email:", await emailResponse.text());
        }
      } catch (emailError) {
        console.error("Error sending email:", emailError);
      }

      return new Response(
        JSON.stringify({ 
          success: true, 
          phone_number: apiData.phone_number,
          agent_id: apiData.agent_id,
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (action === "denyRequest") {
      if (!requestId) {
        return new Response(
          JSON.stringify({ error: "Request ID is required" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const { error: updateError } = await supabase
        .from('civic_gift_logs')
        .update({
          status: 'denied',
          api_status: 'denied',
          processed_at: new Date().toISOString(),
          processed_by: 'Web Admin',
          denial_reason: reason || null,
        })
        .eq('id', requestId);

      if (updateError) {
        return new Response(
          JSON.stringify({ error: "Failed to deny request" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ error: "Invalid action" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in civic-gift-admin:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
