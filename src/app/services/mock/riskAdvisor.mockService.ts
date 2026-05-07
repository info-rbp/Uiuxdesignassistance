import { mockRiskAssessments, mockRiskCategories, mockRiskQuestions } from "../../mock";
import { createMockReference, mockFailure, mockGet, mockPost, requireFields } from "./mockClient";

export interface MockRiskAssessmentPayload extends Record<string, unknown> {
  businessName?: string;
  industry?: string;
  riskCategories?: string[];
  currentControls?: string;
  riskAppetite?: string;
}

export interface MockRiskAssessmentResult {
  reference: string;
  status: "outcome-ready";
  mockScore: number;
  summaryHref: string;
}

export function getMockRiskAdvisorSetup() {
  return mockGet(
    "/mock/risk-advisor/setup",
    {
      categories: mockRiskCategories,
      questions: mockRiskQuestions,
      assessments: mockRiskAssessments,
    },
    "Mock Risk Advisor setup returned."
  );
}

export function submitMockRiskAssessment(payload: MockRiskAssessmentPayload) {
  const errors = requireFields(payload, [
    "businessName",
    "industry",
    "currentControls",
    "riskAppetite",
  ]);

  if (!payload.riskCategories || payload.riskCategories.length === 0) {
    errors.push({
      field: "riskCategories",
      code: "required",
      message: "At least one risk category is required for this mock assessment.",
    });
  }

  if (errors.length > 0) {
    return Promise.resolve(
      mockFailure<MockRiskAssessmentResult>(
        "/mock/risk-advisor/assessment",
        "Mock Risk Advisor validation failed.",
        errors
      )
    );
  }

  return mockPost(
    "/mock/risk-advisor/assessment",
    payload,
    () => ({
      reference: createMockReference("RISK"),
      status: "outcome-ready" as const,
      mockScore: 72,
      summaryHref: "/portal/services",
    }),
    "Mock Risk Advisor assessment submitted."
  );
}
