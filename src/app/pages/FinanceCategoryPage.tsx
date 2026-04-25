import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTABanner } from "../components/CTABanner";
import { 
  FinanceCategoryHero, 
  FinanceFAQSection, 
  FinanceDisclaimer, 
  FinanceResourceLinks 
} from "../components/finance/FinanceShared";
import { FundingEnquiryModal } from "../components/finance/funding/FundingEnquiryModal";
import { FUNDING_CATEGORIES, FUNDING_PRODUCTS } from "../data/financeData";
import { ArrowRight, ChevronRight, Info, CheckCircle2, FileText, ClipboardList } from "lucide-react";

export function FinanceCategoryPage() {
  const { categorySlug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const category = FUNDING_CATEGORIES.find(c => c.slug === categorySlug);
  const products = FUNDING_PRODUCTS.filter(p => p.categorySlug === categorySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center bg-white p-16 rounded-[4rem] shadow-xl border border-slate-200">
          <h1 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Category Not Found</h1>
          <Link to="/finance/products" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl">
            Back to Products Hub
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
        badge="Finance Category"
        breadcrumb={category.name}
        image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc3MDkzMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
        ctaPrimary={{ label: "Discuss Funding Today", href: "#enquiry" }}
        ctaSecondary={{ label: "Explore Products", href: "#products" }}
      />

      {/* Category Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 shadow-sm">
                            <Icon className="w-7 h-7 text-blue-600" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight italic uppercase">Discovery Point: <span className="text-blue-700">{category.name}</span></h2>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed mb-10 italic font-medium">
                        Explore the variety of financing options available within the {category.name} category. These products are generally used to address specific business benchmarks, lifecycle stages, or asset requirements.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                         <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 italic">
                            <span className="text-[10px] font-black text-blue-600/50 uppercase tracking-[0.2em] mb-4 block">Key Focus</span>
                            <h4 className="font-black text-slate-900 mb-2">Identify Solution</h4>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium transition-all group-hover:pl-4">Understand which product structure aligns with your current funding purpose.</p>
                         </div>
                         <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 italic">
                            <span className="text-[10px] font-black text-blue-600/50 uppercase tracking-[0.2em] mb-4 block">Preparation</span>
                            <h4 className="font-black text-slate-900 mb-2">Review Readiness</h4>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium transition-all group-hover:pl-4">Explore what lenders commonly consider when evaluating this category of finance.</p>
                         </div>
                    </div>
                </div>
                <div className="w-full lg:w-[450px] flex-shrink-0">
                    <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] pointer-events-none" />
                        <h3 className="text-3xl font-black mb-6 italic tracking-tight leading-tight">Discuss this <span className="text-blue-500">Category.</span></h3>
                        <p className="text-slate-400 mb-10 italic font-medium leading-relaxed">Request a funding discovery discussion across all products in the {category.name} category.</p>
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
                        >
                            Discuss Funding
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase tracking-widest">Available <span className="text-blue-700">Products</span></h2>
            <p className="text-slate-500 italic mt-6 text-lg">Detailed educational overviews for each funding structure in this category.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
                return (
                    <div key={product.slug} className="group bg-white border border-slate-200 rounded-[2.5rem] p-10 hover:border-blue-400 hover:shadow-2xl transition-all flex flex-col h-full overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-10 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                            <FileText className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-700 transition-colors uppercase tracking-tight leading-tight">{product.name}</h3>
                        <p className="text-slate-500 text-sm italic leading-relaxed mb-10 flex-grow">{product.summary}</p>
                        
                        <div className="mb-12 space-y-4 pt-8 border-t border-slate-50">
                            {product.how_it_works?.slice(0, 2).map((item: string, i: number) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
                            <Link to={`/finance/products/${product.slug}`} className="font-black text-[10px] text-blue-600 uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                                View Guide <ArrowRight className="w-4 h-4" />
                            </Link>
                            <button onClick={() => setIsModalOpen(true)} className="text-[10px] font-black text-slate-300 uppercase tracking-widest hover:text-blue-600 transition-colors">
                                ENQUIRE
                            </button>
                        </div>
                    </div>
                );
            })}
          </div>
        </div>
      </section>

      <FinanceFAQSection faqs={[
          { q: "How do I choose the right product?", a: "Start by defining your funding purpose. Different structures are designed for debt consolidation, growth, or asset acquisition." },
          { q: "Are rates fixed or variable?", a: "This depends entirely on the product chosen and the lender's current market offerings." }
      ]} />
      
      <FinanceResourceLinks resources={[]} />

      <FinanceDisclaimer type="funding" />

      <CTABanner />
      <Footer />

      <FundingEnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialProduct={`${category.name} Category Discovery Enquiry`}
      />
    </div>
  );
}
