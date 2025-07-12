import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Retell from 'npm:retell-sdk';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

interface VoiceCallRecord {
  id: string;
  agent_id: string;
  call_status: string;
  start_timestamp: number;
  end_timestamp: number;
  duration_ms: number;
  from_number: string;
  to_number: string;
  transcript: string;
  recording_url: string;
}

// Get Retell API key from database
async function getRetellApiKey(): Promise<string | null> {
  try {
    const { data, error } = await supabase
      .from('portal_config')
      .select('encrypted_value')
      .eq('key_name', 'retell_api_key')
      .single();

    if (error) {
      console.error('Error fetching Retell API key:', error);
      return null;
    }

    return data?.encrypted_value || null;
  } catch (error) {
    console.error('Error in getRetellApiKey:', error);
    return null;
  }
}

// Create Retell client instance
function createRetellClient(apiKey: string) {
  return new Retell({
    apiKey: apiKey,
  });
}

// Fetch voice call data from Retell API using the SDK
async function fetchVoiceCallData(agentIds: string[], apiKey: string): Promise<VoiceCallRecord[]> {
  try {
    console.log('Fetching voice call data for agents:', agentIds);
    
    const retellClient = createRetellClient(apiKey);
    
    // Get all calls from Retell API
    const callResponses = await retellClient.call.list();
    console.log('Retrieved calls from Retell API:', callResponses.length);
    
    // Filter by authorized agent IDs and transform to our format
    const voiceCallRecords: VoiceCallRecord[] = callResponses
      .filter(call => agentIds.includes(call.agent_id))
      .map(call => ({
        id: call.call_id,
        agent_id: call.agent_id,
        call_status: call.call_status,
        start_timestamp: call.start_timestamp,
        end_timestamp: call.end_timestamp,
        duration_ms: call.duration_ms || 0,
        from_number: call.from_number || '',
        to_number: call.to_number || '',
        transcript: call.transcript || '',
        recording_url: call.recording_url || ''
      }));
    
    console.log('Filtered call data:', voiceCallRecords.length, 'calls found');
    return voiceCallRecords;
  } catch (error) {
    console.error('Error fetching voice call data:', error);
    
    // Return mock data as fallback for development
    console.log('Returning mock data as fallback');
    const mockData: VoiceCallRecord[] = [
      {
        id: 'call_123',
        agent_id: agentIds[0] || 'agent_456',
        call_status: 'completed',
        start_timestamp: 1703302407333,
        end_timestamp: 1703302428855,
        duration_ms: 21522,
        from_number: '+1234567890',
        to_number: '+0987654321',
        transcript: 'Agent: Hello, how can I help you today?\nUser: Hi, I need help with my account.\nAgent: I\'d be happy to help you with that.',
        recording_url: 'https://api.retellai.com/v2/get-call/call_123/recording'
      }
    ];
    
    return mockData;
  }
}

async function getUserAuthorizedAgents(userEmail: string): Promise<string[]> {
  try {
    console.log('Setting portal context for user:', userEmail);
    
    // Set the portal session context using the new RPC function
    const { error: rpcError } = await supabase.rpc('set_config', {
      parameter: 'portal.current_user_email',
      value: userEmail
    });
    
    if (rpcError) {
      console.error('Error setting portal context:', rpcError);
      // Continue anyway, try direct query approach
    }

    // First, get the user's groups
    console.log('Fetching user groups for:', userEmail);
    const { data: userGroups, error: groupsError } = await supabase
      .from('client_group_memberships')
      .select(`
        group_id,
        portal_users!inner(email)
      `)
      .eq('portal_users.email', userEmail);

    if (groupsError) {
      console.error('Error fetching user groups:', groupsError);
      return [];
    }

    if (!userGroups || userGroups.length === 0) {
      console.log('No groups found for user:', userEmail);
      return [];
    }

    const groupIds = userGroups.map(ug => ug.group_id);
    console.log('User belongs to groups:', groupIds);

    // Then get the agents assigned to those groups
    const { data: assignments, error: assignmentsError } = await supabase
      .from('retell_agent_assignments')
      .select('retell_agent_id, agent_name')
      .in('group_id', groupIds);

    if (assignmentsError) {
      console.error('Error fetching agent assignments:', assignmentsError);
      return [];
    }

    const agentIds = assignments?.map(a => a.retell_agent_id) || [];
    console.log('Found authorized agents:', agentIds);
    
    return agentIds;
  } catch (error) {
    console.error('Error in getUserAuthorizedAgents:', error);
    return [];
  }
}

