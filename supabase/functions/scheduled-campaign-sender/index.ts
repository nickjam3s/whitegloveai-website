
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const resendApiKey = Deno.env.get("RESEND_API_KEY");

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const resend = new Resend(resendApiKey);

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (!resendApiKey) {
    return new Response(
      JSON.stringify({ error: "Resend API key not configured" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  try {
    console.log("Running scheduled campaign sender...");

    // Find campaigns that are scheduled to be sent
    const { data: scheduledCampaigns, error: fetchError } = await supabase
      .from("email_campaigns")
      .select(`
        *,
        posts (
          title,
          content,
          excerpt,
          featured_image,
          slug
        )
      `)
      .eq("status", "draft")
      .not("scheduled_send_at", "is", null)
      .lte("scheduled_send_at", new Date().toISOString());

    if (fetchError) {
      console.error("Error fetching scheduled campaigns:", fetchError);
      throw fetchError;
    }

    if (!scheduledCampaigns || scheduledCampaigns.length === 0) {
      console.log("No campaigns to send");
      return new Response(
        JSON.stringify({ message: "No campaigns to send", sent: 0 }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Found ${scheduledCampaigns.length} campaigns to send`);

    // Get active subscribers
    const { data: subscribers, error: subscribersError } = await supabase
      .from("subscribers")
      .select("email")
      .eq("status", "active");

    if (subscribersError) {
      console.error("Error fetching subscribers:", subscribersError);
      throw subscribersError;
    }

    if (!subscribers || subscribers.length === 0) {
      console.log("No active subscribers found");
      return new Response(
        JSON.stringify({ message: "No active subscribers", sent: 0 }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send each campaign
    const sendPromises = scheduledCampaigns.map(async (campaign) => {
      try {
        const post = campaign.posts;
        if (!post) {
          throw new Error("No associated post found");
        }

        // Create email content
        const emailHtml = `
          <h1>${post.title}</h1>
          ${post.featured_image ? `<img src="${post.featured_image}" alt="${post.title}" style="max-width: 100%; height: auto;" />` : ''}
          <p>${post.excerpt}</p>
          <div>${post.content.replace(/\n/g, '<br />')}</div>
          <hr />
          <p><a href="${Deno.env.get("SUPABASE_URL")}/blog/${post.slug}">Read the full post</a></p>
        `;

        // Send email to all subscribers
        const { data: emailData, error: emailError } = await resend.emails.send({
          from: "Blog <noreply@yourdomain.com>",
          to: subscribers.map(s => s.email),
          subject: campaign.subject,
          html: emailHtml,
        });

        if (emailError) {
          throw emailError;
        }

        // Update campaign status
        const { error: updateError } = await supabase
          .from("email_campaigns")
          .update({
            status: "sent",
            sent_at: new Date().toISOString(),
            recipient_count: subscribers.length,
            scheduled_send_at: null,
          })
          .eq("id", campaign.id);

        if (updateError) {
          console.error(`Error updating campaign ${campaign.id}:`, updateError);
          return { id: campaign.id, success: false, error: updateError.message };
        }

        // Update post distribution status
        if (post) {
          await supabase
            .from("posts")
            .update({ distribution_status: "sent" })
            .eq("id", campaign.post_id);
        }

        console.log(`Sent campaign: ${campaign.subject}`);
        return { 
          id: campaign.id, 
          success: true, 
          subject: campaign.subject,
          recipients: subscribers.length 
        };
      } catch (error: any) {
        console.error(`Error sending campaign ${campaign.id}:`, error);
        
        // Update campaign status to failed
        await supabase
          .from("email_campaigns")
          .update({ status: "failed" })
          .eq("id", campaign.id);

        return { id: campaign.id, success: false, error: error.message };
      }
    });

    const results = await Promise.all(sendPromises);
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);

    return new Response(
      JSON.stringify({
        message: `Sent ${successful.length} campaigns`,
        sent: successful.length,
        failed: failed.length,
        results: results,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in scheduled campaign sender:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
