import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, School } from "lucide-react";
import { education } from "@/data/education";

const icons = [GraduationCap, School, School];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-purple/5 blur-[100px]" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-neon-purple text-sm font-medium tracking-widest uppercase mb-2">Education</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A strong foundation in software engineering, built through rigorous academics and hands-on projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-5"
        >
          {education.map((edu, index) => {
            const Icon = icons[index] || BookOpen;
            return (
              <motion.div
                key={edu.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="glass-strong rounded-xl p-5 relative flex flex-col h-full group"
              >
                <div className="w-11 h-11 rounded-lg bg-neon-purple/10 flex items-center justify-center mb-4 group-hover:bg-neon-purple/20 transition-colors">
                  <Icon className="h-5 w-5 text-neon-purple" />
                </div>

                <h3 className="font-heading font-semibold text-lg mb-1 group-hover:text-neon-purple transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{edu.institution}</p>

                <div className="mt-auto space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-neon-blue/10 text-neon-blue text-xs font-medium">
                      {edu.grade}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{edu.period}</p>
                  {edu.highlight && (
                    <div className="flex items-center gap-1.5 mt-2">
                      <Award className="h-4 w-4 text-neon-purple/70" />
                      <span className="text-xs text-neon-purple/80 font-medium">{edu.highlight}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
