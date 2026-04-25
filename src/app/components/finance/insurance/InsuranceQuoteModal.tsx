import React, { useState, useRef } from "react";
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Upload, 
  CheckCircle2, 
  Send,
  FileText,
  AlertCircle,
  Building,
  User,
  Mail,
  Phone,
  Briefcase
} from "lucide-react";
import { ShortFormDisclosure } from "../FinanceShared";

interface InsuranceQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPolicy?: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  abn: string;
  acn: string;
  industry: string;
  currentPolicyFile: File | null;
  notes: string;
  policyType: string;
}

export function InsuranceQuoteModal({ isOpen, onClose, initialPolicy = "General Enquiry" }: InsuranceQuoteModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    abn: "",
    acn: "",
    industry: "",
    currentPolicyFile: null,
    notes: "",
    policyType: initialPolicy
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen && !isSuccess) return null;

  const validateStep1 = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.businessName) newErrors.businessName = "Business name is required";
    if (!formData.abn) newErrors.abn = "ABN is required";
    if (!formData.industry) newErrors.industry = "Industry is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2) setStep(3);
  };

  const handleBack = () => setStep(step - 1);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call to send email to info@remotebusinesspartner.com.au
    console.log("Sending enquiry to info@remotebusinesspartner.com.au...", {
      subject: `New Insurance Quote Request - ${formData.businessName} - ${formData.policyType}`,
      payload: {
        ...formData,
        timestamp: new Date().toISOString(),
        fileName: formData.currentPolicyFile?.name || "No file uploaded"
      }
    });

    // Mock delay
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
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Quote Request Received</h2>
          <p className="text-slate-500 mb-10 italic leading-relaxed">
            Thanks for submitting your insurance enquiry. Our team will review your details and contact you within 48 hours to discuss your quote options.
          </p>
          <div className="flex flex-col gap-3">
             <button onClick={resetForm} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-lg hover:bg-black transition-all">
               Return to Hub
             </button>
          </div>
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
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Get A Quote</h2>
            <p className="text-slate-500 text-sm font-medium italic">{formData.policyType}</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors">
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex h-1.5 bg-slate-100">
          <div className={`h-full bg-emerald-500 transition-all duration-500 ${step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'}`} />
        </div>

        {/* Form Body */}
        <div className="flex-grow overflow-y-auto p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Full Name" icon={User} required error={errors.fullName}>
                  <input 
                    type="text" 
                    className={inputClasses(!!errors.fullName)}
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="John Doe"
                  />
                </InputGroup>
                <InputGroup label="Email Address" icon={Mail} required error={errors.email}>
                  <input 
                    type="email" 
                    className={inputClasses(!!errors.email)}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                  />
                </InputGroup>
                <InputGroup label="Phone Number" icon={Phone} required error={errors.phone}>
                  <input 
                    type="tel" 
                    className={inputClasses(!!errors.phone)}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="0400 000 000"
                  />
                </InputGroup>
                <InputGroup label="Business Name" icon={Building} required error={errors.businessName}>
                  <input 
                    type="text" 
                    className={inputClasses(!!errors.businessName)}
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    placeholder="ACME Corp Pty Ltd"
                  />
                </InputGroup>
                <InputGroup label="ABN" icon={FileText} required error={errors.abn}>
                  <input 
                    type="text" 
                    className={inputClasses(!!errors.abn)}
                    value={formData.abn}
                    onChange={(e) => setFormData({...formData, abn: e.target.value})}
                    placeholder="00 000 000 000"
                  />
                </InputGroup>
                <InputGroup label="ACN (Optional)" icon={FileText}>
                  <input 
                    type="text" 
                    className={inputClasses()}
                    value={formData.acn}
                    onChange={(e) => setFormData({...formData, acn: e.target.value})}
                    placeholder="000 000 000"
                  />
                </InputGroup>
              </div>
              <InputGroup label="Industry" icon={Briefcase} required error={errors.industry}>
                <input 
                  type="text" 
                  className={inputClasses(!!errors.industry)}
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                  placeholder="e.g. Construction, Consulting, Retail"
                />
              </InputGroup>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8">
                <h4 className="flex items-center gap-2 font-black text-slate-900 mb-4 tracking-tight">
                  <Upload className="w-5 h-5 text-emerald-600" /> Upload Current Policy
                </h4>
                <p className="text-slate-600 text-sm italic mb-6">
                  Upload a copy of your current policy if available so we can better understand your current cover and requirements.
                </p>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-white border-2 border-dashed border-emerald-200 rounded-2xl p-10 text-center cursor-pointer hover:border-emerald-400 hover:bg-emerald-50/50 transition-all"
                >
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    onChange={(e) => setFormData({...formData, currentPolicyFile: e.target.files?.[0] || null})}
                    accept=".pdf,.doc,.docx,.jpg,.png"
                  />
                  {formData.currentPolicyFile ? (
                    <div className="flex flex-col items-center">
                       <FileText className="w-12 h-12 text-emerald-500 mb-3" />
                       <span className="font-bold text-slate-900">{formData.currentPolicyFile.name}</span>
                       <button onClick={(e) => { e.stopPropagation(); setFormData({...formData, currentPolicyFile: null}) }} className="text-rose-500 text-xs font-bold mt-2 hover:underline underline-offset-4">Remove File</button>
                    </div>
                  ) : (
                    <>
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Upload className="w-6 h-6 text-emerald-600" />
                      </div>
                      <p className="font-bold text-slate-700">Click to upload or drag and drop</p>
                      <p className="text-slate-400 text-xs mt-1 italic">PDF, DOC, JPG or PNG (Max 10MB)</p>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-1">Additional Notes / Comments</label>
                <textarea 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all italic min-h-[120px]"
                  placeholder="Tell us more about your specific needs..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <h4 className="text-xl font-black text-slate-900 mb-6 tracking-tight">Review Your details</h4>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                   <ReviewItem label="Full Name" value={formData.fullName} />
                   <ReviewItem label="Email" value={formData.email} />
                   <ReviewItem label="Phone" value={formData.phone} />
                   <ReviewItem label="Business Name" value={formData.businessName} />
                   <ReviewItem label="ABN" value={formData.abn} />
                   <ReviewItem label="Industry" value={formData.industry} />
                   <div className="col-span-2 border-t border-slate-200 pt-6">
                      <ReviewItem label="Policy Document" value={formData.currentPolicyFile?.name || "No file uploaded"} />
                   </div>
                   <div className="col-span-2">
                      <ReviewItem label="Notes" value={formData.notes || "None provided"} />
                   </div>
                </div>
              </div>

              <label className="flex items-start gap-4 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-blue-300 text-blue-600 focus:ring-blue-500" required />
                  <span className="text-sm text-slate-600 italic font-medium">
                    I confirm the information provided is accurate to the best of my knowledge and I understand RBP will contact me regarding my quote request.
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
              <button onClick={handleNext} className="bg-emerald-500 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2">
                Continue <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button 
                onClick={handleSubmit} 
                disabled={isSubmitting}
                className="bg-emerald-500 text-white px-12 py-4 rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"} <Send className="w-5 h-5" />
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
      <label className="flex items-center justify-between text-xs font-black text-slate-500 uppercase tracking-widest px-1">
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
  ${hasError ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-500'}
`;
