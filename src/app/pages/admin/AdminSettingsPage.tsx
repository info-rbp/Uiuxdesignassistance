import { AdminSectionPage } from "./AdminSectionPage";

export function AdminSettingsPage() {
  return (
    <AdminSectionPage
      title="Settings"
      description="Manage platform settings, admin users, integration settings, Firebase readiness, and access control."
      routeLabel="/admin/settings/platform"
      publicLink={{ label: "Public page", status: "Not applicable" }}
      portalLink={{ label: "Portal page", status: "Not applicable" }}
      relatedSections={['Platform Settings', 'Admin Users', 'Integration Settings', 'Firebase Readiness', 'Access Control']}
    />
  );
}
