import { mockDecisionDeskCategories, mockDecisionDeskRequests, mockDecisionDeskTimeline } from "../../mock";
import { createMockReference, mockFailure, mockGet, mockPost, requireFields } from "./mockClient";

export interface MockDecisionDeskPayload extends Record<string, unknown> {
  decisionTitle?: string;
  decisionCategory?: string;
  decisionSummary?: string;
  urgency?: string;
  desiredOutcome?: string;
}

export interface MockDecisionDeskSubmitResult {
  reference: string;
  status: "submitted";
  requestHref: string;
  timeline: typeof mockDecisionDeskTimeline;
}

export function getMockDecisionDeskSetup() {
  return mockGet(
    "/mock/decision-desk/setup",
    {
      categories: mockDecisionDeskCategories,
      examples: mockDecisionDeskRequests,
    },
    "Mock Decision Desk setup returned."
  );
}

export function submitMockDecisionDeskRequest(payload: MockDecisionDeskPayload) {
  const errors = requireFields(payload, [
    "decisionTitle",
    "decisionCategory",
    "decisionSummary",
    "urgency",
    "desiredOutcome",
  ]);

  if (errors.length > 0) {
    return Promise.resolve(
      mockFailure<MockDecisionDeskSubmitResult>(
        "/mock/decision-desk/request",
        "Mock Decision Desk validation failed.",
        errors
      )
    );
  }

  return mockPost(
    "/mock/decision-desk/request",
    payload,
    () => ({
      reference: createMockReference("DD"),
      status: "submitted" as const,
      requestHref: "/portal/services",
      timeline: mockDecisionDeskTimeline,
    }),
    "Mock Decision Desk request submitted."
  );
}
