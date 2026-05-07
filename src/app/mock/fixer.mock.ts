import type { MockPriority, MockStatus } from "./types.mock";

export interface MockFixerRequest {
  id: string;
  reference: string;
  issueTitle: string;
  issueDescription: string;
  urgency: MockPriority;
  businessImpact: string;
  status: MockStatus;
}

export const mockFixerRequests: MockFixerRequest[] = [
  {
    id: "fixer-001",
    reference: "FIX-MOCK-001",
    issueTitle: "Urgent process breakdown",
    issueDescription: "Mock urgent request used for frontend review and status tracking.",
    urgency: "urgent",
    businessImpact: "Delays to customer delivery",
    status: "assigned",
  },
];

export const mockFixerIssueCategories = [
  "Operational issue",
  "People issue",
  "Supplier issue",
  "Customer issue",
  "Compliance issue",
  "Technology issue",
  "Other",
];
