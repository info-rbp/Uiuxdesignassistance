import { Link } from "react-router";
import { useMember } from "../../hooks/useMember";
import { PortalCard, PortalCardBody, PortalCardHeader, PortalBadge } from "../../components/portal/PortalComponents";
import { ExternalLink, Loader2, CreditCard, AlertCircle } from "lucide-react";

function ManageBillingButton({ stripeCustomerId }: { stripeCustomerId: string | null }) {
  const handleClick = async () => {
    try {
      const res = await fetch("/api/create-billing-portal-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerId: stripeCustomerId }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error("Failed to open billing portal:", err);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
    >
      <CreditCard className="w-4 h-4" />
      Manage Billing via Stripe
      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
    </button>
  );
}

export function PortalSubscriptionPage() {
  const { member, entitlements, isLoading } = useMember();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  const billingRows = [
    { label: "Current Plan", value: member?.externalLabel ?? "—" },
    { label: "Plan Code", value: member?.planCode ?? "—" },
    { label: "Status", value: member?.status ?? "—" },
    { label: "Billing Cycle", value: member?.billingCycle ?? "—" },
    { label: "Next Renewal", value: member?.renewalDate ?? "—" },
    { label: "Last Payment", value: member?.lastPaymentState ?? "—" },
    { label: "Service Discount", value: entitlements ? `${entitlements.serviceDiscount}% off` : "—" },
  ];

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Subscription & Billing
          </h1>
          <p className="text-slate-500 mt-2 text-sm max-w-md">
            View your billing cycle, payment history, and manage your subscription directly via Stripe.
          </p>
        </div>
        <ManageBillingButton stripeCustomerId={member?.stripeCustomerId ?? null} />
      </div>

      <PortalCard>
        <PortalCardHeader title="Plan & Billing Details" />
        <PortalCardBody>
          <div className="divide-y divide-slate-100">
            {billingRows.map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between py-3">
                <span className="text-sm font-semibold text-slate-500">{label}</span>
                <span className="text-sm font-bold text-slate-900">{value}</span>
              </div>
            ))}
          </div>
        </PortalCardBody>
      </PortalCard>

      <PortalCard>
        <PortalCardHeader title="Stripe Billing Portal" />
        <PortalCardBody>
          <div className="flex items-start gap-4 p-4 bg-amber-50 border border-amber-100 rounded-xl">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800 leading-relaxed">
              <strong>Payment history, invoices, and card management</strong> are handled securely via the Stripe Customer Portal.
              Clicking "Manage Billing via Stripe" above will open your Stripe billing dashboard in a new session.
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Update payment method", "Download invoices", "Cancel subscription"].map((action) => (
              <button
                key={action}
                onClick={async () => {
                  const res = await fetch("/api/create-billing-portal-session", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ customerId: member?.stripeCustomerId }),
                  });
                  const data = await res.json();
                  if (data.url) window.location.href = data.url;
                }}
                className="flex items-center justify-between px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 text-sm font-semibold text-slate-700 transition-all group"
              >
                {action}
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
              </button>
            ))}
          </div>
        </PortalCardBody>
      </PortalCard>

      <div className="text-center">
        <p className="text-sm text-slate-400 font-medium">
          Want to change your plan?{" "}
          <Link to="/membership" className="text-blue-600 font-bold hover:underline underline-offset-4">
            Compare membership tiers →
          </Link>
        </p>
      </div>
    </div>
  );
}
