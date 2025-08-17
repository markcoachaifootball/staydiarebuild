-- Tighten access to sensitive signature data
-- 1) Remove overly-permissive policy that allowed anyone to read signatures for any active contract
DROP POLICY IF EXISTS "Allow viewing signatures during signing process" ON public.signatures;

-- 2) Ensure owner-only read access remains (policy already exists). If missing in some environments, recreate it safely
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
      AND tablename = 'signatures' 
      AND policyname = 'Contract owners can view signatures'
  ) THEN
    CREATE POLICY "Contract owners can view signatures"
    ON public.signatures
    FOR SELECT
    USING (
      EXISTS (
        SELECT 1 FROM public.contracts c
        WHERE c.id = signatures.contract_id
          AND c.sent_by = auth.uid()
      )
    );
  END IF;
END$$;
