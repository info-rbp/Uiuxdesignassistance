import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTABanner } from "../components/CTABanner";
import { WaitlistModal } from "../components/WaitlistModal";
import { applicationsData, CATEGORIES } from "../data/applications";
import { 
  ArrowRight, CheckCircle2, LayoutTemplate, Layers, Blocks, Target, Repeat, Plus, X
} from "lucide-react";

export function ApplicationsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="bg-slate-50 border-b border-slate-100 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-6">
                <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
                <span>›</span>
                <span className="text-slate-900 font-bold">Applications</span>
              </div>
              
              <div className="inline-flex items-center gap-2 mb-6">
                 <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-200 px-3 py-1 rounded-full">
                    Applications
                 </span>
                 <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
                    In Development
                 </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                One Connected Suite to Run, Manage and Grow Your Business
              </h1>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                A curated suite of business applications designed for small businesses, bringing operations, finance, customers, documents, support, learning, reporting and automation into one connected platform.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "Built for small business workflows",
                  "Designed to connect advisory, software and support",
                  "Applications launching progressively"
                ].map((item, i) => (
                   <li key={i} className="flex flex-row items-center gap-3 text-slate-700 font-medium font-sm">
                     <CheckCircle2 className="w-5 h-5 text-blue-600" />
                     {item}
                   </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <a
                  href="#applications-grid"
                  className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-700 hover:bg-blue-800 shadow-sm transition-all"
                >
                  Explore the Applications
                </a>
                <WaitlistModal>
                  <button
                    className="inline-flex justify-center items-center px-8 py-3.5 border border-slate-300 text-sm font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm cursor-pointer"
                  >
                    Join the Waitlist
                  </button>
                </WaitlistModal>
              </div>
              <p className="text-xs text-slate-500">
                * Applications are currently in development and will be released progressively.
              </p>
            </div>
            
            <div className="lg:w-1/2 w-full">
               <div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/5 border border-slate-200 overflow-hidden relative">
                 <div className="border-b border-slate-100 bg-slate-50 p-4 flex justify-between items-center">
                   <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                     <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                   </div>
                   <span className="text-xs font-bold text-slate-400">RBP Suite Dashboard</span>
                 </div>
                 <div className="p-6 bg-slate-50/50">
                    <div className="flex gap-4 mb-6">
                      <div className="w-1/3 bg-white border border-slate-100 rounded-xl p-4 shadow-sm relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-2"><Layers className="w-4 h-4 text-slate-300"/></div>
                         <p className="text-xs text-slate-500 font-bold mb-1 uppercase tracking-wider">Status</p>
                         <p className="text-sm font-bold text-slate-900">In Development</p>
                      </div>
                      <div className="w-2/3 bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                         <p className="text-xs text-slate-500 font-bold mb-1 uppercase tracking-wider">Modular Tools</p>
                         <div className="flex gap-2 mt-2">
                            <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-200"></div>
                            <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-200"></div>
                            <div className="w-8 h-8 rounded-lg bg-fuchsia-100 border border-fuchsia-200"></div>
                            <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center"><Plus className="w-4 h-4 text-slate-400"/></div>
                         </div>
                      </div>
                    </div>
                    {/* Fake list area */}
                    <div className="bg-white border text-center text-slate-500 border-slate-100 rounded-xl p-8 shadow-sm h-[200px] flex items-center justify-center flex-col">
                       <LayoutTemplate className="w-10 h-10 text-slate-300 mb-3" />
                       <p className="text-sm font-semibold text-slate-700">Platform Capabilities Developing</p>
                       <p className="text-xs text-slate-400 mt-1 max-w-[200px]">Connected modules coming soon to your business workspace.</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro / Positioning Section */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">The Right Business Tools, Designed to Work Together</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed">
              Most small businesses rely on disconnected tools for finance, CRM, documents, HR, support, reporting and operations. The RBP Applications Suite is being designed to bring these functions together through a guided, modular platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl text-left hover:shadow-md transition-shadow">
                 <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-6">
                    <Blocks className="w-7 h-7" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">Simplify your software stack</h3>
                 <p className="text-slate-600 leading-relaxed">Reduce reliance on scattered tools by bringing core business functions into one connected environment.</p>
               </div>
               
               <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl text-left hover:shadow-md transition-shadow">
                 <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-7 h-7" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">Connect advice with execution</h3>
                 <p className="text-slate-600 leading-relaxed">Move from business guidance into practical workflows, records, documents and actions.</p>
               </div>
               
               <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl text-left hover:shadow-md transition-shadow">
                 <div className="w-14 h-14 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center mb-6">
                    <Layers className="w-7 h-7" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">Deploy only what you need</h3>
                 <p className="text-slate-600 leading-relaxed">Start with the applications relevant to your business and expand over time.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 3. Application Overview Grid */}
      <section id="applications-grid" className="py-24 bg-slate-50 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">The Application Suite</h2>
               <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                 Explore the planned modular toolkit designed specifically to run and scale your business operations.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {applicationsData.map(app => {
                 const Icon = app.icon;
                 return (
                   <Link 
                     to={`/applications/${app.slug}`} 
                     key={app.id} 
                     className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:border-blue-300 transition-all group flex flex-col h-full relative overflow-hidden"
                   >
                     <div className="flex justify-between items-start mb-6">
                       <div className={`w-14 h-14 rounded-2xl ${app.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className="w-7 h-7" />
                       </div>
                       <span className="bg-slate-100 text-slate-500 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border border-slate-200">
                         Coming Soon
                       </span>
                     </div>
                     <p className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-2">{app.category}</p>
                     <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{app.name}</h3>
                     <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                        {app.shortDesc}
                     </p>
                     
                     <div className="flex flex-col gap-3 mt-auto border-t border-slate-100 pt-5">
                        <div className="flex items-center justify-between text-blue-700 font-bold text-sm">
                           <span>View Application</span>
                           <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                     </div>
                   </Link>
                 )
               })}
            </div>
         </div>
      </section>

      {/* 4. Featured Application Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Applications by Business Need</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Explore the suite by the area of your business you want to improve first.
              </p>
           </div>
           
           <div className="flex flex-col gap-6 max-w-4xl mx-auto">
              {CATEGORIES.map((cat, i) => {
                 const relatedApps = applicationsData.filter(a => a.category === cat.name);
                 return (
                   <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                         <div>
                           <h3 className="text-2xl font-bold text-slate-900 mb-2">{cat.name}</h3>
                           <p className="text-slate-600">{cat.description}</p>
                         </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                         {relatedApps.map(app => (
                           <Link key={app.id} to={`/applications/${app.slug}`} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:text-blue-700 transition-colors text-sm font-medium text-slate-700 shadow-sm">
                              {app.name}
                           </Link>
                         ))}
                      </div>
                   </div>
                 )
              })}
           </div>
        </div>
      </section>

      {/* 5. How the Suite Will Work */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">How the Application Suite Will Work</h2>
               <p className="text-blue-200 max-w-2xl mx-auto text-lg">A simple, connected pathway from choosing your tools to growing your business.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { title: "Choose your business needs", desc: "Select the areas they need help with, such as finance, CRM, documents, support or reporting." },
                { title: "Activate relevant applications", desc: "The platform recommends and activates the right applications based on the client’s business type, needs and membership." },
                { title: "Connect workflows and records", desc: "Applications are designed to work together, reducing duplicated data and disconnected systems." },
                { title: "Use RBP guidance alongside tools", desc: "Clients can access advisory services, resources and support workflows alongside the applications." },
                { title: "Expand over time", desc: "As the business grows, additional applications and workflows can be added." }
              ].map((step, i) => (
                <div key={i} className="relative pl-6 md:pl-0 md:pt-6 border-l-2 md:border-l-0 md:border-t-2 border-blue-800/50">
                   <div className="absolute left-[-9px] top-[-2px] md:left-0 md:top-[-9px] w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                   <h4 className="font-bold text-lg mb-2 mt-[-4px] md:mt-2 text-blue-100">
                     <span className="text-blue-500 mr-2 md:block md:mb-1">{i + 1}.</span> {step.title}
                   </h4>
                   <p className="text-sm text-slate-400 leading-relaxed mb-8 md:mb-0">{step.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 6. Built for Small Business */}
      <section className="py-24 bg-white border-b border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Built Around the Way Small Businesses Actually Operate</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               <div className="bg-red-50/50 border border-red-100 p-8 md:p-12 rounded-3xl">
                  <h3 className="text-2xl font-bold text-red-900 mb-8 flex items-center gap-3">
                     <X className="text-red-500" /> The Old Way
                  </h3>
                  <ul className="space-y-5">
                    {[
                      "Too many disconnected tools",
                      "Duplicated data entry",
                      "Expensive software subscriptions",
                      "Limited visibility over operations",
                      "Hard to connect business advice with implementation"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 text-red-800/80 font-medium">
                         <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></span> {item}
                      </li>
                    ))}
                  </ul>
               </div>

               <div className="bg-blue-50 border border-blue-100 p-8 md:p-12 rounded-3xl shadow-lg shadow-blue-900/5">
                  <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
                     <CheckCircle2 className="text-blue-600" /> RBP Approach
                  </h3>
                  <ul className="space-y-5">
                    {[
                      "One connected platform layer",
                      "Modular applications",
                      "Guided small business workflows",
                      "Integrated resources and support",
                      "Scalable structure for growth"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 text-blue-900 font-medium">
                         <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span> {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* 7. Coming Soon / CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="bg-blue-900 text-white p-12 md:p-16 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-blue-800 opacity-50 blur-[100px] rounded-full scale-150 translate-y-1/2"></div>
              <div className="relative z-10">
                 <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Applications Are Coming Soon</h2>
                 <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                   We are building the RBP Applications Suite to help small businesses access the tools, workflows and guidance they need from one connected platform.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                    <WaitlistModal>
                      <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-slate-50 transition-all shadow-lg text-lg cursor-pointer">
                        Join the Application Waitlist
                      </button>
                    </WaitlistModal>
                    <Link to="/membership" className="px-8 py-4 bg-blue-800 border-2 border-blue-700 text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-lg">
                      View Membership Options
                    </Link>
                 </div>
                 <p className="text-blue-200/70 text-sm">
                    Register your interest and be notified as applications become available.
                 </p>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}