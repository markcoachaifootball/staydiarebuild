-- 1) Remove insecure public token-based SELECT policy on contracts
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
      AND tablename = 'contracts' 
      AND policyname = 'Allow contract access via signing token only'
  ) THEN
    EXECUTE 'DROP POLICY "Allow contract access via signing token only" ON public.contracts';
  END IF;
END $$;

-- 2) Function to securely fetch contract for signing via token (limited fields)
CREATE OR REPLACE FUNCTION public.get_contract_for_signing(token uuid)
RETURNS TABLE (
  id uuid,
  customer_name text,
  customer_email text,
  customer_company text,
  status text,
  expires_at timestamptz,
  contract_templates jsonb
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    c.id,
    c.customer_name,
    c.customer_email,
    c.customer_company,
    c.status,
    c.expires_at,
    jsonb_build_object(
      'name', ct.name,
      'content', ct.content,
      'terms_and_conditions', ct.terms_and_conditions,
      'template_file_url', ct.template_file_url,
      'template_file_name', ct.template_file_name,
      'terms_file_url', ct.terms_file_url,
      'terms_file_name', ct.terms_file_name
    ) AS contract_templates
  FROM public.contracts c
  JOIN public.contract_templates ct ON ct.id = c.template_id
  WHERE c.signing_token = token
    AND (c.expires_at IS NULL OR c.expires_at > now());
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = 'public';

-- 3) Function to mark contract viewed via token without exposing data
CREATE OR REPLACE FUNCTION public.mark_contract_viewed(token uuid)
RETURNS void AS $$
BEGIN
  UPDATE public.contracts c
  SET viewed_at = now(),
      status = CASE WHEN c.status IN ('draft','sent') THEN 'viewed' ELSE c.status END,
      updated_at = now()
  WHERE c.signing_token = token;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = 'public';

-- 4) Create trigger to update contract status to 'signed' on new signature
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'trg_update_contract_on_signature'
  ) THEN
    CREATE TRIGGER trg_update_contract_on_signature
    AFTER INSERT ON public.signatures
    FOR EACH ROW
    EXECUTE FUNCTION public.update_contract_status_on_signature();
  END IF;
END $$;

-- 5) Grant execute to web roles
GRANT EXECUTE ON FUNCTION public.get_contract_for_signing(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.mark_contract_viewed(uuid) TO anon, authenticated;