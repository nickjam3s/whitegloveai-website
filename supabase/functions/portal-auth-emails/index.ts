import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Webhook } from "https://esm.sh/standardwebhooks@1.0.0";
import { Resend } from "npm:resend@4.0.0";
import { renderAsync } from "npm:@react-email/components@0.0.22";
import React from "npm:react@18.3.1";
import { 
  ConfirmationEmail, 
  MagicLinkEmail, 
  WelcomeEmail, 
  PasswordResetEmail 
} from "./_templates/index.tsx";

const resend = new Resend(Deno.env.get('RESEND_API_KEY') as string);
const hookSecret = Deno.env.get('SEND_EMAIL_HOOK_SECRET') as string;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (req.method === 'POST') {
      // Handle Supabase Auth webhook for automatic emails
      const payload = await req.text();
      const headers = Object.fromEntries(req.headers);
      
      if (hookSecret) {
        const wh = new Webhook(hookSecret);
        try {
          const {
            user,
            email_data: { token, token_hash, redirect_to, email_action_type, site_url },
          } = wh.verify(payload, headers) as {
            user: { email: string; };
            email_data: {
              token: string;
              token_hash: string;
              redirect_to: string;
              email_action_type: string;
              site_url: string;
            };
          };

          let html = '';
          let subject = '';
          
          switch (email_action_type) {
            case 'signup':
              html = await renderAsync(
                React.createElement(ConfirmationEmail, {
                  supabase_url: site_url,
                  token,
                  token_hash,
                  redirect_to,
                  email_action_type,
                })
              );
              subject = 'Confirm your WhiteGlove AI Portal account';
              break;
              
            case 'magiclink':
              html = await renderAsync(
                React.createElement(MagicLinkEmail, {
                  supabase_url: site_url,
                  token,
                  token_hash,
                  redirect_to,
                  email_action_type,
                })
              );
              subject = 'Your WhiteGlove AI Portal magic link';
              break;
              
            case 'recovery':
              html = await renderAsync(
                React.createElement(PasswordResetEmail, {
                  supabase_url: site_url,
                  token,
                  token_hash,
                  redirect_to,
                  email_action_type,
                })
              );
              subject = 'Reset your WhiteGlove AI Portal password';
              break;
          }

          if (html) {
            const { error } = await resend.emails.send({
              from: 'WhiteGlove AI Portal <no-reply@whiteglove.ai>',
              to: [user.email],
              subject,
              html,
            });
            
            if (error) {
              console.error('Resend error:', error);
              throw error;
            }
            
            console.log(`${email_action_type} email sent successfully to ${user.email}`);
          }

          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          });
        } catch (error) {
          console.error('Webhook verification failed:', error);
          return new Response(
            JSON.stringify({ error: 'Webhook verification failed' }),
            { status: 401, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
          );
        }
      }
    }

    // Handle direct API calls for custom emails
    const { type, email, data } = await req.json();
    
    let html = '';
    let subject = '';
    
    switch (type) {
      case 'welcome':
        html = await renderAsync(
          React.createElement(WelcomeEmail, { email, ...data })
        );
        subject = 'Welcome to WhiteGlove AI Portal!';
        break;
        
      case 'resend-confirmation':
        // This will trigger the signup flow again
        return new Response(JSON.stringify({ 
          message: 'Please use the resend confirmation feature in the portal'
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
    }

    if (html) {
      const { error } = await resend.emails.send({
        from: 'WhiteGlove AI Portal <no-reply@whiteglove.ai>',
        to: [email],
        subject,
        html,
      });
      
      if (error) {
        console.error('Resend error:', error);
        throw error;
      }
      
      console.log(`${type} email sent successfully to ${email}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (error: any) {
    console.error('Error in portal-auth-emails function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);