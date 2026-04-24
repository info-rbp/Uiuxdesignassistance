import { useMemo, useState } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { offerCategories, partnerOffers, type OfferCategory, type PartnerOffer } from "../data/offerData";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ExternalLink,
  Filter,
  Handshake,
  RotateCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Tag,
} from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

type CategoryFilter = "All Offers" | OfferCategory;

function OfferLogo({ initials, featured }: { initials: string; featured?: boolean }) {
  return (
    <div
      className={`h-12 w-12 rounded-2xl flex items-center justify-center font-black tracking-tight ${
        featured ? "bg-white/15 text-white ring-1 ring-white/20" : "bg-blue-50 text-blue-700"
      }`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

function OfferCard({ offer, variant = "standard" }: { offer: PartnerOffer; variant?: "standard" | "featured" }) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`rounded-3xl border transition-all duration-200 h-full flex flex-col ${
        isFeatured
          ? "bg-blue-700 text-white border-blue-600 shadow-2xl shadow-blue-200"
          : "bg-white border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1"
      }`}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between gap-4 mb-5">
          <OfferLogo initials={offer.logoInitials} featured={isFeatured} />
          <div
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
              isFeatured ? "bg-white/15 text-white" : "bg-slate-100 text-slate-700"
            }`}
          >
            {isFeatured ? <Star className="h-3.5 w-3.5" /> : <Tag className="h-3.5 w-3.5" />}
            {offer.category}
          </div>
        </div>

        <div className="mb-4">
          <p className={`text-sm font-bold mb-1 ${isFeatured ? "text-blue-100" : "text-slate-500"}`}>
            {offer.partnerName}
          </p>
          <h3 className={`text-xl font-extrabold tracking-tight ${isFeatured ? "text-white" : "text-slate-900"}`}>
            {offer.offerTitle}
          </h3>
        </div>

        <div
          className={`inline-flex items-center gap-2 w-fit rounded-xl px-3 py-1.5 text-sm font-extrabold mb-4 ${
            isFeatured ? "bg-white text-blue-700" : "bg-emerald-50 text-emerald-700"
          }`}
        >
          <Sparkles className="h-4 w-4" />
          {offer.promotionalLabel}
        </div>

        <p className={`text-sm leading-relaxed flex-grow ${isFeatured ? "text-blue-50" : "text-slate-600"}`}>
          {offer.description}
        </p>

        {(offer.expiry || offer.termsNote) && (
          <div
            className={`mt-5 rounded-2xl p-4 text-xs leading-relaxed ${
              isFeatured ? "bg-white/10 text-blue-50" : "bg-slate-50 text-slate-500"
            }`}
          >
            {offer.expiry && <p className="font-bold mb-1">{offer.expiry}</p>}
            {offer.termsNote && <p>{offer.termsNote}</p>}
          </div>
        )}

        <a
          href={offer.outboundUrl}
          target="_blank"
          rel="noreferrer"
          className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-extrabold transition-all ${
            isFeatured
              ? "bg-white text-blue-700 hover:bg-blue-50"
              : "bg-blue-700 text-white hover:bg-blue-800"
          }`}
          aria-label={`${offer.ctaLabel} from ${offer.partnerName}`}
        >
          {offer.ctaLabel}
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function EmptyOffersState({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
      <div className="mx-auto mb-5 h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center">
        <Search className="h-6 w-6 text-slate-500" />
      </div>
      <h3 className="text-2xl font-extrabold text-slate-900 mb-3">No matching offers found</h3>
      <p className="text-slate-600 max-w-xl mx-auto mb-6">
        Try another category or clear your search to browse the full partner offer collection.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-extrabold text-white hover:bg-blue-800 transition-colors"
      >
        <RotateCcw className="h-4 w-4" />
        Reset filters
      </button>
    </div>
  );
}

