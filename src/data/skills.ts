import { IconType } from "react-icons";
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt, FaFigma
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, 
  SiPostgresql, SiFirebase, SiPostman, SiVercel 
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export type TechItem = { 
  name: string; 
  category: "frontend" | "backend" | "tools";
  icon: IconType;
  colorClass: string;
};

export const techStack: TechItem[] = [
  // Frontend — fundamentals first, then frameworks & tools
  { name: "HTML5", category: "frontend", icon: FaHtml5, colorClass: "text-[#E34F26]" },
  { name: "CSS3", category: "frontend", icon: FaCss3Alt, colorClass: "text-[#1572B6]" },
  { name: "TypeScript", category: "frontend", icon: SiTypescript, colorClass: "text-[#3178C6]" },
  { name: "React", category: "frontend", icon: FaReact, colorClass: "text-[#61DAFB]" },
  { name: "Next.js", category: "frontend", icon: SiNextdotjs, colorClass: "text-white" },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss, colorClass: "text-[#06B6D4]" },
  // Backend — runtime first, then frameworks, databases, APIs
  { name: "Node.js", category: "backend", icon: FaNodeJs, colorClass: "text-[#339933]" },
  { name: "Express.js", category: "backend", icon: SiExpress, colorClass: "text-white" },
  { name: "MongoDB", category: "backend", icon: SiMongodb, colorClass: "text-[#47A248]" },
  { name: "PostgreSQL", category: "backend", icon: SiPostgresql, colorClass: "text-[#4169E1]" },
  { name: "REST API", category: "backend", icon: TbApi, colorClass: "text-neon-blue" },
  { name: "Firebase", category: "backend", icon: SiFirebase, colorClass: "text-[#FFCA28]" },
  // Tools — version control first, then dev-env, testing, design, deploy
  { name: "Git", category: "tools", icon: FaGitAlt, colorClass: "text-[#F05032]" },
  { name: "Docker", category: "tools", icon: FaDocker, colorClass: "text-[#2496ED]" },
  { name: "VS Code", category: "tools", icon: VscVscode, colorClass: "text-[#007ACC]" },
  { name: "Postman", category: "tools", icon: SiPostman, colorClass: "text-[#FF6C37]" },
  { name: "Figma", category: "tools", icon: FaFigma, colorClass: "text-[#F24E1E]" },
  { name: "Vercel", category: "tools", icon: SiVercel, colorClass: "text-white" },
];
