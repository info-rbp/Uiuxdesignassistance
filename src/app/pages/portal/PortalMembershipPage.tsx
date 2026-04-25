import { Link } from "react-router";
import { useMember } from "../../hooks/useMember";
import {
  PortalCard,
  PortalCardBody,
  PortalCardHeader,
  PortalBadge,
  PortalActionButton,
} from "../../components/portal/PortalComponents";
import {
  FolderOpen,
  BookOpen,
  Tag,
  MessageSquarePlus,
  Phone,
  Settings,
  Loader2,
} from "lucide-react";

export function PortalMembershipPage() {
  const { member, entitlements, isLoading } = useMember();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (!member || !entitlements) {
    return (
      <div className="p-8 text-slate-500 text-sm">
        Could not load membership data.{" "}
        <Link to="/login" className="text-blue-600 font-bold underline">Sign in</Link>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8">
      {/* ── Section 1: Page Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            My Membership
          </h1>
          <p className="text-slate-500 mt-2 text-sm leading-relaxed max-w-md">
            View your current plan, included benefits, usage allowances, member access,
            and billing options.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ManageBillingButton stripeCustomerId={member.stripeCustomerId} />
        </div>
      </div>

      {/* ── Section 2 + 7: Plan + Billing Summary ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PortalCard>
          <PortalCardHeader title="Current Plan" />
          <PortalCardBody className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-blue-50/50 rounded-xl border border-blue-100 mb-2">
              <div>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">
                  Active Tier
                </p>
                <div className="flex items-center gap-2">
                  <h4 className="text-xl font-extrabold text-slate-900">
                    {member.externalLabel}
                  </h4>
                  <PortalBadge status={member.status} />
                </div>
              </div>
              <div className="mt-2 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-blue-200/50 flex flex-col justify-end">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider text-left sm:text-right">
                  Internal Code
                </span>
                <span className="text-sm font-semibold text-slate-700 font-mono text-left sm:text-right">
                  {member.planCode}
                </span>
              </div>
            </div>
            {entitlements.serviceDiscount > 0 && (
              <div className="bg-slate-50 rounded-xl p-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-600">Service Discount</span>
                <span className="text-sm font-bold text-emerald-600">
                  {entitlements.serviceDiscount}% off
                </span>
              </div>
            )}
          </PortalCardBody>
        </PortalCard>

        <PortalCard>
          <PortalCardHeader
            title="Billing Summary"
            action={
              <Link to="/portal/subscription" className="text-xs font-bold text-blue-600 hover:text-blue-700">
                View Subscription
              </Link>
            }
          />
          <PortalCardBody>
            <div className="space-y-4">
              <BillingRow label="Billing Cycle" value={member.billingCycle} />
              <BillingRow label="Renewal Date" value={member.renewalDate} />
              <BillingRow label="Last Payment" value={member.lastPaymentState} />
              {member.activeGrant && (
                <BillingRow label="Active Grant" value={member.activeGrant} />
              )}
            </div>
          </PortalCardBody>
        </PortalCard>
      </div>

      {/* ── Section 3: Usage & Allowances ── */}
      <div className="space-y-4">
        <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Usage & Allowances</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <PortalCard>
            <PortalCardBody className="flex flex-col items-center text-center p-5">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Customisation</p>
              <div className="text-2xl font-extrabold text-slate-900 mb-1">
                0 <span className="text-slate-400 text-lg">/ {entitlements.customisationAllowance}</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">used this month</p>
            </PortalCardBody>
          </PortalCard>

          <PortalCard>
            <PortalCardBody className="flex flex-col items-center text-center p-5 h-full justify-center">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Discovery Call</p>
              <PortalBadge status={entitlements.discoveryCall ? "Included" : "Locked"} />
            </PortalCardBody>
          </PortalCard>

          <PortalCard>
            <PortalCardBody className="flex flex-col items-center text-center p-5 h-full justify-center">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Strategic Check-Up</p>
              <PortalBadge status={entitlements.strategicCheckup ? "Included" : "Locked"} />
              {!entitlements.strategicCheckup && (
                <p className="text-[10px] text-slate-400 mt-2 font-medium">Ultimate tier</p>
              )}
            </PortalCardBody>
          </PortalCard>

          <PortalCard>
            <PortalCardBody className="flex flex-col items-center text-center p-5 h-full justify-center">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Decision Desk</p>
              <PortalBadge status="Coming soon" />
            </PortalCardBody>
          </PortalCard>
        </div>
      </div>

      {/* ── Section 4: Included Benefits ── */}
      <div className="space-y-4">
        <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Included Benefits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <BenefitCard title="DocuShare" desc="Templates, guides, and document suites" badge={entitlements.docuShare ? "Included" : "Locked"} />
          <BenefitCard title="Resources" desc="Knowledge centre, articles, and tools" badge={entitlements.resources ? "Included" : "Locked"} />
          <BenefitCard title="Offers" desc="Top partner offers & exclusive deals" badge={entitlements.offers ? "Included" : "Locked"} />
          <BenefitCard title="Services" desc="Priority calls and advisory discounts" badge={entitlements.services ? "Included" : "Locked"} />
          <BenefitCard title="Support" desc="Standard support requests and help" badge={entitlements.support ? "Included" : "Locked"} />
          <BenefitCard title="Implementation" desc={entitlements.implementation ? "End-to-end process implementation included" : "Upgrade to Ultimate to unlock"} badge={entitlements.implementation ? "Included" : "Locked"} />
        </div>
      </div>

      {/* ── Section 5: Access Shortcuts ── */}
      <div className="space-y-4">
        <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Member Access</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <PortalActionButton href="/portal/saved" icon={FolderOpen} label="Open DocuShare" />
          <PortalActionButton href="/resources" icon={BookOpen} label="Open Resources" />
          <PortalActionButton href="/offers" icon={Tag} label="View Offers" />
          <PortalActionButton href="/portal/customisation-requests" icon={MessageSquarePlus} label="Submit Request" />
          <PortalActionButton href="/portal/discovery-calls" icon={Phone} label="Book Call" />
        </div>
      </div>

      {/* ── Section 6: Upgrade Prompt ── */}
      {member.canUpgrade && (
        <div className="bg-blue-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-extrabold mb-3">
                {member.tier === "basic"
                  ? "Upgrade to Pro to unlock DocuShare, partner discounts, and advisory access."
                  : "Upgrade to Ultimate for strategic checkups, implementation support, and end-to-end processes."}
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Your next tier includes higher allowances, more benefits, and deeper advisory access.
              </p>
              <Link
                to="/membership"
                className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 font-bold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Compare Plans
              </Link>
            </div>
            <div className="hidden md:block shrink-0">
              <div className="w-24 h-24 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center">
                <Settings className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Internal helpers ─────────────────────────────────────────────────────────

function BillingRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
      <span className="text-sm font-semibold text-slate-500">{label}</span>
      <span className="text-sm font-bold text-slate-900">{value}</span>
    </div>
  );
}

function BenefitCard({ title, desc, badge }: { title: string; desc: string; badge: string }) {
  return (
    <PortalCard className="flex flex-col h-full">
      <PortalCardBody className="flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h4 className="font-extrabold text-slate-900 text-base">{title}</h4>
          <PortalBadge status={badge} />
        </div>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
      </PortalCardBody>
    </PortalCard>
  );
}

function ManageBillingButton({ stripeCustomerId }: { stripeCustomerId: string | null }) {
  const handleClick = async () => {
    try {
      const res = await fetch("/api/create-billing-portal-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerId: stripeCustomerId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error("Failed to open billing portal:", err);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex flex-shrink-0 items-center justify-center bg-white border border-slate-200 text-slate-700 hover:text-slate-900 font-bold text-sm px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
    >
      Manage Billing
    </button>
  );
}
