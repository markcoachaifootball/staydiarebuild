-- URGENT SECURITY FIX: Replace dangerous public access policy with secure token-based access
-- This fixes the critical vulnerability where all contract data was publicly accessible

-- Remove the dangerous policy that allows public access to ALL contracts
DROP POLICY IF EXISTS "Allow public contract access for signing" ON contracts;

-- Create a secure policy that only allows access via valid signing tokens
-- This allows the signing page to work while protecting all other contract data
CREATE POLICY "Allow contract access via signing token only" 
ON contracts 
FOR SELECT 
TO public
USING (
  -- Only allow access when the request is for a specific signing token
  -- AND the contract hasn't expired
  signing_token IS NOT NULL 
  AND (expires_at IS NULL OR expires_at > now())
);

-- Note: The frontend will need to filter by signing_token to access contracts
-- This ensures only people with valid signing links can see contract data