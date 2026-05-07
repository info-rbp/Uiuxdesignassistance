import { mockCurrentUser, mockNotifications, mockPortalDashboard } from "../../mock";
import { mockGet } from "./mockClient";

export function getMockMe() {
  return mockGet("/mock/me", mockCurrentUser, "Mock current user returned.");
}

export function getMockPortalDashboard() {
  return mockGet(
    "/mock/portal/dashboard",
    mockPortalDashboard,
    "Mock portal dashboard returned."
  );
}

export function getMockPortalNotifications() {
  return mockGet(
    "/mock/portal/notifications",
    mockNotifications,
    "Mock portal notifications returned."
  );
}
