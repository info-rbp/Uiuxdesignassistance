import { mockDocuShareBriefs, mockDocumentCategories, mockDocumentProducts } from "../../mock";
import { createMockReference, mockFailure, mockGet, mockPost, requireFields } from "./mockClient";

export interface MockDocuShareBriefPayload extends Record<string, unknown> {
  documentType?: string;
  documentCategory?: string;
  businessContext?: string;
  jurisdiction?: string;
  intendedUse?: string;
}

export interface MockDocuShareBriefResult {
  reference: string;
  status: "submitted";
  documentsHref: string;
}

export function getMockDocumentProducts() {
  return mockGet(
    "/mock/docushare/products",
    {
      categories: mockDocumentCategories,
      products: mockDocumentProducts,
      briefs: mockDocuShareBriefs,
    },
    "Mock document products returned."
  );
}

export function submitMockDocuShareBrief(payload: MockDocuShareBriefPayload) {
  const errors = requireFields(payload, [
    "documentType",
    "documentCategory",
    "businessContext",
    "jurisdiction",
    "intendedUse",
  ]);

  if (errors.length > 0) {
    return Promise.resolve(
      mockFailure<MockDocuShareBriefResult>(
        "/mock/docushare/brief",
        "Mock DocuShare validation failed.",
        errors
      )
    );
  }

  return mockPost(
    "/mock/docushare/brief",
    payload,
    () => ({
      reference: createMockReference("DOC"),
      status: "submitted" as const,
      documentsHref: "/portal/documents",
    }),
    "Mock DocuShare brief submitted."
  );
}
