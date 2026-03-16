
CREATE TABLE public.chat_conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  messages jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Allow public insert/update (anonymous visitors chat)
ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert chat conversations"
ON public.chat_conversations FOR INSERT TO public
WITH CHECK (true);

CREATE POLICY "Anyone can update their session"
ON public.chat_conversations FOR UPDATE TO public
USING (true)
WITH CHECK (true);

CREATE POLICY "Service role can read all"
ON public.chat_conversations FOR SELECT TO service_role
USING (true);
