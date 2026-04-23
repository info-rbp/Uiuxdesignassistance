import { Link } from "react-router";
import { Briefcase, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-black tracking-tight text-lg leading-none block">
                  Remote Business Partner
                </span>
                <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase">
                  Agile Authority in Consulting
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering high-growth small businesses with the structural integrity of top-tier consultancy and the kinetic energy of modern fintech.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Services</h5>
            <ul className="space-y-2.5">
              {[
                { label: "Advisory Services", href: "/services" },
                { label: "DocuShare", href: "/docushare" },
                { label: "Applications", href: "/applications" },
                { label: "Offers", href: "/offers" },
                { label: "Finance", href: "/finance" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h5>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Resources", href: "/resources" },
                { label: "Contact Us", href: "/contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact</h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@remotebusinesspartner.com"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  info@remotebusinesspartner.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  Remote — Operating Globally
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Remote Business Partner. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Terms</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
