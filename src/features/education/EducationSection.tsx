import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, School, Star } from "lucide-react";
import { education } from "@/data/education";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[100px]" />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-10"
        >
          <div className="flex items-center gap-2 text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs mb-4">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
            Education <span className="gradient-text">& Foundation.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="premium-card group !p-6 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-500 mb-6">
                <School size={24} />
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-lg font-heading font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">{edu.degree}</h3>
                  <p className="text-slate-400 text-xs font-medium mt-1">{edu.institution}</p>
                </div>
                
                <div className="mt-auto space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{edu.period}</span>
                    <div className="flex items-center gap-1 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                      <Star size={10} />
                      <span>{edu.grade}</span>
                    </div>
                  </div>
                  
                  {edu.highlight && (
                    <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-blue-400">
                      <Award size={14} />
                      <span className="text-[9px] font-bold uppercase tracking-wider">{edu.highlight}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
