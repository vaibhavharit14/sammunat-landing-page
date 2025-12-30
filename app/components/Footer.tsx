export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600" />
              <span className="text-xl font-bold text-white">Sammunat</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Empowering Web3 traders with enterprise-grade intelligence, seamless execution, and unmatched security.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-slate-400 hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">API Keys</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Sammunat. All rights reserved.
          </p>
          <div className="flex gap-6">
            {/* Social placeholders */}
            <div className="h-5 w-5 bg-slate-700 rounded-full hover:bg-white transition-colors cursor-pointer" />
            <div className="h-5 w-5 bg-slate-700 rounded-full hover:bg-white transition-colors cursor-pointer" />
            <div className="h-5 w-5 bg-slate-700 rounded-full hover:bg-white transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}