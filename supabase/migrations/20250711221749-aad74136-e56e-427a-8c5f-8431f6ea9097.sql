-- Create enum for user roles in the portal
CREATE TYPE portal_user_role AS ENUM ('admin', 'client');

-- Create portal users table
CREATE TABLE portal_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  role portal_user_role NOT NULL DEFAULT 'client',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  last_login TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN DEFAULT true
);

-- Create client groups table
CREATE TABLE client_groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_by UUID REFERENCES portal_users(id)
);

-- Create client group memberships table
CREATE TABLE client_group_memberships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES portal_users(id) ON DELETE CASCADE,
  group_id UUID REFERENCES client_groups(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, group_id)
);

-- Create retail agent assignments table
CREATE TABLE retail_agent_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id UUID REFERENCES client_groups(id) ON DELETE CASCADE,
  retail_agent_id TEXT NOT NULL,
  agent_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(group_id, retail_agent_id)
);

-- Create portal configuration table for storing API keys
CREATE TABLE portal_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key_name TEXT NOT NULL UNIQUE,
  encrypted_value TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_by UUID REFERENCES portal_users(id)
);

-- Create magic link tokens table
CREATE TABLE magic_link_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  token TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  used_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE portal_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_group_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE retail_agent_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE portal_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE magic_link_tokens ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for portal_users
CREATE POLICY "Users can view their own record" ON portal_users
  FOR SELECT USING (email = current_setting('portal.current_user_email', true));

CREATE POLICY "Admins can view all users" ON portal_users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM portal_users 
      WHERE email = current_setting('portal.current_user_email', true) 
      AND role = 'admin'
    )
  );

CREATE POLICY "Admins can manage all users" ON portal_users
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM portal_users 
      WHERE email = current_setting('portal.current_user_email', true) 
      AND role = 'admin'
    )
  );

-- Create RLS policies for client_groups
CREATE POLICY "Admins can manage client groups" ON client_groups
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM portal_users 
      WHERE email = current_setting('portal.current_user_email', true) 
      AND role = 'admin'
    )
  );

CREATE POLICY "Users can view their assigned groups" ON client_groups
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM client_group_memberships cgm
      JOIN portal_users pu ON cgm.user_id = pu.id
      WHERE pu.email = current_setting('portal.current_user_email', true)
      AND cgm.group_id = client_groups.id
    )
  );

-- Create RLS policies for client_group_memberships
CREATE POLICY "Admins can manage memberships" ON client_group_memberships
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM portal_users 
      WHERE email = current_setting('portal.current_user_email', true) 
      AND role = 'admin'
    )
  );

CREATE POLICY "Users can view their own memberships" ON client_group_memberships
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM portal_users pu
      WHERE pu.email = current_setting('portal.current_user_email', true)
      AND pu.id = client_group_memberships.user_id
    )
  );

-- Create RLS policies for retail_agent_assignments
CREATE POLICY "Admins can manage agent assignments" ON retail_agent_assignments
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM portal_users 
      WHERE email = current_setting('portal.current_user_email', true) 
      AND role = 'admin'
    )
  );

CREATE POLICY "Users can view their group's agent assignments" ON retail_agent_assignments
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM client_group_memberships cgm
      JOIN portal_users pu ON cgm.user_id = pu.id
      WHERE pu.email = current_setting('portal.current_user_email', true)
      AND cgm.group_id = retail_agent_assignments.group_id
    )
  );

-- Create RLS policies for portal_config (admin only)
CREATE POLICY "Only admins can manage portal config" ON portal_config
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM portal_users 
      WHERE email = current_setting('portal.current_user_email', true) 
      AND role = 'admin'
    )
  );

-- Create RLS policies for magic_link_tokens (no direct access)
CREATE POLICY "No direct access to magic link tokens" ON magic_link_tokens
  FOR ALL USING (false);

-- Insert default admin user
INSERT INTO portal_users (email, role) 
VALUES ('nick@whitegloveai.com', 'admin')
ON CONFLICT (email) DO UPDATE SET role = 'admin';

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_portal_users_updated_at
  BEFORE UPDATE ON portal_users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_client_groups_updated_at
  BEFORE UPDATE ON client_groups
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_portal_config_updated_at
  BEFORE UPDATE ON portal_config
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();