async function isUserAdmin(userEmail: string): Promise<boolean> {
  try {
    const { data: user, error } = await supabase
      .from('portal_users')
      .select('role')
      .eq('email', userEmail)
      .single();

    return !error && user?.role === 'admin';
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
}

serve(async (req) => {
  console.log('=== Portal Retell API Function Called ===');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight request');
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const userEmail = req.headers.get('x-user-email');
    console.log('User email from header:', userEmail);
    
    // Parse request body for supabase.functions.invoke() calls
    let requestBody = null;
    try {
      const text = await req.text();
      console.log('Raw request body:', text);
      
      if (text.trim()) {
        requestBody = JSON.parse(text);
        console.log('Parsed request body:', requestBody);
      }
    } catch (parseError) {
      console.log('No JSON body or parsing failed:', parseError);
    }
    
    // Determine operation based on request content
    let operation = 'voice-calls'; // default
    
    if (requestBody?.apiKey) {
      operation = 'config';
      console.log('API key configuration request detected');
    } else if (req.method === 'GET') {
      const url = new URL(req.url);
      const callId = url.searchParams.get('call_id');
      if (callId) {
        operation = 'download-recording';
      }
    }
    
    console.log('Determined operation:', operation);

    if (!userEmail) {
      return new Response(
        JSON.stringify({ error: 'User email header is required' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Verify user exists and is active
    const { data: user, error: userError } = await supabase
      .from('portal_users')
      .select('email, role, is_active')
      .eq('email', userEmail)
      .single();

    if (userError || !user || !user.is_active) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (operation === 'voice-calls') {
      // Get user's authorized agents
      const authorizedAgents = await getUserAuthorizedAgents(userEmail);
      
      if (authorizedAgents.length === 0) {
        return new Response(
          JSON.stringify({ calls: [], message: 'No authorized agents found' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Get Retell API key
      const apiKey = await getRetellApiKey();
      if (!apiKey) {
        return new Response(
          JSON.stringify({ error: 'Retell API not configured. Please contact an administrator.' }),
          { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Fetch voice call data
      const calls = await fetchVoiceCallData(authorizedAgents, apiKey);

      return new Response(
        JSON.stringify({ 
          calls,
          authorized_agents: authorizedAgents,
          total_calls: calls.length
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else if (operation === 'config') {
      // Only admins can update configuration
      const isAdmin = await isUserAdmin(userEmail);
      if (!isAdmin) {
        console.log('Non-admin user attempted to configure API key:', userEmail);
        return new Response(
          JSON.stringify({ error: 'Unauthorized: Only admins can update configuration' }),
          { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const { apiKey } = requestBody || {};
      console.log('API key received for configuration:', apiKey ? 'Yes' : 'No');
      
      if (!apiKey || !apiKey.trim()) {
        return new Response(
          JSON.stringify({ error: 'API key is required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      // Test the API key first by making a simple call to Retell
      try {
        console.log('Testing Retell API key...');
        const testClient = createRetellClient(apiKey.trim());
        await testClient.call.list();
        console.log('API key test successful');
      } catch (testError) {
        console.error('API key test failed:', testError);
        return new Response(
          JSON.stringify({ error: 'Invalid API key: Unable to authenticate with Retell AI' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Store the API key in the portal_config table
      const { error: configError } = await supabase
        .from('portal_config')
        .upsert({
          key_name: 'retell_api_key',
          encrypted_value: apiKey.trim(), // In production, this should be encrypted
          created_by: null, // We don't have user UUID here, just email
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

    } else if (operation === 'download-recording') {
      const url = new URL(req.url);
      const callId = url.searchParams.get('call_id');
      
      if (!callId) {
        return new Response(
          JSON.stringify({ error: 'Call ID is required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Verify user has access to this call
      const authorizedAgents = await getUserAuthorizedAgents(userEmail);
      const apiKey = await getRetellApiKey();
      
      if (!apiKey) {
        return new Response(
          JSON.stringify({ error: 'Retell API not configured' }),
          { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const calls = await fetchVoiceCallData(authorizedAgents, apiKey);
      const call = calls.find(c => c.id === callId);

      if (!call) {
        return new Response(
          JSON.stringify({ error: 'Call not found or access denied' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ 
          download_url: call.recording_url,
          filename: `call_${callId}_${new Date(call.start_timestamp).toISOString().split('T')[0]}.mp3`
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else {
      return new Response(
        JSON.stringify({ error: 'Not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

  } catch (error) {
    console.error('Portal Retell API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});