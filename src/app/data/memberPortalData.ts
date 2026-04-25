export interface MemberPlanOverview {
  tier: string;
  externalLabel: string;
  planCode: string;
  status: string;
  billingCycle: string;
  renewalDate: string;
  expiryDate: string | null;
  lastPaymentState: string;
  activeGrant: string | null;
  serviceDiscount: number;
}

export interface MemberUsage {
  customisationAllowanceUrlTitle: string;
  customisationUsed: number;
  customisationAllowance: number;
  discoveryCallIncluded: boolean;
  strategicCheckupIncluded: boolean;
}

export interface MemberEntitlements {
  docuShare: string;
  docuShareDescription: string;
  resources: string;
  resourcesDescription: string;
  offers: string;
  offersDescription: string;
  services: string;
  servicesDescription: string;
  support: string;
  supportDescription: string;
  implementation: string;
  implementationDescription: string;
}

export interface MemberPortalData {
  overview: MemberPlanOverview;
  usage: MemberUsage;
  entitlements: MemberEntitlements;
  user: {
    firstName: string;
    lastName: string;
    tenantName: string;
  };
}

export const getMemberOverview = (): MemberPortalData => {
  return {
    user: {
      firstName: "Jane",
      lastName: "Smith",
      tenantName: "Acme Corp",
    },
    overview: {
      tier: "standard",
      externalLabel: "Pro",
      planCode: "pro_monthly",
      status: "Active",
      billingCycle: "Monthly",
      renewalDate: "14 May 2026",
      expiryDate: null,
      lastPaymentState: "Paid",
      activeGrant: null,
      serviceDiscount: 12.5,
    },
    usage: {
      customisationAllowanceUrlTitle: "Customisation",
      customisationUsed: 0,
      customisationAllowance: 1,
      discoveryCallIncluded: true,
      strategicCheckupIncluded: false,
    },
    entitlements: {
      docuShare: "Included",
      docuShareDescription: "Templates, guides, and document suites",
      resources: "Included",
      resourcesDescription: "Knowledge centre, articles, and tools",
      offers: "Included",
      offersDescription: "Top partner offers & exclusive deals",
      services: "Included",
      servicesDescription: "12.5% discount and priority discovery calls",
      support: "Included",
      supportDescription: "Standard support requests and help",
      implementation: "Locked",
      implementationDescription: "Upgrade required for implementation help",
    },
  };
};
