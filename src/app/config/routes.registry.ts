// Phase 1 route registry.
//
// This registry is a Phase 1 planning artifact.
// It supports route auditing, completion tracking, and later backend contract mapping.
// Keep this file frontend-safe. Do not add backend, Firebase, Frappe, auth, payment, or upload logic here.

export type Phase1RouteStatus =
  | "Complete"
  | "Mostly complete"
  | "Partial"
  | "Placeholder"
  | "Duplicate / legacy"
  | "Missing"
  | "Needs redirect"
  | "Needs navigation placement";

export type Phase1AccessType = "public" | "portal" | "admin";

export type Phase1RouteGroup =
  | "Public website"
  | "About"
  | "Contact"
  | "Help"
  | "On-Demand Services"
  | "Document Nucleus / DocuShare"
  | "Managed Services"
  | "Applications"
  | "Operations"
  | "Marketplace"
  | "Membership"
  | "Offers"
  | "Resources"
  | "Legal"
  | "Confirmation pages"
  | "Portal/dashboard"
  | "Admin concepts"
  | "Fallback / Not Found"
  | "Legacy redirects";

export type Phase1QaStatus =
  | "Not reviewed"
  | "Pass"
  | "Needs fixes"
  | "Blocked"
  | "Not applicable";

export type Phase1BuildRisk =
  | "Unknown"
  | "Low"
  | "Medium"
  | "High"
  | "Blocked";

export interface Phase1RouteRegistryEntry {
  title: string;
  path: string;
  pageComponent: string;
  routeGroup: Phase1RouteGroup;
  access: Phase1AccessType;
  purpose: string;
  currentStatus: Phase1RouteStatus;
  requiredMockData: string;
  requiredMockService: string;
  requiredConfirmationStatusState: string;
  mobileQaStatus: Phase1QaStatus;
  desktopQaStatus: Phase1QaStatus;
  buildRisk: Phase1BuildRisk;
  notes: string;
}

