import type { MockMoney, MockStatus } from "./types.mock";

export interface MockConnectivityPlan {
  id: string;
  provider: "NBN" | "Superloop" | "Phone";
  name: string;
  speedLabel: string;
  price: MockMoney;
  description: string;
}

export interface MockConnectivityOrder {
  id: string;
  reference: string;
  serviceAddress: string;
  selectedPlanId: string;
  serviceabilityStatus: "available" | "manual-review" | "not-available";
  status: MockStatus;
}

export const mockConnectivityPlans: MockConnectivityPlan[] = [
  {
    id: "nbn-business-001",
    provider: "NBN",
    name: "Business NBN Mock Plan",
    speedLabel: "100/40 Mbps",
    price: {
      amount: 99,
      currency: "AUD",
      gstIncluded: false,
      label: "$99 + GST per month",
    },
    description: "Mock NBN plan for Phase 1 serviceability and order simulation.",
  },
  {
    id: "superloop-business-001",
    provider: "Superloop",
    name: "Superloop Business Mock Plan",
    speedLabel: "250/100 Mbps",
    price: {
      amount: 149,
      currency: "AUD",
      gstIncluded: false,
      label: "$149 + GST per month",
    },
    description: "Mock Superloop plan for frontend-only order simulation.",
  },
];

export const mockConnectivityOrders: MockConnectivityOrder[] = [
  {
    id: "connectivity-order-001",
    reference: "NBN-MOCK-001",
    serviceAddress: "100 Demo Street, Melbourne VIC",
    selectedPlanId: "nbn-business-001",
    serviceabilityStatus: "available",
    status: "submitted",
  },
];
