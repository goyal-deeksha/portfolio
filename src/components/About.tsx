// src/components/About.tsx
"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "Strapi",
  "SEO Optimization",
  "Performance Tuning",
  "Tailwind CSS",
  "JavaScript / TypeScript",
  "Core Web Vitals",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center sm:text-left"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto sm:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed"
          >
            <p>
              I am a dedicated Next.js Developer with a deep-rooted passion for
              building exceptionally fast, scalable, and highly optimized web
              applications. Over the years, my journey has been driven by
              solving complex architectural challenges and ensuring digital
              products deliver seamless user experiences.
            </p>
            <p>
              Beyond raw code, I specialize in technical SEO and Core Web Vitals
              optimization. I believe that a brilliant application means little
              if users cannot find it or experience lag. By bridging the gap
              between high-performance frontend engineering and search engine
              visibility, I help brands scale their web presence effectively.
            </p>
            <p>
              Whether it is structuring headless CMS architectures with Strapi
              or refining component re-renders in React, I focus on building
              sustainable solutions that drive business metrics and user
              satisfaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 space-y-4"
          >
            <h3 className="font-semibold text-xl text-slate-900 dark:text-white">
              Core Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium px-3 py-1.5 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
