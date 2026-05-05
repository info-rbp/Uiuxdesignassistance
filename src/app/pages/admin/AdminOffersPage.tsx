import { AdminSectionPage } from "./AdminSectionPage";

export function AdminOffersPage() {
  return (
    <AdminSectionPage
      title="Offers"
      description="Manage public offers, partner offers, categories, listings, and redemptions."
      routeLabel="/admin/offers"
      publicLink={{ label: "Public page", href: "/offers" }}
      portalLink={{ label: "Portal page", href: "/portal/offers" }}
      relatedSections={['All Offers', 'Offer Listings', 'Offer Categories', 'Redemptions']}
    />
  );
}
