
import { createClient } from 'contentful';
import { ContentType, EntryCollection } from 'contentful';

// Contentful client setup with credentials from the code sample
const spaceId = 'qo4q4xk8vua7';
const accessToken = '9r0ya2DRB2KRdn8Jqr2xQpu8n8mBC56Mz0Dn7Q-1TzU';
const previewAccessToken = 'kJwRZ_fMX_lF4oq7TVmE8dg4MevbU026TocqU';

// Check if environment variables are available (for future flexibility)
const envSpaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const envAccessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Create client with the provided values or fallback to environment variables if available
export const contentfulClient = createClient({
  space: envSpaceId || spaceId,
  accessToken: envAccessToken || accessToken,
  environment: 'master', // Explicitly set the environment
});

// Create preview client for draft content
export const previewClient = createClient({
  space: envSpaceId || spaceId,
  accessToken: previewAccessToken,
  host: 'preview.contentful.com',
  environment: 'master', // Explicitly set the environment
});
