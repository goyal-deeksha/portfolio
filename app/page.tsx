// src/app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import LinkedInContent from "@/components/LinkedInContent";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Hero />
      <About />
      <CaseStudies />
      <Skills />
      <LinkedInContent />
      <Contact />
    </main>
  );
}
