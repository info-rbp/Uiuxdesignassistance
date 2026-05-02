import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTABanner } from "../components/CTABanner";
import { PageHero } from "../components/PageHero";
import { BookOpen, TrendingUp, Lightbulb, FileText, Video, Download, ArrowRight, Clock, Loader2, AlertCircle } from "lucide-react";
import { fetchPublishedResources } from "../lib/publicCms";
import type { CmsResource } from "../types/cms";

const heroImage = "https://images.unsplash.com/photo-1628130421517-649b3ecaf514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGtub3dsZWRnZSUyMGxpYnJhcnklMjBsZWFybmluZyUyMHJlc291cmNlc3xlbnwxfHx8fDE3NzY5MjMzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080";

// Static fallback — only displayed when Firestore is unavailable or empty
const FALLBACK_RESOURCES: CmsResource[] = [
  {
    title: "The Small Business Operations Playbook",
    slug: "small-business-operations-playbook",
    status: "published",
    isPublished: true,
    resourceType: "guide",
    category: "Operations",
    excerpt: "A comprehensive guide to building scalable operational systems for businesses with 2–50 employees.",
    featured: true,
    readTime: "20 min read",
    ctaLabel: "Access",
    ctaUrl: "/contact",
  },
  {
    title: "90-Day Business Planning Template",
    slug: "90-day-business-planning-template",
    status: "published",
    isPublished: true,
    resourceType: "template",
    category: "Planning",
    excerpt: "A structured template to plan, track, and execute your business goals over a focused 90-day period.",
    featured: true,
    readTime: "Free download",
    ctaLabel: "Download",
    ctaUrl: "/contact",
  },
  {
    title: "How a 5-Person Agency Grew Revenue by 3x",
    slug: "agency-3x-revenue-case-study",
    status: "published",
    isPublished: true,
    resourceType: "case-study",
    category: "Case Studies",
    excerpt: "A detailed breakdown of how one of our clients restructured their operations and tripled revenue in 18 months.",
    featured: true,
    readTime: "12 min read",
    ctaLabel: "Read",
    ctaUrl: "/contact",
  },
];

const RESOURCE_TYPE_META: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  guide:                { label: "Guide",              color: "bg-blue-100 text-blue-700",    icon: BookOpen    },
  template:             { label: "Template",           color: "bg-amber-100 text-amber-700",  icon: FileText    },
  video:                { label: "Video",              color: "bg-rose-100 text-rose-700",    icon: Video       },
  download:             { label: "Download",           color: "bg-emerald-100 text-emerald-700", icon: Download },
  "case-study":         { label: "Case Study",        color: "bg-sky-100 text-sky-700",      icon: Lightbulb   },
  "market-intelligence":{ label: "Market Intel",      color: "bg-violet-100 text-violet-700", icon: TrendingUp  },
};

