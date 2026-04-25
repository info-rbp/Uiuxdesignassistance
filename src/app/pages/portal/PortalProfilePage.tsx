import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useMember } from "../../hooks/useMember";
import { PortalCard, PortalCardBody, PortalCardHeader } from "../../components/portal/PortalComponents";
import { User, Mail, Building2, Shield, Save, Loader2 } from "lucide-react";

export function PortalProfilePage() {
  const { user, logout } = useAuth();
  const { member } = useMember();
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    email: user?.email ?? "",
    tenantName: user?.tenantName ?? "",
  });

  if (!user || !member) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 text-blue-600 animate-spin" /></div>;
  }

  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Profile Settings
        </h1>
        <p className="text-slate-500 mt-2 text-sm">
          Manage your personal details and account settings.
        </p>
      </div>

      {/* Avatar + summary */}
      <PortalCard>
        <PortalCardBody>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-extrabold flex-shrink-0 shadow-lg shadow-blue-200">
              {user.firstName[0]}{user.lastName[0]}
            </div>
            <div>
              <p className="font-extrabold text-slate-900 text-lg">{user.firstName} {user.lastName}</p>
              <p className="text-slate-500 text-sm">{user.email}</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                  {member.externalLabel} Member
                </span>
                <span className="text-[10px] font-mono text-slate-400">{user.id}</span>
              </div>
            </div>
          </div>
        </PortalCardBody>
      </PortalCard>

      {/* Edit profile */}
      <PortalCard>
        <PortalCardHeader title="Personal Information" />
        <PortalCardBody>
          <form
            className="space-y-5"
            onSubmit={(e) => { e.preventDefault(); setSaved(true); setTimeout(() => setSaved(false), 3000); }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">First Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Last Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">Business / Organisation</label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={form.tenantName}
                  onChange={(e) => setForm({ ...form, tenantName: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all"
              >
                <Save className="w-4 h-4" />
                {saved ? "Saved!" : "Save Changes"}
              </button>
            </div>
          </form>
        </PortalCardBody>
      </PortalCard>

      {/* Account */}
      <PortalCard>
        <PortalCardHeader title="Account & Security" />
        <PortalCardBody>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-slate-400" />
                <div>
                  <p className="text-sm font-bold text-slate-900">Password</p>
                  <p className="text-xs text-slate-500">Change your account password</p>
                </div>
              </div>
              <button className="text-sm font-bold text-blue-600 hover:text-blue-700">
                Update
              </button>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-rose-400" />
                <div>
                  <p className="text-sm font-bold text-rose-600">Sign Out</p>
                  <p className="text-xs text-slate-500">End your current session</p>
                </div>
              </div>
              <button
                onClick={logout}
                className="text-sm font-bold text-rose-500 hover:text-rose-700"
              >
                Sign Out
              </button>
            </div>
          </div>
        </PortalCardBody>
      </PortalCard>
    </div>
  );
}
