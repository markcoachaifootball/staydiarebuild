-- Add DELETE policy for contracts table
-- Allow users to delete their own contracts (especially drafts)

CREATE POLICY "Users can delete their own contracts" 
ON contracts 
FOR DELETE 
USING (auth.uid() = sent_by);