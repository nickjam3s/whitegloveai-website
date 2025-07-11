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

async function getRetailApiKey(): Promise<string | null> {
  try {
    const { data, error } = await supabase
      .from('portal_config')
      .select('encrypted_value')
      .eq('key_name', 'retail_api_key')
      .single();

    if (error || !data) {
      console.error('Failed to get Retail API key:', error);
      return null;
    }

    // In a real implementation, you would decrypt the value here
    // For now, we'll assume it's stored as plain text (not recommended for production)
    return data.encrypted_value;
  } catch (error) {
    console.error('Error retrieving API key:', error);
    return null;
  }
}

async function fetchVoiceCallData(agentIds: string[], apiKey: string): Promise<VoiceCallRecord[]> {
  // This is a mock implementation of the Retail Commerce SDK integration
  // In a real implementation, you would use the actual Retail Commerce SDK
  
  const mockData: VoiceCallRecord[] = [
    {
      id: '1',
      timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      agent_id: agentIds[0] || 'agent_001',
      agent_name: 'Agent Sarah Johnson',
      duration: 180, // 3 minutes
      recording_url: 'https://example.com/recordings/call_001.mp3',
      transcription: 'Customer called about product availability. Provided information about stock levels and delivery times.',
      metadata: {
        customer_phone: '+1234567890',
        call_type: 'inquiry',
        resolved: true
      }
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      agent_id: agentIds[0] || 'agent_001',
      agent_name: 'Agent Sarah Johnson',
      duration: 240, // 4 minutes
      recording_url: 'https://example.com/recordings/call_002.mp3',
      transcription: 'Customer support call regarding order status. Updated customer on shipping information.',
      metadata: {
        customer_phone: '+1234567891',
        call_type: 'support',
        resolved: true,
        order_id: 'ORD-2024-001'
      }
    }
  ];

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return mockData.filter(call => agentIds.includes(call.agent_id));
}

async function getUserAuthorizedAgents(userEmail: string): Promise<string[]> {
  try {
    // Set the portal session context
    await supabase.rpc('set_config', {
      parameter: 'portal.current_user_email',
      value: userEmail
    });

    const { data: assignments, error } = await supabase
      .from('retail_agent_assignments')
      .select(`
        retail_agent_id,
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

    return assignments?.map(a => a.retail_agent_id) || [];
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

      // Get Retail API key
      const apiKey = await getRetailApiKey();
      if (!apiKey) {
        return new Response(
          JSON.stringify({ error: 'Retail API not configured. Please contact an administrator.' }),
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

      const { retail_api_key } = await req.json();
      
      if (!retail_api_key) {
        return new Response(
          JSON.stringify({ error: 'Retail API key is required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Store the API key (in production, this should be encrypted)
      const { error: configError } = await supabase
        .from('portal_config')
        .upsert({
          key_name: 'retail_api_key',
          encrypted_value: retail_api_key, // In production, encrypt this
          created_by: user.id
        });

      if (configError) {
        console.error('Error storing API key:', configError);
        return new Response(
          JSON.stringify({ error: 'Failed to store API key' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ message: 'Retail API key configured successfully' }),
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
      const apiKey = await getRetailApiKey();
      
      if (!apiKey) {
        return new Response(
          JSON.stringify({ error: 'Retail API not configured' }),
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