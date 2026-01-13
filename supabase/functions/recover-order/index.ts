import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );

  const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
    apiVersion: "2025-08-27.basil",
  });

  try {
    const { session_id } = await req.json();

    if (!session_id) {
      throw new Error("Session ID is required");
    }

    console.log("Recovering order for session:", session_id);

    // Retrieve the checkout session
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['line_items.data.price.product']
    });

    console.log("Session retrieved:", session.id);

    // Retrieve line items
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
      expand: ['data.price.product'],
    });

    // Parse items_data metadata for actual course names
    let itemsData: Array<{ courseName: string; language: string }> = [];
    if (session.metadata?.items_data) {
      try {
        itemsData = JSON.parse(session.metadata.items_data);
        console.log("Parsed items_data from metadata:", itemsData);
      } catch (e) {
        console.error("Failed to parse items_data:", e);
      }
    }

    // Generate order number
    const { data: orderNumberData, error: orderNumberError } = await supabaseAdmin
      .rpc('generate_order_number');

    if (orderNumberError) {
      console.error("Error generating order number:", orderNumberError);
      throw orderNumberError;
    }

    const orderNumber = orderNumberData;
    console.log("Generated order number:", orderNumber);

    // Get customer email and metadata
    const customerEmail = session.customer_email || session.customer_details?.email;
    const firstName = session.metadata?.first_name || "";
    const lastName = session.metadata?.last_name || "";
    const language = session.metadata?.language || "";
    
    if (!customerEmail) {
      throw new Error("No customer email found in session");
    }

    console.log("Customer details:", { customerEmail, firstName, lastName, language });

    // Create purchase records and prepare email data
    const courses: Array<{ name: string; quantity: number; price: number }> = [];
    let totalAmount = 0;

    for (let i = 0; i < lineItems.data.length; i++) {
      const item = lineItems.data[i];
      const product = item.price?.product as Stripe.Product;
      const quantity = item.quantity || 1;
      const priceAmount = item.price?.unit_amount || 0;
      
      // Get actual course name from metadata, fallback to Stripe product name
      const metadataItem = itemsData[i];
      const courseName = metadataItem?.courseName || product?.name || "Unknown Course";
      const itemLanguage = metadataItem?.language || language || "";
      
      console.log(`Processing item ${i}: courseName="${courseName}" (metadata: ${metadataItem?.courseName}, product: ${product?.name})`);
        
      totalAmount += priceAmount * quantity;

      // Generate course slug from actual course name
      const courseSlug = courseName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

      // Create purchase record with customer data
      const { error: purchaseError } = await supabaseAdmin
        .from("purchases")
        .insert({
          order_number: orderNumber,
          user_email: customerEmail,
          first_name: firstName,
          last_name: lastName,
          language: itemLanguage,
          course_name: courseName,
          course_slug: product?.metadata?.slug || courseSlug,
          quantity: quantity,
          amount_paid: priceAmount * quantity,
          currency: item.price?.currency?.toUpperCase() || "USD",
          stripe_payment_intent_id: session.payment_intent as string,
          stripe_checkout_session_id: session.id,
          status: "completed",
        });

      if (purchaseError) {
        console.error("Error creating purchase record:", purchaseError);
        throw purchaseError;
      }

      // Create license record
      const { error: licenseError } = await supabaseAdmin
        .from("user_licenses")
        .insert({
          user_email: customerEmail,
          course_name: courseName,
          course_slug: product?.metadata?.slug || courseSlug,
          quantity: quantity,
        });

      if (licenseError) {
        console.error("Error creating license record:", licenseError);
      }

      courses.push({
        name: courseName,
        quantity: quantity,
        price: priceAmount,
      });
    }

    // Send order confirmation email
    try {
      const emailResponse = await fetch(
        `${Deno.env.get("SUPABASE_URL")}/functions/v1/send-order-confirmation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`,
          },
          body: JSON.stringify({
            orderNumber,
            customerEmail,
            courses,
            totalAmount,
            currency: session.currency?.toUpperCase() || "USD",
          }),
        }
      );

      if (!emailResponse.ok) {
        console.error("Failed to send customer email:", await emailResponse.text());
      } else {
        console.log("Order confirmation email sent successfully");
      }
    } catch (emailError) {
      console.error("Error sending confirmation email:", emailError);
    }

    // Send sales notification email
    try {
      const salesEmailResponse = await fetch(
        `${Deno.env.get("SUPABASE_URL")}/functions/v1/send-sales-notification`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`,
          },
          body: JSON.stringify({
            orderNumber,
            customerEmail,
            firstName,
            lastName,
            language,
            courses,
            totalAmount,
            currency: session.currency?.toUpperCase() || "USD",
            orderDate: new Date().toISOString(),
          }),
        }
      );

      if (!salesEmailResponse.ok) {
        console.error("Failed to send sales notification:", await salesEmailResponse.text());
      } else {
        console.log("Sales notification email sent successfully");
      }
    } catch (salesEmailError) {
      console.error("Error sending sales notification:", salesEmailError);
    }

    console.log("Order recovery completed successfully");

    return new Response(JSON.stringify({ 
      success: true,
      orderNumber,
      customerEmail,
      coursesProcessed: courses.length
    }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Recovery error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
