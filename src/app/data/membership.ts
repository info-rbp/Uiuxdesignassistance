export interface MembershipPageItem {
  id: string;
  title: string;
  summary: string;
  href: string;
  status: "ready" | "placeholder" | "content-required" | "backend-later";
}

export const membershipPages: MembershipPageItem[] = [
  { id: "overview", title: "Membership Overview", summary: "High-level membership proposition and pathway.", href: "/membership/overview", status: "content-required" },
  { id: "remote-business-partner-membership", title: "Remote Business Partner Membership", summary: "Detailed membership explanation and positioning.", href: "/membership/remote-business-partner-membership", status: "content-required" },
  { id: "inclusions", title: "Inclusions", summary: "Membership inclusions, access, and benefits.", href: "/membership/inclusions", status: "content-required" },
  { id: "pricing", title: "Pricing", summary: "Membership pricing information and plan comparison.", href: "/membership/pricing", status: "content-required" },
  { id: "usage", title: "Usage", summary: "How members use services, inclusions, credits, and support.", href: "/membership/usage", status: "content-required" },
  { id: "payment-terms", title: "Payment Terms", summary: "Payment terms, billing rules, and commercial conditions.", href: "/membership/payment-terms", status: "legal-review-required" },
  { id: "sign-up-now", title: "Sign Up Now", summary: "Public membership sign-up pathway placeholder.", href: "/membership/sign-up-now", status: "backend-later" },
  { id: "frequently-asked-questions", title: "Membership FAQs", summary: "Common membership questions and answers.", href: "/membership/frequently-asked-questions", status: "content-required" },
];
