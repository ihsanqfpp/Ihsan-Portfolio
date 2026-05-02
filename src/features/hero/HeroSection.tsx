import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import SocialIcons from "@/components/layout/SocialIcons";
import { siteConfig } from "@/data/site-config";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" aria-label="Hero">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 mesh-gradient opacity-40 animate-mesh-move" />
      
      {/* Decorative Blur Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to Remote Full Stack Roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[1.1] tracking-tight"
            >
              MERN Stack <br />
              <span className="gradient-text">Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              I build scalable, performant full-stack applications with clean UI systems and production-grade backend architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start items-center mb-10"
            >
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)]"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                Contact Me
                <Mail size={18} />
              </a>
              <a
                href={siteConfig.socials.cv}
                download="IhsanU_CV.pdf"
                className="px-8 py-4 rounded-full text-slate-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <SocialIcons />
            </motion.div>
          </div>

          {/* Right Side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative lg:w-[450px] lg:h-[450px]"
          >
            {/* Visual background elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-full rotate-6 scale-95 blur-2xl" />
            
            <div className="relative z-10 w-full h-full glass-card rounded-full p-4 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />
              <Avatar className="w-full h-full rounded-full border border-white/10">
                <AvatarImage
                  src="/Image/Ihsan_img-Black.png"
                  alt="Ihsan Ullah"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <AvatarFallback className="text-8xl font-heading font-bold bg-slate-900 text-emerald-500">
                  IU
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Floating Achievement Card (SaaS signal) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:-right-10 glass p-4 rounded-2xl border border-white/10 shadow-2xl max-w-[180px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <span className="text-sm font-bold">3+</span>
                </div>
                <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Internships</span>
              </div>
              <p className="text-[10px] text-slate-400">Real-world experience at top tech firms.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
