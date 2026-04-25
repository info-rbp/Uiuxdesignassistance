import { useAuth } from "./useAuth";

// ─────────────────────────────────────────────────────────────────────────────
// Entitlement matrix
// Maps internal tier codes to public-facing labels and entitlement flags.
// Extend this as new features are gated. This is the single source of truth.
// ─────────────────────────────────────────────────────────────────────────────

const TIER_LABELS: Record<string, string> = {
  basic: "Basic",
  standard: "Pro",
  premium: "Ultimate",
};

const TIER_ORDER: Record<string, number> = {
  basic: 1,
  standard: 2,
  premium: 3,
};

const ENTITLEMENT_MATRIX: Record<string, {
  docuShare: boolean;
  resources: boolean;
  offers: boolean;
  services: boolean;
  support: boolean;
  implementation: boolean;
  discoveryCall: boolean;
  strategicCheckup: boolean;
  customisationAllowance: number;
  serviceDiscount: number;
}> = {
  basic: {
    docuShare: false,
    resources: true,
    offers: true,
    services: false,
    support: true,
    implementation: false,
    discoveryCall: false,
    strategicCheckup: false,
    customisationAllowance: 0,
    serviceDiscount: 0,
  },
  standard: {
    docuShare: true,
    resources: true,
    offers: true,
    services: true,
    support: true,
    implementation: false,
    discoveryCall: true,
    strategicCheckup: false,
    customisationAllowance: 1,
    serviceDiscount: 12.5,
  },
  premium: {
    docuShare: true,
    resources: true,
    offers: true,
    services: true,
    support: true,
    implementation: true,
    discoveryCall: true,
    strategicCheckup: true,
    customisationAllowance: 3,
    serviceDiscount: 20,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// useMember hook
// Returns the current member's plan overview and entitlements, derived
// from the authenticated user session. When auth is swapped to a real
// backend, this hook requires zero changes — data comes from useAuth().
// ─────────────────────────────────────────────────────────────────────────────

export function useMember() {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (!user || !isAuthenticated) {
    return { member: null, entitlements: null, isLoading };
  }

  const tier = user.tier ?? "basic";
  const entitlements = ENTITLEMENT_MATRIX[tier] ?? ENTITLEMENT_MATRIX.basic;

  return {
    isLoading,
    member: {
      // Identity
      firstName: user.firstName,
      lastName: user.lastName,
      tenantName: user.tenantName,
      email: user.email,

      // Plan summary
      tier,
      externalLabel: TIER_LABELS[tier] ?? tier,
      planCode: user.planCode ?? "unknown",
      stripeCustomerId: user.stripeCustomerId,

      // Billing — populated from Stripe/backend in a real integration
      // These are placeholders that will be replaced by real Stripe data
      status: "Active" as const,
      billingCycle: "Monthly" as const,
      renewalDate: "14 May 2026",
      lastPaymentState: "Paid" as const,
      activeGrant: null as string | null,

      // Derived
      tierOrder: TIER_ORDER[tier] ?? 0,
      isUltimate: tier === "premium",
      canUpgrade: tier !== "premium",
    },
    entitlements,
  };
}
