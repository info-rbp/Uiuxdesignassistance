export type OfferCategory =
  | "travel"
  | "fitness-health"
  | "home-garden"
  | "delivery"
  | "digital-tech"
  | "finance-insurance"
  | "other"
  | "operations"
  | "human-resources"
  | "admin-finance"
  | "sales-marketing"
  | "ai";

export interface OfferCategoryFilter {
  id: OfferCategory;
  label: string;
}

export interface PublicOffer {
  id: string;
  title: string;
  partner: string;
  summary: string;
  category: OfferCategory;
  offerType: "exclusive" | "top" | "standard";
  href: string;
  status: "ready" | "placeholder" | "content-required" | "backend-later";
}

export const offerCategoryFilters: OfferCategoryFilter[] = [
  { id: "travel", label: "Travel" },
  { id: "fitness-health", label: "Fitness & Health" },
  { id: "home-garden", label: "Home & Garden" },
  { id: "delivery", label: "Delivery" },
  { id: "digital-tech", label: "Digital & Tech" },
  { id: "finance-insurance", label: "Finance & Insurance" },
  { id: "other", label: "Other" },
  { id: "operations", label: "Operations" },
  { id: "human-resources", label: "Human Resources" },
  { id: "admin-finance", label: "Admin and Finance" },
  { id: "sales-marketing", label: "Sales and Marketing" },
  { id: "ai", label: "AI" },
];

export const publicOffers: PublicOffer[] = [
  {
    id: "digital-tech-placeholder",
    title: "Digital & Tech Partner Offer",
    partner: "Placeholder Partner",
    summary: "Placeholder offer for future partner discounts and benefits.",
    category: "digital-tech",
    offerType: "exclusive",
    href: "/offers",
    status: "placeholder",
  },
  {
    id: "finance-insurance-placeholder",
    title: "Finance & Insurance Offer",
    partner: "Placeholder Partner",
    summary: "Placeholder offer for future finance and insurance partner benefits.",
    category: "finance-insurance",
    offerType: "top",
    href: "/offers",
    status: "placeholder",
  },
];
