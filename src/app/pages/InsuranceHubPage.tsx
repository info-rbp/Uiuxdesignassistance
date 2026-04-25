import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTABanner } from "../components/CTABanner";
import { 
  FinanceCategoryHero, 
  FinanceFAQSection, 
  FinanceDisclaimer, 
  FinanceResourceLinks,
  ShortFormDisclosure
} from "../components/finance/FinanceShared";
import { InsuranceQuoteModal } from "../components/finance/insurance/InsuranceQuoteModal";
import { INSURANCE_CATEGORIES, INSURANCE_POLICIES } from "../data/financeData";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Info,
  Search,
  Layers,
  GitCompare,
  FileCheck,
  Zap,
  ArrowUpRight
} from "lucide-react";
import { Link } from "react-router";

export function InsuranceHubPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Core featured policies
  const featuredSlugs = ["public-liability", "professional-indemnity", "cyber-insurance", "workers-compensation", "commercial-vehicle", "business-insurance-pack"];
  const featuredPolicies = INSURANCE_POLICIES.filter(p => featuredSlugs.includes(p.slug));

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <FinanceCategoryHero
        title="Small Business Insurance Discovery"
        subtitle="Understand the protection your business needs. Explore plain-English guides across all major insurance categories and connect with expert review pathways."
        badge="Insurance Hub"
        breadcrumb="Insurance Center"
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGZpbmFuY2UlMjBjaGFydHMlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc3MDkzMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
        ctaPrimary={{ label: "Get A Quote Review", href: "#quote" }}
        ctaSecondary={{ label: "Browse Categories", href: "#categories" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
         <div className="max-w-3xl">
            <ShortFormDisclosure variant="compact" />
         </div>
      </div>

      {/* 2. Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-8 italic">
                        Real Protection, Explained in <span className="text-blue-700">Plain English.</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed italic mb-10">
                        Every small business faces unique risks. Our discovery hub is designed to help you identify the cover types that generally respond to those risks. We provide educational overviews, not advisory recommendations, so you can make informed decisions before your next renewal.
                    </p>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                        <Info className="w-6 h-6 text-blue-600 flex-shrink-0" />
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-loose">
                            Non-Advisory Center: General information for small business education.
                        </p>
                    </div>
                </div>
                <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-8 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-500/20">
                        <Zap className="w-10 h-10 mb-6 text-blue-300" />
                        <h4 className="text-xl font-bold mb-2">Identify Areas</h4>
                        <p className="text-blue-100 text-sm italic font-medium">Browse 7 specialized categories to see what's relevant to your industry.</p>
                    </div>
                    <div className="p-8 bg-slate-900 rounded-3xl text-white shadow-xl">
                        <Search className="w-10 h-10 mb-6 text-blue-400" />
                        <h4 className="text-xl font-bold mb-2">Detailed Deep Dives</h4>
                        <p className="text-slate-400 text-sm italic font-medium">30+ products covered with snapshots, scenarios, and exclusions.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Insurance Category Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100" id="categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Insurance <span className="text-blue-700">Categories</span></h2>
                <p className="text-slate-500 italic mt-4 text-lg">Browse cover groups by their primary area of business protection.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {INSURANCE_CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    return (
                        <Link 
                            key={cat.slug} 
                            to={`/finance/insurance/cat/${cat.slug}`}
                            className="bg-white border border-slate-200 rounded-[2.5rem] p-10 hover:border-blue-400 hover:shadow-2xl transition-all group flex flex-col h-full"
                        >
                            <div className="w-14 h-14 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-700 transition-colors">{cat.name}</h3>
                            <p className="text-slate-600 text-sm italic leading-relaxed mb-8 flex-grow">{cat.summary}</p>
                            
                            <div className="flex items-center gap-2 flex-wrap mb-10 opacity-60">
                                {cat.featuredPolicies.slice(0, 2).map(fps => (
                                    <span key={fps} className="text-[9px] font-black uppercase tracking-widest bg-slate-100 px-2 py-1 rounded-md">{fps.split("-").join(" ")}</span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-6 border-t border-slate-50 font-black text-[10px] text-blue-600 uppercase tracking-widest">
                                EXPLORE CATEGORY <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    );
                })}
                {/* Special Callout */}
                <div className="bg-slate-900 rounded-[2.5rem] p-10 flex flex-col justify-center text-white">
                    <h3 className="text-2xl font-black mb-4 italic">Not sure?</h3>
                    <p className="text-slate-400 text-sm mb-10 italic leading-relaxed">Let our team help you identify the core coverages recommended for your unique business model.</p>
                    <button onClick={() => setIsModalOpen(true)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-blue-500/20">
                        Start Enquiry
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* 4. Featured Policies Section */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 text-center md:text-left">
                <div className="max-w-2xl">
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight italic">Common <span className="text-blue-700">Small Business Policies</span></h2>
                    <p className="text-slate-500 italic mt-4 text-lg">Every business is different, but these are the policy types most frequently explored by our members.</p>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-slate-100 px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-all text-sm">
                    Get Group Quote <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPolicies.map((p) => {
                    const Icon = p.icon || ShieldCheck;
                    return (
                        <Link key={p.slug} to={`/finance/insurance/${p.slug}`} className="group p-8 border border-slate-200 rounded-3xl hover:bg-slate-900 transition-all duration-500">
                             <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-400 transition-all">
                                 <Icon className="w-5 h-5" />
                             </div>
                             <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-white transition-colors">{p.name}</h4>
                             <p className="text-slate-500 text-sm italic group-hover:text-slate-400 mb-8 transition-colors">{p.summary}</p>
                             <div className="text-[10px] font-black text-blue-600 group-hover:text-blue-400 uppercase tracking-[0.2em] flex items-center gap-2 transition-all">
                                LEARN MORE <ChevronRight className="w-3.5 h-3.5" />
                             </div>
                        </Link>
                    );
                })}
            </div>
          </div>
      </section>

      {/* 5. How to Approach Insurance */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-blue-500 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <h2 className="text-4xl font-black mb-4 tracking-tight italic">The Pathway to <span className="text-blue-400">Protection</span></h2>
              <p className="text-slate-400 italic mb-16 max-w-2xl mx-auto">Follow our recommended practical steps to evaluate your business risk profile.</p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {[
                      { icon: Search, label: "Identify Activities", desc: "List current business tasks." },
                      { icon: Layers, label: "Understand Risk", desc: "Consider what could fail." },
                      { icon: ShieldCheck, label: "Review Covers", desc: "Match risks to policy types." },
                      { icon: GitCompare, label: "Gather Quotes", desc: "Compare terms and pricing." },
                      { icon: FileCheck, label: "Formal Review", desc: "Finalize with a specialist." }
                  ].map((step, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group">
                          <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 font-black text-xl border border-blue-400/20 group-hover:scale-110 transition-transform">
                              {i + 1}
                          </div>
                          <h4 className="text-xs font-black uppercase tracking-widest mb-3">{step.label}</h4>
                          <p className="text-[10px] text-slate-500 italic font-medium leading-relaxed">{step.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 6. Quote CTA Section */}
      <section className="py-24" id="quote">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
               <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Expert Quote <span className="text-slate-900">Review</span></h2>
                  <p className="text-blue-100 text-lg md:text-xl mb-12 font-medium italic">
                    Request a specialist review of your requirements. Upload your existing policy for a direct comparison or start fresh with a new discovery enquiry.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                     <button 
                        onClick={() => setIsModalOpen(true)}
                        className="w-full sm:w-auto bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-black transition-all shadow-2xl"
                     >
                        Get A Quote
                     </button>
                     <a 
                        href="https://www.bizcover.com.au/?advisor=rbp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-black text-xl text-white hover:underline underline-offset-8 decoration-2"
                     >
                        Compare Quotes Online <ExternalLink className="w-5 h-5" />
                     </a>
                  </div>
                  <p className="mt-12 text-blue-900/50 text-[10px] uppercase font-black tracking-[0.3em] italic flex items-center justify-center gap-2">
                     <CheckCircle2 className="w-4 h-4" /> 48-Hour Specialist Callback
                  </p>
                  <div className="mt-8 max-w-xl mx-auto opacity-70">
                    <ShortFormDisclosure variant="compact" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      <FinanceFAQSection faqs={[
          { q: "What should I prepare for a quote?", a: "Have your ABN, annual turnover, staff numbers, and any current policy documents ready." },
          { q: "Is every policy legally required?", a: "Workers Comp is usually mandatory. Others are highly recommended based on industry risks." }
      ]} />
      
      <FinanceResourceLinks resources={[]} />

      <FinanceDisclaimer type="insurance" />

      <CTABanner />
      <Footer />

      <InsuranceQuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialPolicy="General Insurance Hub Request"
      />
    </div>
  );
}
