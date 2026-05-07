export type LegalPageStatus = "legal-review-required" | "placeholder" | "ready";

export interface LegalPage {
  id: string;
  title: string;
  href: string;
  summary: string;
  status: LegalPageStatus;
}

export const legalPages: LegalPage[] = [
  { id: "privacy-policy", title: "Privacy Policy", href: "/legal/privacy-policy", summary: "Privacy policy placeholder pending legal review.", status: "legal-review-required" },
  { id: "terms-of-use", title: "Terms of Use", href: "/legal/terms-of-use", summary: "Website terms of use placeholder pending legal review.", status: "legal-review-required" },
  { id: "terms-of-engagement", title: "Terms of Engagement", href: "/legal/terms-of-engagement", summary: "Client engagement terms placeholder pending legal review.", status: "legal-review-required" },
  { id: "payment-policy", title: "Payment Policy", href: "/legal/payment-policy", summary: "Payment policy placeholder pending legal review.", status: "legal-review-required" },
  { id: "services-policy", title: "Services Policy", href: "/legal/services-policy", summary: "Services policy placeholder pending legal review.", status: "legal-review-required" },
];
