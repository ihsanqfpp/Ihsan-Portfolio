import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { techStack } from "@/data/skills";
import { Cpu } from "lucide-react";

const filters = ["all", "frontend", "backend", "tools", "learning"] as const;

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<string>("all");

  const filtered = useMemo(
    () => (filter === "all" ? techStack : techStack.filter((t) => t.category === filter)),
    [filter]
  );

  return (
    <section id="tech" className="section-padding bg-slate-950/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-2 text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs mb-4">
            <Cpu size={14} />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">
            Tools of the <span className="gradient-text">Trade.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            I specialize in the MERN stack but I'm always expanding my horizon with modern tools and performance-oriented technologies.
          </p>
        </motion.div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-3 mb-16">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                filter === f
                  ? "bg-white text-slate-950 border-white"
                  : "bg-transparent border-white/10 text-slate-500 hover:border-emerald-500/50 hover:text-emerald-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {filtered.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-3 group hover:bg-white/10 hover:border-white/10 transition-all duration-300"
              >
                <div className={`text-xl group-hover:scale-110 transition-transform duration-300 ${tech.colorClass}`}>
                  <Icon />
                </div>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-200 transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
