import { useState } from "react";
import { Link } from "react-router";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { PageHero } from "../../components/PageHero";
import { CTABanner } from "../../components/CTABanner";
import {
  Wrench, ArrowRight, CheckCircle, ChevronDown, ChevronUp,
  AlertCircle, Users, BarChart2, DollarSign, Shield,
  Settings2, Zap,
} from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1708496166091-b0c3abfb5d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhbnQlMjBwcm9ibGVtJTIwc29sdmluZyUyMGZvY3VzZWQlMjB3b3JrfGVufDF8fHx8MTc3Nzk1NzQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080";

// ── How it works ─────────────────────────────────────────────────────────────

const steps = [
  {
    title: "Tell us the issue",
    desc: "Describe the specific problem you need resolved — in as much or as little detail as you have. No issue is too small or too complex.",
  },
  {
    title: "We scope the solution",
    desc: "Your RBP adviser reviews the issue, asks any clarifying questions, and designs a customised approach, timeline and deliverable matched to your situation.",
  },
  {
    title: "We get to work",
    desc: "Your adviser takes ownership of the problem and drives it to resolution — keeping you informed along the way.",
  },
  {
    title: "Issue resolved",
    desc: "You receive a clear outcome, a documented resolution, and where relevant, practical recommendations to prevent the issue from recurring.",
  },
];

// ── Issue types ───────────────────────────────────────────────────────────────

const issueTypes = [
  {
    icon: AlertCircle,
    color: "bg-red-50 text-red-600",
    title: "Operational problems",
    desc: "Bottlenecks, workflow breakdowns, supplier issues, and day-to-day friction that slows your business down.",
  },
  {
    icon: DollarSign,
    color: "bg-emerald-50 text-emerald-600",
    title: "Financial pressures",
    desc: "Cash flow crunches, billing disputes, cost overruns, or urgent financial situations that need fast, clear-headed action.",
  },
  {
    icon: Users,
    color: "bg-violet-50 text-violet-600",
    title: "People & HR situations",
    desc: "Staff conflicts, performance concerns, onboarding problems, or any sensitive people issue that needs a careful hand.",
  },
  {
    icon: Shield,
    color: "bg-amber-50 text-amber-600",
    title: "Compliance & regulatory gaps",
    desc: "Urgent compliance issues, missed obligations, or regulatory concerns that need immediate attention and a clear action plan.",
  },
  {
    icon: BarChart2,
    color: "bg-blue-50 text-blue-600",
    title: "Strategic pivots",
    desc: "Sudden market changes, lost contracts, or urgent strategic decisions where you need experienced guidance now — not in two weeks.",
  },
  {
    icon: Settings2,
    color: "bg-slate-100 text-slate-600",
    title: "Anything else",
    desc: "If it's a real problem affecting your business, we want to hear about it. There's no issue too small, and no brief too unusual.",
  },
];

// ── Why The Fixer ─────────────────────────────────────────────────────────────

const differentiators = [
  { label: "Fully customised",   desc: "No templates, no generic advice. Every engagement is built around your specific issue." },
  { label: "Any size issue",     desc: "Whether it's a 30-minute problem or a three-month challenge, we scope the work to match." },
  { label: "Clear ownership",    desc: "One adviser takes responsibility for your issue from start to finish." },
  { label: "Documented outcome", desc: "Every engagement ends with a written resolution, summary, or action plan you can keep and act on." },
];

// ── FAQs ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "What kinds of issues can The Fixer handle?",
    a: "Anything that's a real, specific problem affecting your business — operational, financial, people, compliance, strategic, or otherwise. If it's causing you pain, we want to hear about it.",
  },
  {
    q: "How is The Fixer different from your standard advisory services?",
    a: "Standard advisory is ongoing and structured. The Fixer is laser-focused — you come to us with one specific issue, and we take ownership of resolving it. It's project-based, not retainer-based.",
  },
  {
    q: "How long does it take?",
    a: "It depends entirely on the size and complexity of the issue. Simple problems may be resolved in a matter of days. Larger, more complex situations may take longer — but we'll always give you a clear timeline upfront.",
  },
  {
    q: "How is this priced?",
    a: "Pricing is scoped to the issue. We'll provide a clear quote before any work begins — no surprises. Contact us to discuss your situation and we'll give you a straight answer.",
  },
  {
    q: "Is this available to non-members?",
    a: "Yes. The Fixer is available to any Australian business owner. Members receive priority turnaround and reduced rates as part of their membership plan.",
  },
  {
    q: "What if the issue is sensitive or confidential?",
    a: "Everything shared with RBP is treated in strict confidence. We operate under a professional discretion standard and can provide an NDA on request.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export function TheFixerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <PageHero
        title="The Fixer"
        titleAccent="Your Problem. Solved."
        subtitle="A fully customised service built around one specific issue your business needs resolved — no matter the size, complexity, or urgency. You name the problem. We take ownership and fix it."
        badge="On-Demand Services"
        breadcrumb="The Fixer"
        image={heroImage}
        bullets={["Any size issue", "Customised approach", "Clear, documented outcome"]}
        ctaPrimary={{ label: "Fix My Issue", href: "/contact" }}
        ctaSecondary={{ label: "Back to On-Demand", href: "/on-demand" }}
        stat={{ value: "1 Issue", label: "Full Ownership", sublabel: "Start to finish" }}
      />

      {/* ── How it works ── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">How it works</h2>
            <p className="text-slate-500">
              A focused, end-to-end process — from first brief to full resolution.
            </p>
          </div>
          <div className="space-y-5">
            {steps.map((s, i) => (
              <div key={s.title} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-slate-200 my-1" />
                  )}
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

      {/* ── What we can fix ── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">What we can fix</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              The Fixer is designed to handle any specific business issue — big or small.
              Here are some common areas we work in.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {issueTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.title}
                  className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${type.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-slate-900 mb-1.5 text-sm">{type.title}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{type.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why The Fixer ── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                <Wrench className="w-3.5 h-3.5" /> Why The Fixer
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                One problem. One adviser. One outcome.
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Most advisory services are built around ongoing retainers and structured programmes.
                The Fixer is different — it's designed for the moment when something specific needs
                to be dealt with, and you need someone experienced to take it off your plate.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-5 py-3 rounded-xl transition-all"
              >
                Tell us your issue <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {differentiators.map((d) => (
                <div key={d.label} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 mb-0.5">{d.label}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Scope callout ── */}
      <section className="py-10 bg-orange-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-extrabold text-white mb-2">
            No issue is too small. No problem is too big.
          </h3>
          <p className="text-orange-100 text-sm leading-relaxed mb-6 max-w-xl mx-auto">
            The Fixer is scoped entirely around your situation. Whether you need two hours of focused
            advisory or a multi-week resolution effort, we design the engagement to match what you actually need.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold text-sm px-6 py-3 rounded-xl hover:bg-orange-50 transition-all"
          >
            Get started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h2 className="text-xl font-extrabold text-slate-900 mb-6">Frequently asked questions</h2>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-sm text-slate-900">{faq.q}</span>
                {openFaq === i
                  ? <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                }
              </button>
              {openFaq === i && (
                <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
