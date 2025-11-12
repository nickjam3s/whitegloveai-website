-- Add metadata column to course_outlines table to store structured course information
ALTER TABLE public.course_outlines 
ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT '{}'::jsonb;

-- Add index for faster metadata queries
CREATE INDEX IF NOT EXISTS idx_course_outlines_metadata ON public.course_outlines USING GIN (metadata);

-- Add comment to document the metadata structure
COMMENT ON COLUMN public.course_outlines.metadata IS 'Structured course information extracted from PDF: {
  "objectives": ["objective1", "objective2"],
  "modules": [{"title": "Module 1", "topics": ["topic1", "topic2"]}],
  "prerequisites": ["prereq1"],
  "duration": "X hours",
  "level": "Beginner/Intermediate/Advanced",
  "key_topics": ["topic1", "topic2"]
}';