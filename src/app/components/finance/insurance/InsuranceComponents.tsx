import { Link } from "react-router";
import { ArrowRight, Info, CheckCircle2, AlertCircle, HelpCircle } from "lucide-react";

/**
 * 1. InsurancePolicySnapshot - Summary strip for detail pages
 */
export function InsurancePolicySnapshot({ policy }: { policy: any }) {
  return (
    <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] pointer-events-none" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        <SnapshotItem 
            label="Key Coverage" 
            value={Array.isArray(policy.generally_covers) ? policy.generally_covers[0] : policy.generally_covers} 
        />
        <SnapshotItem 
            label="Common Industries" 
            value={Array.isArray(policy.relevantFor) ? policy.relevantFor.join(", ") : policy.relevantFor} 
        />
        <SnapshotItem 
            label="Risk Context" 
            value="Operational & Financial" 
        />
        <SnapshotItem 
            label="Next Step" 
            value="Specialist Quote" 
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
 * 2. InsuranceScenarioSection - Real world examples
 */
export function InsuranceScenarioSection({ scenarios }: { scenarios: any[] }) {
  if (!scenarios) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {scenarios.map((s, i) => (
        <div key={i} className="bg-white border border-slate-200 rounded-[2rem] p-10 hover:border-blue-300 hover:shadow-xl transition-all h-full group">
          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 font-black text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
            {i + 1}
          </div>
          <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{s.title}</h4>
          <p className="text-slate-500 text-sm italic leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * 3. InsuranceCostFactors - Factors affecting premium
 */
export function InsuranceCostFactors({ factors }: { factors: string[] }) {
  if (!factors) return null;
  return (
    <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-200">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="max-w-md">
           <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight italic">What generally affects <span className="text-blue-700">the cost?</span></h3>
           <p className="text-slate-500 italic leading-relaxed mb-8">
             Premiums are calculated based on your specific risk profile. These factors are common considerations for insurers when evaluating your business.
           </p>
           <div className="p-6 bg-white rounded-2xl border border-slate-100 flex items-start gap-4 shadow-sm">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-xs text-slate-400 italic">
                RBP does not provide premium estimates. We connect you with specialist partners who provide formal quotations based on your data.
              </p>
           </div>
        </div>
        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4">
           {factors.map((f, i) => (
             <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="font-bold text-slate-700 italic">{f}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 4. InsuranceRelatedPolicies - Cross links
 */
export function InsuranceRelatedPolicies({ policies }: { policies: any[] }) {
  if (!policies) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {policies.map((p, i) => {
        const Icon = p.icon || CheckCircle2;
        return (
          <Link key={i} to={`/finance/insurance/${p.slug}`} className="bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-blue-400 hover:shadow-xl transition-all group">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                   <Icon className="w-6 h-6 text-blue-600" />
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
