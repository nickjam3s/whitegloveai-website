import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";
import { renderAsync } from "npm:@react-email/components@0.0.22";
import React from "npm:react@18.3.1";
import { OrderConfirmationEmail } from "./_templates/order-confirmation.tsx";

const resend = new Resend(Deno.env.get("RESEND_API_KEY") as string);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface OrderDetails {
  orderNumber: string;
  customerEmail: string;
  courses: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  currency: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const orderDetails: OrderDetails = await req.json();

    console.log("Sending order confirmation email to:", orderDetails.customerEmail);

    const html = await renderAsync(
      React.createElement(OrderConfirmationEmail, {
        orderNumber: orderDetails.orderNumber,
        customerEmail: orderDetails.customerEmail,
        courses: orderDetails.courses,
        totalAmount: orderDetails.totalAmount,
        currency: orderDetails.currency,
        orderDate: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
      })
    );

    const { data, error } = await resend.emails.send({
      from: "WhitegloveAI Training <training@whitegloveai.com>",
      to: [orderDetails.customerEmail],
      subject: `Order Confirmation - ${orderDetails.orderNumber}`,
      html,
    });

    if (error) {
      console.error("Error sending email:", error);
      throw error;
    }

    console.log("Email sent successfully:", data);

    return new Response(
      JSON.stringify({ success: true, emailId: data?.id }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in send-order-confirmation:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
