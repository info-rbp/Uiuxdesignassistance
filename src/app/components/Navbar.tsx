import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Briefcase } from "lucide-react";

const topLinks = [
  { label: "Sign In", href: "/login" },
];

const secondaryLinks = [
  { label: "Services Hub", href: "/services" },
  { label: "Managed Solutions", href: "/managed-solutions" },
  { label: "Document Nucleus", href: "/docushare" },
  { label: "Application Launchpad", href: "/applications" },
  { label: "Partner Offers", href: "/offers" },
  { label: "Finance Center", href: "/finance" },
  { label: "Resource Base", href: "/resources" },
  { label: "Membership Central", href: "/membership" },
  { label: "Business Advisor", href: "/business-advisor" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md"
          : "bg-white"
      }`}
    >
      {/* ── Tier 1: Brand + top-level links ── */}
      <div className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-slate-900 font-black tracking-tight text-lg leading-none">
                  Remote Business
                </span>
                <span className="block text-blue-700 font-black tracking-tight text-lg leading-none">
                  Partner
                </span>
              </div>
              <span className="sm:hidden text-slate-900 font-black tracking-tight text-base">
                RBP
              </span>
            </Link>

            {/* Desktop: Tier-1 right side */}
            <div className="hidden lg:flex items-center gap-2">
              {topLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all ${
                    location.pathname === link.href
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/signup"
                className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md ml-1"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Tier 2: Secondary nav (desktop only) ── */}
      <div className="hidden lg:block bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-4 h-16">
            {secondaryLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-150 text-center leading-tight ${
                  location.pathname === link.href
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.label.split(" ").map((word) => (
                  <span key={word} className="block">{word}</span>
                ))}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-4 space-y-1 shadow-lg">
          <p className="px-5 text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Our Services
          </p>
          {secondaryLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`flex items-center px-5 py-3 text-sm font-semibold transition-all ${
                location.pathname === link.href
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 mt-3 flex flex-col gap-2 px-4">
            <Link
              to="/login"
              className={`py-3 rounded-xl text-sm font-semibold text-center transition-all ${
                location.pathname === "/login"
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold px-5 py-3 rounded-xl transition-all text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
