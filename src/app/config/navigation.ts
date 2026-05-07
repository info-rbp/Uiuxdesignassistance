export type NavigationSurface =
  | "public"
  | "footer"
  | "utility"
  | "mobile"
  | "portal"
  | "admin";

export type NavigationItemKind =
  | "route"
  | "anchor"
  | "query"
  | "dynamic"
  | "action"
  | "external";

export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  kind?: NavigationItemKind;
  phase1Status?: "ready" | "placeholder" | "needs-review" | "backend-later";
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export interface PublicNavigationGroup {
  label: string;
  href: string;
  description: string;
  sections: NavigationSection[];
  cta?: NavigationItem;
}

export interface CtaRule {
  id: string;
  label: string;
  href: string;
  purpose: string;
}

export const publicNavigation: PublicNavigationGroup[] = [
  {
    label: "On-Demand Services",
    href: "/on-demand",
    description: "Advisory, document and specialist support services available through frontend mock flows in Phase 1.",
    sections: [
      {
        title: "Core Services",
        items: [
          { label: "Overview", href: "/on-demand", kind: "route" },
          { label: "Business Advisor", href: "/on-demand/business-advisor", kind: "route" },
          { label: "Decision Desk", href: "/on-demand/decision-desk", kind: "route", phase1Status: "needs-review" },
          { label: "The Fixer", href: "/on-demand/the-fixer", kind: "route", phase1Status: "needs-review" },
          { label: "Risk Advisor", href: "/on-demand/risk-advisor", kind: "route", phase1Status: "needs-review" },
          { label: "On-Demand Services", href: "/on-demand/services", kind: "route" },
        ],
      },
      {
        title: "Document Nucleus",
        items: [
          { label: "Overview", href: "/document-nucleus/overview", kind: "route" },
          { label: "Templates", href: "/document-nucleus/category/templates", kind: "dynamic" },
          { label: "Documentation Suites", href: "/document-nucleus/category/documentation-suites", kind: "dynamic" },
          { label: "Toolkits", href: "/document-nucleus/category/toolkits", kind: "dynamic" },
          { label: "Process", href: "/document-nucleus/category/process", kind: "dynamic" },
        ],
      },
      {
        title: "Advisory Categories",
        items: [
          { label: "Operations Advisory", href: "/on-demand/services#operations-advisory", kind: "anchor" },
          { label: "Human Resource Advisory", href: "/on-demand/services#human-resource-advisory", kind: "anchor" },
          { label: "Accounting and Finance", href: "/on-demand/services#accounting-finance", kind: "anchor" },
          { label: "Sales and Marketing", href: "/on-demand/services#sales-marketing", kind: "anchor" },
          { label: "Management Consulting", href: "/on-demand/services#management-consulting", kind: "anchor" },
          { label: "Change Management", href: "/on-demand/services#change-management", kind: "anchor" },
          { label: "AI Advisory", href: "/on-demand/services#ai-advisory", kind: "anchor" },
          { label: "Research and Development", href: "/on-demand/services#research-development", kind: "anchor" },
          { label: "Information Technology", href: "/on-demand/services#information-technology", kind: "anchor" },
          { label: "Public Relations", href: "/on-demand/services#public-relations", kind: "anchor" },
          { label: "Customised Solutions", href: "/on-demand/services#customised-solutions", kind: "anchor" },
        ],
      },
    ],
    cta: { label: "Explore On-Demand Services", href: "/on-demand", kind: "route" },
  },
  {
    label: "Managed Services",
    href: "/managed-services",
    description: "Ongoing support service areas for businesses.",
    sections: [
      {
        title: "Service Areas",
        items: [
          { label: "Overview", href: "/managed-services", kind: "route" },
          { label: "Bid Management", href: "/managed-services/bid-management", kind: "route" },
          { label: "Real Estate", href: "/managed-services/real-estate", kind: "route" },
          { label: "HR Services", href: "/managed-services/hr-services", kind: "route" },
          { label: "Document Management", href: "/managed-services#document-management", kind: "anchor" },
          { label: "Change Management", href: "/managed-services#change-management", kind: "anchor" },
          { label: "Business Sale Support", href: "/managed-services#business-sale-support", kind: "anchor" },
          { label: "Franchise", href: "/managed-services#franchise", kind: "anchor" },
          { label: "LMS", href: "/managed-services#lms", kind: "anchor" },
          { label: "Custom Solutions", href: "/managed-services#custom-solutions", kind: "anchor" },
          { label: "Engagement Process", href: "/managed-services#engagement-process", kind: "anchor" },
        ],
      },
    ],
    cta: { label: "Explore Managed Services", href: "/managed-services", kind: "route" },
  },
  {
    label: "Applications",
    href: "/applications",
    description: "Application categories and future hosted business tools.",
    sections: [
      {
        title: "Application Categories",
        items: [
          { label: "Overview", href: "/applications", kind: "route" },
          { label: "How These Work", href: "/applications#how-these-work", kind: "anchor" },
          { label: "Operations and Finance", href: "/applications#operations-finance", kind: "anchor" },
          { label: "People and HR", href: "/applications#people-hr", kind: "anchor" },
          { label: "Sales and CRM", href: "/applications#sales-crm", kind: "anchor" },
          { label: "Documents", href: "/applications#documents", kind: "anchor" },
          { label: "Support Desk", href: "/applications#support-desk", kind: "anchor" },
          { label: "Learning", href: "/applications#learning", kind: "anchor" },
          { label: "Analytics", href: "/applications#analytics", kind: "anchor" },
          { label: "Payments and Billing", href: "/applications#payments-billing", kind: "anchor" },
          { label: "Integrations", href: "/applications#integrations", kind: "anchor" },
          { label: "Fleet Management", href: "/applications#fleet-management", kind: "anchor" },
          { label: "Business Watchlist", href: "/applications#business-watchlist", kind: "anchor" },
        ],
      },
    ],
    cta: { label: "Explore Applications", href: "/applications", kind: "route" },
  },
  {
    label: "Operations",
    href: "/operations",
    description: "Business operations services and simulated order flows.",
    sections: [
      {
        title: "Business Operations",
        items: [
          { label: "Overview", href: "/operations", kind: "route" },
          { label: "Business Finance", href: "/operations/finance", kind: "route" },
          { label: "Business Lending", href: "/operations/finance/business-lending", kind: "route" },
          { label: "Business Insurance", href: "/operations/finance/business-insurance", kind: "route" },
          { label: "Financial Planning", href: "/operations/finance/financial-planning", kind: "route" },
          { label: "Credit and Funding", href: "/operations/finance/credit-and-funding", kind: "route" },
          { label: "Insurance", href: "/operations/insurance", kind: "route" },
          { label: "Connectivity", href: "/operations/connectivity", kind: "route", phase1Status: "needs-review" },
          { label: "NBN and Phone", href: "/operations/connectivity/nbn-phone", kind: "route", phase1Status: "needs-review" },
          { label: "Superloop Connectivity", href: "/operations/connectivity/superloop", kind: "route", phase1Status: "needs-review" },
          { label: "Calculators", href: "/operations/calculators", kind: "route" },
          { label: "Coming Soon", href: "/operations/coming-soon", kind: "route" },
        ],
      },
    ],
    cta: { label: "Explore Operations", href: "/operations", kind: "route" },
  },
  {
    label: "Marketplace",
    href: "/marketplace",
    description: "Marketplace listings, enquiries and listing-intent pathways.",
    sections: [
      {
        title: "Marketplace",
        items: [
          { label: "Overview", href: "/marketplace", kind: "route" },
          { label: "RBP Products", href: "/marketplace#rbp-products", kind: "anchor" },
          { label: "RBP Assets", href: "/marketplace#rbp-assets", kind: "anchor" },
          { label: "Third Party Products and Assets", href: "/marketplace#third-party-products-assets", kind: "anchor" },
          { label: "Buying Process", href: "/marketplace#buying-process", kind: "anchor" },
          { label: "List With Us", href: "/marketplace#list-with-us", kind: "anchor" },
        ],
      },
    ],
    cta: { label: "Visit Marketplace", href: "/marketplace", kind: "route" },
  },
  {
    label: "Membership",
    href: "/membership",
    description: "Membership overview, inclusions, pricing, usage and mock sign-up flow.",
    sections: [
      {
        title: "Membership",
        items: [
          { label: "Overview", href: "/membership/overview", kind: "route" },
          { label: "Remote Business Partner Membership", href: "/membership/remote-business-partner-membership", kind: "route" },
          { label: "Inclusions", href: "/membership/inclusions", kind: "route" },
          { label: "Pricing", href: "/membership/pricing", kind: "route" },
          { label: "Usage", href: "/membership/usage", kind: "route" },
          { label: "Payment Terms", href: "/membership/payment-terms", kind: "route" },
          { label: "Sign Up Now", href: "/membership/sign-up-now", kind: "route", phase1Status: "needs-review" },
          { label: "Frequently Asked Questions", href: "/membership/frequently-asked-questions", kind: "route" },
        ],
      },
    ],
    cta: { label: "Join Now", href: "/membership/sign-up-now", kind: "route" },
  },
  {
    label: "Offers",
    href: "/offers",
    description: "Public and member-style offer categories using query filters.",
    sections: [
      {
        title: "Featured Offers",
        items: [
          { label: "Overview", href: "/offers", kind: "route" },
          { label: "Exclusive Offers", href: "/offers#exclusive", kind: "anchor" },
          { label: "Top Offers", href: "/offers#top", kind: "anchor" },
        ],
      },
      {
        title: "Offer Categories",
        items: [
          { label: "Travel", href: "/offers?category=travel", kind: "query" },
          { label: "Fitness and Health", href: "/offers?category=fitness-health", kind: "query" },
          { label: "Home and Garden", href: "/offers?category=home-garden", kind: "query" },
          { label: "Delivery", href: "/offers?category=delivery", kind: "query" },
          { label: "Digital and Tech", href: "/offers?category=digital-tech", kind: "query" },
          { label: "Finance and Insurance", href: "/offers?category=finance-insurance", kind: "query" },
          { label: "Other", href: "/offers?category=other", kind: "query" },
          { label: "Operations", href: "/offers?category=operations", kind: "query" },
          { label: "Human Resources", href: "/offers?category=human-resources", kind: "query" },
          { label: "Admin and Finance", href: "/offers?category=admin-finance", kind: "query" },
          { label: "Sales and Marketing", href: "/offers?category=sales-marketing", kind: "query" },
          { label: "AI", href: "/offers?category=ai", kind: "query" },
        ],
      },
    ],
    cta: { label: "Browse Offers", href: "/offers", kind: "route" },
  },
  {
    label: "Resources",
    href: "/resources",
    description: "Resource library using type and category query filters.",
    sections: [
      {
        title: "Resource Types",
        items: [
          { label: "Overview", href: "/resources", kind: "route" },
          { label: "Articles", href: "/resources?type=articles", kind: "query" },
          { label: "Guides", href: "/resources?type=guides", kind: "query" },
          { label: "Tools", href: "/resources?type=tools", kind: "query" },
          { label: "Downloads", href: "/resources?type=downloads", kind: "query" },
          { label: "Educational", href: "/resources?type=educational", kind: "query" },
        ],
      },
      {
        title: "Business Categories",
        items: [
          { label: "Strategy", href: "/resources?category=strategy", kind: "query" },
          { label: "Finance", href: "/resources?category=finance", kind: "query" },
          { label: "Sales and Marketing", href: "/resources?category=sales-marketing", kind: "query" },
          { label: "Research and Development", href: "/resources?category=research-development", kind: "query" },
          { label: "Information Technology", href: "/resources?category=information-technology", kind: "query" },
          { label: "Customer Service", href: "/resources?category=customer-service", kind: "query" },
          { label: "Human Resources", href: "/resources?category=human-resources", kind: "query" },
          { label: "Design", href: "/resources?category=design", kind: "query" },
          { label: "Communications", href: "/resources?category=communications", kind: "query" },
          { label: "Governance", href: "/resources?category=governance", kind: "query" },
          { label: "Production", href: "/resources?category=production", kind: "query" },
          { label: "Sourcing", href: "/resources?category=sourcing", kind: "query" },
          { label: "Quality Management", href: "/resources?category=quality-management", kind: "query" },
          { label: "Distribution", href: "/resources?category=distribution", kind: "query" },
          { label: "Operations", href: "/resources?category=operations", kind: "query" },
          { label: "Other", href: "/resources?category=other", kind: "query" },
        ],
      },
    ],
    cta: { label: "Browse Resources", href: "/resources", kind: "route" },
  },
  {
    label: "Help Center",
    href: "/help",
    description: "Help, FAQs, knowledge base, troubleshooting and support.",
    sections: [
      {
        title: "Help Center",
        items: [
          { label: "Help Center", href: "/help", kind: "route" },
          { label: "FAQs", href: "/help?section=faqs", kind: "query" },
          { label: "Knowledge Base", href: "/help?section=knowledge-base", kind: "query" },
          { label: "Troubleshooting", href: "/help?section=troubleshooting", kind: "query" },
          { label: "Support", href: "/help?section=support", kind: "query" },
        ],
      },
    ],
    cta: { label: "Get Help", href: "/help", kind: "route" },
  },
  {
    label: "About Us",
    href: "/about",
    description: "Company, process, work-with-us and contact paths.",
    sections: [
      {
        title: "About",
        items: [
          { label: "About Us", href: "/about", kind: "route" },
          { label: "What We Do", href: "/about/what-we-do", kind: "route" },
          { label: "Our Process", href: "/about/our-process", kind: "route" },
          { label: "Work With Us", href: "/about/work-with-us", kind: "route" },
          { label: "Discovery Call", href: "/contact?reason=discovery-call", kind: "query" },
          { label: "Contact Us", href: "/contact", kind: "route" },
        ],
      },
    ],
    cta: { label: "Contact Us", href: "/contact", kind: "route" },
  },
];

