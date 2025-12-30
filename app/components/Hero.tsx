"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Zap, Globe, BarChart3 } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative isolate overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-white opacity-80" />
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-violet-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="container relative z-10">
        <nav className="flex items-center justify-between py-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/20">
              <Activity className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Sammunat</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            <a className="text-slate-600 hover:text-blue-600 font-medium transition-colors" href="#about">About</a>
            <a className="text-slate-600 hover:text-blue-600 font-medium transition-colors" href="#features">Features</a>
            <a className="text-slate-600 hover:text-blue-600 font-medium transition-colors" href="#contact">Contact</a>
            <a className="btn-primary" href="#contact">Get Started</a>
          </motion.div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-20 lg:py-32 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              v2.0 is now live
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Trading Intelligence, <span className="text-gradient">Reimagined.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg">
              Unlock the future of crypto trading with AI-driven insights, sub-millisecond latency, and bank-grade security.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a className="btn-primary" href="#features">
                Explore Features <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a className="btn-secondary" href="#contact">Talk to Sales</a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-500" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-blue-500" />
                <span>Global Coverage</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-blue-600 to-violet-600 opacity-20 blur-xl" />
            <div className="relative glass-panel rounded-[2rem] p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm font-medium text-slate-500">Portfolio Growth</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-bold text-slate-900">$124,592</span>
                    <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+12.4%</span>
                  </div>
                </div>
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-slate-600" />
                </div>
              </div>

              {/* Pseudo Chart */}
              <div className="h-48 w-full rounded-xl bg-gradient-to-b from-blue-50 to-transparent border-t border-blue-100 relative overflow-hidden flex items-end px-4 gap-2">
                {[40, 65, 45, 80, 55, 90, 70, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                    className="flex-1 bg-blue-600/20 rounded-t-sm hover:bg-blue-600/40 transition-colors"
                  />
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Latency</p>
                  <p className="text-xl font-bold text-slate-900 mt-1">42ms</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Volume</p>
                  <p className="text-xl font-bold text-slate-900 mt-1">$2.4B</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 hidden lg:block glass-panel p-4 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-sm font-semibold text-slate-700">System Operational</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}