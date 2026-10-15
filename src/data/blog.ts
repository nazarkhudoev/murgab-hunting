import type { LocalizedText } from "@/lib/navigation";
import type { ContentSection } from "./site-content";

export interface BlogPost {
  slug: string;
  published: boolean;
  ownerReviewed: boolean;
  title: LocalizedText;
  description: LocalizedText;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category: LocalizedText;
  sections: ContentSection[];
  relatedPages: string[];
}
// Add reviewed bilingual articles here. Drafts are never routed or included in SEO.
export const blogPosts: BlogPost[] = [];
export const publishedPosts = () =>
  blogPosts.filter(
    (post) =>
      post.published &&
      post.ownerReviewed &&
      post.author.trim() &&
      /^\d{4}-\d{2}-\d{2}$/.test(post.publishedAt) &&
      post.sections.length > 0,
  );
