import { AdminSectionPage } from "./AdminSectionPage";

export function AdminManagedServicesPage() {
  return (
    <AdminSectionPage
      title="Managed Services"
      description="Manage ongoing managed service areas, service descriptions, and future delivery workflows."
      routeLabel="/admin/managed-services"
      publicLink={{ label: "Public page", href: "/managed-services" }}
      portalLink={{ label: "Portal page", href: "/portal/services" }}
      relatedSections={['Bid Management', 'Real Estate', 'HR Services', 'Document Management', 'Business Sale Support', 'Custom Solutions']}
    />
  );
}
