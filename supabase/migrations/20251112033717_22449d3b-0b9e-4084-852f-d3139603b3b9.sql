-- Make the documents bucket public for the sales brochure
UPDATE storage.buckets 
SET public = true 
WHERE id = 'documents';

-- Create RLS policy to allow public access to documents
CREATE POLICY "Public documents are viewable by everyone"
ON storage.objects FOR SELECT
USING (bucket_id = 'documents');