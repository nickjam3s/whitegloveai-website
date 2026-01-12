import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { slug, pin } = await req.json();

    if (!slug || !pin) {
      return new Response(
        JSON.stringify({ error: "Missing slug or PIN" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Find proposal by slug
    const { data: proposal, error: fetchError } = await supabase
      .from('proposals')
      .select('*')
      .eq('slug', slug)
      .single();

    if (fetchError || !proposal) {
      return new Response(
        JSON.stringify({ error: "Proposal not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check if proposal is published
    if (proposal.status === 'draft') {
      return new Response(
        JSON.stringify({ error: "This proposal is not yet available" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check if expired
    if (proposal.expires_at && new Date(proposal.expires_at) < new Date()) {
      return new Response(
        JSON.stringify({ error: "This proposal has expired" }),
        { status: 410, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify PIN
    if (proposal.pin !== pin) {
      // Log failed attempt
      await supabase.from('proposal_activity_logs').insert({
        proposal_id: proposal.id,
        action: 'pin_failed',
        ip_address: req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip'),
        user_agent: req.headers.get('user-agent'),
        metadata: { attempted_pin: pin.substring(0, 2) + '****' }
      });

      return new Response(
        JSON.stringify({ error: "Invalid PIN" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Update view count and last viewed
    const newViewCount = (proposal.view_count || 0) + 1;
    const updateStatus = proposal.status === 'published' ? 'viewed' : proposal.status;

    await supabase
      .from('proposals')
      .update({
        view_count: newViewCount,
        last_viewed_at: new Date().toISOString(),
        status: updateStatus
      })
      .eq('id', proposal.id);

    // Log successful view
    await supabase.from('proposal_activity_logs').insert({
      proposal_id: proposal.id,
      action: 'viewed',
      ip_address: req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip'),
      user_agent: req.headers.get('user-agent'),
      metadata: { view_count: newViewCount }
    });

    return new Response(
      JSON.stringify({
        success: true,
        proposal: {
          id: proposal.id,
          clientName: proposal.client_name,
          clientContact: proposal.client_contact,
          clientEmail: proposal.client_email,
          templateStyle: proposal.template_style,
          proposalContent: proposal.proposal_content,
          proposalImages: proposal.proposal_images,
          status: updateStatus,
          signedAt: proposal.signed_at,
          signedByName: proposal.signed_by_name,
          signatureData: proposal.signature_data,
          createdAt: proposal.created_at
        }
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
