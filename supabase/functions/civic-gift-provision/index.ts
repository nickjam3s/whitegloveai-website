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
  phone_area_code: string;
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
    const { email, formData, ipAddress, userAgent } = await req.json();

    if (!email || !formData) {
      return new Response(
        JSON.stringify({ error: "Email and form data are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const civicApiKey = Deno.env.get("CIVIC_GIFT_API_KEY")!;

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

    // Prepare request body for external API
    const apiRequestBody: AgentCreateRequest = {
      entity_type: formData.entity_type || 'municipal',
      primary_name: formData.primary_name,
      secondary_name: formData.secondary_name,
      region: formData.region || 'Texas',
      phone_area_code: formData.phone_area_code,
      specialization: formData.specialization || 'General Services',
      website: formData.website || undefined,
      provision_kb: formData.provision_kb || false,
      enhanced_crawl: formData.enhanced_crawl || false,
      crawl_max_pages: formData.crawl_max_pages || 10,
      crawl_max_depth: formData.crawl_max_depth || 2,
    };

    console.log("Calling external API with:", JSON.stringify(apiRequestBody));

    // Call external API
    let apiResponse: Response;
    let apiData: any;
    let apiStatus = 'failed';

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
      apiStatus = apiResponse.ok ? 'success' : 'failed';

      console.log("API Response:", JSON.stringify(apiData));
    } catch (apiError) {
      console.error("API call failed:", apiError);
      apiData = { error: apiError instanceof Error ? apiError.message : "API call failed" };
    }

    // Log to database
    const { error: logError } = await supabase
      .from('civic_gift_logs')
      .insert({
        email: email.trim().toLowerCase(),
        entity_type: apiRequestBody.entity_type,
        primary_name: apiRequestBody.primary_name,
        secondary_name: apiRequestBody.secondary_name,
        region: apiRequestBody.region,
        phone_area_code: apiRequestBody.phone_area_code,
        specialization: apiRequestBody.specialization,
        website: apiRequestBody.website,
        provision_kb: apiRequestBody.provision_kb,
        enhanced_crawl: apiRequestBody.enhanced_crawl,
        crawl_max_pages: apiRequestBody.crawl_max_pages,
        crawl_max_depth: apiRequestBody.crawl_max_depth,
        phone_number_returned: apiData?.phone_number || null,
        agent_id: apiData?.agent_id || null,
        api_status: apiStatus,
        api_response: apiData,
        ip_address: ipAddress || null,
        user_agent: userAgent || null,
      });

    if (logError) {
      console.error("Error logging to database:", logError);
    }

    if (apiStatus === 'success') {
      return new Response(
        JSON.stringify({
          success: true,
          phone_number: apiData.phone_number,
          agent_id: apiData.agent_id,
          name: apiData.name,
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({
          error: apiData?.error || apiData?.detail || "Failed to provision agent",
          details: apiData,
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

  } catch (error) {
    console.error("Error in civic-gift-provision:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
