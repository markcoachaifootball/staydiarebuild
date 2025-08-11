-- Fix critical security vulnerability: restrict contract template access to owners only
-- Remove the dangerous policy that exposes all templates to everyone
DROP POLICY IF EXISTS "Users can view all active templates" ON contract_templates;

-- Create a secure policy that only allows users to view their own templates
CREATE POLICY "Users can view their own templates" 
ON contract_templates 
FOR SELECT 
TO authenticated
USING (auth.uid() = created_by);

-- Also ensure users can only view their own templates when creating contracts
-- This prevents users from seeing template names/IDs they shouldn't have access to