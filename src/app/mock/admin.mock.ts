import { mockMembershipPlans } from "./membership.mock";
import { mockMarketplaceItems, mockMarketplaceEnquiries } from "./marketplace.mock";
import { mockDecisionDeskRequests } from "./decisionDesk.mock";
import { mockDocuShareBriefs } from "./docushare.mock";
import { mockConnectivityOrders } from "./connectivity.mock";
import { mockRiskAssessments } from "./riskAdvisor.mock";
import { mockFixerRequests } from "./fixer.mock";

export const mockAdminReviewQueues = {
  content: [
    {
      id: "content-review-001",
      title: "Public website content review",
      status: "placeholder",
    },
  ],
  requests: [
    ...mockDecisionDeskRequests,
    ...mockDocuShareBriefs,
    ...mockConnectivityOrders,
    ...mockRiskAssessments,
    ...mockFixerRequests,
  ],
  marketplace: [...mockMarketplaceItems, ...mockMarketplaceEnquiries],
  membership: mockMembershipPlans,
  auditReview: [
    {
      id: "audit-001",
      action: "Mock admin review created",
      actor: "Phase 1 mock admin",
      timestamp: "2026-05-07T11:00:00Z",
    },
  ],
};
