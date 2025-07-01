
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@3.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const resendApiKey = Deno.env.get("RESEND_API_KEY")!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const resend = new Resend(resendApiKey);

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, source } = await req.json();

    if (!email) {
      throw new Error("Email is required");
    }

    // Generate confirmation token
    const confirmationToken = crypto.randomUUID();

    // Check if subscriber already exists
    const { data: existingSubscriber } = await supabase
      .from("subscribers")
      .select("*")
      .eq("email", email)
      .single();

    if (existingSubscriber && existingSubscriber.status === "active") {
      return new Response(
        JSON.stringify({ message: "Already subscribed", confirmed: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Insert or update subscriber
    const subscriberData = {
      email,
      status: "active", // For now, direct activation - can be changed to "pending" for double opt-in
      confirmation_token: confirmationToken,
      subscription_source: source || "website",
      double_opt_in: false, // Can be set to true to require email confirmation
      confirmed_at: new Date().toISOString(),
      unsubscribe_token: crypto.randomUUID(),
    };

    const { error: upsertError } = await supabase
      .from("subscribers")
      .upsert(subscriberData, { onConflict: "email" });

    if (upsertError) throw upsertError;

    // Send welcome email
    const confirmationUrl = `${req.headers.get("origin") || "https://whitegloveai.com"}/confirm?token=${confirmationToken}`;
    
    await resend.emails.send({
      from: "WhitegloveAI <noreply@whitegloveai.com>",
      to: [email],
      subject: "Welcome to WhitegloveAI Newsletter!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #000000; color: #ffffff;">
          <div style="background-color: #000000; padding: 20px; text-align: center; border-bottom: 1px solid #7021EE;">
            <h1 style="color: #7021EE; margin: 0; font-size: 24px; font-weight: bold;">WhitegloveAI</h1>
            <p style="color: #888888; margin: 5px 0 0 0; font-size: 12px;">Managed AI Service Provider™</p>
          </div>
          
          <div style="padding: 30px 20px;">
            <h2 style="color: #ffffff; margin-top: 0;">Welcome to our newsletter!</h2>
            <p style="color: #cccccc; line-height: 1.6;">
              Thank you for subscribing to WhitegloveAI's newsletter. You'll receive our latest insights on AI, technology, and industry updates.
            </p>
            <p style="color: #cccccc; line-height: 1.6;">
              You can <a href="${confirmationUrl}" style="color: #7021EE;">manage your preferences</a> or unsubscribe at any time.
            </p>
          </div>
          
          <div style="background-color: #111111; padding: 20px; text-align: center; border-top: 1px solid #333333;">
            <p style="color: #555555; margin: 0; font-size: 11px;">
              © 2025 WhitegloveAI LLC. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Successfully subscribed!", confirmed: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in send-confirmation:", error);
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
