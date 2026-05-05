import { useState } from "react";
import { Link } from "react-router";
import {
  Layers, Users, TrendingUp, FileText, HeadphonesIcon,
  GraduationCap, BarChart2, CreditCard, X, ArrowRight,
  CheckCircle, ChevronRight, Plus, Sparkles, ExternalLink,
  Lock,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

type AppStatus = "Active" | "Available" | "Coming Soon" | "Admin Managed";

interface AppDef {
  id: string;
  name: string;
  backendLabel: string;
  description: string;
  status: AppStatus;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  actionLabel: string;
  helpsWith: string[];
  capabilities: string[];
}

// ── Application data ─────────────────────────────────────────────────────────

const APPS: AppDef[] = [
  {
    id: "operations-finance",
    name: "Operations & Finance",
    backendLabel: "Powered by ERPNext",
    description: "Manage accounting, operations, projects, purchasing, sales and finance workflows.",
    status: "Admin Managed",
    icon: Layers,
    iconBg: "bg-blue-700",
    iconColor: "text-white",
    actionLabel: "Open",
    helpsWith: [
      "Track income, expenses and cash flow",
      "Manage purchase orders and suppliers",
      "Run projects and task workflows",
      "Generate financial reports and GST summaries",
    ],
    capabilities: [
      "Accounting & Ledger",
      "Accounts Payable / Receivable",
      "Project Management",
      "Purchase Orders",
      "Sales Orders",
      "Inventory",
    ],
  },
  {
    id: "people-hr",
    name: "People & HR",
    backendLabel: "Powered by HRMS",
    description: "Manage employees, leave, attendance, payroll and HR workflows.",
    status: "Available",
    icon: Users,
    iconBg: "bg-violet-600",
    iconColor: "text-white",
    actionLabel: "Request Access",
    helpsWith: [
      "Onboard new team members",
      "Manage leave requests and balances",
      "Run payroll and generate payslips",
      "Store employee contracts and documents",
    ],
    capabilities: [
      "Employee Records",
      "Leave Management",
      "Attendance Tracking",
      "Payroll",
      "Onboarding Workflows",
      "HR Policies",
    ],
  },
  {
    id: "sales-crm",
    name: "Sales & CRM",
    backendLabel: "Powered by CRM",
    description: "Manage leads, deals, customers, pipelines and relationship tracking.",
    status: "Available",
    icon: TrendingUp,
    iconBg: "bg-emerald-600",
    iconColor: "text-white",
    actionLabel: "Request Access",
    helpsWith: [
      "Track leads and sales opportunities",
      "Manage customer relationships",
      "Monitor your pipeline and close rates",
      "Automate follow-ups and tasks",
    ],
    capabilities: [
      "Lead Management",
      "Deal Pipelines",
      "Contact & Account Records",
      "Email Integration",
      "Sales Reporting",
      "Activity Tracking",
    ],
  },
  {
    id: "documents",
    name: "Documents",
    backendLabel: "Powered by Drive",
    description: "Store, share and manage business documents, templates and deliverables.",
    status: "Active",
    icon: FileText,
    iconBg: "bg-sky-600",
    iconColor: "text-white",
    actionLabel: "Open",
    helpsWith: [
      "Access RBP-delivered documents and reports",
      "Store and organise your business files",
      "Download templates and advisory deliverables",
      "Share files securely with your team or adviser",
    ],
    capabilities: [
      "Document Storage",
      "Folder Organisation",
      "File Sharing",
      "Version History",
      "Template Library",
      "Secure Access Controls",
    ],
  },
  {
    id: "support-desk",
    name: "Support Desk",
    backendLabel: "Powered by Helpdesk",
    description: "Track support requests, service tickets and help workflows.",
    status: "Active",
    icon: HeadphonesIcon,
    iconBg: "bg-slate-700",
    iconColor: "text-white",
    actionLabel: "Open",
    helpsWith: [
      "Submit and track support tickets",
      "View status updates from the RBP team",
      "Access your ticket history",
      "Receive notifications on ticket progress",
    ],
    capabilities: [
      "Ticket Submission",
      "Status Tracking",
      "Priority Setting",
      "Ticket History",
      "Team Notifications",
      "SLA Tracking",
    ],
  },
  {
    id: "learning",
    name: "Learning",
    backendLabel: "Powered by LMS",
    description: "Access onboarding, training, courses and learning content.",
    status: "Coming Soon",
    icon: GraduationCap,
    iconBg: "bg-amber-500",
    iconColor: "text-white",
    actionLabel: "Learn More",
    helpsWith: [
      "Complete your RBP onboarding modules",
      "Access business training courses",
      "Track learning progress",
      "Earn certificates for completed programmes",
    ],
    capabilities: [
      "Onboarding Modules",
      "Business Courses",
      "Progress Tracking",
      "Certificates",
      "Video & Article Content",
      "Quizzes & Assessments",
    ],
  },
  {
    id: "analytics",
    name: "Analytics",
    backendLabel: "Powered by Insights",
    description: "View dashboards, reports and business performance insights.",
    status: "Available",
    icon: BarChart2,
    iconBg: "bg-indigo-600",
    iconColor: "text-white",
    actionLabel: "Request Access",
    helpsWith: [
      "Monitor KPIs and business performance",
      "Build custom dashboards",
      "Identify trends and opportunities",
      "Share reports with stakeholders",
    ],
    capabilities: [
      "Custom Dashboards",
      "Pre-built Reports",
      "KPI Tracking",
      "Data Visualisation",
      "Export to PDF/CSV",
      "Shared Views",
    ],
  },
  {
    id: "payments-billing",
    name: "Payments & Billing",
    backendLabel: "Powered by Payments",
    description: "Manage payments, billing, invoices and payment-related workflows.",
    status: "Coming Soon",
    icon: CreditCard,
    iconBg: "bg-rose-600",
    iconColor: "text-white",
    actionLabel: "Learn More",
    helpsWith: [
      "Send and track invoices to clients",
      "Accept online payments",
      "Manage subscription billing",
      "Reconcile payments automatically",
    ],
    capabilities: [
      "Invoice Generation",
      "Online Payments",
      "Subscription Management",
      "Payment Reconciliation",
      "GST Reporting",
      "Multiple Payment Methods",
    ],
  },
];

// ── Status configuration ──────────────────────────────────────────────────────

const STATUS_CONFIG: Record<AppStatus, { badge: string; dot: string; action: string; actionDisabled?: boolean }> = {
  "Active":        { badge: "bg-emerald-50 text-emerald-700", dot: "bg-emerald-500", action: "bg-blue-700 hover:bg-blue-800 text-white" },
  "Available":     { badge: "bg-blue-50 text-blue-700",       dot: "bg-blue-500",    action: "bg-slate-900 hover:bg-slate-800 text-white" },
  "Coming Soon":   { badge: "bg-amber-50 text-amber-700",     dot: "bg-amber-400",   action: "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50", actionDisabled: false },
  "Admin Managed": { badge: "bg-slate-100 text-slate-700",    dot: "bg-slate-400",   action: "bg-blue-700 hover:bg-blue-800 text-white" },
};

type FilterTab = AppStatus | "All";
const FILTER_TABS: FilterTab[] = ["All", "Active", "Available", "Coming Soon", "Admin Managed"];

const SUMMARY_CARDS = [
  { label: "Active",             key: "Active" as AppStatus,        color: "text-emerald-700 bg-emerald-50 border-emerald-100" },
  { label: "Available to Activate", key: "Available" as AppStatus,  color: "text-blue-700 bg-blue-50 border-blue-100" },
  { label: "Coming Soon",        key: "Coming Soon" as AppStatus,   color: "text-amber-700 bg-amber-50 border-amber-100" },
  { label: "Admin Managed",      key: "Admin Managed" as AppStatus, color: "text-slate-700 bg-slate-50 border-slate-200" },
];

// ── Detail panel ─────────────────────────────────────────────────────────────

function DetailPanel({ app, onClose }: { app: AppDef; onClose: () => void }) {
  const cfg = STATUS_CONFIG[app.status];
  const Icon = app.icon;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-slate-900/30 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Panel */}
      <aside className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white border-l border-slate-100 shadow-2xl flex flex-col overflow-hidden">

        {/* Panel header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 ${app.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <Icon className={`w-4 h-4 ${app.iconColor}`} />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900">{app.name}</div>
              <div className="text-[10px] text-slate-400">{app.backendLabel}</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Panel body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className={`flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-lg ${cfg.badge}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
              {app.status}
            </span>
            {app.status === "Admin Managed" && (
              <span className="flex items-center gap-1 text-[10px] text-slate-400">
                <Lock className="w-3 h-3" /> Managed by RBP
              </span>
            )}
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">About</h4>
            <p className="text-sm text-slate-700 leading-relaxed">{app.description}</p>
          </div>

          {/* What this helps with */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">What this helps with</h4>
            <ul className="space-y-2">
              {app.helpsWith.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Included capabilities</h4>
            <div className="flex flex-wrap gap-2">
              {app.capabilities.map((cap) => (
                <span key={cap} className="text-[11px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg">
                  {cap}
                </span>
              ))}
            </div>
          </div>

          {/* Coming Soon notice */}
          {app.status === "Coming Soon" && (
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <div className="text-xs font-bold text-amber-800 mb-0.5">Not yet available</div>
              <p className="text-[11px] text-amber-700 leading-relaxed">
                This application is currently in development and will be available to members soon. Contact support to register your interest.
              </p>
            </div>
          )}
        </div>

        {/* Panel footer */}
        <div className="px-5 py-4 border-t border-slate-100 flex flex-col gap-2 flex-shrink-0">
          {app.status === "Active" || app.status === "Admin Managed" ? (
            <button className={`w-full inline-flex items-center justify-center gap-2 font-bold text-sm py-3 rounded-xl transition-all ${cfg.action}`}>
              Open {app.name} <ExternalLink className="w-4 h-4" />
            </button>
          ) : app.status === "Available" ? (
            <Link
              to="/portal/support"
              className={`w-full inline-flex items-center justify-center gap-2 font-bold text-sm py-3 rounded-xl transition-all ${cfg.action}`}
            >
              Request Access <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/portal/support"
              className={`w-full inline-flex items-center justify-center gap-2 font-bold text-sm py-3 rounded-xl transition-all ${cfg.action}`}
            >
              Register Interest <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          <button
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 font-bold text-xs py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all"
          >
            Back to Applications
          </button>
        </div>
      </aside>
    </>
  );
}

// ── App card ──────────────────────────────────────────────────────────────────

function AppCard({
  app,
  onViewDetails,
  featured = false,
}: {
  app: AppDef;
  onViewDetails: (app: AppDef) => void;
  featured?: boolean;
}) {
  const cfg = STATUS_CONFIG[app.status];
  const Icon = app.icon;

  return (
    <div className={`bg-white rounded-2xl border shadow-sm p-5 flex flex-col gap-3 hover:shadow-md transition-shadow ${
      featured ? "border-blue-200 ring-2 ring-blue-100" : "border-slate-100"
    }`}>

      {featured && (
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-1 rounded-lg w-fit">
          <Sparkles className="w-3 h-3" /> Recommended for your business
        </div>
      )}

      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <div className={`w-10 h-10 ${app.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-5 h-5 ${app.iconColor}`} />
        </div>
        <span className={`flex items-center gap-1.5 text-[10px] font-bold px-2 py-1 rounded-lg flex-shrink-0 ${cfg.badge}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
          {app.status}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="text-sm font-extrabold text-slate-900 mb-0.5">{app.name}</div>
        <div className="text-[10px] font-medium text-slate-400 mb-2">{app.backendLabel}</div>
        <p className="text-xs text-slate-500 leading-relaxed">{app.description}</p>
      </div>

      {featured && (
        <p className="text-xs font-semibold text-blue-700">
          Start here to manage your core business workflows.
        </p>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-50 mt-auto">
        <button
          onClick={() => onViewDetails(app)}
          className="text-xs font-bold text-blue-700 hover:underline flex items-center gap-1"
        >
          View details <ChevronRight className="w-3.5 h-3.5" />
        </button>
        <button
          className={`text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all ${cfg.action}`}
          onClick={() => {
            if (app.status === "Coming Soon") onViewDetails(app);
          }}
        >
          {app.actionLabel}
        </button>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function PortalApps() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");
  const [selectedApp, setSelectedApp] = useState<AppDef | null>(null);

  const filtered = activeFilter === "All"
    ? APPS
    : APPS.filter((a) => a.status === activeFilter);

  const featuredApp = APPS.find((a) => a.id === "operations-finance")!;

  return (
    <div className="px-4 sm:px-6 py-6 space-y-6">

      {/* ── Page header ── */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 mb-1">Applications</h2>
          <p className="text-sm text-slate-500">
            Access the business tools and platform capabilities available through RBP.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            to="/portal/support"
            className="inline-flex items-center gap-1.5 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
          >
            Contact Support
          </Link>
          <Link
            to="/portal/support"
            className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
          >
            <Plus className="w-3.5 h-3.5" /> Request an Application
          </Link>
        </div>
      </div>

      {/* ── Summary cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {SUMMARY_CARDS.map((s) => {
          const count = APPS.filter((a) => a.status === s.key).length;
          return (
            <button
              key={s.label}
              onClick={() => setActiveFilter(s.key)}
              className={`rounded-2xl border p-4 text-left transition-all hover:opacity-80 ${s.color} ${
                activeFilter === s.key ? "ring-2 ring-offset-1 ring-current" : ""
              }`}
            >
              <div className="text-2xl font-extrabold mb-0.5">{count}</div>
              <div className="text-xs font-semibold leading-tight">{s.label}</div>
            </button>
          );
        })}
      </div>

      {/* ── Featured recommendation ── */}
      {(activeFilter === "All" || activeFilter === "Admin Managed") && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-blue-700" />
            <h3 className="text-sm font-extrabold text-slate-900">Recommended</h3>
          </div>
          <AppCard
            app={featuredApp}
            onViewDetails={setSelectedApp}
            featured
          />
        </div>
      )}

      {/* ── Filter tabs ── */}
      <div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                activeFilter === tab
                  ? "bg-blue-700 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {tab}
              {tab !== "All" && (
                <span className={`ml-1.5 text-[10px] ${activeFilter === tab ? "text-blue-200" : "text-slate-400"}`}>
                  {APPS.filter((a) => a.status === tab).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Application cards grid ── */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered
            .filter((a) => !(activeFilter === "All" && a.id === "operations-finance"))
            .map((app) => (
              <AppCard
                key={app.id}
                app={app}
                onViewDetails={setSelectedApp}
              />
            ))}
        </div>
      ) : (
        /* ── Empty state ── */
        <div className="bg-white rounded-2xl border border-dashed border-slate-200 p-12 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
            <Layers className="w-7 h-7 text-slate-300" />
          </div>
          <div className="text-sm font-bold text-slate-700 mb-2">No active applications yet</div>
          <p className="text-xs text-slate-400 leading-relaxed mb-5 max-w-xs">
            Applications you activate through RBP will appear here.
          </p>
          <Link
            to="/portal/support"
            className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
          >
            <Plus className="w-3.5 h-3.5" /> Request an Application
          </Link>
        </div>
      )}

      {/* ── Detail panel ── */}
      {selectedApp && (
        <DetailPanel app={selectedApp} onClose={() => setSelectedApp(null)} />
      )}
    </div>
  );
}
