import { AdminSectionPage } from "./AdminSectionPage";

export function AdminMarketplacePage() {
  return (
    <AdminSectionPage
      title="Marketplace"
      description="Manage marketplace listings, buying process content, and list-with-us enquiries."
      routeLabel="/admin/marketplace"
      publicLink={{ label: "Public page", href: "/marketplace" }}
      portalLink={{ label: "Portal page", href: "/portal/offers" }}
      relatedSections={['Marketplace', 'Listings', 'Buying Process', 'List With Us']}
    />
  );
}
