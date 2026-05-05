import { Archive, Eye, ExternalLink, FileText, LayoutGrid, Pencil, Plus, Tag } from "lucide-react";

export type AdminSectionStatus =
  | "Ready"
  | "Placeholder"
  | "Content Required"
  | "Draft"
  | "Published"
  | "Hidden";

export type AdminSectionStat = {
  label: string;
  value: string | number;
  helper?: string;
};

export type AdminSectionLink = {
  label: string;
  href?: string;
  note?: string;
  status?: "Live" | "Planned" | "Not applicable";
};

export type AdminSectionRow = {
  name: string;
  category: string;
  status: AdminSectionStatus;
  visibility: "Public" | "Members Only" | "Admin Only" | "Hidden";
  lastUpdated: string;
};

export type AdminSectionPageProps = {
  title: string;
  description: string;
  routeLabel: string;
  status?: AdminSectionStatus;
  publicLink?: AdminSectionLink;
  portalLink?: AdminSectionLink;
  stats?: AdminSectionStat[];
  relatedSections?: string[];
  tableRows?: AdminSectionRow[];
  notes?: string;
};

const defaultStats: AdminSectionStat[] = [
  { label: "Published Items", value: 12, helper: "Visible and available" },
  { label: "Draft Items", value: 4, helper: "In review" },
  { label: "Pending Requests", value: 3, helper: "Needs action" },
  { label: "Content Required", value: 6, helper: "Missing details" },
];

const defaultRows: AdminSectionRow[] = [
  { name: "Section Overview", category: "General", status: "Placeholder", visibility: "Public", lastUpdated: "May 5, 2026" },
  { name: "Primary Content", category: "Content", status: "Draft", visibility: "Members Only", lastUpdated: "May 2, 2026" },
  { name: "Internal Notes", category: "Operations", status: "Ready", visibility: "Admin Only", lastUpdated: "Apr 30, 2026" },
];

const defaultNote = "This section is scaffolded for future content and data management. Final route wiring, live data, permissions, publishing workflow, and Firebase integration will be completed later in GitHub/Firebase Studio.";

const statusClasses: Record<AdminSectionStatus, string> = {
  Ready: "bg-emerald-50 text-emerald-700",
  Placeholder: "bg-slate-100 text-slate-600",
  "Content Required": "bg-amber-50 text-amber-700",
  Draft: "bg-violet-50 text-violet-700",
  Published: "bg-blue-50 text-blue-700",
  Hidden: "bg-slate-200 text-slate-600",
};

function Badge({ label, className }: { label: string; className: string }) {
  return <span className={`rounded-md px-2 py-1 text-[10px] font-semibold ${className}`}>{label}</span>;
}

function RelationCard({ title, link }: { title: string; link?: AdminSectionLink }) {
  const status = link?.status ?? (link?.href ? "Live" : "Not applicable");
  const statusClass = status === "Live" ? "bg-emerald-50 text-emerald-700" : status === "Planned" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-600";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
        <Badge label={status} className={statusClass} />
      </div>
      <p className="text-xs text-slate-500">{link?.note ?? "Route relationship and publishing mapping." }</p>
      {link?.href ? (
        <a href={link.href} className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-blue-700 hover:underline">
          {link.label} <ExternalLink className="h-3.5 w-3.5" />
        </a>
      ) : (
        <div className="mt-3 text-xs text-slate-500">No active route link.</div>
      )}
    </div>
  );
}

export function AdminSectionPage({
  title,
  description,
  routeLabel,
  status = "Placeholder",
  publicLink,
  portalLink,
  stats = defaultStats,
  relatedSections = [],
  tableRows = defaultRows,
  notes = defaultNote,
}: AdminSectionPageProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
            <p className="mt-2 text-sm text-slate-600">{description}</p>
            <div className="mt-3 flex items-center gap-2">
              <Badge label={routeLabel} className="bg-slate-100 text-slate-700" />
              <Badge label={status} className={statusClasses[status]} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-1 rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white">
              <Plus className="h-4 w-4" /> Add Item
            </button>
            {publicLink?.href && (
              <a href={publicLink.href} className="inline-flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700">
                <Eye className="h-4 w-4" /> View Public Page
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <RelationCard title="Public Website" link={publicLink} />
        <RelationCard title="Member Portal" link={portalLink} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="mb-2 inline-flex rounded-lg bg-blue-50 p-2 text-blue-700"><LayoutGrid className="h-4 w-4" /></div>
            <div className="text-xl font-bold text-slate-900">{stat.value}</div>
            <div className="text-sm font-medium text-slate-700">{stat.label}</div>
            {stat.helper && <div className="text-xs text-slate-500">{stat.helper}</div>}
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 p-4 text-sm font-semibold text-slate-800">Management Table</div>
        {tableRows.length === 0 ? (
          <div className="m-4 rounded-xl border border-dashed border-slate-300 p-5 text-sm text-slate-500">No items yet</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="bg-slate-50 text-left text-xs font-semibold uppercase text-slate-500">
                <tr><th className="p-3">Name</th><th>Category</th><th>Status</th><th>Visibility</th><th>Last Updated</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={`${row.name}-${row.lastUpdated}`} className="border-t border-slate-100">
                    <td className="p-3 text-slate-800">{row.name}</td>
                    <td className="text-slate-600">{row.category}</td>
                    <td><Badge label={row.status} className={statusClasses[row.status]} /></td>
                    <td className="text-slate-600">{row.visibility}</td>
                    <td className="text-slate-600">{row.lastUpdated}</td>
                    <td><div className="flex gap-2 text-slate-500"><Eye className="h-4 w-4" /><Pencil className="h-4 w-4" /><Archive className="h-4 w-4" /></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h3 className="mb-3 text-sm font-semibold text-slate-800">Content Status</h3>
          <div className="flex flex-wrap gap-2">{(Object.keys(statusClasses) as AdminSectionStatus[]).map((key) => <Badge key={key} label={key} className={statusClasses[key]} />)}</div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h3 className="mb-3 text-sm font-semibold text-slate-800">Related Sections</h3>
          <div className="flex flex-wrap gap-2">
            {relatedSections.length ? relatedSections.map((section) => <span key={section} className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700"><Tag className="h-3 w-3" />{section}</span>) : <span className="text-xs text-slate-500">No linked sections yet.</span>}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
        <div className="mb-2 inline-flex items-center gap-2 font-semibold text-slate-800"><FileText className="h-4 w-4" /> Future setup note</div>
        {notes}
      </div>
    </div>
  );
}
