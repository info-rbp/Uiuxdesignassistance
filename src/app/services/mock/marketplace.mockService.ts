import { mockMarketplaceEnquiries, mockMarketplaceItems } from "../../mock";
import { createMockReference, mockFailure, mockGet, mockPost, requireFields } from "./mockClient";

export interface MockMarketplaceEnquiryPayload extends Record<string, unknown> {
  itemId?: string;
  buyerName?: string;
  buyerEmail?: string;
  message?: string;
}

export interface MockMarketplaceListingPayload extends Record<string, unknown> {
  listingTitle?: string;
  listingCategory?: string;
  description?: string;
  price?: string;
  sellerEmail?: string;
}

export interface MockMarketplaceResult {
  reference: string;
  status: "submitted" | "in-review";
  marketplaceHref: string;
}

export function getMockMarketplaceItems() {
  return mockGet(
    "/mock/marketplace/items",
    {
      items: mockMarketplaceItems,
      enquiries: mockMarketplaceEnquiries,
    },
    "Mock marketplace items returned."
  );
}

export function submitMockMarketplaceEnquiry(payload: MockMarketplaceEnquiryPayload) {
  const errors = requireFields(payload, ["itemId", "buyerName", "buyerEmail", "message"]);

  if (errors.length > 0) {
    return Promise.resolve(
      mockFailure<MockMarketplaceResult>(
        "/mock/marketplace/enquiry",
        "Mock marketplace enquiry validation failed.",
        errors
      )
    );
  }

  return mockPost(
    "/mock/marketplace/enquiry",
    payload,
    () => ({
      reference: createMockReference("MKT-ENQ"),
      status: "submitted" as const,
      marketplaceHref: "/marketplace",
    }),
    "Mock marketplace enquiry submitted."
  );
}

export function submitMockMarketplaceListing(payload: MockMarketplaceListingPayload) {
  const errors = requireFields(payload, [
    "listingTitle",
    "listingCategory",
    "description",
    "price",
    "sellerEmail",
  ]);

  if (errors.length > 0) {
    return Promise.resolve(
      mockFailure<MockMarketplaceResult>(
        "/mock/marketplace/listing",
        "Mock marketplace listing validation failed.",
        errors
      )
    );
  }

  return mockPost(
    "/mock/marketplace/listing",
    payload,
    () => ({
      reference: createMockReference("MKT-LIST"),
      status: "in-review" as const,
      marketplaceHref: "/marketplace",
    }),
    "Mock marketplace listing submitted for review."
  );
}
