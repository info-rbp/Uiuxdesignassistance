import { useState } from "react";
import { Link } from "react-router";
import { PortalCard, PortalCardBody, PortalCardHeader, PortalBadge } from "../../components/portal/PortalComponents";
import { useMember } from "../../hooks/useMember";
import { FileText, Plus, Clock, CheckCircle, AlertCircle, ChevronRight, Loader2 } from "lucide-react";

type RequestStatus = "pending" | "in_review" | "completed" | "declined";

interface CustomisationRequest {
  id: string;
  title: string;
  type: string;
  status: RequestStatus;
  createdAt: string;
  updatedAt: string;
}

const STATUS_CONFIG: Record<RequestStatus, { label: string; icon: typeof Clock; color: string; bg: string }> = {
  pending: { label: "Pending", icon: Clock, color: "text-amber-700", bg: "bg-amber-50 border-amber-100" },
  in_review: { label: "In Review", icon: AlertCircle, color: "text-blue-700", bg: "bg-blue-50 border-blue-100" },
  completed: { label: "Completed", icon: CheckCircle, color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-100" },
  declined: { label: "Declined", icon: AlertCircle, color: "text-rose-700", bg: "bg-rose-50 border-rose-100" },
};

// Mock data — swap for real API fetch once wired
const MOCK_REQUESTS: CustomisationRequest[] = [];

export function PortalCustomisationRequestsPage() {
  const { member, entitlements, isLoading } = useMember();
  const [requests] = useState<CustomisationRequest[]>(MOCK_REQUESTS);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", type: "", description: "" });

  if (isLoading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 text-blue-600 animate-spin" /></div>;
  }

  const used = requests.length;
  const allowance = entitlements?.customisationAllowance ?? 0;
  const canSubmit = used < allowance;

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Customisation Requests
          </h1>
          <p className="text-slate-500 mt-2 text-sm max-w-md">
            Submit and track your customisation requests.
          </p>
        </div>
        {canSubmit ? (
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 shrink-0"
          >
            <Plus className="w-4 h-4" /> New Request
          </button>
        ) : (
          <div className="text-xs font-bold text-rose-600 text-right shrink-0">
            Monthly allowance reached
          </div>
        )}
      </div>

      {/* Allowance indicator */}
      <PortalCard>
        <PortalCardBody>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-extrabold text-slate-900 text-sm">Monthly Allowance</p>
                <p className="text-slate-500 text-xs mt-0.5">Resets on your billing date</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-2xl font-extrabold text-slate-900">
                  {used} <span className="text-slate-300 text-xl">/</span> <span className="text-blue-600">{allowance}</span>
                </p>
                <p className="text-xs text-slate-500 font-medium">requests used</p>
              </div>
              <PortalBadge status={canSubmit ? "Included" : "Locked"} />
            </div>
          </div>

          {allowance === 0 && (
            <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <p className="text-sm text-slate-600 font-semibold">
                Customisation requests are not included in your current plan.
              </p>
              <Link to="/membership" className="text-sm font-bold text-blue-600 hover:underline shrink-0 ml-4">
                Upgrade →
              </Link>
            </div>
          )}
        </PortalCardBody>
      </PortalCard>

      {/* New request form */}
      {showForm && canSubmit && (
        <PortalCard>
          <PortalCardHeader title="New Customisation Request" />
          <PortalCardBody>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowForm(false); }}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Request Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Custom employment agreement template"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Request Type *</label>
                <select
                  required
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select type…</option>
                  <option>Document customisation</option>
                  <option>Process design</option>
                  <option>Template modification</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Description *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe what you need and any relevant context…"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>
              <div className="flex items-center gap-3 pt-2">
                <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all">
                  Submit Request
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="text-slate-500 hover:text-slate-700 font-semibold text-sm">
                  Cancel
                </button>
              </div>
            </form>
          </PortalCardBody>
        </PortalCard>
      )}

      {/* Request list */}
      <PortalCard>
        <PortalCardHeader title={`Your Requests (${requests.length})`} />
        <PortalCardBody className="p-0">
          {requests.length === 0 ? (
            <div className="py-14 text-center text-slate-400">
              <FileText className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="font-semibold text-sm">No requests submitted yet</p>
              {canSubmit && <p className="text-xs mt-1">Use the "New Request" button to get started.</p>}
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {requests.map((req) => {
                const cfg = STATUS_CONFIG[req.status];
                const StatusIcon = cfg.icon;
                return (
                  <div key={req.id} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className={`w-8 h-8 ${cfg.bg} border rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <StatusIcon className={`w-4 h-4 ${cfg.color}`} />
                      </div>
                      <div className="overflow-hidden">
                        <p className="font-bold text-slate-900 text-sm truncate">{req.title}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{req.type} · {req.createdAt}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 flex-shrink-0 ml-4" />
                  </div>
                );
              })}
            </div>
          )}
        </PortalCardBody>
      </PortalCard>
    </div>
  );
}
