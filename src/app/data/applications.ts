export interface ApplicationCategory {
  id: string;
  title: string;
  summary: string;
  href: string;
  status: "ready" | "placeholder" | "content-required" | "backend-later";
}

export const applicationCategories: ApplicationCategory[] = [
  { id: "how-these-work", title: "How These Work", summary: "How public-facing applications are configured and supported.", href: "/applications#how-these-work", status: "content-required" },
  { id: "operations-finance", title: "Operations and Finance", summary: "Applications for finance, operations, reporting, and business management.", href: "/applications#operations-finance", status: "content-required" },
  { id: "people-hr", title: "People and HR", summary: "Applications for HR, onboarding, employees, payroll structure, and people operations.", href: "/applications#people-hr", status: "content-required" },
  { id: "sales-crm", title: "Sales and CRM", summary: "Applications for sales pipelines, customers, and relationship management.", href: "/applications#sales-crm", status: "content-required" },
  { id: "documents", title: "Documents", summary: "Applications for document control, files, templates, and knowledge management.", href: "/applications#documents", status: "content-required" },
  { id: "support-desk", title: "Support Desk", summary: "Applications for tickets, customer requests, and service management.", href: "/applications#support-desk", status: "content-required" },
  { id: "learning", title: "Learning", summary: "Applications for training, onboarding, learning pathways, and education.", href: "/applications#learning", status: "content-required" },
  { id: "analytics", title: "Analytics", summary: "Applications for dashboards, reporting, insights, and performance visibility.", href: "/applications#analytics", status: "content-required" },
  { id: "payments-billing", title: "Payments and Billing", summary: "Applications for invoicing, billing, payments, and financial workflows.", href: "/applications#payments-billing", status: "content-required" },
  { id: "integrations", title: "Integrations", summary: "Connection points between systems, tools, and workflows.", href: "/applications#integrations", status: "content-required" },
  { id: "fleet-management", title: "Fleet Management", summary: "Future application area for fleet, assets, vehicles, and maintenance workflows.", href: "/applications#fleet-management", status: "placeholder" },
  { id: "business-watchlist", title: "Business Watchlist", summary: "Future risk and watchlist application concept.", href: "/applications#business-watchlist", status: "placeholder" },
];
