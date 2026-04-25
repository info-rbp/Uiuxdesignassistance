import { Link } from "react-router";
import { 
  ArrowRight, 
  HelpCircle, 
  FileText, 
  ExternalLink,
  BookOpen,
  Info
} from "lucide-react";

/**
 * 1. FinanceCategoryHero - Top level hero for Hub pages
 */
export function FinanceCategoryHero({
  title,
  subtitle,
  badge,
  breadcrumb,
  image,
  ctaPrimary,
  ctaSecondary
}: {
  title: string;
  subtitle: string;
  badge: string;
  breadcrumb: string;
  image: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-white/40 text-xs font-bold tracking-widest uppercase">Finance Center</span>
            <span className="text-white/20">/</span>
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">{breadcrumb}</span>
          </div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            {badge}
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]">
            {title}
          </h1>
          <p className="text-slate-300 text-lg lg:text-xl mb-10 leading-relaxed font-medium italic">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to={ctaPrimary.href}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-900/40 text-center"
            >
              {ctaPrimary.label}
            </Link>
            <a
              href={ctaSecondary.href}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-2xl font-black text-lg transition-all text-center"
            >
              {ctaSecondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * 2. FinanceCardGrid - Grid of policy/product cards
 */
export function FinanceCardGrid({ items, type }: { items: any[], type: "insurance" | "funding" }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {items.map((item) => {
        const Icon = item.icon || FileText;
        return (
          <div key={item.slug} className="group bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col h-full">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${type === "insurance" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-blue-50 text-blue-600 border border-blue-100"}`}>
              <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-blue-700 transition-colors">
              {item.name}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
              {item.summary}
            </p>
            <div className="mb-8 flex-grow">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                 {type === "insurance" ? "Generally helps with" : "Common use case"}
               </p>
               <p className="text-slate-700 text-sm font-bold flex items-start gap-2">
                 <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${type === "insurance" ? "bg-emerald-500" : "bg-blue-500"}`} />
                 {type === "insurance" ? (item.generally_covers || "Standard protection") : (item.common_use_case || "Strategic business funding")}
               </p>
            </div>
            <Link 
              to={item.ctaHref || "#"} 
              className={`inline-flex items-center gap-2 font-black text-sm transition-all group-hover:gap-3 ${type === "insurance" ? "text-emerald-700" : "text-blue-700"}`}
            >
              {item.ctaLabel || "Learn More"} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

/**
 * 3. FinanceFAQSection
 */
export function FinanceFAQSection({ faqs }: { faqs: { q: string, a: string }[] }) {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-black text-xs uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full mb-4 inline-block">
            Expert Insights
          </span>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-500 italic">Common queries about small business finance and protection.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed italic">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * 4. FinanceDisclaimer
 */
export function FinanceDisclaimer({ type }: { type: "general" | "insurance" | "funding" }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 border border-slate-200 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
              <FileText className="w-8 h-8 text-slate-400" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] mb-4">Professional Disclosure</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 italic">
                <strong>Important Information:</strong> Remote Business Partner (RBP) is a discovery and referral platform. The information provided on this page is for general educational purposes only and does not constitute financial, legal, or professional advice.
              </p>
              <ul className="text-slate-500 text-xs md:text-sm space-y-3 list-disc pl-5 italic opacity-80">
                {type === "insurance" && (
                  <li>Any insurance information is provided as an introduction to cover types. We do not provide specific insurance placement recommendations or advice.</li>
                )}
                {type === "funding" && (
                  <li>We are not a lender or credit provider. Any funding agreements are strictly between you and the respective lender partner.</li>
                )}
                <li>Every business is unique. We strongly recommend seeking independent financial and legal advice before entering into any financial commitment or policy agreement.</li>
                <li>RBP may receive referral fees from our partners if you choose to proceed with their services. See our <Link to="/referral-disclosure" className="underline font-bold">Referral Disclosure</Link> for more information.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * 5. ShortFormDisclosure - Inline notice for CTAs
 */
export function ShortFormDisclosure({ variant = "standard" }: { variant?: "standard" | "compact" | "offers" }) {
  const content = {
    standard: "Remote Business Partner provides general information and referral support only. We do not provide personal financial advice. We may receive a referral commission or fee from selected providers.",
    compact: "General information & referral help only. No personal financial advice. Commissions may apply.",
    offers: "Some featured offers may involve affiliate or commercial partnership arrangements. RBP may receive a commission if you engage with a third-party offer."
  };

  return (
    <div className="mt-8 pt-6 border-t border-slate-100 flex items-start gap-3 opacity-60">
      <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
      <p className="text-[10px] md:text-xs font-medium italic text-slate-500 leading-relaxed">
        {content[variant]} <Link to="/referral-disclosure" className="text-blue-600 underline hover:no-underline font-bold">See Referral Disclosure.</Link>
      </p>
    </div>
  );
}

/**
 * 5. FinanceResourceLinks
 */
export function FinanceResourceLinks({ resources }: { resources: { title: string, href: string }[] }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Practical <span className="text-blue-700">Resources</span></h2>
            <p className="text-slate-500 italic mt-2">Tools, guides, and checklists to help you move forward.</p>
          </div>
          <Link to="/resources" className="text-blue-700 font-bold hover:underline inline-flex items-center gap-1 text-sm">
            Resource Base <BookOpen className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, idx) => (
            <Link 
              key={idx} 
              to={res.href} 
              className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
            >
              <h3 className="font-bold text-slate-900 group-hover:text-white transition-colors mb-4 line-clamp-2">
                {res.title}
              </h3>
              <div className="text-blue-700 group-hover:text-white/80 font-black text-xs uppercase tracking-widest flex items-center gap-2">
                View Guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
          {/* Static Placeholder for missing slots */}
          {resources.length < 4 && Array(4 - resources.length).fill(0).map((_, i) => (
            <div key={`placeholder-${i}`} className="bg-slate-50/50 border border-dashed border-slate-200 rounded-2xl p-6 flex flex-col justify-center items-center opacity-60">
               <BookOpen className="w-6 h-6 text-slate-300 mb-2" />
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">More coming soon</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * 6. FinanceCTASection
 */
export function FinanceCTASection({ 
  title, 
  subtitle, 
  primaryCTA, 
  secondaryCTA, 
  variant = "blue" 
}: { 
  title: string, 
  subtitle: string, 
  primaryCTA: { label: string, href: string, external?: boolean },
  secondaryCTA?: { label: string, href: string },
  variant?: "blue" | "emerald" | "dark"
}) {
  const bgStyles = {
    blue: "bg-blue-600",
    emerald: "bg-emerald-500",
    dark: "bg-slate-900"
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${bgStyles[variant]} rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl`}>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-white blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className={`text-4xl md:text-6xl font-black tracking-tight mb-8 ${variant === "emerald" ? "text-slate-900" : "text-white"}`}>
              {title}
            </h2>
            <p className={`text-lg mb-12 font-medium italic ${variant === "emerald" ? "text-emerald-900/70" : "text-white/70"}`}>
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {primaryCTA.external ? (
                <a
                  href={primaryCTA.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-3 ${variant === "emerald" ? "bg-slate-900 text-white hover:bg-black" : "bg-white text-slate-900 hover:bg-blue-50"}`}
                >
                  {primaryCTA.label} <ExternalLink className="w-5 h-5" />
                </a>
              ) : (
                <Link
                  to={primaryCTA.href}
                  className={`w-full sm:w-auto px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-3 ${variant === "emerald" ? "bg-slate-900 text-white hover:bg-black" : "bg-white text-slate-900 hover:bg-blue-50"}`}
                >
                  {primaryCTA.label}
                </Link>
              )}
              
              {secondaryCTA && (
                <Link
                  to={secondaryCTA.href}
                  className={`inline-flex items-center gap-2 font-black text-lg ${variant === "emerald" ? "text-slate-900 hover:underline" : "text-white hover:underline"}`}
                >
                  {secondaryCTA.label} <ArrowRight className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
