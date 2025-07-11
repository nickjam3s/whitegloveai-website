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

interface VoiceCallRecord {
  id: string;
  timestamp: string;
  agent_id: string;
  agent_name?: string;
  duration: number;
  recording_url?: string;
  transcription?: string;
  metadata?: any;
}

async function getRetellApiKey(): Promise<string | null> {
  try {
    const { data, error } = await supabase
      .from('portal_config')
      .select('encrypted_value')
      .eq('key_name', 'retell_api_key')
      .single();

    if (error || !data) {
      console.error('Failed to get Retell API key:', error);
      return null;
    }

    // In a real implementation, you would decrypt the value here
    // For now, we'll assume it's stored as plain text (not recommended for production)
    return data.encrypted_value;
  } catch (error) {
    console.error('Error retrieving Retell API key:', error);
    return null;
  }
}

async function fetchVoiceCallData(agentIds: string[], apiKey: string): Promise<VoiceCallRecord[]> {
  console.log('Fetching Retell data for agents:', agentIds);
  
  try {
    const response = await fetch('https://api.retellai.com/v2/list-calls', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Retell API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Transform Retell API response to our format
    const transformedData: VoiceCallRecord[] = data.calls
      ?.filter((call: any) => agentIds.includes(call.agent_id))
      ?.map((call: any) => ({
        id: call.call_id,
        timestamp: call.start_timestamp || call.created_at,
        agent_id: call.agent_id,
        duration: Math.round((call.end_timestamp - call.start_timestamp) / 1000) || 0,
        recording_url: call.recording_url || null,
        transcription: call.transcript || 'Transcription not available',
        metadata: {
          customer_phone: call.to_number || call.from_number,
          call_type: call.direction || 'unknown',
          call_status: call.call_status,
          disconnect_reason: call.disconnect_reason
        }
      })) || [];

    return transformedData;
  } catch (error) {
    console.error('Error fetching from Retell API:', error);
    
    // Return mock data as fallback
    const mockData: VoiceCallRecord[] = [
      {
        id: 'mock_call_001',
        timestamp: new Date(Date.now() - 86400000).toISOString(),
        agent_id: agentIds[0] || 'agent_001',
        agent_name: 'Retell Agent Demo',
        duration: 125,
        recording_url: null,
        transcription: 'Mock call data - Retell API key may be invalid or missing',
        metadata: {
          customer_phone: '+1234567890',
          call_type: 'inbound',
          call_status: 'completed'
        }
      }
    ];
    return mockData;
  }
}

async function getUserAuthorizedAgents(userEmail: string): Promise<string[]> {
  try {
    // Set the portal session context
    await supabase.rpc('set_config', {
      parameter: 'portal.current_user_email',
      value: userEmail
    });

    const { data: assignments, error } = await supabase
      .from('retell_agent_assignments')
      .select(`
        retell_agent_id,
        agent_name,
        client_groups!inner(
          client_group_memberships!inner(
            portal_users!inner(email)
          )
        )
      `)
      .eq('client_groups.client_group_memberships.portal_users.email', userEmail);

    if (error) {
      console.error('Error fetching authorized agents:', error);
      return [];
    }

    return assignments?.map(a => a.retell_agent_id) || [];
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
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const path = url.pathname.split('/').pop();
    const userEmail = req.headers.get('x-user-email');

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

    if (path === 'voice-calls' && req.method === 'GET') {
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

    } else if (path === 'config' && req.method === 'POST') {
      // Only admins can update configuration
      const isAdmin = await isUserAdmin(userEmail);
      if (!isAdmin) {
        return new Response(
          JSON.stringify({ error: 'Admin access required' }),
          { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const { apiKey } = await req.json();
      
      if (!apiKey) {
        return new Response(
          JSON.stringify({ error: 'Retell API key is required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Store the API key (in production, this should be encrypted)
      const { error: configError } = await supabase
        .from('portal_config')
        .upsert({
          key_name: 'retell_api_key',
          encrypted_value: apiKey, // In production, encrypt this
          created_by: null // Would need user ID in real implementation
        });

      if (configError) {
        console.error('Error storing API key:', configError);
        return new Response(
          JSON.stringify({ error: 'Failed to store API key' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ message: 'Retell API key configured successfully' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else if (path === 'download-recording' && req.method === 'GET') {
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
          filename: `call_${callId}_${call.timestamp.split('T')[0]}.mp3`
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
    console.error('Portal retail API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});