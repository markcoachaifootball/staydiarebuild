/**
 * Converts a string into a URL-friendly slug
 * - Converts to lowercase
 * - Removes special characters and punctuation
 * - Replaces spaces and multiple dashes with single dashes
 * - Trims leading/trailing dashes
 */
export function generateSlug(text: string): string {
  if (!text) return '';
  
  return text
    .toLowerCase()
    .trim()
    // Remove quotes, apostrophes, colons, and other special characters
    .replace(/["""''`',:;!?()[\]{}]/g, '')
    // Replace ampersands with 'and'
    .replace(/&/g, ' and ')
    // Replace any remaining non-alphanumeric characters (except hyphens) with spaces
    .replace(/[^a-z0-9\s-]/g, ' ')
    // Replace multiple spaces or hyphens with single hyphen
    .replace(/[\s-]+/g, '-')
    // Remove leading and trailing hyphens
    .replace(/^-+|-+$/g, '');
}

/**
 * Normalizes existing slugs that might have encoding issues
 */
export function normalizeSlug(slug: string): string {
  if (!slug) return '';
  
  try {
    // First decode URI components
    const decoded = decodeURIComponent(slug);
    // Then generate a clean slug
    return generateSlug(decoded);
  } catch (error) {
    // If decoding fails, just generate slug from original
    return generateSlug(slug);
  }
}