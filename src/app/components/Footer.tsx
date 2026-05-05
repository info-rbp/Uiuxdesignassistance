import { Link } from "react-router";
import { Briefcase, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const footerLinks = {
  "On-Demand": [
    { label: "Business Advisor", href: "/on-demand/business-advisor" },
    { label: "On-Demand Services", href: "/on-demand/services" },
    { label: "Document Centre", href: "/on-demand/documents" },
    { label: "Decision Desk", href: "/on-demand/decision-desk" },
  ],
  "Managed Services": [
    { label: "Bid Management", href: "/managed-services/bid-management" },
    { label: "Real Estate", href: "/managed-services/real-estate" },
    { label: "HR Services", href: "/managed-services/hr-services" },
  ],
  Platform: [
    { label: "Business Applications", href: "/applications" },
    { label: "Business Marketplace", href: "/marketplace" },
    { label: "Membership Hub", href: "/membership" },
    { label: "Resource Centre", href: "/resources" },
    { label: "Business Offers", href: "/offers" },
  ],
  Operations: [
    { label: "Operations Centre", href: "/operations" },
    { label: "Business Finance", href: "/operations/finance" },
    { label: "Business Insurance", href: "/operations/insurance" },
    { label: "Finance Calculators", href: "/operations/calculators" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Help Centre", href: "/help" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-black tracking-tight text-base leading-none block">Remote Business</span>
                <span className="text-blue-400 font-black tracking-tight text-base leading-none block">Partner</span>
              </div>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              An integrated business support ecosystem for small businesses, startups, and SMEs.
            </p>
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-5">
              Agile Authority in Consulting
            </p>
            <div className="flex items-center gap-2">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h5 className="font-bold text-white mb-4 text-xs uppercase tracking-wider">{heading}</h5>
              <ul className="space-y-2.5">
                {links.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="text-slate-400 hover:text-white text-xs transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="border-t border-slate-800 pt-8 mb-6">
          <div className="flex flex-wrap gap-6">
            <a href="mailto:info@remotebusinesspartner.com" className="flex items-center gap-2 text-slate-400 hover:text-white text-xs transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-400" /> info@remotebusinesspartner.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 text-slate-400 hover:text-white text-xs transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" /> +1 (234) 567-890
            </a>
            <span className="flex items-center gap-2 text-slate-400 text-xs">
              <MapPin className="w-3.5 h-3.5 text-blue-400" /> Remote — Operating Globally
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Remote Business Partner. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a key={l} href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}