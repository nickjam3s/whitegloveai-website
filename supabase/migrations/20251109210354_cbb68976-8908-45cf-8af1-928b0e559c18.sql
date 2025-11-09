-- Drop the problematic policies
DROP POLICY IF EXISTS "Admins can view all users" ON portal_users;
DROP POLICY IF EXISTS "Admins can manage all users" ON portal_users;
DROP POLICY IF EXISTS "Users can view their own record" ON portal_users;

-- Create a function to check if current user is admin (without recursion)
CREATE OR REPLACE FUNCTION public.is_portal_admin()
RETURNS BOOLEAN AS $$
DECLARE
  user_role portal_user_role;
BEGIN
  SELECT role INTO user_role
  FROM portal_users
  WHERE email = current_setting('portal.current_user_email', true)
  LIMIT 1;
  
  RETURN user_role = 'admin';
EXCEPTION
  WHEN OTHERS THEN
    RETURN FALSE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create new policies without recursion
CREATE POLICY "Users can view their own record"
  ON portal_users
  FOR SELECT
  USING (email = current_setting('portal.current_user_email', true));

CREATE POLICY "Admins can view all users"
  ON portal_users
  FOR SELECT
  USING (is_portal_admin());

CREATE POLICY "Admins can manage all users"
  ON portal_users
  FOR ALL
  USING (is_portal_admin());