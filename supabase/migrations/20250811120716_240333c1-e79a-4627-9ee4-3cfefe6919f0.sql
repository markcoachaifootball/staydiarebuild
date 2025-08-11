-- URGENT SECURITY FIX: Fix signatures table policy to prevent unauthorized access
-- This removes the dangerous clause that allowed viewing ANY signature if a contract exists

-- Remove the insecure policy
DROP POLICY IF EXISTS "Contract owners can view signatures" ON signatures;

-- Create a secure policy that ONLY allows contract owners to view signatures
CREATE POLICY "Contract owners can view signatures" 
ON signatures 
FOR SELECT 
USING (
  -- Only allow viewing signatures if the user owns the contract
  EXISTS (
    SELECT 1
    FROM contracts
    WHERE contracts.id = signatures.contract_id 
    AND contracts.sent_by = auth.uid()
  )
);

-- Note: This ensures only the person who created the contract can see its signatures
-- Removes the dangerous "OR" clause that allowed public access to any signature