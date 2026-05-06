
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, Briefcase, ChevronDown, Search, LogIn, UserPlus, ArrowRight,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface MegaLink    { label: string; href: string; desc?: string; }
interface MegaSection { heading: string; links: MegaLink[]; }
interface MegaConfig  {
  key: string;
  label: string;
  overview?: MegaLink;
  sections: MegaSection[];
  cta: { text: string; btnLabel: string; href: string; };
}

// ── Mega menu data ────────────────────────────────────────────────────────────

const MENUS: MegaConfig[] = [
  {
    key: "about",
    label: "About",
    overview: { label: "About Us", href: "/about" },
    sections: [
      {
        heading: "About",
        links: [
          { label: "What We Do", href: "/about/what-we-do", desc: "Our purpose, mission, and operating model" },
          { label: "Our Process", href: "/about/our-process", desc: "How we deliver services and support" },
          { label: "Work With Us", href: "/about/work-with-us", desc: "Join our team or partner with us" },
        ],
      },
      {
        heading: "Contact",
        links: [
          { label: "Contact Us", href: "/contact", desc: "General inquiries" },
          { label: "Book a Discovery Call", href: "/contact?reason=discovery-call", desc: "Free, no-obligation chat" },
        ],
      },
    ],
    cta: {
      text: "Want to talk through your business needs?",
      btnLabel: "Book a Discovery Call",
      href: "/contact?reason=discovery-call",
    },
  },
  {
    key: "ondemand",
    label: "On-Demand",
    overview: { label: "On-Demand Overview", href: "/on-demand" },
    sections: [
      {
        heading: "Core Services",
        links: [
          { label: "Business Advisor", href: "/on-demand/business-advisor", desc: "Strategic guidance for business owners" },
          { label: "Decision Desk", href: "/on-demand/decision-desk", desc: "Submit an issue, get written guidance" },
          { label: "The Fixer", href: "/on-demand/the-fixer", desc: "One specific problem. Fully resolved." },
          { label: "Risk Advisor", href: "/on-demand/risk-advisor", desc: "Identify and mitigate business risks" },
        ],
      },
      {
        heading: "Specialised Services",
        links: [
          { label: "Operations Advisory", href: "/services?service=operations-advisory" },
          { label: "HR Advisory", href: "/services?service=hr-advisory" },
          { label: "Management Consulting", href: "/services?service=management-consulting" },
          { label: "Change Management", href: "/services?service=change-management" },
          { label: "AI Implementation", href: "/services?service=ai-implementation" },
          { label: "Admin & Finance", href: "/services?service=admin-finance-consulting" },
          { label: "Custom Solutions", href: "/services?service=custom-solutions" },
        ],
      },
      {
        heading: "Document Nucleus",
        links: [
          { label: "Overview", href: "/document-nucleus/overview" },
          { label: "Templates", href: "/document-nucleus/category/templates" },
          { label: "Documentation Suites", href: "/document-nucleus/category/documentation-suites" },
          { label: "Toolkits", href: "/document-nucleus/category/toolkits" },
          { label: "Process", href: "/document-nucleus/category/process" },
        ],
      },
    ],
    cta: {
      text: "Need help choosing the right service?",
      btnLabel: "Book a Discovery Call",
      href: "/contact?reason=discovery-call",
    },
  },
  {
    key: "managed",
    label: "Managed Services",
    overview: { label: "Managed Services Overview", href: "/managed-services" },
    sections: [
      {
        heading: "Core Offerings",
        links: [
          { label: "Bid Management", href: "/managed-services/bid-management", desc: "Tender, bid & proposal management" },
          { label: "Real Estate", href: "/managed-services/real-estate", desc: "Property operations & admin support" },
          { label: "HR Services", href: "/managed-services/hr-services", desc: "People operations & HR admin support" },
        ],
      },
      {
        heading: "Additional Services",
        links: [
          { label: "Document Management", href: "/services?service=document-management-as-a-service" },
          { label: "Business Sale Support", href: "/services?service=business-sale-support" },
          { label: "Custom Solutions", href: "/services?service=custom-managed-service" },
          { label: "Engagement Process", href: "/about/our-process" },
        ],
      },
    ],
    cta: {
      text: "Need ongoing business support?",
      btnLabel: "Explore Managed Services",
      href: "/managed-services",
    },
  },
  {
    key: "operations",
    label: "Operations",
    overview: { label: "Operations Overview", href: "/operations" },
    sections: [
      {
        heading: "Finance & Insurance",
        links: [
          { label: "Finance Hub", href: "/operations/finance", desc: "Finance education & referral pathways" },
          { label: "Insurance Hub", href: "/operations/insurance", desc: "Insurance guidance & referrals" },
          { label: "Calculators", href: "/operations/calculators", desc: "Cash flow & funding readiness tools" },
        ],
      },
      {
        heading: "Connectivity",
        links: [
          { label: "Connectivity", href: "/operations/connectivity", desc: "Business-grade internet and phone" },
          { label: "NBN & Phone", href: "/operations/nbn-and-phone", desc: "NBN plans and VoIP services" },
          { label: "Coming Soon", href: "/operations/coming-soon", desc: "Explore our upcoming offerings" },
        ],
      },
    ],
    cta: {
      text: "Build stronger business foundations.",
      btnLabel: "Explore Operations",
      href: "/operations",
    },
  },
  {
    key: "membership",
    label: "Membership",
    overview: { label: "Membership Overview", href: "/membership/overview" },
    sections: [
      {
        heading: "Membership",
        links: [
          { label: "Overview", href: "/membership/overview", desc: "Benefits and features" },
          { label: "Remote Business Partner", href: "/membership/remote-business-partner", desc: "Our premium membership" },
          { label: "Inclusions", href: "/membership/inclusions", desc: "What\'s included in each tier" },
          { label: "Pricing", href: "/membership/pricing", desc: "Membership tiers and pricing" },
          { label: "Usage", href: "/membership/usage", desc: "How to use your membership" },
          { label: "Payment Terms", href: "/membership/payment-terms", desc: "Payment options and terms" },
        ],
      },
      {
        heading: "Join",
        links: [
          { label: "Sign Up Now", href: "/membership/sign-up", desc: "Become a member today" },
        ],
      },
    ],
    cta: {
      text: "Ready to unlock exclusive benefits?",
      btnLabel: "Sign Up Now",
      href: "/membership/sign-up",
    },
  },
];

