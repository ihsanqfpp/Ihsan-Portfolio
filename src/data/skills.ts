import { IconType } from "react-icons";
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt, FaFigma
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, 
  SiPostgresql, SiFirebase, SiPostman, SiVercel, SiRedux, SiVitest
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
  { name: "React", category: "frontend", icon: FaReact, colorClass: "text-[#61DAFB]" },
  { name: "TypeScript", category: "frontend", icon: SiTypescript, colorClass: "text-[#3178C6]" },
  { name: "Redux Toolkit", category: "frontend", icon: SiRedux, colorClass: "text-[#764ABC]" },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss, colorClass: "text-[#06B6D4]" },
  
  // Backend
  { name: "Node.js", category: "backend", icon: FaNodeJs, colorClass: "text-[#339933]" },
  { name: "Express.js", category: "backend", icon: SiExpress, colorClass: "text-white" },
  { name: "MongoDB", category: "backend", icon: SiMongodb, colorClass: "text-[#47A248]" },
  { name: "REST API & JWT", category: "backend", icon: TbApi, colorClass: "text-emerald-400" },
  
  // Tools
  { name: "Git", category: "tools", icon: FaGitAlt, colorClass: "text-[#F05032]" },
  { name: "Postman", category: "tools", icon: SiPostman, colorClass: "text-[#FF6C37]" },
  { name: "Docker", category: "tools", icon: FaDocker, colorClass: "text-[#2496ED]" },
  { name: "Vercel", category: "tools", icon: SiVercel, colorClass: "text-white" },

  // Learning
  { name: "PostgreSQL", category: "learning", icon: SiPostgresql, colorClass: "text-[#4169E1]" },
  { name: "Vitest", category: "learning", icon: SiVitest, colorClass: "text-[#6E9F18]" },
];
