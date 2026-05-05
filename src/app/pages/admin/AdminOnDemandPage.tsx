import { AdminSectionPage } from "./AdminSectionPage";

export function AdminOnDemandPage() {
  return (
    <AdminSectionPage
      title="On-Demand Services"
      description="Manage on-demand service content, requests, Document Nucleus items, and service-related workflows."
      routeLabel="/admin/on-demand"
      publicLink={{ label: "Public page", href: "/on-demand" }}
      portalLink={{ label: "Portal page", href: "/portal/services" }}
      relatedSections={['Business Advisor', 'Decision Desk', 'The Fixer', 'Document Nucleus', 'Templates', 'Documentation Suites', 'Toolkits', 'Process', 'On-Demand Services']}
    />
  );
}
