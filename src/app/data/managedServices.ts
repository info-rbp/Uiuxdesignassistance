export interface ManagedService {
  id: string;
  title: string;
  summary: string;
  href: string;
  type: "route" | "anchor";
  status: "ready" | "placeholder" | "content-required" | "backend-later";
}

export const managedServices: ManagedService[] = [
  { id: "bid-management", title: "Bid Management", summary: "Tender, bid, and proposal management support.", href: "/managed-services/bid-management", type: "route", status: "content-required" },
  { id: "real-estate", title: "Real Estate", summary: "Property operations and administration support.", href: "/managed-services/real-estate", type: "route", status: "content-required" },
  { id: "hr-services", title: "HR Services", summary: "People operations and HR documentation support.", href: "/managed-services/hr-services", type: "route", status: "content-required" },
  { id: "document-management", title: "Document Management", summary: "Ongoing business document management and control.", href: "/managed-services#document-management", type: "anchor", status: "content-required" },
  { id: "change-management", title: "Change Management", summary: "Support for operational, people, and systems change.", href: "/managed-services#change-management", type: "anchor", status: "content-required" },
  { id: "business-sale-support", title: "Business Sale Support", summary: "Operational preparation and documentation support for sale readiness.", href: "/managed-services#business-sale-support", type: "anchor", status: "content-required" },
  { id: "franchise", title: "Franchise", summary: "Franchise documentation, manuals, onboarding, and operating support.", href: "/managed-services#franchise", type: "anchor", status: "content-required" },
  { id: "lms", title: "LMS", summary: "Learning management system setup and content support.", href: "/managed-services#lms", type: "anchor", status: "content-required" },
  { id: "custom-solutions", title: "Custom Solutions", summary: "Tailored managed service support for specialised business needs.", href: "/managed-services#custom-solutions", type: "anchor", status: "content-required" },
  { id: "engagement-process", title: "Engagement Process", summary: "How managed service engagements are scoped, delivered, and reviewed.", href: "/managed-services#engagement-process", type: "anchor", status: "content-required" },
];
