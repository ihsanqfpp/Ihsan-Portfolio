import { memo } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";
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
    color: "hover:text-[#171515]",
    label: "GitHub Profile"
  },
  {
    name: "Email",
    icon: Mail,
    href: `https://mail.google.com/mail/?view=cm&to=${siteConfig.email}`,
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
  const handleClick = (name: string) => {
    toast.success(`Opening ${name}...`, {
      style: {
        background: "rgba(0, 0, 0, 0.8)",
        color: "#fff",
        borderColor: "rgba(0, 240, 255, 0.2)",
      },
    });
  };

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map(({ name, icon: Icon, href, color, label }) => (
        <motion.a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          onClick={() => handleClick(name)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground transition-all duration-300 border border-white/5 hover:border-neon-blue/20 cursor-pointer ${color}`}
        >
          <Icon size={22} />
        </motion.a>
      ))}
    </div>
  );
});

SocialIcons.displayName = "SocialIcons";

export default SocialIcons;
