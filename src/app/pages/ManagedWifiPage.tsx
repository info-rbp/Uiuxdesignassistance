import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { 
  Wifi, 
  Layout, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone,
  Network,
  Lock,
  Building2,
  Store,
  Map,
  Settings
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const features = [
  {
    title: "Office Wi-Fi",
    description: "Secure, high-speed wireless for your internal team across all areas of your workspace.",
    icon: <Building2 className="w-8 h-8 text-blue-600" />
  },
  {
     title: "Guest Wi-Fi",
     description: "Branded splash pages and isolated access for visitors, keeping your internal network safe.",
     icon: <Layout className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Retail & Hospitality",
    description: "Robust coverage for POS terminals and high-density customer connectivity.",
    icon: <Store className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Property & Tenant Wi-Fi",
    description: "Managed solutions for landlords providing shared or individual connectivity for tenants.",
    icon: <Map className="w-8 h-8 text-blue-600" />
  }
];

export function ManagedWifiPage() {
  useEffect(() => {
    document.title = "Managed Wi-Fi | Business Wireless Network Solutions";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Managed Wi-Fi solutions for offices, retail, hospitality, and property environments. Professional coverage planning and support coordination.");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        title="Managed Wi-Fi"
        titleAccent="for Reliable Business Coverage"
        subtitle="Professional Wi-Fi setup, coverage planning, guest network options, and support coordination for business environments."
        breadcrumb="Managed Wi-Fi"
        ctaPrimary={{ label: "Plan My Wi-Fi Setup", href: "/contact" }}
        badge="Superior Coverage"
        image="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop"
      />

      {/* Why Managed Wi-Fi */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-inner border border-slate-200 p-8 flex items-center justify-center">
                        <Wifi className="w-32 h-32 text-blue-200 animate-pulse" />
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Monitoring</span>
                        </div>
                        <p className="text-sm text-slate-900 font-bold">100% Coverage Guaranteed</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Wi-Fi That Just Works</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Poor Wi-Fi is more than a frustration—it's a productivity killer. Our Managed Wi-Fi solutions take the guesswork out of wireless coverage. We handle the site planning, hardware installation, and ongoing performance monitoring so your team and guests stay connected seamlessly.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1" />
                            <span className="text-slate-700 font-medium">Predictive coverage mapping</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1" />
                            <span className="text-slate-700 font-medium">Auto-optimising channels</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1" />
                            <span className="text-slate-700 font-medium">Secure VLAN segmentation</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1" />
                            <span className="text-slate-700 font-medium">24/7 endpoint monitoring</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900">Coverage for Every Space</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((item, i) => (
                    <Card key={i} className="hover:-translate-y-1 transition-all duration-300 border-none shadow-sm">
                        <CardHeader className="text-center pt-10">
                            <div className="mx-auto mb-6 p-4 bg-blue-50 rounded-2xl w-fit">
                                {item.icon}
                            </div>
                            <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center pb-10">
                            <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Hardware & Security */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <Badge className="mb-6 bg-blue-100 text-blue-700">Technology Focus</Badge>
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Hardware & Security</h2>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        We use enterprise-grade access points and security standards to ensure your network is fast, secure, and ready for future technology demands.
                    </p>
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="p-3 bg-slate-50 rounded-xl h-fit">
                                <Network className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Access Point Selection</h4>
                                <p className="text-slate-600 text-sm">We specify range-appropriate hardware based on your space and user density.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-3 bg-slate-50 rounded-xl h-fit">
                                <Lock className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Network Segmentation</h4>
                                <p className="text-slate-600 text-sm">Keep your office devices, guest traffic, and IoT devices on separate, secure paths.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-3 bg-slate-50 rounded-xl h-fit">
                                <Settings className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Ongoing Coordination</h4>
                                <p className="text-slate-600 text-sm">We handle firmware updates, security patches, and network performance tuning.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="bg-slate-50 rounded-3xl p-8 flex flex-col justify-between items-center text-center">
                        <Smartphone className="w-8 h-8 text-blue-400 mb-4" />
                        <h5 className="font-bold text-slate-900">Mobile Ready</h5>
                        <p className="text-xs text-slate-500 mt-2">Optimised for smartphones and tablets.</p>
                    </div>
                    <div className="bg-blue-700 rounded-3xl p-8 flex flex-col justify-between items-center text-center text-white">
                        <ShieldCheck className="w-8 h-8 text-blue-200 mb-4" />
                        <h5 className="font-bold">Enterprise Security</h5>
                        <p className="text-xs text-blue-200 mt-2">WPA3 support and secure authentication.</p>
                    </div>
                    <div className="bg-slate-900 rounded-3xl p-8 col-span-2 text-center text-white">
                        <p className="text-sm font-medium opacity-70 mb-4">Professional Coverage Planning</p>
                        <h4 className="text-xl font-bold mb-6">Need more than just a Wi-Fi router?</h4>
                        <Button asChild className="bg-blue-600 hover:bg-blue-700 font-bold px-8">
                            <Link to="/contact">Get a Wi-Fi Audit</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 mb-6">Reliable Wi-Fi starts with a professional internet connection at the site.</p>
          <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
            <Link to="/managed-solutions/managed-connectivity/internet-plans">Explore Managed Internet Plans</Link>
          </Button>
        </div>
      </section>

      <CTABanner
        title="Struggling with Wi-Fi dead zones?"
        subtitle="Our team can perform a professional coverage review and design a managed wireless solution that eliminates connectivity issues for good."
        ctaLabel="Plan My Wi-Fi Setup"
        ctaHref="/contact"
      />
      <Footer />
    </div>
  );
}
