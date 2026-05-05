import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import {
  Menu, X, Briefcase, ChevronDown, Search, LogIn, UserPlus,
  Headphones, MessageSquare, FileText, Lightbulb,
  BarChart3, Home as HomeIcon, Users, Layers,
  ShoppingBag, Zap, BookOpen, Settings2, Tag, HelpCircle,
  Wifi, Calculator, Shield, DollarSign, Wrench,
} from "lucide-react";

// ── Nav structure ─────────────────────────────────────────────────────────────

const onDemandLinks = [
  { icon: Lightbulb, label: "Business Advisor",    desc: "Strategic guidance for business owners",       href: "/on-demand/business-advisor", color: "text-blue-600 bg-blue-50" },
  { icon: Headphones, label: "On-Demand Services", desc: "Project-based consulting & support",            href: "/on-demand/services",          color: "text-violet-600 bg-violet-50" },
  { icon: FileText,   label: "Document Centre",    desc: "Templates, toolkits & document suites",        href: "/on-demand/documents",         color: "text-teal-600 bg-teal-50" },
  { icon: MessageSquare, label: "Decision Desk",   desc: "Submit an issue, get written guidance",         href: "/on-demand/decision-desk",     color: "text-amber-600 bg-amber-50" },
  { icon: Wrench,     label: "The Fixer",          desc: "One specific problem. Fully resolved.",         href: "/on-demand/the-fixer",         color: "text-orange-600 bg-orange-50" },
];

const managedLinks = [
  { icon: BarChart3, label: "Bid Management", desc: "Tender, bid & proposal management", href: "/managed-services/bid-management", color: "text-blue-600 bg-blue-50" },
  { icon: HomeIcon, label: "Real Estate", desc: "Property operations & admin support", href: "/managed-services/real-estate", color: "text-emerald-600 bg-emerald-50" },
  { icon: Users, label: "HR Services", desc: "People operations & HR admin support", href: "/managed-services/hr-services", color: "text-rose-600 bg-rose-50" },
];

const operationsLinks = [
  { icon: DollarSign, label: "Business Finance", desc: "Finance education & referral pathways", href: "/operations/finance", color: "text-sky-600 bg-sky-50" },
  { icon: Shield, label: "Business Insurance", desc: "Insurance guidance & referrals", href: "/operations/insurance", color: "text-emerald-600 bg-emerald-50" },
  { icon: Calculator, label: "Finance Calculators", desc: "Cash flow & funding readiness tools", href: "/operations/calculators", color: "text-violet-600 bg-violet-50" },
  { icon: Wifi, label: "Superloop Connectivity", desc: "White-labelled telecoms & connectivity", href: "/operations/superloop", color: "text-amber-600 bg-amber-50" },
];

const simpleLinks = [
  { label: "Applications", href: "/applications", icon: Layers },
  { label: "Marketplace", href: "/marketplace", icon: ShoppingBag },
  { label: "Membership", href: "/membership", icon: Zap },
  { label: "Resources", href: "/resources", icon: BookOpen },
  { label: "Offers", href: "/offers", icon: Tag },
  { label: "Help", href: "/help", icon: HelpCircle },
];

// ── Dropdown component ────────────────────────────────────────────────────────

interface DropdownItem { icon: React.ElementType; label: string; desc: string; href: string; color: string; }

function NavDropdown({ label, items, isOpen, onToggle }: {
  label: string; items: DropdownItem[]; isOpen: boolean; onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isActive = items.some((i) => location.pathname.startsWith(i.href));

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
          isActive || isOpen ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
        }`}
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50">
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45" />
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{item.label}</div>
                  <div className="text-xs text-slate-500 leading-snug">{item.desc}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Mobile Accordion ──────────────────────────────────────────────────────────

function MobileAccordion({ label, items, isOpen, onToggle }: {
  label: string; items: DropdownItem[]; isOpen: boolean; onToggle: () => void;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
      >
        {label}
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="bg-slate-50 border-t border-b border-slate-100">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center gap-3 px-6 py-3 text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleDropdown = (name: string) =>
    setOpenDropdown((prev) => (prev === name ? null : name));

  const toggleMobileAccordion = (name: string) =>
    setOpenMobileAccordion((prev) => (prev === name ? null : name));

  return (
    <header
      ref={navRef}
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
              <Link to="/about" className="hidden md:inline text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="hidden md:inline text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
                Contact
              </Link>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Search"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
              <Link to="/sign-in" className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-white transition-all ml-1">
                <LogIn className="w-3 h-3" /> Sign In
              </Link>
              <Link to="/sign-in" className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 px-3 py-1.5 rounded-lg transition-all ml-1">
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
      <div className="hidden lg:block bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-0.5 h-12">
            <NavDropdown label="On-Demand Services" items={onDemandLinks} isOpen={openDropdown === "ondemand"} onToggle={() => toggleDropdown("ondemand")} />
            <NavDropdown label="Managed Services" items={managedLinks} isOpen={openDropdown === "managed"} onToggle={() => toggleDropdown("managed")} />
            {[
              { label: "Applications", href: "/applications" },
            ].map((link) => {
              const isActive = location.pathname === link.href || location.pathname.startsWith(link.href + "/");
              return (
                <Link key={link.href} to={link.href} className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}>
                  {link.label}
                </Link>
              );
            })}
            <NavDropdown label="Operations" items={operationsLinks} isOpen={openDropdown === "operations"} onToggle={() => toggleDropdown("operations")} />
            {[
              { label: "Marketplace", href: "/marketplace" },
              { label: "Membership", href: "/membership" },
              { label: "Offers", href: "/offers" },
              { label: "Resources", href: "/resources" },
              { label: "Help", href: "/help" },
            ].map((link) => {
              const isActive = location.pathname === link.href || location.pathname.startsWith(link.href + "/");
              return (
                <Link key={link.href} to={link.href} className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}>
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl max-h-[85vh] overflow-y-auto">
          {/* Accordion groups */}
          <MobileAccordion
            label="On-Demand Services"
            items={onDemandLinks}
            isOpen={openMobileAccordion === "ondemand"}
            onToggle={() => toggleMobileAccordion("ondemand")}
          />
          <MobileAccordion
            label="Managed Services"
            items={managedLinks}
            isOpen={openMobileAccordion === "managed"}
            onToggle={() => toggleMobileAccordion("managed")}
          />

          {/* Simple links */}
          {simpleLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.href || location.pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`flex items-center gap-3 px-5 py-3.5 text-sm font-semibold border-t border-slate-50 transition-colors ${
                  isActive ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" /> {link.label}
              </Link>
            );
          })}

          <MobileAccordion
            label="Operations Center"
            items={operationsLinks}
            isOpen={openMobileAccordion === "operations"}
            onToggle={() => toggleMobileAccordion("operations")}
          />

          {/* Mobile utility */}
          <div className="border-t border-slate-100 px-4 py-4 space-y-2">
            <Link to="/about" className="block text-center py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">About Us</Link>
            <Link to="/contact" className="block text-center py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">Contact</Link>
            <Link to="/sign-in" className="flex items-center justify-center gap-2 py-3 text-sm font-semibold border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors">
              <LogIn className="w-4 h-4" /> Sign In
            </Link>
            <Link to="/membership" className="flex items-center justify-center gap-2 py-3 text-sm font-bold bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors">
              <UserPlus className="w-4 h-4" /> Join Now — Explore Membership
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}