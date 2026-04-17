import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/experiences";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-neon-blue text-sm font-medium tracking-widest uppercase mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } as const },
              }}
              whileHover={{ y: -8 }}
              className="glass-strong rounded-xl p-5 relative flex flex-col h-full group"
            >

              <div className="flex-1 mb-4 mt-2">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-1.5 bg-neon-blue/5 px-2.5 py-1 rounded-lg text-[10px] font-bold text-neon-blue uppercase tracking-widest border border-neon-blue/10">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-neon-purple/5 px-2.5 py-1 rounded-lg text-[10px] font-bold text-neon-purple uppercase tracking-widest border border-neon-purple/10">
                    <MapPin size={12} />
                    {exp.location}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {exp.description[0]} {exp.description[1]}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.skills.slice(0, 4).map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded-md bg-neon-blue/10 text-neon-blue text-[10px] font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-glass-border/30">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold text-[10px] shrink-0">
                  {exp.company.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground group-hover:text-neon-blue transition-colors text-sm">
                    {exp.role}
                  </h4>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">
                    {exp.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
