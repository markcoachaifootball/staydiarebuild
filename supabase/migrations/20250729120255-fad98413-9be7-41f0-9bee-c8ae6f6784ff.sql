-- Create storage bucket for contract documents
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('contract-documents', 'contract-documents', false, 52428800, ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']);

-- Create storage policies for contract documents
CREATE POLICY "Users can upload their own contract documents"
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'contract-documents' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view their own contract documents"
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'contract-documents' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own contract documents"
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'contract-documents' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own contract documents"
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'contract-documents' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Add file attachment columns to contract_templates table
ALTER TABLE public.contract_templates 
ADD COLUMN template_file_url TEXT,
ADD COLUMN template_file_name TEXT,
ADD COLUMN terms_file_url TEXT,
ADD COLUMN terms_file_name TEXT;