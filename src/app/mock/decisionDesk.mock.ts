import type { MockPriority, MockStatus, MockTimelineItem } from "./types.mock";

export interface MockDecisionDeskRequest {
  id: string;
  reference: string;
  title: string;
  category: string;
  summary: string;
  urgency: MockPriority;
  status: MockStatus;
  deadline: string;
  optionsConsidered: string[];
}

export const mockDecisionDeskRequests: MockDecisionDeskRequest[] = [
  {
    id: "decision-001",
    reference: "DD-MOCK-001",
    title: "Choose operating model for expansion",
    category: "Strategy",
    summary: "Mock decision request used for Phase 1 review, submit and status states.",
    urgency: "high",
    status: "in-review",
    deadline: "2026-06-15",
    optionsConsidered: ["Hire internally", "Use managed service", "Hybrid operating model"],
  },
];

export const mockDecisionDeskTimeline: MockTimelineItem[] = [
  {
    id: "dd-draft",
    label: "Draft created",
    description: "Decision Desk request was started.",
    status: "draft",
    timestamp: "2026-05-07T10:00:00Z",
  },
  {
    id: "dd-submitted",
    label: "Submitted",
    description: "Mock request submitted for review.",
    status: "submitted",
    timestamp: "2026-05-07T10:15:00Z",
  },
  {
    id: "dd-review",
    label: "In review",
    description: "Mock advisor review state.",
    status: "in-review",
    timestamp: "2026-05-07T10:30:00Z",
  },
];

export const mockDecisionDeskCategories = [
  "Strategy",
  "Finance",
  "Operations",
  "Human Resources",
  "Technology",
  "Sales and Marketing",
  "Governance",
  "Other",
];
