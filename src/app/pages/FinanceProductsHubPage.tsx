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
import { FundingEnquiryModal } from "../components/finance/funding/FundingEnquiryModal";
import { FUNDING_CATEGORIES, FUNDING_PRODUCTS } from "../data/financeData";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  ExternalLink,
  Info,
  Search,
  Layers,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  TrendingUp,
  Target,
  FileText
} from "lucide-react";
import { Link } from "react-router";

export function FinanceProductsHubPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Core featured products
  const featuredSlugs = [
    "business-loans", 
    "working-capital-finance", 
    "equipment-finance", 
    "invoice-finance", 
    "commercial-property-finance", 
    "first-home-buyer-loans", 
    "refinance-home-loans"
  ];
  const featuredProducts = FUNDING_PRODUCTS.filter(p => featuredSlugs.includes(p.slug));

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <FinanceCategoryHero
        title="Finance Products & Funding Discovery"
        subtitle="Understand common business finance and home loan products. Explore plain-English guides across major funding categories and connect with specialist pathways."
        badge="Finance Center"
        breadcrumb="Funding Products"
        image="https://images.unsplash.com/photo-1542744173-8e7e5141b2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc3NzA5MzE4MHww&ixlib=rb-4.1.0&q=80&w=1080"
        ctaPrimary={{ label: "Discuss Funding Today", href: "#enquiry" }}
        ctaSecondary={{ label: "Explore Categories", href: "#categories" }}
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
                        The Right Funding, for the Right <span className="text-blue-700">Purpose.</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed italic mb-10">
                        Choosing a finance product starts with understanding the funding purpose. Our discovery hub provides educational overviews of common business finance and home loan structures, helping you understand how different products generally work before you start your next application.
                    </p>
                    <div className="flex items-center gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                        <Info className="w-6 h-6 text-blue-600 flex-shrink-0" />
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.15em] leading-loose">
                            Non-Advisory Center: General information purpose only. No credit advice provided.
                        </p>
                    </div>
                </div>
                <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl pointer-events-none" />
                        <TrendingUp className="w-10 h-10 mb-6 text-blue-400" />
                        <h4 className="text-xl font-bold mb-2">Build Readiness</h4>
                        <p className="text-slate-400 text-sm italic font-medium leading-relaxed">Understand what lenders typically consider before starting your discussion.</p>
                    </div>
                    <div className="p-10 bg-blue-600 rounded-[2.5rem] text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl pointer-events-none" />
                        <Search className="w-10 h-10 mb-6 text-blue-300" />
                        <h4 className="text-xl font-bold mb-2">Detailed Guides</h4>
                        <p className="text-blue-100 text-sm italic font-medium leading-relaxed">40+ funding products explained with use cases and checklists.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Finance Category Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100" id="categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Finance <span className="text-blue-700">Categories</span></h2>
                <p className="text-slate-500 italic mt-4 text-lg">Browse available funding products by their primary business or personal use.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {FUNDING_CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    return (
                        <Link 
                            key={cat.slug} 
                            to={`/finance/products/cat/${cat.slug}`}
                            className="bg-white border border-slate-200 rounded-[2.5rem] p-10 hover:border-blue-400 hover:shadow-2xl transition-all group flex flex-col h-full"
                        >
                            <div className="w-14 h-14 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-700 transition-colors uppercase tracking-tight">{cat.name}</h3>
                            <p className="text-slate-600 text-sm italic leading-relaxed mb-8 flex-grow">{cat.summary}</p>
                            
                            <div className="flex items-center gap-2 flex-wrap mb-10 opacity-60">
                                {cat.featuredPolicies.slice(0, 2).map(fps => (
                                    <span key={fps} className="text-[9px] font-black uppercase tracking-widest bg-slate-100 px-2 py-1 rounded-md">{fps.split("-").join(" ")}</span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-6 border-t border-slate-50 font-black text-[10px] text-blue-600 uppercase tracking-widest group-hover:gap-4 transition-all">
                                EXPLORE CATEGORY <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    );
                })}
                {/* Special Callout */}
                <div className="bg-blue-600 rounded-[2.5rem] p-10 flex flex-col justify-center text-white shadow-2xl shadow-blue-600/30">
                    <h3 className="text-2xl font-black mb-4 italic tracking-tight">Need a funding review?</h3>
                    <p className="text-blue-100 text-sm mb-10 italic leading-relaxed">Let us help you understand which finance products generally suit your current requirements.</p>
                    <button onClick={() => setIsModalOpen(true)} className="w-full bg-slate-900 hover:bg-black text-white font-black py-4 rounded-2xl transition-all shadow-xl">
                        Discuss Funding
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* 4. Featured Products Section */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                <div className="max-w-2xl">
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight italic">Popular <span className="text-blue-700">Finance Products</span></h2>
                    <p className="text-slate-500 italic mt-4 text-lg">Detailed educational overviews for the most common funding structures.</p>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-slate-100 px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-all text-sm">
                    Discuss Options <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((p) => {
                    return (
                        <Link key={p.slug} to={`/finance/products/${p.slug}`} className="group p-8 border border-slate-200 rounded-3xl hover:bg-slate-50 transition-all">
                             <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                 <FileText className="w-5 h-5" />
                             </div>
                             <h4 className="text-lg font-black text-slate-900 mb-4 group-hover:text-blue-700 transition-colors uppercase tracking-tight">{p.name}</h4>
                             <p className="text-slate-500 text-xs italic mb-8 line-clamp-3 leading-relaxed">{p.summary}</p>
                             <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] flex items-center gap-2 transition-all">
                                VIEW GUIDE <ChevronRight className="w-3.5 h-3.5" />
                             </div>
                        </Link>
                    );
                })}
            </div>
          </div>
      </section>

      {/* 5. How to Approach Finance */}
      <section className="py-24 bg-slate-50 text-slate-900 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-black mb-4 tracking-tight italic uppercase tracking-widest">The Funding <span className="text-blue-700">Discovery Path</span></h2>
              <p className="text-slate-500 italic mb-16 max-w-2xl mx-auto">Follow these practical steps to evaluate your current funding needs and readiness.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                      { icon: Target, label: "Identify Purpose", desc: "Clearly define what the funds will be used for." },
                      { icon: Layers, label: "Review Products", desc: "Match your purpose to common finance structures." },
                      { icon: Search, label: "Gather Information", desc: "Compile latest financials and relevant documents." },
                      { icon: ShieldCheck, label: "Review Readiness", desc: "Assess serviceability and credit health." },
                      { icon: Zap, label: "Discuss Options", desc: "Connect with a specialist for a formal review." }
                  ].map((step, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-[2rem] p-10 hover:border-blue-400 hover:shadow-xl transition-all group text-center">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/20 font-black text-xl group-hover:scale-110 transition-transform">
                              {i + 1}
                          </div>
                          <h4 className="text-sm font-black uppercase tracking-widest mb-4 group-hover:text-blue-700 transition-colors">{step.label}</h4>
                          <p className="text-xs text-slate-500 italic font-medium leading-relaxed">{step.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 6. Enquire CTA Section */}
      <section className="py-24" id="enquiry">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-blue-600/5 backdrop-blur-3xl" />
               <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight italic">Discuss Funding <span className="text-blue-500">Today</span></h2>
                  <p className="text-slate-400 text-lg md:text-xl mb-12 font-medium italic leading-relaxed">
                    Start your funding discussion. Submit your requirements and business details to receive a specialist callback within 48 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                     <button 
                        onClick={() => setIsModalOpen(true)}
                        className="w-full sm:w-auto bg-blue-600 text-white px-16 py-6 rounded-2xl font-black text-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/20"
                     >
                        Discuss Funding Today
                     </button>
                     <Link 
                        to="/finance"
                        className="inline-flex items-center gap-2 font-black text-xl text-white hover:underline underline-offset-8"
                     >
                        Back to Finance Hub <ArrowRight className="w-6 h-6" />
                     </Link>
                  </div>
                  <p className="mt-16 text-slate-500 text-[10px] uppercase font-black tracking-[0.3em] italic flex items-center justify-center gap-3">
                     <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 48-Hour Specialist Handoff
                  </p>
               </div>
            </div>
         </div>
      </section>

      <FinanceFAQSection faqs={[
          { q: "What documents are usually needed?", a: "Lenders commonly review latest financials, bank statements, and tax portals to assess serviceability." },
          { q: "How long does funding discovery take?", a: "Initial reviews can often be done within 48 to 72 hours of receiving complete information." }
      ]} />
      
      <FinanceResourceLinks resources={[]} />

      <FinanceDisclaimer type="funding" />

      <CTABanner />
      <Footer />

      <FundingEnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialProduct="General Finance Products Hub Enquiry"
      />
    </div>
  );
}
