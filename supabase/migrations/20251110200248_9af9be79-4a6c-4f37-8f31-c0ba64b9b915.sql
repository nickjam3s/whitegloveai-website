-- Add order_number column to purchases table
ALTER TABLE public.purchases 
ADD COLUMN order_number TEXT UNIQUE;

-- Create function to generate unique order numbers
CREATE OR REPLACE FUNCTION public.generate_order_number()
RETURNS TEXT AS $$
DECLARE
  new_order_number TEXT;
  done BOOL;
BEGIN
  done := false;
  WHILE NOT done LOOP
    new_order_number := 'WG-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || 
                       LPAD(FLOOR(RANDOM() * 10000)::TEXT, 4, '0');
    IF NOT EXISTS (SELECT 1 FROM public.purchases WHERE order_number = new_order_number) THEN
      done := true;
    END IF;
  END LOOP;
  RETURN new_order_number;
END;
$$ LANGUAGE plpgsql;

-- Update RLS policies to allow viewing purchases by email (for guest orders)
DROP POLICY IF EXISTS "Users can view own purchases" ON public.purchases;

CREATE POLICY "Users can view own purchases"
ON public.purchases
FOR SELECT
USING (
  (auth.uid() = user_id) 
  OR 
  (user_email = (auth.jwt() ->> 'email'))
  OR
  (user_email IS NOT NULL AND user_email != '')
);