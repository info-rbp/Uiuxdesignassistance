import { useState, useMemo } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { CTABanner } from "../components/CTABanner";
import { 
  Tag, 
  Search, 
  ExternalLink, 
  ChevronRight, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Building2, 
  Briefcase,
  ShieldCheck,
  CreditCard,
  Zap,
  Globe,
  Filter
} from "lucide-react";
import { ShortFormDisclosure } from "../components/finance/FinanceShared";

// --- Data Model ---
interface Offer {
  id: string;
  partnerName: string;
  partnerLogo?: string;
  title: string;
  description: string;
  category: "Finance" | "Tech" | "HR" | "Legal" | "Operations" | "Marketing";
  discountLabel: string;
  ctaLabel: string;
  outboundUrl: string;
  isFeatured: boolean;
  isActive: boolean;
  expiryDate?: string;
  terms?: string;
}

// --- Mock Data ---
const ALL_OFFERS: Offer[] = [
  {
    id: "1",
    partnerName: "ClearPay Banking",
    title: "Business Account Booster",
    description: "Open a new business account and get $500 cashback plus zero transaction fees for the first 12 months.",
    category: "Finance",
    discountLabel: "$500 Cashback",
    ctaLabel: "Open Account",
    outboundUrl: "https://example.com/clearpay",
    isFeatured: true,
    isActive: true,
  },
  {
    id: "2",
    partnerName: "Nexus CRM",
    title: "Growth Stack Discount",
    description: "A complete CRM and marketing automation suite. RBP members get 40% off all annual plans and free migration.",
    category: "Tech",
    discountLabel: "40% Off Annual",
    ctaLabel: "Claim Discount",
    outboundUrl: "https://example.com/nexus",
    isFeatured: true,
    isActive: true,
    terms: "New customers only."
  },
  {
    id: "3",
    partnerName: "PeopleForce HR",
    title: "Full HR Platform Access",
    description: "Streamline your payroll, leave management, and performance reviews. First 3 months free for teams up to 50.",
    category: "HR",
    discountLabel: "3 Months Free",
    ctaLabel: "Start Trial",
    outboundUrl: "https://example.com/peopleforce",
    isFeatured: true,
    isActive: true,
  },
  {
    id: "4",
    partnerName: "Guardia Legal",
    title: "Contract Review Credits",
    description: "Get 5 professional legal document reviews per month. Specialized in employment and lease agreements.",
    category: "Legal",
    discountLabel: "5 Service Credits",
    ctaLabel: "View Portfolio",
    outboundUrl: "https://example.com/guardia",
    isFeatured: false,
    isActive: true,
  },
  {
    id: "5",
    partnerName: "ShipSwift Logistics",
    title: "Global Shipping Rates",
    description: "Access tier-1 shipping rates usually reserved for enterprise. No minimum volume required for RBP partners.",
    category: "Operations",
    discountLabel: "Enterprise Rates",
    ctaLabel: "Get Rates",
    outboundUrl: "https://example.com/shipswift",
    isFeatured: false,
    isActive: true,
  },
  {
    id: "6",
    partnerName: "BrightAds",
    title: "Ad Spend Match",
    description: "Kickstart your growth with a credit match on your first $1,000 of ad spend across major search platforms.",
    category: "Marketing",
    discountLabel: "$1,000 Match",
    ctaLabel: "Redeem Credits",
    outboundUrl: "https://example.com/brightads",
    isFeatured: false,
    isActive: true,
  },
  {
    id: "7",
    partnerName: "SecureCloud",
    title: "Cyber Security Audit",
    description: "Professional vulnerability assessment and compliance report for small businesses. 50% discount for members.",
    category: "Tech",
    discountLabel: "50% Off Audit",
    ctaLabel: "Book Audit",
    outboundUrl: "https://example.com/securecloud",
    isFeatured: false,
    isActive: true,
  },
  {
    id: "8",
    partnerName: "Insight Analytics",
    title: "Data Dashboard Setup",
    description: "Custom business intelligence dashboards integrated with your existing data sources. First setup is complimentary.",
    category: "Tech",
    discountLabel: "Free Setup",
    ctaLabel: "Explore Solution",
    outboundUrl: "https://example.com/insight",
    isFeatured: false,
    isActive: true,
  },
];

