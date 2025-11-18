-- Add customer data fields to purchases table
ALTER TABLE public.purchases 
ADD COLUMN IF NOT EXISTS first_name TEXT,
ADD COLUMN IF NOT EXISTS last_name TEXT,
ADD COLUMN IF NOT EXISTS language TEXT;