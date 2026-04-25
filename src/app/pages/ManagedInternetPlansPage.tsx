import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { 
  CheckCircle2, 
  ArrowRight, 
  Search,
  Wifi,
  Building2,
  Home,
  Briefcase,
  Zap,
  Globe,
  Plus,
  ShieldCheck,
  Smartphone,
  Phone,
  Cloud,
  Database,
  Lock,
  LayoutGrid,
  Settings,
  RefreshCw,
  Monitor,
  Network
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

/**
 * PLAN DATA OBJECT
 * Pricing should be updated once the commercial model is finalised. 
 * Public pricing must not expose wholesale cost, supplier cost, gross margin, or MSR commercial terms.
 * INTERNAL NOTE FOR MAINTAINERS:
 * Pricing should support the commercial model where discounted pricing maintains approximately 5% margin 
 * and standard pricing maintains approximately 10% margin.
 */
const managedInternetPlans = [
  // --- Residential Connectivity ---
  {
    name: "Essential Connect",
    category: "Residential Connectivity",
    bestFor: "Home offices and basic everyday internet use",
    serviceType: "Entry-level residential internet",
    inclusions: [
      "Plan selection support",
      "Account setup coordination",
      "Standard support pathway",
      "Monthly account management"
    ],
    addOns: [
      "Managed router",
      "Static IP where available",
      "Backup connectivity"
    ],
    price: "Pricing to be confirmed",
    ctaLabel: "Enquire"
  },
  {
    name: "Everyday Connect",
    category: "Residential Connectivity",
    bestFor: "Remote workers, small households, and regular cloud application use",
    serviceType: "Standard residential internet",
    inclusions: [
      "Plan selection support",
      "Account setup coordination",
      "Standard support pathway",
      "Monthly account management"
    ],
    addOns: [
      "Managed router",
      "Static IP where available",
      "Managed Wi-Fi"
    ],
    price: "Pricing to be confirmed",
    ctaLabel: "Enquire"
  },
  {
    name: "Family Connect",
    category: "Residential Connectivity",
    bestFor: "Households with multiple users, streaming, video calls, and work-from-home needs",
    serviceType: "Higher-capacity residential internet",
    inclusions: [
      "Plan selection support",
      "Account setup coordination",
      "Standard support pathway",
      "Monthly account management"
    ],
    addOns: [
      "Managed router",
      "Managed Wi-Fi",
      "Backup connectivity"
    ],
    price: "Pricing to be confirmed",
    ctaLabel: "Enquire"
  },
  {
    name: "Performance Connect",
    category: "Residential Connectivity",
    bestFor: "Power users, creators, home businesses, and high-demand residential environments",
    serviceType: "High-performance residential internet",
    inclusions: [
      "Plan selection support",
      "Account setup coordination",
      "Standard support pathway",
      "Monthly account management"
    ],
    addOns: [
      "Managed router",
      "Managed Wi-Fi",
      "Static IP where available",
      "Backup connectivity"
    ],
    price: "Pricing to be confirmed",
    ctaLabel: "Enquire"
  },

  // --- Business Connectivity ---
  {
    name: "Business Connect Essential",
    category: "Business Connectivity",
    bestFor: "Small teams, sole traders, and everyday business applications",
    serviceType: "Entry-level business internet",
    inclusions: [
      "Business-focused plan review",
      "Account setup coordination",
      "Support coordination",
      "Monthly account management"
    ],
    addOns: [
      "Static IP where available",
      "Managed router",
      "Managed Wi-Fi",
      "Backup connectivity"
    ],
    price: "Pricing to be confirmed",
    ctaLabel: "Enquire"
  },
  {
    name: "Business Connect Plus",
    category: "Business Connectivity",
    bestFor: "Small offices using cloud apps, email, payments, and video conferencing",
    serviceType: "Standard business internet",
    inclusions: [
      "Business-focused plan review",
      "Account setup coordination",
      "Support coordination",
      "Monthly account management",
      "Upgrade/change management"
    ],
    addOns: [
      "Static IP where available",
      "Managed router",
      "Managed Wi-Fi",
      "Backup connectivity",
      "VoIP readiness"
    ],
    price: "Pricing to be confirmed",
    ctaLabel: "Enquire"
  },
  {
    name: "Business Connect Pro",
    category: "Business Connectivity",
    bestFor: "Teams that rely heavily on cloud platforms, video meetings, and connected devices",
    serviceType: "Higher-performance business internet",
    inclusions: [
      "Business-focused plan review",
      "Account setup coordination",
      "Support coordination",
      "Monthly account management",
      "Upgrade/change management"
    ],
    addOns: [
      "Static IP where available",
      "Managed router",
      "Managed Wi-Fi",
      "Backup connectivity",
      "Network security",
      "VoIP readiness"
    ],
    price: "Pricing to be confirmed",
    ctaLabel: "Enquire"
  },
  {
    name: "Business Connect Max",
    category: "Business Connectivity",
    bestFor: "Businesses with high usage, more users, or stronger continuity requirements",
    serviceType: "Premium business internet",
    inclusions: [
      "Business-focused plan review",
      "Account setup coordination",
      "Support coordination",
      "Monthly account management",
      "Upgrade/change management",
      "Continuity review"
    ],
    addOns: [
      "Static IP where available",
      "Managed router",
      "Managed Wi-Fi",
      "Backup connectivity",
      "Network security",
      "Priority support coordination"
    ],
    price: "Pricing to be confirmed",
    ctaLabel: "Enquire"
  },

  // --- Enterprise Connectivity ---
  {
    name: "Enterprise Connect Fibre",
    category: "Enterprise Connectivity",
    bestFor: "Businesses requiring fibre-based performance and stronger connectivity pathways",
    serviceType: "Fibre or high-performance business connection",
    inclusions: [
      "Site connectivity review",
      "Account setup coordination",
      "Support coordination",
      "Monthly account management",
      "Upgrade/change management"
    ],
    addOns: [
      "Static IP",
      "Managed router/firewall",
      "Managed Wi-Fi",
      "Backup connectivity",
      "Network security"
    ],
    price: "Contact us for pricing",
    ctaLabel: "Enquire"
  },
  {
    name: "Enterprise Connect Priority",
    category: "Enterprise Connectivity",
    bestFor: "Operational sites requiring higher reliability, stronger support coordination, and continuity planning",
    serviceType: "Priority business or enterprise connectivity pathway",
    inclusions: [
      "Site connectivity review",
      "Support coordination",
      "Monthly account management",
      "Continuity review",
      "Change management"
    ],
    addOns: [
      "Backup connectivity",
      "Managed firewall",
      "Managed Wi-Fi",
      "Multi-site reporting",
      "Priority support coordination"
    ],
    price: "Contact us for pricing",
    ctaLabel: "Enquire"
  },
  {
    name: "Enterprise Connect Multi-Site",
    category: "Enterprise Connectivity",
    bestFor: "Businesses managing internet services across multiple offices, locations, or properties",
    serviceType: "Multi-site managed connectivity",
    inclusions: [
      "Multi-site connectivity review",
      "Centralised account coordination",
      "Support coordination",
      "Monthly account management",
      "Site-by-site recommendations"
    ],
    addOns: [
      "Backup connectivity",
      "Managed Wi-Fi",
      "Managed firewall",
      "Site reporting",
      "Standardised hardware options"
    ],
    price: "Contact us for pricing",
    ctaLabel: "Enquire"
  },
  {
    name: "Enterprise Connect Custom",
    category: "Enterprise Connectivity",
    bestFor: "Complex environments needing customised connectivity, network design, or commercial review",
    serviceType: "Custom connectivity solution",
    inclusions: [
      "Requirements discovery",
      "Site and usage review",
      "Partner availability assessment",
      "Commercial recommendation",
      "Support pathway design"
    ],
    addOns: [
      "Custom network design",
      "Managed firewall",
      "SD-WAN/VPN",
      "Backup connectivity",
      "Multi-site rollout support"
    ],
    price: "Contact us for pricing",
    ctaLabel: "Enquire"
  }
];

const addOns = [
  {
    title: "Managed Router",
    description: "Router guidance, configuration support, and account coordination for compatible business connectivity setups.",
    icon: <Globe className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Managed Wi-Fi",
    description: "Wi-Fi coverage planning, access point guidance, guest network options, and support coordination for business environments.",
    icon: <Wifi className="w-6 h-6 text-blue-600" />
  },
  {
    title: "4G/5G Backup",
    description: "Backup connectivity options designed to help keep your business online during fixed-line outages.",
    icon: <Smartphone className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Static IP",
    description: "Static IP options where available for businesses that require remote access, hosting, VPN, or specific application requirements.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  },
  {
    title: "VoIP Readiness",
    description: "Connectivity review for businesses planning to use hosted voice, softphones, or cloud phone systems.",
    icon: <Phone className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Network Security",
    description: "Firewall, DNS filtering, secure access, and network protection options for business environments.",
    icon: <Lock className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Multi-site Management",
    description: "Centralised account coordination for businesses operating across several locations.",
    icon: <LayoutGrid className="w-6 h-6 text-blue-600" />
  }
];

const faqs = [
  {
    q: "Are these Superloop plans?",
    a: "Our managed internet plans may use selected wholesale network partners, including Superloop, depending on availability and service requirements. The customer-facing managed service, account coordination, and support pathway are provided through our service model."
  },
  {
    q: "Are prices final?",
    a: "Pricing will depend on the selected plan type, service address, availability, and optional add-ons. Where final public pricing has not been released, customers should enquire for a recommendation."
  },
  {
    q: "Can you help us choose the right plan?",
    a: "Yes. We review your site, users, applications, device needs, and continuity requirements before recommending a suitable managed connectivity option."
  },
  {
    q: "Do you offer business internet?",
    a: "Yes. The Business Connectivity range is designed for small and medium businesses using cloud platforms, video conferencing, payment systems, and everyday operational tools."
  },
  {
    q: "Do you support home offices?",
    a: "Yes. The Residential Connectivity range may be suitable for home offices, remote workers, sole traders, and residential-style environments."
  },
  {
    q: "Can you help with multiple sites?",
    a: "Yes. The Enterprise Connectivity range includes options for multi-site businesses, property groups, franchises, and organisations managing several locations."
  },
  {
    q: "Can we add backup internet?",
    a: "Yes. 4G/5G backup connectivity can be added where suitable to support business continuity during fixed-line outages."
  },
  {
    q: "Do you provide Wi-Fi as well?",
    a: "Yes. Managed Wi-Fi can be added for offices, retail stores, hospitality venues, properties, and other business environments that need reliable wireless coverage."
  },
  {
    q: "Do you provide technical support?",
    a: "We provide support coordination and account management as part of the managed service. Specific inclusions depend on the selected plan and support package."
  }
];

export function ManagedInternetPlansPage() {
  useEffect(() => {
    document.title = "Managed Internet Plans | White-labelled Business Internet";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Flexible managed internet plans for residential, business, and enterprise connectivity needs, packaged with onboarding, account coordination, and support support pathways.");
  }, []);

  const getPlansByCategory = (category: string) => {
    return managedInternetPlans.filter(p => p.category === category);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <PageHero
        title="Managed Internet Plans"
        subtitle="Flexible internet options packaged with onboarding, account management, and support coordination, giving your business one clear pathway for connectivity."
        supportingCopy="Whether you need a simple connection for a small team, a higher-performance business service, or a managed option across multiple sites, our plans are structured to make business connectivity easier to compare, activate, and manage."
        breadcrumb="Managed Internet Plans"
        ctaPrimary={{ label: "Find the Right Plan", href: "#plans" }}
        ctaSecondary={{ label: "Book a Connectivity Review", href: "/contact" }}
        badge="Flexible Options"
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2600&auto=format&fit=crop"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Internet plans, managed properly</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Choosing an internet plan should not require comparing confusing provider tables, contract details, and support pathways. Our Managed Internet Plans bring together plan selection, onboarding, account coordination, and optional add-ons so your business can choose a connectivity option with confidence.
              </p>
              <div className="space-y-4">
                {[
                  "Clear plan categories",
                  "Business-focused recommendations",
                  "Onboarding and account setup support",
                  "Optional static IP, backup, Wi-Fi, and security add-ons",
                  "Support coordination through one accountable partner"
                ].map((bullet, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700 font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="aspect-square bg-slate-50 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                  <Network className="w-12 h-12 text-blue-200 mb-4" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Network Nodes</span>
               </div>
               <div className="aspect-square bg-blue-700 rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white">
                  <Zap className="w-12 h-12 text-blue-400 mb-4" />
                  <span className="text-xs font-bold opacity-80 uppercase tracking-widest">Smart Routing</span>
               </div>
               <div className="aspect-square bg-slate-900 rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white">
                  <ShieldCheck className="w-12 h-12 text-blue-500 mb-4" />
                  <span className="text-xs font-bold opacity-80 uppercase tracking-widest">Secure Connect</span>
               </div>
               <div className="aspect-square bg-slate-50 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                  <Building2 className="w-12 h-12 text-blue-200 mb-4" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enterprise Class</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Selection Section */}
      <section id="plans" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Compare managed internet options</h2>
            <p className="text-lg text-slate-600">Select a category to view tailored connectivity pathways.</p>
          </div>

          <Tabs defaultValue="Business Connectivity" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white p-1 rounded-2xl h-auto shadow-sm border border-slate-200 inline-flex">
                <TabsTrigger value="Residential Connectivity" className="px-8 py-4 rounded-xl data-[state=active]:bg-blue-700 data-[state=active]:text-white font-bold">Residential</TabsTrigger>
                <TabsTrigger value="Business Connectivity" className="px-8 py-4 rounded-xl data-[state=active]:bg-blue-700 data-[state=active]:text-white font-bold">Business</TabsTrigger>
                <TabsTrigger value="Enterprise Connectivity" className="px-8 py-4 rounded-xl data-[state=active]:bg-blue-700 data-[state=active]:text-white font-bold">Enterprise</TabsTrigger>
              </TabsList>
            </div>

            {["Residential Connectivity", "Business Connectivity", "Enterprise Connectivity"].map((cat) => (
              <TabsContent key={cat} value={cat}>
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm mb-12">
                  <div className="max-w-3xl mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{cat}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {cat === "Residential Connectivity" && "Suitable for home offices, sole traders, remote workers, and residential-style environments that need reliable internet packaged with account coordination."}
                      {cat === "Business Connectivity" && "Designed for small and medium businesses that rely on cloud applications, video conferencing, payment systems, communication tools, and everyday digital operations."}
                      {cat === "Enterprise Connectivity" && "For larger, more complex, or multi-site environments requiring higher performance, stronger coordination, customised options, or enterprise-grade connectivity pathways."}
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-slate-50">
                        <TableRow>
                          <TableHead className="font-bold text-slate-900 py-6 min-w-[200px]">Plan Name</TableHead>
                          <TableHead className="font-bold text-slate-900 min-w-[200px]">Best For / Service</TableHead>
                          <TableHead className="font-bold text-slate-900 min-w-[250px]">Key Inclusions & Add-ons</TableHead>
                          <TableHead className="font-bold text-slate-900 text-right min-w-[150px]">Monthly Price</TableHead>
                          <TableHead className="w-[120px]"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {getPlansByCategory(cat).map((plan, i) => (
                          <TableRow key={i} className="hover:bg-slate-50/50 transition-colors">
                            <TableCell className="py-8 font-bold text-slate-900 align-top">
                              {plan.name}
                            </TableCell>
                            <TableCell className="align-top pt-8">
                               <div className="text-sm font-semibold text-slate-800 mb-1">{plan.bestFor}</div>
                               <div className="text-[10px] font-black uppercase tracking-widest text-blue-600">{plan.serviceType}</div>
                            </TableCell>
                            <TableCell className="align-top pt-8">
                               <div className="space-y-4">
                                  <div>
                                     <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">Inclusions</div>
                                     <div className="flex flex-wrap gap-1.5">
                                        {plan.inclusions.map((inc, j) => (
                                          <Badge key={j} variant="outline" className="bg-blue-50 border-blue-100 text-blue-700 text-[10px] font-bold">{inc}</Badge>
                                        ))}
                                     </div>
                                  </div>
                                  <div>
                                     <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">Optional Add-ons</div>
                                     <div className="flex flex-wrap gap-1.5">
                                        {plan.addOns.map((add, j) => (
                                          <Badge key={j} variant="outline" className="bg-slate-100 border-slate-200 text-slate-500 text-[10px] font-bold">{add}</Badge>
                                        ))}
                                     </div>
                                  </div>
                               </div>
                            </TableCell>
                            <TableCell className="text-right align-top pt-8">
                               <div className="font-black text-slate-900 text-lg">{plan.price}</div>
                               <div className="text-[10px] font-bold text-slate-400">Ex GST where applicable</div>
                            </TableCell>
                            <TableCell className="text-right align-top pt-7">
                               <Button size="sm" asChild className="bg-blue-700 hover:bg-blue-800 font-bold px-6">
                                  <Link to="/contact">{plan.ctaLabel}</Link>
                               </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Optional add-ons</h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Build a connectivity package around the way your business actually operates. Add-on options can be included during onboarding or reviewed as your requirements change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((add, i) => (
              <Card key={i} className="border-slate-100 shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <div className="mb-4">{add.icon}</div>
                  <CardTitle className="text-lg font-bold">{add.title}</CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-sm text-slate-500 leading-relaxed">{add.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-3xl font-bold text-slate-900 mb-8">Why choose a managed internet plan?</h2>
                   <p className="text-lg text-slate-600 mb-10 leading-relaxed italic border-l-4 border-blue-600 pl-6">
                    A standard internet plan gives you a connection. A managed internet plan gives you a clearer operating model around that connection. We help coordinate the plan, onboarding, add-ons, and support pathway so your business is not left managing everything alone.
                   </p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                      {[
                        "One point of accountability",
                        "Business-focused recommendations",
                        "Easier plan comparison",
                        "Onboarding support",
                        "Optional continuity planning",
                        "Support coordination",
                        "Scalable add-ons",
                        "Suitable for single-site and multi-site"
                      ].map((p, i) => (
                        <div key={i} className="flex items-center gap-3">
                           <Zap className="w-4 h-4 text-blue-600" />
                           <span className="text-sm font-bold text-slate-700">{p}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-12">
                       <LayoutGrid className="w-24 h-24 text-blue-500/10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-8">Simplified Business Outcomes</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-10">
                      We navigate the complex landscape of technology providers so you don't have to. Our managed plans are structured for businesses that value time, reliability, and clear support pathways.
                    </p>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-10 h-auto rounded-2xl">
                        <Link to="/contact">Book a Review</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* Partner Disclosure Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Delivered through selected network partners</h2>
                <p className="text-slate-600 text-md leading-relaxed mb-0">
                    Connectivity services may be delivered through selected wholesale network partners, including Superloop, depending on location, service availability, and selected plan type. Our role is to provide the managed customer experience, including plan guidance, onboarding coordination, account management, and support pathway coordination.
                </p>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">Frequently asked questions</h2>
           </div>
           <div className="space-y-8">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                   <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                   <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-blue-700 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tighter italic uppercase">Find the right <br /><span className="text-blue-300">managed internet plan</span></h2>
             <p className="text-blue-100 text-xl font-medium mb-12 max-w-2xl mx-auto italic">
                Tell us about your location, users, applications, and business continuity needs. We will help identify a suitable managed connectivity option and any add-ons that may support your operations.
             </p>
             <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-white/90 font-black py-8 px-12 h-auto rounded-2xl text-xl italic uppercase tracking-tight shadow-2xl">
                    <Link to="/contact">Book a Connectivity Review</Link>
                 </Button>
                 <Button asChild size="lg" variant="outline" className="border-blue-400 text-white hover:bg-blue-600 font-black py-8 px-12 h-auto rounded-2xl text-xl italic uppercase tracking-tight">
                    <Link to="/contact">Contact Us</Link>
                 </Button>
             </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
