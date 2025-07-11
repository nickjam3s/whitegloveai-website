-- Create RPC function to set portal context for RLS
CREATE OR REPLACE FUNCTION public.set_config(parameter text, value text)
RETURNS void
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT set_config(parameter, value, false);
$$;