import React, { useState } from "react";
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Send,
  Building,
  User,
  Mail,
  Phone,
  Briefcase,
  DollarSign,
  Calendar,
  AlertCircle,
  CheckCircle2,
  PieChart,
  Clock,
  Target,
  TrendingUp,
  Zap,
  FileText
} from "lucide-react";
import { ShortFormDisclosure } from "../../finance/FinanceShared";

interface FundingEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  abn: string;
  industry: string;
  fundingPurpose: string;
  fundingAmount: string;
  businessType: string;
  timeTrading: string;
  annualTurnover: string;
  existingLending: string;
  urgency: string;
  notes: string;
  productName: string;
}

export function FundingEnquiryModal({ isOpen, onClose, initialProduct = "General Funding Enquiry" }: FundingEnquiryModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    abn: "",
    industry: "",
    fundingPurpose: "",
    fundingAmount: "",
    businessType: "",
    timeTrading: "",
    annualTurnover: "",
    existingLending: "",
    urgency: "",
    notes: "",
    productName: initialProduct
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen && !isSuccess) return null;

  const validateStep1 = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.businessName) newErrors.businessName = "Business name required";
    if (!formData.abn) newErrors.abn = "ABN is required";
    if (!formData.industry) newErrors.industry = "Industry required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fundingPurpose) newErrors.fundingPurpose = "Purpose is required";
    if (!formData.fundingAmount) newErrors.fundingAmount = "Amount range is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const handleBack = () => setStep(step - 1);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Mock API call to info@remotebusinesspartner.com.au
    console.log("Submitting funding enquiry to info@remotebusinesspartner.com.au", formData);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const resetForm = () => {
    setStep(1);
    setIsSuccess(false);
    onClose();
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
        <div className="bg-white rounded-[2.5rem] w-full max-w-lg p-12 text-center relative z-10 shadow-2xl">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-blue-500" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Enquiry Received</h2>
          <p className="text-slate-500 mb-10 italic leading-relaxed">
            Your funding enquiry has been sent. Our team will review your details and contact you within 48 hours.
          </p>
          <button onClick={resetForm} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-lg hover:bg-black transition-all">
            Return to Hub
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="bg-white rounded-[2.5rem] w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col relative z-10 shadow-2xl">
        {/* Header */}
        <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight italic flex items-center gap-2">
                Discuss Funding <span className="text-blue-600">Today</span>
            </h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{formData.productName}</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors">
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        {/* Progress */}
        <div className="flex h-1.5 bg-slate-100">
          <div className={`h-full bg-blue-600 transition-all duration-500 ${step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'}`} />
        </div>

        {/* Body */}
        <div className="flex-grow overflow-y-auto p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Full Name" icon={User} required error={errors.fullName}>
                  <input type="text" className={inputClasses(!!errors.fullName)} value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} placeholder="John Doe" />
                </InputGroup>
                <InputGroup label="Email" icon={Mail} required error={errors.email}>
                  <input type="email" className={inputClasses(!!errors.email)} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="john@example.com" />
                </InputGroup>
                <InputGroup label="Phone" icon={Phone} required error={errors.phone}>
                  <input type="tel" className={inputClasses(!!errors.phone)} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="0400 000 000" />
                </InputGroup>
                <InputGroup label="Business Name" icon={Building} required error={errors.businessName}>
                  <input type="text" className={inputClasses(!!errors.businessName)} value={formData.businessName} onChange={e => setFormData({...formData, businessName: e.target.value})} placeholder="ACME Pty Ltd" />
                </InputGroup>
                <InputGroup label="ABN" icon={Briefcase} required error={errors.abn}>
                  <input type="text" className={inputClasses(!!errors.abn)} value={formData.abn} onChange={e => setFormData({...formData, abn: e.target.value})} placeholder="00 000 000 000" />
                </InputGroup>
                <InputGroup label="Industry" icon={PieChart} required error={errors.industry}>
                  <input type="text" className={inputClasses(!!errors.industry)} value={formData.industry} onChange={e => setFormData({...formData, industry: e.target.value})} placeholder="e.g. Retail" />
                </InputGroup>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
               <InputGroup label="Funding Purpose" icon={Target} required error={errors.fundingPurpose}>
                  <input type="text" className={inputClasses(!!errors.fundingPurpose)} value={formData.fundingPurpose} onChange={e => setFormData({...formData, fundingPurpose: e.target.value})} placeholder="e.g. Stock Purchase, Tax Debt, Expansion" />
               </InputGroup>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputGroup label="Funding Amount" icon={DollarSign} required error={errors.fundingAmount}>
                     <select className={inputClasses(!!errors.fundingAmount)} value={formData.fundingAmount} onChange={e => setFormData({...formData, fundingAmount: e.target.value})}>
                        <option value="">Select Range</option>
                        <option value="10k-50k">$10k - $50k</option>
                        <option value="50k-250k">$50k - $250k</option>
                        <option value="250k-1m">$250k - $1m</option>
                        <option value="1m+">$1m +</option>
                     </select>
                  </InputGroup>
                  <InputGroup label="Annual Turnover" icon={TrendingUp}>
                     <select className={inputClasses()} value={formData.annualTurnover} onChange={e => setFormData({...formData, annualTurnover: e.target.value})}>
                        <option value="">Select Range</option>
                        <option value="under-250k">Under $250k</option>
                        <option value="250k-1m">$250k - $1m</option>
                        <option value="1m-5m">$1m - $5m</option>
                        <option value="5m+">$5m +</option>
                     </select>
                  </InputGroup>
                  <InputGroup label="Time Trading" icon={Clock}>
                     <select className={inputClasses()} value={formData.timeTrading} onChange={e => setFormData({...formData, timeTrading: e.target.value})}>
                        <option value="">Select Period</option>
                        <option value="0-6-months">0 - 6 Months</option>
                        <option value="6-24-months">6 - 24 Months</option>
                        <option value="2-5-years">2 - 5 Years</option>
                        <option value="5-years+">5 Years +</option>
                     </select>
                  </InputGroup>
                  <InputGroup label="Urgency" icon={Zap}>
                     <select className={inputClasses()} value={formData.urgency} onChange={e => setFormData({...formData, urgency: e.target.value})}>
                        <option value="low">Low - Exploring Options</option>
                        <option value="medium">Medium - Next 30 Days</option>
                        <option value="high">High - Immediate Need</option>
                     </select>
                  </InputGroup>
               </div>
               <InputGroup label="Additional Notes" icon={FileText}>
                  <textarea className={`${inputClasses()} min-h-[100px]`} value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} placeholder="Any further context..." />
               </InputGroup>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
               <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                  <h4 className="text-lg font-black text-slate-900 mb-6 italic tracking-tight">Review Your Request</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                     <ReviewItem label="Name" value={formData.fullName} />
                     <ReviewItem label="Phone" value={formData.phone} />
                     <ReviewItem label="Business" value={formData.businessName} />
                     <ReviewItem label="Funding Amount" value={formData.fundingAmount} />
                     <div className="col-span-2 pt-4 border-t border-slate-100">
                        <ReviewItem label="Purpose" value={formData.fundingPurpose} />
                     </div>
                     <div className="col-span-2">
                        <ReviewItem label="Notes" value={formData.notes || "No notes provided"} />
                     </div>
                  </div>
               </div>
               <label className="flex items-start gap-4 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-blue-300 text-blue-600 focus:ring-blue-500" required />
                  <span className="text-sm text-slate-600 italic font-medium">
                    I confirm the information provided is accurate and I understand RBP will contact me regarding my funding enquiry.
                  </span>
               </label>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-slate-100 bg-slate-50">
          <div className="flex items-center justify-between mb-6">
            {step > 1 ? (
              <button onClick={handleBack} className="flex items-center gap-2 font-black text-slate-500 hover:text-slate-900 transition-colors">
                <ChevronLeft className="w-5 h-5" /> Back
              </button>
            ) : <div />}

            {step < 3 ? (
              <button onClick={handleNext} className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2">
                Continue <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button 
                onClick={handleSubmit} 
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-12 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"} <Send className="w-5 h-5" />
              </button>
            )}
          </div>
          <div className="opacity-70 px-4">
            <ShortFormDisclosure variant="compact" />
          </div>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, icon: Icon, required, error, children }: { label: string, icon: any, required?: boolean, error?: string, children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="flex items-center justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">
        <span className="flex items-center gap-1.5"><Icon className="w-3 h-3" /> {label} {required && <span className="text-rose-500">*</span>}</span>
        {error && <span className="text-rose-500 normal-case flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {error}</span>}
      </label>
      {children}
    </div>
  );
}

function ReviewItem({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{label}</h5>
      <p className="text-slate-900 font-bold italic leading-snug">{value}</p>
    </div>
  );
}

const inputClasses = (hasError: boolean = false) => `
  w-full bg-slate-50 border rounded-2xl p-4 text-slate-900 focus:outline-none focus:ring-1 transition-all italic
  ${hasError ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500'}
`;
