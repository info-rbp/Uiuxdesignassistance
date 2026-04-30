import { useState } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ShoppingBag, ArrowRight, Search, X, CheckCircle, Star, Clock } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1688561807440-8a57dfa77ee3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBtYXJrZXRwbGFjZSUyMHByb2R1Y3RzJTIwZWNvbW1lcmNlJTIwc3RvcmVmcm9udHxlbnwxfHx8fDE3Nzc1NDY4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080";

const categories = [
  "All", "Business-in-a-Box", "Website & Digital", "Application Setup",
  "Documents & Compliance", "Growth & Marketing", "Finance & Insurance", "Advisory", "Managed Services Starter",
];

interface Product {
  id: string; name: string; category: string; price: string; forWho: string;
  desc: string; includes: string[]; delivery: string; timeline: string; featured?: boolean;
}

const products: Product[] = [
  { id: "biz-in-box-starter", name: "Business Starter Pack", category: "Business-in-a-Box", price: "£499", forWho: "New business owners", desc: "Everything you need to launch your business with a professional foundation — documents, digital setup, and operational framework.", includes: ["Business plan template", "Company profile", "Website setup", "Privacy policy & T&Cs", "Brand guidelines"], delivery: "Digital + setup", timeline: "7–10 days", featured: true },
  { id: "biz-in-box-growth", name: "Business Growth Pack", category: "Business-in-a-Box", price: "£999", forWho: "Growing SMEs", desc: "A comprehensive business improvement bundle for businesses ready to scale — strategy, systems, and operations.", includes: ["Operations manual", "Business strategy session", "CRM setup", "HR document pack", "Finance templates"], delivery: "Digital + advisory", timeline: "10–14 days", featured: true },
  { id: "website-starter", name: "Website Starter Package", category: "Website & Digital", price: "£349", forWho: "New businesses, sole traders", desc: "A professional, mobile-responsive business website — set up, branded, and ready to go.", includes: ["5-page website", "Mobile responsive design", "Contact form setup", "SEO basics", "Hosting guidance"], delivery: "Setup + handover", timeline: "5–7 days" },
  { id: "website-ecommerce", name: "Ecommerce Website Package", category: "Website & Digital", price: "£799", forWho: "Product-based businesses", desc: "A full ecommerce setup with product catalogue, cart, and payment processing.", includes: ["Webshop setup", "Product catalogue (up to 50)", "Payment gateway", "Order management", "Shipping integration"], delivery: "Setup + training", timeline: "10–14 days" },
  { id: "crm-setup", name: "CRM Setup Package", category: "Application Setup", price: "£299", forWho: "Sales-led businesses", desc: "Full setup of RBP SalesDesk (Frappe CRM) — configured for your sales process and team.", includes: ["CRM installation", "Pipeline configuration", "Contact import", "User setup & training", "30-day support"], delivery: "Setup + training", timeline: "3–5 days", featured: true },
  { id: "erp-setup", name: "BusinessCore ERP Setup", category: "Application Setup", price: "£699", forWho: "Operations-heavy businesses", desc: "Full ERPNext implementation for your business — accounts, inventory, and operations in one system.", includes: ["ERPNext installation", "Chart of accounts setup", "Module configuration", "Data migration support", "Team training"], delivery: "Setup + training", timeline: "10–14 days" },
  { id: "hr-setup", name: "HR System Setup", category: "Application Setup", price: "£349", forWho: "Businesses with 5+ staff", desc: "RBP PeopleDesk (HRMS) setup — employee records, leave, payroll structure, and onboarding workflows.", includes: ["HRMS installation", "Employee data setup", "Leave policy config", "Payroll structure", "Manager training"], delivery: "Setup + training", timeline: "5–7 days" },
  { id: "doc-compliance", name: "Compliance Document Bundle", category: "Documents & Compliance", price: "£349", forWho: "All businesses", desc: "The essential compliance documents every business needs — GDPR, policies, and legal templates.", includes: ["Privacy policy", "GDPR compliance pack", "Terms & conditions", "Cookie policy", "Data retention schedule"], delivery: "Digital documents", timeline: "3–5 days" },
  { id: "doc-hr-pack", name: "HR Document Pack", category: "Documents & Compliance", price: "£249", forWho: "Businesses with employees", desc: "A complete set of HR document templates — contracts, handbooks, and people management tools.", includes: ["Employment contracts", "Employee handbook", "Job description templates", "Performance review templates", "Disciplinary procedure"], delivery: "Digital documents", timeline: "3–5 days" },
  { id: "marketing-pack", name: "Marketing Starter Pack", category: "Growth & Marketing", price: "£299", forWho: "Businesses building their brand", desc: "A foundational marketing toolkit — brand guidelines, social templates, and a content calendar.", includes: ["Brand guidelines document", "Social media templates (10)", "Content calendar", "Email newsletter template", "Company profile"], delivery: "Digital assets", timeline: "5–7 days" },
  { id: "finance-readiness", name: "Finance Readiness Pack", category: "Finance & Insurance", price: "£199", forWho: "Businesses seeking finance", desc: "Prepare your business for finance applications with key documents and financial frameworks.", includes: ["Business plan template", "Cash flow forecast template", "P&L template", "Investment proposal framework", "Finance readiness checklist"], delivery: "Digital documents", timeline: "2–3 days" },
  { id: "advisory-review", name: "Business Health Review", category: "Advisory", price: "£199", forWho: "All business owners", desc: "A structured one-to-one business review session with a written findings and recommendations report.", includes: ["90-min advisory session", "Business health assessment", "Written findings report", "Prioritised recommendations", "30-day follow-up"], delivery: "Session + report", timeline: "Booked within 5 days" },
  { id: "managed-starter", name: "Managed Services Starter", category: "Managed Services Starter", price: "£299/mo", forWho: "Businesses needing ongoing support", desc: "An introductory managed service arrangement — regular operational support tasks included monthly.", includes: ["Up to 8 hours support/month", "Dedicated point of contact", "Monthly task delivery", "Progress reporting", "Flexible scope"], delivery: "Ongoing service", timeline: "Starts within 5 days" },
  { id: "bid-starter", name: "Bid Management Starter", category: "Managed Services Starter", price: "£499/mo", forWho: "Businesses pursuing contracts", desc: "A starter bid management service — opportunity identification, bid preparation, and submission support.", includes: ["Opportunity monitoring (2 portals)", "Bid/no-bid assessments", "1 full bid per month", "Compliance checklist", "Post-submission debrief"], delivery: "Ongoing service", timeline: "Starts within 5 days" },
];

