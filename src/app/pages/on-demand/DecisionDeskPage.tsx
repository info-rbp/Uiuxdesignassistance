import { useState } from "react";
import { Link } from "react-router";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { PageHero } from "../../components/PageHero";
import { CTABanner } from "../../components/CTABanner";
import { MessageSquare, ArrowRight, CheckCircle, Clock, ChevronDown, ChevronUp } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1758519288969-4806f015852d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhbnQlMjBhZHZpc29yeSUyMG1lZXRpbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3Nzc1NDY4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080";

const steps = [
  { step: "01", title: "Submit your issue", desc: "Describe your business challenge or question using the structured submission form. Include as much context as possible." },
  { step: "02", title: "We review your submission", desc: "Our advisors review your issue and identify the most relevant guidance and recommended course of action." },
  { step: "03", title: "Receive your written response", desc: "A structured written report is delivered to you within the agreed turnaround — typically 48–72 hours." },
  { step: "04", title: "Implement next steps", desc: "Your report includes clear, prioritised next steps you can act on immediately." },
];

const faqs = [
  { q: "What types of issues can I submit?", a: "Any business challenge or question — from strategic decisions and operational problems to people issues, finance concerns, or growth planning questions." },
  { q: "How quickly will I receive a response?", a: "Standard turnaround is 48–72 business hours from submission. Priority turnaround (24hrs) is available for members." },
  { q: "Is this financial or legal advice?", a: "No — Decision Desk responses are general business advisory guidance only. We will always recommend you seek specialist financial or legal advice where applicable." },
  { q: "Can I submit multiple issues?", a: "Yes — each submission is treated as a separate case. Members receive a set number of submissions per plan period." },
];

export function DecisionDeskPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PageHero
        title="Decision Desk"
        titleAccent="Advisory Workflow"
        subtitle="Submit a business challenge or question and receive structured written guidance, a recommended course of action, and clear next steps — within 48–72 hours."
        badge="On-Demand Services"
        breadcrumb="Decision Desk"
        image={heroImage}
        bullets={["48–72 hour turnaround", "Written advisory report", "Clear next steps"]}
        ctaPrimary={{ label: "Submit an Issue", href: "/contact" }}
        ctaSecondary={{ label: "Back to On-Demand", href: "/on-demand" }}
        stat={{ value: "48hrs", label: "Standard Turnaround", sublabel: "For most submissions" }}
      />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">How it works</h2>
            <p className="text-slate-500">A structured advisory workflow from issue submission to written guidance.</p>
          </div>
          <div className="space-y-5">
            {steps.map((s, i) => (
              <div key={s.step} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0">{i + 1}</div>
                  {i < steps.length - 1 && <div className="w-px flex-1 bg-slate-200 my-1" />}
                </div>
                <div className="pb-4">
                  <div className="font-bold text-slate-900 mb-1">{s.title}</div>
                  <div className="text-slate-500 text-sm leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h2 className="text-xl font-extrabold text-slate-900 mb-6">FAQs</h2>
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors">
                <span className="font-semibold text-sm text-slate-900">{faq.q}</span>
                {openFaq === i ? <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />}
              </button>
              {openFaq === i && <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
