import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { secret } = await req.json();
    
    // Simple protection - require a secret to run this
    if (secret !== 'setup-whiteglove-2026') {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });

    const users = [
      { email: 'nick@whitegloveai.com', password: 'WgAI-Nick-2026!$Kx' },
      { email: 'andi@whitegloveai.com', password: 'WgAI-Andi-2026!$Qm' }
    ];

    const results = [];

    for (const user of users) {
      // Check if user already exists in auth
      const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers();
      const existingUser = existingUsers?.users?.find(u => u.email === user.email);
      
      if (existingUser) {
        // Update password for existing user
        const { data, error } = await supabaseAdmin.auth.admin.updateUserById(
          existingUser.id,
          { 
            password: user.password,
            email_confirm: true
          }
        );
        
        if (error) {
          results.push({ email: user.email, status: 'error', message: error.message });
        } else {
          results.push({ email: user.email, status: 'updated', message: 'Password updated' });
        }
      } else {
        // Create new user
        const { data, error } = await supabaseAdmin.auth.admin.createUser({
          email: user.email,
          password: user.password,
          email_confirm: true
        });
        
        if (error) {
          results.push({ email: user.email, status: 'error', message: error.message });
        } else {
          results.push({ email: user.email, status: 'created', message: 'User created' });
        }
      }
    }

    return new Response(
      JSON.stringify({ success: true, results }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Setup error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
