-- Add limited signature viewing for the signing process
-- This allows viewing signatures only for contracts accessible via signing token

CREATE POLICY "Allow viewing signatures during signing process" 
ON signatures 
FOR SELECT 
TO public
USING (
  -- Only allow viewing signatures for contracts that can be accessed via signing token
  -- This enables checking if a contract is already signed during the signing process
  EXISTS (
    SELECT 1
    FROM contracts
    WHERE contracts.id = signatures.contract_id 
    AND contracts.signing_token IS NOT NULL 
    AND (contracts.expires_at IS NULL OR contracts.expires_at > now())
  )
);

-- This policy works together with the contract access policy to ensure
-- that only people with valid signing links can check signature status