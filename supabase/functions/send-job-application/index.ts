import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface JobApplicationRequest {
  name: string;
  email: string;
  phone?: string;
  positionInterest?: string;
  message?: string;
  resumeUrl?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, positionInterest, message, resumeUrl }: JobApplicationRequest = await req.json();

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Send notification to hiring manager
    const notificationEmail = await resend.emails.send({
      from: "WhitegloveAI Careers <careers@whitegloveai.com>",
      to: ["nick@whitegloveai.com"],
      subject: `New Job Application: ${name}${positionInterest ? ` - ${positionInterest}` : ''}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #7021EE, #9b4dff); padding: 30px; border-radius: 10px 10px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: bold; color: #7021EE; margin-bottom: 5px; }
            .field-value { background: white; padding: 10px 15px; border-radius: 5px; border-left: 3px solid #7021EE; }
            .resume-link { display: inline-block; background: #7021EE; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; margin-top: 10px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📋 New Job Application</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Applicant Name</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="field-label">Phone Number</div>
                <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}
              
              ${positionInterest ? `
              <div class="field">
                <div class="field-label">Position of Interest</div>
                <div class="field-value">${positionInterest}</div>
              </div>
              ` : ''}
              
              ${message ? `
              <div class="field">
                <div class="field-label">About the Applicant</div>
                <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
              
              ${resumeUrl ? `
              <div class="field">
                <div class="field-label">Resume</div>
                <a href="${resumeUrl}" class="resume-link">📄 Download Resume</a>
              </div>
              ` : '<p style="color: #666; font-style: italic;">No resume attached</p>'}
            </div>
            <div class="footer">
              This application was submitted through the WhitegloveAI careers page.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Send confirmation to applicant
    const confirmationEmail = await resend.emails.send({
      from: "WhitegloveAI Careers <careers@whitegloveai.com>",
      to: [email],
      subject: "We received your application - WhitegloveAI",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #7021EE, #9b4dff); padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Applying!</h1>
            </div>
            <div class="content">
              <p>Hi ${name},</p>
              
              <p>Thank you for your interest in joining WhitegloveAI! We've received your application and our team will review it carefully.</p>
              
              <p>If your qualifications match our current needs, we'll reach out to schedule a conversation. In the meantime, feel free to explore more about our work at <a href="https://whitegloveai.com">whitegloveai.com</a>.</p>
              
              <p>Best regards,<br>
              <strong>The WhitegloveAI Team</strong></p>
            </div>
            <div class="footer">
              <p>WhitegloveAI | 5 Cowboys Way, Suite 300, Frisco, TX 75034</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(
      JSON.stringify({ success: true, message: "Application submitted successfully" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-job-application function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
