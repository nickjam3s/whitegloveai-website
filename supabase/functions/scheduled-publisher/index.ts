
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Running scheduled publisher...");

    // Find posts that are scheduled to be published
    const { data: scheduledPosts, error: fetchError } = await supabase
      .from("posts")
      .select("*")
      .eq("status", "draft")
      .not("scheduled_at", "is", null)
      .lte("scheduled_at", new Date().toISOString());

    if (fetchError) {
      console.error("Error fetching scheduled posts:", fetchError);
      throw fetchError;
    }

    if (!scheduledPosts || scheduledPosts.length === 0) {
      console.log("No posts to publish");
      return new Response(
        JSON.stringify({ message: "No posts to publish", published: 0 }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Found ${scheduledPosts.length} posts to publish`);

    // Publish each post
    const publishPromises = scheduledPosts.map(async (post) => {
      const { error } = await supabase
        .from("posts")
        .update({
          status: "published",
          published_at: new Date().toISOString(),
          scheduled_at: null,
        })
        .eq("id", post.id);

      if (error) {
        console.error(`Error publishing post ${post.id}:`, error);
        return { id: post.id, success: false, error: error.message };
      }

      console.log(`Published post: ${post.title}`);
      return { id: post.id, success: true, title: post.title };
    });

    const results = await Promise.all(publishPromises);
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);

    return new Response(
      JSON.stringify({
        message: `Published ${successful.length} posts`,
        published: successful.length,
        failed: failed.length,
        results: results,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in scheduled publisher:", error);
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
