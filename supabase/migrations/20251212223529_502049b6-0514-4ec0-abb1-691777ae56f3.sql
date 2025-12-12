-- Add columns for contact information to civic_gift_logs
ALTER TABLE public.civic_gift_logs 
ADD COLUMN IF NOT EXISTS first_name text,
ADD COLUMN IF NOT EXISTS last_name text,
ADD COLUMN IF NOT EXISTS title text;