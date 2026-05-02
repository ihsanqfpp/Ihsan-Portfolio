import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/experiences";
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-slate-950/50" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-2 text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs mb-3">
            <Briefcase size={14} />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight">
            Building at <span className="gradient-text">Scale.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="premium-card group flex flex-col h-full !p-0 overflow-hidden"
            >
              <div className="p-5 md:p-6 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight">{exp.company}</h3>
                    <p className="text-emerald-400 font-bold text-[9px] uppercase tracking-widest mt-1">{exp.role}</p>
                  </div>
                  {exp.impact && (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px] font-bold uppercase tracking-widest">
                      <TrendingUp size={10} />
                      {exp.impact}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1 text-slate-500 text-[9px] font-bold uppercase tracking-widest">
                    <Calendar size={10} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 text-[9px] font-bold uppercase tracking-widest">
                    <MapPin size={10} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Contributions */}
                <ul className="space-y-2 mb-4 flex-1">
                  {exp.description.slice(0, 2).map((item, i) => (
                    <li key={i} className="flex gap-2 group/item">
                      <div className="mt-1 flex-shrink-0 w-3.5 h-3.5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                        <CheckCircle2 size={8} />
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-2 italic">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Tech Footer */}
                <div className="pt-3 border-t border-white/5">
                  <div className="flex flex-wrap gap-1">
                    {exp.skills.slice(0, 4).map((skill) => (
                      <span key={skill} className="px-1.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-slate-500 text-[8px] font-bold uppercase tracking-wider">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
