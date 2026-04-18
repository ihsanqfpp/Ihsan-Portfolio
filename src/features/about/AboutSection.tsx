import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Layers, Code2 } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

const stats = [
  { value: "7+", label: "Projects Shipped" },
  { value: "10+", label: "Technologies" },
  { value: "3", label: "Internships" },
  { value: "3.10", label: "CGPA / 4.0" },
];

const highlights = [
  { icon: Zap, title: "Fast & Responsive", desc: "Mobile-first, responsive designs with optimized load times using React, Vite, and Tailwind CSS." },
  { icon: Shield, title: "Full Stack Capable", desc: "End-to-end development with MongoDB, Express, React & Node.js — from database to deployment." },
  { icon: Layers, title: "API Integration", desc: "Experienced in consuming and building RESTful APIs, third-party integrations, and data-driven UIs." },
  { icon: Code2, title: "Clean & Scalable Code", desc: "Component-driven architecture, reusable patterns, and version-controlled workflows with Git." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-neon-blue text-sm font-medium tracking-widest uppercase mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Why Work <span className="gradient-text">With Me</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-12">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/5 lg:sticky lg:top-24"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glass p-1.5 rounded-2xl border border-neon-blue/10 overflow-hidden shadow-2xl shadow-neon-blue/5">
                <ImageWithFallback
                  src="/Image/Ihsan_img-Black.png"
                  alt="Ihsan Ullah - About Me"
                  className="w-full h-[250px] md:h-[320px] lg:h-[380px] object-cover object-[center_20%] rounded-xl hover:scale-105 transition-transform duration-500"
                  containerClassName="w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content & Stats */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-heading font-bold mb-4 gradient-text">Modern Solutions for Complex Problems</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a MERN Stack Developer and BS Software Engineering graduate from Islamia College University, Peshawar.
                With hands-on experience across three professional internships — from frontend development at Software Synergy Solutions
                and Apexify Technologies to full-stack work at CDGAI (Cecos Innovation) — I build real-world, production-ready web applications.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I've shipped 7+ projects including recipe platforms, country explorers, food delivery apps, and company websites
                using React, Node.js, Express, and MongoDB. My approach: understand the problem first, then engineer clean,
                scalable solutions that deliver results.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-neon-blue font-medium hover:text-neon-purple hover:underline underline-offset-4 transition-all"
              >
                Let's build something together →
              </a>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass rounded-xl p-5 text-center neon-glow-hover transition-all duration-300 cursor-default border border-neon-blue/10"
                >
                  <div className="text-2xl md:text-3xl font-heading font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="glass rounded-xl p-6 group hover:neon-glow transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
