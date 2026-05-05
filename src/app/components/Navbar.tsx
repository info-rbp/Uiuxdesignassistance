import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
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
    key: "ondemand", label: "On-Demand Services",
    overview: { label: "On-Demand Overview", href: "/on-demand" },
    sections: [
      {
        heading: "Core Services",
        links: [
          { label: "Business Advisor",      href: "/on-demand/business-advisor",  desc: "Strategic guidance for business owners" },
          { label: "Decision Desk",          href: "/on-demand/decision-desk",     desc: "Submit an issue, get written guidance" },
          { label: "The Fixer",             href: "/on-demand/the-fixer",         desc: "One specific problem. Fully resolved." },
        ],
      },
      {
        heading: "Document Nucleus",
        links: [
          { label: "Document Nucleus Overview",  href: "/document-nucleus/overview" },
          { label: "Templates",                  href: "/document-nucleus/category/templates" },
          { label: "Documentation Suites",       href: "/document-nucleus/category/documentation-suites" },
          { label: "Toolkits",                   href: "/document-nucleus/category/toolkits" },
          { label: "Process",                    href: "/document-nucleus/category/process" },
        ],
      },
      {
        heading: "On-Demand Services",
        links: [
          { label: "Operations Advisory",       href: "/on-demand/services#operations-advisory" },
          { label: "Human Resource Advisory",   href: "/on-demand/services#human-resource-advisory" },
          { label: "Management Consulting",     href: "/on-demand/services#management-consulting" },
          { label: "Change Management",         href: "/on-demand/services#change-management" },
          { label: "AI Implementation",         href: "/on-demand/services#ai-implementation" },
          { label: "Admin & Finance Consulting",href: "/on-demand/services#admin-finance-consulting" },
          { label: "Customised Solutions",      href: "/on-demand/services#customised-solutions" },
        ],
      },
    ],
    cta: { text: "Need help choosing the right service?", btnLabel: "Book a Discovery Call", href: "/contact?reason=discovery-call" },
  },
  {
    key: "managed", label: "Managed Services",
    overview: { label: "Our Managed Services", href: "/managed-services" },
    sections: [
      {
        heading: "Service Areas",
        links: [
          { label: "Bid Management",       href: "/managed-services/bid-management",     desc: "Tender, bid & proposal management" },
          { label: "Real Estate",          href: "/managed-services/real-estate",         desc: "Property operations & admin support" },
          { label: "HR Services",          href: "/managed-services/hr-services",         desc: "People operations & HR admin support" },
          { label: "Document Management",  href: "/managed-services/document-management" },
          { label: "Business Sale Support",href: "/managed-services/business-sale-support" },
          { label: "Custom Solutions",     href: "/managed-services/custom-solutions" },
          { label: "Engagement Process",   href: "/managed-services/engagement-process" },
        ],
      },
    ],
    cta: { text: "Need ongoing business support?", btnLabel: "View Managed Services", href: "/managed-services" },
  },
  {
    key: "applications", label: "Applications",
    overview: { label: "Applications Overview", href: "/applications" },
    sections: [
      {
        heading: "Application Categories",
        links: [
          { label: "Operations and Finance", href: "/applications#operations-finance" },
          { label: "People and HR",          href: "/applications#people-hr" },
          { label: "Sales and CRM",          href: "/applications#sales-crm" },
          { label: "Documents",              href: "/applications#documents" },
          { label: "Support Desk",           href: "/applications#support-desk" },
          { label: "Learning",               href: "/applications#learning" },
          { label: "Analytics",              href: "/applications#analytics" },
          { label: "Payments and Billing",   href: "/applications#payments-billing" },
        ],
      },
    ],
    cta: { text: "Want an application configured for your business?", btnLabel: "Request App Setup", href: "/contact?reason=application-setup" },
  },
  {
    key: "operations", label: "Operations",
    overview: { label: "Operations Overview", href: "/operations" },
    sections: [
      {
        heading: "Business Operations",
        links: [
          { label: "Business Finance",        href: "/operations/finance",     desc: "Finance education & referral pathways" },
          { label: "Business Insurance",      href: "/operations/insurance",   desc: "Insurance guidance & referrals" },
          { label: "Superloop Connectivity",  href: "/operations/superloop",   desc: "White-labelled telecoms & connectivity" },
          { label: "Calculators",             href: "/operations/calculators", desc: "Cash flow & funding readiness tools" },
        ],
      },
    ],
    cta: { text: "Build stronger business foundations.", btnLabel: "Explore Operations", href: "/operations" },
  },
  {
    key: "marketplace", label: "Marketplace",
    overview: { label: "Marketplace Overview", href: "/marketplace" },
    sections: [
      {
        heading: "Marketplace",
        links: [
          { label: "Marketplace",    href: "/marketplace" },
          { label: "Buying Process", href: "/marketplace#buying-process" },
          { label: "List With Us",   href: "/marketplace#list-with-us" },
        ],
      },
    ],
    cta: { text: "Want to list your product or service?", btnLabel: "List With Us", href: "/marketplace#list-with-us" },
  },
  {
    key: "membership", label: "Membership",
    overview: { label: "Membership Overview", href: "/membership" },
    sections: [
      {
        heading: "Membership Options",
        links: [
          { label: "Basic Membership",    href: "/membership#basic" },
          { label: "Standard Membership", href: "/membership#standard" },
          { label: "Premium Membership",  href: "/membership#premium" },
          { label: "Sign Up Today",       href: "/sign-in" },
        ],
      },
    ],
    cta: { text: "Ready to become a member?", btnLabel: "Sign Up Today", href: "/sign-in" },
  },
  {
    key: "offers", label: "Offers",
    overview: { label: "Offers Overview", href: "/offers" },
    sections: [
      {
        heading: "Offer Types",
        links: [
          { label: "Exclusive Offers", href: "/offers#exclusive" },
          { label: "Top Offers",       href: "/offers#top" },
        ],
      },
      {
        heading: "Offers By Category",
        links: [
          { label: "Operations",           href: "/offers?category=operations" },
          { label: "Human Resources",      href: "/offers?category=human-resources" },
          { label: "Admin and Finance",    href: "/offers?category=admin-finance" },
          { label: "Sales and Marketing",  href: "/offers?category=sales-marketing" },
          { label: "AI",                   href: "/offers?category=ai" },
          { label: "Finance and Insurance",href: "/offers?category=finance-insurance" },
        ],
      },
    ],
    cta: { text: "Explore partner offers and member benefits.", btnLabel: "View Offers", href: "/offers" },
  },
  {
    key: "resources", label: "Resources",
    overview: { label: "Resources Overview", href: "/resources" },
    sections: [
      {
        heading: "Resource Types",
        links: [
          { label: "Articles",    href: "/resources?type=articles" },
          { label: "Guides",      href: "/resources?type=guides" },
          { label: "Tools",       href: "/resources?type=tools" },
          { label: "Downloads",   href: "/resources?type=downloads" },
          { label: "Educational", href: "/resources?type=educational" },
        ],
      },
    ],
    cta: { text: "Learn, plan, and improve your business operations.", btnLabel: "Browse Resources", href: "/resources" },
  },
  {
    key: "help", label: "Help Centre",
    overview: { label: "Support Centre", href: "/help/support" },
    sections: [
      {
        heading: "FAQs",
        links: [
          { label: "Our Platform",        href: "/help/faqs/our-platform" },
          { label: "On-Demand Services",  href: "/help/faqs/on-demand-services" },
          { label: "Managed Services",    href: "/help/faqs/managed-services" },
          { label: "Applications",        href: "/help/faqs/applications" },
          { label: "Operations",          href: "/help/faqs/operations" },
          { label: "Membership",          href: "/help/faqs/membership" },
          { label: "Other",               href: "/help/faqs/other" },
        ],
      },
      {
        heading: "Knowledge Base",
        links: [
          { label: "Our Platform",        href: "/help/knowledge-base/our-platform" },
          { label: "On-Demand Services",  href: "/help/knowledge-base/on-demand-services" },
          { label: "Managed Services",    href: "/help/knowledge-base/managed-services" },
          { label: "Applications",        href: "/help/knowledge-base/applications" },
          { label: "Operations",          href: "/help/knowledge-base/operations" },
          { label: "Marketplace",         href: "/help/knowledge-base/marketplace" },
          { label: "Other",               href: "/help/knowledge-base/other" },
        ],
      },
      {
        heading: "Troubleshooting",
        links: [
          { label: "Our Platform",        href: "/help/troubleshooting/our-platform" },
          { label: "On-Demand Services",  href: "/help/troubleshooting/on-demand-services" },
          { label: "Managed Services",    href: "/help/troubleshooting/managed-services" },
          { label: "Applications",        href: "/help/troubleshooting/applications" },
          { label: "Operations",          href: "/help/troubleshooting/operations" },
          { label: "Other",               href: "/help/troubleshooting/other" },
        ],
      },
    ],
    cta: { text: "Need direct help?", btnLabel: "Visit Support Centre", href: "/help/support" },
  },
  {
    key: "about", label: "About Us",
    sections: [
      {
        heading: "Company",
        links: [
          { label: "About Us",     href: "/about",              desc: "Our story and mission" },
          { label: "Our Purpose",  href: "/about#our-purpose" },
          { label: "Our Platform", href: "/about#our-platform" },
        ],
      },
      {
        heading: "Contact",
        links: [
          { label: "Discovery Call", href: "/contact?reason=discovery-call" },
          { label: "Contact Us",     href: "/contact" },
        ],
      },
    ],
    cta: { text: "Want to talk through your business needs?", btnLabel: "Book a Discovery Call", href: "/contact?reason=discovery-call" },
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
                Contents
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
              ))}
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
              ))}
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-white"
      }`}
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
                to="/sign-in"
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
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
              placeholder="Search services, applications, resources…"
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
              const isActive = menu.sections.flatMap((s) => s.links).some((l) =>
                location.pathname.startsWith(l.href.split("?")[0].split("#")[0])
              ) || (menu.overview && location.pathname.startsWith(menu.overview.href));

              return (
                <button
                  key={menu.key}
                  onClick={() => toggleDropdown(menu.key)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive || isOpen
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
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
            className={`flex items-center px-5 py-3.5 text-sm font-semibold transition-colors border-b border-slate-100 ${
              location.pathname === "/" ? "text-blue-700 bg-blue-50" : "text-slate-700 hover:bg-slate-50"
            }`}
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
              to="/sign-in"
              onClick={closeMobile}
              className="flex items-center justify-center gap-2 py-3 text-sm font-bold bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors"
            >
              <UserPlus className="w-4 h-4" /> Join Now — Explore Membership
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}