export function OffersPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All Offers");
  const [searchTerm, setSearchTerm] = useState("");

  const activeOffers = useMemo(() => partnerOffers.filter((offer) => offer.active), []);
  const featuredOffers = useMemo(() => activeOffers.filter((offer) => offer.featured).slice(0, 4), [activeOffers]);

  const filteredOffers = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return activeOffers.filter((offer) => {
      const matchesCategory = selectedCategory === "All Offers" || offer.category === selectedCategory;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [offer.partnerName, offer.offerTitle, offer.category, offer.description, offer.promotionalLabel]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeOffers, selectedCategory, searchTerm]);

  const resetFilters = () => {
    setSelectedCategory("All Offers");
    setSearchTerm("");
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PageHero
        title="Partner Offers"
        titleAccent="& Deals"
        subtitle="Curated discounts, practical partner solutions, and referral offers selected to help small businesses reduce friction, save time, and access better support."
        badge="Offers & Deals"
        breadcrumb="Offers"
        image={heroImage}
        bullets={["Curated partner solutions", "Referral-style offers", "Built for small business needs"]}
        ctaPrimary={{ label: "Explore Offers", href: "#browse-offers" }}
        ctaSecondary={{ label: "Become a Partner", href: "#become-a-partner" }}
        stat={{ value: `${activeOffers.length}+`, label: "Partner Offers", sublabel: "Ready to explore" }}
      />

      <section className="py-10 border-b border-slate-100 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: BadgeCheck, title: "Curated for usefulness", copy: "Offers are selected for practical small business value, not just loud discount labels." },
              { icon: ShieldCheck, title: "Commercially clear", copy: "Cards show partner, category, promotion, and terms notes where relevant." },
              { icon: Handshake, title: "Referral ready", copy: "Each offer is structured for outbound partner actions and future tracking." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl border border-slate-100 p-5 flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.copy}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white" id="featured-offers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-orange-700 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full mb-4">
                <Star className="h-3.5 w-3.5" />
                Featured Offers
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                High-value partner offers worth seeing first
              </h2>
              <p className="text-slate-600 max-w-2xl">
                A small selection of highlighted offers for common business needs: finance visibility, insurance review, HR foundations, and operational improvement.
              </p>
            </div>
            <a href="#browse-offers" className="inline-flex items-center gap-2 text-blue-700 font-extrabold hover:text-blue-800">
              Browse all offers <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {featuredOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-slate-50" id="browse-offers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-4">
                <Filter className="h-3.5 w-3.5" />
                Browse Offers
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Find the right partner offer
              </h2>
              <p className="text-slate-600 max-w-2xl">
                Filter by business need or search by partner, category, discount, or service area.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl p-4 sm:p-5 mb-8 shadow-sm">
            <div className="flex flex-col xl:flex-row gap-4 xl:items-center xl:justify-between">
              <div className="flex flex-wrap gap-2">
                {offerCategories.map((category) => {
                  const isSelected = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-full px-4 py-2 text-sm font-extrabold transition-all ${
                        isSelected
                          ? "bg-blue-700 text-white shadow-sm"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              <label className="relative block xl:w-80">
                <span className="sr-only">Search offers</span>
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search offers..."
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
                />
              </label>
            </div>
          </div>

          {filteredOffers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredOffers.map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          ) : (
            <EmptyOffersState onReset={resetFilters} />
          )}
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white" id="become-a-partner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-slate-900 text-white overflow-hidden shadow-2xl shadow-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-0">
              <div className="p-8 sm:p-10 lg:p-14">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-blue-100 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full mb-5">
                  <Building2 className="h-3.5 w-3.5" />
                  Partner Acquisition
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                  Become a Partner
                </h2>
                <p className="text-slate-300 leading-relaxed max-w-2xl mb-8">
                  If you provide finance, insurance, HR, software, operations, legal, or marketing support for small businesses, the Offers hub can become a qualified referral surface for your solution.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {[
                    "Reach business owners",
                    "Promote useful offers",
                    "Build referral pathways",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-white/10 p-4 text-sm font-bold text-slate-100">
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-blue-50 transition-colors"
                >
                  Apply for Partnership <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="bg-blue-700 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                <BriefcaseBusiness className="h-12 w-12 text-blue-100 mb-6" />
                <h3 className="text-2xl font-extrabold mb-4">Built for credible partner referrals, not coupon chaos.</h3>
                <p className="text-blue-50 leading-relaxed">
                  The offer model already supports featured placement, active status, external links, category filters, partner identity, and terms notes, so future CMS or tracking integration can slot in without rebuilding the page from scratch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
