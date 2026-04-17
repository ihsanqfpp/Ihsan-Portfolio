export type Experience = {
  id: number;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Software Synergy Solutions",
    role: "Frontend Developer Intern",
    location: "On-site",
    period: "Jul 2024 - Oct 2024",
    description: [
      "Built and maintained responsive web interfaces using React, delivering clean and accessible UI components.",
      "Worked closely with senior engineers to debug, optimize, and ship frontend features for live projects.",
      "Strengthened core skills in Git version control, component-driven architecture, and cross-browser compatibility."
    ],
    skills: ["React", "JavaScript", "CSS", "HTML", "Git"]
  },
  {
    id: 2,
    company: "Apexify Technologies",
    role: "Frontend Developer Intern",
    location: "Lahore (Remote)",
    period: "Dec 2025 - Jan 2026",
    description: [
      "Developed pixel-perfect, responsive user interfaces for client web applications using React and Tailwind CSS.",
      "Integrated REST APIs to deliver dynamic, data-driven frontend experiences with seamless state management.",
      "Participated in daily standups and code reviews, improving code quality and meeting tight sprint deadlines."
    ],
    skills: ["React", "JavaScript", "Tailwind CSS", "CSS", "HTML"]
  },
  {
    id: 3,
    company: "CDGAI (Cecos Innovation)",
    role: "MERN Stack Developer",
    location: "On-site",
    period: "Mar 2025 - Present",
    description: [
      "Designing and developing full-stack web applications using the MERN stack for real-world client projects.",
      "Building scalable RESTful APIs with Express.js and MongoDB, ensuring efficient data flow and security.",
      "Collaborating with UI/UX and backend teams to deliver production-ready features under agile workflows."
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"]
  }
];
