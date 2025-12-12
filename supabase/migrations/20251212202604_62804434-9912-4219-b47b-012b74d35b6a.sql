-- Create civic_gift_otp table for OTP tracking
CREATE TABLE public.civic_gift_otp (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  otp_code text NOT NULL,
  expires_at timestamp with time zone NOT NULL,
  verified boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now()
);

-- Create civic_gift_logs table for logging all submissions
CREATE TABLE public.civic_gift_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  entity_type text NOT NULL,
  primary_name text NOT NULL,
  secondary_name text NOT NULL,
  region text DEFAULT 'Texas',
  phone_area_code text NOT NULL,
  specialization text DEFAULT 'General Services',
  website text,
  provision_kb boolean DEFAULT false,
  enhanced_crawl boolean DEFAULT false,
  crawl_max_pages integer DEFAULT 10,
  crawl_max_depth integer DEFAULT 2,
  phone_number_returned text,
  agent_id text,
  api_status text NOT NULL,
  api_response jsonb,
  ip_address text,
  user_agent text,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.civic_gift_otp ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.civic_gift_logs ENABLE ROW LEVEL SECURITY;

-- OTP policies - only system can manage
CREATE POLICY "System can manage OTP" ON public.civic_gift_otp
  FOR ALL USING (false);

-- Allow public insert for OTP (edge function will use service role)
CREATE POLICY "Public can insert OTP via edge function" ON public.civic_gift_otp
  FOR INSERT WITH CHECK (true);

-- Logs policies
CREATE POLICY "Public can insert logs via edge function" ON public.civic_gift_logs
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view logs" ON public.civic_gift_logs
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM portal_users
      WHERE email = current_setting('portal.current_user_email', true)
      AND role = 'admin'::portal_user_role
    )
  );

-- Index for OTP lookup
CREATE INDEX idx_civic_gift_otp_email_code ON public.civic_gift_otp(email, otp_code);
CREATE INDEX idx_civic_gift_logs_email ON public.civic_gift_logs(email);
CREATE INDEX idx_civic_gift_logs_created_at ON public.civic_gift_logs(created_at DESC);