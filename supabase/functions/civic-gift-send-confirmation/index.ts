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

    const calendarLink = "https://calendar.app.google/P2eTw6TjUkiYALtZ8";
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
                            <table role="presentation" cellspacing="0" cellpadding="0" style="margin-bottom: 15px;">
                              <tr>
                                <td style="vertical-align: middle; padding-right: 10px;">
                                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </td>
                                <td style="vertical-align: middle;">
                                  <h2 style="margin: 0; color: #ffffff; font-size: 18px;">What Happens Next?</h2>
                                </td>
                              </tr>
                            </table>
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
                            
                            <!-- Multilingual Preview -->
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #374151;">
                              <tr>
                                <td>
                                  <table role="presentation" cellspacing="0" cellpadding="0">
                                    <tr>
                                      <td style="vertical-align: middle; padding-right: 10px;">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.913 17H20.087M12.913 17L11 21M12.913 17L15.7783 11.009C16.0092 10.5263 16.1246 10.2849 16.2826 10.2086C16.4199 10.1423 16.5801 10.1423 16.7174 10.2086C16.8754 10.2849 16.9908 10.5263 17.2217 11.009L20.087 17M20.087 17L22 21M2 5H8M8 5H11.5M8 5V3M11.5 5H14M11.5 5C11.0039 7.95729 9.85259 10.6362 8.16555 12.5M10 14.5C9.22517 13.8033 8.41417 12.9242 7.5777 11.8853M8.16555 12.5C7.33475 13.5334 6.34285 14.4005 5.28792 15.0801M8.16555 12.5C8.65787 11.8935 9.11769 11.2288 9.53856 10.5" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                      </td>
                                      <td style="vertical-align: middle;">
                                        <p style="margin: 0; color: #d1d5db; font-size: 14px;">
                                          <strong style="color: #a78bfa;">Multilingual Ready:</strong> Your agent will speak <strong style="color: #fef08a;">30+ languages</strong> with automatic detection—try switching languages mid-call!
                                        </p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Knowledge Expectations -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 0 8px 8px 0;">
                            <table role="presentation" cellspacing="0" cellpadding="0" style="margin-bottom: 10px;">
                              <tr>
                                <td style="vertical-align: middle; padding-right: 10px;">
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </td>
                                <td style="vertical-align: middle;">
                                  <p style="margin: 0; color: #f59e0b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">What to Expect</p>
                                </td>
                              </tr>
                            </table>
                            <p style="margin: 0; color: #d1d5db; font-size: 14px; line-height: 1.7;">
                              Your AI agent will be built by automatically scanning your organization's public website for key information such as office hours, contact details, services, and common procedures. While we strive to capture the most relevant content, the agent's knowledge is only as complete as the information publicly available on your website. Full production deployments include custom training and comprehensive content review.
                            </p>
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
                            <p style="margin: 0; color: #6b7280; font-size: 12px;">© 2025 WhitegloveAI. All rights reserved.</p>
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
