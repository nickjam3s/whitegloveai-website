-- Drop existing policies on civic_gift_logs
DROP POLICY IF EXISTS "Public can insert logs via edge function" ON public.civic_gift_logs;
DROP POLICY IF EXISTS "Edge functions can update logs" ON public.civic_gift_logs;
DROP POLICY IF EXISTS "Admins can view logs" ON public.civic_gift_logs;

-- INSERT: Only service role (edge functions) can insert - blocks anonymous/public inserts
CREATE POLICY "Service role can insert logs" 
ON public.civic_gift_logs 
FOR INSERT 
WITH CHECK (
  (SELECT current_setting('role', true)) = 'service_role'
);

-- UPDATE: Only service role (edge functions) can update
CREATE POLICY "Service role can update logs" 
ON public.civic_gift_logs 
FOR UPDATE 
USING (
  (SELECT current_setting('role', true)) = 'service_role'
)
WITH CHECK (
  (SELECT current_setting('role', true)) = 'service_role'
);

-- SELECT: Only portal admins can view logs (using security definer function)
CREATE POLICY "Admins can view logs" 
ON public.civic_gift_logs 
FOR SELECT 
USING (
  get_portal_user_email() IS NOT NULL 
  AND check_is_portal_admin(get_portal_user_email())
);