export const phase1RouteRegistry: Phase1RouteRegistryEntry[] = [
  {
    title: "Home",
    path: "/",
    pageComponent: "HomePage",
    routeGroup: "Public website",
    access: "public",
    purpose: "Public homepage and primary platform entry point.",
    currentStatus: "Partial",
    requiredMockData: "Public content, service cards, CTA data",
    requiredMockService: "None yet",
    requiredConfirmationStatusState: "Contact / membership CTA states",
    mobileQaStatus: "Not reviewed",
    desktopQaStatus: "Not reviewed",
    buildRisk: "Low",
    notes: "Needs visual/content review.",
  },
  {
    title: "Contact",
    path: "/contact",
    pageComponent: "ContactPage",
    routeGroup: "Contact",
    access: "public",
    purpose: "Public contact and enquiry page.",
    currentStatus: "Partial",
    requiredMockData: "Contact reason options",
    requiredMockService: "Mock contact submission",
    requiredConfirmationStatusState: "Contact success / thank-you",
    mobileQaStatus: "Not reviewed",
    desktopQaStatus: "Not reviewed",
    buildRisk: "Medium",
    notes: "Needs query handling for reason.",
  },
  {
    title: "Decision Desk",
    path: "/on-demand/decision-desk",
    pageComponent: "DecisionDeskPage",
    routeGroup: "On-Demand Services",
    access: "public",
    purpose: "Decision Desk public/service flow page.",
    currentStatus: "Partial",
    requiredMockData: "Decision Desk mock data",
    requiredMockService: "Mock Decision Desk service",
    requiredConfirmationStatusState: "Review/submit/confirmation/status",
    mobileQaStatus: "Not reviewed",
    desktopQaStatus: "Not reviewed",
    buildRisk: "High",
    notes: "Major Phase 1 flow.",
  },
  {
    title: "DocuShare / Document Nucleus",
    path: "/document-nucleus/overview",
    pageComponent: "DocumentOverviewPage",
    routeGroup: "Document Nucleus / DocuShare",
    access: "public",
    purpose: "Document Nucleus / DocuShare overview.",
    currentStatus: "Partial",
    requiredMockData: "Document product catalogue",
    requiredMockService: "Mock DocuShare service",
    requiredConfirmationStatusState: "Review/submit/confirmation/status",
    mobileQaStatus: "Not reviewed",
    desktopQaStatus: "Not reviewed",
    buildRisk: "High",
    notes: "Major Phase 1 flow.",
  },
  {
    title: "Marketplace",
    path: "/marketplace",
    pageComponent: "MarketplacePage",
    routeGroup: "Marketplace",
    access: "public",
    purpose: "Marketplace landing and listings page.",
    currentStatus: "Partial",
    requiredMockData: "Marketplace listings",
    requiredMockService: "Mock marketplace service",
    requiredConfirmationStatusState: "Enquiry/listing/review/status",
    mobileQaStatus: "Not reviewed",
    desktopQaStatus: "Not reviewed",
    buildRisk: "High",
    notes: "Major Phase 1 flow.",
  },
  {
    title: "Connectivity",
    path: "/operations/connectivity",
    pageComponent: "ConnectivityPage",
    routeGroup: "Operations",
    access: "public",
    purpose: "Connectivity overview page.",
    currentStatus: "Partial",
    requiredMockData: "Connectivity plans",
    requiredMockService: "Mock connectivity service",
    requiredConfirmationStatusState: "Review/submit/order status",
    mobileQaStatus: "Not reviewed",
    desktopQaStatus: "Not reviewed",
    buildRisk: "High",
    notes: "Major Phase 1 flow.",
  },
  {
    title: "Risk Advisor",
    path: "/on-demand/risk-advisor",
    pageComponent: "RiskAdvisorPage",
    routeGroup: "On-Demand Services",
    access: "public",
    purpose: "Risk Advisor public/service flow page.",
    currentStatus: "Partial",
    requiredMockData: "Risk categories, questions",
    requiredMockService: "Mock Risk Advisor service",
    requiredConfirmationStatusState: "Review/submit/score/status",
    mobileQaStatus: "Not reviewed",
    desktopQaStatus: "Not reviewed",
    buildRisk: "High",
    notes: "Major Phase 1 flow.",
  },
  {
    title: "The Fixer",
    path: "/on-demand/the-fixer",
    pageComponent: "TheFixerPage",
    routeGroup: "On-Demand Services",
    access: "public",
    purpose: "The Fixer public/service flow page.",
    currentStatus: "Partial",
    requiredMockData: "Fixer mock data",
    requiredMockService: "Mock Fixer service",
    requiredConfirmationStatusState: "Review/submit/confirmation/status",
    mobileQaStatus: "Not reviewed",
    desktopQaStatus: "Not reviewed",
    buildRisk: "High",
    notes: "Major Phase 1 flow.",
  },
  {
    title: "Membership Sign Up",
    path: "/membership/sign-up-now",
    pageComponent: "MembershipSignUpPage",
    routeGroup: "Membership",
    access: "public",
    purpose: "Membership sign-up flow entry.",
    currentStatus: "Partial",
    requiredMockData: "Membership plans and form fields",
    requiredMockService: "Mock membership signup service",
    requiredConfirmationStatusState: "Review/submit/confirmation/status",
    mobileQaStatus: "Not reviewed",
    desktopQaStatus: "Not reviewed",
    buildRisk: "High",
    notes: "Major Phase 1 flow.",
  },
  {
    title: "Portal Dashboard",
    path: "/portal/dashboard",
    pageComponent: "PortalDashboard",
    routeGroup: "Portal/dashboard",
    access: "portal",
    purpose: "Member dashboard mock screen.",
    currentStatus: "Partial",
    requiredMockData: "Portal mock records",
    requiredMockService: "Mock portal service",
    requiredConfirmationStatusState: "Status cards",
    mobileQaStatus: "Not reviewed",
    desktopQaStatus: "Not reviewed",
    buildRisk: "High",
    notes: "Requires polished mock dashboard.",
  },
  {
    title: "Admin Dashboard",
    path: "/admin/dashboard",
    pageComponent: "AdminDashboard",
    routeGroup: "Admin concepts",
    access: "admin",
    purpose: "Admin dashboard concept.",
    currentStatus: "Partial",
    requiredMockData: "Admin mock records",
    requiredMockService: "Mock admin service",
    requiredConfirmationStatusState: "Review/status queues",
    mobileQaStatus: "Not reviewed",
    desktopQaStatus: "Not reviewed",
    buildRisk: "High",
    notes: "Admin concept only.",
  },
  {
    title: "Not Found",
    path: "*",
    pageComponent: "NotFoundPage",
    routeGroup: "Fallback / Not Found",
    access: "public",
    purpose: "Public fallback route.",
    currentStatus: "Partial",
    requiredMockData: "None",
    requiredMockService: "None",
    requiredConfirmationStatusState: "404 state",
    mobileQaStatus: "Not reviewed",
    desktopQaStatus: "Not reviewed",
    buildRisk: "Medium",
    notes: "Confirm bad public routes render Not Found.",
  },
];

export const phase1RouteGroups: Phase1RouteGroup[] = [
  "Public website",
  "About",
  "Contact",
  "Help",
  "On-Demand Services",
  "Document Nucleus / DocuShare",
  "Managed Services",
  "Applications",
  "Operations",
  "Marketplace",
  "Membership",
  "Offers",
  "Resources",
  "Legal",
  "Confirmation pages",
  "Portal/dashboard",
  "Admin concepts",
  "Fallback / Not Found",
  "Legacy redirects",
];

export const phase1RouteStatuses: Phase1RouteStatus[] = [
  "Complete",
  "Mostly complete",
  "Partial",
  "Placeholder",
  "Duplicate / legacy",
  "Missing",
  "Needs redirect",
  "Needs navigation placement",
];
