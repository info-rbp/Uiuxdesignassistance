import { Link } from "react-router";
import { PortalAdminReference } from "./PortalAdminReference";
import { PortalStatusCard } from "../../components/domain";
import { membershipFlowStorageKey } from "../../features/membership/MembershipPurchaseOnboardingFlow";
import {
  Zap, CalendarCheck, FileText, CheckCircle, Tag,
  Star, ArrowRight, ChevronRight, TrendingUp, Clock,
  Users, MessageSquare, AlertCircle, HeadphonesIcon,
  AppWindowIcon, Plus,
} from "lucide-react";

interface StoredMembershipDashboardState {
  signupReference?: string;
  onboardingReference?: string;
  membershipStatus?: string;
  onboardingStatus?: string;
  businessName?: string;
  selectedPlan?: string;
}

function readMembershipDashboardState(): StoredMembershipDashboardState | null {
  const rawValue = window.sessionStorage.getItem(membershipFlowStorageKey);

  if (!rawValue) {
    return null;
  }

  try {
    return JSON.parse(rawValue) as StoredMembershipDashboardState;
  } catch {
    return null;
  }
}

const stats = [
  {
    label: "Active Services",
    value: "3",
    sub: "1 in progress",
    icon: Zap,
    color: "bg-blue-50 text-blue-700",
    border: "border-blue-100",
    href: "/portal/services",
  },
  {
    label: "Pending Requests",
    value: "1",
    sub: "Awaiting RBP review",
    icon: AlertCircle,
    color: "bg-amber-50 text-amber-700",
    border: "border-amber-100",
    href: "/portal/services",
  },
  {
    label: "Documents",
    value: "18",
    sub: "3 awaiting review",
    icon: FileText,
    color: "bg-emerald-50 text-emerald-700",
    border: "border-emerald-100",
    href: "/portal/documents",
  },
  {
    label: "Action Items",
    value: "7",
    sub: "2 due this week",
    icon: CheckCircle,
    color: "bg-violet-50 text-violet-700",
    border: "border-violet-100",
    href: "/portal/services",
  },
];

const recentActivity = [
  {
    type: "service",
    title: "Decision Desk request submitted",
    date: "3 May 2026",
    status: "In Progress",
    statusColor: "bg-amber-50 text-amber-700",
    href: "/portal/services/decision-desk",
  },
  {
    type: "document",
    title: "Business Health Snapshot ready",
    date: "1 May 2026",
    status: "Ready",
    statusColor: "bg-emerald-50 text-emerald-700",
    href: "/portal/documents",
  },
  {
    type: "offer",
    title: "Xero partner offer activated",
    date: "28 Apr 2026",
    status: "Active",
    statusColor: "bg-blue-50 text-blue-700",
    href: "/portal/offers",
  },
  {
    type: "document",
    title: "Cash Flow Forecast Template downloaded",
    date: "25 Apr 2026",
    status: "Downloaded",
    statusColor: "bg-slate-100 text-slate-600",
    href: "/portal/documents",
  },
];

