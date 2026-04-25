import React from "react";
import { Link } from "react-router";
import { ArrowRight, Lock, CheckCircle, Info } from "lucide-react";

export function PortalCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function PortalCardHeader({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
      <h3 className="font-extrabold text-slate-900 text-sm tracking-tight">{title}</h3>
      {action && <div>{action}</div>}
    </div>
  );
}

export function PortalCardBody({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function PortalBadge({ status }: { status: string }) {
  if (status === "Included") {
    return (
      <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
        <CheckCircle className="w-3 h-3" />
        Included
      </span>
    );
  } else if (status === "Locked" || status === "Upgrade Required") {
    return (
      <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
        <Lock className="w-3 h-3" />
        Locked
      </span>
    );
  } else if (status === "Coming soon") {
    return (
      <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
        <Info className="w-3 h-3" />
        Coming soon
      </span>
    );
  }

  return (
    <span className="inline-flex items-center bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
      {status}
    </span>
  );
}

export function PortalActionButton({ icon: Icon, label, href }: { icon: any; label: string; href: string }) {
  return (
    <Link
      to={href}
      className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-500 hover:shadow-md hover:shadow-blue-50 transition-all text-center group"
    >
      <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-50 transition-colors">
        <Icon className="w-5 h-5 text-slate-600 group-hover:text-blue-700" />
      </div>
      <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 leading-tight">
        {label}
      </span>
    </Link>
  );
}
