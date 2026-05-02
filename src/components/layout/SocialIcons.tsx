import { memo } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: siteConfig.socials.linkedin,
    color: "hover:text-[#0A66C2]",
    label: "LinkedIn Profile"
  },
  {
    name: "GitHub",
    icon: Github,
    href: siteConfig.socials.github,
    color: "hover:text-[#ffffff]",
    label: "GitHub Profile"
  },
  {
    name: "Email",
    icon: Mail,
    href: `mailto:${siteConfig.email}`,
    color: "hover:text-[#EA4335]",
    label: "Send Email"
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: siteConfig.socials.whatsapp,
    color: "hover:text-[#25D366]",
    label: "Chat on WhatsApp"
  },
];

const SocialIcons = memo(({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map(({ name, icon: Icon, href, color, label }) => (
        <motion.a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/10 ${color}`}
        >
          <Icon size={20} />
        </motion.a>
      ))}
    </div>
  );
});

SocialIcons.displayName = "SocialIcons";

export default SocialIcons;
