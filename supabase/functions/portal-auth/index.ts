import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface MagicLinkRequest {
  email: string;
  redirectTo?: string;
}

interface VerifyTokenRequest {
  token: string;
}

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

function generateToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

async function sendMagicLink(email: string, token: string, redirectTo: string) {
  const magicLinkUrl = `${redirectTo}?token=${token}`;
  
  try {
    await resend.emails.send({
      from: "WhitegloveAI Portal <noreply@whitegloveai.com>",
      to: [email],
      subject: "Your secure login link",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; border-bottom: 2px solid #7021ee; padding-bottom: 10px;">
            WhitegloveAI Client Portal
          </h1>
          <p>Hello,</p>
          <p>You requested access to the WhitegloveAI Client Portal. Click the link below to sign in securely:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${magicLinkUrl}" 
               style="background-color: #7021ee; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Sign In to Portal
            </a>
          </div>
          <p style="color: #666; font-size: 14px;">
            This link will expire in 15 minutes for security purposes.
          </p>
          <p style="color: #666; font-size: 14px;">
            If you didn't request this login, please ignore this email.
          </p>
        </div>
      `,
    });
    
    console.log('Magic link sent successfully to:', email);
  } catch (error) {
    console.error('Failed to send magic link:', error);
    throw new Error('Failed to send magic link');
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

    if (path === 'send-magic-link' && req.method === 'POST') {
      const { email, redirectTo = 'https://whitegloveai.com/portal' }: MagicLinkRequest = await req.json();
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return new Response(
          JSON.stringify({ error: 'Invalid email format' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Check if user exists in portal_users
      const { data: user, error: userError } = await supabase
        .from('portal_users')
        .select('email, is_active')
        .eq('email', email)
        .single();

      if (userError || !user) {
        return new Response(
          JSON.stringify({ error: 'User not found. Please contact an administrator.' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      if (!user.is_active) {
        return new Response(
          JSON.stringify({ error: 'Your account has been deactivated. Please contact an administrator.' }),
          { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Generate token and store it
      const token = generateToken();
      const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

      const { error: tokenError } = await supabase
        .from('magic_link_tokens')
        .insert({
          email,
          token,
          expires_at: expiresAt.toISOString()
        });

      if (tokenError) {
        console.error('Error storing token:', tokenError);
        return new Response(
          JSON.stringify({ error: 'Failed to generate login link' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Send magic link
      await sendMagicLink(email, token, redirectTo);

      return new Response(
        JSON.stringify({ message: 'Magic link sent successfully' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else if (path === 'verify-token' && req.method === 'POST') {
      const { token }: VerifyTokenRequest = await req.json();
      
      if (!token) {
        return new Response(
          JSON.stringify({ error: 'Token is required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Verify token
      const { data: tokenData, error: tokenError } = await supabase
        .from('magic_link_tokens')
        .select('email, expires_at, used_at')
        .eq('token', token)
        .single();

      if (tokenError || !tokenData) {
        return new Response(
          JSON.stringify({ error: 'Invalid or expired token' }),
          { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Check if token is expired
      if (new Date(tokenData.expires_at) < new Date()) {
        return new Response(
          JSON.stringify({ error: 'Token has expired' }),
          { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Check if token was already used
      if (tokenData.used_at) {
        return new Response(
          JSON.stringify({ error: 'Token has already been used' }),
          { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Mark token as used
      await supabase
        .from('magic_link_tokens')
        .update({ used_at: new Date().toISOString() })
        .eq('token', token);

      // Update last login
      await supabase
        .from('portal_users')
        .update({ last_login: new Date().toISOString() })
        .eq('email', tokenData.email);

      // Get user details
      const { data: user, error: userError } = await supabase
        .from('portal_users')
        .select('*')
        .eq('email', tokenData.email)
        .single();

      if (userError || !user) {
        return new Response(
          JSON.stringify({ error: 'User not found' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ 
          user: {
            id: user.id,
            email: user.email,
            role: user.role,
            last_login: user.last_login
          }
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
    console.error('Portal auth error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});