import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import SocialIcons from "@/components/layout/SocialIcons";

const roles = [
  "MERN Stack Developer",
  "React & Node.js Engineer",
  "BS Software Engineering",
  "Open to Opportunities",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 50);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 25);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  // Current full role for screen readers
  const currentRole = roles[roleIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-bg" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3B82F61a_1px,transparent_1px),linear-gradient(to_bottom,#3B82F61a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22C55E]/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight"
            >
              I build{" "}
              <span className="gradient-text">fast, scalable & secure</span>{" "}
              web applications
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-muted-foreground text-base md:text-lg mb-2 max-w-xl mx-auto lg:mx-0"
            >
              Software Engineer with 3 internships &amp; 7+ projects — turning ideas into scalable products
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-8 md:h-10 flex items-center justify-center lg:justify-start mb-8"
            >
              <span className="text-base md:text-xl text-neon-blue font-medium" aria-hidden="true">
                {text}
                <span className="inline-block w-0.5 h-5 bg-neon-blue ml-1 animate-pulse" />
              </span>
              <span className="sr-only">{currentRole}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="#projects"
                className="group px-8 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-primary-foreground font-medium hover:opacity-90 transition-all duration-200 neon-glow-hover flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/Ihsan-CV.pdf"
                download
                className="px-8 py-3 rounded-xl glass border border-neon-blue/30 text-neon-blue font-medium hover:bg-neon-blue/10 hover:border-neon-blue hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-200 text-center"
              >
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex justify-center lg:justify-start"
            >
              <SocialIcons />
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 100 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 rounded-full blur-2xl scale-110" />
              <div className="relative glass rounded-full p-2">
                <div className="rounded-full p-1 bg-gradient-to-r from-neon-blue to-neon-purple">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Avatar className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 hover:scale-105 transition-transform duration-300">
                      <AvatarImage
                        src="/Image/Ihsan_img-Black.png"
                        alt="Ihsan Ullah - MERN Stack Developer"
                        className="object-cover object-[center_20%]"
                      />
                      <AvatarFallback className="text-6xl font-heading font-bold bg-gradient-to-r from-neon-blue to-neon-purple text-primary-foreground">
                        IU
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll to about section" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-neon-blue" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
