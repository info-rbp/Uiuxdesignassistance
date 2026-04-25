import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Briefcase, User, Mail, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

export function SignupPage() {
  const benefits = [
    "Priority advisor scheduling",
    "Partner-exclusive discounts",
    "Centralized document hub",
    "Dedicated account support",
  ];

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-4xl w-full bg-white rounded-[2rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left panel: Info */}
          <div className="md:w-5/12 bg-blue-700 p-10 lg:p-12 text-white flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-8">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black tracking-tight mb-6 leading-tight">Elevate Your Business Partnership</h2>
              <p className="text-blue-100 text-sm leading-relaxed mb-8">
                Join a community of ambitious founders and operators scaling with enterprise-grade strategy.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <span className="text-sm font-semibold text-blue-50 leading-tight">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-blue-600/50">
              <p className="text-xs font-medium text-blue-200 italic leading-relaxed">
                "RBP transformed how we handle operations. Having all our resources in one place is a game changer."
              </p>
              <p className="text-xs font-bold mt-2 text-white">— Sarah Jenkins, TechConnect</p>
            </div>
          </div>

          {/* Right panel: Form */}
          <div className="md:w-7/12 p-10 lg:p-12">
            <div className="mb-10">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Create Your Account</h1>
              <p className="text-slate-500 text-sm mt-2">Get started in under 2 minutes</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">First Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Last Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Business Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Choose Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="password"
                    placeholder="Minimum 8 characters"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2 group">
                  Create Account
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-4 uppercase tracking-widest font-bold">
                  By joining, you agree to our terms and privacy policy
                </p>
              </div>
            </form>

            <div className="mt-8 text-center pt-8 border-t border-slate-100">
              <p className="text-sm text-slate-500 font-medium">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-700 font-bold hover:underline decoration-2 underline-offset-4">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
