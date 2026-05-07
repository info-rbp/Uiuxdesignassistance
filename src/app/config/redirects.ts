export type RedirectStatus = "legacy" | "compatibility" | "planned";

export interface RedirectRule {
  from: string;
  to: string;
  status: RedirectStatus;
  reason: string;
}

export const legacyRedirects: RedirectRule[] = [
  {
    from: "/business-advisor",
    to: "/on-demand/business-advisor",
    status: "legacy",
    reason: "Legacy public route should resolve to the On-Demand Business Advisor page.",
  },
  {
    from: "/decision-desk",
    to: "/on-demand/decision-desk",
    status: "legacy",
    reason: "Legacy public route should resolve to the On-Demand Decision Desk page.",
  },
  {
    from: "/the-fixer",
    to: "/on-demand/the-fixer",
    status: "legacy",
    reason: "Legacy public route should resolve to The Fixer page.",
  },
  {
    from: "/risk-advisor",
    to: "/on-demand/risk-advisor",
    status: "planned",
    reason: "Short public route may be supported later as a convenience redirect.",
  },
  {
    from: "/docushare",
    to: "/document-nucleus/overview",
    status: "legacy",
    reason: "DocuShare public concept now maps to Document Nucleus.",
  },
  {
    from: "/services",
    to: "/on-demand/services",
    status: "legacy",
    reason: "Generic services route should resolve to On-Demand Services.",
  },
  {
    from: "/finance",
    to: "/operations/finance",
    status: "legacy",
    reason: "Finance should sit under Operations.",
  },
  {
    from: "/finance/business-lending",
    to: "/operations/finance/business-lending",
    status: "legacy",
    reason: "Finance child route should sit under Operations.",
  },
  {
    from: "/finance/business-insurance",
    to: "/operations/finance/business-insurance",
    status: "legacy",
    reason: "Finance child route should sit under Operations.",
  },
  {
    from: "/finance/financial-planning",
    to: "/operations/finance/financial-planning",
    status: "legacy",
    reason: "Finance child route should sit under Operations.",
  },
  {
    from: "/finance/credit-and-funding",
    to: "/operations/finance/credit-and-funding",
    status: "legacy",
    reason: "Finance child route should sit under Operations.",
  },
  {
    from: "/operations/superloop",
    to: "/operations/connectivity/superloop",
    status: "compatibility",
    reason: "Superloop should now sit under the broader Connectivity route group.",
  },
  {
    from: "/membership/sign-up",
    to: "/membership/sign-up-now",
    status: "legacy",
    reason: "Membership sign-up route should use the approved public path.",
  },
  {
    from: "/membership/faq",
    to: "/membership/frequently-asked-questions",
    status: "legacy",
    reason: "Membership FAQ route should use the approved public path.",
  },
  {
    from: "/privacy-policy",
    to: "/legal/privacy-policy",
    status: "legacy",
    reason: "Legal pages should sit under /legal.",
  },
  {
    from: "/terms-of-use",
    to: "/legal/terms-of-use",
    status: "legacy",
    reason: "Legal pages should sit under /legal.",
  },
];

export function findRedirectTarget(pathname: string): RedirectRule | undefined {
  return legacyRedirects.find((rule) => rule.from === pathname);
}

export function isLegacyPath(pathname: string): boolean {
  return legacyRedirects.some((rule) => rule.from === pathname);
}
