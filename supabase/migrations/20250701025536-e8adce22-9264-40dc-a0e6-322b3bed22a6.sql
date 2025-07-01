
-- Add scheduling and distribution tracking to posts table
ALTER TABLE public.posts 
ADD COLUMN scheduled_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN distribution_status TEXT DEFAULT 'none' CHECK (distribution_status IN ('none', 'scheduled', 'sent', 'failed'));

-- Add scheduling to email campaigns
ALTER TABLE public.email_campaigns
ADD COLUMN scheduled_send_at TIMESTAMP WITH TIME ZONE;

-- Create reusable tags table
CREATE TABLE public.tags (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  usage_count INTEGER NOT NULL DEFAULT 0
);

-- Enable RLS on tags table
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;

-- Create policies for tags
CREATE POLICY "Anyone can view tags" 
  ON public.tags 
  FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can manage tags" 
  ON public.tags 
  FOR ALL 
  TO authenticated
  USING (true);

-- Create function to update tag usage count
CREATE OR REPLACE FUNCTION public.update_tag_usage()
RETURNS TRIGGER AS $$
BEGIN
  -- Update usage count for tags when posts are created/updated
  IF TG_OP = 'INSERT' OR TG_OP = 'UPDATE' THEN
    -- Reset all usage counts first
    UPDATE public.tags SET usage_count = 0;
    
    -- Update usage counts based on current post tags
    UPDATE public.tags 
    SET usage_count = (
      SELECT COUNT(*) 
      FROM public.posts 
      WHERE tags @> ARRAY[public.tags.name]
    );
  END IF;
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update tag usage
CREATE TRIGGER update_tag_usage_trigger
  AFTER INSERT OR UPDATE ON public.posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_tag_usage();
