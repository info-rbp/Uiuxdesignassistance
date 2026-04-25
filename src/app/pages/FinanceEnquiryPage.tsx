import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { 
  Send, 
  CheckCircle, 
  Shield, 
  DollarSign, 
  ArrowLeft,
  Briefcase,
  Users
} from "lucide-react";

export function FinanceEnquiryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type") || "general";

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    annualRevenue: "",
    enquiryType: type,
    message: "",
  });

  useEffect(() => {
    setForm(prev => ({ ...prev, enquiryType: type }));
  }, [type]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isFunding = form.enquiryType === "funding";
  const isInsurance = form.enquiryType === "insurance";

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <PageHero
        title={isFunding ? "Funding" : isInsurance ? "Insurance" : "Finance"}
        titleAccent="Enquiry"
        subtitle={`Tell us about your ${form.enquiryType} requirements so we can guide you to the right partner or product.`}
        badge="Finance Hub"
        breadcrumb="Finance / Enquiry"
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGZpbmFuY2UlMjBjaGFydHMlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc3MDkzMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
        bullets={["Specialized routing", "Priority support", "No-obligation"]}
        ctaPrimary={{ label: "Go Back", href: "/finance" }}
        stat={{ value: "Hub", label: "Enquiry Path", sublabel: "Direct referral" }}
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <button 
              onClick={() => navigate("/finance")}
              className="flex items-center gap-2 text-slate-500 hover:text-blue-700 font-bold transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Finance Center
            </button>
          </div>

          {submitted ? (
            <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-12 text-center shadow-xl shadow-slate-200/50">
              <div className="w-24 h-24 bg-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-12 h-12 text-emerald-600" />
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Requirement Captured</h2>
              <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                Thank you for your {form.enquiryType} enquiry. One of our specialists will review your details and be in touch within 24 business hours to discuss the next steps.
              </p>
              <button
                onClick={() => navigate("/finance")}
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-10 py-4 rounded-2xl transition-all shadow-lg"
              >
                Return to Hub
              </button>
            </div>
          ) : (
            <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-4 mb-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isFunding ? "bg-blue-100 text-blue-700" : isInsurance ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-700"}`}>
                  {isFunding ? <DollarSign className="w-7 h-7" /> : isInsurance ? <Shield className="w-7 h-7" /> : <Briefcase className="w-7 h-7" />}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 leading-none mb-2 capitalize">{form.enquiryType} Enquiry</h3>
                  <p className="text-slate-500 text-sm font-medium">Please complete the fields below.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Business Name</label>
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Est. Annual Revenue</label>
                    <select
                      required
                      value={form.annualRevenue}
                      onChange={(e) => setForm({ ...form, annualRevenue: e.target.value })}
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    >
                      <option value="">Select range...</option>
                      <option value="startup">Pre-revenue / Startup</option>
                      <option value="sub-100k">Under $100k</option>
                      <option value="100k-500k">$100k - $500k</option>
                      <option value="500k-2m">$500k - $2M</option>
                      <option value="2m-10m">$2M - $10M</option>
                      <option value="10m-plus">$10M+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Enquiry Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setForm({...form, enquiryType: "funding"})}
                      className={`py-4 rounded-2xl font-bold flex items-center justify-center gap-2 border-2 transition-all ${form.enquiryType === "funding" ? "bg-blue-700 border-blue-700 text-white" : "bg-white border-slate-200 text-slate-500 hover:border-blue-300"}`}
                    >
                      <DollarSign className="w-5 h-5" /> Funding
                    </button>
                    <button
                      type="button"
                      onClick={() => setForm({...form, enquiryType: "insurance"})}
                      className={`py-4 rounded-2xl font-bold flex items-center justify-center gap-2 border-2 transition-all ${form.enquiryType === "insurance" ? "bg-emerald-600 border-emerald-600 text-white" : "bg-white border-slate-200 text-slate-500 hover:border-emerald-300"}`}
                    >
                      <Shield className="w-5 h-5" /> Insurance
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">How can we help? *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your requirements or what you're looking to achieve..."
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-black text-white font-black py-5 px-8 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    Submit Enquiry
                  </button>
                  <p className="mt-4 text-xs text-slate-500 text-center italic">
                    By submitting, you agree to our educational-only framing and privacy policy. 
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
