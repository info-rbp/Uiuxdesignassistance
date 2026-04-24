import { useState, useRef } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  ShieldAlert,
  Lightbulb,
  TrendingUp,
  Activity,
  HelpCircle,
  UploadCloud,
  FileText,
  Briefcase,
  AlertCircle,
  FileBarChart2,
  Check,
  ChevronRight,
  Info
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// -- Mock data for Dropdowns and Options --
const businessStages = ["Starting", "Operating", "Growing", "Scaling", "Under pressure"];
const businessSizes = ["Sole operator", "2–5 staff", "6–20 staff", "21–50 staff", "50+ staff"];
const urgencies = ["Low", "Normal", "Urgent", "Deadline-driven"];
const riskStages = ["Draft", "Final version", "Renewal", "Variation", "Already signed"];
const riskConcerns = ["Payment terms", "Termination", "Liability", "Indemnity", "Confidentiality", "Intellectual property", "Exclusivity", "Performance obligations", "Renewal", "Other"];
const strategicConstraints = ["Budget", "Time", "Team capacity", "Systems", "Market conditions", "Cash flow", "Leadership alignment"];
const growthAims = ["More customers", "More revenue", "New market", "New service/product", "Larger team", "Better systems", "Higher profitability"];
const diagnosticAffectedAreas = ["Sales", "Marketing", "Operations", "Cash flow", "Profitability", "Staff", "Customer service", "Systems", "Delivery", "Leadership"];

