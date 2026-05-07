export type Phase1FlowState =
  | "start"
  | "draft"
  | "input"
  | "validation-error"
  | "review"
  | "submitting"
  | "submit-success"
  | "submit-failure"
  | "confirmation"
  | "status-timeline"
  | "portal-status"
  | "admin-review"
  | "empty-state"
  | "mock-only-notice";

export type Phase1FlowArea =
  | "membership"
  | "decision-desk"
  | "docushare"
  | "marketplace-enquiry"
  | "marketplace-listing"
  | "connectivity"
  | "risk-advisor"
  | "the-fixer"
  | "contact-discovery"
  | "application-setup";

export interface Phase1FlowStateRequirement {
  state: Phase1FlowState;
  label: string;
  objective: string;
  required: boolean;
}

export interface Phase1FlowStateMap {
  id: Phase1FlowArea;
  title: string;
  primaryRoute: string;
  portalRoute?: string;
  adminRoute?: string;
  featurePath?: string;
  mockDataPath?: string;
  mockServicePath?: string;
  requiredStates: Phase1FlowStateRequirement[];
  notes: string;
}

export const phase1StandardFlowStates: Phase1FlowStateRequirement[] = [
  {
    state: "start",
    label: "Start",
    objective: "User can identify the flow, its purpose, and the primary call to action.",
    required: true,
  },
  {
    state: "draft",
    label: "Draft",
    objective: "User can begin entering information without immediately submitting.",
    required: true,
  },
  {
    state: "input",
    label: "Input",
    objective: "User can complete the required form, wizard, or selection steps.",
    required: true,
  },
  {
    state: "validation-error",
    label: "Validation error",
    objective: "User receives clear feedback when required mock fields are missing.",
    required: true,
  },
  {
    state: "review",
    label: "Review",
    objective: "User can review entered data before submitting.",
    required: true,
  },
  {
    state: "submitting",
    label: "Submitting",
    objective: "User sees a loading/submitting state while the mock service resolves.",
    required: true,
  },
  {
    state: "submit-success",
    label: "Submit success",
    objective: "User receives a successful mock response with a reference or status.",
    required: true,
  },
  {
    state: "submit-failure",
    label: "Submit failure",
    objective: "User can see a simulated failure or validation failure state.",
    required: true,
  },
  {
    state: "confirmation",
    label: "Confirmation",
    objective: "User sees a confirmation page or panel after mock submission.",
    required: true,
  },
  {
    state: "status-timeline",
    label: "Status timeline",
    objective: "User can understand the simulated post-submit lifecycle.",
    required: true,
  },
  {
    state: "portal-status",
    label: "Portal status",
    objective: "The submitted flow appears or can be represented in the portal status experience.",
    required: true,
  },
  {
    state: "admin-review",
    label: "Admin review",
    objective: "The flow can be represented in admin review or audit concepts where relevant.",
    required: true,
  },
  {
    state: "empty-state",
    label: "Empty state",
    objective: "The flow has a reasonable fallback when no records or unknown records exist.",
    required: false,
  },
  {
    state: "mock-only-notice",
    label: "Mock-only notice",
    objective: "The UI clearly states that Phase 1 is simulated and no real backend action occurs.",
    required: true,
  },
];

function cloneStandardStates(): Phase1FlowStateRequirement[] {
  return phase1StandardFlowStates.map((state) => ({ ...state }));
}

