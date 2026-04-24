import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {
  FolderOpen,
  ArrowRight,
  CheckCircle,
  ClipboardList,
  MessageSquare,
  PenLine,
  Eye,
  PackageCheck,
} from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1768875820800-1c2a6f2e8280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMG1hbmFnZW1lbnQlMjBvZmZpY2UlMjBwYXBlciUyMGZpbGluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc3Njk1MTE4OHww&ixlib=rb-4.1.0&q=80&w=1080";

// ── Document Categories ──
// TODO: Replace static category/product placeholders with catalogue data generated from Comprehensive_Item_List.xlsx.
// Future product records should include category, type, archetype, fulfilmentType, questionnaireProfile, complexity, price, deliveryTime, tags, and status.
const categories = [
  {
    id: "business-setup-governance",
    title: "Business Setup & Governance",
    desc: "Business formation, governance, ownership, director, and internal management documents.",
    color: "bg-blue-700",
    lightColor: "bg-blue-50 border-blue-200",
    textColor: "text-blue-700",
    items: [
      "Business plans",
      "Company registers",
      "Governance documents",
      "Director and shareholder records",
      "Startup document packs",
    ],
    tag: "A",
  },
  {
    id: "operations-process",
    title: "Operations & Process",
    desc: "Documents that help businesses standardise how work is performed, managed, reviewed, and improved.",
    color: "bg-violet-700",
    lightColor: "bg-violet-50 border-violet-200",
    textColor: "text-violet-700",
    items: [
      "Standard operating procedures",
      "Process maps",
      "Workflow documents",
      "Operations manuals",
      "Internal checklists",
    ],
    tag: "B",
  },
  {
    id: "hr-employment",
    title: "HR & Employment",
    desc: "Employment, onboarding, staff management, performance, workplace conduct, and people-related documents.",
    color: "bg-emerald-700",
    lightColor: "bg-emerald-50 border-emerald-200",
    textColor: "text-emerald-700",
    items: [
      "Employment contracts",
      "Position descriptions",
      "Onboarding documents",
      "HR policies",
      "Performance templates",
    ],
    tag: "C",
  },
  {
    id: "finance-administration",
    title: "Finance & Administration",
    desc: "Administrative, financial, reporting, record-keeping, and internal business management documents.",
    color: "bg-amber-600",
    lightColor: "bg-amber-50 border-amber-200",
    textColor: "text-amber-700",
    items: [
      "Budget templates",
      "Cash flow templates",
      "Invoice and payment documents",
      "Finance checklists",
      "Admin procedures",
    ],
    tag: "D",
  },
  {
    id: "sales-marketing-client-management",
    title: "Sales, Marketing & Client Management",
    desc: "Documents that support customer acquisition, client communication, sales processes, proposals, and relationship management.",
    color: "bg-rose-600",
    lightColor: "bg-rose-50 border-rose-200",
    textColor: "text-rose-700",
    items: [
      "Proposal templates",
      "Sales scripts",
      "Client onboarding documents",
      "Marketing plans",
      "Customer communication templates",
    ],
    tag: "E",
  },
  {
    id: "compliance-risk",
    title: "Compliance & Risk",
    desc: "Documents that help businesses identify, manage, document, and review operational, regulatory, commercial, and workplace risks.",
    color: "bg-cyan-700",
    lightColor: "bg-cyan-50 border-cyan-200",
    textColor: "text-cyan-700",
    items: [
      "Risk registers",
      "Compliance checklists",
      "Incident forms",
      "Audit tools",
      "Policy registers",
    ],
    tag: "F",
  },
  {
    id: "policies-procedures",
    title: "Policies & Procedures",
    desc: "Reusable policies and procedural documents that can be tailored to the business and used internally or externally.",
    color: "bg-indigo-700",
    lightColor: "bg-indigo-50 border-indigo-200",
    textColor: "text-indigo-700",
    items: [
      "Workplace policies",
      "Operational procedures",
      "Client service policies",
      "Approval procedures",
      "Internal rules and standards",
    ],
    tag: "G",
  },
  {
    id: "strategy-planning",
    title: "Strategy & Planning",
    desc: "Documents that help business owners clarify direction, assess options, make decisions, and plan future growth.",
    color: "bg-teal-700",
    lightColor: "bg-teal-50 border-teal-200",
    textColor: "text-teal-700",
    items: [
      "Strategic plans",
      "Action plans",
      "Growth plans",
      "Decision frameworks",
      "Review templates",
    ],
    tag: "H",
  },
  {
    id: "custom-business-documents",
    title: "Custom Business Documents",
    desc: "Tailored document services for businesses that need a document prepared or adapted to their specific situation.",
    color: "bg-slate-700",
    lightColor: "bg-slate-50 border-slate-200",
    textColor: "text-slate-700",
    items: [
      "Custom document requests",
      "Tailored agreements",
      "Branded document packs",
      "Custom policies",
      "Business-specific templates",
    ],
    tag: "I",
  },
];

// ── 5-Step Process ──
const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Choose a Document",
    desc: "Users browse the catalogue and select the document or pack they need.",
    color: "bg-blue-700",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Purchase or Request",
    desc: "Users purchase a ready-made document or begin a tailored document request.",
    color: "bg-violet-700",
  },
  {
    number: "03",
    icon: PenLine,
    title: "Complete the Brief",
    desc: "For tailored documents, users provide business details, required information, style preferences, and supporting files.",
    color: "bg-amber-600",
  },
  {
    number: "04",
    icon: Eye,
    title: "Review & Preparation",
    desc: "The document is prepared, reviewed, and formatted based on the submitted brief.",
    color: "bg-sky-700",
  },
  {
    number: "05",
    icon: PackageCheck,
    title: "Delivery",
    desc: "The completed document is delivered by email and, where applicable, made available in the user’s Document Nucleus account.",
    color: "bg-emerald-700",
  },
];

