
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
    const { token, preferences } = await req.json();

    if (!token) {
      throw new Error("Token is required");
    }

    // Find subscriber by unsubscribe token (using same token for preferences)
    const { data: subscriber, error: findError } = await supabase
      .from("subscribers")
      .select("*")
      .eq("unsubscribe_token", token)
      .single();

    if (findError || !subscriber) {
      throw new Error("Invalid token");
    }

    // Update subscriber preferences
    const { error: updateError } = await supabase
      .from("subscribers")
      .update({
        preferences: preferences,
      })
      .eq("id", subscriber.id);

    if (updateError) throw updateError;

    return new Response(
      JSON.stringify({ 
        message: "Preferences updated successfully",
        email: subscriber.email 
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in update-preferences:", error);
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
