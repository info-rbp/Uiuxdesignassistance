import { mockCurrentUser } from "./user.mock";
import { mockNotifications } from "./notifications.mock";
import { mockPortalDocuments } from "./documents.mock";
import { mockDecisionDeskRequests } from "./decisionDesk.mock";
import { mockFixerRequests } from "./fixer.mock";
import { mockConnectivityOrders } from "./connectivity.mock";
import { mockRiskAssessments } from "./riskAdvisor.mock";

export const mockPortalDashboard = {
  user: mockCurrentUser,
  membershipStatus: "active",
  notifications: mockNotifications,
  documents: mockPortalDocuments,
  activeRequests: [
    ...mockDecisionDeskRequests,
    ...mockFixerRequests,
    ...mockConnectivityOrders,
    ...mockRiskAssessments,
  ],
  quickLinks: [
    { label: "Start Decision Desk", href: "/on-demand/decision-desk" },
    { label: "Request The Fixer", href: "/on-demand/the-fixer" },
    { label: "Run Risk Advisor", href: "/on-demand/risk-advisor" },
    { label: "Order Connectivity", href: "/operations/connectivity" },
  ],
};