export function DocumentOverviewPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* ── Page Hero ── */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Document Overview" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-xs font-semibold text-slate-400 uppercase tracking-widest">
            <Link to="/docushare" className="hover:text-blue-400 transition-colors">Document Nucleus</Link>
            <span>/</span>
            <span className="text-slate-300">Document Overview</span>
          </div>

          <span className="inline-block text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-900/40 border border-blue-700/30 px-3 py-1 rounded-full mb-5">
            Document Nucleus
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-3xl">
            Document Nucleus
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed mb-8">
            Browse ready-to-use and tailored business documents designed to help small businesses operate, manage, grow, and stay organised.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#categories"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-900/50 hover:-translate-y-0.5"
            >
              Browse Document Categories
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/document-nucleus/category/custom-business-documents"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
            >
              Request a Custom Document
            </Link>
          </div>
        </div>
      </section>

      {/* ── Intro strip ── */}
      <div className="bg-blue-700 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            {[
              { label: "Find practical business documents" },
              { label: "Purchase ready-to-use resources" },
              { label: "Request tailored documents" },
              { label: "Provide business details after purchase" },
              { label: "Receive customised documents" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-200 mb-3" />
                <div className="text-sm font-semibold text-blue-100 leading-tight max-w-[200px]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Categories ── */}
      <section id="categories" className="py-20 lg:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-4">
              Document Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Explore our document catalogue
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our document library is organised by category. Select the one that matches your current business need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`border-2 rounded-2xl overflow-hidden ${cat.lightColor} hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div>
                  {/* Card header */}
                  <div className={`${cat.color} px-8 py-8 flex items-center gap-5`}>
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-2xl font-extrabold">{cat.tag}</span>
                    </div>
                    <div>
                      <div className="text-white font-extrabold text-xl">{cat.title}</div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="px-8 py-7">
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{cat.desc}</p>
                    <div className="space-y-2.5">
                      {cat.items.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${cat.textColor}`} />
                          <span className="text-slate-600 text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <div className="pt-6 border-t border-current/10">
                    <Link
                      to={`/document-nucleus/category/${cat.id}`}
                      className={`inline-flex items-center gap-2 font-bold text-sm ${cat.textColor} hover:underline`}
                    >
                      Browse {cat.title}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Suites and Toolkits Banners ── */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Suites Banner */}
            <div className="relative overflow-hidden bg-slate-900 rounded-3xl p-10 lg:p-14 border border-slate-800 shadow-xl group hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />
              <div className="relative z-10 flex flex-col flex-1 items-start">
                <span className="inline-block text-xs font-bold text-slate-900 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full mb-6">
                  Documentation Suites
                </span>
                <h3 className="text-3xl font-extrabold text-white mb-4">Complete Document Infrastructures</h3>
                <p className="text-slate-400 leading-relaxed mb-10 max-w-md flex-1">
                  Documentation Suites are curated sets of policies and procedures related to specific operational areas or compliance requirements.
                </p>
                <div className="mt-auto">
                  <Link
                    to="/document-nucleus/category/documentation-suites"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5"
                  >
                    Explore Suites
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Toolkits Banner */}
            <div className="relative overflow-hidden bg-indigo-950 rounded-3xl p-10 lg:p-14 border border-indigo-900 shadow-xl group hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500" />
              <div className="relative z-10 flex flex-col flex-1 items-start">
                <span className="inline-block text-xs font-bold text-indigo-900 uppercase tracking-widest bg-indigo-100 px-3 py-1 rounded-full mb-6">
                  Business Toolkits
                </span>
                <h3 className="text-3xl font-extrabold text-white mb-4">Full Implementation Kits</h3>
                <p className="text-indigo-200 leading-relaxed mb-10 max-w-md flex-1">
                  Toolkits provide full implementation kits to equip your business operations from end-to-end with ready-to-use frameworks and tools.
                </p>
                <div className="mt-auto">
                  <Link
                    to="/document-nucleus/category/toolkits"
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-500/20 hover:-translate-y-0.5"
                  >
                    Explore Toolkits
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5-Step Process ── */}
      <section id="process" className="py-20 lg:py-28 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full mb-4">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our document creation process
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Every document we produce follows the same five-step process — ensuring quality, accuracy, and a result that works for your business.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-slate-200 -translate-x-1/2 z-0" />

            <div className="space-y-8 relative z-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={step.number}
                    className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-10 ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content card */}
                    <div className={`flex-1 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? "lg:flex-row-reverse lg:justify-start" : ""}`}>
                        <div className={`w-12 h-12 ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Step {i + 1}</div>
                          <h3 className="font-extrabold text-slate-900">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>

                    {/* Centre number bubble */}
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg z-10`}>
                      <span className="text-white font-extrabold text-xl">{i + 1}</span>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FolderOpen className="w-12 h-12 text-blue-300 mx-auto mb-5" />
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">
            Need a document tailored to your business?
          </h2>
          <p className="text-blue-100 leading-relaxed mb-8">
            If you cannot find exactly what you need, request a custom business document and provide the details, context, and preferred style after purchase.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/document-nucleus/category/custom-business-documents"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5"
            >
              Request a Custom Document
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}