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

serve(async (req) => {
  console.log('=== Portal Retell API Function Called ===');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', Object.fromEntries(req.headers.entries()));
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight request');
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

    // Parse request body
    const body = await req.json();
    console.log('Request body:', body);

    // Check if this is an API key configuration request
    if (body.apiKey) {
      console.log('Processing API key configuration...');
      
      // Verify user is admin
      const { data: user, error: userError } = await supabase
        .from('portal_users')
        .select('role')
        .eq('email', userEmail)
        .single();

      if (userError || !user || user.role !== 'admin') {
        console.error('Unauthorized user:', userError);
        return new Response(
          JSON.stringify({ error: 'Only admins can configure API keys' }),
          { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Test the API key
      console.log('Testing API key with Retell AI...');
      const testResponse = await fetch('https://api.retellai.com/v2/list-calls', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${body.apiKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (!testResponse.ok) {
        console.error('API key test failed:', testResponse.status);
        return new Response(
          JSON.stringify({ error: 'Invalid API key - unable to authenticate with Retell AI' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Store the API key
      const { error: configError } = await supabase
        .from('portal_config')
        .upsert({
          key_name: 'retell_api_key',
          encrypted_value: body.apiKey,
        });

      if (configError) {
        console.error('Error storing API key:', configError);
        return new Response(
          JSON.stringify({ error: 'Failed to store API key' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      console.log('API key configured successfully');
      return new Response(
        JSON.stringify({ message: 'API key configured successfully' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Default response for non-API key requests
    return new Response(
      JSON.stringify({ message: 'Function is working' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});