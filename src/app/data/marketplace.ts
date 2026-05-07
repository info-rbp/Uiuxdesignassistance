export interface MarketplaceSection {
  id: string;
  title: string;
  summary: string;
  href: string;
  status: "ready" | "placeholder" | "content-required" | "backend-later";
}

export const marketplaceSections: MarketplaceSection[] = [
  { id: "rbp-products", title: "RBP Products", summary: "Remote Business Partner products, templates, bundles, and service packages.", href: "/marketplace#rbp-products", status: "content-required" },
  { id: "rbp-assets", title: "RBP Assets", summary: "Remote Business Partner owned assets and resources.", href: "/marketplace#rbp-assets", status: "content-required" },
  { id: "third-party-products-assets", title: "Third Party Products & Assets", summary: "Approved third-party products, services, assets, and resources.", href: "/marketplace#third-party-products-assets", status: "content-required" },
  { id: "buying-process", title: "Buying Process", summary: "How enquiries, purchases, delivery, and follow-up work.", href: "/marketplace#buying-process", status: "content-required" },
  { id: "list-with-us", title: "List With Us", summary: "Supplier, partner, and third-party listing pathway.", href: "/marketplace#list-with-us", status: "content-required" },
];
