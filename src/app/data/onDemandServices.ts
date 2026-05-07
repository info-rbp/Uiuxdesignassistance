export interface OnDemandService {
  id: string;
  title: string;
  summary: string;
  href: string;
  category: string;
  status: "ready" | "placeholder" | "content-required" | "backend-later";
}

export const onDemandServices: OnDemandService[] = [
  {
    id: "business-advisor",
    title: "Business Advisor",
    summary: "Strategic and operational guidance for business owners.",
    href: "/on-demand/business-advisor",
    category: "operations",
    status: "content-required",
  },
  {
    id: "decision-desk",
    title: "Decision Desk",
    summary: "Submit a business issue and receive structured written guidance.",
    href: "/on-demand/decision-desk",
    category: "strategy",
    status: "content-required",
  },
  {
    id: "the-fixer",
    title: "The Fixer",
    summary: "Focused support for one specific business problem.",
    href: "/on-demand/the-fixer",
    category: "operations",
    status: "content-required",
  },
  {
    id: "risk-advisor",
    title: "Risk Advisor",
    summary: "Risk-focused advisory support for business decisions and operations.",
    href: "/on-demand/risk-advisor",
    category: "governance",
    status: "content-required",
  },
];

export const advisoryCategories = [
  { id: "operations-advisory", title: "Operations Advisory", href: "/on-demand/services#operations-advisory" },
  { id: "human-resource-advisory", title: "Human Resource Advisory", href: "/on-demand/services#human-resource-advisory" },
  { id: "accounting-finance", title: "Accounting & Finance", href: "/on-demand/services#accounting-finance" },
  { id: "sales-marketing", title: "Sales & Marketing", href: "/on-demand/services#sales-marketing" },
  { id: "management-consulting", title: "Management Consulting", href: "/on-demand/services#management-consulting" },
  { id: "change-management", title: "Change Management", href: "/on-demand/services#change-management" },
  { id: "ai-advisory", title: "AI Advisory", href: "/on-demand/services#ai-advisory" },
  { id: "research-development", title: "Research & Development", href: "/on-demand/services#research-development" },
  { id: "information-technology", title: "Information Technology", href: "/on-demand/services#information-technology" },
  { id: "public-relations", title: "Public Relations", href: "/on-demand/services#public-relations" },
  { id: "customised-solutions", title: "Customised Solutions", href: "/on-demand/services#customised-solutions" },
];
