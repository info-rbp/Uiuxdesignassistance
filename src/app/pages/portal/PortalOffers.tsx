import { Link } from "react-router";
import { PortalAdminReference } from "./PortalAdminReference";
import { Tag, ExternalLink, CheckCircle, Star, ArrowRight } from "lucide-react";

const offers = [
  {
    partner: "Xero",
    logo: "X",
    logoColor: "bg-blue-500",
    title: "3 Months Free Subscription",
    description: "Get Xero Starter, Standard, or Premium free for 3 months, then 50% off for the following 3 months. No credit card required.",
    category: "Accounting",
    saving: "Up to $294",
    status: "Activated",
    statusColor: "bg-emerald-50 text-emerald-700",
    rating: 5,
  },
  {
    partner: "Employment Hero",
    logo: "EH",
    logoColor: "bg-violet-600",
    title: "3 Months Free HR Platform",
    description: "Free access to Employment Hero's HR, payroll, and employee engagement platform for up to 10 employees.",
    category: "HR & Payroll",
    saving: "Up to $450",
    status: "Available",
    statusColor: "bg-blue-50 text-blue-700",
    rating: 5,
  },
  {
    partner: "LegalVision",
    logo: "LV",
    logoColor: "bg-slate-700",
    title: "25% Off Legal Services",
    description: "Exclusive discount on LegalVision's fixed-fee legal services, including business contracts, IP protection, and compliance.",
    category: "Legal",
    saving: "25% off",
    status: "Available",
    statusColor: "bg-blue-50 text-blue-700",
    rating: 4,
  },
  {
    partner: "Microsoft 365",
    logo: "M",
    logoColor: "bg-sky-600",
    title: "30% Off Business Plans",
    description: "Discounted Microsoft 365 Business Basic, Standard, or Premium plans including Teams, SharePoint, and Exchange.",
    category: "Productivity",
    saving: "30% off",
    status: "Available",
    statusColor: "bg-blue-50 text-blue-700",
    rating: 5,
  },
  {
    partner: "Canva Pro",
    logo: "C",
    logoColor: "bg-violet-500",
    title: "2 Months Free Pro Plan",
    description: "Unlock Canva Pro with premium templates, brand kit, background remover, and team collaboration tools.",
    category: "Design",
    saving: "Up to $60",
    status: "Available",
    statusColor: "bg-blue-50 text-blue-700",
    rating: 4,
  },
  {
    partner: "Shopify",
    logo: "S",
    logoColor: "bg-emerald-600",
    title: "3 Months for $1/month",
    description: "Start your online store with Shopify's Basic plan for just $1 AUD/month for the first 3 months.",
    category: "eCommerce",
    saving: "Up to $87",
    status: "Available",
    statusColor: "bg-blue-50 text-blue-700",
    rating: 5,
  },
];

export function PortalOffers() {
  return (
    <div className="px-4 sm:px-6 py-6 space-y-6">
      <PortalAdminReference
        portalRoute="/portal/offers"
        controlledBy={["Admin Offers"]}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 mb-1">Partner Offers</h2>
          <p className="text-sm text-slate-500">Exclusive discounts and deals negotiated for RBP members.</p>
        </div>
        <Link
          to="/offers"
          className="hidden sm:inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex-shrink-0"
        >
          Browse All Offers <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Activated banner */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-4 flex items-center gap-3">
        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
        <div>
          <div className="text-xs font-extrabold text-emerald-800">1 offer currently activated</div>
          <div className="text-[10px] text-emerald-600">You're saving up to <span className="font-bold">$294</span> with your active Xero subscription.</div>
        </div>
      </div>

      {/* Offer grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {offers.map((offer) => (
          <div key={offer.partner} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col gap-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${offer.logoColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <span className="text-xs font-black text-white">{offer.logo}</span>
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">{offer.partner}</div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-2.5 h-2.5 ${i < offer.rating ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200"}`} />
                    ))}
                  </div>
                </div>
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-lg flex-shrink-0 ${offer.statusColor}`}>
                {offer.status}
              </span>
            </div>

            <div>
              <div className="text-xs font-bold text-slate-800 mb-1">{offer.title}</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">{offer.description}</p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-50">
              <div>
                <div className="text-[10px] text-slate-400 font-medium">Member saving</div>
                <div className="text-sm font-extrabold text-blue-700">{offer.saving}</div>
              </div>
              {offer.status === "Activated" ? (
                <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                  <CheckCircle className="w-3.5 h-3.5" /> Active
                </span>
              ) : (
                <button className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-[10px] px-3 py-2 rounded-lg transition-colors">
                  Redeem <ExternalLink className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
