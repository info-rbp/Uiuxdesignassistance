import { AdminSectionPage } from "./AdminSectionPage";

export function AdminHelpCenterPage() {
  return (
    <AdminSectionPage
      title="Help Center"
      description="Manage FAQs, knowledge base content, troubleshooting content, resources, and support center information."
      routeLabel="/admin/help-center"
      publicLink={{ label: "Public page", href: "/help" }}
      portalLink={{ label: "Portal page", href: "/portal/support" }}
      relatedSections={['Frequently Asked Questions', 'Knowledge Base', 'Troubleshooting', 'Resources', 'Support Center']}
    />
  );
}
