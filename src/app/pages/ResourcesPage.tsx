import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTABanner } from "../components/CTABanner";
import { PageHero } from "../components/PageHero";
import { BookOpen, TrendingUp, Lightbulb, FileText, Video, Download, ArrowRight, Clock } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1628130421517-649b3ecaf514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGtub3dsZWRnZSUyMGxpYnJhcnklMjBsZWFybmluZyUyMHJlc291cmNlc3xlbnwxfHx8fDE3NzY5MjMzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080";

const categories = [
  { icon: BookOpen, label: "Guides & Playbooks", count: 24, color: "bg-blue-100 text-blue-700" },
  { icon: TrendingUp, label: "Market Intelligence", count: 18, color: "bg-violet-100 text-violet-700" },
  { icon: Video, label: "Video Tutorials", count: 12, color: "bg-rose-100 text-rose-700" },
  { icon: FileText, label: "Templates", count: 36, color: "bg-amber-100 text-amber-700" },
  { icon: Download, label: "Downloads", count: 20, color: "bg-emerald-100 text-emerald-700" },
  { icon: Lightbulb, label: "Case Studies", count: 9, color: "bg-sky-100 text-sky-700" },
];

const featured = [
  {
    tag: "Guide",
    title: "The Small Business Operations Playbook",
    desc: "A comprehensive 40-page guide to building scalable operational systems for businesses with 2–50 employees.",
    readTime: "20 min read",
    icon: BookOpen,
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    tag: "Template",
    title: "90-Day Business Planning Template",
    desc: "A structured template to plan, track, and execute your business goals over a focused 90-day period.",
    readTime: "Free download",
    icon: FileText,
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    tag: "Case Study",
    title: "How a 5-Person Agency Grew Revenue by 3x",
    desc: "A detailed breakdown of how one of our clients restructured their operations and tripled revenue in 18 months.",
    readTime: "12 min read",
    icon: TrendingUp,
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    tag: "Video",
    title: "AI Tools for Small Business in 2024",
    desc: "Watch our Lead Consultant walk through the most impactful AI tools for small business owners right now.",
    readTime: "28 min watch",
    icon: Video,
    tagColor: "bg-rose-100 text-rose-700",
  },
  {
    tag: "Guide",
    title: "HR Essentials: Your First Employee Handbook",
    desc: "Everything you need to know about creating a compliant, culture-aligned employee handbook from scratch.",
    readTime: "15 min read",
    icon: BookOpen,
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    tag: "Market Intelligence",
    title: "UK SME Funding Landscape 2024",
    desc: "An overview of the current funding options available to UK small businesses, including grants and alternative finance.",
    readTime: "10 min read",
    icon: Lightbulb,
    tagColor: "bg-violet-100 text-violet-700",
  },
];

export function ResourcesPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PageHero
        title="Resources &"
        titleAccent="Knowledge Hub"
        subtitle="A curated library of guides, templates, case studies, and market intelligence to help you run a better business."
        badge="Resources"
        breadcrumb="Resources"
        image={heroImage}
        bullets={["Industry reports & guides", "Downloadable templates", "Webinar & training library"]}
        ctaPrimary={{ label: "Browse Resources", href: "#categories" }}
        ctaSecondary={{ label: "Talk to an Advisor", href: "/contact" }}
        stat={{ value: "150+", label: "Resources Available", sublabel: "Updated regularly" }}
      />

      {/* Categories */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">Browse by Category</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.label}
                  className="bg-white border border-slate-100 rounded-2xl p-5 text-center hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <div className={`w-10 h-10 ${cat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-800 mb-1">{cat.label}</div>
                  <div className="text-xs text-slate-400 font-semibold">{cat.count} items</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block text-xs font-bold text-rose-700 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full mb-3">
                Featured
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Featured Resources</h2>
            </div>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 text-blue-700 font-bold text-sm hover:text-blue-800 transition-colors"
            >
              Request a resource <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((res) => {
              const Icon = res.icon;
              return (
                <div
                  key={res.title}
                  className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all flex flex-col"
                >
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg mb-5 w-fit text-xs font-bold ${res.tagColor}`}>
                    <Icon className="w-3.5 h-3.5" />
                    {res.tag}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3 leading-snug flex-grow">{res.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{res.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-xs font-semibold">{res.readTime}</span>
                    </div>
                    <Link
                      to="/contact"
                      className="text-blue-700 hover:text-blue-800 text-sm font-bold inline-flex items-center gap-1 transition-colors"
                    >
                      Access <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Lightbulb className="w-7 h-7 text-blue-700" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Get Resources in Your Inbox
          </h2>
          <p className="text-slate-600 mb-8">
            Subscribe to our newsletter and receive curated business insights, new templates, and market updates every fortnight.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-slate-400 text-xs mt-3">No spam. Unsubscribe at any time.</p>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}