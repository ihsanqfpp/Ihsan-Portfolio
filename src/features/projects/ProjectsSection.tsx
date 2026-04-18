import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo, useCallback } from "react";
import { ExternalLink, Github, TrendingUp, Search } from "lucide-react";
import { projects, Project } from "@/data/projects";
import ProjectCaseStudyModal from "./ProjectCaseStudyModal";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

const filters = ["all", "frontend", "fullstack"] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-neon-blue text-sm font-medium tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Each project is a case study — built to solve real problems with measurable results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 mb-10 flex-wrap"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${
                filter === f
                  ? "bg-gradient-to-r from-neon-blue to-neon-purple text-primary-foreground neon-glow"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 glass rounded-2xl border border-dashed border-neon-blue/20"
          >
            <div className="w-16 h-16 bg-neon-blue/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={32} className="text-neon-blue/40" />
            </div>
            <h3 className="text-xl font-heading font-bold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-6 max-w-xs mx-auto text-sm">
              We couldn't find any projects matching the selected category.
            </p>
            <Button 
              variant="outline" 
              onClick={() => { setFilter("all"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10"
            >
              Reset Filters
            </Button>
          </motion.div>
        ) : (
          <>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                layout
                whileHover={{ y: -8 }}
                className="glass rounded-xl overflow-hidden group flex flex-col"
              >
                <div className="relative h-36 sm:h-40">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    containerClassName="h-full"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-background/80 backdrop-blur-sm text-xs font-medium text-neon-blue flex items-center gap-1">
                    <TrendingUp size={12} />
                    {project.impact}
                  </div>

                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-semibold text-lg group-hover:gradient-text transition-all duration-300">{project.title}</h3>
                  </div>
                  <p className="text-xs text-neon-blue/70 font-medium mb-2">{project.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 rounded-md bg-neon-blue/10 text-neon-blue text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-glass-border/30">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-medium flex items-center gap-1 text-muted-foreground hover:text-neon-blue transition-colors"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-medium flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`GitHub repo of ${project.title}`}
                      >
                        <Github size={14} /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          </>
        )}
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
