import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1764722053231-9162ed8831d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwdXMlMjBjb21tdW5pY2F0aW9uJTIwb2ZmaWNlJTIwcGhvbmUlMjBzdXBwb3J0fGVufDF8fHx8MTc3NjkyMzMwNnww&ixlib=rb-4.1.0&q=80&w=1080";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "info@remotebusinesspartner.com", href: "mailto:info@remotebusinesspartner.com" },
  { icon: Phone, label: "Call Us", value: "+1 (234) 567-890", href: "tel:+1234567890" },
  { icon: MapPin, label: "Location", value: "Remote — Operating Globally", href: null },
  { icon: Clock, label: "Response Time", value: "Within 24 business hours", href: null },
];

const services = [
  "Operations Advisory",
  "Human Resource Advisory",
  "Management Consulting",
  "Change Management",
  "AI Implementation",
  "Admin & Finance Consulting",
  "DocuShare",
  "Applications",
  "Other",
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PageHero
        title="Get In Touch"
        titleAccent="With Us"
        subtitle="Whether you have a specific challenge in mind or just want to explore how we can help, we'd love to hear from you."
        badge="Contact Us"
        breadcrumb="Contact"
        image={heroImage}
        bullets={["Responds within 24 hours", "No-obligation consultation", "Direct access to advisors"]}
        ctaPrimary={{ label: "Send a Message", href: "#contact-form" }}
        ctaSecondary={{ label: "Our Services", href: "/services" }}
        stat={{ value: "24hr", label: "Response Time", sublabel: "Guaranteed reply" }}
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-4">
                  Reach Out
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  We're Here to Help
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Book a free 30-minute discovery call, ask us a question, or tell us about your business. We'll get back to you promptly.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-700" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-slate-900 font-semibold text-sm hover:text-blue-700 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-slate-900 font-semibold text-sm">{item.value}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Message Sent!</h3>
                  <p className="text-slate-600 mb-6">
                    Thank you for reaching out. A member of our team will be in touch with you within 24 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", service: "", message: "" }); }}
                    className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-8 space-y-5"
                >
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">Send Us a Message</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company / Business Name</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service of Interest</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message *</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      placeholder="Tell us about your business and what you're looking to achieve..."
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-blue-200"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    By submitting, you agree to our Privacy Policy. We'll never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}