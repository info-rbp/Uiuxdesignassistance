export type HelpSectionId = "faqs" | "knowledge-base" | "troubleshooting" | "support";

export interface HelpCategory {
  id: string;
  label: string;
}

export interface HelpArticle {
  id: string;
  section: HelpSectionId;
  category: string;
  question: string;
  answer: string;
  status: "ready" | "placeholder" | "content-required" | "backend-later";
}

export const helpSections: { id: HelpSectionId; label: string }[] = [
  { id: "faqs", label: "Frequently Asked Questions" },
  { id: "knowledge-base", label: "Knowledge Base" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "support", label: "Support Center" },
];

export const helpCategories: HelpCategory[] = [
  { id: "our-platform", label: "Our Platform" },
  { id: "on-demand-services", label: "On-Demand Services" },
  { id: "managed-services", label: "Managed Services" },
  { id: "applications", label: "Applications" },
  { id: "operations", label: "Operations" },
  { id: "marketplace", label: "Marketplace" },
  { id: "membership", label: "Membership" },
  { id: "offers", label: "Offers" },
  { id: "resources", label: "Resources" },
  { id: "other", label: "Other" },
];

export const helpArticles: HelpArticle[] = [
  {
    id: "membership-placeholder-faq",
    section: "faqs",
    category: "membership",
    question: "How does membership work?",
    answer: "Membership content is currently being refined and will be updated before launch.",
    status: "placeholder",
  },
  {
    id: "applications-placeholder-knowledge-base",
    section: "knowledge-base",
    category: "applications",
    question: "How are applications configured?",
    answer: "Application setup content is currently a placeholder and will be expanded.",
    status: "placeholder",
  },
];
