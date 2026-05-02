import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo, useCallback } from "react";
import { ExternalLink, Github, Layers, Layout, Code2 } from "lucide-react";
import { projects, Project } from "@/data/projects";
import ProjectCaseStudyModal from "./ProjectCaseStudyModal";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

const filters = ["all", "frontend", "fullstack"] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = useMemo(
    () => filter === "all" ? projects : projects.filter((p) => p.category === filter),
    [filter]
  );

  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-10"
        >
          <div className="flex items-center gap-2 text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs mb-3">
            <Layers size={14} />
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex gap-2 mb-10 overflow-x-auto pb-4 no-scrollbar"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-[9px] font-bold transition-all duration-300 whitespace-nowrap border uppercase tracking-widest ${
                filter === f
                  ? "bg-emerald-500 border-emerald-500 text-slate-950"
                  : "bg-slate-900 border-white/10 text-slate-400 hover:border-emerald-500/50 hover:text-emerald-400"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="premium-card group flex flex-col h-full !p-3"
            >
              {/* Project Image/Preview */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4 border border-white/5">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  containerClassName="h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-2 left-2 flex gap-1">
                  {project.tech.slice(0, 2).map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-md border border-white/10 text-[8px] font-bold text-white uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-1 text-emerald-400 text-[8px] font-bold uppercase tracking-widest mb-1">
                      {project.category === "fullstack" ? <Code2 size={10} /> : <Layout size={10} />}
                      <span>{project.category}</span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-400 mb-4 line-clamp-2 text-xs leading-relaxed italic">
                  {project.description}
                </p>

                {/* Footer Actions */}
                <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/5">
                  <div className="px-2 py-0.5 rounded-md bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 text-[8px] font-bold uppercase tracking-wider">
                    {project.impact}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                        title="Source Code"
                      >
                        <Github size={14} />
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                        title="Live Preview"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectCaseStudyModal 
        project={selectedProject} 
        isOpen={selectedProject !== null} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default ProjectsSection;
