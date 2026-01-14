-- Update all sitemap entries with today's date to signal fresh content to Google
UPDATE sitemap_entries 
SET lastmod = CURRENT_DATE,
    updated_at = now()
WHERE is_active = true;