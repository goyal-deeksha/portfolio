// src/components/CaseStudies.tsx
"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    title:
      "Improved Core Web Vitals and SEO Health for a Large Vehicle Listing Platform",
    description:
      "Resolved critical technical SEO issues and performance bottlenecks across thousands of dynamic vehicle listing pages.",
    problem:
      "Pages missing canonical URLs causing duplicate content penalties, breadcrumb schema lacking JSON-LD for Google, unoptimized images failing LCP, missing or incorrect H1 tags, invalid slug pages triggering soft 404s by redirecting to the homepage, and failing mobile Core Web Vitals (CLS and LCP).",
    action:
      "Implemented canonical URLs via generateMetadata, built dynamic breadcrumbs with JSON-LD schema for rich results, integrated Sharp for automatic WebP/AVIF conversions to boost LCP, standardized H1 hierarchies, replaced homepage redirects with proper notFound() implementations and fallback suggestions, and fixed mobile layout shifts with explicit image dimensions.",
    result:
      "Pages became eligible for rich results in Google Search, mobile Core Web Vitals scores improved drastically, duplicate content issues were resolved, and crawl budget was optimized for correct indexing.",
    tags: [
      "Next.js",
      "Strapi CMS",
      "Sharp",
      "JSON-LD",
      "Google Search Console",
      "Lighthouse",
      "PageSpeed Insights",
    ],
  },
  {
    title:
      "Reduced CDN and Server Costs by Fixing Image Caching and Format Issues",
    description:
      "Diagnosed and resolved CDN cache misses to drastically lower Azure Blob Storage calls and bandwidth usage.",
    problem:
      "Images were bypassing Cloudflare cache entirely because of an empty width parameter in CDN URLs, causing every request to hit Azure Blob Storage directly. Additionally, all images were served as oversized JPEGs.",
    action:
      "Fixed CDN URL generation logic to consistently pass explicit width, format, and quality parameters. Worked with the team to enable WebP and AVIF formats at upload time, ensuring Cloudflare could successfully cache and serve optimized assets.",
    result:
      "Cloudflare cache hit rates skyrocketed, Azure Blob Storage calls dropped massively, bandwidth consumption and infrastructure costs decreased noticeably, and page load speeds accelerated.",
    tags: ["Next.js", "Cloudflare CDN", "Azure Blob Storage", "WebP", "AVIF"],
  },
  {
    title:
      "Implemented UTM Tracking to Connect Marketing Campaigns Directly to Leads",
    description:
      "Engineered a native attribution pipeline using Next.js hooks to track campaign ROI without third-party bloat.",
    problem:
      "Contact forms captured generic lead data (name, email, phone, message) with zero source information, leaving the marketing team spending budget blindly because all UTM parameter data was being lost.",
    action:
      "Captured UTM parameters using Next.js useSearchParams, stored them securely in browser cookies with a 30-day expiration for cross-page persistence, appended UTM payloads to form submissions and email notifications, and handled edge cases to preserve original campaign attribution.",
    result:
      "Every incoming lead now carries complete source, medium, and campaign attribution data, empowering the marketing team to optimize ad spend based on real conversion performance using a pure Next.js solution.",
    tags: ["Next.js App Router", "useSearchParams", "Cookie API", "REST API"],
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-24 px-6 bg-white dark:bg-slate-950"
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
            Featured Case Studies
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Real-world engineering challenges solved through scalable
            architecture, performance tuning, and technical SEO.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {study.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="space-y-1">
                    <span className="text-xs font-bold tracking-wider text-red-600 dark:text-red-400 uppercase">
                      The Problem
                    </span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                      What I Did
                    </span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {study.action}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-bold tracking-wider text-green-600 dark:text-green-400 uppercase">
                      The Result
                    </span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
