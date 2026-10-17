// src/components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API route, EmailJS, Formspree)
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Have a project in mind, a performance bottleneck to solve, or an
            opportunity to discuss? Let&apos;s connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information & Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Let&apos;s build something great together.
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Reach out directly via email or find me on my professional
                networks. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400 font-bold">
                  @
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href="mailto:deeksha@example.com"
                    className="text-slate-900 dark:text-white font-medium hover:underline"
                  >
                    missgoyal13@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400 font-bold">
                  in
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/deeksha-bansal-585980128"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 dark:text-white font-medium hover:underline"
                  >
                    linkedin.com/in/deeksha-bansal
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400 font-bold">
                  gh
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/goyal-deeksha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 dark:text-white font-medium hover:underline"
                  >
                    github.com/goyal-deeksha
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Simple Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400 font-bold text-xl">
                  ✓
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  Message Sent!
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Thank you for reaching out. I will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 py-3.5 font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-500/25"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
