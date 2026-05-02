import { useState } from "react";
import { useLocation } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight, MessageCircle, Loader2 } from "lucide-react";
import { submitLeadEnquiry } from "../lib/publicCms";

const enquiryTypes = [
  "General enquiry",
  "On-Demand Services enquiry",
  "Business Advisor enquiry",
  "Managed Services enquiry",
  "Business Applications enquiry",
  "Marketplace product enquiry",
  "Business-in-a-Box enquiry",
  "Membership enquiry",
  "Operations Center enquiry",
  "Finance enquiry",
  "Insurance enquiry",
  "Offers / partnership enquiry",
  "Support request",
  "Billing enquiry",
];

export function ContactPage() {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", company: "", phone: "", enquiryType: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLeadEnquiry({
        ...form,
        sourcePath: location.pathname,
        enquiryType: form.enquiryType as any
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
              <MessageCircle className="w-3 h-3" /> Contact Remote Business Partner
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Let's talk about your business.
            </h1>
            <p className="text-slate-300 leading-relaxed">
              Whether you need advice, a service, a product, or just want to find out more — use the form below and we'll route your enquiry to the right team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Enquiry received</h2>
                  <p className="text-slate-600 mb-2">Thank you, <strong>{form.name}</strong>. We've received your enquiry and will be in touch within 1–2 business days.</p>
                  <p className="text-slate-500 text-sm">If your matter is urgent, please call us directly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-900 mb-1">Send us an enquiry</h2>
                    <p className="text-slate-500 text-sm">Select your enquiry type so we can route your message to the right team.</p>
                  </div>

                  {/* Enquiry type */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Enquiry type <span className="text-red-500">*</span></label>
                    <select
                      required
                      value={form.enquiryType}
                      onChange={(e) => setForm({ ...form, enquiryType: e.target.value })}
                      className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 bg-white text-slate-800"
                    >
                      <option value="">Select enquiry type…</option>
                      {enquiryTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Name + email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">Full name <span className="text-red-500">*</span></label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">Email address <span className="text-red-500">*</span></label>
                      <input
                        required
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  {/* Company + phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">Company name</label>
                      <input
                        type="text"
                        placeholder="Your business name"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">Phone number</label>
                      <input
                        type="tel"
                        placeholder="Optional"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Message <span className="text-red-500">*</span></label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your business and what you're looking for…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:translate-y-0"
                  >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Enquiry"}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>


                  <p className="text-slate-400 text-xs">
                    We aim to respond within 1–2 business days. For urgent matters, please call us directly.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* What to expect */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">What happens next?</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "Your enquiry is routed to the relevant team based on your selected enquiry type." },
                    { step: "2", text: "A team member reviews your message and prepares a tailored response." },
                    { step: "3", text: "We respond within 1–2 business days with next steps or a call booking." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-3">
                      <div className="w-6 h-6 bg-blue-700 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{s.step}</div>
                      <p className="text-slate-600 text-sm leading-relaxed">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact details */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">Contact details</h3>
                <div className="space-y-3">
                  <a href="mailto:info@remotebusinesspartner.com" className="flex items-start gap-3 text-sm text-slate-600 hover:text-blue-700 transition-colors">
                    <Mail className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    info@remotebusinesspartner.com
                  </a>
                  <a href="tel:+1234567890" className="flex items-start gap-3 text-sm text-slate-600 hover:text-blue-700 transition-colors">
                    <Phone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    +1 (234) 567-890
                  </a>
                  <div className="flex items-start gap-3 text-sm text-slate-600">
                    <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Remote — Operating Globally
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-600">
                    <Clock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Mon–Fri, 9am–5pm GMT
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">Quick links</h3>
                <div className="space-y-2">
                  {[
                    { label: "Help Center", href: "/help" },
                    { label: "Membership Hub", href: "/membership" },
                    { label: "Document Centre", href: "/on-demand/documents" },
                    { label: "Business Marketplace", href: "/marketplace" },
                  ].map((l) => (
                    <a key={l.label} href={l.href} className="flex items-center justify-between text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors py-1">
                      {l.label} <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
