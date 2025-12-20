import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ConfirmationEmailRequest {
  email: string;
  firstName?: string;
  lastName?: string;
  title?: string;
  entityName: string;
  requestId: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, firstName, lastName, title, entityName, requestId }: ConfirmationEmailRequest = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log(`Sending confirmation email to ${email} for request ${requestId}`);

    const calendarLink = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ06roEHldr-EaUSD3PSphSeCF8OVWb3NzT5PjfDxwMMpLfZX2v15Dzk4Bj02xtMwXVZMxHv2mkN";
    const voiceAiLink = "https://whitegloveai.com/communications-ai/voice-ai";
    const logoUrl = "https://whitegloveai.com/lovable-uploads/cbc85045-41f1-434b-a70d-69aca08e4e66.png";
    
    // Build personalized greeting
    let greeting = "Hello";
    if (firstName) {
      greeting = `Hello ${firstName}`;
      if (title) {
        greeting = `Hello ${firstName} (${title})`;
      }
    }

    const emailResponse = await resend.emails.send({
      from: "Civic Marketplace <noreply@whitegloveai.com>",
      to: [email],
      cc: ["nick@whitegloveai.com", "rachel.hirsch@civicmarketplace.com"],
      bcc: ["andi@whitegloveai.com", "vanessa@whitegloveai.com", "tobalo@whitegloveai.com"],
      subject: "We've Received Your AI Voice Agent Demo Request",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #0f0a1e; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0f0a1e;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px;">
                  
                  <!-- Logo Header -->
                  <tr>
                    <td style="text-align: center; padding: 20px 0 30px 0;">
                      <img src="${logoUrl}" alt="Civic Marketplace" style="height: 100px; width: auto;" />
                    </td>
                  </tr>
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); padding: 30px; border-radius: 16px 16px 0 0; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                        Thank You for Your Request!
                      </h1>
                      <p style="margin: 10px 0 0 0; color: #fef08a; font-size: 16px; font-weight: 600;">Your 30-Day Demo Request is Being Reviewed</p>
                    </td>
                  </tr>
                  
                  <!-- Main Content -->
                  <tr>
                    <td style="background-color: #1a1025; padding: 40px 30px; border-radius: 0 0 16px 16px;">
                      
                      <!-- Personalized Greeting -->
                      <p style="margin: 0 0 25px 0; color: #ffffff; font-size: 18px;">${greeting},</p>
                      <p style="margin: 0 0 25px 0; color: #d1d5db; font-size: 15px; line-height: 1.6;">
                        Thank you for requesting a complimentary AI Voice Agent demo for <strong style="color: #a78bfa;">${entityName}</strong>!
                      </p>
                      
                      <!-- Request Reference Box -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="background-color: #261c38; padding: 20px; border-radius: 12px; text-align: center;">
                            <p style="margin: 0 0 5px 0; color: #a78bfa; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Request Reference</p>
                            <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 600; font-family: monospace;">${requestId.slice(0, 8).toUpperCase()}</p>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- What Happens Next -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="padding: 20px; background-color: #261c38; border-radius: 12px;">
                            <h2 style="margin: 0 0 20px 0; color: #ffffff; font-size: 18px;">What Happens Next?</h2>
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                              <tr>
                                <td style="padding: 10px 0;">
                                  <table role="presentation" cellspacing="0" cellpadding="0">
                                    <tr>
                                      <td style="vertical-align: top; padding-right: 15px;">
                                        <span style="display: inline-block; width: 28px; height: 28px; background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); border-radius: 50%; text-align: center; line-height: 28px; color: #ffffff; font-weight: 600; font-size: 14px;">1</span>
                                      </td>
                                      <td style="vertical-align: middle;">
                                        <p style="margin: 0; color: #d1d5db; font-size: 14px;">Our team will review your request (typically within <strong style="color: #ffffff;">1 business day</strong>)</p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 10px 0;">
                                  <table role="presentation" cellspacing="0" cellpadding="0">
                                    <tr>
                                      <td style="vertical-align: top; padding-right: 15px;">
                                        <span style="display: inline-block; width: 28px; height: 28px; background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); border-radius: 50%; text-align: center; line-height: 28px; color: #ffffff; font-weight: 600; font-size: 14px;">2</span>
                                      </td>
                                      <td style="vertical-align: middle;">
                                        <p style="margin: 0; color: #d1d5db; font-size: 14px;">Once approved, you'll receive an email with your <strong style="color: #ffffff;">dedicated AI phone number</strong></p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 10px 0;">
                                  <table role="presentation" cellspacing="0" cellpadding="0">
                                    <tr>
                                      <td style="vertical-align: top; padding-right: 15px;">
                                        <span style="display: inline-block; width: 28px; height: 28px; background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); border-radius: 50%; text-align: center; line-height: 28px; color: #ffffff; font-weight: 600; font-size: 14px;">3</span>
                                      </td>
                                      <td style="vertical-align: middle;">
                                        <p style="margin: 0; color: #d1d5db; font-size: 14px;">Your <strong style="color: #fef08a;">30-day demo</strong> begins the moment you receive your number!</p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Partnership Badge -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="text-align: center; padding: 20px; background-color: #261c38; border-radius: 12px;">
                            <p style="margin: 0 0 5px 0; color: #d8b4fe; font-size: 14px;">This demo is brought to you by</p>
                            <p style="margin: 0 0 10px 0; color: #ffffff; font-size: 18px; font-weight: 600;">Civic Marketplace × WhitegloveAI</p>
                            <p style="margin: 0; color: #10b981; font-size: 13px; font-weight: 500;">TXShare Approved Vendor | Contract #2025-023</p>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- While You Wait Section -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="border-top: 1px solid #374151; padding-top: 30px;">
                            <h2 style="margin: 0 0 15px 0; color: #ffffff; font-size: 18px;">While You Wait...</h2>
                            <p style="margin: 0 0 20px 0; color: #d1d5db; font-size: 15px; line-height: 1.6;">
                              Learn more about how VoiceAI is transforming constituent services for government agencies across Texas.
                            </p>
                            <table role="presentation" cellspacing="0" cellpadding="0">
                              <tr>
                                <td style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); border-radius: 8px;">
                                  <a href="${voiceAiLink}" style="display: inline-block; padding: 14px 28px; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 15px;">Explore VoiceAI →</a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Calendar CTA -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="border-top: 1px solid #374151; padding-top: 30px; text-align: center;">
                            <h2 style="margin: 0 0 15px 0; color: #ffffff; font-size: 18px;">Have Questions?</h2>
                            <p style="margin: 0 0 20px 0; color: #d1d5db; font-size: 15px; line-height: 1.6;">Schedule a complimentary discovery call with Davis Bhagat, Founder of WhitegloveAI.</p>
                            <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                              <tr>
                                <td style="border: 2px solid #7c3aed; border-radius: 8px;">
                                  <a href="${calendarLink}" style="display: inline-block; padding: 14px 28px; color: #a78bfa; text-decoration: none; font-weight: 600; font-size: 15px;">Schedule Your Call →</a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Footer -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="border-top: 1px solid #374151; padding-top: 25px; text-align: center;">
                            <p style="margin: 0 0 10px 0; color: #9ca3af; font-size: 13px;">Questions? Reply to this email or visit <a href="https://whitegloveai.com" style="color: #a78bfa;">whitegloveai.com</a></p>
                            <p style="margin: 0; color: #6b7280; font-size: 12px;">© 2024 WhitegloveAI. All rights reserved.</p>
                          </td>
                        </tr>
                      </table>
                      
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    console.log("Confirmation email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending confirmation email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
