import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { techStack } from "@/data/skills";

const filters = ["all", "frontend", "backend", "tools"] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<string>("all");

  const filtered = useMemo(
    () => (filter === "all" ? techStack : techStack.filter((t) => t.category === filter)),
    [filter]
  );

  return (
    <section id="tech" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-neon-blue text-sm font-medium tracking-widest uppercase mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {filtered.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                layout
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass rounded-xl p-3 text-center group cursor-default neon-glow-hover transition-shadow duration-300 flex flex-col items-center gap-2"
              >
                <div className={`text-xl group-hover:scale-110 transition-transform duration-300 ${tech.colorClass}`}>
                  <Icon />
                </div>
                <p className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                  {tech.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
