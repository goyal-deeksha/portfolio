// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl space-y-6"
      >
        <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          Available for Opportunities
        </span>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-slate-900 dark:text-white">
          Hi, I&apos;m{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Deeksha Bansal
          </span>
        </h1>

        <p className="text-xl font-medium text-slate-700 sm:text-2xl dark:text-slate-300">
          Next.js Developer specialising in SEO and Performance
        </p>

        <p className="mx-auto max-w-xl text-base text-slate-600 dark:text-slate-400">
          Building fast, accessible, and high-ranking web applications that
          convert visitors into users.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="#case-studies"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-500/25"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 transition-all hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
