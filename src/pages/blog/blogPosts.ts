export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  publishDate: string;
  readTime: string;
  image?: string;
  category: string;
  metaDescription: string;
  keywords: string;
}

export const blogPosts: BlogPost[] = [];
