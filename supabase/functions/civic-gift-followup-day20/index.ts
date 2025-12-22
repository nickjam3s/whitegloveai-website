import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface FollowupEmailRequest {
  logId: string;
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
    const { logId }: FollowupEmailRequest = await req.json();

    if (!logId) {
      return new Response(
        JSON.stringify({ error: "logId is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch the log entry
    const { data: logEntry, error: fetchError } = await supabase
      .from("civic_gift_logs")
      .select("*")
      .eq("id", logId)
      .single();

    if (fetchError || !logEntry) {
      console.error("Error fetching log entry:", fetchError);
      return new Response(
        JSON.stringify({ error: "Log entry not found" }),
        { status: 404, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Check if already sent
    if (logEntry.followup_email_2_sent_at) {
      return new Response(
        JSON.stringify({ error: "Follow-up email 2 already sent", sentAt: logEntry.followup_email_2_sent_at }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { email, phone_number_returned, primary_name, first_name, title } = logEntry;
    const agentName = `${primary_name} AI Assistant`;
    const formattedPhone = formatPhoneNumber(phone_number_returned || "");

    const calendarLink = "https://calendar.app.google/P2eTw6TjUkiYALtZ8";
    const logoUrl = "https://whitegloveai.com/lovable-uploads/cbc85045-41f1-434b-a70d-69aca08e4e66.png";

    // Build personalized greeting
    let greeting = "Hello";
    if (first_name) {
      greeting = `Hello ${first_name}`;
      if (title) {
        greeting = `Hello ${first_name} (${title})`;
      }
    }

    console.log(`Sending Day 20 follow-up email to ${email} for ${agentName}`);

    const emailResponse = await resend.emails.send({
      from: "Civic Marketplace <noreply@whitegloveai.com>",
      to: [email],
      cc: ["nick@whitegloveai.com", "rachel.hirsch@civicmarketplace.com", "andi@whitegloveai.com"],
      subject: `💡 Demo Tip #2: Test Real Constituent Scenarios – ${agentName}`,
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
                  
                  <!-- Tip Badge -->
                  <tr>
                    <td style="text-align: center; padding-bottom: 20px;">
                      <span style="display: inline-block; background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); color: #ffffff; font-size: 12px; font-weight: 700; padding: 8px 16px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">Demo Tip #2</span>
                    </td>
                  </tr>
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); padding: 30px; border-radius: 16px 16px 0 0; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 700;">
                        Test Real Constituent Scenarios
                      </h1>
                      <p style="margin: 10px 0 0 0; color: #fef08a; font-size: 15px; font-weight: 600;">Halfway through your 30-day demo!</p>
                    </td>
                  </tr>
                  
                  <!-- Main Content -->
                  <tr>
                    <td style="background-color: #1a1025; padding: 40px 30px; border-radius: 0 0 16px 16px;">
                      
                      <!-- Personalized Greeting -->
                      <p style="margin: 0 0 25px 0; color: #ffffff; font-size: 18px;">${greeting},</p>
                      
                      <p style="margin: 0 0 20px 0; color: #d1d5db; font-size: 15px; line-height: 1.7;">
                        Halfway through your demo! Now's the perfect time to put your AI agent through its paces with real-world scenarios.
                      </p>
                      
                      <p style="margin: 0 0 25px 0; color: #d1d5db; font-size: 15px; line-height: 1.7;">
                        The questions your constituents ask most frequently are the best test. Try calling with actual queries you receive daily.
                      </p>
                      
                      <!-- Phone Number Reminder Box -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); padding: 3px; border-radius: 12px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                              <tr>
                                <td style="background-color: #1a1025; padding: 20px; border-radius: 10px; text-align: center;">
                                  <p style="margin: 0 0 8px 0; color: #a78bfa; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Your Agent Phone Number</p>
                                  <p style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: 2px;">${formattedPhone}</p>
                                  <p style="margin: 10px 0 0 0; color: #9ca3af; font-size: 13px;">Agent: ${agentName}</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Scenario Testing Tips -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="background-color: #261c38; padding: 25px; border-radius: 12px;">
                            <h3 style="margin: 0 0 15px 0; color: #ffffff; font-size: 18px;">🎯 Scenarios to Test</h3>
                            <ul style="margin: 0; padding-left: 20px; color: #d1d5db; font-size: 14px; line-height: 2;">
                              <li><strong style="color: #ffffff;">Common questions</strong> — "What are your hours?" "Where is your office?"</li>
                              <li><strong style="color: #ffffff;">Service inquiries</strong> — "How do I apply for a permit?" "What documents do I need?"</li>
                              <li><strong style="color: #ffffff;">Edge cases</strong> — Ask about topics not on your website to see how the agent handles gaps</li>
                              <li><strong style="color: #ffffff;">Complex scenarios</strong> — Multi-part questions that require detailed responses</li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Notice Gaps Section -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 0 8px 8px 0;">
                            <h4 style="margin: 0 0 10px 0; color: #f59e0b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Notice Any Gaps?</h4>
                            <p style="margin: 0; color: #d1d5db; font-size: 14px; line-height: 1.7;">
                              That's valuable feedback! Your demo agent was built from your public website. Full production deployments include:
                            </p>
                            <ul style="margin: 15px 0 0 0; padding-left: 20px; color: #d1d5db; font-size: 14px; line-height: 1.8;">
                              <li><strong style="color: #ffffff;">Custom knowledge base training</strong> — We add internal policies, procedures, and FAQs</li>
                              <li><strong style="color: #ffffff;">Content review</strong> — Your team approves every response before going live</li>
                              <li><strong style="color: #ffffff;">Ongoing updates</strong> — Knowledge base stays current as your services change</li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Going Live CTA -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="background-color: #10b981; padding: 25px; border-radius: 12px; text-align: center;">
                            <h3 style="margin: 0 0 10px 0; color: #ffffff; font-size: 18px;">Want to See More?</h3>
                            <p style="margin: 0 0 20px 0; color: #ffffff; font-size: 15px; opacity: 0.9;">
                              Let's talk about custom training. We can go live in just <strong>6 weeks</strong>.
                            </p>
                            <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                              <tr>
                                <td style="background-color: #ffffff; border-radius: 8px;">
                                  <a href="${calendarLink}" style="display: inline-block; padding: 14px 28px; color: #10b981; text-decoration: none; font-weight: 700; font-size: 15px;">Schedule a Call with Nick →</a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Partnership Badge -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="text-align: center; padding: 15px; background-color: #261c38; border-radius: 12px;">
                            <p style="margin: 0 0 5px 0; color: #d8b4fe; font-size: 13px;">Civic Marketplace × WhitegloveAI</p>
                            <p style="margin: 0; color: #10b981; font-size: 12px; font-weight: 500;">TXShare Approved Vendor | Contract #2025-023</p>
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

    console.log("Day 20 follow-up email sent successfully:", emailResponse);

    // Update the log entry
    const { error: updateError } = await supabase
      .from("civic_gift_logs")
      .update({ followup_email_2_sent_at: new Date().toISOString() })
      .eq("id", logId);

    if (updateError) {
      console.error("Error updating log entry:", updateError);
    }

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in civic-gift-followup-day20:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
