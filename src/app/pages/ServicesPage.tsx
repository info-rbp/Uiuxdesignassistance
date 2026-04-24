import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTABanner } from "../components/CTABanner";
import { OnDemandBanner } from "../components/OnDemandBanner";
import { PageHero } from "../components/PageHero";
import { serviceCategories } from "../data/serviceData";

const heroImage =
  "https://images.unsplash.com/photo-1714974528693-f77f6fcc56af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneSUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc3NjkyMzMwM3ww&ixlib=rb-4.1.0&q=80&w=1080";

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
        bullets={["Seven service categories", "Category landing pages", "Individual service detail pages"]}
        ctaPrimary={{ label: "Contact Us", href: "/contact" }}
        ctaSecondary={{ label: "Explore Categories", href: "/services#service-categories" }}
        stat={{ value: "7", label: "Service Categories", sublabel: "Across advisory and consulting" }}
      />

      <OnDemandBanner />

      <section id="service-categories" className="py-16 lg:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-4">
            Service Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Browse our services by category
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start with a service category, then drill into the individual service pages for scope,
            deliverables, process, and next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <div
              key={category.slug}
              className="bg-slate-50 border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-md mb-6">
                <img src={category.heroImage} alt={category.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/15 to-transparent" />
                <div className="absolute left-4 bottom-4 right-4">
                  <div className="text-white font-extrabold text-lg leading-tight">{category.title}</div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{category.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {category.examples.map((example) => (
                  <span
                    key={example}
                    className="inline-flex items-center rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600"
                  >
                    {example}
                  </span>
                ))}
              </div>

              <Link
                to={`/services/${category.slug}`}
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2.5 px-6 rounded-xl transition-all text-sm"
              >
                View Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
