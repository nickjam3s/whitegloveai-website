-- Insert admin accounts for Nick and Andi
-- Note: These are portal_users entries. Passwords are for Supabase Auth login.
-- Nick: nick@whitegloveai.com / WgAI-Nick-2026!$Kx
-- Andi: andi@whitegloveai.com / WgAI-Andi-2026!$Qm

INSERT INTO public.portal_users (email, role, is_active, email_confirmed)
VALUES 
  ('nick@whitegloveai.com', 'admin', true, true),
  ('andi@whitegloveai.com', 'admin', true, true)
ON CONFLICT (email) DO UPDATE SET
  role = 'admin',
  is_active = true,
  email_confirmed = true;