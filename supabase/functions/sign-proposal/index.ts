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

    const { slug, pin, signatureType, signatureData, signerName, signerEmail } = await req.json();

    if (!slug || !pin || !signatureType || !signatureData || !signerName) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Find and verify proposal
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

    // Verify PIN
    if (proposal.pin !== pin) {
      return new Response(
        JSON.stringify({ error: "Invalid PIN" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check if already signed
    if (proposal.status === 'signed') {
      return new Response(
        JSON.stringify({ error: "This proposal has already been signed" }),
        { status: 409, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check if expired
    if (proposal.expires_at && new Date(proposal.expires_at) < new Date()) {
      return new Response(
        JSON.stringify({ error: "This proposal has expired" }),
        { status: 410, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const signedAt = new Date().toISOString();
    const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip');
    const userAgent = req.headers.get('user-agent');

    // Update proposal with signature
    const { error: updateError } = await supabase
      .from('proposals')
      .update({
        status: 'signed',
        signed_at: signedAt,
        signed_by_name: signerName,
        signature_data: {
          type: signatureType,
          data: signatureData,
          signerEmail: signerEmail || null,
          ipAddress,
          userAgent,
          timestamp: signedAt
        }
      })
      .eq('id', proposal.id);

    if (updateError) {
      console.error("Update error:", updateError);
      return new Response(
        JSON.stringify({ error: "Failed to save signature" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Log signing activity
    await supabase.from('proposal_activity_logs').insert({
      proposal_id: proposal.id,
      action: 'signed',
      actor_email: signerEmail || null,
      ip_address: ipAddress,
      user_agent: userAgent,
      metadata: {
        signer_name: signerName,
        signature_type: signatureType
      }
    });

    // Send email notification for signed proposal
    try {
      const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
      const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
      
      await fetch(`${supabaseUrl}/functions/v1/proposal-notifications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseServiceKey}`
        },
        body: JSON.stringify({
          type: 'signed',
          proposalId: proposal.id,
          clientName: proposal.client_name,
          signerName,
          signedAt
        })
      });
    } catch (notifError) {
      console.error("Failed to send signed notification:", notifError);
    }

    return new Response(
      JSON.stringify({
        success: true,
        signedAt,
        message: "Proposal signed successfully"
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
