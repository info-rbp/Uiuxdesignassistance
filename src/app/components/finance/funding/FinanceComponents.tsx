import { Link } from "react-router";
import { ArrowRight, Info, CheckCircle2, FileText, ClipboardList, ShieldCheck } from "lucide-react";

/**
 * 1. FinanceSnapshot - Summary strip for detail pages
 */
export function FinanceSnapshot({ product }: { product: any }) {
  return (
    <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] pointer-events-none" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        <SnapshotItem 
            label="Commonly Used For" 
            value={product.useCases?.[0]?.title || "Business Funding"} 
        />
        <SnapshotItem 
            label="Who Explores It" 
            value={Array.isArray(product.relevantFor) ? product.relevantFor[0] : "SMEs & Borrowers"} 
        />
        <SnapshotItem 
            label="Readiness Level" 
            value="Active Review" 
        />
        <SnapshotItem 
            label="Next Step" 
            value="Discuss Funding" 
            highlight 
        />
      </div>
    </div>
  );
}

function SnapshotItem({ label, value, highlight }: { label: string, value: string, highlight?: boolean }) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">{label}</span>
      <span className={`text-md font-bold italic leading-snug ${highlight ? 'text-blue-400' : 'text-slate-200'}`}>{value}</span>
    </div>
  );
}

/**
 * 2. FinanceHowItWorksSection - Step by step process
 */
export function FinanceHowItWorksSection({ steps }: { steps: string[] }) {
  if (!steps) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {steps.map((step, i) => (
        <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all h-full group">
          <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 font-black text-sm shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
            {i + 1}
          </div>
          <p className="text-slate-700 font-bold italic leading-relaxed text-sm">{step}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * 3. FinanceReadinessSection - Lender considerations
 */
export function FinanceReadinessSection({ factors }: { factors: string[] }) {
    if (!factors) return null;
    return (
      <div className="bg-blue-600 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-white blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h3 className="text-4xl font-black mb-6 tracking-tight italic">What Lenders <span className="text-blue-200">Consider.</span></h3>
                <p className="text-blue-100 text-lg italic leading-relaxed mb-8">
                    Every lender has unique criteria, but these readiness factors are commonly reviewed during a funding discovery process.
                </p>
                <div className="flex items-start gap-4 p-6 bg-white/10 border border-white/20 rounded-2xl">
                    <Info className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" />
                    <p className="text-xs text-blue-200/80 italic font-medium uppercase tracking-widest leading-loose">
                        Non-Advisory Center: General considerations only, not credit advice.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {factors.map((f, i) => (
                 <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-4 group hover:bg-white/20 transition-all">
                    <ShieldCheck className="w-5 h-5 text-blue-300" />
                    <span className="font-bold text-white italic text-sm">{f}</span>
                 </div>
               ))}
            </div>
        </div>
      </div>
    );
}

/**
 * 4. FinanceDocumentsSection - Checklist
 */
export function FinanceDocumentsSection({ documents }: { documents: string[] }) {
  if (!documents) return null;
  return (
      <div className="bg-slate-900 rounded-[3rem] p-12 border border-blue-900/40">
          <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-black text-white mb-4 tracking-tight italic uppercase tracking-[0.2em]">Common <span className="text-blue-500">Documents</span> Requested</h2>
              <p className="text-slate-400 italic">Gathering these documents early generally helps streamline the funding discussion.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {documents.map((doc, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                      <FileText className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-slate-300 font-bold text-sm italic">{doc}</span>
                  </div>
              ))}
          </div>
      </div>
  );
}

/**
 * 5. FinanceRelatedProducts - Cross links
 */
export function FinanceRelatedProducts({ products }: { products: any[] }) {
  if (!products) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p, i) => {
        return (
          <Link key={i} to={`/finance/products/${p.slug}`} className="bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-blue-400 hover:shadow-xl transition-all group">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-all">
                   <ClipboardList className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <h4 className="font-black text-slate-900 group-hover:text-blue-700 transition-colors uppercase tracking-tight text-sm">{p.name}</h4>
             </div>
             <p className="text-slate-500 text-[11px] italic mb-8 line-clamp-2">{p.summary}</p>
             <div className="flex items-center justify-between font-black text-[10px] text-blue-600 uppercase tracking-widest pt-4 border-t border-slate-50">
                Learn More <ArrowRight className="w-4 h-4" />
             </div>
          </Link>
        );
      })}
    </div>
  );
}
