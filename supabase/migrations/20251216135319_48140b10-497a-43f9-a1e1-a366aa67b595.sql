-- Create sitemap_entries table
CREATE TABLE public.sitemap_entries (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  loc text NOT NULL UNIQUE,
  lastmod date NOT NULL DEFAULT CURRENT_DATE,
  changefreq text NOT NULL DEFAULT 'weekly',
  priority numeric(2,1) NOT NULL DEFAULT 0.5,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.sitemap_entries ENABLE ROW LEVEL SECURITY;

-- Allow public read access (sitemap needs to be publicly accessible)
CREATE POLICY "Sitemap entries are publicly readable"
ON public.sitemap_entries
FOR SELECT
USING (is_active = true);

-- Only service role can modify (managed via Supabase dashboard or edge functions)
CREATE POLICY "Service role can manage sitemap entries"
ON public.sitemap_entries
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Trigger for updated_at
CREATE TRIGGER update_sitemap_entries_updated_at
BEFORE UPDATE ON public.sitemap_entries
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Seed with existing routes (excluding homepage which will be hardcoded)
INSERT INTO public.sitemap_entries (loc, changefreq, priority) VALUES
  ('/for-clubs', 'weekly', 0.9),
  ('/sports', 'weekly', 0.9),
  ('/revenue-sharing', 'weekly', 0.9),
  ('/technology', 'weekly', 0.8),
  ('/features', 'weekly', 0.8),
  ('/partnerships', 'weekly', 0.8),
  ('/fan-engagement', 'weekly', 0.8),
  ('/for-leagues', 'weekly', 0.8),
  ('/solutions', 'weekly', 0.8),
  ('/football-clubs', 'weekly', 0.7),
  ('/basketball-clubs', 'weekly', 0.7),
  ('/rugby-clubs', 'weekly', 0.7),
  ('/hockey-clubs', 'weekly', 0.7),
  ('/news', 'daily', 0.7),
  ('/about-us', 'monthly', 0.6),
  ('/contact', 'monthly', 0.6),
  ('/testimonials', 'monthly', 0.6),
  ('/community', 'weekly', 0.6),
  ('/faq', 'monthly', 0.5),
  ('/book-demo', 'monthly', 0.7);