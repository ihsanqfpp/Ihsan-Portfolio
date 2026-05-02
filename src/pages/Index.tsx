import { lazy, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/features/hero/HeroSection";

const AboutSection = lazy(() => import("@/features/about/AboutSection"));
const TechStackSection = lazy(() => import("@/features/tech-stack/TechStackSection"));
const ProjectsSection = lazy(() => import("@/features/projects/ProjectsSection"));
const ExperienceSection = lazy(() => import("@/features/experience/ExperienceSection"));
const EducationSection = lazy(() => import("@/features/education/EducationSection"));
const ContactSection = lazy(() => import("@/features/contact/ContactSection"));
const Footer = lazy(() => import("@/components/layout/Footer"));

const SectionFallback = () => (
  <div className="section-padding flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
  </div>
);

const Index = () => (
  <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-6 focus:py-3 focus:rounded-full focus:bg-emerald-500 focus:text-slate-950 focus:font-bold focus:outline-none transition-all"
    >
      Skip to main content
    </a>
    <Navbar />
    <main id="main-content">
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TechStackSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <EducationSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ContactSection />
      </Suspense>
    </main>
    <Suspense fallback={<SectionFallback />}>
      <Footer />
    </Suspense>
  </div>
);

export default Index;
