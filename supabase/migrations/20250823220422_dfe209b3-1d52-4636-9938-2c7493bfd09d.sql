-- Portal User Account Management
-- 1. Delete existing nick@whitegloveai.com account
DELETE FROM portal_users WHERE email = 'nick@whitegloveai.com';

-- 2. Ensure admin@whitegloveai.com exists with admin role and full permissions
INSERT INTO portal_users (
  email, 
  role, 
  is_active, 
  email_confirmed, 
  email_confirmed_at,
  created_at,
  updated_at
) VALUES (
  'admin@whitegloveai.com',
  'admin',
  true,
  true,
  now(),
  now(),
  now()
) ON CONFLICT (email) DO UPDATE SET
  role = 'admin',
  is_active = true,
  email_confirmed = true,
  email_confirmed_at = COALESCE(portal_users.email_confirmed_at, now()),
  updated_at = now();

-- 3. Create new nick@whitegloveai.com as client/customer account
INSERT INTO portal_users (
  email,
  role,
  is_active,
  email_confirmed,
  email_confirmed_at,
  created_at,
  updated_at
) VALUES (
  'nick@whitegloveai.com',
  'client',
  true,
  true,
  now(),
  now(),
  now()
);