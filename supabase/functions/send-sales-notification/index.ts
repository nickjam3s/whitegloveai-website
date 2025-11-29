import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SalesNotificationData {
  orderNumber: string;
  customerEmail: string;
  firstName: string;
  lastName: string;
  courses: Array<{
    name: string;
    quantity: number;
    price: number;
    language?: string;
  }>;
  totalAmount: number;
  currency: string;
  orderDate: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: SalesNotificationData = await req.json();
    
    console.log("Sending sales notification for order:", data.orderNumber);

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    // Format the order date
    const orderDate = new Date(data.orderDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Build courses list HTML with per-course language
    const coursesHtml = data.courses.map(course => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
          ${course.name}
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: center;">
          ${course.language || 'English'}
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: center;">
          ${course.quantity}
        </td>
      </tr>
    `).join('');

    const totalFormatted = (data.totalAmount / 100).toFixed(2);

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Order - ${data.orderNumber}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; background-color: #f9fafb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <!-- Header with purple bar -->
    <tr>
      <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">
          New Course Purchase
        </h1>
      </td>
    </tr>

    <!-- Content -->
    <tr>
      <td style="padding: 40px 30px;">
        <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 20px 0;">
          Order Details
        </h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Order Number:</td>
              <td style="padding: 8px 0; color: #1f2937; font-weight: 600; text-align: right;">${data.orderNumber}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Order Date:</td>
              <td style="padding: 8px 0; color: #1f2937; text-align: right;">${orderDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Total Amount:</td>
              <td style="padding: 8px 0; color: #1f2937; font-weight: 600; text-align: right;">$${totalFormatted} ${data.currency}</td>
            </tr>
          </table>
        </div>

        <h3 style="color: #1f2937; font-size: 18px; margin: 0 0 15px 0;">
          Customer Information
        </h3>
        
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Name:</td>
            <td style="padding: 8px 0; color: #1f2937; text-align: right;">${data.firstName} ${data.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email:</td>
            <td style="padding: 8px 0; color: #1f2937; text-align: right;">${data.customerEmail}</td>
          </tr>
        </table>

        <h3 style="color: #1f2937; font-size: 18px; margin: 0 0 15px 0;">
          Courses Purchased
        </h3>
        
        <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <thead>
            <tr style="background-color: #f9fafb;">
              <th style="padding: 12px; text-align: left; color: #6b7280; font-weight: 600; font-size: 14px;">Course Name</th>
              <th style="padding: 12px; text-align: center; color: #6b7280; font-weight: 600; font-size: 14px;">Language</th>
              <th style="padding: 12px; text-align: center; color: #6b7280; font-weight: 600; font-size: 14px;">Qty</th>
            </tr>
          </thead>
          <tbody>
            ${coursesHtml}
          </tbody>
        </table>

        <div style="margin-top: 30px; padding: 20px; background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px;">
          <p style="margin: 0; color: #92400e; font-size: 14px; line-height: 1.5;">
            <strong>Action Required:</strong> Please manually register this customer in the AICerts portal with the information provided above. Ensure each course is registered in the correct language as specified.
          </p>
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 30px; background-color: #f9fafb; text-align: center; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0; color: #6b7280; font-size: 12px;">
          This is an automated sales notification from WhitegloveAI Training Platform
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "WhitegloveAI Training <training@whitegloveai.com>",
      to: ["sales@whitegloveai.com"],
      subject: `New Training Order: ${data.orderNumber} - ${data.firstName} ${data.lastName}`,
      html: htmlContent,
    });

    if (emailError) {
      console.error("Error sending sales notification:", emailError);
      throw emailError;
    }

    console.log("Sales notification sent successfully:", emailData);

    return new Response(
      JSON.stringify({ success: true, messageId: emailData?.id }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-sales-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
