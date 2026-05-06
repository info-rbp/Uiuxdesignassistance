import { useState } from "react";
import {
  Users, Zap, FileText, Plus, Pencil, Trash2,
  X, AlertCircle, CheckCircle,
  Clock, Search, CalendarCheck, Tag, Wrench,
  AppWindowIcon, BookOpen, HelpCircle, Globe,
  ShoppingBag, LayoutDashboard, ArrowRight,
  AlertTriangle, Info, ListChecks, PhoneCall,
  Inbox, Activity, Link2,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface Member {
  id: number; name: string; email: string; plan: string;
  status: "Active" | "Pending" | "Inactive"; joined: string; consultant: string;
}
interface Service {
  id: number; name: string; category: string;
  status: "Active" | "In Progress" | "Completed" | "Pending";
  member: string; created: string; value: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Seed data — Members & Services (kept for Add Member / Add Service modals)
// ─────────────────────────────────────────────────────────────────────────────

const INITIAL_MEMBERS: Member[] = [
  { id: 1, name: "Sarah Mitchell",  email: "sarah@blossomco.com.au",     plan: "Growth Partner", status: "Active",   joined: "12 Jan 2026", consultant: "James Reynolds" },
  { id: 2, name: "Tom Nguyen",      email: "tom@ngsolutions.com.au",     plan: "Advisory Plus",  status: "Active",   joined: "3 Feb 2026",  consultant: "Amanda Kim" },
  { id: 3, name: "Priya Sharma",    email: "priya@sharpventures.com.au", plan: "Essential",      status: "Active",   joined: "18 Feb 2026", consultant: "James Reynolds" },
  { id: 4, name: "David Okafor",    email: "david@okaconsult.com.au",    plan: "Growth Partner", status: "Pending",  joined: "29 Apr 2026", consultant: "Unassigned" },
  { id: 5, name: "Lucy Chen",       email: "lucy@brightpath.com.au",     plan: "Advisory Plus",  status: "Active",   joined: "2 May 2026",  consultant: "Amanda Kim" },
  { id: 6, name: "Marcus Hill",     email: "marcus@hillop.com.au",       plan: "Essential",      status: "Inactive", joined: "5 Nov 2025",  consultant: "James Reynolds" },
];
const INITIAL_SERVICES: Service[] = [
  { id: 1, name: "Decision Desk — Q2 Strategy",   category: "Advisory",   status: "In Progress", member: "Sarah Mitchell", created: "1 May 2026",  value: "$450" },
  { id: 2, name: "The Fixer — Cash Flow Crisis",   category: "The Fixer",  status: "Active",      member: "Tom Nguyen",     created: "28 Apr 2026", value: "$1,200" },
  { id: 3, name: "Business Health Snapshot",       category: "Advisory",   status: "Completed",   member: "Priya Sharma",   created: "20 Apr 2026", value: "$350" },
  { id: 4, name: "HR Services — Onboarding Pack",  category: "Managed",    status: "Active",      member: "Lucy Chen",      created: "3 May 2026",  value: "$800" },
  { id: 5, name: "Finance Referral — SMSF Advice", category: "Operations", status: "Pending",     member: "David Okafor",   created: "30 Apr 2026", value: "$0" },
];

const PLANS       = ["Essential", "Advisory Plus", "Growth Partner"];
const STATUSES_M: Member["status"][]  = ["Active", "Pending", "Inactive"];
const STATUSES_S: Service["status"][] = ["Active", "In Progress", "Completed", "Pending"];
const CATEGORIES  = ["Advisory", "The Fixer", "Managed", "Operations", "On-Demand"];
const CONSULTANTS = ["James Reynolds", "Amanda Kim", "Unassigned"];

// ─────────────────────────────────────────────────────────────────────────────
// Static mock data — Dashboard sections
// ─────────────────────────────────────────────────────────────────────────────

const TODO_ITEMS = [
  { id: 1, task: "Assign consultant to David Okafor",           area: "Membership",        priority: "Urgent", due: "6 May 2026",  status: "Pending" },
  { id: 2, task: "Review and update Help Center FAQs",          area: "Help Center",       priority: "High",   due: "7 May 2026",  status: "In Progress" },
  { id: 3, task: "Publish On-Demand Services pricing page",     area: "On-Demand Services",priority: "High",   due: "8 May 2026",  status: "Pending" },
  { id: 4, task: "Upload Q2 Strategy document templates",       area: "On-Demand Services",priority: "Medium", due: "12 May 2026", status: "Pending" },
  { id: 5, task: "Review Managed Services bid templates",       area: "Managed Services",  priority: "Medium", due: "14 May 2026", status: "In Progress" },
  { id: 6, task: "Update site content for Applications section",area: "Site Content",      priority: "Low",    due: "20 May 2026", status: "Pending" },
  { id: 7, task: "Add Q3 offer listings to Offers section",    area: "Offers",             priority: "Low",    due: "25 May 2026", status: "Pending" },
];

const DISCOVERY_CALLS = [
  { id: 1, contact: "Rachel Wong",    business: "WongTech Solutions",       service: "Business Advisor",  dateTime: "7 May 2026, 10:00am",  status: "Scheduled" },
  { id: 2, contact: "Ben Cartwright", business: "Cartwright Constructions", service: "The Fixer",         dateTime: "8 May 2026, 2:00pm",   status: "New" },
  { id: 3, contact: "Aisha Nkosi",    business: "Nkosi Creative",           service: "Managed Services",  dateTime: "5 May 2026, 11:30am",  status: "Follow Up" },
  { id: 4, contact: "Jake Fernandez", business: "Fernandez Logistics",      service: "Decision Desk",     dateTime: "12 May 2026, 9:00am",  status: "Scheduled" },
  { id: 5, contact: "Lena Park",      business: "Park & Associates",        service: "HR Services",       dateTime: "3 May 2026",           status: "Completed" },
];

const PENDING_REQUESTS = [
  { area: "Services",      item: "Decision Desk — Q2 Strategy",               note: "Awaiting review" },
  { area: "Applications",  item: "Operations and Finance setup request",       note: "Pending setup" },
  { area: "Membership",    item: "David Okafor — consultant assignment",       note: "Unassigned" },
  { area: "Offers",        item: "Q2 Member Discount — pending approval",      note: "Under review" },
  { area: "Help Center",   item: "3 new support requests received",            note: "Unanswered" },
  { area: "Integrations",  item: "Xero integration request from Lucy Chen",   note: "Not connected" },
  { area: "Documents",     item: "HR Onboarding Pack — awaiting final review", note: "Draft" },
];

const ACTIVITY_FEED = [
  { icon: Users,        color: "bg-blue-50 text-blue-600",     text: "David Okafor onboarding initiated",                time: "2 hrs ago",  badge: "Membership",   bClr: "bg-blue-50 text-blue-700" },
  { icon: CalendarCheck,color: "bg-green-50 text-green-600",   text: "Discovery call booked — Rachel Wong",              time: "3 hrs ago",  badge: "Discovery",    bClr: "bg-green-50 text-green-700" },
  { icon: Zap,          color: "bg-violet-50 text-violet-600", text: "The Fixer — Cash Flow Crisis updated",             time: "4 hrs ago",  badge: "On-Demand",    bClr: "bg-violet-50 text-violet-700" },
  { icon: Tag,          color: "bg-orange-50 text-orange-600", text: "Q2 Member Discount offer submitted for review",    time: "Yesterday",  badge: "Offers",       bClr: "bg-orange-50 text-orange-700" },
  { icon: HelpCircle,   color: "bg-sky-50 text-sky-600",       text: "Help Center article updated — Business Setup Guide",time: "Yesterday", badge: "Help Center",  bClr: "bg-sky-50 text-sky-700" },
  { icon: CheckCircle,  color: "bg-emerald-50 text-emerald-600",text: "Business Health Snapshot marked complete",        time: "2 days ago", badge: "Services",     bClr: "bg-emerald-50 text-emerald-700" },
  { icon: Link2,        color: "bg-slate-100 text-slate-500",  text: "Integration request received — Xero",              time: "2 days ago", badge: "Integrations", bClr: "bg-slate-100 text-slate-600" },
];

const QUICK_LINKS = [
  { label: "On-Demand Services", icon: Zap,            href: "/admin/on-demand",       color: "bg-violet-50 text-violet-700" },
  { label: "Managed Services",   icon: Briefcase_,     href: "/admin/managed-services",color: "bg-blue-50 text-blue-700" },
  { label: "Applications",       icon: AppWindowIcon,  href: "/admin/applications",    color: "bg-sky-50 text-sky-700" },
  { label: "Integrations",       icon: Link2,          href: "/admin/applications/integrations", color: "bg-teal-50 text-teal-700" },
  { label: "Membership",         icon: Users,          href: "/admin/membership",      color: "bg-indigo-50 text-indigo-700" },
  { label: "Offers",             icon: Tag,            href: "/admin/offers",          color: "bg-orange-50 text-orange-700" },
  { label: "Site Content",       icon: Globe,          href: "/admin/site-content/pages", color: "bg-emerald-50 text-emerald-700" },
  { label: "Help Center",        icon: HelpCircle,     href: "/admin/help-center",     color: "bg-rose-50 text-rose-700" },
];

const SYSTEM_ALERTS = [
  { icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-50 border-amber-100", text: "Firebase setup pending",                    note: "Firebase connection not yet configured." },
  { icon: FileText,      color: "text-blue-500",  bg: "bg-blue-50 border-blue-100",   text: "Content placeholders remaining",             note: "Several page sections contain placeholder copy." },
  { icon: Link2,         color: "text-rose-500",  bg: "bg-rose-50 border-rose-100",   text: "Integrations not connected",                 note: "Xero, Stripe and MYOB integrations pending." },
  { icon: Users,         color: "text-violet-500",bg: "bg-violet-50 border-violet-100",text: "Member portal links pending",               note: "Some portal routes are not yet wired to content." },
  { icon: AlertCircle,   color: "text-slate-500", bg: "bg-slate-50 border-slate-200", text: "Admin routes pending final wiring",          note: "Routing to be completed in GitHub/Firebase Studio." },
];

// placeholder icon alias (Briefcase is imported differently to avoid collision)
function Briefcase_({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared UI helpers
// ─────────────────────────────────────────────────────────────────────────────

function StatCard({ label, value, sub, icon: Icon, color, border }: {
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

function SectionHeader({ title, badge }: { title: string; badge?: string }) {
  return (
    <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
      <h3 className="text-sm font-extrabold text-slate-900">{title}</h3>
      {badge && (
        <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 border border-slate-200 px-2 py-1 rounded-md">
          {badge}
        </span>
      )}
    </div>
  );
}

// Priority badge colours
const PRIORITY_BADGE: Record<string, string> = {
  Urgent:  "bg-red-50 text-red-700",
  High:    "bg-orange-50 text-orange-700",
  Medium:  "bg-amber-50 text-amber-700",
  Low:     "bg-slate-100 text-slate-500",
};

// Status badge colours (shared across tables)
const STATUS_BADGE: Record<string, string> = {
  Pending:     "bg-slate-100 text-slate-600",
  "In Progress":"bg-amber-50 text-amber-700",
  Completed:   "bg-emerald-50 text-emerald-700",
  Active:      "bg-blue-50 text-blue-700",
  New:         "bg-violet-50 text-violet-700",
  Scheduled:   "bg-blue-50 text-blue-700",
  "Follow Up": "bg-orange-50 text-orange-700",
  Inactive:    "bg-slate-100 text-slate-500",
};

function Badge({ label }: { label: string }) {
  const cls = STATUS_BADGE[label] ?? PRIORITY_BADGE[label] ?? "bg-slate-100 text-slate-600";
  return <span className={`text-[10px] font-bold px-2 py-1 rounded-lg whitespace-nowrap ${cls}`}>{label}</span>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Modal primitives (unchanged from original)
// ─────────────────────────────────────────────────────────────────────────────

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
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

const inputCls  = "w-full border border-slate-200 bg-white text-slate-900 text-sm px-3 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";
const selectCls = inputCls;

// ─────────────────────────────────────────────────────────────────────────────
// Member modal
// ─────────────────────────────────────────────────────────────────────────────

function MemberModal({ initial, onSave, onClose }: {
  initial?: Partial<Member>; onSave: (m: Omit<Member, "id">) => void; onClose: () => void;
}) {
  const [form, setForm] = useState({
    name:       initial?.name       ?? "",
    email:      initial?.email      ?? "",
    plan:       initial?.plan       ?? PLANS[0],
    status:     initial?.status     ?? "Active" as Member["status"],
    joined:     initial?.joined     ?? new Date().toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }),
    consultant: initial?.consultant ?? "Unassigned",
  });
  function set<K extends keyof typeof form>(k: K, v: typeof form[K]) { setForm(f => ({ ...f, [k]: v })); }
  return (
    <Modal title={initial?.id ? "Edit Member" : "Add New Member"} onClose={onClose}>
      <div className="space-y-4">
        <Field label="Full name"><input className={inputCls} value={form.name} onChange={e => set("name", e.target.value)} placeholder="e.g. Jane Smith" /></Field>
        <Field label="Email address"><input className={inputCls} type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="jane@example.com.au" /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Membership plan">
            <select className={selectCls} value={form.plan} onChange={e => set("plan", e.target.value)}>
              {PLANS.map(p => <option key={p}>{p}</option>)}
            </select>
          </Field>
          <Field label="Status">
            <select className={selectCls} value={form.status} onChange={e => set("status", e.target.value as Member["status"])}>
              {STATUSES_M.map(s => <option key={s}>{s}</option>)}
            </select>
          </Field>
        </div>
        <Field label="Assigned consultant">
          <select className={selectCls} value={form.consultant} onChange={e => set("consultant", e.target.value)}>
            {CONSULTANTS.map(c => <option key={c}>{c}</option>)}
          </select>
        </Field>
        <div className="flex items-center gap-2 pt-2">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">Cancel</button>
          <button onClick={() => { onSave(form); onClose(); }} disabled={!form.name || !form.email}
            className="flex-1 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 disabled:opacity-40 text-white text-sm font-bold transition-all">
            {initial?.id ? "Save Changes" : "Add Member"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Service modal
// ─────────────────────────────────────────────────────────────────────────────

function ServiceModal({ initial, memberNames, onSave, onClose }: {
  initial?: Partial<Service>; memberNames: string[]; onSave: (s: Omit<Service, "id">) => void; onClose: () => void;
}) {
  const [form, setForm] = useState({
    name:     initial?.name     ?? "",
    category: initial?.category ?? CATEGORIES[0],
    status:   initial?.status   ?? "Active" as Service["status"],
    member:   initial?.member   ?? (memberNames[0] ?? ""),
    created:  initial?.created  ?? new Date().toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }),
    value:    initial?.value    ?? "$0",
  });
  function set<K extends keyof typeof form>(k: K, v: typeof form[K]) { setForm(f => ({ ...f, [k]: v })); }
  return (
    <Modal title={initial?.id ? "Edit Service" : "Add New Service"} onClose={onClose}>
      <div className="space-y-4">
        <Field label="Service name"><input className={inputCls} value={form.name} onChange={e => set("name", e.target.value)} placeholder="e.g. The Fixer — Supplier Dispute" /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Category">
            <select className={selectCls} value={form.category} onChange={e => set("category", e.target.value)}>
              {CATEGORIES.map(c => <option key={c}>{c}</option>)}
            </select>
          </Field>
          <Field label="Status">
            <select className={selectCls} value={form.status} onChange={e => set("status", e.target.value as Service["status"])}>
              {STATUSES_S.map(s => <option key={s}>{s}</option>)}
            </select>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Assigned member">
            <select className={selectCls} value={form.member} onChange={e => set("member", e.target.value)}>
              {memberNames.map(m => <option key={m}>{m}</option>)}
            </select>
          </Field>
          <Field label="Value (incl. GST)">
            <input className={inputCls} value={form.value} onChange={e => set("value", e.target.value)} placeholder="$0" />
          </Field>
        </div>
        <div className="flex items-center gap-2 pt-2">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">Cancel</button>
          <button onClick={() => { onSave(form); onClose(); }} disabled={!form.name}
            className="flex-1 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 disabled:opacity-40 text-white text-sm font-bold transition-all">
            {initial?.id ? "Save Changes" : "Add Service"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Delete confirm modal
// ─────────────────────────────────────────────────────────────────────────────

function DeleteModal({ label, onConfirm, onClose }: { label: string; onConfirm: () => void; onClose: () => void }) {
  return (
    <Modal title="Confirm Delete" onClose={onClose}>
      <div className="space-y-4">
        <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm font-bold text-red-800 mb-1">Are you sure?</div>
            <p className="text-xs text-red-700 leading-relaxed">You are about to permanently delete <strong>{label}</strong>. This cannot be undone.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">Cancel</button>
          <button onClick={() => { onConfirm(); onClose(); }} className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold transition-all">Delete</button>
        </div>
      </div>
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Placeholder action modal (Add Task / Add Discovery Call)
// ─────────────────────────────────────────────────────────────────────────────

function PlaceholderModal({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <Modal title={title} onClose={onClose}>
      <div className="flex flex-col items-center gap-4 py-4 text-center">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
          <Info className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <div className="text-sm font-bold text-slate-900 mb-1">Coming soon</div>
          <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
            This form will be wired to live data in GitHub/Firebase Studio. For now this section uses static mock data.
          </p>
        </div>
        <button onClick={onClose} className="px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold transition-all">Got it</button>
      </div>
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Modal state
// ─────────────────────────────────────────────────────────────────────────────

type ModalState =
  | { type: "addMember" } | { type: "editMember";    item: Member }   | { type: "deleteMember";  item: Member }
  | { type: "addService" }| { type: "editService";   item: Service }  | { type: "deleteService"; item: Service }
  | { type: "addTask" }   | { type: "addDiscovery" }
  | null;

// ─────────────────────────────────────────────────────────────────────────────
// Main dashboard
// ─────────────────────────────────────────────────────────────────────────────

export function AdminDashboard() {
  const [members,  setMembers]  = useState<Member[]>(INITIAL_MEMBERS);
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
  const [modal,    setModal]    = useState<ModalState>(null);
  const [todoSearch,    setTodoSearch]    = useState("");
  const [discoverySearch, setDiscoverySearch] = useState("");

  let nextMemberId  = Math.max(...members.map(m => m.id),  0) + 1;
  let nextServiceId = Math.max(...services.map(s => s.id), 0) + 1;

  function addMember(data: Omit<Member, "id">)                         { setMembers(p => [...p, { ...data, id: nextMemberId++ }]); }
  function editMember(id: number, data: Omit<Member, "id">)            { setMembers(p => p.map(m => m.id === id ? { ...data, id } : m)); }
  function deleteMember(id: number)                                     { setMembers(p => p.filter(m => m.id !== id)); }
  function addService(data: Omit<Service, "id">)                       { setServices(p => [...p, { ...data, id: nextServiceId++ }]); }
  function editService(id: number, data: Omit<Service, "id">)          { setServices(p => p.map(s => s.id === id ? { ...data, id } : s)); }
  function deleteService(id: number)                                    { setServices(p => p.filter(s => s.id !== id)); }

  const memberNames    = members.map(m => m.name);
  const activeMembers  = members.filter(m => m.status === "Active").length;
  const liveServices   = services.filter(s => s.status === "Active" || s.status === "In Progress").length;
  const pendingMembers = members.filter(m => m.status === "Pending").length;

  const filteredTodos     = TODO_ITEMS.filter(t =>
    t.task.toLowerCase().includes(todoSearch.toLowerCase()) ||
    t.area.toLowerCase().includes(todoSearch.toLowerCase())
  );
  const filteredDiscovery = DISCOVERY_CALLS.filter(d =>
    d.contact.toLowerCase().includes(discoverySearch.toLowerCase()) ||
    d.business.toLowerCase().includes(discoverySearch.toLowerCase())
  );

  return (
    <div className="px-4 sm:px-6 py-6 space-y-6">

      {/* ── 1. Hero / Welcome Panel ─────────────────────────────────────────── */}
      <div className="bg-slate-900 rounded-2xl px-6 py-6 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-52 h-52 bg-blue-700/20 rounded-full pointer-events-none" />
        <div className="absolute -bottom-12 right-24 w-36 h-36 bg-slate-800 rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-5">
          <div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <LayoutDashboard className="w-3 h-3" /> Admin Dashboard
            </div>
            <h2 className="text-xl font-extrabold text-white mb-2">Good morning, Admin.</h2>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Focus today on{" "}
              <span className="text-white font-semibold">pending requests</span>,{" "}
              <span className="text-white font-semibold">discovery calls</span>,{" "}
              <span className="text-white font-semibold">member activity</span>, and{" "}
              <span className="text-white font-semibold">content requiring attention</span>.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
            <button onClick={() => setModal({ type: "addTask" })}
              className="inline-flex items-center gap-1.5 bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl transition-all">
              <Plus className="w-3.5 h-3.5" /> Add Task
            </button>
            <button onClick={() => setModal({ type: "addDiscovery" })}
              className="inline-flex items-center gap-1.5 bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl transition-all">
              <Plus className="w-3.5 h-3.5" /> Add Discovery Call
            </button>
            <button onClick={() => setModal({ type: "addMember" })}
              className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl transition-all">
              <Plus className="w-3.5 h-3.5" /> Add Member
            </button>
            <button onClick={() => setModal({ type: "addService" })}
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl transition-all">
              <Plus className="w-3.5 h-3.5" /> Add Service
            </button>
          </div>
        </div>
      </div>

      {/* ── 2. Priority Stat Cards ──────────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
        <StatCard label="To Do Tasks"      value={TODO_ITEMS.length}        sub={`${TODO_ITEMS.filter(t => t.priority === "Urgent" || t.priority === "High").length} high priority`}  icon={ListChecks}   color="bg-amber-50 text-amber-700"   border="border-amber-100" />
        <StatCard label="Discovery Calls"  value={DISCOVERY_CALLS.length}   sub={`${DISCOVERY_CALLS.filter(d => d.status === "New").length} new`}                                      icon={PhoneCall}    color="bg-green-50 text-green-700"   border="border-green-100" />
        <StatCard label="Pending Requests" value={PENDING_REQUESTS.length}  sub="Across all areas"                                                                                    icon={Inbox}        color="bg-rose-50 text-rose-700"     border="border-rose-100" />
        <StatCard label="Content Required" value={3}                         sub="Sections need updating"                                                                              icon={FileText}     color="bg-violet-50 text-violet-700" border="border-violet-100" />
        <StatCard label="Active Members"   value={activeMembers}             sub={`${pendingMembers} pending`}                                                                         icon={Users}        color="bg-blue-50 text-blue-700"     border="border-blue-100" />
        <StatCard label="Live Services"    value={liveServices}              sub="Active or in progress"                                                                               icon={Zap}          color="bg-emerald-50 text-emerald-700" border="border-emerald-100" />
      </div>

      {/* ── 3. To Do Tasks ─────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <ListChecks className="w-4 h-4 text-slate-400" />
            <h3 className="text-sm font-extrabold text-slate-900">To Do Tasks</h3>
            <span className="text-[10px] font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">{TODO_ITEMS.length}</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              <input type="text" placeholder="Search tasks…" value={todoSearch} onChange={e => setTodoSearch(e.target.value)}
                className="pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 w-40 transition-all" />
            </div>
            <button onClick={() => setModal({ type: "addTask" })}
              className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-3 py-2 rounded-xl transition-all">
              <Plus className="w-3.5 h-3.5" /> Add Task
            </button>
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-50 bg-slate-50/70">
                {["Task", "Related Area", "Priority", "Due Date", "Status", "Action"].map(h => (
                  <th key={h} className="px-4 py-3 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredTodos.map(t => (
                <tr key={t.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-4 py-3 text-xs font-semibold text-slate-800 max-w-[240px]">{t.task}</td>
                  <td className="px-4 py-3 text-xs text-slate-500">{t.area}</td>
                  <td className="px-4 py-3"><Badge label={t.priority} /></td>
                  <td className="px-4 py-3 text-[11px] text-slate-400 whitespace-nowrap">{t.due}</td>
                  <td className="px-4 py-3"><Badge label={t.status} /></td>
                  <td className="px-4 py-3">
                    <button className="p-1.5 rounded-lg text-slate-300 hover:text-blue-600 hover:bg-blue-50 transition-all" title="Edit">
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredTodos.length === 0 && (
                <tr><td colSpan={6} className="px-4 py-10 text-center text-xs text-slate-400">No tasks match your search.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="sm:hidden divide-y divide-slate-50">
          {filteredTodos.map(t => (
            <div key={t.id} className="px-4 py-4 space-y-1.5">
              <div className="text-xs font-semibold text-slate-800">{t.task}</div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] text-slate-400">{t.area}</span>
                <Badge label={t.priority} />
                <Badge label={t.status} />
              </div>
              <div className="text-[10px] text-slate-400">{t.due}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. Discovery Calls ──────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-slate-400" />
            <h3 className="text-sm font-extrabold text-slate-900">Discovery Calls</h3>
            <span className="text-[10px] font-bold bg-green-50 text-green-700 px-2 py-0.5 rounded-full">{DISCOVERY_CALLS.length}</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              <input type="text" placeholder="Search calls…" value={discoverySearch} onChange={e => setDiscoverySearch(e.target.value)}
                className="pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 w-40 transition-all" />
            </div>
            <button onClick={() => setModal({ type: "addDiscovery" })}
              className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-3 py-2 rounded-xl transition-all">
              <Plus className="w-3.5 h-3.5" /> Add Call
            </button>
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-50 bg-slate-50/70">
                {["Contact Name", "Business", "Requested Service", "Date / Time", "Status", "Action"].map(h => (
                  <th key={h} className="px-4 py-3 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredDiscovery.map(d => (
                <tr key={d.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-[9px] font-black text-white">
                          {d.contact.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-slate-800 whitespace-nowrap">{d.contact}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500 max-w-[140px] truncate">{d.business}</td>
                  <td className="px-4 py-3 text-xs text-slate-600">{d.service}</td>
                  <td className="px-4 py-3 text-[11px] text-slate-400 whitespace-nowrap">{d.dateTime}</td>
                  <td className="px-4 py-3"><Badge label={d.status} /></td>
                  <td className="px-4 py-3">
                    <button className="p-1.5 rounded-lg text-slate-300 hover:text-blue-600 hover:bg-blue-50 transition-all" title="Edit">
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredDiscovery.length === 0 && (
                <tr><td colSpan={6} className="px-4 py-10 text-center text-xs text-slate-400">No discovery calls match your search.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="sm:hidden divide-y divide-slate-50">
          {filteredDiscovery.map(d => (
            <div key={d.id} className="px-4 py-4 space-y-1.5">
              <div className="text-xs font-semibold text-slate-800">{d.contact} — {d.business}</div>
              <div className="text-[11px] text-slate-500">{d.service}</div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] text-slate-400">{d.dateTime}</span>
                <Badge label={d.status} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 5 & 6. Pending Requests + Recent Activity (side by side on wide screens) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Pending Requests */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <SectionHeader title="Pending Requests" badge={`${PENDING_REQUESTS.length} items`} />
          <div className="divide-y divide-slate-50">
            {PENDING_REQUESTS.map((r, i) => (
              <div key={i} className="px-5 py-3.5 flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-slate-800 truncate">{r.item}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{r.area}</div>
                </div>
                <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-slate-100 text-slate-500 flex-shrink-0 whitespace-nowrap">{r.note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-slate-400" />
              <h3 className="text-sm font-extrabold text-slate-900">Recent Activity</h3>
            </div>
            <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 border border-slate-200 px-2 py-1 rounded-md">Mock data</span>
          </div>
          <div className="divide-y divide-slate-50">
            {ACTIVITY_FEED.map((item, i) => {
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
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-lg flex-shrink-0 ${item.bClr}`}>{item.badge}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 7. Quick Links ──────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <SectionHeader title="Quick Links" badge="Shortcuts" />
        <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {QUICK_LINKS.map(ql => {
            const Icon = ql.icon;
            return (
              <a key={ql.label} href={ql.href}
                className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all group cursor-pointer text-center">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${ql.color} group-hover:scale-105 transition-transform`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 group-hover:text-slate-900 leading-tight">{ql.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* ── 8. System Alerts ────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <SectionHeader title="System Alerts" badge={`${SYSTEM_ALERTS.length} active`} />
        <div className="p-4 space-y-2.5">
          {SYSTEM_ALERTS.map((a, i) => {
            const Icon = a.icon;
            return (
              <div key={i} className={`flex items-start gap-3 p-3.5 rounded-xl border ${a.bg}`}>
                <Icon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${a.color}`} />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-800">{a.text}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{a.note}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── 9. Dashboard Notes ──────────────────────────────────────────────── */}
      <div className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200">
        <Info className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
        <p className="text-[11px] text-slate-400 leading-relaxed">
          <span className="font-bold text-slate-500">Dashboard note:</span>{" "}
          This dashboard is scaffolded for operational visibility. Final data, permissions, publishing workflows,
          and Firebase connections will be handled later in GitHub/Firebase Studio.
        </p>
      </div>

      {/* ── Modals ──────────────────────────────────────────────────────────── */}
      {modal?.type === "addMember"    && <MemberModal onSave={addMember} onClose={() => setModal(null)} />}
      {modal?.type === "editMember"   && <MemberModal initial={modal.item} onSave={d => editMember(modal.item.id, d)} onClose={() => setModal(null)} />}
      {modal?.type === "deleteMember" && <DeleteModal label={modal.item.name} onConfirm={() => deleteMember(modal.item.id)} onClose={() => setModal(null)} />}
      {modal?.type === "addService"   && <ServiceModal memberNames={memberNames} onSave={addService} onClose={() => setModal(null)} />}
      {modal?.type === "editService"  && <ServiceModal initial={modal.item} memberNames={memberNames} onSave={d => editService(modal.item.id, d)} onClose={() => setModal(null)} />}
      {modal?.type === "deleteService"&& <DeleteModal label={modal.item.name} onConfirm={() => deleteService(modal.item.id)} onClose={() => setModal(null)} />}
      {modal?.type === "addTask"      && <PlaceholderModal title="Add Task" onClose={() => setModal(null)} />}
      {modal?.type === "addDiscovery" && <PlaceholderModal title="Add Discovery Call" onClose={() => setModal(null)} />}
    </div>
  );
}
