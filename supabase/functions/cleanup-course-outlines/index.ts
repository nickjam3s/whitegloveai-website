import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { auth: { persistSession: false } }
    );

    console.log('Deleting old course outline records with double-dash slugs');

    // Get all records with double dashes using RPC to bypass RLS
    const { data: allRecords } = await supabaseClient
      .from('course_outlines')
      .select('id, course_slug');

    console.log(`Total records: ${allRecords?.length || 0}`);

    const toDelete = allRecords?.filter(r => r.course_slug.includes('--')) || [];
    console.log(`Found ${toDelete.length} records with double-dash to delete`);

    if (toDelete.length > 0) {
      for (const record of toDelete) {
        await supabaseClient
          .from('course_outlines')
          .delete()
          .eq('id', record.id);
      }
    }

    console.log('Successfully cleaned up old course outline records');

    // Get the current count
    const { count } = await supabaseClient
      .from('course_outlines')
      .select('*', { count: 'exact', head: true });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Successfully cleaned up old course outline records',
        remaining_count: count 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error: any) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
