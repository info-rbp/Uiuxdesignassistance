import { Link } from "react-router";
import { PortalAdminReference } from "./PortalAdminReference";
import { BookOpen, ArrowRight, Clock, ChevronRight, TrendingUp, FileText, Video, Mic } from "lucide-react";

const featured = {
  title: "How to Build a 90-Day Business Action Plan",
  description: "A step-by-step guide to setting quarterly goals, identifying priorities, and building accountability systems for your small business.",
  category: "Strategy",
  readTime: "12 min read",
  type: "Guide",
};

const resources = [
  { title: "Cash Flow Forecasting for SMEs",         category: "Finance",   type: "Guide",   readTime: "8 min",   icon: FileText },
  { title: "Understanding Australian Business Tax",  category: "Finance",   type: "Guide",   readTime: "10 min",  icon: FileText },
  { title: "Hiring Your First Employee",             category: "HR",        type: "Video",   readTime: "15 min",  icon: Video },
  { title: "Winning Government Tenders",             category: "Bids",      type: "Guide",   readTime: "6 min",   icon: FileText },
  { title: "Scaling a Service Business",             category: "Strategy",  type: "Podcast", readTime: "32 min",  icon: Mic },
  { title: "Digital Tools for Small Business",       category: "Technology",type: "Guide",   readTime: "7 min",   icon: FileText },
  { title: "Business Insurance Essentials",          category: "Finance",   type: "Guide",   readTime: "9 min",   icon: FileText },
  { title: "Building a Marketing Strategy on a Budget", category: "Marketing", type: "Video", readTime: "20 min", icon: Video },
];

const catColor: Record<string, string> = {
  Finance:    "bg-violet-50 text-violet-700",
  HR:         "bg-emerald-50 text-emerald-700",
  Bids:       "bg-amber-50 text-amber-700",
  Strategy:   "bg-blue-50 text-blue-700",
  Technology: "bg-sky-50 text-sky-700",
  Marketing:  "bg-pink-50 text-pink-700",
};

export function PortalResources() {
  return (
    <div className="px-4 sm:px-6 py-6 space-y-6">
      <PortalAdminReference
        portalRoute="/portal/resources"
        controlledBy={["Admin Resources", "Admin Help Center > Resources"]}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 mb-1">Resources</h2>
          <p className="text-sm text-slate-500">Guides, videos, and insights curated for Australian small business owners.</p>
        </div>
        <Link
          to="/resources"
          className="hidden sm:inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex-shrink-0"
        >
          Full Library <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Featured */}
      <div className="bg-blue-700 rounded-2xl px-6 py-5 relative overflow-hidden">
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-600 rounded-full opacity-40 pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-amber-300" />
            <span className="text-[10px] font-bold text-blue-100 uppercase tracking-widest">Featured Resource</span>
          </div>
          <h3 className="text-base font-extrabold text-white mb-1">{featured.title}</h3>
          <p className="text-xs text-blue-100 leading-relaxed mb-4 max-w-xl">{featured.description}</p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold bg-blue-600/50 text-blue-100 px-2 py-1 rounded-lg">{featured.category}</span>
            <span className="flex items-center gap-1 text-[10px] text-blue-200">
              <Clock className="w-3 h-3" /> {featured.readTime}
            </span>
            <button className="inline-flex items-center gap-1.5 bg-white text-blue-700 font-bold text-xs px-4 py-2 rounded-xl hover:bg-blue-50 transition-all">
              Read Guide <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Resource grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-extrabold text-slate-900">Latest Resources</h3>
          <button className="text-xs font-semibold text-blue-700 hover:underline flex items-center gap-1">
            View all <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((r) => (
            <div key={r.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col gap-3 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center">
                  <r.icon className="w-4 h-4 text-slate-500" />
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${catColor[r.category] ?? "bg-slate-50 text-slate-600"}`}>
                  {r.category}
                </span>
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors mb-1">{r.title}</div>
                <div className="flex items-center gap-2 text-[10px] text-slate-400">
                  <span className="bg-slate-50 px-1.5 py-0.5 rounded">{r.type}</span>
                  <span className="flex items-center gap-0.5"><Clock className="w-2.5 h-2.5" />{r.readTime}</span>
                </div>
              </div>
              <button className="mt-auto text-xs font-bold text-blue-700 hover:underline text-left flex items-center gap-1">
                Read more <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
