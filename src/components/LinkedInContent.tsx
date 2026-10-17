// src/components/LinkedInContent.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    title: "Why AI Won't Make Developers Lazy (How I Fixed My Own Dependency)",
    snippet: `"Everyone is pointing out that AI is making developers stop thinking. I was guilty of this myself. Here's what I actually did to fix it." A deep dive into building systems that keep engineering critical thinking sharp alongside AI assistance.`,
    date: "Recent Video",
    link: "https://lnkd.in/p/dAihjePi",
  },
  {
    title: "Technical SEO Strategies Every Next.js Developer Should Know",
    snippet:
      "Dynamic metadata generation, proper JSON-LD schemas, and handling canonical tags correctly can instantly amplify your search crawlability. Stop treating SEO as an afterthought.",
    date: "Recent Video",
    link: "https://lnkd.in/p/dvVqy5qW",
  },
  {
    title:
      "The Hidden Danger of Broken GA4 & GTM Tracking (What Our Audit Revealed)",
    snippet:
      "Tracking breaks silently after website updates or CMS changes. An expert audit of our GTM and GA4 setup uncovered misfiring tags, missing events, and duplicate tracking causing double-counted conversions.",
    date: "Recent Post",
    link: "https://lnkd.in/p/dSErZM7v",
  },
];

export default function LinkedInContent() {
  return (
    <section id="linkedin" className="py-24 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Thought Leadership & LinkedIn
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Sharing insights, performance engineering case breakdowns, and
            technical learnings consistently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900/60 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full">
                    LinkedIn
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {post.snippet}
                </p>
              </div>

              <Link
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Read on LinkedIn &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
