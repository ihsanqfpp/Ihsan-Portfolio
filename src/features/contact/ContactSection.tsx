import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name too long")
    .regex(/^[^<>{}]*$/, "Invalid characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message too long")
    .regex(/^[^<>]*$/, "Invalid characters"),
});

type FormData = z.infer<typeof contactSchema>;
type FormStatus = "idle" | "sending" | "success" | "error";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const lastSubmitRef = useRef(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = useCallback(async (data: FormData) => {
    // Rate-limit: require 5 s between submissions
    const now = Date.now();
    if (now - lastSubmitRef.current < 5000) {
      toast.info("Please wait a moment before sending again.");
      return;
    }
    lastSubmitRef.current = now;
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
      toast.success("Message sent successfully!");
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      toast.error("Failed to send message. Please try again later.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }, [reset]);

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-neon-blue text-sm font-medium tracking-widest uppercase mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="glass-strong rounded-2xl p-6 md:p-8 space-y-6"
          noValidate
        >
          <div className="relative">
            <label htmlFor="contact-name" className="sr-only">Your Name</label>
            <input
              id="contact-name"
              type="text"
              {...register("name")}
              placeholder="Your Name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-err" : undefined}
              className={`w-full px-4 py-3 rounded-xl bg-background/50 border ${
                errors.name ? "border-destructive" : "border-glass-border/30"
              } text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/20 transition-all`}
            />
            {errors.name && (
              <p id="name-err" className="text-destructive text-xs mt-1 flex items-center gap-1" role="alert">
                <AlertCircle size={12} /> {errors.name.message}
              </p>
            )}
          </div>

          <div className="relative">
            <label htmlFor="contact-email" className="sr-only">Your Email</label>
            <input
              id="contact-email"
              type="email"
              {...register("email")}
              placeholder="Your Email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-err" : undefined}
              className={`w-full px-4 py-3 rounded-xl bg-background/50 border ${
                errors.email ? "border-destructive" : "border-glass-border/30"
              } text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/20 transition-all`}
            />
            {errors.email && (
              <p id="email-err" className="text-destructive text-xs mt-1 flex items-center gap-1" role="alert">
                <AlertCircle size={12} /> {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <label htmlFor="contact-message" className="sr-only">Your Message</label>
            <textarea
              id="contact-message"
              {...register("message")}
              placeholder="Your Message"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "msg-err" : undefined}
              rows={5}
              className={`w-full px-4 py-3 rounded-xl bg-background/50 border ${
                errors.message ? "border-destructive" : "border-glass-border/30"
              } text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/20 transition-all resize-none`}
            />
            {errors.message && (
              <p id="msg-err" className="text-destructive text-xs mt-1 flex items-center gap-1" role="alert">
                <AlertCircle size={12} /> {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            aria-live="polite"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-200 disabled:opacity-50 neon-glow-hover"
          >
            {status === "sending" ? (
              <>
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Sending...
              </>
            ) : status === "success" ? (
              <>
                <CheckCircle size={18} /> Sent Successfully!
              </>
            ) : status === "error" ? (
              <>
                <AlertCircle size={18} /> Error Sending
              </>
            ) : (
              <>
                <Send size={18} /> Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