export function ResourcesPage() {
  const [resources, setResources] = useState<CmsResource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    fetchPublishedResources()
      .then((data) => {
        if (data.length > 0) {
          setResources(data);
        } else {
          // No CMS content yet — use static fallback
          setResources(FALLBACK_RESOURCES);
          setUsingFallback(true);
        }
      })
      .catch((err) => {
        console.warn("Firestore unavailable, using fallback content:", err);
        setResources(FALLBACK_RESOURCES);
        setUsingFallback(true);
        setError(false); // Don't show error UI — fallback handles it silently
      })
      .finally(() => setLoading(false));
  }, []);

  // Derive categories from live resources
  const categoryMap = resources.reduce<Record<string, number>>((acc, r) => {
    acc[r.category] = (acc[r.category] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.entries(categoryMap).map(([label, count]) => ({ label, count }));
  const featuredResources = resources.filter((r) => r.featured);
  const allResources = resources.filter((r) => !r.featured);

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
        stat={{ value: `${resources.length}+`, label: "Resources Available", sublabel: "Updated regularly" }}
      />

      {/* Loading state */}
      {loading && (
        <div className="py-20 flex justify-center items-center">
          <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
        </div>
      )}

      {/* Error banner (only shown on hard failure, not fallback) */}
      {error && (
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-sm">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            Content is temporarily unavailable. Showing cached resources.
          </div>
        </div>
      )}

      {!loading && (
        <>
          {/* Categories */}
          <section id="categories" className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">Browse by Category</h2>
              </div>
              {categories.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {categories.map(({ label, count }) => {
                    // Try to find a matching icon
                    const typeKey = Object.keys(RESOURCE_TYPE_META).find(k =>
                      RESOURCE_TYPE_META[k].label.toLowerCase() === label.toLowerCase()
                    );
                    const meta = typeKey ? RESOURCE_TYPE_META[typeKey] : { color: "bg-slate-100 text-slate-700", icon: BookOpen };
                    const Icon = meta.icon;
                    return (
                      <button key={label} className="bg-white border border-slate-100 rounded-2xl p-5 text-center hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer">
                        <div className={`w-10 h-10 ${meta.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-xs font-bold text-slate-800 mb-1">{label}</div>
                        <div className="text-xs text-slate-400 font-semibold">{count} item{count !== 1 ? "s" : ""}</div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <p className="text-center text-slate-500 text-sm">No categories available yet.</p>
              )}
            </div>
          </section>

          {/* Featured Resources */}
          {featuredResources.length > 0 && (
            <section className="py-20 lg:py-28">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between mb-10">
                  <div>
                    <span className="inline-block text-xs font-bold text-rose-700 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full mb-3">Featured</span>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Featured Resources</h2>
                  </div>
                  <Link to="/contact" className="hidden sm:inline-flex items-center gap-2 text-blue-700 font-bold text-sm hover:text-blue-800 transition-colors">
                    Request a resource <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredResources.map((res) => {
                    const meta = RESOURCE_TYPE_META[res.resourceType] || RESOURCE_TYPE_META["guide"];
                    const Icon = meta.icon;
                    return (
                      <div key={res.slug} className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all flex flex-col">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg mb-5 w-fit text-xs font-bold ${meta.color}`}>
                          <Icon className="w-3.5 h-3.5" />
                          {meta.label}
                        </div>
                        <h3 className="font-bold text-slate-900 mb-3 leading-snug flex-grow">{res.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-5">{res.excerpt}</p>
                        <div className="flex items-center justify-between">
                          {res.readTime && (
                            <div className="flex items-center gap-1.5 text-slate-400">
                              <Clock className="w-3.5 h-3.5" />
                              <span className="text-xs font-semibold">{res.readTime}</span>
                            </div>
                          )}
                          <Link
                            to={res.ctaUrl || "/contact"}
                            className="text-blue-700 hover:text-blue-800 text-sm font-bold inline-flex items-center gap-1 transition-colors"
                          >
                            {res.ctaLabel || "Access"} <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* All Other Resources */}
          {allResources.length > 0 && (
            <section className="py-16 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-8">All Resources</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allResources.map((res) => {
                    const meta = RESOURCE_TYPE_META[res.resourceType] || RESOURCE_TYPE_META["guide"];
                    const Icon = meta.icon;
                    return (
                      <div key={res.slug} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg mb-4 w-fit text-xs font-bold ${meta.color}`}>
                          <Icon className="w-3.5 h-3.5" />
                          {meta.label}
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2 leading-snug flex-grow">{res.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{res.excerpt}</p>
                        <Link
                          to={res.ctaUrl || "/contact"}
                          className="text-blue-700 hover:text-blue-800 text-sm font-bold inline-flex items-center gap-1 transition-colors"
                        >
                          {res.ctaLabel || "Access"} <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* Newsletter */}
          <section className="py-16 bg-white">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Lightbulb className="w-7 h-7 text-blue-700" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Get Resources in Your Inbox</h2>
              <p className="text-slate-600 mb-8">Subscribe to our newsletter and receive curated business insights, new templates, and market updates every fortnight.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-all whitespace-nowrap">Subscribe</button>
              </div>
              <p className="text-slate-400 text-xs mt-3">No spam. Unsubscribe at any time.</p>
            </div>
          </section>
        </>
      )}

      <CTABanner />
      <Footer />
    </div>
  );
}