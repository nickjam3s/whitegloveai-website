-- Create enum for proposal status
CREATE TYPE public.proposal_status AS ENUM ('draft', 'published', 'viewed', 'signed', 'expired');

-- Create proposals table
CREATE TABLE public.proposals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_by UUID NOT NULL REFERENCES public.portal_users(id) ON DELETE CASCADE,
  client_name TEXT NOT NULL,
  client_contact TEXT,
  client_email TEXT,
  slug TEXT UNIQUE NOT NULL,
  pin TEXT NOT NULL,
  status proposal_status NOT NULL DEFAULT 'draft',
  template_style TEXT NOT NULL DEFAULT 'executive-purple',
  source_document_path TEXT,
  source_document_text TEXT,
  proposal_content JSONB DEFAULT '{}'::jsonb,
  proposal_images JSONB DEFAULT '[]'::jsonb,
  signature_data JSONB,
  signed_at TIMESTAMPTZ,
  signed_by_name TEXT,
  published_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  view_count INTEGER NOT NULL DEFAULT 0,
  last_viewed_at TIMESTAMPTZ,
  generated_email TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create proposal activity logs table
CREATE TABLE public.proposal_activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  proposal_id UUID NOT NULL REFERENCES public.proposals(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  actor_email TEXT,
  ip_address TEXT,
  user_agent TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.proposals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.proposal_activity_logs ENABLE ROW LEVEL SECURITY;

-- Create function to check if user is portal admin (for proposals context)
CREATE OR REPLACE FUNCTION public.is_proposal_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.portal_users
    WHERE email = get_portal_user_email()
    AND role = 'admin'::portal_user_role
  ) AND get_portal_user_email() IS NOT NULL;
$$;

-- RLS Policies for proposals

-- Admins can view all proposals
CREATE POLICY "Admins can view all proposals"
ON public.proposals
FOR SELECT
USING (is_proposal_admin());

-- Admins can insert proposals
CREATE POLICY "Admins can insert proposals"
ON public.proposals
FOR INSERT
WITH CHECK (is_proposal_admin());

-- Admins can update proposals
CREATE POLICY "Admins can update proposals"
ON public.proposals
FOR UPDATE
USING (is_proposal_admin());

-- Admins can delete proposals
CREATE POLICY "Admins can delete proposals"
ON public.proposals
FOR DELETE
USING (is_proposal_admin());

-- Service role can manage proposals (for edge functions)
CREATE POLICY "Service role full access to proposals"
ON public.proposals
FOR ALL
USING (current_setting('role', true) = 'service_role')
WITH CHECK (current_setting('role', true) = 'service_role');

-- RLS Policies for proposal_activity_logs

-- Admins can view activity logs
CREATE POLICY "Admins can view activity logs"
ON public.proposal_activity_logs
FOR SELECT
USING (is_proposal_admin());

-- Service role can insert activity logs
CREATE POLICY "Service role can insert activity logs"
ON public.proposal_activity_logs
FOR INSERT
WITH CHECK (current_setting('role', true) = 'service_role');

-- Service role can manage activity logs
CREATE POLICY "Service role full access to activity logs"
ON public.proposal_activity_logs
FOR ALL
USING (current_setting('role', true) = 'service_role')
WITH CHECK (current_setting('role', true) = 'service_role');

-- Create updated_at trigger for proposals
CREATE TRIGGER update_proposals_updated_at
BEFORE UPDATE ON public.proposals
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for proposal documents
INSERT INTO storage.buckets (id, name, public)
VALUES ('proposal-documents', 'proposal-documents', false)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for proposal-documents bucket
CREATE POLICY "Admins can upload proposal documents"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'proposal-documents' 
  AND is_proposal_admin()
);

CREATE POLICY "Admins can view proposal documents"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'proposal-documents' 
  AND is_proposal_admin()
);

CREATE POLICY "Admins can delete proposal documents"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'proposal-documents' 
  AND is_proposal_admin()
);

-- Service role access to storage
CREATE POLICY "Service role access to proposal documents"
ON storage.objects
FOR ALL
USING (
  bucket_id = 'proposal-documents' 
  AND current_setting('role', true) = 'service_role'
)
WITH CHECK (
  bucket_id = 'proposal-documents' 
  AND current_setting('role', true) = 'service_role'
);

-- Create indexes for better performance
CREATE INDEX idx_proposals_slug ON public.proposals(slug);
CREATE INDEX idx_proposals_status ON public.proposals(status);
CREATE INDEX idx_proposals_created_by ON public.proposals(created_by);
CREATE INDEX idx_proposal_activity_logs_proposal_id ON public.proposal_activity_logs(proposal_id);