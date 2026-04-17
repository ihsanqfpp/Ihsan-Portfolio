import { memo } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const Footer = memo(() => (
  <footer className="border-t border-border/30 py-8 px-4" role="contentinfo">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex flex-col items-center md:items-start gap-1">
        <p className="text-sm font-heading font-semibold gradient-text">{siteConfig.name}</p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved. Built with React & Tailwind CSS.
        </p>
      </div>
      <div className="flex gap-4">
        <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
          className="text-muted-foreground hover:text-foreground transition-colors">
          <Github size={20} />
        </a>
        <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
          className="text-muted-foreground hover:text-foreground transition-colors">
          <Linkedin size={20} />
        </a>
        <a href={`mailto:${siteConfig.email}`} aria-label="Email"
          className="text-muted-foreground hover:text-foreground transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
));

Footer.displayName = "Footer";

export default Footer;
