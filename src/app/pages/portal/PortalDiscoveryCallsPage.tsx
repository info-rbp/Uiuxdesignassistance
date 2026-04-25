import { useState } from "react";
import { Link } from "react-router";
import { PortalCard, PortalCardBody, PortalCardHeader, PortalBadge } from "../../components/portal/PortalComponents";
import { useMember } from "../../hooks/useMember";
import { Phone, Calendar, Loader2, Plus, Clock, CheckCircle, ExternalLink } from "lucide-react";

interface DiscoveryCall {
  id: string;
  topic: string;
  scheduledAt: string;
  status: "upcoming" | "completed" | "cancelled";
}

const MOCK_CALLS: DiscoveryCall[] = [];

export function PortalDiscoveryCallsPage() {
  const { entitlements, isLoading } = useMember();
  const [calls] = useState<DiscoveryCall[]>(MOCK_CALLS);

  if (isLoading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 text-blue-600 animate-spin" /></div>;
  }

  const included = entitlements?.discoveryCall ?? false;

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Discovery Calls
          </h1>
          <p className="text-slate-500 mt-2 text-sm max-w-md">
            Book a 30-minute discovery session with a senior RBP consultant.
          </p>
        </div>
        <PortalBadge status={included ? "Included" : "Locked"} />
      </div>

      {!included ? (
        <PortalCard>
          <PortalCardBody>
            <div className="py-10 text-center">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Phone className="w-7 h-7 text-slate-400" />
              </div>
              <h3 className="font-extrabold text-slate-900 mb-2">Discovery Calls not included</h3>
              <p className="text-slate-500 text-sm mb-6 max-w-xs mx-auto">
                Upgrade to Pro or Ultimate to book discovery sessions with our senior advisors.
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
          <PortalCard>
            <PortalCardHeader title="Book a Discovery Call" />
            <PortalCardBody>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Your membership includes access to a 30-minute discovery session. Use these to discuss a business challenge, explore a new service area, or review your current strategy.
              </p>
              <a
                href="https://calendly.com/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-all text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                Open Booking Calendar
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
              <p className="text-xs text-slate-400 mt-3 font-medium">
                Booking is handled via our scheduling partner. Sessions are 30 minutes via video call.
              </p>
            </PortalCardBody>
          </PortalCard>

          <PortalCard>
            <PortalCardHeader title={`Past & Upcoming Calls (${calls.length})`} />
            <PortalCardBody className="p-0">
              {calls.length === 0 ? (
                <div className="py-14 text-center text-slate-400">
                  <Clock className="w-10 h-10 mx-auto mb-3 opacity-30" />
                  <p className="font-semibold text-sm">No calls booked yet</p>
                  <p className="text-xs mt-1">Your scheduled sessions will appear here.</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {calls.map((call) => (
                    <div key={call.id} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${call.status === "completed" ? "bg-emerald-50" : "bg-blue-50"} rounded-lg flex items-center justify-center`}>
                          {call.status === "completed"
                            ? <CheckCircle className="w-4 h-4 text-emerald-600" />
                            : <Clock className="w-4 h-4 text-blue-600" />
                          }
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm">{call.topic}</p>
                          <p className="text-slate-500 text-xs mt-0.5">{call.scheduledAt}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-slate-500 capitalize">{call.status}</span>
                    </div>
                  ))}
                </div>
              )}
            </PortalCardBody>
          </PortalCard>
        </>
      )}
    </div>
  );
}
