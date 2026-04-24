export type OfferCategory =
  | "Finance"
  | "Insurance"
  | "HR"
  | "Software"
  | "Operations"
  | "Legal"
  | "Marketing";

export type PartnerOffer = {
  id: string;
  slug: string;
  partnerName: string;
  partnerLogoUrl?: string;
  offerTitle: string;
  category: OfferCategory;
  description: string;
  promotionalLabel: string;
  ctaLabel: string;
  outboundUrl: string;
  isExternal: boolean;
  logoInitials: string;
  featured: boolean;
  active: boolean;
  expiry?: string;
  termsNote?: string;
};

export const OFFERS_BASE_PATH = "/offers";
export const getOfferDetailPath = (slug: string) => `${OFFERS_BASE_PATH}/${slug}`;

export const offerCategories: Array<"All Offers" | OfferCategory> = [
  "All Offers",
  "Finance",
  "Insurance",
  "HR",
  "Software",
  "Operations",
  "Legal",
  "Marketing",
];

export const partnerOffers: PartnerOffer[] = [
  {
    id: "cashflow-clarity-suite",
    slug: "cashflow-clarity-suite",
    partnerName: "LedgerLift Partners",
    offerTitle: "Cash Flow Clarity Suite",
    category: "Finance",
    description:
      "Bookkeeping workflow support, reporting templates, and a guided setup session for owners who need cleaner financial visibility.",
    promotionalLabel: "25% off setup",
    ctaLabel: "Claim Offer",
    outboundUrl: "https://example.com/rbp-offers/ledgerlift-cashflow",
    isExternal: true,
    logoInitials: "LL",
    featured: true,
    active: true,
    expiry: "Limited partner allocation",
    termsNote: "Partner eligibility and onboarding terms may apply.",
  },
  {
    id: "business-insurance-review",
    slug: "business-insurance-review",
    partnerName: "CoverWise Business",
    offerTitle: "Business Insurance Review",
    category: "Insurance",
    description:
      "A practical review pathway for small businesses comparing cover options before renewal or operational changes.",
    promotionalLabel: "Free policy review",
    ctaLabel: "View Deal",
    outboundUrl: "https://example.com/rbp-offers/coverwise-review",
    isExternal: true,
    logoInitials: "CW",
    featured: true,
    active: true,
    termsNote: "Indicative support only. Final coverage depends on provider assessment.",
  },
  {
    id: "hr-foundation-kit",
    slug: "hr-foundation-kit",
    partnerName: "PeopleDesk",
    offerTitle: "HR Foundation Kit",
    category: "HR",
    description:
      "Starter HR templates, onboarding checklists, and a platform trial designed for growing teams tightening their people systems.",
    promotionalLabel: "3 months free",
    ctaLabel: "Get Discount",
    outboundUrl: "https://example.com/rbp-offers/peopledesk-foundation",
    isExternal: true,
    logoInitials: "PD",
    featured: true,
    active: true,
    expiry: "Available to new customers",
  },
  {
    id: "workflow-automation-starter",
    slug: "workflow-automation-starter",
    partnerName: "OpsPilot",
    offerTitle: "Workflow Automation Starter",
    category: "Operations",
    description:
      "A light implementation package for automating admin handoffs, approvals, task tracking, and recurring internal workflows.",
    promotionalLabel: "Save $350 on setup",
    ctaLabel: "Explore Offer",
    outboundUrl: "https://example.com/rbp-offers/opspilot-starter",
    isExternal: true,
    logoInitials: "OP",
    featured: true,
    active: true,
    termsNote: "Setup scope confirmed directly with the partner.",
  },
  {
    id: "cloud-productivity-bundle",
    slug: "cloud-productivity-bundle",
    partnerName: "StackBridge",
    offerTitle: "Cloud Productivity Bundle",
    category: "Software",
    description:
      "Discounted access to cloud storage, team collaboration tooling, and implementation guidance for small business teams.",
    promotionalLabel: "20% off first year",
    ctaLabel: "View Deal",
    outboundUrl: "https://example.com/rbp-offers/stackbridge-productivity",
    isExternal: true,
    logoInitials: "SB",
    featured: false,
    active: true,
  },
  {
    id: "contract-health-check",
    slug: "contract-health-check",
    partnerName: "ClausePoint Legal",
    offerTitle: "Contract Health Check",
    category: "Legal",
    description:
      "A focused contract review offer for supplier agreements, client terms, service contracts, and recurring business documents.",
    promotionalLabel: "Fixed-fee review",
    ctaLabel: "Claim Offer",
    outboundUrl: "https://example.com/rbp-offers/clausepoint-review",
    isExternal: true,
    logoInitials: "CP",
    featured: false,
    active: true,
    termsNote: "Review depth depends on document type and matter complexity.",
  },
  {
    id: "local-marketing-audit",
    slug: "local-marketing-audit",
    partnerName: "MarketMile",
    offerTitle: "Local Marketing Audit",
    category: "Marketing",
    description:
      "A practical visibility audit covering website basics, Google Business Profile hygiene, lead pathways, and campaign quick wins.",
    promotionalLabel: "Free audit report",
    ctaLabel: "Explore Offer",
    outboundUrl: "https://example.com/rbp-offers/marketmile-audit",
    isExternal: true,
    logoInitials: "MM",
    featured: false,
    active: true,
  },
  {
    id: "admin-systems-review",
    slug: "admin-systems-review",
    partnerName: "ProcessWorks",
    offerTitle: "Admin Systems Review",
    category: "Operations",
    description:
      "A review of forms, inboxes, scheduling, client intake, and recurring admin tasks with recommendations for simplification.",
    promotionalLabel: "15% partner discount",
    ctaLabel: "Get Discount",
    outboundUrl: "https://example.com/rbp-offers/processworks-review",
    isExternal: true,
    logoInitials: "PW",
    featured: false,
    active: true,
  },
  {
    id: "brand-refresh-sprint",
    slug: "brand-refresh-sprint",
    partnerName: "Northline Creative",
    offerTitle: "Brand Refresh Sprint",
    category: "Marketing",
    description:
      "A compact brand polish package for businesses needing cleaner messaging, profile assets, and a more consistent market presence.",
    promotionalLabel: "Bonus asset pack",
    ctaLabel: "View Deal",
    outboundUrl: "https://example.com/rbp-offers/northline-refresh",
    isExternal: true,
    logoInitials: "NC",
    featured: false,
    active: true,
  },
  {
    id: "employment-policy-review",
    slug: "employment-policy-review",
    partnerName: "TeamPolicy Co",
    offerTitle: "Employment Policy Review",
    category: "HR",
    description:
      "A partner-led review of core employment policies, onboarding documents, and internal people-process documentation.",
    promotionalLabel: "10% off review",
    ctaLabel: "Claim Offer",
    outboundUrl: "https://example.com/rbp-offers/teampolicy-review",
    isExternal: true,
    logoInitials: "TP",
    featured: false,
    active: true,
  },
];
