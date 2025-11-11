import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { courseSlug } = await req.json();
    
    console.log(`[Download] Received request for courseSlug: ${courseSlug}`);
    
    if (!courseSlug) {
      return new Response(
        JSON.stringify({ error: "Course slug is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Check if course outline exists
    const { data: outline, error: outlineError } = await supabaseAdmin
      .from("course_outlines")
      .select("pdf_url, pdf_filename, course_name")
      .eq("course_slug", courseSlug)
      .single();

    console.log(`[Download] Query result - outline:`, outline, `error:`, outlineError);

    if (outlineError || !outline || !outline.pdf_url) {
      console.error(`[Download] Course outline not found for slug: ${courseSlug}`);
      return new Response(
        JSON.stringify({ error: "Course outline not available" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`[Download] Attempting to create signed URL for: ${outline.pdf_url}`);

    // Generate signed URL for the PDF (valid for 60 seconds)
    const { data: signedUrlData, error: signedUrlError } = await supabaseAdmin
      .storage
      .from("course-pdfs")
      .createSignedUrl(outline.pdf_url, 60);

    if (signedUrlError || !signedUrlData) {
      console.error(`[Download] Error generating signed URL for ${outline.pdf_url}:`, signedUrlError);
      return new Response(
        JSON.stringify({ error: "Failed to generate download URL", details: signedUrlError?.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`[Download] Successfully generated signed URL for ${outline.course_name}`);

    return new Response(
      JSON.stringify({
        url: signedUrlData.signedUrl,
        filename: outline.pdf_filename,
        courseName: outline.course_name
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in download-course-outline:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
