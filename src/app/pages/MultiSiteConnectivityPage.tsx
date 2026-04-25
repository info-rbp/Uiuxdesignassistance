import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  LayoutGrid, 
  BarChart3, 
  Users, 
  Smartphone,
  ShieldCheck,
  Zap,
  Building2,
  ListChecks,
  MonitorCheck,
  CreditCard
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { CTABanner } from "../components/CTABanner";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const benefits = [
  {
    title: "Centralised Plan Management",
    description: "Manage all site connections, speeds, and contracts through a single master account.",
    icon: <LayoutGrid className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Site-by-Site Connectivity Review",
    description: "We qualify every location to find the best performing service available for each site.",
    icon: <ListChecks className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Standardised Hardware Options",
    description: "Consistent hardware stack across all locations for easier management and support.",
    icon: <Zap className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Centralised Support Coordination",
    description: "One support pathway for all sites. We coordinate with multiple network partners for you.",
    icon: <Users className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Multi-site Reporting",
    description: "Get a clear bird's-eye view of connectivity status and performance across your entire network.",
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Unified Billing",
    description: "One clean invovice covering all your locations, simplified for your finance team.",
    icon: <CreditCard className="w-6 h-6 text-blue-600" />
  }
];

export function MultiSiteConnectivityPage() {
  useEffect(() => {
    document.title = "Multi-site Connectivity | Managed Network Solutions";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Managed connectivity solutions for businesses operating across multiple sites, offices, retail locations, or properties. Centralised billing and support.");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        title="Managed Connectivity"
        titleAccent="Across Multiple Sites"
        subtitle="Simplify internet, network coordination, billing, and support across multiple locations with one accountable partner."
        breadcrumb="Multi-site Connectivity"
        ctaPrimary={{ label: "Review My Sites", href: "/contact" }}
        badge="Enterprise Management"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
      />

      {/* The Challenge section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 font-heading">Stop Managing Site-by-Site</h2>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        Coordinating internet for 5, 10, or 50+ sites often leads to a messy web of different providers, varying speeds, and fragmented support pathways. 
                        Our Multi-site Connectivity solution consolidates this complexity into a streamlined, managed service model that scale with your growth.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                            <MonitorCheck className="w-5 h-5 text-green-600" />
                            <span className="font-semibold text-slate-800">Standardised service levels</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                            <ShieldCheck className="w-5 h-5 text-green-600" />
                            <span className="font-semibold text-slate-800">Consistent security protocols</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                            <Smartphone className="w-5 h-5 text-green-600" />
                            <span className="font-semibold text-slate-800">Optional unified backup across all sites</span>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 flex flex-col justify-center">
                            <div className="aspect-square bg-blue-50 rounded-2xl border border-blue-100 p-6 flex items-center justify-center">
                                <Building2 className="w-12 h-12 text-blue-200" />
                            </div>
                            <div className="aspect-square bg-blue-600 rounded-2xl p-6 flex items-center justify-center text-white">
                                <LayoutGrid className="w-12 h-12" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="aspect-[4/5] bg-slate-900 rounded-2xl p-8 flex flex-col justify-between text-white">
                                <Badge className="w-fit bg-blue-500/20 text-blue-400 border-none">Centralised</Badge>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Master Service Account</h4>
                                    <p className="text-xs text-slate-400">All sites, one portal, one partner.</p>
                                </div>
                            </div>
                            <div className="aspect-square bg-blue-50 rounded-2xl border border-blue-100 p-6 flex items-center justify-center">
                                <Globe className="w-12 h-12 text-blue-200" />
                            </div>
                        </div>
                    </div>
                    {/* Floating stat card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 z-10 w-48 text-center">
                        <p className="text-3xl font-extrabold text-blue-700">100%</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Network Visibility</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <Badge className="mb-4 bg-blue-100 text-blue-700">Enterprise Solutions</Badge>
                <h2 className="text-4xl font-extrabold text-slate-900">The Multi-site Advantage</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, i) => (
                    <Card key={i} className="hover:shadow-lg transition-all border-none shadow-sm">
                        <CardHeader>
                            <div className="mb-4">{benefit.icon}</div>
                            <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-slate-600 leading-relaxed text-sm">
                                {benefit.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Featured Section: Standardisation */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8 italic">"Consistency is the key to enterprise network reliability."</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-1 bg-blue-500/20 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed"><span className="text-white font-bold">Standardised Hardware:</span> We help you select a core hardware stack that is deployed across every site.</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-1 bg-blue-500/20 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed"><span className="text-white font-bold">Unified Support:</span> Your site managers have one point of contact, reducing downtime and stress.</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-1 bg-blue-500/20 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed"><span className="text-white font-bold">Strategic Failover:</span> Consistent backup strategies across all locations ensure operational continuity.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
                        <h4 className="text-xl font-bold mb-6">Need a Site Audit?</h4>
                        <p className="text-slate-400 text-sm mb-10 leading-relaxed">
                            Provide your list of site addresses and we will qualify each one for the best available business connectivity options.
                        </p>
                        <Button asChild className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-6">
                            <Link to="/contact">Run Site Audit</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <CTABanner
        title="Scaling to new locations?"
        subtitle="Let's build a connectivity model that supports your expansion. We handle the technical coordination so you can focus on opening doors."
        ctaLabel="Review My Sites"
        ctaHref="/contact"
      />
      <Footer />
    </div>
  );
}
