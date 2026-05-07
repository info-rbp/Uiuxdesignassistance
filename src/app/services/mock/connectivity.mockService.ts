import { mockConnectivityOrders, mockConnectivityPlans } from "../../mock";
import { createMockReference, mockFailure, mockGet, mockPost, requireFields } from "./mockClient";

export interface MockServiceabilityPayload extends Record<string, unknown> {
  serviceAddress?: string;
}

export interface MockConnectivityOrderPayload extends Record<string, unknown> {
  serviceAddress?: string;
  selectedPlanId?: string;
  contactName?: string;
  contactEmail?: string;
  paymentMethodMock?: string;
}

export interface MockServiceabilityResult {
  serviceabilityStatus: "available" | "manual-review" | "not-available";
  availablePlans: typeof mockConnectivityPlans;
}

export interface MockConnectivityOrderResult {
  reference: string;
  status: "submitted";
  orderHref: string;
}

export function getMockConnectivityPlans() {
  return mockGet(
    "/mock/connectivity/plans",
    {
      plans: mockConnectivityPlans,
      orders: mockConnectivityOrders,
    },
    "Mock connectivity plans returned."
  );
}

export function checkMockServiceability(payload: MockServiceabilityPayload) {
  const errors = requireFields(payload, ["serviceAddress"]);

  if (errors.length > 0) {
    return Promise.resolve(
      mockFailure<MockServiceabilityResult>(
        "/mock/connectivity/serviceability",
        "Mock serviceability validation failed.",
        errors
      )
    );
  }

  return mockPost(
    "/mock/connectivity/serviceability",
    payload,
    () => ({
      serviceabilityStatus: "available" as const,
      availablePlans: mockConnectivityPlans,
    }),
    "Mock serviceability check completed."
  );
}

export function submitMockConnectivityOrder(payload: MockConnectivityOrderPayload) {
  const errors = requireFields(payload, [
    "serviceAddress",
    "selectedPlanId",
    "contactName",
    "contactEmail",
    "paymentMethodMock",
  ]);

  if (errors.length > 0) {
    return Promise.resolve(
      mockFailure<MockConnectivityOrderResult>(
        "/mock/connectivity/order",
        "Mock connectivity order validation failed.",
        errors
      )
    );
  }

  return mockPost(
    "/mock/connectivity/order",
    payload,
    () => ({
      reference: createMockReference("NBN"),
      status: "submitted" as const,
      orderHref: "/portal/services",
    }),
    "Mock connectivity order submitted."
  );
}
