
-- Add fields to subscribers table for better opt-in/opt-out management (only if they don't exist)
DO $$ 
BEGIN
    -- Add confirmation_token if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'subscribers' AND column_name = 'confirmation_token') THEN
        ALTER TABLE public.subscribers ADD COLUMN confirmation_token TEXT;
    END IF;
    
    -- Add double_opt_in if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'subscribers' AND column_name = 'double_opt_in') THEN
        ALTER TABLE public.subscribers ADD COLUMN double_opt_in BOOLEAN DEFAULT false;
    END IF;
    
    -- Add unsubscribe_token if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'subscribers' AND column_name = 'unsubscribe_token') THEN
        ALTER TABLE public.subscribers ADD COLUMN unsubscribe_token TEXT DEFAULT gen_random_uuid()::text;
    END IF;
    
    -- Add subscription_source if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'subscribers' AND column_name = 'subscription_source') THEN
        ALTER TABLE public.subscribers ADD COLUMN subscription_source TEXT;
    END IF;
    
    -- Add unsubscribe_reason if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'subscribers' AND column_name = 'unsubscribe_reason') THEN
        ALTER TABLE public.subscribers ADD COLUMN unsubscribe_reason TEXT;
    END IF;
    
    -- Add last_email_sent_at if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'subscribers' AND column_name = 'last_email_sent_at') THEN
        ALTER TABLE public.subscribers ADD COLUMN last_email_sent_at TIMESTAMP WITH TIME ZONE;
    END IF;
END $$;

-- Create unsubscribe_requests table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.unsubscribe_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  subscriber_id UUID REFERENCES public.subscribers(id),
  token TEXT NOT NULL UNIQUE,
  reason TEXT,
  feedback TEXT,
  ip_address TEXT,
  user_agent TEXT,
  processed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on unsubscribe_requests
ALTER TABLE public.unsubscribe_requests ENABLE ROW LEVEL SECURITY;

-- Create policies for unsubscribe requests (only if they don't exist)
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'unsubscribe_requests' AND policyname = 'Anyone can create unsubscribe requests') THEN
        CREATE POLICY "Anyone can create unsubscribe requests" 
          ON public.unsubscribe_requests 
          FOR INSERT 
          WITH CHECK (true);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'unsubscribe_requests' AND policyname = 'Authenticated users can manage unsubscribe requests') THEN
        CREATE POLICY "Authenticated users can manage unsubscribe requests" 
          ON public.unsubscribe_requests 
          FOR ALL 
          TO authenticated
          USING (true);
    END IF;
END $$;

-- Create email_templates table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.email_templates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  subject_template TEXT NOT NULL,
  html_template TEXT NOT NULL,
  variables JSONB DEFAULT '{}'::jsonb,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on email_templates
ALTER TABLE public.email_templates ENABLE ROW LEVEL SECURITY;

-- Create policies for email templates (only if they don't exist)
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'email_templates' AND policyname = 'Authenticated users can manage email templates') THEN
        CREATE POLICY "Authenticated users can manage email templates" 
          ON public.email_templates 
          FOR ALL 
          TO authenticated
          USING (true);
    END IF;
END $$;

-- Insert default WhitegloveAI email template (only if it doesn't exist)
INSERT INTO public.email_templates (name, subject_template, html_template, variables) 
SELECT 'whiteglove_newsletter', '{{subject}}', 
'<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{subject}}</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #000000; color: #ffffff;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #000000;">
        <!-- Header -->
        <div style="background-color: #000000; padding: 20px; text-align: center; border-bottom: 1px solid #7021EE;">
            <h1 style="color: #7021EE; margin: 0; font-size: 24px; font-weight: bold;">WhitegloveAI</h1>
            <p style="color: #888888; margin: 5px 0 0 0; font-size: 12px;">Managed AI Service Provider™</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px 20px;">
            <h2 style="color: #ffffff; margin-top: 0;">{{title}}</h2>
            {{#if featured_image}}
            <img src="{{featured_image}}" alt="{{title}}" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 20px;">
            {{/if}}
            {{#if excerpt}}
            <p style="color: #cccccc; font-size: 16px; line-height: 1.6; margin-bottom: 20px; font-style: italic;">{{excerpt}}</p>
            {{/if}}
            <div style="color: #ffffff; line-height: 1.6;">
                {{content}}
            </div>
            {{#if post_url}}
            <div style="text-align: center; margin: 30px 0;">
                <a href="{{post_url}}" style="background-color: #7021EE; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Read Full Article</a>
            </div>
            {{/if}}
        </div>
        
        <!-- Footer -->
        <div style="background-color: #111111; padding: 30px 20px; border-top: 1px solid #333333;">
            <div style="text-align: center; margin-bottom: 20px;">
                <p style="color: #7021EE; margin: 0; font-size: 18px; font-weight: bold;">WhitegloveAI</p>
                <p style="color: #888888; margin: 5px 0; font-size: 12px;">Managed AI Service Provider™</p>
            </div>
            
            <div style="text-align: center; margin-bottom: 20px;">
                <p style="color: #cccccc; margin: 0; font-size: 14px;">
                    5 Cowboys Way, Suite 300<br>
                    Frisco, TX 75034<br>
                    <a href="tel:+14692099907" style="color: #7021EE; text-decoration: none;">+1-469-209-9907</a>
                </p>
            </div>
            
            <div style="text-align: center; margin-bottom: 20px;">
                <a href="https://whitegloveai.com/privacy" style="color: #7021EE; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
                <a href="https://whitegloveai.com/terms" style="color: #7021EE; text-decoration: none; margin: 0 10px;">Terms of Service</a>
            </div>
            
            <div style="text-align: center; margin-bottom: 20px;">
                <a href="{{unsubscribe_url}}" style="color: #888888; text-decoration: none; font-size: 12px;">Unsubscribe from this list</a>
                <span style="color: #555555; margin: 0 5px;">|</span>
                <a href="{{preferences_url}}" style="color: #888888; text-decoration: none; font-size: 12px;">Update preferences</a>
            </div>
            
            <div style="text-align: center; border-top: 1px solid #333333; padding-top: 20px;">
                <p style="color: #555555; margin: 0; font-size: 11px;">
                    © 2025 WhitegloveAI LLC. All rights reserved.<br>
                    Historically Underutilized Business Vendor Number: 19340294370
                </p>
            </div>
        </div>
    </div>
</body>
</html>',
'{"subject": "Newsletter Subject", "title": "Article Title", "content": "Article Content", "excerpt": "Article Excerpt", "featured_image": "", "post_url": "", "unsubscribe_url": "", "preferences_url": ""}'::jsonb
WHERE NOT EXISTS (SELECT 1 FROM public.email_templates WHERE name = 'whiteglove_newsletter');

-- Add function to generate confirmation tokens
CREATE OR REPLACE FUNCTION public.generate_confirmation_token()
RETURNS TEXT AS $$
BEGIN
  RETURN encode(gen_random_bytes(32), 'hex');
END;
$$ LANGUAGE plpgsql;

-- Update existing subscribers to have unsubscribe tokens (only if they don't have them)
UPDATE public.subscribers 
SET unsubscribe_token = gen_random_uuid()::text 
WHERE unsubscribe_token IS NULL;
