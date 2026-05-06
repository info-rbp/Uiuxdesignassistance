import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { ArrowRight, Book, MessageSquare, Search, Wrench } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1559825481-7d452d859f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWxwJTIwY2VudGVyJTIwc3VwcG9ydCUyMGZhcXN8ZW58MXx8fHwxNzc3NTQ2ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080";

const sections = [
  {
    icon: MessageSquare,
    title: "FAQs",
    desc: "Find answers to common questions about our services, platform, and membership.",
    href: "/help/faqs",
    color: "bg-sky-100 text-sky-700",
  },
  {
    icon: Book,
    title: "Knowledge Base",
    desc: "Browse our library of articles, guides, and tutorials to get the most out of our platform.",
    href: "/help/knowledge-base",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    desc: "Having a technical issue? Find solutions to common problems and get back on track.",
    href: "/help/troubleshooting",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: Search,
    title: "Resources",
    desc: "Explore our curated list of business resources, tools, and templates.",
    href: "/resources",
    color: "bg-amber-100 text-amber-700",
  },
];

export function HelpPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PageHero
        title="Help Centre"
        titleAccent="for Business"
        subtitle="Your central hub for support, guidance, and resources. Find answers, solve problems, and get the most out of your Remote Business Partner membership."
        badge="Help Centre"
        breadcrumb="Help Centre"
        image={heroImage}
        bullets={["FAQs", "Knowledge Base", "Troubleshooting guides", "Business resources"]}
        ctaPrimary={{ label: "Contact Support", href: "/contact" }}
        ctaSecondary={{ label: "Go to Dashboard", href: "/dashboard" }}
        stat={{ value: "24/7", label: "Access to Resources", sublabel: "Anytime, anywhere" }}
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-4">Help Sections</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">How can we help you today?</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Explore our help sections to find the information you need. For everything else, our support team is ready to assist.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sections.map((sec) => {
              const Icon = sec.icon;
              return (
                <div key={sec.title} className={`bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-md transition-all hover:-translate-y-0.5`}>
                  <div className={`w-12 h-12 ${sec.color} rounded-xl flex items-center justify-center mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{sec.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{sec.desc}</p>
                  <Link
                    to={sec.href}
                    className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 text-sm font-bold transition-colors"
                  >
                    Go to {sec.title} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
