import { AdminSectionPage } from "./AdminSectionPage";

export function AdminApplicationsPage() {
  return (
    <AdminSectionPage
      title="Applications"
      description="Manage the application catalogue, application categories, setup requests, member access, and integrations."
      routeLabel="/admin/applications"
      publicLink={{ label: "Public page", href: "/applications" }}
      portalLink={{ label: "Portal page", href: "/portal/apps" }}
      relatedSections={["Operations and Finance", "People and HR", "Sales and CRM", "Documents", "Support Desk", "Learning", "Analytics", "Payments and Billing", "Integrations"]}
      tableRows={[
        { name: "ERPNext", category: "Operations and Finance", status: "Published", visibility: "Members Only", lastUpdated: "May 5, 2026" },
        { name: "Frappe CRM", category: "Sales and CRM", status: "Ready", visibility: "Members Only", lastUpdated: "May 4, 2026" },
        { name: "HRMS", category: "People and HR", status: "Draft", visibility: "Members Only", lastUpdated: "May 3, 2026" },
        { name: "Helpdesk", category: "Support Desk", status: "Published", visibility: "Members Only", lastUpdated: "May 1, 2026" },
        { name: "Frappe LMS", category: "Learning", status: "Ready", visibility: "Members Only", lastUpdated: "Apr 30, 2026" },
        { name: "Frappe Drive", category: "Documents", status: "Draft", visibility: "Members Only", lastUpdated: "Apr 28, 2026" },
        { name: "Payments", category: "Payments and Billing", status: "Placeholder", visibility: "Members Only", lastUpdated: "Apr 27, 2026" },
        { name: "Analytics Dashboard", category: "Analytics", status: "Published", visibility: "Members Only", lastUpdated: "May 2, 2026" },
        { name: "OpenAI Assistant", category: "Integrations", status: "Content Required", visibility: "Admin Only", lastUpdated: "May 5, 2026" },
      ]}
      notes="Integrations are scaffolded under Applications, and /portal/integrations is planned but not live in this release."
    />
  );
}
