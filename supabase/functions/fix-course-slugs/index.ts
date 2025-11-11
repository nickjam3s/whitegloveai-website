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

    console.log('Starting course slug fix process...');

    // Step 1: Get all records
    const { data: allRecords, error: fetchError } = await supabaseClient
      .from('course_outlines')
      .select('id, course_slug, pdf_url, course_name');

    if (fetchError) {
      console.error('Error fetching records:', fetchError);
      throw fetchError;
    }

    console.log(`Total records found: ${allRecords?.length || 0}`);

    // Step 2: Delete single-dash records (except the 4 special ones)
    const keepSlugs = ['ai-plus-human-resource', 'ai-plus-learning-and-development', 'ai-plus-prompt-engineer-level-1', 'ai-plus-finance-agent'];
    const toDelete = allRecords?.filter(r => 
      !r.course_slug.includes('--') && !keepSlugs.includes(r.course_slug)
    ) || [];

    console.log(`Found ${toDelete.length} single-dash records to delete`);

    if (toDelete.length > 0) {
      for (const record of toDelete) {
        console.log(`Deleting: ${record.course_slug}`);
        await supabaseClient
          .from('course_outlines')
          .delete()
          .eq('id', record.id);
      }
    }

    // Step 3: Update double-dash slugs to single-dash
    const { data: doubleDashRecords } = await supabaseClient
      .from('course_outlines')
      .select('id, course_slug, pdf_url, course_name');

    const toUpdate = doubleDashRecords?.filter(r => r.course_slug.includes('--')) || [];
    
    console.log(`Found ${toUpdate.length} double-dash records to update`);

    if (toUpdate.length > 0) {
      for (const record of toUpdate) {
        const newSlug = record.course_slug.replace(/--/g, '-');
        console.log(`Updating: ${record.course_slug} -> ${newSlug}`);
        await supabaseClient
          .from('course_outlines')
          .update({ course_slug: newSlug })
          .eq('id', record.id);
      }
    }

    // Step 4: Get final count
    const { count } = await supabaseClient
      .from('course_outlines')
      .select('*', { count: 'exact', head: true });

    console.log('Course slug fix completed successfully');

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Course slugs fixed successfully',
        deleted: toDelete.length,
        updated: toUpdate.length,
        final_count: count 
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
