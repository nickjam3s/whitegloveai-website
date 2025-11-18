import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2025-08-27.basil",
});

const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

serve(async (req) => {
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");

  if (!signature || !webhookSecret) {
    return new Response("Missing signature or webhook secret", { status: 400 });
  }

  try {
    const body = await req.text();
    const event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);

    console.log("Webhook event received:", event.type);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      
      console.log("Processing checkout session:", session.id);

      // Retrieve line items from the session
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
        expand: ['data.price.product'],
      });

      // Generate order number
      const { data: orderNumberData, error: orderNumberError } = await supabaseAdmin
        .rpc('generate_order_number');

      if (orderNumberError) {
        console.error("Error generating order number:", orderNumberError);
        throw orderNumberError;
      }

      const orderNumber = orderNumberData;
      console.log("Generated order number:", orderNumber);

      // Get customer email
      const customerEmail = session.customer_email || session.customer_details?.email;
      
      if (!customerEmail) {
        throw new Error("No customer email found in session");
      }

      // Create purchase records and prepare email data
      const courses = [];
      let totalAmount = 0;

      for (const item of lineItems.data) {
        const product = item.price?.product as Stripe.Product;
        const courseName = product?.name || "Unknown Course";
        const quantity = item.quantity || 1;
        const priceAmount = item.price?.unit_amount || 0;
        
        totalAmount += priceAmount * quantity;

        // Create purchase record
        const { error: purchaseError } = await supabaseAdmin
          .from("purchases")
          .insert({
            order_number: orderNumber,
            user_email: customerEmail,
            course_name: courseName,
            course_slug: product?.metadata?.slug || courseName.toLowerCase().replace(/\s+/g, '-'),
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
            course_slug: product?.metadata?.slug || courseName.toLowerCase().replace(/\s+/g, '-'),
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
          console.error("Failed to send email:", await emailResponse.text());
        } else {
          console.log("Order confirmation email sent successfully");
        }
      } catch (emailError) {
        console.error("Error sending confirmation email:", emailError);
        // Don't throw - email failure shouldn't block webhook processing
      }

      console.log("Webhook processing completed successfully");
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Webhook error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
});
