import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { siteConfig } from "@/data/site-config";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address"),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type FormData = z.infer<typeof contactSchema>;
type FormStatus = "idle" | "sending" | "success" | "error";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = useCallback(async (data: FormData) => {
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      reset();
      toast.success("Message sent! I'll get back to you soon.");
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      setStatus("error");
      toast.error("Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }, [reset]);

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs mb-3">
              <Mail size={14} />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
              Let's build something <br />
              <span className="gradient-text">impactful</span> together.
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Whether you have a specific project in mind or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-4">
              <a 
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 group p-3 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all max-w-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Email Me</p>
                  <p className="text-slate-200 text-sm font-medium">{siteConfig.email}</p>
                </div>
              </a>

              <div className="flex gap-3">
                <a 
                  href={siteConfig.socials.github}
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                  title="GitHub"
                >
                  <Github size={18} />
                </a>
                <a 
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-[#25D366] hover:border-[#25D366]/30 transition-all"
                  title="WhatsApp"
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="premium-card p-6 md:p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Name</label>
                <input
                  {...register("name")}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/5 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all text-sm"
                  placeholder=""
                />
                {errors.name && <p className="text-rose-500 text-[10px] font-bold uppercase tracking-wider mt-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
                <input
                  {...register("email")}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/5 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all text-sm"
                  placeholder=""
                />
                {errors.email && <p className="text-rose-500 text-[10px] font-bold uppercase tracking-wider mt-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  {...register("message")}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/5 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all resize-none text-sm"
                  placeholder=""
                />
                {errors.message && <p className="text-rose-500 text-[10px] font-bold uppercase tracking-wider mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] disabled:opacity-50 text-sm uppercase tracking-widest"
              >
                {status === "sending" ? (
                  <span className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
