-- Drop the problematic policies that cause infinite recursion
DROP POLICY IF EXISTS "Admins can view all users" ON public.portal_users;
DROP POLICY IF EXISTS "Admins can manage all users" ON public.portal_users;
DROP POLICY IF EXISTS "Users can view their own record" ON public.portal_users;

-- Create a security definer function to check portal admin status without triggering RLS
CREATE OR REPLACE FUNCTION public.check_is_portal_admin(user_email text)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.portal_users
    WHERE email = user_email
    AND role = 'admin'::portal_user_role
  );
$$;

-- Recreate policies using the security definer function (no recursion)
CREATE POLICY "Users can view their own record" 
ON public.portal_users 
FOR SELECT 
USING (
  get_portal_user_email() IS NOT NULL 
  AND email = get_portal_user_email()
);

CREATE POLICY "Admins can view all users" 
ON public.portal_users 
FOR SELECT 
USING (
  get_portal_user_email() IS NOT NULL 
  AND check_is_portal_admin(get_portal_user_email())
);

CREATE POLICY "Admins can manage all users" 
ON public.portal_users 
FOR ALL 
USING (
  get_portal_user_email() IS NOT NULL 
  AND check_is_portal_admin(get_portal_user_email())
);