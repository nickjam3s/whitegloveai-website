import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

serve(async (req) => {
  console.log('=== Generate Agent Flow Function Called ===');
  console.log('Method:', req.method);
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get user email from headers
    const userEmail = req.headers.get('x-user-email');
    console.log('User email from header:', userEmail);
    
    if (!userEmail) {
      console.error('Missing user email header');
      return new Response(
        JSON.stringify({ error: 'User email header is required' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Verify user is admin
    const { data: user, error: userError } = await supabase
      .from('portal_users')
      .select('role')
      .eq('email', userEmail)
      .single();

    if (userError || !user || user.role !== 'admin') {
      console.error('Unauthorized user:', userError);
      return new Response(
        JSON.stringify({ error: 'Only admins can generate agent flows' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!openAIApiKey) {
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Parse request body
    const { useCase, purpose, clientInfo, requirements } = await req.json();
    console.log('Generating flow for:', { useCase, purpose, clientInfo });

    // Create AI prompt for flow generation
    const prompt = `You are an expert conversation flow designer. Create a Retell AI conversation flow JSON based on these requirements:

Use Case: ${useCase}
Purpose: ${purpose}
Client Info: ${clientInfo}
Additional Requirements: ${requirements}

Generate a complete Retell conversation flow JSON that includes:
1. Clear conversation nodes with specific prompts
2. Logical transitions between nodes based on user responses
3. Dynamic variables for personalization
4. Appropriate ending conditions
5. Error handling and fallback responses

The flow should be professional, goal-oriented, and provide excellent user experience. Return ONLY the JSON object, no additional text.

Example structure:
{
  "name": "Agent Name",
  "description": "Agent description",
  "nodes": [
    {
      "id": "start",
      "type": "start",
      "prompt": "Welcome message...",
      "transitions": [
        {
          "condition": "user confirms",
          "target": "gather_info"
        }
      ]
    }
  ],
  "variables": [
    {
      "name": "user_name",
      "type": "string",
      "description": "User's name for personalization"
    }
  ]
}`;

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-2025-04-14',
        messages: [
          { 
            role: 'system', 
            content: 'You are an expert at creating Retell AI conversation flows. Always return valid JSON.' 
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      console.error('OpenAI API error:', response.status);
      return new Response(
        JSON.stringify({ error: 'Failed to generate flow with AI' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const generatedFlow = data.choices[0].message.content;

    try {
      // Parse and validate the generated JSON
      const flowData = JSON.parse(generatedFlow);
      
      console.log('Generated flow successfully');
      return new Response(
        JSON.stringify({ flow: flowData }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } catch (parseError) {
      console.error('Failed to parse generated flow:', parseError);
      return new Response(
        JSON.stringify({ 
          error: 'Generated flow is invalid JSON',
          raw: generatedFlow 
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});