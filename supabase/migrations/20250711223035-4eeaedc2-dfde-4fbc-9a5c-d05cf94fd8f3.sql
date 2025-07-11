-- Update portal system to use Retell AI instead of generic retail
-- Rename tables and columns from retail to retell

-- Update portal_config to reference retell_api_key
UPDATE portal_config 
SET key_name = 'retell_api_key' 
WHERE key_name = 'retail_api_key';

-- Rename retail_agent_assignments table to retell_agent_assignments
ALTER TABLE retail_agent_assignments RENAME TO retell_agent_assignments;

-- Update the foreign key name for consistency
ALTER TABLE retell_agent_assignments RENAME COLUMN retail_agent_id TO retell_agent_id;

-- Update RLS policy names to reflect Retell instead of retail
DROP POLICY "Admins can manage agent assignments" ON retell_agent_assignments;
DROP POLICY "Users can view their group's agent assignments" ON retell_agent_assignments;

CREATE POLICY "Admins can manage retell agent assignments" 
ON retell_agent_assignments 
FOR ALL 
USING (EXISTS ( 
  SELECT 1 FROM portal_users 
  WHERE portal_users.email = current_setting('portal.current_user_email', true) 
  AND portal_users.role = 'admin'::portal_user_role
));

CREATE POLICY "Users can view their group's retell agent assignments" 
ON retell_agent_assignments 
FOR SELECT 
USING (EXISTS ( 
  SELECT 1 FROM client_group_memberships cgm 
  JOIN portal_users pu ON cgm.user_id = pu.id 
  WHERE pu.email = current_setting('portal.current_user_email', true) 
  AND cgm.group_id = retell_agent_assignments.group_id
));