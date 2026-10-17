// src/components/Skills.tsx
"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend & Architecture",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    category: "CMS & Data",
    skills: ["Strapi", "Elasticsearch", "REST APIs", "GraphQL"],
  },
  {
    category: "Performance & SEO",
    skills: [
      "Core Web Vitals",
      "SEO Optimization",
      "GA4",
      "GTM",
      "Lighthouse Auditing",
    ],
  },
  {
    category: "Cloud, CDN & DevOps",
    skills: ["Cloudflare", "Azure", "Vercel", "Git / GitHub", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Skills & Tools
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            The modern technology stack and specialized tools I use to engineer
            high-performance web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold px-4 py-2 rounded-xl transition-colors hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950 dark:hover:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