export function BusinessAdvisorIntakePage() {
  const [currentStep, setCurrentStep] = useState(0); // 0 is entry, 1-7 are the wizard steps, 8 for clarification
  const [direction, setDirection] = useState("forward");

  // State
  const [reviewType, setReviewType] = useState<string | null>(null);
  const [businessDetails, setBusinessDetails] = useState({
    name: "",
    industry: "",
    stage: "",
    size: "",
    location: "",
    contactName: "",
    email: "",
    phone: "",
  });
  const [issueSummary, setIssueSummary] = useState({
    title: "",
    summary: "",
    whyMattersNow: "",
    desiredOutcome: "",
    urgency: "",
    deadline: "",
  });
  const [dynamicAnswers, setDynamicAnswers] = useState<Record<string, any>>({});
  const [uploadedFiles, setUploadedFiles] = useState<{ id: string; name: string; note: string; size: string }[]>([]);

  // Navigation handlers
  const nextStep = () => {
    setDirection("forward");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setDirection("backward");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentStep((prev) => prev - 1);
  };

  // Step Progress Array (Excluding Entry and Clarification)
  const progressSteps = [
    { title: "Review Type", stepIndex: 1 },
    { title: "Business Details", stepIndex: 2 },
    { title: "Issue Summary", stepIndex: 3 },
    { title: "Questions", stepIndex: 4 },
    { title: "Documents", stepIndex: 5 },
    { title: "Confirm", stepIndex: 6 },
    { title: "Submitted", stepIndex: 7 },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((f) => ({
        id: Math.random().toString(36).substring(7),
        name: f.name,
        size: (f.size / 1024 / 1024).toFixed(2) + " MB",
        note: "",
      }));
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  const removeFile = (id: string) => {
    setUploadedFiles(uploadedFiles.filter((f) => f.id !== id));
  };

  const updateFileNote = (id: string, note: string) => {
    setUploadedFiles(uploadedFiles.map(f => f.id === id ? { ...f, note } : f));
  };

  // Screen Renders
  const renderEntryScreen = () => (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="w-20 h-20 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
        <Briefcase className="w-10 h-10" />
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
        Start your Business Advisor Review
      </h1>
      <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
        Give us the context of your situation, upload any relevant files, and our system will turn it into structured advice with practical next steps. You can save your progress and return later.
      </p>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm text-left p-8 mb-12">
        <h3 className="font-bold text-slate-900 mb-6 text-xl">What to expect</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Information we need</h4>
            </div>
            <p className="text-sm text-slate-600 pl-11">Brief business details, context of your challenge, and any specific questions you have.</p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <UploadCloud className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Supporting documents</h4>
            </div>
            <p className="text-sm text-slate-600 pl-11">Upload contracts, financial summaries, or business plans (optional but helpful).</p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Time required</h4>
            </div>
            <p className="text-sm text-slate-600 pl-11">Typically takes 10–15 minutes. Progress is tracked step-by-step.</p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                <FileBarChart2 className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">What you get</h4>
            </div>
            <p className="text-sm text-slate-600 pl-11">A structured, written advisory report with prioritised recommendations.</p>
          </div>
        </div>
      </div>

      <button
        onClick={nextStep}
        className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
      >
        Start Review
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );

  const renderReviewTypeScreen = () => {
    const types = [
      { id: "Risk Review", icon: ShieldAlert, color: "text-red-600 bg-red-50 border-red-200", desc: "Review a contract, agreement, commercial risk, or business exposure." },
      { id: "Strategic Review", icon: Lightbulb, color: "text-amber-600 bg-amber-50 border-amber-200", desc: "Assess a decision, opportunity, or business direction." },
      { id: "Growth Review", icon: TrendingUp, color: "text-emerald-600 bg-emerald-50 border-emerald-200", desc: "Build a plan for growth, expansion, or performance improvement." },
      { id: "Diagnostic Review", icon: Activity, color: "text-blue-600 bg-blue-50 border-blue-200", desc: "Understand what is not working and identify practical fixes." },
      { id: "Help Me Choose", icon: HelpCircle, color: "text-violet-600 bg-violet-50 border-violet-200", desc: "Answer a few triage questions and the system recommends a pathway." },
    ];

    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">What do you need help with?</h2>
          <p className="text-slate-600">Select the review type that best fits your current situation.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {types.map((t) => (
            <button
              key={t.id}
              onClick={() => setReviewType(t.id)}
              className={`text-left p-6 rounded-2xl border transition-all ${
                reviewType === t.id
                  ? `border-blue-600 ring-2 ring-blue-600/20 bg-blue-50/30`
                  : `border-slate-200 bg-white hover:border-slate-300 hover:shadow-md`
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${t.color}`}>
                  <t.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{t.id}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{t.desc}</p>
                </div>
                {reviewType === t.id && (
                  <CheckCircle className="w-5 h-5 text-blue-600 ml-auto shrink-0" />
                )}
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-12 flex items-center justify-end border-t border-slate-100 pt-6">
          <button
            disabled={!reviewType}
            onClick={nextStep}
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-3 rounded-xl transition-all"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  const renderBusinessDetailsScreen = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Tell us about your business</h2>
        <p className="text-slate-600">We use this to tailor our advice to your scale and industry.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">Business Name</label>
            <input
              type="text"
              value={businessDetails.name}
              onChange={(e) => setBusinessDetails({ ...businessDetails, name: e.target.value })}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              placeholder="e.g. Acme Corp"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">Industry</label>
            <input
              type="text"
              value={businessDetails.industry}
              onChange={(e) => setBusinessDetails({ ...businessDetails, industry: e.target.value })}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              placeholder="e.g. Healthcare, Tech"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">Business Stage</label>
            <select
              value={businessDetails.stage}
              onChange={(e) => setBusinessDetails({ ...businessDetails, stage: e.target.value })}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-white"
            >
              <option value="">Select stage...</option>
              {businessStages.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">Business Size</label>
            <select
              value={businessDetails.size}
              onChange={(e) => setBusinessDetails({ ...businessDetails, size: e.target.value })}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-white"
            >
              <option value="">Select size...</option>
              {businessSizes.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-bold text-slate-900 mb-2">Location</label>
            <input
              type="text"
              value={businessDetails.location}
              onChange={(e) => setBusinessDetails({ ...businessDetails, location: e.target.value })}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              placeholder="City, State"
            />
          </div>
          <div className="sm:col-span-2 border-t border-slate-100 pt-6 mt-2">
            <h4 className="font-bold text-slate-900 mb-4">Contact Information</h4>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">Contact Name</label>
            <input
              type="text"
              value={businessDetails.contactName}
              onChange={(e) => setBusinessDetails({ ...businessDetails, contactName: e.target.value })}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">Contact Email</label>
            <input
              type="email"
              value={businessDetails.email}
              onChange={(e) => setBusinessDetails({ ...businessDetails, email: e.target.value })}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">
        <button onClick={prevStep} className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold px-4 py-2 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button
          onClick={nextStep}
          className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-sm"
        >
          Continue <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const renderIssueSummaryScreen = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Tell us what you need help with.</h2>
        <p className="text-slate-600">Provide an overview of the situation so we can understand your goal.</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <label className="block text-sm font-bold text-slate-900 mb-2">Short title for this review</label>
          <input
            type="text"
            value={issueSummary.title}
            onChange={(e) => setIssueSummary({ ...issueSummary, title: e.target.value })}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
            placeholder="e.g. Software Vendor Contract Review"
          />

          <label className="block text-sm font-bold text-slate-900 mb-2">Summary of the issue, opportunity, or goal</label>
          <p className="text-xs text-slate-500 mb-3 flex items-center gap-1.5"><Info className="w-3.5 h-3.5"/> What are you trying to decide or solve?</p>
          <textarea
            value={issueSummary.summary}
            onChange={(e) => setIssueSummary({ ...issueSummary, summary: e.target.value })}
            rows={4}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
            placeholder="Describe the situation..."
          />

          <label className="block text-sm font-bold text-slate-900 mb-2">Why does this matter now?</label>
          <textarea
            value={issueSummary.whyMattersNow}
            onChange={(e) => setIssueSummary({ ...issueSummary, whyMattersNow: e.target.value })}
            rows={3}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
          />

          <label className="block text-sm font-bold text-slate-900 mb-2">Desired outcome</label>
          <p className="text-xs text-slate-500 mb-3 flex items-center gap-1.5"><Info className="w-3.5 h-3.5"/> What would a good outcome look like?</p>
          <textarea
            value={issueSummary.desiredOutcome}
            onChange={(e) => setIssueSummary({ ...issueSummary, desiredOutcome: e.target.value })}
            rows={3}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Urgency</label>
              <select
                value={issueSummary.urgency}
                onChange={(e) => setIssueSummary({ ...issueSummary, urgency: e.target.value })}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Select urgency...</option>
                {urgencies.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Deadline (if applicable)</label>
              <input
                type="date"
                value={issueSummary.deadline}
                onChange={(e) => setIssueSummary({ ...issueSummary, deadline: e.target.value })}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">
        <button onClick={prevStep} className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold px-4 py-2 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button onClick={nextStep} className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-sm">
          Continue <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const updateDynamicAnswer = (key: string, value: any) => {
    setDynamicAnswers(prev => ({ ...prev, [key]: value }));
  };

  const renderDynamicQuestionsScreen = () => {
    let content = null;
    let title = "Review Questions";

    if (reviewType === "Risk Review") {
      title = "Risk Review Details";
      content = (
        <div className="space-y-6">
          <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 mb-6 text-sm text-blue-800 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-blue-600" />
            <p>Used for contracts, agreements, obligations, and risk concerns.</p>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">What type of agreement or issue is this?</label>
            <input type="text" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('agreementType', e.target.value)} value={dynamicAnswers['agreementType'] || ''} />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">Who is the other party?</label>
            <input type="text" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('otherParty', e.target.value)} value={dynamicAnswers['otherParty'] || ''} />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">What stage is it at?</label>
            <div className="flex flex-wrap gap-2">
              {riskStages.map(stage => (
                <button key={stage} onClick={() => updateDynamicAnswer('stage', stage)} className={`px-4 py-2 rounded-xl text-sm font-medium border ${dynamicAnswers['stage'] === stage ? 'bg-blue-50 border-blue-600 text-blue-700' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}>{stage}</button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">What are you most concerned about?</label>
            <div className="flex flex-wrap gap-2">
              {riskConcerns.map(concern => {
                const selected = dynamicAnswers['concerns']?.includes(concern);
                return (
                  <button key={concern} onClick={() => {
                    const current = dynamicAnswers['concerns'] || [];
                    updateDynamicAnswer('concerns', selected ? current.filter((c:string) => c !== concern) : [...current, concern]);
                  }} className={`px-4 py-2 rounded-xl text-sm font-medium border ${selected ? 'bg-blue-50 border-blue-600 text-blue-700' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}>{concern}</button>
                )
              })}
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">When do you need to decide?</label>
            <input type="date" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('decisionDate', e.target.value)} value={dynamicAnswers['decisionDate'] || ''} />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">Any clauses you want reviewed closely?</label>
            <textarea rows={3} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('clauses', e.target.value)} value={dynamicAnswers['clauses'] || ''} />
          </div>
        </div>
      );
    } else if (reviewType === "Strategic Review") {
      title = "Strategy Details";
      content = (
        <div className="space-y-6">
           <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-5 mb-6 text-sm text-amber-800 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
            <p>Used for opportunities, decisions, and business direction.</p>
          </div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">What decision or opportunity are you considering?</label><textarea rows={3} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('decision', e.target.value)} value={dynamicAnswers['decision'] || ''} /></div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">What is happening in the business currently?</label><textarea rows={3} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('currentSituation', e.target.value)} value={dynamicAnswers['currentSituation'] || ''} /></div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">What are you trying to improve?</label><textarea rows={2} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('improve', e.target.value)} value={dynamicAnswers['improve'] || ''} /></div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">What options are you considering?</label><textarea rows={2} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('options', e.target.value)} value={dynamicAnswers['options'] || ''} /></div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">What has already been tried?</label><textarea rows={2} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('tried', e.target.value)} value={dynamicAnswers['tried'] || ''} /></div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">What constraints exist?</label>
            <div className="flex flex-wrap gap-2">
              {strategicConstraints.map(constraint => {
                 const selected = dynamicAnswers['constraints']?.includes(constraint);
                 return (
                   <button key={constraint} onClick={() => {
                     const current = dynamicAnswers['constraints'] || [];
                     updateDynamicAnswer('constraints', selected ? current.filter((c:string) => c !== constraint) : [...current, constraint]);
                   }} className={`px-4 py-2 rounded-xl text-sm font-medium border ${selected ? 'bg-blue-50 border-blue-600 text-blue-700' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}>{constraint}</button>
                 )
              })}
            </div>
          </div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">What information or evidence do you already have?</label><textarea rows={2} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('evidence', e.target.value)} value={dynamicAnswers['evidence'] || ''} /></div>
        </div>
      );
    } else if (reviewType === "Growth Review") {
      title = "Growth & Expansion Details";
      content = (
        <div className="space-y-6">
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-5 mb-6 text-sm text-emerald-800 flex items-start gap-3">
            <TrendingUp className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
            <p>Used for scaling, expansion, revenue growth, and growth planning.</p>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">What kind of growth are you aiming for?</label>
            <div className="flex flex-wrap gap-2">
              {growthAims.map(aim => {
                 const selected = dynamicAnswers['aims']?.includes(aim);
                 return (
                   <button key={aim} onClick={() => {
                     const current = dynamicAnswers['aims'] || [];
                     updateDynamicAnswer('aims', selected ? current.filter((c:string) => c !== aim) : [...current, aim]);
                   }} className={`px-4 py-2 rounded-xl text-sm font-medium border ${selected ? 'bg-blue-50 border-blue-600 text-blue-700' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}>{aim}</button>
                 )
              })}
            </div>
          </div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">What area of the business is involved?</label><input type="text" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('area', e.target.value)} value={dynamicAnswers['area'] || ''} /></div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">What opportunities do you currently see?</label><textarea rows={2} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('opportunities', e.target.value)} value={dynamicAnswers['opportunities'] || ''} /></div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">What is blocking growth?</label><textarea rows={2} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('blocking', e.target.value)} value={dynamicAnswers['blocking'] || ''} /></div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">What timeline are you working toward?</label><input type="text" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('timeline', e.target.value)} value={dynamicAnswers['timeline'] || ''} /></div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">What resources do you currently have?</label><textarea rows={2} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('resources', e.target.value)} value={dynamicAnswers['resources'] || ''} /></div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">What risks are you concerned about?</label><textarea rows={2} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('risks', e.target.value)} value={dynamicAnswers['risks'] || ''} /></div>
        </div>
      );
    } else {
      // Diagnostic Review or fallback
      title = "Diagnostic Review Details";
      content = (
        <div className="space-y-6">
          <div className="bg-sky-50/50 border border-sky-100 rounded-2xl p-5 mb-6 text-sm text-sky-800 flex items-start gap-3">
            <Activity className="w-5 h-5 shrink-0 mt-0.5 text-sky-600" />
            <p>Used when something is not working and the client needs clarity.</p>
          </div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">What feels wrong or underperforming?</label><textarea rows={3} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('wrong', e.target.value)} value={dynamicAnswers['wrong'] || ''} /></div>
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">Which areas are affected?</label>
            <div className="flex flex-wrap gap-2">
              {diagnosticAffectedAreas.map(area => {
                 const selected = dynamicAnswers['areas']?.includes(area);
                 return (
                   <button key={area} onClick={() => {
                     const current = dynamicAnswers['areas'] || [];
                     updateDynamicAnswer('areas', selected ? current.filter((c:string) => c !== area) : [...current, area]);
                   }} className={`px-4 py-2 rounded-xl text-sm font-medium border ${selected ? 'bg-blue-50 border-blue-600 text-blue-700' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}>{area}</button>
                 )
              })}
            </div>
          </div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">How long has this been happening?</label><input type="text" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('duration', e.target.value)} value={dynamicAnswers['duration'] || ''} /></div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">What impact is it having?</label><textarea rows={2} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('impact', e.target.value)} value={dynamicAnswers['impact'] || ''} /></div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">What have you already tried?</label><textarea rows={2} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('tried', e.target.value)} value={dynamicAnswers['tried'] || ''} /></div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">What evidence can you provide?</label><textarea rows={2} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('evidence', e.target.value)} value={dynamicAnswers['evidence'] || ''} /></div>
          <div><label className="block text-sm font-bold text-slate-900 mb-2">What would you like the review to help uncover?</label><textarea rows={2} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" onChange={(e) => updateDynamicAnswer('uncover', e.target.value)} value={dynamicAnswers['uncover'] || ''} /></div>
        </div>
      );
    }

    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
         <div className="mb-10 text-center sm:text-left">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">{title}</h2>
          <p className="text-slate-600">These questions adapt based on the {reviewType} you selected.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          {content}
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">
          <button onClick={prevStep} className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold px-4 py-2 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <button onClick={nextStep} className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-sm">
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const renderDocumentsScreen = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Upload anything that helps us understand your situation.</h2>
        <p className="text-slate-600">Such as contracts, financial summaries, business plans, or relevant emails. This is optional.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm mb-6 text-center border-dashed">
        <UploadCloud className="w-12 h-12 text-slate-300 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-slate-900 mb-2">Drag and drop files here</h3>
        <p className="text-slate-500 text-sm mb-6">or click to browse from your computer</p>
        <button onClick={() => fileInputRef.current?.click()} className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold px-6 py-2 rounded-xl transition-colors">
          Browse Files
        </button>
        <input type="file" multiple className="hidden" ref={fileInputRef} onChange={handleFileUpload} />
        
        <div className="mt-8 pt-6 border-t border-slate-100 text-left">
          <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider font-bold">Accepted Examples</p>
          <div className="flex flex-wrap gap-2">
            {["Contracts", "Financials", "Business plans", "Process notes", "Spreadsheets", "Policies", "Proposals"].map(t => (
              <span key={t} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="space-y-4 mb-8">
          <h4 className="font-bold text-slate-900">Uploaded Files ({uploadedFiles.length})</h4>
          {uploadedFiles.map(file => (
             <div key={file.id} className="bg-white border border-slate-200 p-4 rounded-xl flex flex-col sm:flex-row gap-4 items-start sm:items-center">
               <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                 <FileText className="w-5 h-5" />
               </div>
               <div className="flex-1 min-w-0">
                 <div className="font-bold text-slate-900 text-sm truncate">{file.name}</div>
                 <div className="text-xs text-slate-500">{file.size}</div>
               </div>
               <div className="w-full sm:w-1/2">
                 <input 
                   type="text" 
                   placeholder="Add a short note (optional)" 
                   value={file.note}
                   onChange={(e) => updateFileNote(file.id, e.target.value)}
                   className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                 />
               </div>
               <button onClick={() => removeFile(file.id)} className="text-slate-400 hover:text-red-500 p-2">
                 &times;
               </button>
             </div>
          ))}
        </div>
      )}

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3">
        <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
        <p className="text-sm text-slate-600 leading-relaxed">
          Documents are optional unless strictly required for a contract review. If you don't have documents right now, you can skip this step.
        </p>
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">
        <button onClick={prevStep} className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold px-4 py-2 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="flex gap-4">
           {uploadedFiles.length === 0 && (
              <button onClick={nextStep} className="text-slate-500 hover:text-slate-900 font-medium px-4 py-2">
                I don't have documents
              </button>
           )}
          <button onClick={nextStep} className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-sm">
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderReviewSummaryScreen = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10 text-center sm:text-left flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Review your submission</h2>
          <p className="text-slate-600">Please confirm your details before we prepare your structured advice.</p>
        </div>
        <button className="hidden sm:flex text-slate-500 hover:text-slate-900 text-sm font-medium border border-slate-200 px-4 py-2 rounded-lg bg-white">
          Save Draft
        </button>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
            <h3 className="font-bold text-slate-900">Review Setup</h3>
            <button onClick={() => setCurrentStep(1)} className="text-blue-600 text-sm font-medium hover:underline">Edit</button>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Type</div>
              <div className="font-medium text-slate-900">{reviewType}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Business</div>
              <div className="font-medium text-slate-900">{businessDetails.name || "Not provided"} ({businessDetails.size || "-"})</div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
            <h3 className="font-bold text-slate-900">Issue Summary</h3>
            <button onClick={() => setCurrentStep(3)} className="text-blue-600 text-sm font-medium hover:underline">Edit</button>
          </div>
          <div className="p-6 space-y-4">
             <div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Title</div>
              <div className="font-medium text-slate-900">{issueSummary.title || "Not provided"}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Situation Overview</div>
              <div className="text-slate-700 text-sm">{issueSummary.summary || "Not provided"}</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Desired Outcome</div>
                <div className="text-slate-700 text-sm">{issueSummary.desiredOutcome || "Not provided"}</div>
              </div>
               <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Urgency</div>
                <div className="text-slate-700 text-sm">{issueSummary.urgency || "Normal"}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
            <h3 className="font-bold text-slate-900">Key Context</h3>
            <button onClick={() => setCurrentStep(4)} className="text-blue-600 text-sm font-medium hover:underline">Edit</button>
          </div>
          <div className="p-6">
            <p className="text-sm text-slate-600 italic border-l-2 border-slate-200 pl-4 py-1">
              Your detailed answers have been recorded for the {reviewType}.
            </p>
          </div>
        </div>

        {uploadedFiles.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-bold text-slate-900">Documents</h3>
              <button onClick={() => setCurrentStep(5)} className="text-blue-600 text-sm font-medium hover:underline">Edit</button>
            </div>
            <div className="p-6">
              <ul className="space-y-2">
                {uploadedFiles.map(f => (
                  <li key={f.id} className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-400" /> {f.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between border-t border-slate-100 pt-6 gap-4">
        <button onClick={prevStep} className="w-full sm:w-auto inline-flex justify-center items-center gap-2 text-slate-500 hover:text-slate-900 font-bold px-4 py-2 transition-colors order-2 sm:order-1">
          <ArrowLeft className="w-4 h-4" /> Go Back and Edit
        </button>
        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 order-1 sm:order-2">
          <button className="sm:hidden w-full text-slate-700 bg-slate-100 font-bold px-6 py-3 rounded-xl">Save Draft</button>
          <button onClick={nextStep} className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl">
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );

  const renderConfirmationScreen = () => (
    <div className="max-w-xl mx-auto px-4 py-12 text-center animate-in fade-in zoom-in-95 duration-500">
      <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
        <Check className="w-12 h-12" />
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
        Your Business Advisor review has been submitted.
      </h1>
      <p className="text-lg text-slate-600 mb-10 leading-relaxed">
        We’ll review your information and prepare structured written advice. If we need anything clarified, we’ll contact you before finalising the review.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl text-left p-6 mb-10 shadow-inner">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="text-slate-500 font-medium">Reference Number</div>
          <div className="font-bold text-slate-900 text-right">RBP-BA-8492</div>
          <div className="text-slate-500 font-medium">Review Type</div>
          <div className="font-bold text-slate-900 text-right">{reviewType}</div>
          <div className="text-slate-500 font-medium">Expected Response</div>
          <div className="font-bold text-slate-900 text-right">1-2 Business Days</div>
          <div className="text-slate-500 font-medium">Status Track</div>
          <div className="font-bold text-slate-900 text-right text-blue-600">Available in Portal</div>
        </div>
      </div>

       <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
         <Link to="/" className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold px-8 py-3.5 rounded-xl transition-all">
           Return Home
         </Link>
         <button onClick={() => setCurrentStep(8)} className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md">
           View in Portal / History
         </button>
       </div>
    </div>
  );

  const renderClarificationScreen = () => (
    <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8 p-6 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-4">
        <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center shrink-0 mt-1">
          <AlertCircle className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-amber-900 mb-2">We need a little more context before completing your review.</h2>
          <p className="text-amber-800 text-sm leading-relaxed mb-4">
            Our advisory team reviewed your submission for <span className="font-bold">Software Vendor Contract Review</span>. To provide the best structured advice, please clarify the points below.
          </p>
          <div className="flex items-center gap-3 text-sm font-medium text-amber-700 bg-amber-100/50 px-4 py-2 rounded-lg inline-flex">
            <span>Due Date: Tomorrow</span>
            <span className="w-1 h-1 rounded-full bg-amber-400"></span>
            <span>Status: Waiting on you</span>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8 space-y-8">
        <div>
          <h3 className="font-bold text-slate-900 mb-2">1. What specific outcome are you trying to achieve with the liability clause?</h3>
          <p className="text-sm text-slate-500 mb-3">You mentioned liability is a concern, but are you trying to cap it at a specific dollar amount or exclude indirect damages entirely?</p>
          <textarea rows={3} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" placeholder="Type your clarification here..."></textarea>
        </div>

        <div>
          <h3 className="font-bold text-slate-900 mb-2">2. Are there any alternative vendors currently being considered?</h3>
          <p className="text-sm text-slate-500 mb-3">If negotiations stall, what is your fallback plan?</p>
          <textarea rows={3} className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" placeholder="Type your clarification here..."></textarea>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <h3 className="font-bold text-slate-900 mb-4">Optional: Additional Documents</h3>
          <button className="flex items-center justify-center gap-2 w-full border-2 border-dashed border-slate-300 rounded-xl p-6 text-slate-500 hover:bg-slate-50 hover:text-blue-600 hover:border-blue-300 transition-colors">
            <UploadCloud className="w-5 h-5" />
            <span className="font-medium">Upload more files</span>
          </button>
        </div>

        <div className="pt-6">
           <button onClick={() => setCurrentStep(7)} className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md text-lg">
             Submit Clarification
           </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      {/* Progress Bar Header (only show during the wizard 1-6) */}
      {currentStep > 0 && currentStep < 7 && (
        <div className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="hidden md:flex items-center justify-between">
              {progressSteps.slice(0, 6).map((step, idx) => {
                const isActive = step.stepIndex === currentStep;
                const isPast = step.stepIndex < currentStep;
                return (
                  <div key={idx} className="flex items-center flex-1">
                    <div className="flex flex-col items-center flex-1 z-10 relative">
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
                         isActive ? 'bg-blue-600 border-blue-600 text-white ring-4 ring-blue-50' : 
                         isPast ? 'bg-blue-600 border-blue-600 text-white' : 
                         'bg-white border-slate-300 text-slate-400'
                       }`}>
                         {isPast ? <Check className="w-4 h-4" /> : step.stepIndex}
                       </div>
                       <span className={`absolute top-10 text-xs font-bold whitespace-nowrap transition-colors ${
                         isActive ? 'text-blue-700' : isPast ? 'text-slate-700' : 'text-slate-400'
                       }`}>
                         {step.title}
                       </span>
                    </div>
                    {idx < 5 && (
                      <div className={`h-1 flex-1 -mx-8 z-0 relative top-[-10px] transition-colors rounded-full ${isPast ? 'bg-blue-600' : 'bg-slate-200'}`} />
                    )}
                  </div>
                );
              })}
            </div>
            {/* Mobile Progress */}
            <div className="md:hidden flex items-center justify-between">
              <div className="text-sm font-bold text-slate-500">Step {currentStep} of 6</div>
              <div className="font-bold text-slate-900">{progressSteps[currentStep-1]?.title}</div>
            </div>
            <div className="md:hidden w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
               <div className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out" style={{ width: `${(currentStep / 6) * 100}%` }} />
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {currentStep === 0 && renderEntryScreen()}
        {currentStep === 1 && renderReviewTypeScreen()}
        {currentStep === 2 && renderBusinessDetailsScreen()}
        {currentStep === 3 && renderIssueSummaryScreen()}
        {currentStep === 4 && renderDynamicQuestionsScreen()}
        {currentStep === 5 && renderDocumentsScreen()}
        {currentStep === 6 && renderReviewSummaryScreen()}
        {currentStep === 7 && renderConfirmationScreen()}
        {currentStep === 8 && renderClarificationScreen()}
      </main>

      <Footer />
    </div>
  );
}
