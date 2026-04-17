import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/data/testimonials";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } as const },
};

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-purple/5 blur-[100px]" />
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-neon-purple text-sm font-medium tracking-widest uppercase mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Hear from my <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I pride myself on delivering excellent results, but don't just take my word for it.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="glass-strong rounded-xl p-5 relative flex flex-col h-full group"
            >
              <Quote className="absolute right-5 top-5 h-10 w-10 text-glass-border/40 group-hover:text-neon-purple/20 transition-colors" />
              
              <div className="flex-1 mb-4 mt-2 relative z-10">
                <p className="text-muted-foreground leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <Avatar className="h-12 w-12 border-2 border-neon-purple/30">
                  <AvatarImage src={t.avatar} alt={t.name} />
                  <AvatarFallback className="bg-gradient-to-br from-neon-purple to-neon-blue text-white">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-heading font-semibold text-foreground group-hover:text-neon-purple transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
