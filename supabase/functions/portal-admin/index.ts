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

async function setPortalContext(userEmail: string) {
  await supabase.rpc('set_config', {
    parameter: 'portal.current_user_email',
    value: userEmail
  });
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

    // Verify user is admin
    const isAdmin = await isUserAdmin(userEmail);
    if (!isAdmin) {
      return new Response(
        JSON.stringify({ error: 'Admin access required' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Set portal context for RLS
    await setPortalContext(userEmail);

    if (path === 'users' && req.method === 'GET') {
      // Get all users
      const { data: users, error } = await supabase
        .from('portal_users')
        .select(`
          *,
          client_group_memberships(
            client_groups(id, name)
          )
        `)
        .order('created_at', { ascending: false });

      if (error) {
        return new Response(
          JSON.stringify({ error: 'Failed to fetch users' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ users }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else if (path === 'users' && req.method === 'POST') {
      // Create new user
      const { email, role = 'client' } = await req.json();

      if (!email) {
        return new Response(
          JSON.stringify({ error: 'Email is required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const { data: user, error } = await supabase
        .from('portal_users')
        .insert({ email, role })
        .select()
        .single();

      if (error) {
        return new Response(
          JSON.stringify({ error: error.message }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ user }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else if (path === 'client-groups' && req.method === 'GET') {
      // Get all client groups
      const { data: groups, error } = await supabase
        .from('client_groups')
        .select(`
          *,
          client_group_memberships(
            portal_users(id, email)
          ),
          retell_agent_assignments(
            retell_agent_id,
            agent_name
          )
        `)
        .order('created_at', { ascending: false });

      if (error) {
        return new Response(
          JSON.stringify({ error: 'Failed to fetch client groups' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ groups }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else if (path === 'client-groups' && req.method === 'POST') {
      // Create new client group
      const { name, description, user_emails = [], agent_ids = [] } = await req.json();

      if (!name) {
        return new Response(
          JSON.stringify({ error: 'Group name is required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Get admin user ID
      const { data: adminUser } = await supabase
        .from('portal_users')
        .select('id')
        .eq('email', userEmail)
        .single();

      // Create group
      const { data: group, error: groupError } = await supabase
        .from('client_groups')
        .insert({ 
          name, 
          description,
          created_by: adminUser?.id 
        })
        .select()
        .single();

      if (groupError) {
        return new Response(
          JSON.stringify({ error: groupError.message }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Add user memberships
      if (user_emails.length > 0) {
        const { data: users } = await supabase
          .from('portal_users')
          .select('id')
          .in('email', user_emails);

        if (users && users.length > 0) {
          const memberships = users.map(user => ({
            user_id: user.id,
            group_id: group.id
          }));

          await supabase
            .from('client_group_memberships')
            .insert(memberships);
        }
      }

      // Add agent assignments
      if (agent_ids.length > 0) {
        const assignments = agent_ids.map((agentId: string) => ({
          group_id: group.id,
          retell_agent_id: agentId,
          agent_name: `Agent ${agentId}` // In production, fetch actual agent name
        }));

        await supabase
          .from('retell_agent_assignments')
          .insert(assignments);
      }

      return new Response(
        JSON.stringify({ group }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else if (path === 'assign-user-to-group' && req.method === 'POST') {
      // Assign user to group
      const { user_email, group_id } = await req.json();

      if (!user_email || !group_id) {
        return new Response(
          JSON.stringify({ error: 'User email and group ID are required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Get user ID
      const { data: user, error: userError } = await supabase
        .from('portal_users')
        .select('id')
        .eq('email', user_email)
        .single();

      if (userError || !user) {
        return new Response(
          JSON.stringify({ error: 'User not found' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Create membership
      const { error: membershipError } = await supabase
        .from('client_group_memberships')
        .insert({
          user_id: user.id,
          group_id
        });

      if (membershipError) {
        return new Response(
          JSON.stringify({ error: membershipError.message }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ message: 'User assigned to group successfully' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else if (path === 'assign-agent-to-group' && req.method === 'POST') {
      // Assign retail agent to group
      const { group_id, agent_id, agent_name } = await req.json();

      if (!group_id || !agent_id) {
        return new Response(
          JSON.stringify({ error: 'Group ID and agent ID are required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const { error } = await supabase
        .from('retell_agent_assignments')
        .insert({
          group_id,
          retell_agent_id: agent_id,
          agent_name: agent_name || `Agent ${agent_id}`
        });

      if (error) {
        return new Response(
          JSON.stringify({ error: error.message }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ message: 'Agent assigned to group successfully' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else {
      return new Response(
        JSON.stringify({ error: 'Not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

  } catch (error) {
    console.error('Portal admin error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});