const CATEGORIES = ["All", "Finance", "Tech", "HR", "Legal", "Operations", "Marketing"];

// --- Sub-components ---

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
            {offer.category === "Finance" && <CreditCard className="w-6 h-6 text-blue-600" />}
            {offer.category === "Tech" && <Zap className="w-6 h-6 text-amber-500" />}
            {offer.category === "HR" && <Briefcase className="w-6 h-6 text-emerald-600" />}
            {offer.category === "Legal" && <ShieldCheck className="w-6 h-6 text-indigo-600" />}
            {offer.category === "Operations" && <Globe className="w-6 h-6 text-violet-600" />}
            {offer.category === "Marketing" && <Tag className="w-6 h-6 text-rose-500" />}
          </div>
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
            {offer.category}
          </span>
        </div>

        <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
          {offer.partnerName}
        </h3>
        <h4 className="text-lg font-extrabold text-slate-900 mb-3 leading-tight">
          {offer.title}
        </h4>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {offer.description}
        </p>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg mb-2">
          <Tag className="w-3.5 h-3.5" />
          {offer.discountLabel}
        </div>
      </div>

      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 mt-auto flex items-center justify-between group-hover:bg-blue-50/50 transition-colors">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          {offer.expiryDate ? `Expires ${offer.expiryDate}` : "Limited Time"}
        </span>
        <a
          href={offer.outboundUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-blue-700 font-bold text-sm hover:gap-2.5 transition-all"
        >
          {offer.ctaLabel} <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

function FeaturedOfferCard({ offer }: { offer: Offer }) {
  return (
    <div className="relative group bg-blue-900 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 text-white p-8 md:p-10 h-full flex flex-col md:flex-row gap-8 items-center border border-white/10 hover:border-white/20 transition-all duration-500">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-700/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 flex-shrink-0">
        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
           <Zap className="w-10 h-10 text-blue-300" />
        </div>
      </div>

      <div className="relative z-10 flex-grow text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-700/50 backdrop-blur-sm border border-white/10 rounded-full mb-4 text-xs font-bold tracking-widest uppercase text-blue-200">
          <Star className="w-3 h-3 fill-blue-300 text-blue-300" />
          Featured Offer
        </div>
        <h3 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">
          {offer.title}
        </h3>
        <p className="text-blue-100/80 text-lg mb-6 max-w-xl">
          By {offer.partnerName}. {offer.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={offer.outboundUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-3.5 rounded-xl font-extrabold text-sm hover:bg-blue-50 hover:-translate-y-0.5 transition-all shadow-lg"
          >
            {offer.ctaLabel} <ExternalLink className="w-4 h-4" />
          </a>
          <div className="text-blue-300 text-sm font-bold flex items-center gap-2">
            <Tag className="w-4 h-4" />
            {offer.discountLabel}
          </div>
        </div>
        
        {offer.terms && (
          <p className="mt-4 text-[11px] text-blue-400/60 italic">
            * {offer.terms}
          </p>
        )}
      </div>
    </div>
  );
}

// --- Main Page ---

export function OffersPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOffers = useMemo(() => {
    return ALL_OFFERS.filter((offer) => {
      const matchesCategory = activeCategory === "All" || offer.category === activeCategory;
      const matchesSearch = 
        offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offer.partnerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offer.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredOffers = useMemo(() => ALL_OFFERS.filter(o => o.isFeatured), []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <PageHero
        title="Partner Offers"
        titleAccent="& Deals"
        subtitle="Exclusive discounts, rebates, and special access to industry-leading products and services curated specifically for our small business community."
        badge="Curated Network"
        breadcrumb="Offers"
        image="https://images.unsplash.com/photo-1621508650919-ff19e344e88a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxidXNpbmVzcyUyMGNvbm5lY3Rpb25zfGVufDF8fHwxNzc3MDkzMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
        bullets={["Verified Partner Network", "Member-Only Discounts", "Zero Platform Fees"]}
        ctaPrimary={{ label: "Explore Offers", href: "#explore" }}
        ctaSecondary={{ label: "Become a Partner", href: "#partner-program" }}
        stat={{ value: "50+", label: "Verified Partners", sublabel: "Growing monthly" }}
      />

      {/* Featured Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Spotlight <span className="text-blue-700">Deals</span>
            </h2>
            <p className="text-slate-600 mt-2">Our most high-impact offers for the current quarter.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {featuredOffers.slice(0, 1).map(offer => (
              <FeaturedOfferCard key={offer.id} offer={offer} />
            ))}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {featuredOffers.slice(1, 3).map(offer => (
                 <div key={offer.id} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] transition-all group-hover:w-36 group-hover:h-36 -z-0" />
                   <div className="relative z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded-full mb-4 uppercase tracking-widest border border-amber-100">
                      <Star className="w-3 h-3 fill-amber-700" /> Premium
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight">{offer.title}</h3>
                    <p className="text-slate-600 mb-6 line-clamp-2 italic">By {offer.partnerName}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-blue-700 font-extrabold text-lg flex items-center gap-2">
                        <Tag className="w-5 h-5 text-blue-600" /> {offer.discountLabel}
                      </div>
                      <a href={offer.outboundUrl} className="p-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors shadow-lg shadow-blue-200">
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter & Grid Section */}
      <section className="py-24" id="explore">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 border-b border-slate-100 pb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                All <span className="text-blue-700">Offers</span>
              </h2>
              <p className="text-slate-500 font-medium">Browse by business function or search by keyword.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-grow max-w-2xl lg:justify-end">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search partners or deals..."
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative group">
                <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-3 cursor-default">
                  <Filter className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-bold text-slate-700">{activeCategory}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-blue-700 text-white shadow-lg shadow-blue-200 -translate-y-0.5"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredOffers.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
                {filteredOffers.map((offer) => (
                  <OfferCard key={offer.id} offer={offer} />
                ))}
              </div>
              <div className="max-w-3xl">
                <ShortFormDisclosure variant="offers" />
              </div>
            </>
          ) : (
            <div className="py-24 text-center bg-slate-50 rounded-[40px] border border-dashed border-slate-300">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Search className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">No offers found</h3>
              <p className="text-slate-500 max-w-md mx-auto mb-8">
                We couldn't find any offers matching "{searchQuery}" in the {activeCategory} category. Try broadening your search or resetting filters.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Partner Program Section */}
      <section className="py-28 bg-white" id="partner-program">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[48px] overflow-hidden relative p-8 md:p-16 lg:p-24 text-center lg:text-left">
            <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
               <div className="absolute inset-0 bg-blue-900 mix-blend-overlay opacity-30" />
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzc3MDkzMTkwfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                 alt="Partner Program" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Partner with RBP
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Put your solution in front of <span className="text-blue-400">thousands</span> of business owners.
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                We are always looking for premium service providers and software vendors who want to offer exclusive value to our members. Join our ecosystem and grow your reach.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-900/20"
                >
                  Apply for Partnership
                </Link>
                <div className="flex items-center gap-8 px-4 opacity-70">
                   <div className="text-center">
                      <div className="text-white font-black text-2xl leading-none">12M+</div>
                      <div className="text-slate-400 text-[10px] font-bold uppercase tracking-tighter">Reach</div>
                   </div>
                   <div className="text-center border-l border-white/10 pl-8">
                      <div className="text-white font-black text-2xl leading-none">85%</div>
                      <div className="text-slate-400 text-[10px] font-bold uppercase tracking-tighter">Conversion</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-8">Trusted by industry leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <div className="h-8 w-auto font-black text-2xl tracking-tighter text-slate-900">STRIPE</div>
             <div className="h-8 w-auto font-black text-2xl tracking-tighter text-slate-900">ZENDESK</div>
             <div className="h-8 w-auto font-black text-2xl tracking-tighter text-slate-900">AIRWALLEX</div>
             <div className="h-8 w-auto font-black text-2xl tracking-tighter text-slate-900">HUBSPOT</div>
             <div className="h-8 w-auto font-black text-2xl tracking-tighter text-slate-900">BREX</div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}