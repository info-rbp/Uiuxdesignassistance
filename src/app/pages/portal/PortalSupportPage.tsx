import { useState } from "react";
import { PortalCard, PortalCardBody, PortalCardHeader } from "../../components/portal/PortalComponents";
import { MessageSquare, Plus, Send, CheckCircle, Loader2, Clock } from "lucide-react";

interface SupportTicket {
  id: string;
  subject: string;
  status: "open" | "closed" | "waiting";
  createdAt: string;
}

const MOCK_TICKETS: SupportTicket[] = [];

export function PortalSupportPage() {
  const [tickets] = useState<SupportTicket[]>(MOCK_TICKETS);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading] = useState(false);
  const [form, setForm] = useState({ subject: "", category: "", message: "" });

  if (isLoading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 text-blue-600 animate-spin" /></div>;
  }

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Support
          </h1>
          <p className="text-slate-500 mt-2 text-sm max-w-md">
            Submit a support request or check the status of an existing ticket.
          </p>
        </div>
        <button
          onClick={() => { setShowForm(true); setSubmitted(false); }}
          className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 shrink-0"
        >
          <Plus className="w-4 h-4" /> New Ticket
        </button>
      </div>

      {showForm && (
        <PortalCard>
          <PortalCardHeader title="New Support Request" />
          <PortalCardBody>
            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-extrabold text-slate-900 mb-2">Request Submitted</h3>
                <p className="text-slate-500 text-sm">We'll be in touch within 24 business hours.</p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              >
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Subject *</label>
                  <input
                    type="text"
                    required
                    placeholder="Brief summary of your issue"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select category…</option>
                    <option>Billing</option>
                    <option>Membership</option>
                    <option>DocuShare</option>
                    <option>Technical issue</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your issue in detail…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Submit Request
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="text-slate-500 hover:text-slate-700 font-semibold text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </PortalCardBody>
        </PortalCard>
      )}

      <PortalCard>
        <PortalCardHeader title={`Your Tickets (${tickets.length})`} />
        <PortalCardBody className="p-0">
          {tickets.length === 0 ? (
            <div className="py-14 text-center text-slate-400">
              <MessageSquare className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="font-semibold text-sm">No support tickets yet</p>
              <p className="text-xs mt-1">Use the "New Ticket" button to submit a request.</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {tickets.map((t) => (
                <div key={t.id} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <div className="overflow-hidden">
                      <p className="font-bold text-slate-900 text-sm truncate">{t.subject}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{t.createdAt}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-500 capitalize shrink-0 ml-4">{t.status}</span>
                </div>
              ))}
            </div>
          )}
        </PortalCardBody>
      </PortalCard>
    </div>
  );
}
