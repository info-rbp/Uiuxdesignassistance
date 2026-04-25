import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Users, 
  Building2, 
  Store, 
  BarChart3,
  Wifi,
  Smartphone,
  Router,
  Network,
  CreditCard,
  HeadphonesIcon,
  Plus
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { CTABanner } from "../components/CTABanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const inclusions = [
  { title: "Business internet plan selection", icon: <Globe className="w-5 h-5 text-blue-600" /> },
  { title: "Wholesale network partner access", icon: <Network className="w-5 h-5 text-blue-600" /> },
  { title: "Account setup and onboarding", icon: <Users className="w-5 h-5 text-blue-600" /> },
  { title: "Router and hardware guidance", icon: <Router className="w-5 h-5 text-blue-600" /> },
  { title: "Static IP options where available", icon: <ShieldCheck className="w-5 h-5 text-blue-600" /> },
  { title: "Support coordination", icon: <HeadphonesIcon className="w-5 h-5 text-blue-600" /> },
  { title: "Billing and plan management", icon: <CreditCard className="w-5 h-5 text-blue-600" /> },
  { title: "Upgrade and change management", icon: <Zap className="w-5 h-5 text-blue-600" /> },
  { title: "Optional 4G/5G backup", icon: <Smartphone className="w-5 h-5 text-blue-600" /> },
  { title: "Optional managed Wi-Fi", icon: <Wifi className="w-5 h-5 text-blue-600" /> }
];

const categories = [
  {
    title: "Residential Connectivity",
    bestFor: "Small teams and everyday cloud applications",
    inclusions: ["Broadband options", "Standard support", "Basic onboarding"],
    link: "/managed-solutions/managed-connectivity/internet-plans"
  },
  {
    title: "Business Broadband",
    bestFor: "Businesses requiring reliable day-to-day connectivity",
    inclusions: ["Optimised for business apps", "Static IP options", "Service coordination"],
    link: "/managed-solutions/managed-connectivity/internet-plans"
  },
  {
    title: "High-Performance Internet",
    bestFor: "High-demand environments and larger cloud usage",
    inclusions: ["Priority service tiers", "Advanced performance", "Dedicated coordination"],
    link: "/managed-solutions/managed-connectivity/internet-plans"
  },
  {
    title: "Enterprise Connectivity",
    bestFor: "Complex requirements and high-availability needs",
    inclusions: ["Custom fibre options", "SLA coordination", "Complex site support"],
    link: "/managed-solutions/managed-connectivity/internet-plans"
  },
  {
    title: "Multi-site Connectivity",
    bestFor: "Organisations with multiple physical locations",
    inclusions: ["Unified account management", "Centralised support", "Standardised hardware"],
    link: "/managed-solutions/multi-site-connectivity"
  }
];

const customerSegments = [
  {
    title: "Small & Medium Businesses",
    description: "Reliable internet that just works, with a partner handling the details.",
    icon: <Users className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Professional Services",
    description: "Optimised for cloud platforms, VoIP, and video conferencing.",
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Retail & Hospitality",
    description: "Stable connectivity for POS systems and customer Wi-Fi.",
    icon: <Store className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Property Managers",
    description: "Simplified connectivity solutions for multi-tenant and managed properties.",
    icon: <Building2 className="w-6 h-6 text-blue-600" />
  }
];

const addons = [
  "Managed router",
  "Managed Wi-Fi",
  "4G/5G backup",
  "Static IP",
  "VoIP readiness",
  "Network security",
  "Priority support coordination",
  "Multi-site account management"
];

