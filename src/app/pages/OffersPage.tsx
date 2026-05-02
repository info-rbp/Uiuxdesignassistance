import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTABanner } from "../components/CTABanner";
import { PageHero } from "../components/PageHero";
import { Tag, Clock, Star, Zap, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { fetchPublishedOffers } from "../lib/publicCms";
import type { CmsOffer } from "../types/cms";

const heroImage = "https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNsdXNpdmUlMjBkZWFscyUyMGhhbmRzaGFrZSUyMGJ1c2luZXNzJTIwcGFydG5lcnNoaXB8ZW58MXx8fHwxNzc2OTIzMzA0fDA&ixlib=rb-4.1.0&q=80&w=1080";

const FALLBACK_OFFERS: CmsOffer[] = [
  {
    title: "Starter Advisory Bundle",
    badge: "Best for New Businesses",
    priceLabel: "From £499",
    durationLabel: "4-week engagement",
    excerpt: "Perfect for businesses just getting started with professional advisory. Includes an initial business assessment, 2 consulting sessions, and a 30-day action plan.",
    inclusions: [
      "Business health assessment",
      "2 x 1-hour consulting sessions",
      "30-day action plan",
      "Email support",
    ],
    featured: false,
    offerType: 'advisory-package',
    slug: 'starter-advisory-bundle',
    status: 'published',
    isPublished: true
  },
  {
    title: "Growth Partner Programme",
    badge: "Most Popular",
    priceLabel: "From £1,299/mo",
    durationLabel: "3-month minimum",
    excerpt: "Our flagship ongoing advisory programme. Regular sessions, continuous support, and full access to our toolkit suite for businesses serious about scaling.",
    inclusions: [
      "Monthly strategy sessions (x4)",
      "Unlimited email support",
      "Full DocuShare access",
      "Applications suite included",
      "Quarterly business review",
    ],
    featured: true,
    offerType: 'advisory-package',
    slug: 'growth-partner-programme',
    status: 'published',
    isPublished: true
  },
  {
    title: "Accounting Software",
    partnerName: "Accounting Partner",
    badge: "30% Off",
    excerpt: "30% off first year",
    category: "Finance",
    offerType: 'partner-deal',
    slug: 'accounting-deal',
    status: 'published',
    isPublished: true
  }
];

export function OffersPage() {
  const [offers, setOffers] = useState<CmsOffer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPublishedOffers()
      .then(data => {
        if (data.length > 0) {
          setOffers(data);
        } else {
          setOffers(FALLBACK_OFFERS);
        }
      })
      .catch(() => {
        setOffers(FALLBACK_OFFERS);
      })
      .finally(() => setLoading(false));
  }, []);

  const advisoryPackages = offers.filter(o => o.offerType === 'advisory-package' || o.offerType === 'service-package');
  const partnerDeals = offers.filter(o => o.offerType === 'partner-deal');

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PageHero
        title="Exclusive Offers"
        titleAccent="& Packages"
        subtitle="Purpose-built advisory packages and exclusive partner deals designed to provide maximum value for small businesses."
        badge="Offers"
        breadcrumb="Offers"
        image={heroImage}
        bullets={["Vendor-negotiated discounts", "Member-only packages", "Regularly updated deals"]}
        ctaPrimary={{ label: "View Packages", href: "#packages" }}
        ctaSecondary={{ label: "Talk to Us", href: "/contact" }}
        stat={{ value: "30%", label: "Avg. Cost Savings", sublabel: "For our members" }}
      />

      {loading && (
        <div className="py-20 flex justify-center items-center">
          <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
        </div>
      )}

      {!loading && (
        <>
          {/* Packages */}
          <section className="py-20 lg:py-28" id="packages">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-14">
                <span className="inline-block text-xs font-bold text-orange-700 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full mb-4">
                  Advisory Packages
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                  Choose Your Package
                </h2>
                <p className="text-slate-600 max-w-xl mx-auto">
                  Flexible engagement models to suit every stage of your business journey.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {advisoryPackages.map((offer) => (
                  <div
                    key={offer.slug}
                    className={`rounded-2xl p-8 flex flex-col ${
                      offer.featured
                        ? "bg-blue-700 text-white shadow-2xl shadow-blue-200 scale-[1.02]"
                        : "bg-slate-50 border border-slate-100 text-slate-900"
                    }`}
                  >
                    {offer.badge && (
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg mb-5 w-fit text-xs font-bold text-white ${offer.featured ? 'bg-blue-800' : 'bg-blue-700'}`}>
                        <Star className="w-3 h-3" />
                        {offer.badge}
                      </div>
                    )}

                    <h3 className={`text-xl font-extrabold mb-2 ${offer.featured ? "text-white" : "text-slate-900"}`}>
                      {offer.title}
                    </h3>

                    {offer.durationLabel && (
                      <div className={`flex items-center gap-2 mb-4 ${offer.featured ? "text-blue-100" : "text-slate-500"}`}>
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{offer.durationLabel}</span>
                      </div>
                    )}

                    {offer.priceLabel && (
                      <div className={`text-2xl font-extrabold mb-4 ${offer.featured ? "text-white" : "text-slate-900"}`}>
                        {offer.priceLabel}
                      </div>
                    )}

                    <p className={`text-sm leading-relaxed mb-6 ${offer.featured ? "text-blue-100" : "text-slate-600"}`}>
                      {offer.excerpt}
                    </p>

                    <div className="space-y-2.5 mb-8 flex-grow">
                      {offer.inclusions?.map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <CheckCircle className={`w-4 h-4 flex-shrink-0 ${offer.featured ? "text-blue-200" : "text-emerald-500"}`} />
                          <span className={`text-sm ${offer.featured ? "text-blue-100" : "text-slate-700"}`}>{item}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={offer.ctaUrl || "/contact"}
                      className={`inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-xl transition-all ${
                        offer.featured
                          ? "bg-white text-blue-700 hover:bg-blue-50"
                          : "bg-blue-700 text-white hover:bg-blue-800"
                      }`}
                    >
                      {offer.ctaLabel || "Get Started"} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partner Deals */}
          <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="inline-block text-xs font-bold text-orange-700 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full mb-4">
                  Partner Deals
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Exclusive Partner Discounts
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {partnerDeals.map((deal) => (
                  <div key={deal.slug} className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Tag className="w-5 h-5 text-orange-700" />
                    </div>
                    {deal.category && <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{deal.category}</div>}
                    <h4 className="font-bold text-slate-900 mb-2 text-sm">{deal.partnerName || deal.title}</h4>
                    <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-lg">
                      <Zap className="w-3 h-3" />
                      {deal.excerpt}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-slate-500 text-sm mt-8">
                Partner deals are available to all active RBP clients.{" "}
                <Link to="/contact" className="text-blue-700 font-semibold hover:underline">
                  Contact us to learn more.
                </Link>
              </p>
            </div>
          </section>
        </>
      )}

      <CTABanner />
      <Footer />
    </div>
  );
}