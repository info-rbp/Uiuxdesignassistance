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
  InsurancePolicySnapshot, 
  InsuranceScenarioSection, 
  InsuranceCostFactors, 
  InsuranceRelatedPolicies 
} from "../components/finance/insurance/InsuranceComponents";
import { InsuranceQuoteModal } from "../components/finance/insurance/InsuranceQuoteModal";
import { INSURANCE_POLICIES, INSURANCE_CATEGORIES } from "../data/financeData";
import { 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Package,
  Info,
  Building2,
  CheckCircle2
} from "lucide-react";

export function InsurancePolicyPage() {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const policy = INSURANCE_POLICIES.find(p => p.slug === slug);
  const category = INSURANCE_CATEGORIES.find(c => c.slug === policy?.categorySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!policy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center bg-white p-16 rounded-[4rem] shadow-xl border border-slate-200">
          <h1 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Policy Detailed Overview Found</h1>
          <p className="text-slate-500 mb-10 italic">The policy details are being updated. Check back soon.</p>
          <Link to="/finance/insurance" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl">
            Back to Hub
          </Link>
        </div>
      </div>
    );
  }

  const Icon = policy.status_icon || ShieldCheck;
  const relatedPolicies = INSURANCE_POLICIES.filter(p => p.categorySlug === policy.categorySlug && p.slug !== policy.slug).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165205744-3b78555e5572?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMGRvY3VtZW50cyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzcwOTMxODB8MA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt={policy.name} 
            className="w-full h-full object-cover opacity-10" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent lg:bg-gradient-to-r lg:from-slate-900 lg:to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
             <div className="flex flex-wrap items-center gap-2 mb-10">
                <Link to="/finance" className="text-white/40 text-[10px] font-black tracking-[0.2em] uppercase hover:text-blue-400 transition-colors">Finance Center</Link>
                <ChevronRight className="w-3 h-3 text-white/20" />
                <Link to="/finance/insurance" className="text-white/40 text-[10px] font-black tracking-[0.2em] uppercase hover:text-emerald-400 transition-colors">Insurance</Link>
                {category && (
                    <>
                        <ChevronRight className="w-3 h-3 text-white/20" />
                        <Link to={`/finance/insurance/cat/${category.slug}`} className="text-white/40 text-[10px] font-black tracking-[0.2em] uppercase hover:text-blue-400 transition-colors">{category.name}</Link>
                    </>
                )}
             </div>
             
             <h1 className="text-5xl lg:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9] italic">
               {policy.name}
             </h1>

             <p className="text-slate-300 text-xl lg:text-2xl mb-12 leading-relaxed font-medium italic opacity-90 max-w-3xl">
               {policy.fullDescription}
             </p>
             
             <div className="flex flex-col sm:flex-row items-center gap-4">
               <button
                 onClick={() => setIsModalOpen(true)}
                 className="w-full sm:w-auto bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-blue-900/40 hover:bg-blue-700 flex items-center justify-center gap-3"
               >
                 Get A Quote <ArrowRight className="w-5 h-5" />
               </button>
               <a
                 href="https://www.bizcover.com.au/?advisor=rbp"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-black text-xl transition-all text-center flex items-center justify-center gap-3"
               >
                 Compare Quotes Online <ExternalLink className="w-5 h-5 opacity-60" />
               </a>
             </div>
             
             <div className="mt-12 flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl max-w-xl">
                <Info className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-white/40 text-[10px] uppercase font-black tracking-widest leading-snug">
                  Non-Advisory Center: General Information Purposes Only.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Snapshot Strip */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InsurancePolicySnapshot policy={policy} />
          
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Executive Summary</h2>
            <p className="text-slate-900 text-2xl lg:text-3xl font-black italic tracking-tight leading-tight">
                {policy.summary}
            </p>
          </div>
        </div>
      </section>

      {/* 3 & 4. Covers & Exclusions */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* What it typically covers */}
            <div className="space-y-12">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white text-emerald-600 rounded-[1.5rem] flex items-center justify-center shadow-xl border border-emerald-100 flex-shrink-0">
                        <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 tracking-tight italic">Generally <span className="text-emerald-600">Covers</span></h3>
                </div>
                <div className="space-y-4">
                    {policy.generally_covers.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-slate-200 hover:border-emerald-200 transition-colors shadow-sm">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                        <span className="text-slate-800 font-bold italic text-lg leading-snug">{item}</span>
                      </div>
                    ))}
                </div>
            </div>

            {/* Common Exclusions */}
            <div className="space-y-12">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white text-rose-500 rounded-[1.5rem] flex items-center justify-center shadow-xl border border-rose-100 flex-shrink-0">
                        <XCircle className="w-9 h-9" />
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 tracking-tight italic">Common <span className="text-rose-500">Exclusions</span></h3>
                </div>
                <div className="space-y-4">
                    {policy.exclusions.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-slate-200 hover:border-rose-200 transition-colors shadow-sm opacity-90">
                        <span className="w-2 h-2 bg-rose-400 rounded-full flex-shrink-0" />
                        <span className="text-slate-600 font-bold italic text-lg leading-snug">{item}</span>
                      </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 & 6. Industries & Scenarios */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
              <div className="w-full lg:w-1/3">
                  <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter leading-none italic uppercase">Who identifies <span className="text-blue-700">relevance?</span></h2>
                  <p className="text-slate-500 italic mb-10">This cover is commonly explored by businesses in the following sectors:</p>
                  <div className="flex flex-wrap gap-3">
                      {policy.relevantFor.map(r => (
                          <span key={r} className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-2xl font-black text-xs text-slate-600 uppercase tracking-widest italic">{r}</span>
                      ))}
                  </div>
              </div>
              <div className="flex-grow">
                  <h3 className="text-2xl font-black text-slate-400 uppercase tracking-[0.2em] mb-12">Claims Scenarios</h3>
                  <InsuranceScenarioSection scenarios={policy.scenarios} />
              </div>
          </div>
        </div>
      </section>

      {/* 7. Cost Factors */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <InsuranceCostFactors factors={policy.costFactors} />
        </div>
      </section>

      {/* 8. Related Policies */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-end justify-between mb-16">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight italic">Explore <span className="text-blue-700">Other Covers</span></h2>
              <Link to="/finance/insurance" className="text-blue-700 font-bold hover:underline mb-2 flex items-center gap-2">View Hub <ArrowRight className="w-4 h-4" /></Link>
           </div>
           <InsuranceRelatedPolicies policies={relatedPolicies} />
        </div>
      </section>

      {/* 9. Quote CTA Block */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-blue-500 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
             </div>
             <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter italic capitalize">Review your <span className="text-blue-400">{policy.name}</span> Needs</h2>
                <p className="text-slate-400 text-xl lg:text-2xl mb-16 font-medium italic leading-relaxed opacity-80">
                  Submit a request for a specialist review. Upload your existing policy or provide your requirements to receive a callback within 48 hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                   <button 
                      onClick={() => setIsModalOpen(true)}
                      className="w-full sm:w-auto bg-blue-600 text-white px-16 py-6 rounded-3xl font-black text-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30"
                   >
                      Get A Quote Review
                   </button>
                   <Link 
                      to="/finance/insurance"
                      className="inline-flex items-center gap-2 font-black text-xl text-white hover:underline underline-offset-8"
                   >
                      Browse All Categories <ArrowRight className="w-6 h-6" />
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      <FinanceFAQSection faqs={policy.faq} />

      <FinanceResourceLinks resources={[]} />

      <FinanceDisclaimer type="insurance" />

      <CTABanner />
      <Footer />

      <InsuranceQuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialPolicy={policy.name}
      />
    </div>
  );
}
