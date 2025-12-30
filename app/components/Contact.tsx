"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

type Form = { name: string; email: string; message: string };

export default function Contact() {
  const [form, setForm] = useState<Form>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    return form.name.trim().length >= 2 && emailOk && form.message.trim().length >= 10;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    // Demo: simulate request
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#111827] to-black" />

      {/* Abstract Shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px]" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="section-title !text-white">Get in touch</h2>
          <p className="section-subtitle !text-slate-400">
            Have a project in mind? We’d love to hear from you. Send us a message and we’ll respond within 24 hours.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl"
        >
          <div className="glass-panel !bg-white/10 !border-white/10 backdrop-blur-md p-8 sm:p-10 rounded-3xl">
            <form onSubmit={onSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={onChange}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-white placeholder-slate-500 shadow-sm transition focus:border-blue-500 focus:bg-white/10 focus:ring-1 focus:ring-blue-500 outline-none"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-white placeholder-slate-500 shadow-sm transition focus:border-blue-500 focus:bg-white/10 focus:ring-1 focus:ring-blue-500 outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-white placeholder-slate-500 shadow-sm transition focus:border-blue-500 focus:bg-white/10 focus:ring-1 focus:ring-blue-500 outline-none"
                  placeholder="Tell us about your goals"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`w-full btn-primary !h-12 !rounded-xl !text-base disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === "sending" ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </span>
                ) : status === "sent" ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Message Sent
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message <Send className="h-4 w-4" />
                  </span>
                )}
              </button>

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-red-400 text-sm"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <p>Please check your details. All fields are required.</p>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}