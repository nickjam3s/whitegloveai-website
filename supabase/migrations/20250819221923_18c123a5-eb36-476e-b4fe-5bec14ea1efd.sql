-- Add the missing admin user to portal_users table
INSERT INTO public.portal_users (email, role, is_active, created_at) 
VALUES ('admin@whitegloveai.com', 'admin', true, now())
ON CONFLICT (email) DO NOTHING;

-- Create audit log table for authentication events
CREATE TABLE IF NOT EXISTS public.auth_audit_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email TEXT NOT NULL,
  event_type TEXT NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  success BOOLEAN NOT NULL DEFAULT false,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on audit logs
ALTER TABLE public.auth_audit_logs ENABLE ROW LEVEL SECURITY;

-- Only admins can view audit logs
CREATE POLICY "Only admins can view audit logs" 
ON public.auth_audit_logs 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM portal_users 
    WHERE email = current_setting('portal.current_user_email', true) 
    AND role = 'admin'
  )
);

-- System can insert audit logs
CREATE POLICY "System can insert audit logs" 
ON public.auth_audit_logs 
FOR INSERT 
WITH CHECK (true);

-- Create rate limiting table for email sends
CREATE TABLE IF NOT EXISTS public.email_rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  email_type TEXT NOT NULL,
  send_count INTEGER NOT NULL DEFAULT 1,
  window_start TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(email, email_type, window_start)
);

-- Enable RLS on rate limits
ALTER TABLE public.email_rate_limits ENABLE ROW LEVEL SECURITY;

-- Only system can manage rate limits
CREATE POLICY "Only system can manage rate limits" 
ON public.email_rate_limits 
FOR ALL 
USING (false);

-- Add email confirmation tracking to portal_users if not exists
ALTER TABLE public.portal_users 
ADD COLUMN IF NOT EXISTS email_confirmed BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS email_confirmed_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS confirmation_token TEXT;

-- Update existing users to be confirmed (existing flow)
UPDATE public.portal_users 
SET email_confirmed = true, email_confirmed_at = created_at 
WHERE email_confirmed IS NULL OR email_confirmed = false;