export function ManagedConnectivityPage() {
  useEffect(() => {
    document.title = "Managed Connectivity | Business Internet & Network Solutions";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Managed internet and connectivity solutions for businesses, including business broadband, static IP options, onboarding, support coordination, and optional 4G/5G backup.");
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <PageHero
        title="Managed Connectivity"
        titleAccent="for Modern Businesses"
        subtitle="Reliable business internet, simple monthly pricing, and one point of accountability for connectivity, onboarding, and support coordination."
        breadcrumb="Managed Connectivity"
        ctaPrimary={{ label: "Request a Connectivity Review", href: "/contact" }}
        ctaSecondary={{ label: "View Business Internet Options", href: "/managed-solutions/managed-connectivity/internet-plans" }}
        badge="Enterprise Performance"
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2600&auto=format&fit=crop"
      />

      {/* Overview Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Simple, Reliable, Accountable</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              Business connectivity should be simple, reliable, and commercially transparent. Our Managed Connectivity solution helps businesses select, provision, and manage internet services through a single accountable partner. We coordinate the connection, plan selection, support pathway, and ongoing account management so your team can focus on operating the business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" /> Expert Guidance
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We help you navigate complex plan options to find the exact service your business needs.
              </p>
            </div>
            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" /> Accountable Partner
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                One single point of contact for onboarding, billing, and support coordination.
              </p>
            </div>
            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" /> Network Selection
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Aggregated access to wholesale network partners to ensure the best available performance.
              </p>
            </div>
            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Wifi className="w-5 h-5 text-blue-600" /> Peace of Mind
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Optional continuity features like 4G/5G backup to keep you online when it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What's Included</h2>
            <p className="text-slate-600 mt-4">Every managed connectivity solution includes a comprehensive suite of benefits.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {inclusions.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-200 transition-colors">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-900 text-sm leading-tight">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Partner Explanation */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
            <h2 className="text-2xl font-bold mb-6">Our Wholesale Network Partners</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-0">
              Connectivity services may be delivered through selected wholesale network partners, including Superloop. This allows us to package competitive internet services into a managed customer experience under our own service model, with a focus on clarity, support, and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Plan Categories */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Service Tiers</Badge>
            <h2 className="text-4xl font-extrabold text-slate-900">Solution Categories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <Card key={i} className="border-slate-200 hover:border-blue-300 transition-all flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm font-semibold text-blue-700 mb-4 uppercase tracking-wider">Best for:</p>
                  <p className="text-slate-600 mb-6">{cat.bestFor}</p>
                  <div className="space-y-3">
                    {cat.inclusions.map((inc, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        {inc}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 py-6 h-auto font-bold rounded-xl mt-4">
                    <Link to={cat.link}>Enquire</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Recommended Add-ons</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Enhance your managed connectivity solution with optional features designed to improve coverage, reliability, and security.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {addons.map((addon, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Plus className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-slate-700">{addon}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                    <Zap className="w-16 h-16 text-blue-400 opacity-20" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Need a custom solution?</h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                    Our team can design complex network architectures including multi-site SD-WAN, managed firewalls, and diverse path redundancy.
                </p>
                <Button asChild className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 h-auto font-bold">
                    <Link to="/contact">Book a Review</Link>
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Customers */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Who it's for</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customerSegments.map((seg, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
                <div className="mx-auto mb-6 p-4 bg-blue-50 rounded-full w-fit">{seg.icon}</div>
                <h3 className="font-bold text-slate-900 mb-3">{seg.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{seg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                q: "Are these plans directly provided by your business?",
                a: "We provide the managed customer experience, account coordination, and support pathway. Connectivity may be delivered through selected wholesale network partners."
              },
              {
                q: "Is Superloop the network provider?",
                a: "Some connectivity services may be delivered through Superloop or other selected wholesale network partners, depending on availability, location, and service requirements."
              },
              {
                q: "Can you help us choose the right plan?",
                a: "Yes. We review your site, users, applications, and continuity needs before recommending an appropriate connectivity option."
              },
              {
                q: "Do you support business-grade connections?",
                a: "Yes. We can support business-focused connectivity requirements, including higher-performance plans, static IP options where available, failover, and multi-site needs."
              },
              {
                q: "Can you support multiple sites?",
                a: "Yes. We can coordinate connectivity across multiple offices, retail locations, properties, or operating sites."
              },
              {
                q: "Do you provide support?",
                a: "We provide support coordination and account management as part of the managed solution. Specific technical support inclusions should be aligned to the selected package."
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-slate-100 pb-8 last:border-0">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to simplify your business connectivity?"
        subtitle="Tell us about your site, users, applications, and continuity requirements. We will recommend a managed connectivity option aligned to your business needs."
        ctaLabel="Book a Connectivity Review"
        ctaHref="/contact"
      />
      <Footer />
    </div>
  );
}
