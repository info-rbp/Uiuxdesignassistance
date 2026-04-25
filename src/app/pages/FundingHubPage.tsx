import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTABanner } from "../components/CTABanner";
import { 
  FinanceCategoryHero, 
  FinanceCardGrid, 
  FinanceFAQSection, 
  FinanceDisclaimer, 
  FinanceResourceLinks, 
  FinanceCTASection 
} from "../components/finance/FinanceShared";
import { FUNDING_PRODUCTS } from "../data/financeData";
import { 
  CheckCircle, 
  Wallet, 
  Search, 
  LineChart, 
  ArrowUpRight 
} from "lucide-react";

export function FundingHubPage() {
  const faqs = [
    {
      q: "What are common business funding products?",
      a: "The most common include Working Capital loans, Equipment Finance, and Vehicle Finance. For cash flow, businesses often use Invoice Finance or Lines of Credit."
    },
    {
      q: "How do businesses usually use funding?",
      a: "Funding is typically used to manage cash flow gaps, purchase assets like vehicles or machinery, or to fuel growth through expansion projects and marketing."
    },
    {
      q: "What do lenders commonly look at?",
      a: "Lenders generally review your business performance (revenue and profit), time in operation, credit history, and the specific purpose of the loan."
    },
    {
      q: "What documents are often required?",
      a: "Common requirements include bank statements (usually via secure data link), financial statements (P&L, Balance Sheet), and director identification."
    },
    {
      q: "What is the next step if I want to explore funding?",
      a: "Start with an enquiry to check your options. We can help you understand which products fit your need and which lenders are most likely to support your requirement."
    }
  ];

  const resources = [
    { title: "The Ultimate Guide to Working Capital", href: "/resources/working-capital-guide" },
    { title: "Equipment Finance vs. Operating Lease", href: "/resources/ef-vs-lease" },
    { title: "Preparing Your Business for a Loan Application", href: "/resources/loan-readiness" },
    { title: "Understanding Interest Rates and Repayments", href: "/resources/finance-costs" }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <FinanceCategoryHero
        title="Business Funding Discovery"
        subtitle="General information for businesses exploring funding options. We help you navigate product types, understand lender requirements, and identify the right path to capital."
        badge="Funding Hub"
        breadcrumb="Funding"
        image="https://images.unsplash.com/photo-1553729459-efe14ef6055d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMGZpbmFuY2UlMjBjaGFydHMlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc3MDkzMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
        ctaPrimary={{ label: "Start Funding Enquiry", href: "/finance/enquiry?type=funding" }}
        ctaSecondary={{ label: "Check Funding Readiness", href: "/finance/calculators/readiness" }}
      />

      {/* Intro Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-slate-50 border border-slate-200 rounded-[3rem] p-12">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-8">
                  <Wallet className="w-8 h-8 text-blue-600" />
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight italic">Category Purpose</h3>
               <p className="text-slate-500 leading-relaxed italic opacity-80">
                 This section helps businesses understand the mechanical differences between various funding products. We focus on educational clarity so you can approach lenders with confidence and context.
               </p>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
                Fueling Growth with <span className="text-blue-700">Strategic Capital.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">
                From equipment upgrades to seizing new market opportunities, the right funding structure makes the difference. We simplify the discovery process by aligning product types with your specific business objectives.
              </p>
              <div className="space-y-4">
                {[
                  "Discover diverse funding products",
                  "Understand typical lender requirements",
                  "Identify the right use cases for each product",
                  "Prepare for a successful enquiry"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-slate-50" id="product-types">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Explore <span className="text-blue-700">Funding Products</span></h2>
            <p className="text-slate-500 italic mt-2">Browse the common ways businesses access capital and credit.</p>
          </div>
          
          <FinanceCardGrid items={FUNDING_PRODUCTS} type="funding" />
        </div>
      </section>

      {/* How it generally works block */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">How Business Funding Generally Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { icon: Search, label: "Define the Need", desc: "Clearly identify what the funds are for and the timeframe." },
              { icon: LineChart, label: "Assess Performance", desc: "Lenders look at your recent revenue and profitability." },
              { icon: Wallet, label: "Explore Products", desc: "Select the funding mechanism that fits your specific need." },
              { icon: CheckCircle, label: "Gather Docs", desc: "Prepare bank statements and financial reports." },
              { icon: ArrowUpRight, label: "Initiate Discovery", desc: "Submit an enquiry to explore potential options." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-100 shadow-sm font-black text-xl">
                    {i + 1}
                  </div>
                  <h4 className="text-sm font-black text-slate-900 mb-3 uppercase tracking-wide px-2">{step.label}</h4>
                  <p className="text-xs text-slate-500 italic leading-relaxed px-4">{step.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-slate-100 z-0 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Readiness Tools Placeholder */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-left relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-2xl font-black text-white mb-4 tracking-tight italic">Funding Capacity Check</h3>
                 <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium italic">
                   Estimate your potential borrowing power based on your current revenue profile.
                 </p>
                 <button className="text-blue-400 font-bold text-sm uppercase tracking-widest cursor-not-allowed">
                   Coming Soon
                 </button>
               </div>
            </div>
            <div className="bg-blue-700 rounded-[3rem] p-10 md:p-16 text-left relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-2xl font-black text-white mb-4 tracking-tight italic">Borrowing Readiness</h3>
                 <p className="text-blue-100 text-sm mb-8 leading-relaxed font-medium italic opacity-80">
                   Evaluate if your business is "lender ready" and identify key documentation gaps.
                 </p>
                 <button className="text-white font-bold text-sm uppercase tracking-widest cursor-not-allowed">
                   Coming Soon
                 </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      <FinanceCTASection 
        title="Ready to explore your options?"
        subtitle="Start a dedicated funding enquiry and our team will help you identify the right product and path forward."
        variant="blue"
        primaryCTA={{ label: "Start Funding Enquiry", href: "/finance/enquiry?type=funding" }}
        secondaryCTA={{ label: "View Documentation Checklist", href: "/resources/document-checklist" }}
      />

      <FinanceFAQSection faqs={faqs} />
      
      <FinanceResourceLinks resources={resources} />

      <FinanceDisclaimer type="funding" />

      <CTABanner />
      <Footer />
    </div>
  );
}
