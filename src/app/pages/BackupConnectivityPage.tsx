import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  AlertCircle,
  Router,
  History,
  Activity,
  Signal
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const useCases = [
  {
    title: "Retail & POS Continuity",
    description: "Ensure credit card processing and point-of-sale systems never go offline during busy periods.",
    icon: <Zap className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Professional Services",
    description: "Maintain access to cloud-based CRM, email, and communication tools for your entire team.",
    icon: <Activity className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Healthcare & Clinics",
    description: "Critical access to patient records and booking systems remains active even if the main line fails.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Remote & Hybrid Teams",
    description: "Protect your primary office connectivity to ensure staff can always collaborate effectively.",
    icon: <Signal className="w-6 h-6 text-blue-600" />
  }
];

export function BackupConnectivityPage() {
  useEffect(() => {
    document.title = "Backup Connectivity | Managed Business Continuity";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Managed 4G/5G backup connectivity options to help businesses stay online during fixed-line outages.");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        title="Backup Connectivity"
        titleAccent="for Business Continuity"
        subtitle="Keep your business online with managed 4G/5G failover options designed to reduce downtime and disruption."
        breadcrumb="Backup Connectivity"
        ctaPrimary={{ label: "Discuss Backup Connectivity", href: "/contact" }}
        badge="Zero Downtime"
        image="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop"
        stat={{ value: "4G/5G", label: "Automatic Failover", sublabel: "Instant Continuity" }}
      />

      {/* Why it matters */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100 border-none">Business Continuity</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Backup Connectivity Matters</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                In a digital-first economy, an internet outage is more than an inconvenience—it's a loss of revenue, productivity, and customer trust. Managed Backup Connectivity provides an automated safety net that kicks in the moment your primary connection fails.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl h-fit">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Protect Revenue</h4>
                    <p className="text-slate-600 text-sm">Keep your payment gateways and online ordering systems active 24/7.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl h-fit">
                    <History className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Maintain Productivity</h4>
                    <p className="text-slate-600 text-sm">Stop staff from sitting idle when the main internet line goes down.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl h-fit">
                    <AlertCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Reduce Risk</h4>
                    <p className="text-slate-600 text-sm">Automated failover means no manual intervention is required during a crisis.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-12 border border-slate-100">
                <div className="relative">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                            <span className="font-bold text-slate-900">Primary Line Status</span>
                        </div>
                        <Badge className="bg-green-100 text-green-700 border-green-200">ACTIVE</Badge>
                    </div>
                    <div className="w-full h-1 bg-slate-200 relative mb-8">
                         <div className="absolute top-0 left-0 h-full w-full bg-green-500" />
                    </div>
                    <div className="flex items-center justify-between mb-8 opacity-40">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-400 rounded-full flex items-center justify-center text-white font-bold">2</div>
                            <span className="font-bold text-slate-900">4G/5G Backup Status</span>
                        </div>
                        <Badge variant="outline" className="text-slate-400 border-slate-200">STANDBY</Badge>
                    </div>
                    
                    <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                        <h4 className="font-extrabold text-slate-900 mb-2">How Failover Works</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Our managed router continuously monitors your primary connection. If performance drops below a threshold or connectivity is lost, it automatically routes traffic through the 4G/5G network within seconds.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suitable Use Cases */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Critical Continuity for Every Sector</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="mb-4">{useCase.icon}</div>
                  <CardTitle className="text-lg font-bold">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Inclusions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                    <Router className="w-10 h-10 text-blue-600 mb-6" />
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Optional Managed Router</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Take the complexity out of hardware selection. We provide and manage the router, ensuring it is correctly configured for automatic cellular failover.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600" /> Pre-configured for your site
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600" /> Firmware updates managed
                        </li>
                    </ul>
                </div>
                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                    <Activity className="w-10 h-10 text-blue-600 mb-6" />
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Monitoring & Usage Alerts</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Stay informed when your backup kicks in. We provide usage monitoring and alerts so you know exactly when your failover is in use and how much data it's consuming.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600" /> Email/SMS alerts on failover
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600" /> Real-time data tracking
                        </li>
                    </ul>
                </div>
                <div className="p-8 bg-blue-900 rounded-3xl text-white shadow-xl flex flex-col justify-between">
                    <div>
                        <Signal className="w-10 h-10 text-blue-400 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Ready to bulletproof your network?</h3>
                        <p className="text-blue-100/70 leading-relaxed text-sm">
                            Don't wait for your next outage to realize how critical a backup line is. Get a quote for a managed failover solution today.
                        </p>
                    </div>
                    <Button asChild className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-6 mt-8">
                        <Link to="/contact">Get Backup Quote</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 mb-6">Backup connectivity is most effective when paired with a reliable primary connection.</p>
          <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
            <Link to="/managed-solutions/managed-connectivity/internet-plans">Explore Managed Internet Plans</Link>
          </Button>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30">Next Steps</Badge>
          <h2 className="text-3xl font-bold text-white mb-6">Discuss Backup Connectivity</h2>
          <p className="text-slate-400 text-lg mb-10">
            Every business has different continuity requirements. Let's discuss your application critical-path and design a failover strategy that works for you.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 h-auto text-lg font-bold rounded-xl shadow-xl shadow-blue-500/10">
            <Link to="/contact">Discuss Backup Options <ArrowRight className="w-5 h-5 ml-2" /></Link>
          </Button>
        </div>
      </section>
      <CTABanner
        title="Don't let an outage stop your business"
        subtitle="Speak with our team about integrating 4G or 5G backup into your managed connectivity solution."
        ctaLabel="Enquire About Backup"
        ctaHref="/contact"
      />
      <Footer />
    </div>
  );
}
