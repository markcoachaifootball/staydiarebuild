
# Staydia Sports - Contentful Setup Guide for Administrators

This guide will help you set up and manage the Contentful CMS for the Staydia Sports website.

## Initial Setup

1. Create a Contentful account at [Contentful](https://www.contentful.com/sign-up/)
2. Create a new space named "Staydia Sports"
3. Create a Content Model for News Articles with the following fields:
   - Title (Short text)
   - Slug (Short text, unique)
   - Category (Short text)
   - Date (Date & time)
   - Featured Image (Media)
   - Summary (Short text)
   - Body Content (Rich text)

## Managing Content Types

1. Go to "Content model" in the top navigation
2. Select "News Article" to modify the content type
3. Add validations to ensure required fields (Title, Slug, Date)
4. Set the slug field to be unique
5. Set categories as a dropdown with predefined options (e.g., NEWS, FEATURE, ANNOUNCEMENT)

## API Keys

1. Go to Settings > API keys
2. Create a new API key pair
3. Copy the "Space ID" and "Content Delivery API - access token"
4. Add these values to your project's environment variables:
   - VITE_CONTENTFUL_SPACE_ID
   - VITE_CONTENTFUL_ACCESS_TOKEN

## Managing User Permissions

1. Go to Settings > Users & permissions
2. Click "Add user"
3. Enter the user's email address
4. Select appropriate role:
   - Admin: Full control
   - Editor: Can create and publish content
   - Author: Can create but not publish content
5. Click "Invite"

## Testing Your Setup

1. Create a few test news articles
2. Preview them in the Contentful web app
3. Check that they appear correctly on your website

## Need Help?

Contact the technical team at [tech-support@staydia.com](mailto:tech-support@staydia.com) if you encounter any issues with the Contentful setup.

---

*© 2025 Staydia Sports. All rights reserved.*