export function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = products.filter((p) => p.featured);
  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,191,36,0.1)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/20 border border-amber-500/30 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <ShoppingBag className="w-3 h-3" /> Business Marketplace
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                Packaged solutions. <span className="text-amber-400">Ready to go.</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Business-in-a-box bundles, application setup packages, document packs, and managed service starters — everything productised for fast, clear delivery.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Clear pricing", "Defined deliverables", "Fast turnaround"].map((b) => (
                  <div key={b} className="flex items-center gap-1.5 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" /> {b}
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-7 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                Browse the Marketplace <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="hidden lg:block relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-white/10">
                <img src={heroImage} alt="Marketplace" className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-extrabold">{products.length}+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Products</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <h2 className="text-lg font-extrabold text-slate-900">Featured Packages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured.map((p) => (
              <div key={p.id} className="bg-white border-2 border-amber-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                <div className="h-1 bg-gradient-to-r from-amber-400 to-orange-400" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">{p.category}</div>
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 flex-shrink-0" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 mb-1">{p.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between text-sm mb-5">
                    <span className="font-extrabold text-slate-900 text-xl">{p.price}</span>
                    <div className="flex items-center gap-1 text-slate-400"><Clock className="w-3.5 h-3.5" /> {p.timeline}</div>
                  </div>
                  <Link to={`/marketplace/product/${p.id}`} className="inline-flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm py-2.5 px-4 rounded-xl transition-all">
                    View Package <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search + filter */}
      <div className="sticky top-[84px] z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search packages…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 flex-nowrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-full transition-all ${
                    activeCategory === cat ? "bg-amber-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="w-12 h-12 text-slate-200 mx-auto mb-4" />
              <div className="text-slate-500 font-semibold">No products match your search.</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((p) => (
                <div key={p.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-amber-200 transition-all hover:-translate-y-0.5 flex flex-col group">
                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full inline-block w-fit mb-3">{p.category}</div>
                    <h3 className="font-bold text-slate-900 mb-1 group-hover:text-amber-700 transition-colors">{p.name}</h3>
                    <div className="text-xs text-slate-400 font-medium mb-2">{p.forWho}</div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                    <div className="space-y-1 mb-4">
                      {p.includes.slice(0, 3).map((inc) => (
                        <div key={inc} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" /> {inc}
                        </div>
                      ))}
                      {p.includes.length > 3 && <div className="text-xs text-slate-400 pl-5">+{p.includes.length - 3} more</div>}
                    </div>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="font-extrabold text-slate-900">{p.price}</span>
                      <div className="flex items-center gap-1 text-xs text-slate-400"><Clock className="w-3 h-3" /> {p.timeline}</div>
                    </div>
                    <Link to={`/marketplace/product/${p.id}`} className="inline-flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm py-2.5 px-4 rounded-xl transition-all">
                      View Package <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ShoppingBag className="w-12 h-12 text-amber-400 mx-auto mb-5" />
          <h2 className="text-3xl font-extrabold mb-4">Need something bespoke?</h2>
          <p className="text-slate-300 mb-8">If you don't see exactly what you need, contact us — we can scope a custom package for your business.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
            Enquire About a Custom Package <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