export const utilityNavigation: NavigationItem[] = [
  { label: "Logo", href: "/", kind: "route" },
  { label: "Search", href: "/search", kind: "action", phase1Status: "placeholder" },
  { label: "Contact", href: "/contact", kind: "route" },
  { label: "Sign In", href: "/sign-in", kind: "route" },
  { label: "Join Now", href: "/membership/sign-up-now", kind: "route" },
];

export const footerNavigation: NavigationSection[] = [
  {
    title: "Platform",
    items: [
      { label: "Home", href: "/", kind: "route" },
      { label: "About", href: "/about", kind: "route" },
      { label: "Contact", href: "/contact", kind: "route" },
      { label: "Help Center", href: "/help", kind: "route" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "On-Demand Services", href: "/on-demand", kind: "route" },
      { label: "Managed Services", href: "/managed-services", kind: "route" },
      { label: "Applications", href: "/applications", kind: "route" },
      { label: "Operations", href: "/operations", kind: "route" },
      { label: "Marketplace", href: "/marketplace", kind: "route" },
    ],
  },
  {
    title: "Member Value",
    items: [
      { label: "Membership", href: "/membership", kind: "route" },
      { label: "Offers", href: "/offers", kind: "route" },
      { label: "Resources", href: "/resources", kind: "route" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/legal/privacy-policy", kind: "route" },
      { label: "Terms of Use", href: "/legal/terms-of-use", kind: "route" },
      { label: "Terms of Engagement", href: "/legal/terms-of-engagement", kind: "route" },
      { label: "Payment Policy", href: "/legal/payment-policy", kind: "route" },
      { label: "Services Policy", href: "/legal/services-policy", kind: "route" },
    ],
  },
];

export const portalNavigation: NavigationItem[] = [
  { label: "Dashboard", href: "/portal/dashboard", kind: "route" },
  { label: "My Services", href: "/portal/services", kind: "route" },
  { label: "Advisory Sessions", href: "/portal/sessions", kind: "route", phase1Status: "placeholder" },
  { label: "Documents", href: "/portal/documents", kind: "route" },
  { label: "Partner Offers", href: "/portal/offers", kind: "route" },
  { label: "Applications", href: "/portal/apps", kind: "route" },
  { label: "Resources", href: "/portal/resources", kind: "route" },
  { label: "Support", href: "/portal/support", kind: "route" },
  { label: "Settings", href: "/portal/settings", kind: "route" },
];

export const adminNavigation: NavigationItem[] = [
  { label: "Admin Dashboard", href: "/admin/dashboard", kind: "route" },
  { label: "Site Content", href: "/admin/site-content", kind: "route" },
  { label: "Requests", href: "/admin/requests", kind: "route" },
  { label: "Marketplace", href: "/admin/marketplace", kind: "route" },
  { label: "Membership", href: "/admin/membership", kind: "route" },
  { label: "Offers", href: "/admin/offers", kind: "route" },
  { label: "Resources", href: "/admin/resources", kind: "route" },
  { label: "Audit and Review", href: "/admin/audit-review", kind: "route" },
  { label: "Settings", href: "/admin/settings", kind: "route" },
];

export const mobileNavigation = publicNavigation;

export const ctaRules: CtaRule[] = [
  {
    id: "book-discovery-call",
    label: "Book Discovery Call",
    href: "/contact?reason=discovery-call",
    purpose: "Route public users to the discovery call enquiry path.",
  },
  {
    id: "request-app-setup",
    label: "Request App Setup",
    href: "/contact?reason=application-setup",
    purpose: "Route users to an application setup enquiry.",
  },
  {
    id: "request-managed-services",
    label: "Request Managed Services",
    href: "/contact?reason=managed-services",
    purpose: "Route users to a managed services enquiry.",
  },
  {
    id: "list-with-us",
    label: "List With Us",
    href: "/marketplace#list-with-us",
    purpose: "Route marketplace sellers to the listing intent section.",
  },
  {
    id: "join-now",
    label: "Join Now",
    href: "/membership/sign-up-now",
    purpose: "Route users to the mock membership sign-up flow.",
  },
  {
    id: "sign-in",
    label: "Sign In",
    href: "/sign-in",
    purpose: "Route users to the mock sign-in page.",
  },
  {
    id: "contact-support",
    label: "Contact Support",
    href: "/help?section=support",
    purpose: "Route users to public support information.",
  },
];

export const navigationSurfaces: NavigationSurface[] = [
  "public",
  "footer",
  "utility",
  "mobile",
  "portal",
  "admin",
];
