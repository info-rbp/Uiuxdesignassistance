import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTABanner } from "../components/CTABanner";
import { 
  FinanceFAQSection, 
  FinanceDisclaimer, 
  FinanceResourceLinks 
} from "../components/finance/FinanceShared";
import { 
  FinanceSnapshot, 
  FinanceHowItWorksSection, 
  FinanceReadinessSection, 
  FinanceDocumentsSection,
  FinanceRelatedProducts 
} from "../components/finance/funding/FinanceComponents";
import { FundingEnquiryModal } from "../components/finance/funding/FundingEnquiryModal";
import { FUNDING_PRODUCTS, FUNDING_CATEGORIES } from "../data/financeData";
import { 
  ArrowRight, 
  ExternalLink,
  ChevronRight,
  Info,
  CheckCircle2,
  FileText,
  Target,
  ShieldCheck,
  TrendingUp,
  Landmark
} from "lucide-react";

export function FinanceProductPage() {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const product = FUNDING_PRODUCTS.find(p => p.slug === slug);
  const category = FUNDING_CATEGORIES.find(c => c.slug === product?.categorySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center bg-white p-16 rounded-[4rem] shadow-xl border border-slate-200">
          <h1 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Product Not Found</h1>
          <p className="text-slate-500 mb-10 italic">This content is currently being updated. Please check back soon.</p>
          <Link to="/finance/products" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl">
            Back to Products Hub
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = FUNDING_PRODUCTS.filter(p => p.categorySlug === product.categorySlug && p.slug !== product.slug).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGZpbmFuY2UlMjBjaGFydHMlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc3MDkzMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt={product.name} 
            className="w-full h-full object-cover opacity-[0.03] grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
             <div className="flex flex-wrap items-center gap-2 mb-12">
                <Link to="/finance" className="text-slate-400 text-[10px] font-black tracking-[0.2em] uppercase hover:text-blue-600 transition-colors">Finance Center</Link>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <Link to="/finance/products" className="text-slate-400 text-[10px] font-black tracking-[0.2em] uppercase hover:text-blue-600 transition-colors">Products</Link>
                {category && (
                    <>
                        <ChevronRight className="w-3 h-3 text-slate-300" />
                        <Link to={`/finance/products/cat/${category.slug}`} className="text-blue-600 text-[10px] font-black tracking-[0.2em] uppercase">{category.name}</Link>
                    </>
                )}
             </div>
             
             <h1 className="text-5xl lg:text-9xl font-black text-slate-900 mb-12 tracking-tighter leading-[0.8] italic uppercase">
               {product.name}
             </h1>

             <p className="text-slate-600 text-xl lg:text-3xl mb-16 leading-tight font-medium italic opacity-90 max-w-3xl border-l-[6px] border-blue-600 pl-8">
               {product.fullDescription}
             </p>
             
             <div className="flex flex-col sm:flex-row items-center gap-6">
               <button
                 onClick={() => setIsModalOpen(true)}
                 className="w-full sm:w-auto bg-blue-600 text-white px-16 py-6 rounded-3xl font-black text-2xl transition-all shadow-2xl shadow-blue-500/30 hover:bg-blue-700 flex items-center justify-center gap-4"
               >
                 Discuss Funding <ArrowRight className="w-6 h-6" />
               </button>
               <Link
                 to="/finance/products"
                 className="w-full sm:w-auto bg-slate-900 text-white px-16 py-6 rounded-3xl font-black text-2xl transition-all shadow-xl hover:bg-black text-center"
               >
                 Explore Categories
               </Link>
             </div>
             
             <div className="mt-16 flex items-center gap-4 p-6 bg-blue-50 border border-blue-100 rounded-2xl max-w-2xl">
                <Info className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p className="text-slate-500 text-[11px] uppercase font-black tracking-[0.2em] leading-relaxed">
                  Notice: General information only. No credit advice or specific product recommendation provided.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Snapshot Strip */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FinanceSnapshot product={product} />
          
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-black text-slate-400 uppercase tracking-[0.4em] mb-12 italic">The Funding Purpose</h2>
            <p className="text-slate-900 text-3xl lg:text-5xl font-black italic tracking-tighter leading-none mb-12">
                {product.summary}
            </p>
          </div>
        </div>
      </section>

      {/* 3 & 4. How it Works */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight italic uppercase">How it <span className="text-blue-700">Generally Works.</span></h3>
                <p className="text-slate-500 italic mt-6 text-lg">A typical plain-English process for establishing a {product.name} facility.</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl border border-slate-200 text-xs font-black text-slate-400 uppercase tracking-widest">
                Typical Discovery Cycle
            </div>
          </div>
          <FinanceHowItWorksSection steps={product.how_it_works} />
        </div>
      </section>

      {/* 5 & 6. Use Cases & For Who */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
             <div>
                <h3 className="text-3xl font-black text-slate-900 mb-12 italic tracking-tighter uppercase leading-none">Common <br /> <span className="text-blue-700">Use Cases.</span></h3>
                <div className="space-y-6">
                    {product.useCases?.map((u: any, i: number) => (
                        <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all group">
                            <h5 className="font-black text-slate-900 text-xl mb-3 italic group-hover:text-blue-700 transition-colors uppercase tracking-tight">{u.title}</h5>
                            <p className="text-slate-500 italic font-medium leading-relaxed">{u.desc}</p>
                        </div>
                    ))}
                </div>
             </div>
             <div className="lg:pt-24">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-12 italic">Who commonly explores this?</h3>
                <div className="grid grid-cols-1 gap-4">
                    {product.relevantFor?.map((r: string) => (
                        <div key={r} className="flex items-center gap-6 p-6 border border-slate-100 rounded-3xl hover:bg-slate-50 transition-all group">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                <Landmark className="w-6 h-6 text-blue-600 group-hover:text-white" />
                            </div>
                            <span className="font-black text-slate-900 text-lg italic uppercase tracking-tighter">{r}</span>
                        </div>
                    ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. Readiness */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <FinanceReadinessSection factors={product.costFactors} />
        </div>
      </section>

      {/* 8. Documents */}
      <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FinanceDocumentsSection documents={product.documents} />
          </div>
      </section>

      {/* 9. Cost Factors Strip */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                  <h3 className="text-3xl font-black text-slate-900 mb-8 italic uppercase tracking-widest leading-tight">What Generally <span className="text-blue-700">Affects Cost?</span></h3>
                  <p className="text-slate-500 italic leading-relaxed mb-12">Lending costs, including rates and fees, are influenced by a combination of business and personal factors.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {["Credit Profile", "Annual Turnover", "Serviceability Ratios", "Lender Risk Appetite"].map(f => (
                          <div key={f} className="flex items-center gap-4">
                              <CheckCircle2 className="w-5 h-5 text-blue-600" />
                              <span className="font-black text-slate-900 italic uppercase text-xs tracking-widest">{f}</span>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* 10. Related Products */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-end justify-between mb-20">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight italic uppercase tracking-widest">Related <span className="text-blue-700">Funding</span></h2>
              <Link to="/finance/products" className="text-blue-600 font-bold hover:underline mb-2 flex items-center gap-2 uppercase text-xs tracking-widest">All Products <ArrowRight className="w-4 h-4" /></Link>
           </div>
           <FinanceRelatedProducts products={relatedProducts} />
        </div>
      </section>

      {/* 11. Enquire CTA Block */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-blue-600 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
             </div>
             <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter italic capitalize leading-none uppercase">Discuss <span className="text-blue-500">{product.name}</span> Today.</h2>
                <p className="text-slate-400 text-xl lg:text-2xl mb-16 font-medium italic leading-relaxed opacity-80">
                   Submit your requirements to start a 48-hour discovery cycle. Share your business profile to understand which lenders generally provide {product.name} facilities.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                   <button 
                      onClick={() => setIsModalOpen(true)}
                      className="w-full sm:w-auto bg-blue-600 text-white px-20 py-7 rounded-3xl font-black text-3xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/40"
                   >
                      Discuss Funding Today
                   </button>
                   <Link 
                      to="/finance/products" 
                      className="inline-flex items-center gap-2 font-black text-2xl text-white hover:underline underline-offset-8"
                   >
                      Browse Categories <ArrowRight className="w-8 h-8" />
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      <FinanceFAQSection faqs={product.faq} />

      <FinanceResourceLinks resources={[]} />

      <FinanceDisclaimer type="funding" />

      <CTABanner />
      <Footer />

      <FundingEnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialProduct={product.name}
      />
    </div>
  );
}
