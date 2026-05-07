export interface OperationArea {
  id: string;
  title: string;
  summary: string;
  href: string;
  status: "ready" | "placeholder" | "content-required" | "backend-later";
}

export const operationAreas: OperationArea[] = [
  { id: "finance", title: "Business Finance", summary: "Finance education, planning, funding readiness, and referral pathways.", href: "/operations/finance", status: "content-required" },
  { id: "business-lending", title: "Business Lending", summary: "Business lending guidance and referral pathways.", href: "/operations/finance/business-lending", status: "content-required" },
  { id: "business-insurance", title: "Business Insurance", summary: "Business insurance guidance and referral pathways.", href: "/operations/finance/business-insurance", status: "content-required" },
  { id: "financial-planning", title: "Financial Planning", summary: "Business and owner financial planning guidance.", href: "/operations/finance/financial-planning", status: "content-required" },
  { id: "credit-and-funding", title: "Credit and Funding", summary: "Credit readiness and funding pathway guidance.", href: "/operations/finance/credit-and-funding", status: "content-required" },
  { id: "insurance", title: "Insurance", summary: "Insurance guidance and business protection pathways.", href: "/operations/insurance", status: "content-required" },
  { id: "connectivity", title: "Connectivity", summary: "Connectivity, NBN, phone, and business internet support.", href: "/operations/connectivity", status: "content-required" },
  { id: "nbn-phone", title: "NBN & Phone", summary: "Business NBN and phone service information.", href: "/operations/connectivity/nbn-phone", status: "content-required" },
  { id: "superloop", title: "Superloop Connectivity", summary: "Connectivity provider pathway and service information.", href: "/operations/connectivity/superloop", status: "content-required" },
  { id: "calculators", title: "Calculators", summary: "Business calculators and planning tools.", href: "/operations/calculators", status: "content-required" },
  { id: "coming-soon", title: "Coming Soon", summary: "Future operations features and services.", href: "/operations/coming-soon", status: "placeholder" },
];
