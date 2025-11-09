-- Create storage bucket for course PDFs
INSERT INTO storage.buckets (id, name, public) 
VALUES ('course-pdfs', 'course-pdfs', false)
ON CONFLICT (id) DO NOTHING;

-- Create course_outlines table to track PDF uploads
CREATE TABLE IF NOT EXISTS public.course_outlines (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_slug TEXT NOT NULL UNIQUE,
  course_name TEXT NOT NULL,
  pdf_url TEXT,
  pdf_filename TEXT,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  uploaded_by UUID REFERENCES auth.users(id)
);

-- Enable RLS on course_outlines
ALTER TABLE public.course_outlines ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone authenticated can view course outlines
CREATE POLICY "Authenticated users can view course outlines"
  ON public.course_outlines
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Policy: Only admins can insert/update course outlines
CREATE POLICY "Admins can manage course outlines"
  ON public.course_outlines
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.portal_users
      WHERE portal_users.email = auth.jwt() ->> 'email'
      AND portal_users.role = 'admin'
    )
  );

-- Create purchases table to track transactions
CREATE TABLE IF NOT EXISTS public.purchases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email TEXT NOT NULL,
  course_slug TEXT NOT NULL,
  course_name TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  amount_paid DECIMAL(10, 2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  stripe_payment_intent_id TEXT UNIQUE,
  stripe_checkout_session_id TEXT UNIQUE,
  status TEXT NOT NULL DEFAULT 'pending',
  purchased_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  CONSTRAINT valid_quantity CHECK (quantity > 0),
  CONSTRAINT valid_amount CHECK (amount_paid >= 0)
);

-- Enable RLS on purchases
ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own purchases
CREATE POLICY "Users can view own purchases"
  ON public.purchases
  FOR SELECT
  USING (auth.uid() = user_id OR user_email = auth.jwt() ->> 'email');

-- Policy: Admins can view all purchases
CREATE POLICY "Admins can view all purchases"
  ON public.purchases
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.portal_users
      WHERE portal_users.email = auth.jwt() ->> 'email'
      AND portal_users.role = 'admin'
    )
  );

-- Create user_licenses table to track license ownership
CREATE TABLE IF NOT EXISTS public.user_licenses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email TEXT NOT NULL,
  course_slug TEXT NOT NULL,
  course_name TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  purchase_id UUID REFERENCES public.purchases(id),
  granted_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE,
  CONSTRAINT valid_license_quantity CHECK (quantity > 0)
);

-- Enable RLS on user_licenses
ALTER TABLE public.user_licenses ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own licenses
CREATE POLICY "Users can view own licenses"
  ON public.user_licenses
  FOR SELECT
  USING (auth.uid() = user_id OR user_email = auth.jwt() ->> 'email');

-- Policy: Admins can manage all licenses
CREATE POLICY "Admins can manage licenses"
  ON public.user_licenses
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.portal_users
      WHERE portal_users.email = auth.jwt() ->> 'email'
      AND portal_users.role = 'admin'
    )
  );

-- Create storage policies for course PDFs
CREATE POLICY "Authenticated users can view course PDFs"
  ON storage.objects
  FOR SELECT
  USING (
    bucket_id = 'course-pdfs' 
    AND auth.role() = 'authenticated'
  );

CREATE POLICY "Admins can upload course PDFs"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'course-pdfs'
    AND EXISTS (
      SELECT 1 FROM public.portal_users
      WHERE portal_users.email = auth.jwt() ->> 'email'
      AND portal_users.role = 'admin'
    )
  );

CREATE POLICY "Admins can update course PDFs"
  ON storage.objects
  FOR UPDATE
  USING (
    bucket_id = 'course-pdfs'
    AND EXISTS (
      SELECT 1 FROM public.portal_users
      WHERE portal_users.email = auth.jwt() ->> 'email'
      AND portal_users.role = 'admin'
    )
  );

CREATE POLICY "Admins can delete course PDFs"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'course-pdfs'
    AND EXISTS (
      SELECT 1 FROM public.portal_users
      WHERE portal_users.email = auth.jwt() ->> 'email'
      AND portal_users.role = 'admin'
    )
  );

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_purchases_user_id ON public.purchases(user_id);
CREATE INDEX IF NOT EXISTS idx_purchases_user_email ON public.purchases(user_email);
CREATE INDEX IF NOT EXISTS idx_purchases_stripe_session ON public.purchases(stripe_checkout_session_id);
CREATE INDEX IF NOT EXISTS idx_user_licenses_user_id ON public.user_licenses(user_id);
CREATE INDEX IF NOT EXISTS idx_user_licenses_user_email ON public.user_licenses(user_email);
CREATE INDEX IF NOT EXISTS idx_user_licenses_course_slug ON public.user_licenses(course_slug);

-- Create trigger for updated_at on course_outlines
CREATE TRIGGER update_course_outlines_updated_at
  BEFORE UPDATE ON public.course_outlines
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();