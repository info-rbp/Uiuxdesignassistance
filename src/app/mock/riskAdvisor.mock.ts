import type { MockStatus } from "./types.mock";

export interface MockRiskQuestion {
  id: string;
  category: string;
  question: string;
}

export interface MockRiskAssessment {
  id: string;
  reference: string;
  businessName: string;
  industry: string;
  score: number;
  status: MockStatus;
  summary: string;
}

export const mockRiskQuestions: MockRiskQuestion[] = [
  {
    id: "risk-q-001",
    category: "Governance",
    question: "Does the business have documented policies and responsibilities?",
  },
  {
    id: "risk-q-002",
    category: "Cyber",
    question: "Are critical systems protected by multi-factor authentication?",
  },
  {
    id: "risk-q-003",
    category: "Operations",
    question: "Are key operating processes documented and reviewed?",
  },
];

export const mockRiskAssessments: MockRiskAssessment[] = [
  {
    id: "risk-assessment-001",
    reference: "RISK-MOCK-001",
    businessName: "Demo Business Pty Ltd",
    industry: "Professional Services",
    score: 72,
    status: "outcome-ready",
    summary: "Mock assessment score for frontend-only Risk Advisor flow.",
  },
];

export const mockRiskCategories = [
  "Governance",
  "Cyber",
  "Finance",
  "People",
  "Operations",
  "Compliance",
  "Supplier",
  "Reputation",
];