// ── Mega menu panel (desktop) ─────────────────────────────────────────────────

function MegaMenuPanel({ config, onClose }: { config: MegaConfig; onClose: () => void }) {
  const cols = Math.min(config.sections.length, 3);

  return (
    <div className="absolute top-full left-0 right-0 z-50">
      {/* Panel */}
      <div className="bg-white border-b border-slate-200 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-7">
          <div className="flex gap-8">

            {/* Left sidebar */}
            <div className="w-52 flex-shrink-0 space-y-1">
              {config.overview && (
                <Link
                  to={config.overview.href}
                  onClick={onClose}
                  className="flex items-center justify-between w-full px-4 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-sm font-bold transition-colors mb-3 group"
                >
                  {config.overview.label}
                  <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              )}

              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest px-1 pt-1 pb-1">
                {config.label}
              </p>
              {config.sections.map((s) => (
                <div key={s.heading} className="px-3 py-1.5 text-xs font-semibold text-slate-500 rounded-lg">
                  {s.heading}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px bg-slate-100 flex-shrink-0 self-stretch" />

            {/* Right — sections grid */}
            <div
              className="flex-1 grid gap-x-8 gap-y-6"
              style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
            >
              {config.sections.map((section) => (
                <div key={section.heading}>
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3 px-1">
                    {section.heading}
                  </p>
                  <div className="space-y-0.5">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={onClose}
                        className="block px-2 py-2 rounded-lg hover:bg-slate-50 group transition-colors"
                      >
                        <span className="block text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors leading-snug">
                          {link.label}
                        </span>
                        {link.desc && (
                          <span className="block text-xs text-slate-400 leading-snug mt-0.5">{link.desc}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}\
            </div>
          </div>

          {/* CTA strip */}
          <div className="mt-7 pt-5 border-t border-slate-100 flex items-center justify-between gap-6">
            <p className="text-sm text-slate-600">{config.cta.text}</p>
            <Link
              to={config.cta.href}
              onClick={onClose}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all"
            >
              {config.cta.btnLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      {/* Click-outside overlay */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />
    </div>
  );
}

// ── Mobile section accordion ──────────────────────────────────────────────────

function MobileSection({
  config, isOpen, onToggle, onClose,
}: {
  config: MegaConfig; isOpen: boolean; onToggle: () => void; onClose: () => void;
}) {
  const allLinks = config.sections.flatMap((s) => s.links);
  const overviewLink = config.overview;

  return (
    <div className="border-t border-slate-100">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
      >
        {config.label}
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="bg-slate-50 pb-2">
          {overviewLink && (
            <Link
              to={overviewLink.href}
              onClick={onClose}
              className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-50 transition-colors"
            >
              {overviewLink.label}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
          {config.sections.map((section) => (
            <div key={section.heading}>
              <p className="px-6 pt-3 pb-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                {section.heading}
              </p>
              {section.links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={onClose}
                  className="block px-6 py-2 text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}\
            </div>
          ))}
          {/* CTA */}
          <div className="mx-5 mt-3 p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between gap-3">
            <p className="text-xs text-slate-500 leading-snug">{config.cta.text}</p>
            <Link
              to={config.cta.href}
              onClick={onClose}
              className="flex-shrink-0 text-xs font-bold text-blue-700 hover:underline"
            >
              {config.cta.btnLabel}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────

export function Navbar() {
  const [mobileOpen,          setMobileOpen]          = useState(false);
  const [openDropdown,        setOpenDropdown]        = useState<string | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  const [scrolled,            setScrolled]            = useState(false);
  const [searchOpen,          setSearchOpen]          = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const activeMenu = MENUS.find((m) => m.key === openDropdown) ?? null;

  function toggleDropdown(key: string) {
    setOpenDropdown((prev) => (prev === key ? null : key));
  }

  function closeMobile() {
    setMobileOpen(false);
    setOpenMobileAccordion(null);
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${\n        scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-white"\n      }`}
    >
      {/* ── Tier 1: Utility bar ── */}
      <div className="border-b border-slate-100 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-6 h-6 bg-blue-700 rounded-md flex items-center justify-center">
                <Briefcase className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="hidden sm:block text-sm font-black text-slate-800 tracking-tight">
                Remote Business Partner
              </span>
              <span className="sm:hidden text-sm font-black text-slate-800">RBP</span>
            </Link>

            {/* Utility right */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Search"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
              <Link
                to="/sign-in"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-white transition-all ml-1"
              >
                <LogIn className="w-3 h-3" /> Sign In
              </Link>
              <Link
                to="/membership/sign-up"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 px-3 py-1.5 rounded-lg transition-all ml-1"
              >
                <UserPlus className="w-3 h-3" /> Join Now
              </Link>
              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors ml-1"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}\
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Search bar (expandable) ── */}
      {searchOpen && (
        <div className="border-b border-slate-100 bg-white px-4 sm:px-6 lg:px-8 py-2">
          <div className="max-w-2xl mx-auto flex items-center gap-3">
            <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <input
              autoFocus
              type="text"
              placeholder="Search services, applications, resources…"\
              className="flex-1 text-sm text-slate-800 placeholder-slate-400 outline-none bg-transparent"
            />
            <button onClick={() => setSearchOpen(false)} className="text-slate-400 hover:text-slate-700">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── Tier 2: Main nav (desktop) ── */}
      <div className="hidden lg:block bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-0.5 h-12">

            {/* Mega menu triggers */}
            {MENUS.map((menu) => {
              const isOpen   = openDropdown === menu.key;
              const isActive = location.pathname.startsWith(`/${menu.key}`);

              return (
                <button
                  key={menu.key}
                  onClick={() => toggleDropdown(menu.key)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${\n                    isActive || isOpen\n                      ? "bg-blue-50 text-blue-700"\n                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"\n                  }`}\
                >
                  {menu.label}
                  <ChevronDown className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mega menu panel */}
        {activeMenu && (
          <MegaMenuPanel
            config={activeMenu}
            onClose={() => setOpenDropdown(null)}
          />
        )}
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl max-h-[85vh] overflow-y-auto">

          {/* Home */}
          <Link
            to="/"
            onClick={closeMobile}
            className={`flex items-center px-5 py-3.5 text-sm font-semibold transition-colors border-b border-slate-100 ${\n              location.pathname === "/" ? "text-blue-700 bg-blue-50" : "text-slate-700 hover:bg-slate-50"\n            }`}\
          >
            Home
          </Link>

          {/* All mega menus as accordions */}
          {MENUS.map((menu) => (
            <MobileSection
              key={menu.key}
              config={menu}
              isOpen={openMobileAccordion === menu.key}
              onToggle={() => setOpenMobileAccordion((prev) => (prev === menu.key ? null : menu.key))}
              onClose={closeMobile}
            />
          ))}

          {/* Mobile utility actions */}
          <div className="border-t border-slate-100 px-4 py-4 space-y-2">
            <Link
              to="/sign-in"
              onClick={closeMobile}
              className="flex items-center justify-center gap-2 py-3 text-sm font-semibold border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <LogIn className="w-4 h-4" /> Sign In
            </Link>
            <Link
              to="/membership/sign-up"
              onClick={closeMobile}
              className="flex items-center justify-center gap-2 py-3 text-sm font-bold bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors"
            >
              <UserPlus className="w-4 h-4" /> Join Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
