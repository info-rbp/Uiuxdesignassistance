import { AdminSectionPage } from "./AdminSectionPage";

export function AdminResourcesPage() {
  return (
    <AdminSectionPage
      title="Resources"
      description="Manage articles, guides, tools, downloads, and educational resources."
      routeLabel="/admin/resources"
      publicLink={{ label: "Public page", href: "/resources" }}
      portalLink={{ label: "Portal page", href: "/portal/resources" }}
      relatedSections={['Articles', 'Guides', 'Tools', 'Downloads', 'Educational']}
    />
  );
}
