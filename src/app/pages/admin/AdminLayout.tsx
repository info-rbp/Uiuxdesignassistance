import { useState, useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router";
import {
  Briefcase, LayoutDashboard, Users, Zap, AppWindowIcon,
  CalendarCheck, FileText, Tag, Wrench, Settings, LogOut,
  Menu, X, ChevronRight, Bell,
} from "lucide-react";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard",        href: "/admin/dashboard" },
  { icon: Users,           label: "Members",          href: "/admin/members" },
  { icon: Zap,             label: "Services",         href: "/admin/services" },
  { icon: AppWindowIcon,   label: "Applications",     href: "/admin/applications" },
  { icon: CalendarCheck,   label: "Sessions",         href: "/admin/sessions" },
  { icon: FileText,        label: "Documents",        href: "/admin/documents" },
  { icon: Tag,             label: "Offers",           href: "/admin/offers" },
  { icon: Wrench,          label: "The Fixer",        href: "/admin/the-fixer" },
  { icon: Settings,        label: "Settings",         href: "/admin/settings" },
];

export function AdminLayout() {
  const location  = useLocation();
  const navigate  = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Auth guard
  useEffect(() => {
    if (localStorage.getItem("rbp_admin_auth") !== "true") {
      navigate("/admin/signin", { replace: true });
    }
  }, [navigate]);

  function handleSignOut() {
    localStorage.removeItem("rbp_admin_auth");
    navigate("/admin/signin");
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-4 py-5 border-b border-slate-800 flex items-center gap-3 flex-shrink-0">
        <div className="w-8 h-8 bg-blue-700 rounded-xl flex items-center justify-center">
          <Briefcase className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-white font-extrabold text-xs tracking-tight leading-tight">RBP Admin</div>
          <div className="text-slate-500 text-[10px]">Management Portal</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-0.5">
        {NAV_ITEMS.map((item) => {
          const Icon    = item.icon;
          const active  = location.pathname === item.href ||
                          (item.href !== "/admin/dashboard" && location.pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                active
                  ? "bg-blue-700 text-white"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {item.label}
              {active && <ChevronRight className="w-3 h-3 ml-auto" />}
            </Link>
          );
        })}
      </nav>

      {/* Admin info + sign out */}
      <div className="px-2 py-4 border-t border-slate-800 flex-shrink-0 space-y-2">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 bg-blue-700 rounded-xl flex items-center justify-center">
            <span className="text-xs font-black text-white">AD</span>
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold text-white truncate">Admin User</div>
            <div className="text-[10px] text-slate-500 truncate">Super Admin</div>
          </div>
        </div>
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-red-400 hover:bg-red-950/30 transition-all"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-56 bg-slate-950 border-r border-slate-800 flex-shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-56 bg-slate-950 border-r border-slate-800 flex flex-col lg:hidden">
            <SidebarContent />
          </aside>
        </>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top bar */}
        <header className="bg-white border-b border-slate-200 px-4 sm:px-6 h-14 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {NAV_ITEMS.find(
                  (n) => location.pathname === n.href ||
                  (n.href !== "/admin/dashboard" && location.pathname.startsWith(n.href))
                )?.label ?? "Admin"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>
            <Link
              to="/"
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              View Site
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
