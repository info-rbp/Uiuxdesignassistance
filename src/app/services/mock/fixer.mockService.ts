import { mockFixerIssueCategories, mockFixerRequests } from "../../mock";
import { createMockReference, mockFailure, mockGet, mockPost, requireFields } from "./mockClient";

export interface MockFixerRequestPayload extends Record<string, unknown> {
  issueTitle?: string;
  issueDescription?: string;
  urgency?: string;
  businessImpact?: string;
  desiredResolution?: string;
}

export interface MockFixerRequestResult {
  reference: string;
  status: "submitted";
  requestHref: string;
}

export function getMockFixerSetup() {
  return mockGet(
    "/mock/fixer/setup",
    {
      categories: mockFixerIssueCategories,
      requests: mockFixerRequests,
    },
    "Mock Fixer setup returned."
  );
}

export function submitMockFixerRequest(payload: MockFixerRequestPayload) {
  const errors = requireFields(payload, [
    "issueTitle",
    "issueDescription",
    "urgency",
    "businessImpact",
    "desiredResolution",
  ]);

  if (errors.length > 0) {
    return Promise.resolve(
      mockFailure<MockFixerRequestResult>(
        "/mock/fixer/request",
        "Mock Fixer validation failed.",
        errors
      )
    );
  }

  return mockPost(
    "/mock/fixer/request",
    payload,
    () => ({
      reference: createMockReference("FIX"),
      status: "submitted" as const,
      requestHref: "/portal/services",
    }),
    "Mock Fixer request submitted."
  );
}
