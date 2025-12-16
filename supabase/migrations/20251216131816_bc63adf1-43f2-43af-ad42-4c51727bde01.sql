-- Fix 1: Create a secure contract signing function that validates the signing token

-- First drop the policy that depends on the function
DROP POLICY IF EXISTS "Allow contract signing" ON public.signatures;

-- Now drop the old insecure function
DROP FUNCTION IF EXISTS public.can_sign_contract(uuid);

-- Create new secure function that validates signing token
CREATE OR REPLACE FUNCTION public.can_sign_contract_with_token(contract_uuid uuid, provided_token uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 
    FROM contracts 
    WHERE id = contract_uuid 
    AND signing_token = provided_token
    AND status IN ('sent', 'viewed', 'draft')
    AND (expires_at IS NULL OR expires_at > now())
  );
$$;

-- Create a secure RPC function to sign contracts
-- This validates the token and inserts the signature in one atomic operation
CREATE OR REPLACE FUNCTION public.sign_contract(
  p_token uuid,
  p_signature_data text,
  p_signature_type text DEFAULT 'drawn',
  p_terms_accepted boolean DEFAULT false,
  p_signer_user_agent text DEFAULT NULL
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_contract_id uuid;
  v_contract_status text;
  v_signature_id uuid;
BEGIN
  -- Get the contract by signing token and validate
  SELECT id, status INTO v_contract_id, v_contract_status
  FROM contracts
  WHERE signing_token = p_token
    AND status IN ('sent', 'viewed', 'draft')
    AND (expires_at IS NULL OR expires_at > now());
  
  IF v_contract_id IS NULL THEN
    RETURN jsonb_build_object('success', false, 'error', 'Contract not found, expired, or already signed');
  END IF;
  
  -- Check if already signed
  IF v_contract_status = 'signed' THEN
    RETURN jsonb_build_object('success', false, 'error', 'Contract already signed');
  END IF;
  
  -- Insert the signature
  INSERT INTO signatures (
    contract_id,
    signature_data,
    signature_type,
    terms_accepted,
    signer_user_agent
  ) VALUES (
    v_contract_id,
    p_signature_data,
    p_signature_type,
    p_terms_accepted,
    p_signer_user_agent
  )
  RETURNING id INTO v_signature_id;
  
  -- Return success with contract ID for notification
  RETURN jsonb_build_object(
    'success', true, 
    'signature_id', v_signature_id,
    'contract_id', v_contract_id
  );
END;
$$;

-- Create a restrictive policy - direct inserts are blocked; users must use sign_contract RPC
CREATE POLICY "Allow contract signing via RPC only"
ON public.signatures
FOR INSERT
WITH CHECK (false);

-- Fix 2: Make the contract-documents bucket private
UPDATE storage.buckets 
SET public = false 
WHERE id = 'contract-documents';

-- Create storage policies for authenticated users to access their own documents
DROP POLICY IF EXISTS "Users can upload their own documents" ON storage.objects;
DROP POLICY IF EXISTS "Users can view their own documents" ON storage.objects;
DROP POLICY IF EXISTS "Public access to contract documents" ON storage.objects;

-- Policy for authenticated users to upload to their folder
CREATE POLICY "Users can upload to contract documents folder"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'contract-documents' 
  AND (storage.foldername(name))[1] = auth.uid()::text
);

-- Policy for authenticated users to view their own files
CREATE POLICY "Users can view their contract documents"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'contract-documents' 
  AND (storage.foldername(name))[1] = auth.uid()::text
);

-- Policy for authenticated users to delete their own files  
CREATE POLICY "Users can delete their contract documents"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'contract-documents' 
  AND (storage.foldername(name))[1] = auth.uid()::text
);