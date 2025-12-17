-- Add new columns for Slack approval workflow
ALTER TABLE civic_gift_logs 
  ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS processed_at TIMESTAMP WITH TIME ZONE,
  ADD COLUMN IF NOT EXISTS processed_by TEXT,
  ADD COLUMN IF NOT EXISTS denial_reason TEXT,
  ADD COLUMN IF NOT EXISTS slack_message_ts TEXT;

-- Make phone_area_code nullable with default
ALTER TABLE civic_gift_logs ALTER COLUMN phone_area_code DROP NOT NULL;
ALTER TABLE civic_gift_logs ALTER COLUMN phone_area_code SET DEFAULT 'auto';

-- Update api_status default for new workflow
ALTER TABLE civic_gift_logs ALTER COLUMN api_status SET DEFAULT 'pending';

-- Add RLS policy for edge function to update logs (for approval workflow)
CREATE POLICY "Edge functions can update logs" 
ON civic_gift_logs 
FOR UPDATE 
USING (true) 
WITH CHECK (true);