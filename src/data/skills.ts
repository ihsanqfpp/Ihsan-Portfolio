import { IconType } from "react-icons";
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt, FaFigma, FaGithub, FaPython
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, 
  SiFirebase, SiPostman, SiVercel, SiRedux, SiSupabase, SiMui, SiBootstrap, SiJavascript
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export type TechItem = { 
  name: string; 
  category: "frontend" | "backend" | "tools" | "learning";
  icon: IconType;
  colorClass: string;
};

export const techStack: TechItem[] = [
  // Frontend
  { name: "HTML5", category: "frontend", icon: FaHtml5, colorClass: "text-[#E34F26]" },
  { name: "CSS3", category: "frontend", icon: FaCss3Alt, colorClass: "text-[#1572B6]" },
  { name: "Bootstrap", category: "frontend", icon: SiBootstrap, colorClass: "text-[#7952B3]" },
  { name: "JavaScript", category: "frontend", icon: SiJavascript, colorClass: "text-[#F7DF1E]" },
  { name: "ECMAScript", category: "frontend", icon: SiJavascript, colorClass: "text-[#F7DF1E]" },
  { name: "TypeScript", category: "frontend", icon: SiTypescript, colorClass: "text-[#3178C6]" },
  { name: "React", category: "frontend", icon: FaReact, colorClass: "text-[#61DAFB]" },
  { name: "Redux Toolkit", category: "frontend", icon: SiRedux, colorClass: "text-[#764ABC]" },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss, colorClass: "text-[#06B6D4]" },
  { name: "Material UI", category: "frontend", icon: SiMui, colorClass: "text-[#007FFF]" },
  
  // Backend
  { name: "Node.js", category: "backend", icon: FaNodeJs, colorClass: "text-[#339933]" },
  { name: "Express.js", category: "backend", icon: SiExpress, colorClass: "text-white" },
  { name: "REST API & JWT", category: "backend", icon: TbApi, colorClass: "text-emerald-400" },
  { name: "MongoDB", category: "backend", icon: SiMongodb, colorClass: "text-[#47A248]" },
  { name: "Supabase", category: "backend", icon: SiSupabase, colorClass: "text-[#3ECF8E]" },
  
  // Tools
  { name: "Git", category: "tools", icon: FaGitAlt, colorClass: "text-[#F05032]" },
  { name: "GitHub", category: "tools", icon: FaGithub, colorClass: "text-white" },
  { name: "Firebase", category: "tools", icon: SiFirebase, colorClass: "text-[#FFCA28]" },
  { name: "Postman", category: "tools", icon: SiPostman, colorClass: "text-[#FF6C37]" },
  { name: "Vercel", category: "tools", icon: SiVercel, colorClass: "text-white" },
  { name: "Docker", category: "tools", icon: FaDocker, colorClass: "text-[#2496ED]" },

  // Learning
  { name: "Next.js", category: "learning", icon: SiNextdotjs, colorClass: "text-white" },
  { name: "Python", category: "learning", icon: FaPython, colorClass: "text-[#3776AB]" },
];
