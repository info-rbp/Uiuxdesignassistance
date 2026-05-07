import type { MockMoney, MockTimelineItem } from "./types.mock";

export interface MockMembershipPlan {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: MockMoney;
  billingCycle: "weekly" | "monthly" | "annual";
  inclusions: string[];
  ctaHref: string;
  status: "available" | "placeholder";
}

export const mockMembershipPlans: MockMembershipPlan[] = [
  {
    id: "membership-rbp-weekly",
    name: "Remote Business Partner Membership",
    slug: "remote-business-partner-membership",
    description: "A frontend-only mock membership plan used for Phase 1 journey testing.",
    price: {
      amount: 100,
      currency: "AUD",
      gstIncluded: false,
      label: "$100 + GST per week",
    },
    billingCycle: "weekly",
    inclusions: [
      "Mock access to On-Demand Services",
      "Mock access to selected applications",
      "Mock access to offers and resources",
      "Mock portal dashboard experience",
    ],
    ctaHref: "/membership/sign-up-now",
    status: "placeholder",
  },
];

export const mockMembershipTimeline: MockTimelineItem[] = [
  {
    id: "membership-started",
    label: "Membership started",
    description: "The membership sign-up flow has been started in mock mode.",
    status: "draft",
    timestamp: "2026-05-07T09:00:00Z",
  },
  {
    id: "membership-payment-simulated",
    label: "Payment simulated",
    description: "No real payment has been processed.",
    status: "pending",
    timestamp: "2026-05-07T09:05:00Z",
  },
  {
    id: "membership-active",
    label: "Membership active",
    description: "Mock membership status is active for portal demonstration.",
    status: "active",
    timestamp: "2026-05-07T09:10:00Z",
  },
];

export const mockMembershipSignupFields = [
  "selected_plan",
  "billing_cycle",
  "business_name",
  "abn_or_business_identifier",
  "industry",
  "business_size",
  "primary_contact_name",
  "email",
  "phone",
  "billing_address",
  "payment_method_mock",
  "accepted_terms",
  "marketing_consent",
];
