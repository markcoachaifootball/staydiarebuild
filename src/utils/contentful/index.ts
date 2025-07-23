
// Re-export everything from the contentful modules
export * from './types';
export * from './client';
export * from './api';
export * from './mockData';

// Export slug utilities
export { generateSlug, normalizeSlug } from '../slugify';
