-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Users can view own purchases" ON public.purchases;

-- Create a properly scoped policy that only allows users to view their own purchases
CREATE POLICY "Users can view own purchases" 
ON public.purchases 
FOR SELECT 
USING (
  -- User must be authenticated
  auth.uid() IS NOT NULL
  AND (
    -- Match by user_id if available
    auth.uid() = user_id
    -- OR match by verified email from JWT
    OR user_email = (auth.jwt() ->> 'email'::text)
  )
);