-- Add trigger to update contract status when signed
CREATE OR REPLACE FUNCTION update_contract_status_on_signature()
RETURNS TRIGGER AS $$
BEGIN
  -- Update the contract status to 'signed' and set signed_at timestamp
  UPDATE contracts 
  SET 
    status = 'signed',
    signed_at = NEW.created_at,
    updated_at = now()
  WHERE id = NEW.contract_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger that fires when a signature is inserted
CREATE TRIGGER on_signature_created
  AFTER INSERT ON signatures
  FOR EACH ROW
  EXECUTE FUNCTION update_contract_status_on_signature();