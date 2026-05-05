import { AdminSectionPage } from "./AdminSectionPage";

export function AdminMembershipPage() {
  return (
    <AdminSectionPage
      title="Membership"
      description="Manage memberships, member records, payments, and portal access."
      routeLabel="/admin/membership"
      publicLink={{ label: "Public page", href: "/membership" }}
      portalLink={{ label: "Portal page", href: "/portal/dashboard" }}
      relatedSections={['Memberships', 'Members', 'Payments', 'Portal Access']}
    />
  );
}