const quickActions = [
  { label: "Request a Service",    icon: Plus,             href: "/portal/services/request", color: "bg-blue-700 text-white hover:bg-blue-800" },
  { label: "Book a Session",       icon: CalendarCheck,    href: "/portal/sessions",          color: "bg-slate-900 text-white hover:bg-slate-800" },
  { label: "View Documents",       icon: FileText,         href: "/portal/documents",         color: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50" },
  { label: "Browse Partner Offers",icon: Tag,              href: "/portal/offers",            color: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50" },
  { label: "Open Applications",    icon: AppWindowIcon,    href: "/portal/apps",              color: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50" },
  { label: "Contact Support",      icon: HeadphonesIcon,   href: "/portal/support",           color: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50" },
];

const upcomingSessions = [
  {
    title: "Monthly Strategy Session",
    date: "Tue 12 May 2026",
    time: "10:00 AM",
    consultant: "James R.",
    type: "Advisory",
  },
  {
    title: "Financial Planning Review",
    date: "Wed 20 May 2026",
    time: "2:00 PM",
    consultant: "Amanda K.",
    type: "Finance",
  },
];

const healthMetrics = [
  { label: "Revenue Growth",              value: 72, color: "bg-blue-600" },
  { label: "Operational Efficiency",      value: 58, color: "bg-violet-600" },
  { label: "Strategic Milestone Progress",value: 85, color: "bg-emerald-600" },
];

// Set to false to simulate "no consultant yet assigned"
const CONSULTANT_ASSIGNED = true;

export function PortalDashboard() {
  const membershipState = readMembershipDashboardState();

  return (
    <div className="px-4 sm:px-6 py-6 space-y-6">
      <PortalAdminReference
        portalRoute="/portal/dashboard"
        controlledBy={["Admin Dashboard", "Admin Membership"]}
      />

      <PortalStatusCard
        title={membershipState?.selectedPlan ?? "Remote Business Partner Membership"}
        description={
          membershipState
            ? `${membershipState.businessName ?? "Your business"} has a mock ${membershipState.membershipStatus ?? "active"} membership. Onboarding is ${membershipState.onboardingStatus ?? "in progress"}.`
            : "Preview membership card for the Phase 1 portal handoff. Complete the mock sign-up flow to populate session state."
        }
        status={membershipState?.onboardingStatus === "complete" ? "active" : "in-progress"}
        href="/membership/confirmation"
      />

      {/* ── Welcome banner ── */}
      <div className="bg-blue-700 rounded-2xl px-6 py-5 relative overflow-hidden">
        <div className="absolute -top-8 -right-8 w-44 h-44 bg-blue-600 rounded-full opacity-40 pointer-events-none" />
        <div className="absolute -bottom-10 right-20 w-32 h-32 bg-blue-800 rounded-full opacity-40 pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Star className="w-4 h-4 text-amber-300" />
              <span className="text-xs font-bold text-blue-100 uppercase tracking-widest">
                Growth Partner Programme
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-white mb-1.5">Welcome back.</h2>
            <p className="text-sm text-blue-100 max-w-lg">
              You have{" "}
              <span className="font-bold text-white">3 active services</span>,{" "}
              <span className="font-bold text-white">1 pending request</span>, and an upcoming session on{" "}
              <span className="font-bold text-white">12 May</span>.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              to="/portal/services"
              className="inline-flex items-center gap-1.5 bg-white text-blue-700 font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-all"
            >
              Open My Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/portal/sessions"
              className="hidden sm:inline-flex items-center gap-1.5 bg-blue-600/50 hover:bg-blue-600/70 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </div>

      {/* ── Metric cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Link
            key={s.label}
            to={s.href}
            className={`bg-white rounded-2xl p-4 border ${s.border} shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-3 ${s.color}`}>
              <s.icon className="w-4 h-4" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900 mb-0.5">{s.value}</div>
            <div className="text-xs font-semibold text-slate-700 mb-0.5">{s.label}</div>
            <div className="text-[10px] text-slate-400">{s.sub}</div>
          </Link>
        ))}
      </div>

      {/* ── Recent Activity + Quick Actions ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-slate-900">Recent Activity</h3>
            <Link to="/portal/services" className="text-xs font-semibold text-blue-700 hover:underline flex items-center gap-1">
              View all <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="divide-y divide-slate-50">
            {recentActivity.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="px-5 py-3.5 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.type === "service"  && <Zap          className="w-4 h-4 text-slate-500" />}
                    {item.type === "document" && <FileText      className="w-4 h-4 text-slate-500" />}
                    {item.type === "offer"    && <Tag           className="w-4 h-4 text-slate-500" />}
                    {item.type === "session"  && <CalendarCheck className="w-4 h-4 text-slate-500" />}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-800 truncate">{item.title}</div>
                    <div className="text-[10px] text-slate-400">{item.date}</div>
                  </div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-lg flex-shrink-0 ${item.statusColor}`}>
                  {item.status}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h3 className="text-sm font-extrabold text-slate-900">Quick Actions</h3>
          </div>
          <div className="p-4 space-y-2">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                to={action.href}
                className={`flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${action.color}`}
              >
                <div className="flex items-center gap-2">
                  <action.icon className="w-3.5 h-3.5" />
                  {action.label}
                </div>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Upcoming Sessions + Consultant ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Upcoming Sessions */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-slate-900">Upcoming Sessions</h3>
            <Link
              to="/portal/sessions"
              className="text-xs font-semibold text-blue-700 hover:underline flex items-center gap-1"
            >
              Book new <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {upcomingSessions.length > 0 ? (
            <div className="divide-y divide-slate-50">
              {upcomingSessions.map((s) => (
                <div key={s.title} className="px-5 py-4 flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CalendarCheck className="w-5 h-5 text-blue-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-slate-900 mb-0.5">{s.title}</div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="flex items-center gap-1 text-[10px] text-slate-500">
                        <Clock className="w-3 h-3" /> {s.date} · {s.time}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-slate-500">
                        <Users className="w-3 h-3" /> {s.consultant}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-1 rounded-lg flex-shrink-0">
                    {s.type}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="px-5 py-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-3">
                <CalendarCheck className="w-6 h-6 text-slate-300" />
              </div>
              <div className="text-sm font-bold text-slate-700 mb-1">No sessions scheduled</div>
              <p className="text-xs text-slate-400 mb-4 max-w-xs">
                Book your first advisory session with the RBP team to get started.
              </p>
              <Link
                to="/portal/sessions"
                className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
              >
                Book a Session <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>

        {/* Your Consultant */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h3 className="text-sm font-extrabold text-slate-900">Your Consultant</h3>
          </div>

          {CONSULTANT_ASSIGNED ? (
            <div className="p-5 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-700 rounded-2xl flex items-center justify-center mb-3">
                <span className="text-lg font-black text-white">JR</span>
              </div>
              <div className="text-sm font-extrabold text-slate-900 mb-0.5">James Reynolds</div>
              <div className="text-xs text-blue-700 font-semibold mb-2">Senior Business Adviser</div>
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                ))}
                <span className="text-[10px] text-slate-400 ml-1">5.0</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Specialising in growth strategy, financial planning, and operational efficiency for Australian SMEs.
              </p>
              <Link
                to="/portal/sessions"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs py-2.5 rounded-xl transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" /> Send a Message
              </Link>
            </div>
          ) : (
            /* Empty / unassigned state */
            <div className="p-5 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-3">
                <Users className="w-7 h-7 text-slate-300" />
              </div>
              <div className="text-sm font-bold text-slate-700 mb-1">No consultant assigned yet</div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Your consultant will appear here once assigned. This typically happens within 1 business day of joining.
              </p>
              <Link
                to="/portal/support"
                className="w-full inline-flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs py-2.5 rounded-xl transition-all"
              >
                Contact Support
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* ── Business Health Snapshot ── */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-5 py-5">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-extrabold text-slate-900">Business Health Snapshot</h3>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 border border-slate-200 px-2 py-1 rounded-md">
              Demo data · Not live
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">
              <TrendingUp className="w-3 h-3" /> On Track
            </span>
          </div>
        </div>
        <p className="text-[11px] text-slate-400 mb-4">
          Illustrative snapshot — your adviser will share real metrics with you after your next session.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {healthMetrics.map((m) => (
            <div key={m.label}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-600">{m.label}</span>
                <span className="text-xs font-extrabold text-slate-900">{m.value}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${m.color}`}
                  style={{ width: `${m.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
          <p className="text-[11px] text-slate-400">Updated after each advisory session</p>
          <Link
            to="/portal/services/business-health-snapshot"
            className="text-xs font-semibold text-blue-700 hover:underline flex items-center gap-1"
          >
            View full snapshot <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
}
