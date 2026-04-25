import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { 
  Wifi, 
  Smartphone, 
  Phone, 
  ShieldCheck, 
  Monitor, 
  Cloud, 
  Database, 
  Globe, 
  ArrowRight,
  CheckCircle2,
  Users,
  Settings,
  Zap,
  Lock,
  RefreshCw,
  LayoutGrid
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { CTABanner } from "../components/CTABanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const solutions = [
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "Managed Connectivity",
    description: "Reliable business internet with selected wholesale partners and simplified account management.",
    link: "/managed-solutions/managed-connectivity",
    available: true
  },
  {
    icon: <Wifi className="w-8 h-8 text-blue-600" />,
    title: "Managed Wi-Fi",
    description: "Professional coverage planning and guest network options for offices and retail environments.",
    link: "/managed-solutions/managed-wifi",
    available: true
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    title: "4G/5G Backup",
    description: "Stay online with automatic cellular failover during fixed-line outages.",
    link: "/managed-solutions/managed-connectivity/backup-connectivity",
    available: true
  },
  {
    icon: <Phone className="w-8 h-8 text-blue-600" />,
    title: "Managed Voice",
    description: "Business VoIP and communication tools integrated into your network.",
    link: "#",
    available: false
  },
  {
    icon: <Cloud className="w-8 h-8 text-blue-600" />,
    title: "Microsoft 365 Management",
    description: "Expert setup, licensing, and ongoing management of your cloud productivity tools.",
    link: "#",
    available: false
  },
  {
    icon: <Database className="w-8 h-8 text-blue-600" />,
    title: "Backup & Recovery",
    description: "Protecting your business data with automated off-site backups and rapid recovery.",
    link: "#",
    available: false
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Cybersecurity Essentials",
    description: "Proactive security monitoring and essential protections for your business network.",
    link: "#",
    available: false
  },
  {
    icon: <Monitor className="w-8 h-8 text-blue-600" />,
    title: "Managed Devices",
    description: "Simplified device lifecycle management, from procurement to support and replacement.",
    link: "#",
    available: false
  },
  {
    icon: <LayoutGrid className="w-8 h-8 text-blue-600" />,
    title: "Multi-site Connectivity",
    description: "Coordinated connectivity and network management across all your locations.",
    link: "/managed-solutions/multi-site-connectivity",
    available: true
  }
];

const whyManaged = [
  {
    title: "One Accountable Partner",
    description: "No more finger-pointing between vendors. We take full responsibility for your technology outcomes.",
    icon: <Users className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Clear Monthly Pricing",
    description: "Predictable costs with simple subscriptions that bundle hardware, software, and support.",
    icon: <Zap className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Simplified Vendor Management",
    description: "We navigate the complex landscape of technology providers so you don't have to.",
    icon: <Settings className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Support Coordination",
    description: "A single support pathway for all your managed services, saving your team time and frustration.",
    icon: <RefreshCw className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Scalable Packages",
    description: "Solutions that grow with your business, from small startups to multi-site operators.",
    icon: <LayoutGrid className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Enterprise Technology for SMBs",
    description: "Access to robust, reliable technology previously only available to much larger organisations.",
    icon: <Lock className="w-5 h-5 text-blue-600" />
  }
];

export function ManagedSolutionsPage() {
  useEffect(() => {
    document.title = "Managed Solutions | Business Connectivity, Cloud & Technology Services";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Managed technology solutions for businesses, including connectivity, workplace technology, business continuity, and support coordination through one accountable partner.");
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <PageHero
        title="Managed Solutions for Business Connectivity"
        titleAccent="and Technology"
        subtitle="We package essential business technology into managed monthly solutions, giving your organisation one point of accountability for connectivity, cloud, security, support, and operational continuity."
        breadcrumb="Managed Solutions"
        ctaPrimary={{ label: "Book a Managed Solutions Consultation", href: "/contact" }}
        ctaSecondary={{ label: "Explore Managed Connectivity", href: "/managed-solutions/managed-connectivity" }}
        badge="Technology Outcomes"
      />

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Designed for Reliability and Accountability</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Managed Solutions are designed for businesses that want reliable technology outcomes without having to manage every provider, plan, device, and support process themselves. We bring together connectivity, workplace tools, business continuity, and support coordination into practical managed packages.
              </p>
              <div className="space-y-4">
                {[
                  "Single point of contact for support",
                  "Proactive monitoring and maintenance",
                  "Fixed monthly costs with no surprises",
                  "Vendor-agnostic solution design"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-blue-100 p-1 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-blue-50 rounded-3xl overflow-hidden shadow-inner border border-blue-100 flex items-center justify-center p-12">
                <div className="grid grid-cols-3 gap-6 w-full">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-100 animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <p className="text-sm font-medium opacity-80 mb-2">Focus on your business</p>
                <p className="text-xl font-bold italic">"We manage the technology, you manage the growth."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Category Cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-none px-4 py-1">Solution Portfolio</Badge>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Managed Solutions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our range of managed services designed to simplify your technology stack and drive operational continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-200">
                <CardHeader>
                  <div className="mb-4 p-3 bg-blue-50 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{solution.title}</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed pt-2">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {solution.available ? (
                    <Link 
                      to={solution.link} 
                      className="inline-flex items-center text-blue-700 font-bold hover:gap-2 transition-all mt-2"
                    >
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center text-slate-400 text-sm font-medium mt-2 italic">
                      Coming soon
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Managed Solutions */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1">
              <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30 px-4 py-1">The Advantage</Badge>
              <h2 className="text-4xl font-bold mb-6">Why Choose Managed Solutions?</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Eliminate the complexity of coordinating multiple vendors and technical requirements. We provide a single point of accountability for your entire business technology ecosystem.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span className="text-slate-300">Reduced operational overhead</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span className="text-slate-300">Enterprise-grade support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span className="text-slate-300">Scalable as you grow</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {whyManaged.map((item, i) => (
                <div key={i} className="group">
                  <div className="mb-4 p-2 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Solution Highlight */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop" 
                  alt="Business Connectivity" 
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-blue-100 text-blue-700">Featured Solution</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Managed Connectivity</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our Managed Connectivity solution packages business internet, onboarding, service coordination, and optional continuity features into a managed monthly service. Connectivity is delivered through selected wholesale network partners, allowing us to provide competitive plans while maintaining a single point of accountability for the customer.
              </p>
              <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 rounded-xl font-bold h-auto text-lg shadow-lg shadow-blue-200">
                <Link to="/managed-solutions/managed-connectivity">
                  View Managed Connectivity <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Future-ready section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-12">Expanding Your Solution Portfolio</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-400 uppercase tracking-widest">
            <span>Workplace Technology</span>
            <span className="text-slate-300">•</span>
            <span>Cloud Productivity</span>
            <span className="text-slate-300">•</span>
            <span>Network Security</span>
            <span className="text-slate-300">•</span>
            <span>Device Lifecycle Management</span>
            <span className="text-slate-300">•</span>
            <span>Property Connectivity</span>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready for a Simpler Approach?"
        subtitle="Schedule a consultation with our Managed Solutions team to review your current setup and explore how we can consolidate your technology stack."
        ctaLabel="Book Consultation"
        ctaHref="/contact"
      />
      <Footer />
    </div>
  );
}
