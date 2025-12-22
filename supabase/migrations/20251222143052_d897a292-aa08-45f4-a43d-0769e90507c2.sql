-- Add follow-up email tracking columns to civic_gift_logs
ALTER TABLE public.civic_gift_logs 
ADD COLUMN IF NOT EXISTS followup_email_1_sent_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS followup_email_2_sent_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS followup_email_3_sent_at TIMESTAMP WITH TIME ZONE;