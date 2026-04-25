import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTABanner } from "../components/CTABanner";
import { PageHero } from "../components/PageHero";
import { 
  DollarSign, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Calculator, 
  FileText, 
  Zap, 
  BarChart3, 
  Briefcase, 
  Lock, 
  Users, 
  ExternalLink,
  BookOpen,
  ClipboardCheck,
  TrendingUp,
  Landmark,
  ShieldCheck,
  Info
} from "lucide-react";

// --- Data Models ---

const FUNDING_CATEGORIES = [
  {
    title: "Working Capital",
    description: "Short-term funding to cover day-to-day operational costs, inventory, and payroll.",
    useCase: "Used for cash flow gaps or seasonal demands",
    icon: DollarSign,
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    title: "Equipment Finance",
    description: "Finance new or used machinery, technology, and specialized equipment for your business.",
    useCase: "Used for manufacturing, tech upgrades, or medical gear",
    icon: Briefcase,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
  {
    title: "Vehicle Finance",
    description: "Asset finance solutions for individual commercial vehicles or entire business fleets.",
    useCase: "Used for delivery vans, trucks, or executive vehicles",
    icon: Landmark,
    color: "bg-sky-50 text-sky-600 border-sky-100",
  },
  {
    title: "Business Expansion",
    description: "Longer-term funding designed to support growth projects, new locations, or acquisitions.",
    useCase: "Used for opening new branches or buying competitors",
    icon: TrendingUp,
    color: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    title: "Cash Flow Support",
    description: "Invoice financing and line of credit options to unlock value tied up in unpaid invoices.",
    useCase: "Used for B2B businesses with long payment terms",
    icon: Zap,
    color: "bg-amber-50 text-amber-600 border-amber-100",
  },
];

const INSURANCE_CATEGORIES = [
  {
    title: "Public Liability",
    description: "Protects your business against claims for third-party injury or property damage.",
    useCase: "Essential for businesses with physical premises or client visits",
    icon: Shield,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    title: "Professional Indemnity",
    description: "Coverage for professionals against claims of negligence or breach of duty in their advice.",
    useCase: "Used by consultants, accountants, and service agencies",
    icon: ShieldCheck,
    color: "bg-teal-50 text-teal-600 border-teal-100",
  },
  {
    title: "Cyber Insurance",
    description: "Protects against the financial impact of data breaches, hacking, and cyber attacks.",
    useCase: "Crucial for businesses handling customer data or ecommerce",
    icon: Lock,
    color: "bg-rose-50 text-rose-600 border-rose-100",
  },
  {
    title: "Management Liability",
    description: "Protects directors and officers from personal liability for business management decisions.",
    useCase: "Used by incorporated entities and growing startups",
    icon: Users,
    color: "bg-orange-50 text-orange-600 border-orange-100",
  },
  {
    title: "Workers Compensation",
    description: "Mandatory insurance to cover your employees for work-related injuries or illnesses.",
    useCase: "Requirement for all businesses with employees",
    icon: ClipboardCheck,
    color: "bg-slate-50 text-slate-600 border-slate-100",
  },
];

const TOOLS = [
  {
    title: "Funding Capacity Check",
    description: "Estimate how much your business could potentially borrow based on current performance.",
    icon: Calculator,
    path: "/finance/calculators/funding-check",
    cta: "Check Capacity",
  },
  {
    title: "Insurance Needs Check",
    description: "A quick assessment to identify the core insurance covers recommended for your industry.",
    icon: Shield,
    path: "/finance/calculators/insurance-check",
    cta: "Run Check",
  },
  {
    title: "Borrowing Readiness",
    description: "Evaluate your \"lender readiness\" and identify what documents you need to prepare.",
    icon: BarChart3,
    path: "/finance/calculators/readiness",
    cta: "Assess Readiness",
  },
];

const RESOURCES = [
  {
    title: "Small Business Funding Guide 2024",
    category: "Funding",
    readTime: "8 min read",
    icon: BookOpen,
  },
  {
    title: "Understanding Public Liability Insurance",
    category: "Insurance",
    readTime: "5 min read",
    icon: Shield,
  },
  {
    title: "5 Signs Your Business is Ready for Expansion",
    category: "Strategy",
    readTime: "6 min read",
    icon: TrendingUp,
  },
];

// --- Sub-components ---

function SectionHeader({ 
  badge, 
  title, 
  description, 
  centered = true 
}: { 
  badge: string; 
  title: string; 
  description: string; 
  centered?: boolean 
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      <span className="inline-block text-[10px] font-black text-blue-700 uppercase tracking-[0.2em] bg-blue-50 px-3 py-1 rounded-full mb-4">
        {badge}
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function CategoryCard({ item }: { item: any }) {
  const Icon = item.icon;
  return (
    <div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
      <div className={`w-12 h-12 ${item.color} border rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
      <div className="pt-4 border-t border-slate-50 flex items-center gap-2">
        <Info className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-[11px] font-medium text-slate-500 italic">{item.useCase}</span>
      </div>
    </div>
  );
}

// --- Main Page ---

export function FinancePage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <PageHero
        title="Finance & Insurance"
        titleAccent="Hub"
        subtitle="The practical discovery center for small business funding, insurance protection, and financial readiness."
        badge="Finance Center"
        breadcrumb="Finance"
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGZpbmFuY2UlMjBjaGFydHMlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc3MDkzMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
        bullets={["Funding Capacity Checks", "BizCover Partner Quotes", "Educational Resources"]}
        ctaPrimary={{ label: "Start Funding Enquiry", href: "/finance/enquiry?type=funding" }}
        ctaSecondary={{ label: "Browse Insurance", href: "/finance/insurance" }}
        stat={{ value: "24/7", label: "Hub Access", sublabel: "Self-service discovery" }}
      />

      {/* A. Pathway Split Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Funding Pathway */}
            <div className="relative group bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] transition-all group-hover:w-36 group-hover:h-36 -z-0" />
              <div className="relative z-10">
                <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 block">Pathway 01</span>
                <h3 className="text-3xl font-black text-slate-900 mb-4">Business Funding</h3>
                <p className="text-slate-600 mb-8 max-w-sm text-lg italic">
                  Explore working capital, asset finance, and expansion loans to fuel your next stage of growth.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="font-bold text-slate-700">Check borrowing capacity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="font-bold text-slate-700">Explore product fit</span>
                  </div>
                </div>
                <Link 
                  to="/finance/funding" 
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-black transition-all shadow-lg"
                >
                  Explore Funding <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Insurance Pathway */}
            <div className="relative group bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100px] transition-all group-hover:w-36 group-hover:h-36 -z-0" />
              <div className="relative z-10">
                <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block">Pathway 02</span>
                <h3 className="text-3xl font-black text-slate-900 mb-4">Business Insurance</h3>
                <p className="text-slate-600 mb-8 max-w-sm text-lg italic">
                  Protect your assets, your people, and your reputation with tailored business cover.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="font-bold text-slate-700">Understand your risk</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="font-bold text-slate-700">Compare quotes online</span>
                  </div>
                </div>
                <Link 
                  to="/finance/insurance" 
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-black transition-all shadow-lg"
                >
                  Explore Insurance <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C. Funding Section */}
      <section className="py-24" id="funding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            badge="01. Funding Discovery"
            title="Smarter Ways to Fuel Growth"
            description="Funding is not one-size-fits-all. We help you explore common categories used by businesses at various stages to identify the right mechanism for your needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {FUNDING_CATEGORIES.map((cat) => (
              <CategoryCard key={cat.title} item={cat} />
            ))}
            
            {/* Special Callout Card */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col justify-center">
              <h4 className="text-xl font-bold mb-4">Unsure where to start?</h4>
              <p className="opacity-90 mb-8 text-sm leading-relaxed italic">
                Our funding specialists can help you navigate the landscape and connect you with the right lender partner.
              </p>
              <Link to="/finance/enquiry?type=funding" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold text-center hover:bg-blue-50 transition-colors">
                Enquire About Funding
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* D. Insurance Section */}
      <section className="py-24 bg-slate-900 text-white" id="insurance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16 pb-12 border-b border-white/10">
            <div className="max-w-2xl">
              <span className="inline-block text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full mb-6">
                02. Insurance Discovery
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                Protection Designed for <span className="text-emerald-400">Small Business</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed italic">
                Our goal is to help you understand common cover types and provide a seamless path to protect your business through our partner, BizCover.
              </p>
            </div>
            <div className="flex-shrink-0 bg-white/5 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-md">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Partnered with</p>
              <div className="text-white text-2xl font-black flex items-center gap-2">
                <Shield className="w-6 h-6 text-emerald-400" /> BIZCOVER
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {INSURANCE_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
                   <div className="w-12 h-12 bg-emerald-400/10 text-emerald-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{cat.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">{cat.description}</p>
                  <p className="text-[11px] font-bold text-emerald-400/60 uppercase tracking-wider">{cat.useCase}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-emerald-500 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-emerald-500/20">
            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-2">Ready for a quote?</h3>
              <p className="text-emerald-900 font-medium italic opacity-80">Compare multiple business insurance quotes online in minutes.</p>
            </div>
            <a 
              href="https://www.bizcover.com.au/?advisor=rbp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-slate-900 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              Get Quotes via BizCover <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* E. Tools / Checkers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            badge="Finance Tools"
            title="Self-Service Planning"
            description="Use our lightweight discovery tools to help you identify your needs and prepare for the next step."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TOOLS.map((tool) => {
              const Icon = tool.icon;
              return (
                <div key={tool.title} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center hover:bg-blue-600 hover:text-white group transition-all duration-500">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{tool.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 group-hover:text-blue-50 italic">
                    {tool.description}
                  </p>
                  <Link 
                    to={tool.path} 
                    className="inline-flex items-center gap-2 font-bold text-blue-600 group-hover:text-white group-hover:bg-blue-500/50 group-hover:px-4 group-hover:py-2 group-hover:rounded-lg transition-all"
                  >
                    {tool.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* F. Related Resources Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Finance <span className="text-blue-700">Insights</span></h2>
              <p className="text-slate-500 text-sm mt-1 italic">Guides and articles from our Resource Center.</p>
            </div>
            <Link to="/resources?category=finance" className="text-sm font-bold text-blue-700 hover:underline">
              View all resources
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESOURCES.map((res) => (
              <Link 
                to="/resources/finance-guide" 
                key={res.title} 
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">
                    {res.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">{res.readTime}</span>
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-700 mb-4 leading-tight">{res.title}</h3>
                <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                    Read Article <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* G. Enquiry / Action Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative p-12 md:p-20">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-blue-500 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="absolute inset-0 bg-emerald-500 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight italic">
                Can't find what you're looking for?
              </h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">
                Whether you have a unique funding requirement or need a complex insurance portfolio reviewed, our team is here to guide you to the right partner.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link to="/finance/enquiry?type=funding" className="bg-white text-slate-900 px-6 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all">
                  Funding Enquiry
                </Link>
                <Link to="/finance/enquiry?type=insurance" className="bg-white text-slate-900 px-6 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-all">
                  Insurance Enquiry
                </Link>
                <Link to="/contact" className="bg-slate-800 text-white px-6 py-4 rounded-2xl font-bold hover:bg-slate-700 transition-all border border-white/10">
                  General Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H. Disclaimer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-slate-100 border border-slate-200 rounded-3xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <FileText className="w-6 h-6 text-slate-400" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-3">Professional Disclosure</h4>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4 italic">
                <strong>Important Information:</strong> Remote Business Partner (RBP) is a discovery and referral platform for business support services. We provide education, introduction, and pathway support for small businesses. 
              </p>
              <ul className="text-slate-500 text-xs md:text-sm space-y-2 list-disc pl-4 italic opacity-80">
                <li>RBP does not provide financial advice and is not a licensed financial advisor.</li>
                <li>RBP does not provide legal advice or specific insurance placement recommendations.</li>
                <li>We are not a lender or credit provider. Any funding agreements are between you and the respective lender partner.</li>
                <li>Financial products involve risk. Always seek independent financial and legal advice before entering into any financial commitment.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CTABanner />
      <Footer />
    </div>
  );
}