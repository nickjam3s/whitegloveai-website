import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PhoneNumberEmailRequest {
  email: string;
  phoneNumber: string;
  agentId: string;
  agentName: string;
  firstName?: string;
  lastName?: string;
  title?: string;
}

// Format phone number as +1 000-000-0000
const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+1 ${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+1 ${cleaned.slice(1, 4)}-${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  return phone;
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, phoneNumber, agentId, agentName, firstName, lastName, title }: PhoneNumberEmailRequest = await req.json();

    // Handle comma-separated emails
    const emailList = email.split(',').map((e: string) => e.trim()).filter((e: string) => e.length > 0);
    
    if (emailList.length === 0) {
      return new Response(
        JSON.stringify({ error: "No valid email addresses provided" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log(`Sending phone number email to ${emailList.join(', ')}`);

    const calendarLink = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ06roEHldr-EaUSD3PSphSeCF8OVWb3NzT5PjfDxwMMpLfZX2v15Dzk4Bj02xtMwXVZMxHv2mkN";
    const voiceAiLink = "https://whitegloveai.com/communications-ai/voice-ai";
    const logoUrl = "https://whitegloveai.com/lovable-uploads/cbc85045-41f1-434b-a70d-69aca08e4e66.png";
    
    // Format the phone number
    const formattedPhone = formatPhoneNumber(phoneNumber);
    
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
      to: emailList,
      cc: ["nick@whitegloveai.com", "rachel.hirsch@civicmarketplace.com"],
      bcc: ["andi@whitegloveai.com", "vanessa@whitegloveai.com", "tobalo@whitegloveai.com"],
      subject: "🎁 Demo Approved! Your AI Voice Agent is Ready",
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
                  
                  <!-- Approval Banner -->
                  <tr>
                    <td style="background-color: #10b981; padding: 15px; text-align: center;">
                      <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                        <tr>
                          <td style="vertical-align: middle; padding-right: 10px;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                          </td>
                          <td style="vertical-align: middle;">
                            <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 700;">APPROVED — Your Demo Request Has Been Approved!</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); padding: 30px; border-radius: 0; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                        Your AI Voice Agent is Live!
                      </h1>
                      <p style="margin: 10px 0 0 0; color: #fef08a; font-size: 16px; font-weight: 600;">Your 30-Day Demo Starts Now</p>
                    </td>
                  </tr>
                  
                  <!-- Main Content -->
                  <tr>
                    <td style="background-color: #1a1025; padding: 40px 30px; border-radius: 0 0 16px 16px;">
                      
                      <!-- Personalized Greeting -->
                      <p style="margin: 0 0 25px 0; color: #ffffff; font-size: 18px;">${greeting},</p>
                      <p style="margin: 0 0 15px 0; color: #10b981; font-size: 16px; font-weight: 600; line-height: 1.6;">
                        Great news! Your demo request has been reviewed and approved.
                      </p>
                      <p style="margin: 0 0 25px 0; color: #d1d5db; font-size: 15px; line-height: 1.6;">
                        Your AI Voice Agent for <strong style="color: #a78bfa;">${agentName}</strong> is now active and ready to serve your constituents!
                      </p>
                      
                      <!-- Phone Number Box -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); padding: 3px; border-radius: 12px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                              <tr>
                                <td style="background-color: #1a1025; padding: 25px; border-radius: 10px; text-align: center;">
                                  <p style="margin: 0 0 10px 0; color: #a78bfa; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Your Agent Phone Number</p>
                                  <p style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: 2px;">${formattedPhone}</p>
                                  <p style="margin: 15px 0 0 0; color: #9ca3af; font-size: 14px;">Agent: ${agentName}</p>
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
                            <p style="margin: 0 0 5px 0; color: #d8b4fe; font-size: 14px;">This 30-day demo was brought to you by</p>
                            <p style="margin: 0 0 10px 0; color: #ffffff; font-size: 18px; font-weight: 600;">Civic Marketplace × WhitegloveAI</p>
                            <p style="margin: 0; color: #10b981; font-size: 13px; font-weight: 500;">TXShare Approved Vendor | Contract #2025-023</p>
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
                                  <p style="margin: 0; color: #f59e0b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Setting Expectations</p>
                                </td>
                              </tr>
                            </table>
                            <p style="margin: 0; color: #d1d5db; font-size: 14px; line-height: 1.7;">
                              Your AI agent's knowledge base was built by automatically scanning your organization's public website for key information such as office hours, contact details, services, and common procedures. While we strive to capture the most relevant content, the agent's responses are only as complete as the information available on your website. If you notice gaps or inaccuracies, please let us know—full production deployments include custom knowledge training and content review.
                            </p>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- How to Test Your Agent -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="border-top: 1px solid #374151; padding-top: 30px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" style="margin-bottom: 15px;">
                              <tr>
                                <td style="vertical-align: middle; padding-right: 10px;">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </td>
                                <td style="vertical-align: middle;">
                                  <h2 style="margin: 0; color: #ffffff; font-size: 20px;">How to Test Your Agent</h2>
                                </td>
                              </tr>
                            </table>
                            <p style="margin: 0 0 15px 0; color: #d1d5db; font-size: 15px; line-height: 1.6;">Call the number above and try these prompts:</p>
                            <ul style="margin: 0 0 20px 0; padding-left: 20px; color: #d1d5db; font-size: 14px; line-height: 1.8;">
                              <li>"What are your office hours?"</li>
                              <li>"How do I apply for a permit?"</li>
                            </ul>
                            
                            <!-- Language Testing Feature Box -->
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); padding: 3px; border-radius: 12px; margin-bottom: 20px;">
                              <tr>
                                <td>
                                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                    <tr>
                                      <td style="background-color: #1a1025; padding: 20px; border-radius: 10px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" style="margin-bottom: 12px;">
                                          <tr>
                                            <td style="vertical-align: middle; padding-right: 10px;">
                                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.913 17H20.087M12.913 17L11 21M12.913 17L15.7783 11.009C16.0092 10.5263 16.1246 10.2849 16.2826 10.2086C16.4199 10.1423 16.5801 10.1423 16.7174 10.2086C16.8754 10.2849 16.9908 10.5263 17.2217 11.009L20.087 17M20.087 17L22 21M2 5H8M8 5H11.5M8 5V3M11.5 5H14M11.5 5C11.0039 7.95729 9.85259 10.6362 8.16555 12.5M10 14.5C9.22517 13.8033 8.41417 12.9242 7.5777 11.8853M8.16555 12.5C7.33475 13.5334 6.34285 14.4005 5.28792 15.0801M8.16555 12.5C8.65787 11.8935 9.11769 11.2288 9.53856 10.5" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                            </td>
                                            <td style="vertical-align: middle;">
                                              <p style="margin: 0; color: #a78bfa; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Try This: Automatic Language Detection</p>
                                            </td>
                                          </tr>
                                        </table>
                                        <p style="margin: 0 0 12px 0; color: #ffffff; font-size: 15px; line-height: 1.6;">
                                          Your AI agent speaks <strong style="color: #fef08a;">30+ languages</strong> with automatic detection—no menus required!
                                        </p>
                                        <ul style="margin: 0; padding-left: 20px; color: #d1d5db; font-size: 14px; line-height: 1.8;">
                                          <li>Start speaking in English, then <strong style="color: #ffffff;">switch to Spanish mid-sentence</strong>—the agent follows seamlessly</li>
                                          <li>Try Vietnamese, Chinese, Arabic, or any language your constituents speak</li>
                                          <li>Have a bilingual colleague test the natural language switching</li>
                                        </ul>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #261c38; border-radius: 8px;">
                              <tr>
                                <td style="padding: 15px;">
                                  <table role="presentation" cellspacing="0" cellpadding="0" style="margin-bottom: 10px;">
                                    <tr>
                                      <td style="vertical-align: middle; padding-right: 8px;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66347 17H14.3364M12 3V4M18.364 5.63604L17.6569 6.34315M21 12H20M4 12H3M6.34309 6.34315L5.63599 5.63604M8.46441 15.5356C6.51179 13.5829 6.51179 10.4171 8.46441 8.46449C10.417 6.51187 13.5829 6.51187 15.5355 8.46449C17.4881 10.4171 17.4881 13.5829 15.5355 15.5356L14.9884 16.0827C14.3555 16.7155 14 17.5739 14 18.469V19C14 20.1046 13.1045 21 12 21C10.8954 21 9.99996 20.1046 9.99996 19V18.469C9.99996 17.5739 9.6445 16.7155 9.01151 16.0827L8.46441 15.5356Z" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                      </td>
                                      <td style="vertical-align: middle;">
                                        <p style="margin: 0; color: #a78bfa; font-size: 14px; font-weight: 600;">PRO TIPS</p>
                                      </td>
                                    </tr>
                                  </table>
                                  <ul style="margin: 0; padding-left: 20px; color: #d1d5db; font-size: 14px; line-height: 1.8;">
                                    <li>Your agent learned from your website—ask about anything mentioned there</li>
                                    <li>Text the number to test SMS capabilities</li>
                                    <li>Share with a colleague to experience concurrent call handling</li>
                                  </ul>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- VoiceAI CTA -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="border-top: 1px solid #374151; padding-top: 30px;">
                            <h2 style="margin: 0 0 15px 0; color: #ffffff; font-size: 20px;">Want More After Your 30-Day Demo?</h2>
                            <p style="margin: 0 0 20px 0; color: #d1d5db; font-size: 15px; line-height: 1.6;">Your 30-day demo is just the beginning. WhitegloveAI's VoiceAI platform offers:</p>
                            <ul style="margin: 0 0 20px 0; padding-left: 20px; color: #d1d5db; font-size: 14px; line-height: 1.8;">
                              <li><strong style="color: #ffffff;">Unlimited concurrent calls</strong> — never miss a constituent</li>
                              <li><strong style="color: #ffffff;">Website chat integration</strong> — same AI, dual channel</li>
                              <li><strong style="color: #ffffff;">Custom training</strong> — policies & procedures integration</li>
                              <li><strong style="color: #ffffff;">Analytics dashboard</strong> — call insights & reporting</li>
                              <li><strong style="color: #ffffff;">Human handoff</strong> — seamless escalation when needed</li>
                            </ul>
                            <p style="margin: 0 0 20px 0; color: #10b981; font-size: 14px;">All available through TXShare Contract #2025-023.</p>
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
                            <h2 style="margin: 0 0 15px 0; color: #ffffff; font-size: 20px;">Let's Talk</h2>
                            <p style="margin: 0 0 20px 0; color: #d1d5db; font-size: 15px; line-height: 1.6;">Ready to scale? Schedule a complimentary discovery call with Davis Bhagat, Founder of WhitegloveAI.</p>
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

    console.log("Phone number email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending phone number email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