export const phase1FlowStateMaps: Phase1FlowStateMap[] = [
  {
    id: "membership",
    title: "Membership purchase and onboarding",
    primaryRoute: "/membership/sign-up-now",
    portalRoute: "/portal/dashboard",
    adminRoute: "/admin/membership",
    featurePath: "src/app/features/membership/MembershipPurchaseOnboardingFlow.tsx",
    mockDataPath: "src/app/mock/membership.mock.ts",
    mockServicePath: "src/app/services/mock/membership.mockService.ts",
    requiredStates: cloneStandardStates(),
    notes: "Covers plan selection, mock payment, review, submit, confirmation, onboarding and portal membership state.",
  },
  {
    id: "decision-desk",
    title: "Decision Desk",
    primaryRoute: "/on-demand/decision-desk",
    portalRoute: "/portal/services",
    adminRoute: "/admin/requests/decision-desk",
    featurePath: "src/app/features/decision-desk/DecisionDeskFlow.tsx",
    mockDataPath: "src/app/mock/decisionDesk.mock.ts",
    mockServicePath: "src/app/services/mock/decisionDesk.mockService.ts",
    requiredStates: cloneStandardStates(),
    notes: "Covers business context, decision issue, current situation, supporting info, review, submit and confirmation.",
  },
  {
    id: "docushare",
    title: "DocuShare / Document Nucleus",
    primaryRoute: "/document-nucleus/brief",
    portalRoute: "/portal/documents",
    adminRoute: "/admin/requests/docushare",
    featurePath: "src/app/features/docushare/DocuShareOnboardingFlow.tsx",
    mockDataPath: "src/app/mock/docushare.mock.ts",
    mockServicePath: "src/app/services/mock/docushare.mockService.ts",
    requiredStates: cloneStandardStates(),
    notes: "Covers document group, purpose, audience, style, mock uploads, review, submit and document status.",
  },
  {
    id: "marketplace-enquiry",
    title: "Marketplace buyer enquiry",
    primaryRoute: "/marketplace/enquiry/:id",
    portalRoute: "/portal/services",
    adminRoute: "/admin/marketplace",
    featurePath: "src/app/features/marketplace/MarketplaceEnquiryListingFlow.tsx",
    mockDataPath: "src/app/mock/marketplace.mock.ts",
    mockServicePath: "src/app/services/mock/marketplace.mockService.ts",
    requiredStates: cloneStandardStates(),
    notes: "Covers listing detail, buyer details, enquiry message, review, mock submit and confirmation.",
  },
  {
    id: "marketplace-listing",
    title: "Marketplace seller listing",
    primaryRoute: "/marketplace/listing/new",
    portalRoute: "/portal/services",
    adminRoute: "/admin/marketplace",
    featurePath: "src/app/features/marketplace/MarketplaceEnquiryListingFlow.tsx",
    mockDataPath: "src/app/mock/marketplace.mock.ts",
    mockServicePath: "src/app/services/mock/marketplace.mockService.ts",
    requiredStates: cloneStandardStates(),
    notes: "Covers listing type, details, mock media, fee/payment simulation, review, submit and admin review state.",
  },
  {
    id: "connectivity",
    title: "NBN/connectivity order",
    primaryRoute: "/operations/connectivity",
    portalRoute: "/portal/services",
    adminRoute: "/admin/requests/connectivity",
    featurePath: "src/app/features/connectivity/ConnectivityOrderFlow.tsx",
    mockDataPath: "src/app/mock/connectivity.mock.ts",
    mockServicePath: "src/app/services/mock/connectivity.mockService.ts",
    requiredStates: cloneStandardStates(),
    notes: "Covers serviceability, plan, hardware, business details, mock payment, review, submit and provisioning status.",
  },
  {
    id: "risk-advisor",
    title: "Risk Advisor",
    primaryRoute: "/on-demand/risk-advisor",
    portalRoute: "/portal/services",
    adminRoute: "/admin/requests/risk-advisor",
    featurePath: "src/app/features/risk-advisor/RiskAdvisorFlow.tsx",
    mockDataPath: "src/app/mock/riskAdvisor.mock.ts",
    mockServicePath: "src/app/services/mock/riskAdvisor.mockService.ts",
    requiredStates: cloneStandardStates(),
    notes: "Covers business profile, risk categories, controls, score preview, review, submit, confirmation and outcome state.",
  },
  {
    id: "the-fixer",
    title: "The Fixer",
    primaryRoute: "/on-demand/the-fixer",
    portalRoute: "/portal/services",
    adminRoute: "/admin/requests/fixer",
    featurePath: "src/app/features/the-fixer/TheFixerFlow.tsx",
    mockDataPath: "src/app/mock/fixer.mock.ts",
    mockServicePath: "src/app/services/mock/fixer.mockService.ts",
    requiredStates: cloneStandardStates(),
    notes: "Covers urgent issue intake, impact, urgency, mock supporting info, review, submit, confirmation and triage state.",
  },
  {
    id: "contact-discovery",
    title: "Contact / discovery enquiry",
    primaryRoute: "/contact",
    portalRoute: "/portal/services",
    adminRoute: "/admin/requests",
    featurePath: "src/app/pages/ContactPage.tsx",
    mockDataPath: "src/app/mock/contact.mock.ts",
    mockServicePath: "src/app/services/mock/contact.mockService.ts",
    requiredStates: cloneStandardStates(),
    notes: "Represents general enquiry and discovery request states. Some implementation may remain as public contact page placeholders.",
  },
  {
    id: "application-setup",
    title: "Application setup enquiry",
    primaryRoute: "/portal/apps",
    portalRoute: "/portal/apps",
    adminRoute: "/admin/requests",
    featurePath: "src/app/pages/portal/PortalApps.tsx",
    mockDataPath: "src/app/mock/applications.mock.ts",
    mockServicePath: "src/app/services/mock/portal.mockService.ts",
    requiredStates: cloneStandardStates(),
    notes: "Represents app access, entitlement, request access and admin review concepts for Phase 1.",
  },
];

export function getPhase1FlowStateMap(id: Phase1FlowArea): Phase1FlowStateMap | undefined {
  return phase1FlowStateMaps.find((flow) => flow.id === id);
}

export function getRequiredPhase1FlowStates(): Phase1FlowStateRequirement[] {
  return phase1StandardFlowStates.filter((state) => state.required);
}
