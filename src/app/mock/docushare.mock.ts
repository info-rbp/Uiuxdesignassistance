import type { MockFileReference, MockStatus } from "./types.mock";

export interface MockDocumentProduct {
  id: string;
  title: string;
  category: string;
  description: string;
  priceLabel: string;
  status: "available" | "placeholder";
}

export interface MockDocuShareBrief {
  id: string;
  reference: string;
  documentType: string;
  category: string;
  jurisdiction: string;
  intendedUse: string;
  status: MockStatus;
  files: MockFileReference[];
}

export const mockDocumentProducts: MockDocumentProduct[] = [
  {
    id: "template-policy-001",
    title: "Business Policy Template Pack",
    category: "templates",
    description: "Mock document product for frontend browsing and brief simulation.",
    priceLabel: "Mock price only",
    status: "placeholder",
  },
  {
    id: "suite-operations-001",
    title: "Operations Documentation Suite",
    category: "documentation-suites",
    description: "Mock suite used for Document Nucleus product detail pages.",
    priceLabel: "Mock price only",
    status: "placeholder",
  },
];

export const mockDocuShareBriefs: MockDocuShareBrief[] = [
  {
    id: "doc-brief-001",
    reference: "DOC-MOCK-001",
    documentType: "Policy Pack",
    category: "templates",
    jurisdiction: "Australia",
    intendedUse: "Internal operations",
    status: "submitted",
    files: [
      {
        id: "file-001",
        fileName: "business-context-placeholder.pdf",
        fileType: "PDF",
        sizeLabel: "Mock file",
        status: "mock-only",
      },
    ],
  },
];

export const mockDocumentCategories = [
  "templates",
  "documentation-suites",
  "toolkits",
  "process",
];
