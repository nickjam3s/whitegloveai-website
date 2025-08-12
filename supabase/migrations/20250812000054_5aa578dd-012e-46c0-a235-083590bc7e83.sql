-- Fix RLS for subscribers: restrict read/update/delete to admins, allow public inserts for newsletter signup

-- 1) Create a SECURITY DEFINER helper to check admin role via profiles table
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.id = auth.uid()
      AND p.role::text = 'admin'
  );
$$;

-- 2) Drop overly permissive policy if it exists
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
      AND tablename = 'subscribers' 
      AND policyname = 'Authenticated users can manage subscribers'
  ) THEN
    EXECUTE 'DROP POLICY "Authenticated users can manage subscribers" ON public.subscribers';
  END IF;
END $$;

-- 3) Create proper policies
-- Allow anyone (including anon) to insert a subscription row
CREATE POLICY "Anyone can subscribe"
ON public.subscribers
FOR INSERT
TO public
WITH CHECK (true);

-- Admins can view subscribers
CREATE POLICY "Admins can view subscribers"
ON public.subscribers
FOR SELECT
TO authenticated
USING (public.is_admin());

-- Admins can update subscribers
CREATE POLICY "Admins can update subscribers"
ON public.subscribers
FOR UPDATE
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- Admins can delete subscribers
CREATE POLICY "Admins can delete subscribers"
ON public.subscribers
FOR DELETE
TO authenticated
USING (public.is_admin());