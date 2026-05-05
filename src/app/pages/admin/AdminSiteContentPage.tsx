import { AdminSectionPage } from "./AdminSectionPage";

export function AdminSiteContentPage() {
  return (
    <AdminSectionPage
      title="Site Content"
      description="Manage the public website structure, page sections, mega menu content, SEO metadata, header/footer content, and content status."
      routeLabel="/admin/site-content/pages"
      publicLink={{ label: "Public website", href: "/" }}
      portalLink={{ label: "Member portal", status: "Not applicable" }}
      relatedSections={["Public Pages", "Page Sections", "Mega Menu", "SEO / Metadata", "Header / Footer", "Content Status"]}
      tableRows={[
        { name: "Home (/)", category: "Public Pages", status: "Published", visibility: "Public", lastUpdated: "May 5, 2026" },
        { name: "About Us (/about)", category: "Public Pages", status: "Published", visibility: "Public", lastUpdated: "May 3, 2026" },
        { name: "Contact (/contact)", category: "Public Pages", status: "Published", visibility: "Public", lastUpdated: "May 3, 2026" },
        { name: "Help Center (/help)", category: "Public Pages", status: "Ready", visibility: "Public", lastUpdated: "May 4, 2026" },
        { name: "On-Demand Services (/on-demand)", category: "Public Pages", status: "Published", visibility: "Public", lastUpdated: "May 2, 2026" },
        { name: "Managed Services (/managed-services)", category: "Public Pages", status: "Published", visibility: "Public", lastUpdated: "May 2, 2026" },
        { name: "Applications (/applications)", category: "Public Pages", status: "Published", visibility: "Public", lastUpdated: "May 1, 2026" },
        { name: "Operations (/operations)", category: "Public Pages", status: "Ready", visibility: "Public", lastUpdated: "May 1, 2026" },
        { name: "Marketplace (/marketplace)", category: "Public Pages", status: "Ready", visibility: "Public", lastUpdated: "Apr 30, 2026" },
        { name: "Membership (/membership)", category: "Public Pages", status: "Published", visibility: "Public", lastUpdated: "Apr 29, 2026" },
        { name: "Offers (/offers)", category: "Public Pages", status: "Published", visibility: "Public", lastUpdated: "Apr 29, 2026" },
        { name: "Resources (/resources)", category: "Public Pages", status: "Published", visibility: "Public", lastUpdated: "Apr 28, 2026" }
      ]}
      notes="Anchor/link status tracked for: /applications#operations-finance, /applications#people-hr, /applications#integrations, /managed-services#document-management, /marketplace#buying-process, /membership#premium, /offers?category=ai, /resources?type=guides, and /help?section=faqs&category=applications."
    />
  );
}
