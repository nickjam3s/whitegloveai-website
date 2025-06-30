
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

interface SendCampaignRequest {
  campaignId: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { campaignId }: SendCampaignRequest = await req.json();
    console.log("Sending campaign:", campaignId);

    // Get campaign details
    const { data: campaign, error: campaignError } = await supabase
      .from("email_campaigns")
      .select(`
        *,
        posts (
          title,
          content,
          excerpt
        )
      `)
      .eq("id", campaignId)
      .single();

    if (campaignError || !campaign) {
      throw new Error("Campaign not found");
    }

    console.log("Campaign found:", campaign.subject);

    // Get active subscribers
    const { data: subscribers, error: subscribersError } = await supabase
      .from("subscribers")
      .select("email")
      .eq("status", "active");

    if (subscribersError) {
      throw new Error("Failed to fetch subscribers");
    }

    if (!subscribers || subscribers.length === 0) {
      throw new Error("No active subscribers found");
    }

    console.log(`Found ${subscribers.length} subscribers`);

    // Create email content
    const post = campaign.posts;
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">${post?.title || campaign.subject}</h1>
        ${post?.excerpt ? `<p style="font-size: 16px; color: #666; font-style: italic;">${post.excerpt}</p>` : ''}
        <div style="line-height: 1.6; color: #333;">
          ${post?.content ? post.content.split('\n').map(p => `<p>${p}</p>`).join('') : 'Content not available'}
        </div>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #999;">
          You received this email because you subscribed to our newsletter.
        </p>
      </div>
    `;

    // Send emails to all subscribers
    const emailPromises = subscribers.map(async (subscriber) => {
      try {
        const result = await resend.emails.send({
          from: "WhiteGlove AI <hello@whitegloveai.com>",
          to: [subscriber.email],
          subject: campaign.subject,
          html: emailContent,
        });
        console.log(`Email sent to ${subscriber.email}:`, result);
        return { success: true, email: subscriber.email };
      } catch (error) {
        console.error(`Failed to send to ${subscriber.email}:`, error);
        return { success: false, email: subscriber.email, error: error.message };
      }
    });

    const results = await Promise.all(emailPromises);
    const successCount = results.filter(r => r.success).length;
    const failureCount = results.filter(r => !r.success).length;

    console.log(`Campaign results: ${successCount} sent, ${failureCount} failed`);

    // Update campaign status
    const { error: updateError } = await supabase
      .from("email_campaigns")
      .update({
        status: "sent",
        recipient_count: subscribers.length,
        sent_at: new Date().toISOString(),
      })
      .eq("id", campaignId);

    if (updateError) {
      console.error("Failed to update campaign:", updateError);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `Campaign sent successfully to ${successCount} subscribers`,
        sent: successCount,
        failed: failureCount,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-campaign function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
