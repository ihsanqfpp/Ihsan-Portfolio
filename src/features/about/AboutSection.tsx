import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Layers, Code2, GraduationCap } from "lucide-react";

const stats = [
  { value: "7+", label: "Projects Completed" },
  { value: "3", label: "Industry Internships" },
  { value: "3.10", label: "BS SE CGPA" },
  { value: "20+", label: "REST APIs Built" },
];

const highlights = [
  { 
    icon: Zap, 
    title: "Engineering Mindset", 
    desc: "Building with a focus on performance, scalability, and production-ready architecture." 
  },
  { 
    icon: Shield, 
    title: "Security First", 
    desc: "Implementing secure authentication using JWT, role-based access, and data protection." 
  },
  { 
    icon: Layers, 
    title: "Full Stack Depth", 
    desc: "End-to-end expertise across the MERN stack, from DB design to pixel-perfect UI." 
  },
  { 
    icon: Code2, 
    title: "Clean Architecture", 
    desc: "Writing modular, reusable React components and scalable Express.js structures." 
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-emerald-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-3">
              <GraduationCap size={14} />
              <span>Background</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
              A Software Engineer with <br />
              <span className="gradient-text">Real-World Depth.</span>
            </h2>
            <div className="space-y-4 text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
              <p>
                I'm a MERN Stack Developer driven by the challenge of building scalable digital products. With a BS in Software Engineering, I bridge the gap between theoretical architecture and production reality.
              </p>
              <p>
                My experience across <strong>three professional internships</strong> has taught me how to deliver results in agile environments and architect complex role-based systems.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 group hover:border-emerald-500/30 transition-all duration-300">
                  <div className="text-2xl font-heading font-bold text-white mb-0.5 group-hover:text-emerald-400 transition-colors">{stat.value}</div>
                  <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            {highlights.map((item, i) => (
              <div 
                key={i} 
                className="p-6 rounded-[1.5rem] border border-white/5 bg-slate-900/50 flex flex-col items-start gap-4 transition-all duration-500 hover:bg-slate-900 hover:border-emerald-500/20 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-500">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-3 italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
