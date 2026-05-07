import type { MockContact, MockMoney, MockStatus } from "./types.mock";

export interface MockMarketplaceItem {
  id: string;
  title: string;
  category: "rbp-products" | "rbp-assets" | "third-party-products-assets";
  description: string;
  price: MockMoney;
  location: string;
  status: MockStatus;
}

export interface MockMarketplaceEnquiry {
  id: string;
  reference: string;
  itemId: string;
  buyer: MockContact;
  message: string;
  status: MockStatus;
}

export const mockMarketplaceItems: MockMarketplaceItem[] = [
  {
    id: "market-001",
    title: "Business Process Toolkit",
    category: "rbp-products",
    description: "Mock marketplace product for Phase 1 listing and enquiry journeys.",
    price: {
      amount: 250,
      currency: "AUD",
      gstIncluded: false,
      label: "$250 + GST",
    },
    location: "Online",
    status: "active",
  },
  {
    id: "market-002",
    title: "Office Asset Bundle",
    category: "third-party-products-assets",
    description: "Mock third-party asset listing for marketplace browsing.",
    price: {
      amount: 1200,
      currency: "AUD",
      gstIncluded: false,
      label: "$1,200 + GST",
    },
    location: "Melbourne",
    status: "in-review",
  },
];

export const mockMarketplaceEnquiries: MockMarketplaceEnquiry[] = [
  {
    id: "market-enquiry-001",
    reference: "MKT-MOCK-001",
    itemId: "market-001",
    buyer: {
      name: "Demo Buyer",
      email: "buyer@example.com",
      businessName: "Buyer Demo Pty Ltd",
    },
    message: "I would like more information about this mock listing.",
    status: "submitted",
  },
];
