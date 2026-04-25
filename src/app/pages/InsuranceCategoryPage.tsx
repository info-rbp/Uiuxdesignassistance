import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTABanner } from "../components/CTABanner";
import { 
  FinanceCategoryHero, 
  FinanceCardGrid, 
  FinanceFAQSection, 
  FinanceDisclaimer, 
  FinanceResourceLinks 
} from "../components/finance/FinanceShared";
import { InsuranceQuoteModal } from "../components/finance/insurance/InsuranceQuoteModal";
import { INSURANCE_CATEGORIES, INSURANCE_POLICIES } from "../data/financeData";
import { ArrowRight, ChevronRight, Info, ShieldCheck, CheckCircle2 } from "lucide-react";

export function InsuranceCategoryPage() {
  const { categorySlug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const category = INSURANCE_CATEGORIES.find(c => c.slug === categorySlug);
  const policies = INSURANCE_POLICIES.filter(p => p.categorySlug === categorySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center bg-white p-16 rounded-[3rem] shadow-xl border border-slate-200">
          <h1 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Category Not Found</h1>
          <Link to="/finance/insurance" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl">
            Back to Insurance Hub
          </Link>
        </div>
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <FinanceCategoryHero
        title={category.name}
        subtitle={category.description}
        badge="Insurance Category"
        breadcrumb={category.name}
        image="https://images.unsplash.com/photo-1507679799987-c7117796264d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc3MDkzMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
        ctaPrimary={{ label: "Get A Quote", href: "#quote" }}
        ctaSecondary={{ label: "Explore Policies", href: "#policies" }}
      />

      {/* Category Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-100">
                            <Icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight italic">Protecting your <span className="text-emerald-700">{category.name}</span></h2>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">
                        The {category.name} suite of insurance products is designed to address the specific risks in this area of business operation. From statutory obligations to professional services, we help you understand the protection available.
                    </p>
                    <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 flex items-start gap-4">
                        <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2">Why this matters.</h4>
                            <p className="text-sm text-slate-500 italic">Effective risk management starts with understanding which {category.name} covers are generally recommended for your industry and business size.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[400px] flex-shrink-0">
                    <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl pointer-events-none" />
                        <h3 className="text-2xl font-black mb-4 italic">Ready to review?</h3>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">Request a callback to discuss all policies within the {category.name} group.</p>
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="w-full bg-emerald-500 text-white py-4 rounded-2xl font-black hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20"
                        >
                            Get A Group Quote
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-24 bg-slate-50" id="policies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Available <span className="text-blue-700">Policies</span></h2>
            <p className="text-slate-500 italic mt-4 text-lg">Detailed educational overviews for each policy in this category.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((policy) => {
                const PolicyIcon = policy.icon || ShieldCheck;
                return (
                    <div key={policy.slug} className="group bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-blue-300 hover:shadow-2xl transition-all flex flex-col h-full">
                        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 border border-emerald-100 group-hover:scale-110 transition-transform">
                            <PolicyIcon className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-700 transition-colors uppercase tracking-tight">{policy.name}</h3>
                        <p className="text-slate-600 text-sm italic leading-relaxed mb-8 flex-grow">{policy.summary}</p>
                        <div className="space-y-4 mb-10 pt-6 border-t border-slate-50">
                            {policy.generally_covers.slice(0, 2).map((item, i) => (
                                <div key={i} className="flex items-start gap-2 text-[11px] font-bold text-slate-500 italic">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-between">
                            <Link to={`/finance/insurance/${policy.slug}`} className="font-black text-[10px] text-blue-600 uppercase tracking-widest flex items-center gap-2 hover:underline underline-offset-4">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </Link>
                            <button onClick={() => setIsModalOpen(true)} className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-emerald-600 transition-colors">
                                Quote
                            </button>
                        </div>
                    </div>
                );
            })}
          </div>
        </div>
      </section>

      <FinanceFAQSection faqs={[
          { q: "How do I know which liability policies I need?", a: "Start with Public Liability if you interact with the public. PI is for advice, and Management Liability is for company governance and employment risks." }
      ]} />
      
      <FinanceResourceLinks resources={[]} />

      <FinanceDisclaimer type="insurance" />

      <CTABanner />
      <Footer />

      <InsuranceQuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialPolicy={`${category.name} Group Enquiry`}
      />
    </div>
  );
}
