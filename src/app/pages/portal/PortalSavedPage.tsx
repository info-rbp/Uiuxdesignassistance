import { Link } from "react-router";
import { PortalCard, PortalCardBody, PortalCardHeader, PortalBadge } from "../../components/portal/PortalComponents";
import { useMember } from "../../hooks/useMember";
import { Bookmark, FolderOpen, ExternalLink, Loader2 } from "lucide-react";

export function PortalSavedPage() {
  const { entitlements, isLoading } = useMember();

  if (isLoading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 text-blue-600 animate-spin" /></div>;
  }

  const hasDocuShare = entitlements?.docuShare ?? false;

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            DocuShare / Saved Items
          </h1>
          <p className="text-slate-500 mt-2 text-sm max-w-md">
            Access your purchased documents, saved templates, and bookmarked resources.
          </p>
        </div>
        <PortalBadge status={hasDocuShare ? "Included" : "Locked"} />
      </div>

      {!hasDocuShare ? (
        <PortalCard>
          <PortalCardBody>
            <div className="py-12 text-center">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <FolderOpen className="w-7 h-7 text-slate-400" />
              </div>
              <h3 className="font-extrabold text-slate-900 mb-2">DocuShare not included</h3>
              <p className="text-slate-500 text-sm mb-6 max-w-xs mx-auto">
                Upgrade to Pro to unlock the full DocuShare document library — templates, guides, and business suites.
              </p>
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-all text-sm"
              >
                Compare Plans
              </Link>
            </div>
          </PortalCardBody>
        </PortalCard>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Purchased Documents", count: 0, icon: FolderOpen, href: "/docushare" },
              { label: "Saved Templates", count: 0, icon: Bookmark, href: "/docushare" },
              { label: "Bookmarked Resources", count: 0, icon: Bookmark, href: "/resources" },
            ].map(({ label, count, icon: Icon, href }) => (
              <Link key={label} to={href} className="group">
                <PortalCard className="hover:border-blue-300 hover:shadow-md transition-all">
                  <PortalCardBody className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-slate-50 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                        <Icon className="w-5 h-5 text-slate-500 group-hover:text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{label}</p>
                        <p className="text-xs text-slate-400 font-medium">{count} items</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
                  </PortalCardBody>
                </PortalCard>
              </Link>
            ))}
          </div>

          <PortalCard>
            <PortalCardHeader title="Browse DocuShare" action={
              <Link to="/docushare" className="text-xs font-bold text-blue-600 hover:text-blue-700">
                Open full library →
              </Link>
            } />
            <PortalCardBody>
              <div className="py-10 text-center text-slate-400">
                <Bookmark className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p className="font-semibold text-sm">No saved items yet</p>
                <p className="text-xs mt-1">Browse the DocuShare library to save or purchase documents.</p>
                <Link
                  to="/docushare"
                  className="mt-5 inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-5 py-2.5 rounded-xl transition-all text-sm"
                >
                  Open DocuShare
                </Link>
              </div>
            </PortalCardBody>
          </PortalCard>
        </>
      )}
    </div>
  );
}
