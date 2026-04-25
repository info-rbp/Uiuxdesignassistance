import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import {
  Briefcase,
  Menu,
  X,
  LayoutDashboard,
  Star,
  CreditCard,
  FileText,
  HelpCircle,
  Phone,
  Bookmark,
  UserCircle,
  LogOut,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

export function PortalLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { label: "Dashboard", href: "/portal", icon: LayoutDashboard, exact: true },
    { label: "Membership", href: "/portal/membership", icon: Star },
    { label: "Subscription / Billing", href: "/portal/subscription", icon: CreditCard },
    { label: "DocuShare / Saved Items", href: "/portal/saved", icon: Bookmark },
    { label: "Customisation Requests", href: "/portal/customisation-requests", icon: FileText },
    { label: "Discovery Calls", href: "/portal/discovery-calls", icon: Phone },
    { label: "Support", href: "/portal/support", icon: HelpCircle },
  ];

  const displayName = user
    ? `${user.firstName} ${user.lastName}`
    : "Portal User";
  const tenantName = user?.tenantName ?? "";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <Link to="/portal" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-white" />
          </div>
          <span className="font-black text-slate-900 tracking-tight text-base">RBP Portal</span>
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 -mr-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          mobileOpen ? "block" : "hidden"
        } md:flex md:flex-col w-full md:w-64 bg-slate-900 text-slate-300 flex-shrink-0 md:min-h-screen md:sticky md:top-0 md:h-screen md:overflow-y-auto`}
      >
        {/* Brand */}
        <div className="p-5 border-b border-slate-800 hidden md:flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/50">
            <Briefcase className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-white font-black tracking-tight text-base leading-none">RBP</div>
            <div className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">
              Platform Workspace
            </div>
          </div>
        </div>

        {/* User identity */}
        <div className="px-4 pt-5 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3 px-1">
            <div className="w-8 h-8 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-400 text-xs font-extrabold">
                {user?.firstName?.[0] ?? "?"}
                {user?.lastName?.[0] ?? ""}
              </span>
            </div>
            <div className="overflow-hidden">
              <div className="text-white font-bold text-sm truncate">{displayName}</div>
              {tenantName && (
                <div className="text-slate-500 text-xs truncate">{tenantName}</div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-grow p-3 space-y-0.5">
          {navItems.map((item) => {
            const isActive = item.exact
              ? location.pathname === item.href
              : location.pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-blue-600/15 text-blue-400"
                    : "hover:bg-white/5 hover:text-white text-slate-400"
                }`}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-blue-400" : "text-slate-500"}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom: profile + logout */}
        <div className="p-3 border-t border-slate-800 space-y-0.5">
          <Link
            to="/portal/profile"
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              location.pathname === "/portal/profile"
                ? "bg-blue-600/15 text-blue-400"
                : "hover:bg-white/5 hover:text-white text-slate-400"
            }`}
          >
            <UserCircle className="w-4 h-4 flex-shrink-0 text-slate-500" />
            Profile Settings
          </Link>
          <button
            onClick={() => {
              logout();
              setMobileOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:bg-white/5 hover:text-rose-400 transition-all"
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-grow flex flex-col min-h-screen overflow-x-hidden">
        <main className="flex-grow pb-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
