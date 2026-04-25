import { Link } from "react-router";
import { useMember } from "../../hooks/useMember";
import { PortalCard, PortalCardBody, PortalActionButton } from "../../components/portal/PortalComponents";
import { Star, CreditCard, FileText, Phone, Bookmark, HelpCircle, Loader2, ArrowRight } from "lucide-react";

export function PortalDashboardPage() {
  const { member, entitlements, isLoading } = useMember();

  if (isLoading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 text-blue-600 animate-spin" /></div>;
  }

  const quickActions = [
    { href: "/portal/membership", icon: Star, label: "My Membership" },
    { href: "/portal/subscription", icon: CreditCard, label: "Subscription" },
    { href: "/portal/saved", icon: Bookmark, label: "DocuShare" },
    { href: "/portal/customisation-requests", icon: FileText, label: "Requests" },
    { href: "/portal/discovery-calls", icon: Phone, label: "Book Call" },
    { href: "/portal/support", icon: HelpCircle, label: "Support" },
  ];

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8">
      {/* Welcome */}
      <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="relative z-10">
          <p className="text-blue-200 text-sm font-bold mb-1">Welcome back</p>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">
            {member?.firstName ?? "Member"}!
          </h1>
          <p className="text-blue-100 text-sm max-w-md leading-relaxed">
            You're on the <span className="font-extrabold text-white">{member?.externalLabel}</span> plan.
            {entitlements?.serviceDiscount ? (
              <> You have a <span className="font-extrabold text-white">{entitlements.serviceDiscount}% service discount</span> active.</>
            ) : null}
          </p>
          <Link
            to="/portal/membership"
            className="mt-5 inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-5 py-2.5 rounded-xl transition-all text-sm shadow-lg hover:-translate-y-0.5"
          >
            View My Membership <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3">
        <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickActions.map((a) => (
            <PortalActionButton key={a.href} href={a.href} icon={a.icon} label={a.label} />
          ))}
        </div>
      </div>

      {/* Status snapshot */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <PortalCard>
          <PortalCardBody className="text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Plan</p>
            <p className="text-xl font-extrabold text-slate-900">{member?.externalLabel ?? "—"}</p>
            <p className="text-xs text-emerald-600 font-bold mt-1">Active</p>
          </PortalCardBody>
        </PortalCard>
        <PortalCard>
          <PortalCardBody className="text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Customisations</p>
            <p className="text-xl font-extrabold text-slate-900">
              0 <span className="text-slate-300">/ {entitlements?.customisationAllowance ?? 0}</span>
            </p>
            <p className="text-xs text-slate-500 font-medium mt-1">this month</p>
          </PortalCardBody>
        </PortalCard>
        <PortalCard>
          <PortalCardBody className="text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Renewal</p>
            <p className="text-xl font-extrabold text-slate-900">{member?.renewalDate ?? "—"}</p>
            <p className="text-xs text-slate-500 font-medium mt-1">{member?.billingCycle} billing</p>
          </PortalCardBody>
        </PortalCard>
      </div>
    </div>
  );
}
