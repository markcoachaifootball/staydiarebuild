-- Update storage bucket policies to allow public access for contract documents
-- This will fix the "Bucket not found" error when accessing PDF files

-- Check if bucket exists, create policies for public access
INSERT INTO storage.buckets (id, name, public) 
VALUES ('contract-documents', 'contract-documents', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Allow public access to contract documents
CREATE POLICY "Contract documents are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'contract-documents');

-- Allow authenticated users to upload contract documents
CREATE POLICY "Allow authenticated uploads to contract-documents" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'contract-documents' AND auth.role() = 'authenticated');