import { memo } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const Footer = memo(() => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 px-6" role="contentinfo">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-4">
            <a 
              href={siteConfig.socials.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
            >
              <Github size={20} />
            </a>
            <a 
              href={siteConfig.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={`mailto:${siteConfig.email}`}
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              © {new Date().getFullYear()} Ihsan Ullah. Built with MERN Stack Principles.
            </p>
            <div className="flex gap-4 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
              <span className="text-emerald-500/30 font-bold">Pakistan</span>
              <span>Remote Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
