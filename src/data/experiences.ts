export type Experience = {
  id: number;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  impact?: string;
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "CDGAI (Cecos Innovation)",
    role: "MERN Stack Intern",
    location: "On-site",
    period: "Mar 2025 - Present",
    impact: "Built full-scale LMS architecture",
    description: [
      "Engineered a production-ready Learning Management System (LMS) with granular role-based access control (RBAC).",
      "Architected and implemented 20+ secure RESTful APIs using Node.js and Express.js, handling complex data flows.",
      "Developed a library of 15+ reusable React components, reducing frontend development time for future features by 40%.",
      "Integrated secure JWT authentication and optimized MongoDB schemas for high-concurrency student environments."
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Redux Toolkit"]
  },
  {
    id: 2,
    company: "Apexify Technologies",
    role: "Frontend Intern",
    location: "Remote",
    period: "Dec 2025 - Jan 2026",
    impact: "Pixel-perfect UI & API Integration",
    description: [
      "Transformed high-fidelity Figma designs into pixel-perfect, responsive React components using Tailwind CSS.",
      "Streamlined data-fetching logic and integrated external REST APIs, ensuring seamless synchronization between backend and frontend.",
      "Collaborated in an agile environment to deliver production-ready UI features ahead of sprint deadlines."
    ],
    skills: ["React", "Tailwind CSS", "JavaScript", "REST APIs", "Framer Motion"]
  },
  {
    id: 3,
    company: "Software Synergy Solutions",
    role: "Frontend Intern",
    location: "On-site",
    period: "Jul 2024 - Oct 2024",
    impact: "30% performance improvement",
    description: [
      "Optimized rendering performance of existing React systems, resulting in a measurable 30% reduction in initial load times.",
      "Developed and maintained accessible, responsive UI systems following modern web standards.",
      "Debugged complex frontend issues and implemented state management solutions to improve user experience."
    ],
    skills: ["React", "JavaScript", "Performance Optimization", "CSS", "Git"]
  }
];
