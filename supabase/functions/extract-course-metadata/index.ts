import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { course_slug } = await req.json();

    // Fetch course outline
    const { data: outline, error: outlineError } = await supabase
      .from('course_outlines')
      .select('*')
      .eq('course_slug', course_slug)
      .single();

    if (outlineError || !outline) {
      throw new Error(`Course outline not found: ${course_slug}`);
    }

    // Download PDF from storage
    const { data: pdfData, error: downloadError } = await supabase.storage
      .from('course-pdfs')
      .download(outline.pdf_filename);

    if (downloadError || !pdfData) {
      throw new Error(`Failed to download PDF: ${downloadError?.message}`);
    }

    // Convert blob to base64
    const arrayBuffer = await pdfData.arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    const base64 = btoa(String.fromCharCode(...bytes));

    // Use AI to extract structured information from the PDF
    const extractionPrompt = `Analyze this course outline PDF and extract the following information in a structured JSON format:

{
  "objectives": ["list of learning objectives"],
  "modules": [{"title": "module title", "topics": ["topic1", "topic2"]}],
  "prerequisites": ["list of prerequisites"],
  "duration": "course duration",
  "level": "Beginner/Intermediate/Advanced",
  "key_topics": ["main topics covered"],
  "target_audience": "who should take this course",
  "certification": "certification details if mentioned"
}

Extract accurate information from the PDF. If information is not available, use null or empty array.`;

    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${lovableApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: extractionPrompt },
              {
                type: 'image_url',
                image_url: {
                  url: `data:application/pdf;base64,${base64}`
                }
              }
            ]
          }
        ],
        response_format: { type: "json_object" }
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('AI extraction error:', aiResponse.status, errorText);
      throw new Error(`AI extraction failed: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const extractedText = aiData.choices[0].message.content;
    const metadata = JSON.parse(extractedText);

    // Update course_outlines with metadata
    const { error: updateError } = await supabase
      .from('course_outlines')
      .update({ metadata })
      .eq('course_slug', course_slug);

    if (updateError) {
      throw new Error(`Failed to update metadata: ${updateError.message}`);
    }

    console.log(`Successfully extracted metadata for ${course_slug}`);

    return new Response(
      JSON.stringify({ success: true, course_slug, metadata }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error extracting metadata:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
