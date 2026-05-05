import { Link } from "react-router";
import { MessageSquare, Mail, Phone, Clock, ChevronRight, ArrowRight, BookOpen, CheckCircle, AlertCircle } from "lucide-react";

const tickets = [
  { id: "RBP-1042", subject: "Unable to access Xero integration",     status: "Open",     updated: "2 May 2026",  priority: "High" },
  { id: "RBP-1038", subject: "Question about membership plan upgrade", status: "Resolved", updated: "28 Apr 2026", priority: "Normal" },
  { id: "RBP-1031", subject: "Document template formatting issue",     status: "Resolved", updated: "20 Apr 2026", priority: "Low" },
];

const faqs = [
  { q: "How do I book an advisory session?",        a: "Navigate to Advisory Sessions in the portal and click 'Book a Session', or visit the Contact page." },
  { q: "Can I change my membership plan?",           a: "Yes. Visit Portal Settings > Membership to view and upgrade your current plan at any time." },
  { q: "How do I access my documents?",             a: "All documents shared by your consultant are available under the Documents section in the portal." },
  { q: "How do partner offer discounts work?",      a: "RBP has pre-negotiated exclusive deals with each partner. Click 'Redeem' to activate an offer directly." },
];

export function PortalSupport() {
  return (
    <div className="px-4 sm:px-6 py-6 space-y-6">

      {/* Header */}
      <div>
        <h2 className="text-xl font-extrabold text-slate-900 mb-1">Support</h2>
        <p className="text-sm text-slate-500">Get help from the RBP team, track support tickets, and browse common questions.</p>
      </div>

      {/* Contact options */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: MessageSquare, title: "Live Chat",     sub: "Mon–Fri, 9am–5pm AEST", action: "Start Chat",      color: "bg-blue-700 text-white" },
          { icon: Mail,          title: "Email Support", sub: "Reply within 24 hours",  action: "Send Email",      color: "bg-white text-slate-700 border border-slate-200" },
          { icon: Phone,         title: "Phone Support", sub: "1800 RBP AUS",            action: "View Number",     color: "bg-white text-slate-700 border border-slate-200" },
        ].map((c) => (
          <div key={c.title} className={`rounded-2xl p-5 flex flex-col gap-3 shadow-sm ${c.color}`}>
            <c.icon className={`w-5 h-5 ${c.color.includes("blue-700") ? "text-white" : "text-blue-700"}`} />
            <div>
              <div className={`text-sm font-extrabold mb-0.5 ${c.color.includes("blue-700") ? "text-white" : "text-slate-900"}`}>{c.title}</div>
              <div className={`text-xs ${c.color.includes("blue-700") ? "text-blue-100" : "text-slate-500"}`}>{c.sub}</div>
            </div>
            <button className={`text-xs font-bold py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              c.color.includes("blue-700")
                ? "bg-white/20 hover:bg-white/30 text-white"
                : "bg-blue-700 hover:bg-blue-800 text-white"
            }`}>
              {c.action} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Ticket list */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-slate-900">My Support Tickets</h3>
          <button className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-3 py-2 rounded-xl transition-colors">
            New Ticket
          </button>
        </div>
        <div className="divide-y divide-slate-50">
          {tickets.map((t) => (
            <div key={t.id} className="px-5 py-3.5 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  {t.status === "Open"
                    ? <AlertCircle className="w-4 h-4 text-amber-500" />
                    : <CheckCircle className="w-4 h-4 text-emerald-500" />}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-800 truncate">{t.subject}</div>
                  <div className="text-[10px] text-slate-400">{t.id} · Updated {t.updated}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${
                  t.status === "Open" ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"
                }`}>
                  {t.status}
                </span>
                <button className="text-slate-400 hover:text-blue-700 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-slate-900">Frequently Asked Questions</h3>
          <Link to="/help" className="text-xs font-semibold text-blue-700 hover:underline flex items-center gap-1">
            Help Centre <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="divide-y divide-slate-50">
          {faqs.map((faq) => (
            <div key={faq.q} className="px-5 py-4 hover:bg-slate-50 transition-colors cursor-pointer">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-800 mb-1">{faq.q}</div>
                    <div className="text-[11px] text-slate-500 leading-relaxed">{faq.a}</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Office hours */}
      <div className="bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 flex items-center gap-3">
        <Clock className="w-5 h-5 text-slate-400 flex-shrink-0" />
        <div className="text-xs text-slate-500 leading-relaxed">
          <span className="font-bold text-slate-700">Support hours:</span> Monday – Friday, 9:00 AM – 5:00 PM AEST.
          Outside business hours? Send an email and we'll respond the next business day.
        </div>
      </div>
    </div>
  );
}
