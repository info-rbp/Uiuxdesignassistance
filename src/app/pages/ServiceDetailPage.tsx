import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { ArrowRight, CheckCircle, Layers3, MessageCircle } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { serviceCategoryMap, serviceMap, getServicesByCategory } from "../data/serviceData";

export function ServiceDetailPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  const service = serviceMap[slug];
  const categoryMeta = service ? serviceCategoryMap[service.category] : undefined;
  const relatedServices = service
    ? getServicesByCategory(service.category).filter((item) => item.slug !== service.slug).slice(0, 3)
    : [];

  useEffect(() => {
    document.title = service
      ? `${service.title} | Remote Business Partner`
      : "Service Not Found | Remote Business Partner";
  }, [service]);

  if (!service || !categoryMeta) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <Layers3 className="w-14 h-14 text-slate-300 mx-auto mb-6" />
          <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Service not found</h1>
          <p className="text-slate-500 mb-8">
            This service does not exist or may have moved to another route.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-all"
            >
              Browse Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 font-bold px-6 py-3 rounded-xl hover:bg-slate-50 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest flex-wrap">
            <Link to="/services" className="hover:text-blue-600 transition-colors">
              Services
            </Link>
            <span>/</span>
            <Link
              to={`/services/${categoryMeta.slug}`}
              className="hover:text-blue-600 transition-colors"
            >
              {categoryMeta.title}
            </Link>
            <span>/</span>
            <span className="text-slate-700">{service.title}</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          <section className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full mb-5">
              <Layers3 className="w-3.5 h-3.5" />
              {categoryMeta.title}
            </span>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">{service.title}</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">{service.summary}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h2 className="text-xl font-extrabold text-slate-900 mb-3">Overview</h2>
                <p className="text-slate-600 leading-relaxed text-sm">{service.overview}</p>
              </div>
              <div className="bg-blue-700 text-white rounded-2xl p-6">
                <h2 className="text-xl font-extrabold mb-3">Ideal For</h2>
                <div className="space-y-2">
                  {service.idealFor.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-blue-100">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Deliverables</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.deliverables.map((deliverable) => (
                  <div key={deliverable} className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{deliverable}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Process</h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="pt-1 text-slate-600 text-sm leading-relaxed">{step}</div>
                  </div>
                ))}
              </div>
            </section>
          </section>

          <aside className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h2 className="text-lg font-extrabold text-slate-900 mb-3">Next Step</h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                Start with a conversation about your current business context and what outcome you want
                this service to support.
              </p>
              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full bg-blue-700 hover:bg-blue-800 text-white font-bold px-5 py-3 rounded-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book a Consultation
                </Link>
                <Link
                  to={`/services/${categoryMeta.slug}`}
                  className="inline-flex items-center justify-center gap-2 w-full border border-slate-200 text-slate-700 font-bold px-5 py-3 rounded-xl hover:bg-white transition-all"
                >
                  Back to Category
                </Link>
              </div>
            </div>

            {relatedServices.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h2 className="text-lg font-extrabold text-slate-900 mb-4">Related Services</h2>
                <div className="space-y-4">
                  {relatedServices.map((related) => (
                    <div key={related.slug} className="border border-slate-100 rounded-xl p-4">
                      <h3 className="font-bold text-slate-900 mb-1">{related.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3">{related.summary}</p>
                      <Link
                        to={`/service/${related.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800"
                      >
                        View service
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
