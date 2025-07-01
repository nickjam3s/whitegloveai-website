
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@3.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const resendApiKey = Deno.env.get("RESEND_API_KEY")!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const resend = new Resend(resendApiKey);

// Simple template renderer (Handlebars-like)
function renderTemplate(template: string, variables: Record<string, any>): string {
  let rendered = template;
  
  // Replace simple variables like {{variable}}
  for (const [key, value] of Object.entries(variables)) {
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
    rendered = rendered.replace(regex, value || '');
  }
  
  // Handle simple conditionals like {{#if variable}} ... {{/if}}
  rendered = rendered.replace(/{{#if\s+(\w+)}}([\s\S]*?){{\/if}}/g, (match, varName, content) => {
    return variables[varName] ? content : '';
  });
  
  return rendered;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { campaignId } = await req.json();

    if (!campaignId) {
      throw new Error("Campaign ID is required");
    }

    // Get campaign details with post
    const { data: campaign, error: campaignError } = await supabase
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
      .eq("id", campaignId)
      .single();

    if (campaignError || !campaign) {
      throw new Error("Campaign not found");
    }

    if (campaign.status === "sent") {
      throw new Error("Campaign has already been sent");
    }

    // Get active subscribers
    const { data: subscribers, error: subscribersError } = await supabase
      .from("subscribers")
      .select("*")
      .eq("status", "active");

    if (subscribersError) {
      throw new Error("Failed to fetch subscribers");
    }

    if (!subscribers || subscribers.length === 0) {
      throw new Error("No active subscribers found");
    }

    // Get email template
    const { data: template, error: templateError } = await supabase
      .from("email_templates")
      .select("*")
      .eq("name", "whiteglove_newsletter")
      .eq("is_active", true)
      .single();

    if (templateError || !template) {
      throw new Error("Email template not found");
    }

    const post = campaign.posts;
    const baseUrl = "https://whitegloveai.com";
    
    // Prepare template variables
    const templateVars = {
      subject: campaign.subject,
      title: post?.title || "Newsletter",
      content: post?.content || "",
      excerpt: post?.excerpt || "",
      featured_image: post?.featured_image || "",
      post_url: post?.slug ? `${baseUrl}/blog/${post.slug}` : "",
    };

    const emailPromises = subscribers.map(async (subscriber) => {
      const subscriberVars = {
        ...templateVars,
        unsubscribe_url: `${baseUrl}/unsubscribe?token=${subscriber.unsubscribe_token}`,
        preferences_url: `${baseUrl}/preferences?token=${subscriber.unsubscribe_token}`,
      };

      const renderedSubject = renderTemplate(template.subject_template, subscriberVars);
      const renderedHtml = renderTemplate(template.html_template, subscriberVars);

      try {
        const result = await resend.emails.send({
          from: "WhitegloveAI <newsletter@whitegloveai.com>",
          to: [subscriber.email],
          subject: renderedSubject,
          html: renderedHtml,
        });

        // Update last email sent timestamp
        await supabase
          .from("subscribers")
          .update({ last_email_sent_at: new Date().toISOString() })
          .eq("id", subscriber.id);

        return { success: true, email: subscriber.email, result };
      } catch (error) {
        console.error(`Failed to send email to ${subscriber.email}:`, error);
        return { success: false, email: subscriber.email, error: error.message };
      }
    });

    const results = await Promise.all(emailPromises);
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);

    // Update campaign status
    const { error: updateError } = await supabase
      .from("email_campaigns")
      .update({
        status: failed.length > 0 ? "sent" : "sent", // Could be "partial" if some failed
        sent_at: new Date().toISOString(),
        recipient_count: successful.length,
      })
      .eq("id", campaignId);

    if (updateError) {
      console.error("Error updating campaign:", updateError);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `Campaign sent to ${successful.length} subscribers`,
        sent: successful.length,
        failed: failed.length,
        results: results,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in send-campaign:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
