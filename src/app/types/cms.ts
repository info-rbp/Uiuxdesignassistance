// Shared CMS types for the public website (mirrors the CMS app types)
export type CmsStatus = 'draft' | 'review' | 'approved' | 'scheduled' | 'published' | 'archived';

export interface CmsResource {
  id?: string;
  title: string;
  slug: string;
  status: CmsStatus;
  isPublished: boolean;
  resourceType: 'guide' | 'template' | 'video' | 'download' | 'case-study' | 'market-intelligence';
  category: string;
  excerpt: string;
  body?: string;
  featured?: boolean;
  readTime?: string;
  imageUrl?: string;
  imageAlt?: string;
  downloadUrl?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  seoTitle?: string;
  seoDescription?: string;
  tags?: string[];
  sortOrder?: number;
}

export interface CmsNavigationItem {
  id?: string;
  title: string;
  slug: string;
  label: string;
  href: string;
  navArea: 'header' | 'footer' | 'mobile' | 'utility';
  group?: string;
  parentId?: string;
  description?: string;
  iconKey?: string;
  isExternal?: boolean;
  openInNewTab?: boolean;
  sortOrder?: number;
  status: CmsStatus;
  isPublished: boolean;
}

