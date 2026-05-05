import { AdminSectionPage } from "./AdminSectionPage";

export function AdminOperationsPage() {
  return (
    <AdminSectionPage
      title="Operations"
      description="Manage operational support areas including finance, insurance, connectivity, and calculators."
      routeLabel="/admin/operations"
      publicLink={{ label: "Public page", href: "/operations" }}
      portalLink={{ label: "Portal page", href: "/portal/resources" }}
      relatedSections={['Business Finance', 'Business Insurance', 'Superloop Connectivity', 'Calculators']}
    />
  );
}
