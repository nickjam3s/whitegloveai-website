
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { token, reason, feedback } = await req.json();

    if (!token) {
      throw new Error("Unsubscribe token is required");
    }

    // Find subscriber by unsubscribe token
    const { data: subscriber, error: findError } = await supabase
      .from("subscribers")
      .select("*")
      .eq("unsubscribe_token", token)
      .single();

    if (findError || !subscriber) {
      throw new Error("Invalid unsubscribe token");
    }

    // Update subscriber status
    const { error: updateError } = await supabase
      .from("subscribers")
      .update({
        status: "unsubscribed",
        unsubscribed_at: new Date().toISOString(),
        unsubscribe_reason: reason,
      })
      .eq("id", subscriber.id);

    if (updateError) throw updateError;

    // Log unsubscribe request
    const { error: logError } = await supabase
      .from("unsubscribe_requests")
      .insert({
        subscriber_id: subscriber.id,
        token,
        reason,
        feedback,
        ip_address: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip"),
        user_agent: req.headers.get("user-agent"),
        processed_at: new Date().toISOString(),
      });

    if (logError) console.error("Error logging unsubscribe request:", logError);

    return new Response(
      JSON.stringify({ 
        message: "Successfully unsubscribed",
        email: subscriber.email 
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in handle-unsubscribe:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
