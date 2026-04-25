import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { 
  ShieldCheck, 
  AlertCircle, 
  Scale, 
  Users, 
  Handshake, 
  FileText,
  Mail,
  Info,
  CheckCircle2,
  XCircle,
  ExternalLink
} from "lucide-react";

export function ReferralDisclosurePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlZ2FsJTIwY29udHJhY3R8ZW58MXx8fHwxNzc3MDkzMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Legal Disclosure" 
            className="w-full h-full object-cover opacity-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
           <span className="inline-block px-4 py-1 bg-blue-600/30 border border-blue-500/40 rounded-full text-blue-300 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
             Transparency Platform
           </span>
           <h1 className="text-5xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-none italic uppercase">
             Referral <br /> <span className="text-blue-500">Disclosure.</span>
           </h1>
           <p className="text-slate-400 text-xl lg:text-2xl font-medium italic leading-relaxed max-w-3xl">
             Outlining how Remote Business Partner presents finance, insurance, and partner information, and the nature of our referral relationships.
           </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Why this page exists */}
          <div className="mb-20">
             <div className="flex items-center gap-4 mb-8">
               <Info className="w-10 h-10 text-blue-600" />
               <h2 className="text-3xl font-black text-slate-900 italic tracking-tight uppercase">Why Transparency <span className="text-blue-700">Matters.</span></h2>
             </div>
             <div className="prose prose-slate prose-lg max-w-none text-slate-600 italic leading-relaxed">
                <p>
                  Remote Business Partner (RBP) provides information about finance products, insurance policies, and third-party partner offers. In many cases, we may introduce you to specialist providers who can assist with your specific requirements.
                </p>
                <p>
                  Transparency in these relationships is fundamental to how we operate. This page explains what we do, what we don't do, and how we may be compensated for these introductions.
                </p>
             </div>
          </div>

          <hr className="border-slate-100 mb-20" />

          {/* What RBP Does vs Doesn't Do */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
             <div className="space-y-8 p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                <div className="flex items-center gap-3 text-blue-700">
                   <ShieldCheck className="w-8 h-8" />
                   <h3 className="text-2xl font-black italic tracking-tight uppercase">What <span className="text-slate-900">We Do.</span></h3>
                </div>
                <ul className="space-y-4 text-sm font-bold text-slate-600 italic">
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" /> Provide general information about finance and insurance.</li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" /> Help users understand product types and common uses.</li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" /> Introduce users to relevant third-party providers.</li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" /> Facilitate requests for quotes and funding discussions.</li>
                   <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" /> Curate partner offers and referral opportunities.</li>
                </ul>
             </div>

             <div className="space-y-8 p-10 bg-slate-900 rounded-[3rem] text-white">
                <div className="flex items-center gap-3 text-rose-500">
                   <AlertCircle className="w-8 h-8" />
                   <h3 className="text-2xl font-black italic tracking-tight uppercase">What <span className="text-white">We Don't Do.</span></h3>
                </div>
                <ul className="space-y-4 text-sm font-bold text-slate-400 italic">
                   <li className="flex gap-3"><XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" /> We are NOT a bank, lender, or insurer.</li>
                   <li className="flex gap-3"><XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" /> We are NOT a financial advisory platform.</li>
                   <li className="flex gap-3"><XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" /> We do NOT provide personal financial advice.</li>
                   <li className="flex gap-3"><XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" /> We do NOT recommend products for your individual needs.</li>
                   <li className="flex gap-3"><XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" /> We do NOT make credit or underwriting decisions.</li>
                </ul>
             </div>
          </div>

          {/* Commissions Section */}
          <div className="bg-blue-600 rounded-[4rem] p-12 md:p-20 text-white mb-20 shadow-2xl shadow-blue-500/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-white blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
             </div>
             <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                   <Handshake className="w-12 h-12 text-blue-200" />
                   <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tight">Referral <span className="text-blue-100">Commissions.</span></h2>
                </div>
                <div className="text-blue-100 text-lg md:text-xl italic font-medium leading-relaxed space-y-8">
                   <p>
                     Transparently, Remote Business Partner may receive a commission, referral fee, introducer fee, affiliate fee, or other commercial benefit if you proceed with a product or offer introduced via this platform.
                   </p>
                   <p>
                     This may apply to finance products, insurance products, and selected partner offers. These arrangements do not mean RBP is providing a personal recommendation or financial advice. We connect you with providers who perform their own assessments.
                   </p>
                </div>
             </div>
          </div>

          {/* General Information Disclaimer */}
          <div className="p-12 border-2 border-slate-100 rounded-[3rem] mb-20">
             <h3 className="text-xl font-black text-slate-900 mb-6 italic uppercase tracking-widest flex items-center gap-4">
                <Scale className="w-6 h-6 text-blue-600" /> No Personal Recommendation
             </h3>
             <div className="text-slate-500 text-sm italic font-medium leading-relaxed space-y-6">
                <p>
                  All information on this platform is <strong>general in nature</strong>. It has been prepared without taking into account your specific objectives, financial situation, needs, business circumstances, or risk profile.
                </p>
                <p>
                  You should always review the relevant provider's documentation—including Policy Wordings, Disclosure Materials, Lending Documents, and Terms and Conditions—to determine whether a product is appropriate for your unique circumstances.
                </p>
             </div>
          </div>

          {/* Practice Specifics */}
          <div className="space-y-16">
             <DisclosureBlock 
                icon={ShieldCheck} 
                title="Insurance Disclosure" 
                content="Insurance information is provided for general informational purposes only. Policy scope, exclusions, conditions, limits, excesses, and pricing vary significantly by insurer. RBP does not provide specific product suitability advice." 
             />
             <DisclosureBlock 
                icon={Handshake} 
                title="Finance Disclosure" 
                content="Finance product information is general in nature. Approval outcomes, lending criteria, rates, and fees depend entirely on the lender and the borrower's circumstances. RBP does not make lending decisions or provide credit assistance." 
             />
             <DisclosureBlock 
                icon={Users} 
                title="Offers & Affiliate Disclosure" 
                content="The Offers page may include affiliate offers, partner promotions, or sponsored opportunities. RBP may receive commercial benefit if you engage with these third-party offers. Inclusion does not imply a personal recommendation." 
             />
          </div>

          <hr className="border-slate-100 my-20" />

          {/* Contact */}
          <div className="text-center">
             <h3 className="text-2xl font-black text-slate-900 mb-8 italic uppercase tracking-tighter">Questions about <span className="text-blue-700">Referrals?</span></h3>
             <div className="flex flex-col items-center gap-6">
                <a href="mailto:info@remotebusinesspartner.com.au" className="flex items-center gap-4 text-blue-600 font-black text-xl hover:underline">
                   <Mail className="w-6 h-6" /> info@remotebusinesspartner.com.au
                </a>
                <p className="text-slate-400 text-xs italic font-bold uppercase tracking-widest leading-loose max-w-lg">
                   Contact us to understand our referral processes or commercial relationships. We do not provide personal financial advice via email.
                </p>
             </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

function DisclosureBlock({ icon: Icon, title, content }: { icon: any, title: string, content: string }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-12 h-12 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
           <Icon className="w-6 h-6" />
        </div>
        <div>
           <h4 className="text-lg font-black text-slate-900 mb-4 italic uppercase tracking-widest">{title}</h4>
           <p className="text-slate-500 italic leading-relaxed text-sm font-medium">{content}</p>
        </div>
    </div>
  );
}
