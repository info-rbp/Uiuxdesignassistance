import { Link } from "react-router";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CTABanner } from "../../components/CTABanner";
import { PageHero } from "../../components/PageHero";
import { Wifi, ArrowRight, CheckCircle, Zap, Phone, Building } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1591522810896-cb5f45acb9a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZ1bmRpbmclMjBncmFudCUyMG1vbmV5JTIwY3JlZGl0JTIwc3RhcnR1cHxlbnwxfHx8fDE3NzY5NTIyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080";

const plans = [
  { icon: Zap, title: "Business Broadband", desc: "Fast, reliable broadband for your business premises — with business-grade uptime and support.", features: ["Speeds up to 1Gbps", "Business SLA", "Dedicated support", "Static IP available"], price: "From £29/mo" },
  { icon: Phone, title: "Business Phone Lines", desc: "Business phone lines with modern VoIP and traditional line options.", features: ["Hosted VoIP", "Number porting", "Auto-attendant", "Call recording"], price: "From £15/mo" },
  { icon: Building, title: "Connectivity Packages", desc: "Combined connectivity packages for offices, co-working spaces, and multi-site businesses.", features: ["Broadband + phone bundle", "Multi-site options", "Account management", "SLA guarantee"], price: "From £49/mo" },
];

export function SuperloopPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PageHero
        title="Business Connectivity"
        titleAccent="Powered by Superloop"
        subtitle="White-labelled telecommunications and connectivity solutions for small businesses — broadband, phone lines, and connectivity packages."
        badge="Operations Center"
        breadcrumb="Superloop Connectivity"
        image={heroImage}
        bullets={["Business-grade broadband", "VoIP phone lines", "Bundled packages"]}
        ctaPrimary={{ label: "Get a Connectivity Quote", href: "/contact" }}
        ctaSecondary={{ label: "Back to Operations", href: "/operations" }}
        stat={{ value: "99.9%", label: "Uptime SLA", sublabel: "Business grade" }}
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Connectivity solutions for your business</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Business-grade connectivity — set up and supported through Remote Business Partner.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div key={plan.title} className="bg-white border-2 border-amber-200 rounded-2xl p-7 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{plan.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{plan.desc}</p>
                  <ul className="space-y-2 mb-5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xl font-extrabold text-slate-900 mb-4">{plan.price}</div>
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-amber-200 transition-all">
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTABanner />
      <Footer />
    </div>
  );
}
