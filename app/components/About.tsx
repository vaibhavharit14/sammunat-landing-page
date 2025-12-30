"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Trophy, Clock, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-violet-50 blur-3xl -z-10" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Why choose Sammunat?</h2>
            <p className="section-subtitle">
              We’re building modern, scalable web experiences for Web3 teams. Our stack is
              production‑ready, secure, and performance‑tuned for global scale.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Secure by default — best practices for auth & storage.",
                "Fast deployments — CI‑ready, cloud‑friendly structure.",
                "Accessible UI — responsive, keyboard‑friendly components."
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 flex gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`h-10 w-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 bg-[url('https://i.pravatar.cc/100?img=${i + 10}')] bg-cover`} />
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold text-slate-900">Trusted by 500+ teams</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Trophy key={i} className="h-3 w-3 text-amber-500 fill-amber-500" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-panel p-8 rounded-3xl relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Platform Performance</p>
                  <p className="text-2xl font-bold text-slate-900">Grade A+</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-emerald-600" />
                </div>
              </div>

              <p className="text-slate-600 italic">
                “This landing experience is crafted with Next.js App Router and TailwindCSS,
                ensuring developer velocity and best-in-class UI consistency.”
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-slate-400" />
                    <p className="text-sm font-medium text-slate-500">Uptime</p>
                  </div>
                  <p className="text-lg font-bold text-slate-900">99.99%</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-slate-400" />
                    <p className="text-sm font-medium text-slate-500">Speed</p>
                  </div>
                  <p className="text-lg font-bold text-slate-900">0.05s</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full w-[95%]" />
                </div>
                <div className="flex justify-between mt-2 text-xs text-slate-500">
                  <span>Performance Score</span>
                  <span>100/100</span>
                </div>
              </div>
            </div>

            {/* Background Decor */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-[2.5rem] opacity-10 blur-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}