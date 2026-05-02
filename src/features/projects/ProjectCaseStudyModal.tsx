import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Target, Lightbulb, Code2, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";

type ProjectCaseStudyModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

const ProjectCaseStudyModal = ({ project, isOpen, onClose }: ProjectCaseStudyModalProps) => {
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
            className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-[50%] top-[50%] z-[101] w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] p-4 md:p-6"
          >
            <div className="bg-slate-900 border border-white/10 rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar">
              {/* Header Image Area */}
              <div className="relative h-48 md:h-72 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <button
                  onClick={onClose}
                  className="absolute right-6 top-6 z-20 p-2 rounded-full bg-slate-950/50 border border-white/10 text-white hover:bg-emerald-500 transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-8 left-8 z-20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                      Case Study
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-12">
                  {/* Left Column: Details */}
                  <div className="md:col-span-2 space-y-12">
                    <section>
                      <div className="flex items-center gap-3 mb-4 text-emerald-400">
                        <Target size={24} />
                        <h3 className="text-xl font-heading font-bold text-white">The Challenge</h3>
                      </div>
                      <p className="text-slate-400 leading-relaxed text-lg">
                        {project.caseStudy.problem}
                      </p>
                    </section>

                    <section>
                      <div className="flex items-center gap-3 mb-4 text-blue-400">
                        <Lightbulb size={24} />
                        <h3 className="text-xl font-heading font-bold text-white">The Solution</h3>
                      </div>
                      <p className="text-slate-400 leading-relaxed text-lg">
                        {project.caseStudy.solution}
                      </p>
                    </section>

                    <section>
                      <div className="flex items-center gap-3 mb-6 text-emerald-400">
                        <Code2 size={24} />
                        <h3 className="text-xl font-heading font-bold text-white">Implementation Strategy</h3>
                      </div>
                      <div className="grid gap-4">
                        {project.caseStudy.implementation.map((step, idx) => (
                          <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-emerald-500/30 transition-colors">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-sm font-bold">
                              {idx + 1}
                            </div>
                            <p className="text-slate-300 text-base leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  {/* Right Column: Meta & Results */}
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-3 py-1.5 rounded-lg bg-slate-800 border border-white/5 text-slate-300 text-xs font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Role</h4>
                      <p className="text-slate-200 font-medium">{project.role}</p>
                    </div>

                    <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10">
                      <div className="flex items-center gap-3 mb-4 text-emerald-400">
                        <Trophy size={20} />
                        <h4 className="text-sm font-bold uppercase tracking-wider">The Result</h4>
                      </div>
                      <p className="text-slate-300 text-base leading-relaxed italic">
                        "{project.caseStudy.result}"
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-emerald-400">
                        <CheckCircle2 size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">{project.impact}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          className="w-full py-4 px-6 rounded-2xl bg-emerald-500 text-slate-950 font-bold text-center hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
                        >
                          Live Demo
                          <ArrowRight size={18} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          className="w-full py-4 px-6 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-center hover:bg-white/10 transition-all"
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Simple Arrow icon for the CTA
const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

export default ProjectCaseStudyModal;
