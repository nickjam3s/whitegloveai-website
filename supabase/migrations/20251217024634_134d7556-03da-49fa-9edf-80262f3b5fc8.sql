-- Drop existing policies on portal_users
DROP POLICY IF EXISTS "Users can view their own record" ON public.portal_users;
DROP POLICY IF EXISTS "Admins can view all users" ON public.portal_users;
DROP POLICY IF EXISTS "Admins can manage all users" ON public.portal_users;

-- Create a helper function to safely get the portal user email
-- This function returns NULL if the setting is empty or not set
CREATE OR REPLACE FUNCTION public.get_portal_user_email()
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT NULLIF(TRIM(current_setting('portal.current_user_email', true)), '');
$$;

-- Create improved RLS policies that explicitly deny access when session variable is not properly set

-- Users can only view their own record when the session email is properly set
CREATE POLICY "Users can view their own record" 
ON public.portal_users 
FOR SELECT 
USING (
  public.get_portal_user_email() IS NOT NULL 
  AND email = public.get_portal_user_email()
);

-- Admins can view all users (only when session is properly set)
CREATE POLICY "Admins can view all users" 
ON public.portal_users 
FOR SELECT 
USING (
  public.get_portal_user_email() IS NOT NULL 
  AND EXISTS (
    SELECT 1 FROM public.portal_users pu
    WHERE pu.email = public.get_portal_user_email()
    AND pu.role = 'admin'::portal_user_role
  )
);

-- Admins can manage all users (only when session is properly set)
CREATE POLICY "Admins can manage all users" 
ON public.portal_users 
FOR ALL 
USING (
  public.get_portal_user_email() IS NOT NULL 
  AND EXISTS (
    SELECT 1 FROM public.portal_users pu
    WHERE pu.email = public.get_portal_user_email()
    AND pu.role = 'admin'::portal_user_role
  )
);

-- Also update the is_portal_admin function to use the new helper
CREATE OR REPLACE FUNCTION public.is_portal_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.portal_users
    WHERE email = public.get_portal_user_email()
    AND role = 'admin'::portal_user_role
  ) AND public.get_portal_user_email() IS NOT NULL;
$$;