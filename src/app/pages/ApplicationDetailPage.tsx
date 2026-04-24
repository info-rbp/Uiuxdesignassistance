import { useParams, Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { applicationsData } from "../data/applications";
import { WaitlistModal } from "../components/WaitlistModal";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";

export function ApplicationDetailPage() {
  const { slug } = useParams();
  const app = applicationsData.find((a) => a.slug === slug);

  if (!app) {
    return (
      <div className="bg-white min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Application Not Found</h1>
          <p className="text-slate-600 mb-8">The application you are looking for does not exist.</p>
          <Link to="/applications" className="px-6 py-3 bg-blue-700 text-white rounded-xl font-semibold">
            Return to Applications
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = app.icon;
  const relatedApps = applicationsData.filter(a => app.relatedSlugs?.includes(a.slug)).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="bg-slate-50 border-b border-slate-100 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-6">
                <Link to="/" className="hover:text-blue-700">Home</Link>
                <span>›</span>
                <Link to="/applications" className="hover:text-blue-700">Applications</Link>
                <span>›</span>
                <span className="text-slate-900">{app.name}</span>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-white bg-blue-600 px-3 py-1 rounded-full">
                  Coming Soon
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-200 px-3 py-1 rounded-full">
                  {app.category}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                 <div className={`w-16 h-16 rounded-2xl ${app.color} flex items-center justify-center shadow-sm`}>
                    <Icon className="w-8 h-8" />
                 </div>
                 <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                   {app.name}
                 </h1>
              </div>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                {app.shortDesc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <WaitlistModal applicationName={app.name}>
                  <button
                    className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-700 hover:bg-blue-800 shadow-sm transition-all cursor-pointer"
                  >
                    Join Waitlist
                  </button>
                </WaitlistModal>
                <Link
                  to="/applications"
                  className="inline-flex justify-center items-center px-8 py-3.5 border border-slate-300 text-sm font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm"
                >
                  Back to Applications
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              {/* Optional Right-side mock */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden relative">
                <div className="border-b border-slate-100 bg-slate-50 p-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="p-8 pb-12 flex flex-col items-center justify-center min-h-[300px] bg-slate-50/50">
                  <Icon className="w-16 h-16 text-slate-300 mb-4" />
                  <p className="text-slate-500 font-medium">Dashboard Interface in Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What This Application Will Help With */}
      <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-10 text-center">What This Application Will Help With</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {app.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 3. Core Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-extrabold text-slate-900 mb-10 text-center">Core Capabilities</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {app.capabilities.map((cap, i) => (
               <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                 <h3 className="text-xl font-bold text-slate-900 mb-2">{cap.name}</h3>
                 <p className="text-slate-600 leading-relaxed">{cap.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 4. Who It Is For */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Who It Is For</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              This application is being designed for:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {app.audience.map((aud, i) => (
                <span key={i} className="px-5 py-2.5 bg-blue-50 text-blue-800 font-medium rounded-full border border-blue-100">
                  {aud}
                </span>
              ))}
            </div>
        </div>
      </section>

      {/* 5. How It Connects */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-10 text-center">How It Connects With the Wider Suite</h2>
            <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
              Applications are designed to work together, reducing duplicated data and disconnected systems.
            </p>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
               {relatedApps.map(rel => {
                 const RelIcon = rel.icon;
                 return (
                   <Link to={`/applications/${rel.slug}`} key={rel.slug} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group">
                     <div className={`p-3 rounded-lg ${rel.color}`}>
                       <RelIcon className="w-5 h-5" />
                     </div>
                     <span className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors text-sm">{rel.name}</span>
                   </Link>
                 )
               })}
            </div>
        </div>
      </section>

      {/* 6. Availability Panel */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="bg-blue-900 text-white p-12 rounded-3xl relative overflow-hidden">
             <div className="absolute inset-0 bg-blue-800 opacity-50 blur-3xl rounded-full scale-[2] translate-y-1/2"></div>
             <div className="relative z-10">
               <span className="inline-block px-4 py-1.5 bg-blue-500/30 font-bold text-blue-100 rounded-full mb-6 border border-blue-400/30 uppercase tracking-widest text-sm">
                 Status: Coming Soon
               </span>
               <h2 className="text-3xl font-extrabold mb-6">Applications Are In Development</h2>
               <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
                 This application is currently being designed and will be released progressively as part of the RBP Applications Suite.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <WaitlistModal applicationName={app.name}>
                   <button className="px-8 py-3.5 bg-white text-blue-900 font-bold rounded-xl hover:bg-slate-100 transition-all shadow-lg cursor-pointer">
                     Register Interest
                   </button>
                 </WaitlistModal>
                 <Link to="/applications" className="px-8 py-3.5 bg-blue-800 border border-blue-700 text-white font-bold rounded-xl hover:bg-blue-700 transition-all">
                   Return to Applications
                 </Link>
               </div>
             </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
