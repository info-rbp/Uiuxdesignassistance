import { useState } from "react";
import {
  Users, Zap, CalendarCheck, FileText, Plus, Pencil, Trash2,
  X, ChevronRight, TrendingUp, AlertCircle, CheckCircle,
  Clock, ArrowRight, Search,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Member {
  id: number;
  name: string;
  email: string;
  plan: string;
  status: "Active" | "Pending" | "Inactive";
  joined: string;
  consultant: string;
}

interface Service {
  id: number;
  name: string;
  category: string;
  status: "Active" | "In Progress" | "Completed" | "Pending";
  member: string;
  created: string;
  value: string;
}

// ── Seed data ─────────────────────────────────────────────────────────────────

const INITIAL_MEMBERS: Member[] = [
  { id: 1, name: "Sarah Mitchell",  email: "sarah@blossomco.com.au",    plan: "Growth Partner",  status: "Active",   joined: "12 Jan 2026", consultant: "James Reynolds" },
  { id: 2, name: "Tom Nguyen",      email: "tom@ngsolutions.com.au",    plan: "Advisory Plus",   status: "Active",   joined: "3 Feb 2026",  consultant: "Amanda Kim" },
  { id: 3, name: "Priya Sharma",    email: "priya@sharpventures.com.au",plan: "Essential",       status: "Active",   joined: "18 Feb 2026", consultant: "James Reynolds" },
  { id: 4, name: "David Okafor",    email: "david@okaconsult.com.au",   plan: "Growth Partner",  status: "Pending",  joined: "29 Apr 2026", consultant: "Unassigned" },
  { id: 5, name: "Lucy Chen",       email: "lucy@brightpath.com.au",    plan: "Advisory Plus",   status: "Active",   joined: "2 May 2026",  consultant: "Amanda Kim" },
  { id: 6, name: "Marcus Hill",     email: "marcus@hillop.com.au",      plan: "Essential",       status: "Inactive", joined: "5 Nov 2025",  consultant: "James Reynolds" },
];

const INITIAL_SERVICES: Service[] = [
  { id: 1, name: "Decision Desk — Q2 Strategy",   category: "Advisory",    status: "In Progress", member: "Sarah Mitchell", created: "1 May 2026",  value: "$450" },
  { id: 2, name: "The Fixer — Cash Flow Crisis",   category: "The Fixer",   status: "Active",      member: "Tom Nguyen",     created: "28 Apr 2026", value: "$1,200" },
  { id: 3, name: "Business Health Snapshot",       category: "Advisory",    status: "Completed",   member: "Priya Sharma",   created: "20 Apr 2026", value: "$350" },
  { id: 4, name: "HR Services — Onboarding Pack",  category: "Managed",     status: "Active",      member: "Lucy Chen",      created: "3 May 2026",  value: "$800" },
  { id: 5, name: "Finance Referral — SMSF Advice", category: "Operations",  status: "Pending",     member: "David Okafor",   created: "30 Apr 2026", value: "$0" },
];

const PLANS   = ["Essential", "Advisory Plus", "Growth Partner"];
const STATUSES_MEMBER: Member["status"][]   = ["Active", "Pending", "Inactive"];
const STATUSES_SERVICE: Service["status"][] = ["Active", "In Progress", "Completed", "Pending"];
const CATEGORIES = ["Advisory", "The Fixer", "Managed", "Operations", "On-Demand"];
const CONSULTANTS = ["James Reynolds", "Amanda Kim", "Unassigned"];

// ── Stat card ─────────────────────────────────────────────────────────────────

function StatCard({
  label, value, sub, icon: Icon, color, border,
}: {
  label: string; value: string | number; sub: string;
  icon: React.ElementType; color: string; border: string;
}) {
  return (
    <div className={`bg-white rounded-2xl p-4 border ${border} shadow-sm`}>
      <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-3 ${color}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="text-2xl font-extrabold text-slate-900 mb-0.5">{value}</div>
      <div className="text-xs font-semibold text-slate-700 mb-0.5">{label}</div>
      <div className="text-[10px] text-slate-400">{sub}</div>
    </div>
  );
}

// ── Modal ─────────────────────────────────────────────────────────────────────

function Modal({ title, onClose, children }: {
  title: string; onClose: () => void; children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-slate-900">{title}</h3>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="px-5 py-5">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-600 mb-1.5">{label}</label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full border border-slate-200 bg-white text-slate-900 text-sm px-3 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";
const selectCls = inputCls;

// ── Member modal ──────────────────────────────────────────────────────────────

function MemberModal({
  initial,
  onSave,
  onClose,
}: {
  initial?: Partial<Member>;
  onSave: (m: Omit<Member, "id">) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name:       initial?.name       ?? "",
    email:      initial?.email      ?? "",
    plan:       initial?.plan       ?? PLANS[0],
    status:     initial?.status     ?? "Active" as Member["status"],
    joined:     initial?.joined     ?? new Date().toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }),
    consultant: initial?.consultant ?? "Unassigned",
  });

  function set<K extends keyof typeof form>(k: K, v: typeof form[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  return (
    <Modal title={initial?.id ? "Edit Member" : "Add New Member"} onClose={onClose}>
      <div className="space-y-4">
        <Field label="Full name">
          <input className={inputCls} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="e.g. Jane Smith" />
        </Field>
        <Field label="Email address">
          <input className={inputCls} type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="jane@example.com.au" />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Membership plan">
            <select className={selectCls} value={form.plan} onChange={(e) => set("plan", e.target.value)}>
              {PLANS.map((p) => <option key={p}>{p}</option>)}
            </select>
          </Field>
          <Field label="Status">
            <select className={selectCls} value={form.status} onChange={(e) => set("status", e.target.value as Member["status"])}>
              {STATUSES_MEMBER.map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>
        </div>
        <Field label="Assigned consultant">
          <select className={selectCls} value={form.consultant} onChange={(e) => set("consultant", e.target.value)}>
            {CONSULTANTS.map((c) => <option key={c}>{c}</option>)}
          </select>
        </Field>
        <div className="flex items-center gap-2 pt-2">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
            Cancel
          </button>
          <button
            onClick={() => { onSave(form); onClose(); }}
            disabled={!form.name || !form.email}
            className="flex-1 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 disabled:opacity-40 text-white text-sm font-bold transition-all"
          >
            {initial?.id ? "Save Changes" : "Add Member"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

// ── Service modal ─────────────────────────────────────────────────────────────

function ServiceModal({
  initial,
  memberNames,
  onSave,
  onClose,
}: {
  initial?: Partial<Service>;
  memberNames: string[];
  onSave: (s: Omit<Service, "id">) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name:     initial?.name     ?? "",
    category: initial?.category ?? CATEGORIES[0],
    status:   initial?.status   ?? "Active" as Service["status"],
    member:   initial?.member   ?? (memberNames[0] ?? ""),
    created:  initial?.created  ?? new Date().toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }),
    value:    initial?.value    ?? "$0",
  });

  function set<K extends keyof typeof form>(k: K, v: typeof form[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  return (
    <Modal title={initial?.id ? "Edit Service" : "Add New Service"} onClose={onClose}>
      <div className="space-y-4">
        <Field label="Service name">
          <input className={inputCls} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="e.g. The Fixer — Supplier Dispute" />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Category">
            <select className={selectCls} value={form.category} onChange={(e) => set("category", e.target.value)}>
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </Field>
          <Field label="Status">
            <select className={selectCls} value={form.status} onChange={(e) => set("status", e.target.value as Service["status"])}>
              {STATUSES_SERVICE.map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Assigned member">
            <select className={selectCls} value={form.member} onChange={(e) => set("member", e.target.value)}>
              {memberNames.map((m) => <option key={m}>{m}</option>)}
            </select>
          </Field>
          <Field label="Value (incl. GST)">
            <input className={inputCls} value={form.value} onChange={(e) => set("value", e.target.value)} placeholder="$0" />
          </Field>
        </div>
        <div className="flex items-center gap-2 pt-2">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
            Cancel
          </button>
          <button
            onClick={() => { onSave(form); onClose(); }}
            disabled={!form.name}
            className="flex-1 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 disabled:opacity-40 text-white text-sm font-bold transition-all"
          >
            {initial?.id ? "Save Changes" : "Add Service"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

// ── Delete confirm ────────────────────────────────────────────────────────────

function DeleteModal({ label, onConfirm, onClose }: {
  label: string; onConfirm: () => void; onClose: () => void;
}) {
  return (
    <Modal title="Confirm Delete" onClose={onClose}>
      <div className="space-y-4">
        <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm font-bold text-red-800 mb-1">Are you sure?</div>
            <p className="text-xs text-red-700 leading-relaxed">
              You are about to permanently delete <strong>{label}</strong>. This action cannot be undone.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
            Cancel
          </button>
          <button
            onClick={() => { onConfirm(); onClose(); }}
            className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold transition-all"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}

// ── Badge helpers ─────────────────────────────────────────────────────────────

const MEMBER_STATUS_BADGE: Record<Member["status"], string> = {
  Active:   "bg-emerald-50 text-emerald-700",
  Pending:  "bg-amber-50 text-amber-700",
  Inactive: "bg-slate-100 text-slate-500",
};

const SERVICE_STATUS_BADGE: Record<Service["status"], string> = {
  Active:      "bg-blue-50 text-blue-700",
  "In Progress":"bg-amber-50 text-amber-700",
  Completed:   "bg-emerald-50 text-emerald-700",
  Pending:     "bg-slate-100 text-slate-600",
};

// ── Main dashboard ────────────────────────────────────────────────────────────

type ModalState =
  | { type: "addMember" }
  | { type: "editMember";    item: Member }
  | { type: "deleteMember";  item: Member }
  | { type: "addService" }
  | { type: "editService";   item: Service }
  | { type: "deleteService"; item: Service }
  | null;

export function AdminDashboard() {
  const [members,       setMembers]       = useState<Member[]>(INITIAL_MEMBERS);
  const [services,      setServices]      = useState<Service[]>(INITIAL_SERVICES);
  const [modal,         setModal]         = useState<ModalState>(null);
  const [memberSearch,  setMemberSearch]  = useState("");
  const [serviceSearch, setServiceSearch] = useState("");
  const [activeTab,     setActiveTab]     = useState<"members" | "services">("members");

  let nextMemberId  = Math.max(...members.map((m) => m.id),  0) + 1;
  let nextServiceId = Math.max(...services.map((s) => s.id), 0) + 1;

  // ── Member CRUD ──
  function addMember(data: Omit<Member, "id">) {
    setMembers((prev) => [...prev, { ...data, id: nextMemberId++ }]);
  }
  function editMember(id: number, data: Omit<Member, "id">) {
    setMembers((prev) => prev.map((m) => m.id === id ? { ...data, id } : m));
  }
  function deleteMember(id: number) {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  }

  // ── Service CRUD ──
  function addService(data: Omit<Service, "id">) {
    setServices((prev) => [...prev, { ...data, id: nextServiceId++ }]);
  }
  function editService(id: number, data: Omit<Service, "id">) {
    setServices((prev) => prev.map((s) => s.id === id ? { ...data, id } : s));
  }
  function deleteService(id: number) {
    setServices((prev) => prev.filter((s) => s.id !== id));
  }

  const filteredMembers  = members.filter(
    (m) => m.name.toLowerCase().includes(memberSearch.toLowerCase()) ||
           m.email.toLowerCase().includes(memberSearch.toLowerCase())
  );
  const filteredServices = services.filter(
    (s) => s.name.toLowerCase().includes(serviceSearch.toLowerCase()) ||
           s.member.toLowerCase().includes(serviceSearch.toLowerCase())
  );

  const memberNames = members.map((m) => m.name);

  return (
    <div className="px-4 sm:px-6 py-6 space-y-6">

      {/* ── Welcome banner ── */}
      <div className="bg-slate-900 rounded-2xl px-6 py-5 relative overflow-hidden">
        <div className="absolute -top-8 -right-8 w-44 h-44 bg-blue-700/20 rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 right-20 w-32 h-32 bg-slate-800 rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
              Admin Dashboard
            </div>
            <h2 className="text-xl font-extrabold text-white mb-1.5">Good morning, Admin.</h2>
            <p className="text-sm text-slate-400">
              <span className="text-white font-bold">{members.filter((m) => m.status === "Active").length} active members</span>,{" "}
              <span className="text-white font-bold">{services.filter((s) => s.status === "Active" || s.status === "In Progress").length} live services</span>, and{" "}
              <span className="text-white font-bold">{members.filter((m) => m.status === "Pending").length} pending onboarding</span>.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setModal({ type: "addMember" })}
              className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
            >
              <Plus className="w-3.5 h-3.5" /> Add Member
            </button>
            <button
              onClick={() => setModal({ type: "addService" })}
              className="inline-flex items-center gap-1.5 bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
            >
              <Plus className="w-3.5 h-3.5" /> Add Service
            </button>
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Members"      value={members.length}                                       sub={`${members.filter((m) => m.status === "Active").length} active`}         icon={Users}         color="bg-blue-50 text-blue-700"    border="border-blue-100" />
        <StatCard label="Active Services"    value={services.filter((s) => s.status === "Active" || s.status === "In Progress").length} sub="Across all members" icon={Zap} color="bg-amber-50 text-amber-700" border="border-amber-100" />
        <StatCard label="Pending Onboarding" value={members.filter((m) => m.status === "Pending").length} sub="Awaiting assignment"                                                     icon={AlertCircle}   color="bg-rose-50 text-rose-700"    border="border-rose-100" />
        <StatCard label="Completed Services" value={services.filter((s) => s.status === "Completed").length} sub="This period"                                                         icon={CheckCircle}   color="bg-emerald-50 text-emerald-700" border="border-emerald-100" />
      </div>

      {/* ── Tab switcher ── */}
      <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl w-fit">
        {(["members", "services"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === tab ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {tab === "members" ? `Members (${members.length})` : `Services (${services.length})`}
          </button>
        ))}
      </div>

      {/* ── Members table ── */}
      {activeTab === "members" && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between gap-3 flex-wrap">
            <h3 className="text-sm font-extrabold text-slate-900">Members</h3>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search members…"
                  value={memberSearch}
                  onChange={(e) => setMemberSearch(e.target.value)}
                  className="pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 w-44 transition-all"
                />
              </div>
              <button
                onClick={() => setModal({ type: "addMember" })}
                className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-3 py-2 rounded-xl transition-all"
              >
                <Plus className="w-3.5 h-3.5" /> Add Member
              </button>
            </div>
          </div>

          {/* Table — desktop */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-50 bg-slate-50/70">
                  {["Member", "Plan", "Status", "Consultant", "Joined", "Actions"].map((h) => (
                    <th key={h} className="px-4 py-3 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredMembers.map((m) => (
                  <tr key={m.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-[10px] font-black text-white">
                            {m.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{m.name}</div>
                          <div className="text-[10px] text-slate-400">{m.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600">{m.plan}</td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${MEMBER_STATUS_BADGE[m.status]}`}>
                        {m.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600">{m.consultant}</td>
                    <td className="px-4 py-3 text-[11px] text-slate-400">{m.joined}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setModal({ type: "editMember", item: m })}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-blue-700 hover:bg-blue-50 transition-all"
                          title="Edit"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setModal({ type: "deleteMember", item: m })}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredMembers.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-10 text-center text-xs text-slate-400">
                      No members match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Cards — mobile */}
          <div className="sm:hidden divide-y divide-slate-50">
            {filteredMembers.map((m) => (
              <div key={m.id} className="px-4 py-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-9 h-9 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-black text-white">
                      {m.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">{m.name}</div>
                    <div className="text-[10px] text-slate-400 truncate">{m.plan}</div>
                    <span className={`inline-block mt-0.5 text-[10px] font-bold px-2 py-0.5 rounded-lg ${MEMBER_STATUS_BADGE[m.status]}`}>
                      {m.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button onClick={() => setModal({ type: "editMember", item: m })} className="p-1.5 rounded-lg text-slate-400 hover:text-blue-700 hover:bg-blue-50 transition-all">
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => setModal({ type: "deleteMember", item: m })} className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Services table ── */}
      {activeTab === "services" && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between gap-3 flex-wrap">
            <h3 className="text-sm font-extrabold text-slate-900">Services</h3>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search services…"
                  value={serviceSearch}
                  onChange={(e) => setServiceSearch(e.target.value)}
                  className="pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 w-44 transition-all"
                />
              </div>
              <button
                onClick={() => setModal({ type: "addService" })}
                className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-3 py-2 rounded-xl transition-all"
              >
                <Plus className="w-3.5 h-3.5" /> Add Service
              </button>
            </div>
          </div>

          {/* Table — desktop */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-50 bg-slate-50/70">
                  {["Service", "Category", "Status", "Member", "Value", "Created", "Actions"].map((h) => (
                    <th key={h} className="px-4 py-3 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredServices.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-4 py-3">
                      <div className="text-xs font-bold text-slate-900 max-w-[180px] truncate">{s.name}</div>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600">{s.category}</td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${SERVICE_STATUS_BADGE[s.status]}`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600">{s.member}</td>
                    <td className="px-4 py-3 text-xs font-bold text-slate-900">{s.value}</td>
                    <td className="px-4 py-3 text-[11px] text-slate-400">{s.created}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setModal({ type: "editService", item: s })}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-blue-700 hover:bg-blue-50 transition-all"
                          title="Edit"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setModal({ type: "deleteService", item: s })}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredServices.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-10 text-center text-xs text-slate-400">
                      No services match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Cards — mobile */}
          <div className="sm:hidden divide-y divide-slate-50">
            {filteredServices.map((s) => (
              <div key={s.id} className="px-4 py-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 truncate">{s.name}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{s.member} · {s.value}</div>
                  <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-lg ${SERVICE_STATUS_BADGE[s.status]}`}>
                    {s.status}
                  </span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button onClick={() => setModal({ type: "editService", item: s })} className="p-1.5 rounded-lg text-slate-400 hover:text-blue-700 hover:bg-blue-50 transition-all">
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => setModal({ type: "deleteService", item: s })} className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Recent activity ── */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-slate-900">Recent Activity</h3>
          <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 border border-slate-200 px-2 py-1 rounded-md">Live mock</span>
        </div>
        <div className="divide-y divide-slate-50">
          {[
            { icon: Users,        color: "bg-blue-50 text-blue-600",    text: "David Okafor onboarding initiated",          time: "2 hrs ago",  badge: "Pending",     badgeColor: "bg-amber-50 text-amber-700" },
            { icon: Zap,          color: "bg-violet-50 text-violet-600", text: "The Fixer — Cash Flow Crisis updated",        time: "4 hrs ago",  badge: "In Progress", badgeColor: "bg-amber-50 text-amber-700" },
            { icon: CheckCircle,  color: "bg-emerald-50 text-emerald-600", text: "Business Health Snapshot marked complete",  time: "Yesterday",  badge: "Completed",   badgeColor: "bg-emerald-50 text-emerald-700" },
            { icon: FileText,     color: "bg-slate-100 text-slate-500",  text: "Cash Flow Forecast Template downloaded",     time: "2 days ago", badge: "Document",    badgeColor: "bg-slate-100 text-slate-600" },
            { icon: CalendarCheck,color: "bg-blue-50 text-blue-600",    text: "Monthly Strategy Session booked — 12 May",   time: "3 days ago", badge: "Session",     badgeColor: "bg-blue-50 text-blue-700" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="px-5 py-3.5 flex items-center gap-3">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-slate-800 truncate">{item.text}</div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3 text-slate-300" />
                    <span className="text-[10px] text-slate-400">{item.time}</span>
                  </div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-lg flex-shrink-0 ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Modals ── */}
      {modal?.type === "addMember" && (
        <MemberModal
          onSave={addMember}
          onClose={() => setModal(null)}
        />
      )}
      {modal?.type === "editMember" && (
        <MemberModal
          initial={modal.item}
          onSave={(data) => editMember(modal.item.id, data)}
          onClose={() => setModal(null)}
        />
      )}
      {modal?.type === "deleteMember" && (
        <DeleteModal
          label={modal.item.name}
          onConfirm={() => deleteMember(modal.item.id)}
          onClose={() => setModal(null)}
        />
      )}
      {modal?.type === "addService" && (
        <ServiceModal
          memberNames={memberNames}
          onSave={addService}
          onClose={() => setModal(null)}
        />
      )}
      {modal?.type === "editService" && (
        <ServiceModal
          initial={modal.item}
          memberNames={memberNames}
          onSave={(data) => editService(modal.item.id, data)}
          onClose={() => setModal(null)}
        />
      )}
      {modal?.type === "deleteService" && (
        <DeleteModal
          label={modal.item.name}
          onConfirm={() => deleteService(modal.item.id)}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}