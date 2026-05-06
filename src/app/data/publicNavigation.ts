/* Public navbar mega-menu configuration */

// ── Types ─────────────────────────────────────────────────────────────────────

export interface MegaLink    { label: string; href: string; desc?: string; }
export interface MegaSection { heading: string; links: MegaLink[]; }
export interface MegaConfig  {
  key: string;
  label: string;
  overview?: MegaLink;
  sections: MegaSection[];
  cta: { text: string; btnLabel: string; href: string; };
}

// ── Mega menu data ────────────────────────────────────────────────────────────

export const publicNavigation: MegaConfig[] = [
  {
    key: "ondemand", label: "On-Demand Services",
    overview: { label: "On-Demand Overview", href: "/on-demand" },
    sections: [
      {
        heading: "Core Services",
        links: [
          { label: "Business Advisor",      href: "/on-demand/business-advisor",  desc: "Strategic guidance for business owners" },
          { label: "Decision Desk",          href: "/on-demand/decision-desk",     desc: "Submit an issue, get written guidance" },
          { label: "The Fixer",             href: "/on-demand/the-fixer",         desc: "One specific problem. Fully resolved." },
          { label: "Risk Advisor",          href: "/on-demand/risk-advisor",      desc: "Risk-focused business guidance" },
        ],
      },
      {
        heading: "Document Nucleus",
        links: [
          { label: "Document Nucleus Overview",  href: "/document-nucleus/overview" },
          { label: "Templates",                  href: "/document-nucleus/category/templates" },
          { label: "Documentation Suites",       href: "/document-nucleus/category/documentation-suites" },
          { label: "Toolkits",                   href: "/document-nucleus/category/toolkits" },
          { label: "Process",                    href: "/document-nucleus/category/process" },
        ],
      },
      {
        heading: "On-Demand Services",
        links: [
          { label: "Operations Advisory",       href: "/on-demand/services#operations-advisory" },
          { label: "Human Resource Advisory",   href: "/on-demand/services#human-resource-advisory" },
          { label: "Management Consulting",     href: "/on-demand/services#management-consulting" },
          { label: "Change Management",         href: "/on-demand/services#change-management" },
          { label: "AI Advisory",         href: "/on-demand/services#ai-advisory" },
          { label: "Accounting & Finance",href: "/on-demand/services#accounting-finance" },
          { label: "AI Implementation",         href: "/on-demand/services#ai-implementation" },
          { label: "Admin & Finance Consulting",href: "/on-demand/services#admin-finance-consulting" },
          { label: "Customised Solutions",      href: "/on-demand/services#customised-solutions" },
        ],
      },
    ],
    cta: { text: "Need help choosing the right service?", btnLabel: "Book a Discovery Call", href: "/contact?reason=discovery-call" },
  },
  {
    key: "managed", label: "Managed Services",
    overview: { label: "Our Managed Services", href: "/managed-services" },
    sections: [
      {
        heading: "Service Areas",
        links: [
          { label: "Bid Management",       href: "/managed-services/bid-management",     desc: "Tender, bid & proposal management" },
          { label: "Real Estate",          href: "/managed-services/real-estate",         desc: "Property operations & admin support" },
          { label: "HR Services",          href: "/managed-services/hr-services",         desc: "People operations & HR admin support" },
          { label: "Document Management",  href: "/managed-services#document-management" },
          { label: "Business Sale Support",href: "/managed-services#business-sale-support" },
          { label: "Custom Solutions",     href: "/managed-services#custom-solutions" },
          { label: "Engagement Process",   href: "/managed-services#engagement-process" },
        ],
      },
    ],
    cta: { text: "Need ongoing business support?", btnLabel: "View Managed Services", href: "/managed-services" },
  },
  {
    key: "applications", label: "Applications",
    overview: { label: "Applications Overview", href: "/applications" },
    sections: [
      {
        heading: "Application Categories",
        links: [
          { label: "Operations and Finance", href: "/applications#operations-finance" },
          { label: "People and HR",          href: "/applications#people-hr" },
          { label: "Sales and CRM",          href: "/applications#sales-crm" },
          { label: "Documents",              href: "/applications#documents" },
          { label: "Support Desk",           href: "/applications#support-desk" },
          { label: "Learning",               href: "/applications#learning" },
          { label: "Analytics",              href: "/applications#analytics" },
          { label: "Payments and Billing",   href: "/applications#payments-billing" },
        ],
      },
    ],
    cta: { text: "Want an application configured for your business?", btnLabel: "Request App Setup", href: "/contact?reason=application-setup" },
  },
  {
    key: "operations", label: "Operations",
    overview: { label: "Operations Overview", href: "/operations" },
    sections: [
      {
        heading: "Business Operations",
        links: [
          { label: "Business Finance",        href: "/operations/finance",     desc: "Finance education & referral pathways" },
          { label: "Business Insurance",      href: "/operations/insurance",   desc: "Insurance guidance & referrals" },
          { label: "Superloop Connectivity",  href: "/operations/connectivity/superloop",   desc: "White-labelled telecoms & connectivity" },
          { label: "Superloop Connectivity",  href: "/operations/superloop",   desc: "White-labelled telecoms & connectivity" },
          { label: "Calculators",             href: "/operations/calculators", desc: "Cash flow & funding readiness tools" },
        ],
      },
    ],
    cta: { text: "Build stronger business foundations.", btnLabel: "Explore Operations", href: "/operations" },
  },
  {
    key: "marketplace", label: "Marketplace",
    overview: { label: "Marketplace Overview", href: "/marketplace" },
    sections: [
      {
        heading: "Marketplace",
        links: [
          { label: "Marketplace",    href: "/marketplace" },
          { label: "Buying Process", href: "/marketplace#buying-process" },
          { label: "List With Us",   href: "/marketplace#list-with-us" },
        ],
      },
    ],
    cta: { text: "Want to list your product or service?", btnLabel: "List With Us", href: "/marketplace#list-with-us" },
  },
  {
    key: "membership", label: "Membership",
    overview: { label: "Membership Overview", href: "/membership/overview" },
    sections: [
      {
        heading: "Membership Options",
        links: [
          { label: "Membership Overview",                href: "/membership/overview" },
          { label: "Remote Business Partner Membership", href: "/membership/remote-business-partner-membership" },
          { label: "Inclusions",                         href: "/membership/inclusions" },
          { label: "Pricing",                            href: "/membership/pricing" },
          { label: "Usage",                              href: "/membership/usage" },
          { label: "Payment Terms",                      href: "/membership/payment-terms" },
          { label: "Sign Up Now",                        href: "/membership/sign-up-now" },
          { label: "Frequently Asked Questions",         href: "/membership/frequently-asked-questions" },
        ],
      },
    ],
    cta: { text: "Ready to become a member?", btnLabel: "Sign Up Now", href: "/membership/sign-up-now" },
  },
  {
    key: "offers", label: "Offers",
    overview: { label: "Offers Overview", href: "/offers" },
    sections: [
      {
        heading: "Offer Types",
        links: [
          { label: "Exclusive Offers", href: "/offers#exclusive" },
          { label: "Top Offers",       href: "/offers#top" },
        ],
      },
      {
        heading: "Offers By Category",
        links: [
          { label: "Operations",           href: "/offers?category=operations" },
          { label: "Human Resources",      href: "/offers?category=human-resources" },
          { label: "Admin and Finance",    href: "/offers?category=admin-finance" },
          { label: "Sales and Marketing",  href: "/offers?category=sales-marketing" },
          { label: "AI",                   href: "/offers?category=ai" },
          { label: "Finance and Insurance",href: "/offers?category=finance-insurance" },
        ],
      },
    ],
    cta: { text: "Explore partner offers and member benefits.", btnLabel: "View Offers", href: "/offers" },
  },
  {
    key: "resources", label: "Resources",
    overview: { label: "Resources Overview", href: "/resources" },
    sections: [
      {
        heading: "Resource Types",
        links: [
          { label: "Articles",    href: "/resources?type=articles" },
          { label: "Guides",      href: "/resources?type=guides" },
          { label: "Tools",       href: "/resources?type=tools" },
          { label: "Downloads",   href: "/resources?type=downloads" },
          { label: "Educational", href: "/resources?type=educational" },
        ],
      },
    ],
    cta: { text: "Learn, plan, and improve your business operations.", btnLabel: "Browse Resources", href: "/resources" },
  },
  {
    key: "help", label: "Help Center",
    overview: { label: "Support Center", href: "/help?section=support" },
    sections: [
      {
        heading: "Frequently Asked Questions",
        links: [
          { label: "Our Platform",        href: "/help?section=faqs&category=our-platform" },
          { label: "On-Demand Services",  href: "/help?section=faqs&category=on-demand-services" },
          { label: "Managed Services",    href: "/help?section=faqs&category=managed-services" },
          { label: "Applications",        href: "/help?section=faqs&category=applications" },
          { label: "Operations",          href: "/help?section=faqs&category=operations" },
          { label: "Marketplace",         href: "/help?section=faqs&category=marketplace" },
          { label: "Membership",          href: "/help?section=faqs&category=membership" },
          { label: "Offers",              href: "/help?section=faqs&category=offers" },
          { label: "Resources",           href: "/help?section=faqs&category=resources" },
          { label: "Other",               href: "/help?section=faqs&category=other" },
        ],
      },
      {
        heading: "Knowledge Base",
        links: [
          { label: "Our Platform",        href: "/help?section=knowledge-base&category=our-platform" },
          { label: "On-Demand Services",  href: "/help?section=knowledge-base&category=on-demand-services" },
          { label: "Managed Services",    href: "/help?section=knowledge-base&category=managed-services" },
          { label: "Applications",        href: "/help?section=knowledge-base&category=applications" },
          { label: "Operations",          href: "/help?section=knowledge-base&category=operations" },
          { label: "Marketplace",         href: "/help?section=knowledge-base&category=marketplace" },
          { label: "Membership",          href: "/help?section=knowledge-base&category=membership" },
          { label: "Offers",              href: "/help?section=knowledge-base&category=offers" },
          { label: "Resources",           href: "/help?section=knowledge-base&category=resources" },
          { label: "Other",               href: "/help?section=knowledge-base&category=other" },
        ],
      },
      {
        heading: "Troubleshooting",
        links: [
          { label: "Our Platform",        href: "/help?section=troubleshooting&category=our-platform" },
          { label: "On-Demand Services",  href: "/help?section=troubleshooting&category=on-demand-services" },
          { label: "Managed Services",    href: "/help?section=troubleshooting&category=managed-services" },
          { label: "Applications",        href: "/help?section=troubleshooting&category=applications" },
          { label: "Operations",          href: "/help?section=troubleshooting&category=operations" },
          { label: "Marketplace",         href: "/help?section=troubleshooting&category=marketplace" },
          { label: "Membership",          href: "/help?section=troubleshooting&category=membership" },
          { label: "Offers",              href: "/help?section=troubleshooting&category=offers" },
          { label: "Resources",           href: "/help?section=troubleshooting&category=resources" },
          { label: "Other",               href: "/help?section=troubleshooting&category=other" },
        ],
      },
      {
        heading: "Support Center",
        links: [
          { label: "Support Center", href: "/help?section=support" },
        ],
      },
    ],
    cta: { text: "Need direct help?", btnLabel: "Visit Support Center", href: "/help?section=support" },
  },
  {
    key: "about", label: "About Us",
    sections: [
      {
        heading: "Company",
        links: [
          { label: "About Us",     href: "/about",              desc: "Our story and mission" },
          { label: "Our Purpose",  href: "/about#our-purpose" },
          { label: "Our Platform", href: "/about#our-platform" },
        ],
      },
      {
        heading: "Contact",
        links: [
          { label: "Discovery Call", href: "/contact?reason=discovery-call" },
          { label: "Contact Us",     href: "/contact" },
        ],
      },
    ],
    cta: { text: "Want to talk through your business needs?", btnLabel: "Book a Discovery Call", href: "/contact?reason=discovery-call" },
  },
];

