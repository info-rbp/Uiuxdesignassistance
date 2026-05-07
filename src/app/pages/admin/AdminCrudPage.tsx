import { Link, useLocation } from "react-router";
import {
  ArrowRight,
  Database,
  Eye,
  FileText,
  Filter,
  ListChecks,
  Pencil,
  Plus,
  Search,
  ShieldCheck,
  Settings,
} from "lucide-react";

import {
  adminContentEntities,
  type AdminContentEntity,
} from "../../data/adminContentModel";

const routeLabels: Record<string, { title: string; description: string }> = {
  "/admin/tasks": {
    title: "To Do Tasks",
    description: "Operational task tracking scaffold for admin follow-up work.",
  },
  "/admin/discovery-calls": {
    title: "Discovery Calls",
    description: "Discovery call enquiries and scheduling workflow scaffold.",
  },
  "/admin/other": {
    title: "Other Admin Items",
    description: "General admin holding area for uncategorised operational work.",
  },
  "/admin/members": {
    title: "Members",
    description: "Member management scaffold. Full member portal integration comes later.",
  },
  "/admin/sessions": {
    title: "Sessions",
    description: "Session management scaffold for future advisory and member sessions.",
  },
  "/admin/documents": {
    title: "Documents",
    description: "Document management scaffold for future uploads, templates, and member files.",
  },
  "/admin/the-fixer": {
    title: "The Fixer",
    description: "The Fixer request management scaffold.",
  },
};

function humanisePath(pathname: string) {
  const lastSegment = pathname.split("/").filter(Boolean).pop() ?? "admin";
  return lastSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function statusLabel(status: AdminContentEntity["status"]) {
  const labels: Record<AdminContentEntity["status"], string> = {
    "ready-for-admin-planning": "Ready for Admin Planning",
    "backend-later": "Backend Later",
    "legal-review-required": "Legal Review Required",
    "future-enhancement": "Future Enhancement",
  };

  return labels[status] ?? status;
}

function statusClass(status: AdminContentEntity["status"]) {
  const classes: Record<AdminContentEntity["status"], string> = {
    "ready-for-admin-planning": "bg-emerald-50 text-emerald-700 border-emerald-100",
    "backend-later": "bg-amber-50 text-amber-700 border-amber-100",
    "legal-review-required": "bg-rose-50 text-rose-700 border-rose-100",
    "future-enhancement": "bg-slate-100 text-slate-600 border-slate-200",
  };

  return classes[status] ?? "bg-slate-100 text-slate-600 border-slate-200";
}

function getEntityForPath(pathname: string): AdminContentEntity | null {
  const sorted = [...adminContentEntities].sort(
    (a, b) => b.adminPath.length - a.adminPath.length
  );

  return (
    sorted.find((entity) => {
      return pathname === entity.adminPath || pathname.startsWith(entity.adminPath + "/");
    }) ?? null
  );
}

function createFallbackEntity(pathname: string): AdminContentEntity {
  const routeLabel = routeLabels[pathname];

  return {
    id: pathname.replace(/^\/admin\/?/, "").replaceAll("/", "-") || "admin",
    label: routeLabel?.title ?? humanisePath(pathname),
    description:
      routeLabel?.description ??
      "Admin scaffold route. This area is available for future CRUD wiring and backend integration.",
    publicDataFile: "Not mapped yet",
    publicRoutes: [],
    adminPath: pathname,
    access: "admin-only",
    status: "future-enhancement",
    backendRequired: true,
    notes: "Route scaffold exists. Data model and backend integration can be added in a later phase.",
  };
}

function createRows(entity: AdminContentEntity) {
  const routes = entity.publicRoutes.length > 0 ? entity.publicRoutes : [entity.adminPath];

  return routes.map((route, index) => ({
    id: `${entity.id}-${index + 1}`,
    title: index === 0 ? `${entity.label} Overview` : `${entity.label} Item ${index + 1}`,
    route,
    source: entity.publicDataFile,
    status: statusLabel(entity.status),
    visibility: entity.access,
  }));
}

function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string | number;
  icon: React.ElementType;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
      <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-2xl font-extrabold text-slate-900">{value}</div>
      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
        {label}
      </div>
    </div>
  );
}

export function AdminCrudPage() {
  const location = useLocation();
  const entity = getEntityForPath(location.pathname) ?? createFallbackEntity(location.pathname);
  const rows = createRows(entity);

  return (
    <div className="px-4 sm:px-6 py-6 space-y-6">
      <section className="bg-slate-950 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-blue-700/20" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-200 bg-blue-500/10 border border-blue-400/20 rounded-full px-3 py-1 mb-4">
              <Database className="w-3.5 h-3.5" />
              Admin CRUD Scaffold
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              {entity.label}
            </h1>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              {entity.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold rounded-xl px-4 py-2.5 transition-all">
              <Plus className="w-4 h-4" />
              New Record
            </button>
            <button className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl px-4 py-2.5 transition-all">
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard label="Scaffold Records" value={rows.length} icon={ListChecks} />
        <StatCard label="Public Routes" value={entity.publicRoutes.length} icon={Eye} />
        <StatCard label="Backend Required" value={entity.backendRequired ? "Yes" : "No"} icon={Database} />
        <StatCard label="Access" value={entity.access.replaceAll("-", " ")} icon={ShieldCheck} />
      </section>

      <section className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-sm font-extrabold text-slate-900">Records</h2>
            <p className="text-xs text-slate-500 mt-1">
              Static scaffold only. Backend persistence, validation, edit forms, and permissions come later.
            </p>
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              className="w-full border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search scaffold records"
              readOnly
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-left text-xs uppercase tracking-widest text-slate-400">
                <th className="px-5 py-3 font-bold">Title</th>
                <th className="px-5 py-3 font-bold">Route</th>
                <th className="px-5 py-3 font-bold">Source</th>
                <th className="px-5 py-3 font-bold">Status</th>
                <th className="px-5 py-3 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/70">
                  <td className="px-5 py-4">
                    <div className="font-bold text-slate-900">{row.title}</div>
                    <div className="text-xs text-slate-400 mt-1">{row.visibility}</div>
                  </td>
                  <td className="px-5 py-4 text-slate-600">{row.route}</td>
                  <td className="px-5 py-4 text-slate-500">
                    <code className="bg-slate-100 rounded-lg px-2 py-1 text-xs">{row.source}</code>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex border rounded-full px-2.5 py-1 text-[10px] font-bold ${statusClass(entity.status)}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg text-slate-400 hover:text-blue-700 hover:bg-blue-50 transition-all" title="View scaffold">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg text-slate-400 hover:text-amber-700 hover:bg-amber-50 transition-all" title="Edit scaffold">
                        <Pencil className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
              <FileText className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-extrabold text-slate-900">Implementation Notes</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            {entity.notes ??
              "This admin area has been scaffolded so routing and layout can be tested before backend CRUD is implemented."}
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
              <Settings className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-extrabold text-slate-900">Next Backend Step</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Connect this scaffold to a real collection, validation schema, edit form, draft/publish workflow, and role-based access control.
          </p>
          <Link
            to="/admin/dashboard"
            className="inline-flex items-center gap-2 text-blue-700 text-sm font-bold hover:text-blue-800"
          >
            Back to Admin Dashboard <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
