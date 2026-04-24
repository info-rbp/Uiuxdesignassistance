import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { ArrowRight, CheckCircle, Layers3, Wrench } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { getServicesByCategory, serviceCategoryMap } from "../data/serviceData";

export function ServiceCategoryPage() {
  const { category = "" } = useParams<{ category: string }>();
  const categoryMeta = serviceCategoryMap[category];
  const services = categoryMeta ? getServicesByCategory(categoryMeta.slug) : [];

  useEffect(() => {
    document.title = categoryMeta
      ? `${categoryMeta.title} Services | Remote Business Partner`
      : "Service Category Not Found | Remote Business Partner";
  }, [categoryMeta]);

  if (!categoryMeta) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <Layers3 className="w-14 h-14 text-slate-300 mx-auto mb-6" />
          <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Service category not found</h1>
          <p className="text-slate-500 mb-8">
            The category you requested does not exist or may have moved.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-all"
          >
            Back to Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <PageHero
        title={categoryMeta.title}
        subtitle={categoryMeta.description}
        badge="Service Category"
        breadcrumb="Services"
        image={categoryMeta.heroImage}
        bullets={categoryMeta.examples}
        ctaPrimary={{ label: "Enquire About This Category", href: "/contact" }}
        ctaSecondary={{ label: "Back to Services", href: "/services" }}
        stat={{ value: `${services.length}`, label: "Services in this category" }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
          <Link to="/services" className="hover:text-blue-600 transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-slate-700">{categoryMeta.title}</span>
        </div>

        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Services in {categoryMeta.title}
            </h2>
            <p className="text-slate-600 max-w-2xl leading-relaxed">
              Browse the individual services available within this category and open the detail page
              for the one that best matches your current business need.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-all"
          >
            Book a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {services.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-2xl">
            <Wrench className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No services listed in this category yet</h3>
            <p className="text-slate-500 mb-6">
              We are still preparing this category. You can return to the Services hub or contact the
              team for tailored guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-5 py-3 rounded-xl hover:bg-slate-800 transition-all"
              >
                Back to Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 font-bold px-5 py-3 rounded-xl hover:bg-slate-50 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all flex flex-col"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
                  <Layers3 className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{service.summary}</p>

                <div className="space-y-2 mb-6">
                  {service.deliverables.slice(0, 3).map((deliverable) => (
                    <div key={deliverable} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{deliverable}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/service/${service.slug}`}
                  className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-5 rounded-xl transition-all"
                >
                  View Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
