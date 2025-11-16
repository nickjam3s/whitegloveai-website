import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { session_id } = await req.json();
    
    if (!session_id) {
      throw new Error("Session ID is required");
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    console.log("Fetching checkout session:", session_id);

    // Retrieve the checkout session with expanded discount data
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['total_details.breakdown']
    });

    console.log("Session retrieved successfully");

    // Extract discount information
    let discountInfo = null;
    if (session.total_details?.amount_discount && session.total_details.amount_discount > 0) {
      discountInfo = {
        amount_saved: session.total_details.amount_discount,
        code: session.discount_codes?.[0]?.code || "PROMO",
        currency: session.currency,
      };
      console.log("Discount applied:", discountInfo);
    }

    return new Response(JSON.stringify({ 
      discount: discountInfo,
      amount_total: session.amount_total,
      amount_subtotal: session.amount_subtotal,
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching checkout session:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
