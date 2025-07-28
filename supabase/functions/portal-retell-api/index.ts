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

    // Verify user is admin for all operations
    const { data: user, error: userError } = await supabase
      .from('portal_users')
      .select('role')
      .eq('email', userEmail)
      .single();

    if (userError || !user || user.role !== 'admin') {
      console.error('Unauthorized user:', userError);
      return new Response(
        JSON.stringify({ error: 'Only admins can access this API' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get stored API key
    const { data: configData, error: configError } = await supabase
      .from('portal_config')
      .select('encrypted_value')
      .eq('key_name', 'retell_api_key')
      .single();

    let retellApiKey = '';
    if (configData) {
      retellApiKey = configData.encrypted_value;
    }

    // Check if this is an API key configuration request
    if (body.apiKey) {
      console.log('Processing API key configuration...');

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
      const { error: storeError } = await supabase
        .from('portal_config')
        .upsert({
          key_name: 'retell_api_key',
          encrypted_value: body.apiKey,
        });

      if (storeError) {
        console.error('Error storing API key:', storeError);
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

    // Handle conversation flow operations
    if (body.operation === 'create_flow' && body.flowData) {
      console.log('Creating conversation flow...');

      if (!retellApiKey) {
        return new Response(
          JSON.stringify({ error: 'Retell API key not configured' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      try {
        const response = await fetch('https://api.retellai.com/v2/create-conversation-flow', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${retellApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body.flowData),
        });

        const responseData = await response.json();

        if (!response.ok) {
          console.error('Flow creation failed:', responseData);
          return new Response(
            JSON.stringify({ error: 'Failed to create conversation flow', details: responseData }),
            { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        console.log('Flow created successfully:', responseData);
        return new Response(
          JSON.stringify({ flow: responseData }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } catch (error) {
        console.error('Error creating flow:', error);
        return new Response(
          JSON.stringify({ error: 'Failed to create conversation flow', details: error.message }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Handle listing conversation flows
    if (body.operation === 'list_flows') {
      console.log('Listing conversation flows...');

      if (!retellApiKey) {
        return new Response(
          JSON.stringify({ error: 'Retell API key not configured' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      try {
        const response = await fetch('https://api.retellai.com/v2/list-conversation-flows', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${retellApiKey}`,
            'Content-Type': 'application/json',
          },
        });

        const responseData = await response.json();

        if (!response.ok) {
          console.error('Failed to list flows:', responseData);
          return new Response(
            JSON.stringify({ error: 'Failed to list conversation flows', details: responseData }),
            { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        return new Response(
          JSON.stringify({ flows: responseData }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } catch (error) {
        console.error('Error listing flows:', error);
        return new Response(
          JSON.stringify({ error: 'Failed to list conversation flows', details: error.message }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
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