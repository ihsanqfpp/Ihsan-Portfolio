import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Project } from "@/data/projects";

type ProjectCaseStudyModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

const ProjectCaseStudyModal = ({ project, isOpen, onClose }: ProjectCaseStudyModalProps) => {
  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!project || !project.caseStudy) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Case study: ${project.title}`}
            className="fixed left-[50%] top-[50%] z-50 w-full max-w-3xl translate-x-[-50%] translate-y-[-50%] p-4 md:p-0"
          >
            <div className="glass-strong relative max-h-[85vh] w-full overflow-y-auto rounded-2xl shadow-2xl border border-glass-border/30">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full p-2 glass text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="mb-2 inline-block rounded-md bg-neon-blue/20 px-3 py-1 text-xs font-semibold text-neon-blue backdrop-blur-md">
                    {project.category.toUpperCase()}
                  </span>
                  <h2 className="font-heading text-3xl font-bold text-foreground">
                    {project.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-8">
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="text-neon-purple" size={24} />
                    <h3 className="font-heading text-xl font-semibold">The Problem</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="text-neon-blue" size={24} />
                    <h3 className="font-heading text-xl font-semibold">The Solution</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-lg glass text-sm font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Trophy className="text-amber-400" size={24} />
                    <h3 className="font-heading text-xl font-semibold">Key Results</h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {project.caseStudy.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-start gap-3 glass p-4 rounded-xl">
                        <TrendingUp className="text-emerald-400 mt-1 shrink-0" size={18} />
                        <span className="text-sm font-medium text-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectCaseStudyModal;
