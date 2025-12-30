"use client";

import { motion } from "framer-motion";
import { Shield, LayoutDashboard, Smartphone, Accessibility, ChevronRight } from "lucide-react";

const features = [
  {
    title: "Secure Authentication",
    desc: "Enterprise-grade security with JWT flows and hashed credentials for complete peace of mind.",
    icon: Shield,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Scalable Dashboard",
    desc: "Built with a component-driven architecture, ensuring modular code that scales with your growth.",
    icon: LayoutDashboard,
    color: "text-violet-600",
    bg: "bg-violet-100",
  },
  {
    title: "Responsive Design",
    desc: "A seamless experience across all devices, from large desktop monitors to mobile screens.",
    icon: Smartphone,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    title: "Accessible UI",
    desc: "Designed for everyone. Keyboard navigation, ARIA labels, and WCAG compliance built-in.",
    icon: Accessibility,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Everything you need to ship faster</h2>
          <p className="section-subtitle">
            Our platform provides the critical infrastructure to build, scale, and manage your trading applications with ease.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="card group cursor-pointer"
            >
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg} ${feature.color} transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{feature.desc}</p>

              <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                Learn more <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}