import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTABanner } from "../components/CTABanner";
import { OnDemandBanner } from "../components/OnDemandBanner";
import { PageHero } from "../components/PageHero";
import { serviceCategories } from "../../config/serviceCategories";

const heroImage = "https://images.unsplash.com/photo-1714974528693-f77f6fcc56af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneSUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc3NjkyMzMwM3ww&ixlib=rb-4.1.0&q=80&w=1080";

const categoryImages: Record<string, { img: string; tag: string | null }> = {
  "operations-advisory": { img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop", tag: "Most Popular" },
  "human-resource-advisory": { img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=600&auto=format&fit=crop", tag: null },
  "management-consulting": { img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop", tag: null },
  "change-management": { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", tag: null },
  "ai-implementation-adoption": { img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", tag: "Trending" },
  "admin-finance-consulting": { img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop", tag: null },
  "customised-solutions": { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop", tag: null },
};

export function ServicesPage() {
  useEffect(() => {
    document.title = "Services | Remote Business Partner";
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PageHero
        title="Services"
        subtitle="Explore business advisory and consulting services by category, then open the individual service that matches your current needs."
        badge="Services Hub"
        breadcrumb="Services"
        image={heroImage}
        bullets={["On-demand expert advisory", "Tailored to your budget", "Across business verticals"]}
        ctaPrimary={{ label: "Book a Consultation", href: "/contact" }}
        ctaSecondary={{ label: "Explore All Areas", href: "#categories" }}
        stat={{ value: "200+", label: "Businesses Supported", sublabel: "And growing" }}
      />

      <OnDemandBanner />

      {/* Categories Grid */}
      <section id="categories" className="py-16 lg:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-4">
            Service Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Explore Business Advisory Services
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Choose a category below to explore specific services, tools, and support tailored to your small business needs.
          </p>
        </div>

        <div className="space-y-8">
          {serviceCategories.map((c, index) => {
            const media = categoryImages[c.slug] || { img: heroImage, tag: null };
            return (
              <div
                key={c.slug}
                className={`bg-slate-50 border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <Link to={`/services/${c.slug}`} className="w-full lg:w-72 flex-shrink-0 group">
                  <div className="relative rounded-2xl overflow-hidden aspect-video shadow-md -z-0">
                    <img src={media.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {media.tag && (
                      <div className="absolute top-3 left-3 bg-blue-700 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                        {media.tag}
                      </div>
                    )}
                  </div>
                </Link>
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    <Link to={`/services/${c.slug}`} className="hover:text-blue-700 transition-colors">
                      {c.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{c.description}</p>
                  
                  {c.examples && c.examples.length > 0 && (
                    <div className="mb-6">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Includes services like:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {c.examples.map((example, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    to={`/services/${c.slug}`}
                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2.5 px-6 rounded-xl transition-all text-sm"
                  >
                    View Services <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
