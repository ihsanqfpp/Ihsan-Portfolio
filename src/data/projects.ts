export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live?: string;
  github?: string;
  category: "frontend" | "fullstack";
  role: string;
  impact: string;
  caseStudy: {
    problem: string;
    solution: string;
    implementation: string[];
    result: string;
  };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Learning Management System (LMS)",
    description: "A production-grade LMS featuring role-based access control, automated grading, and comprehensive analytics.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&q=80&w=800&fit=crop",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    live: "https://learn-ace-forms-main-main.vercel.app",
    github: "https://github.com/ihsanqfpp/Cecos-LMS.git",
    category: "fullstack",
    role: "Lead MERN Stack Developer",
    impact: "Built 20+ REST APIs",
    featured: true,
    caseStudy: {
      problem: "Lack of granular RBAC and automated assessment pipelines in standard platforms.",
      solution: "Engineered a MERN solution with strict RBAC and custom assessment engine.",
      implementation: [
        "Secure authentication using JWT and HTTP-only cookies.",
        "Scalable REST API architecture with 20+ endpoints.",
        "Reusable React component library with shadcn/ui.",
        "Optimized MongoDB queries for student tracking."
      ],
      result: "Streamlined course management for 3 distinct user roles."
    }
  },
  {
    title: "Jsonz Solution",
    description: "A professional corporate platform for IT solutions, focusing on service delivery and client engagement.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&q=80&w=800&fit=crop",
    tech: ["React", "Tailwind CSS", "Vite", "EmailJS"],
    live: "https://jsons-project.vercel.app",
    github: "https://github.com/ihsanqfpp/jsons-project.git",
    category: "frontend",
    role: "Lead Frontend Developer",
    impact: "B2B Service Platform",
    featured: true,
    caseStudy: {
      problem: "Need for a high-performance, modern web presence for an IT services provider.",
      solution: "Developed a sleek, responsive landing page with integrated contact systems and service showcases.",
      implementation: [
        "Designed and built with React and Tailwind CSS for rapid styling.",
        "Implemented a smooth, accessible navigation system.",
        "Integrated EmailJS for lead capture and client communication.",
        "Optimized for SEO and performance scoring."
      ],
      result: "Launched a professional web presence that increased client inquiries."
    }
  },
  {
    title: "FoodiePK",
    description: "A feature-rich food recipe platform with external API integration and community features.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&q=80&w=800&fit=crop",
    tech: ["React", "Firebase", "REST API", "Framer Motion"],
    live: "https://fyp-project-rouge.vercel.app",
    github: "https://github.com/ihsanqfpp/FYP_Project.git",
    category: "fullstack",
    role: "Frontend Lead",
    impact: "15K+ Recipes Available",
    caseStudy: {
      problem: "Users lacked a centralized platform for authentic localized recipe discovery.",
      solution: "Developed a comprehensive platform using React and Firebase, integrating TheMealDB API.",
      implementation: [
        "Integrated external REST APIs with robust error handling.",
        "Real-time data persistence with Firebase.",
        "Premium micro-interactions using Framer Motion.",
        "WhatsApp community channel integration."
      ],
      result: "Launched platform hosting 15,000+ recipes."
    }
  },
  {
    title: "HRMS Frontend",
    description: "A comprehensive Human Resource Management System frontend interface for managing employee data and organizational workflows.",
    image: "/Image/HRMS.png",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://hrms-frontend-one-plum.vercel.app",
    github: "https://github.com/simpwae/HRMS_frontend.git",
    category: "frontend",
    role: "Frontend Developer",
    impact: "Streamlined HR operations",
    caseStudy: {
      problem: "Organizations needed an intuitive interface to handle complex HR tasks seamlessly.",
      solution: "Developed a responsive, feature-rich HRMS dashboard for better data management.",
      implementation: [
        "Built a modular component architecture.",
        "Integrated complex forms and data validation.",
        "Implemented secure routing and access control UI.",
        "Optimized layout for both desktop and mobile users."
      ],
      result: "Delivered a scalable frontend architecture that enhances user productivity."
    }
  },
  {
    title: "CDGAI Spin Wheel",
    description: "An interactive, gamified spin-wheel application designed to boost user engagement and retention.",
    image: "/Image/spin-wheel.png",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://cdgai-spin-wheel.vercel.app",
    github: "https://github.com/simpwae/cdgai_spinWheel.git",
    category: "frontend",
    role: "Frontend Developer",
    impact: "Gamified user experience",
    caseStudy: {
      problem: "Client required a highly engaging, interactive component for marketing campaigns.",
      solution: "Built a visually appealing spin wheel with smooth animations and dynamic rewards.",
      implementation: [
        "Developed custom physics-based animations.",
        "Integrated dynamic reward configuration.",
        "Ensured responsive design across all devices.",
        "Optimized animation performance for mobile browsers."
      ],
      result: "Created a reusable, highly engaging marketing tool that increased conversion rates."
    }
  },
  {
    title: "FoodFlow - Food Delivery",
    description: "A gourmet-themed food delivery system with streamlined ordering and multi-cuisine restaurants.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&q=80&w=800&fit=crop",
    tech: ["React", "Node.js", "Express.js"],
    live: "https://frontend-nine-azure-59.vercel.app",
    github: "https://github.com/ihsanqfpp/Food-Delivery",
    category: "fullstack",
    role: "Full Stack Developer",
    impact: "Gourmet Ordering System",
    caseStudy: {
      problem: "Standard apps prioritize quantity; needed a premium discovery-focused platform.",
      solution: "Built a boutique delivery platform focusing on visual storytelling.",
      implementation: [
        "Custom theme for premium menu presentation.",
        "Modular backend to handle restaurant menus.",
        "Optimized image delivery for performance.",
        "Streamlined 3-step checkout flow."
      ],
      result: "Production-ready interface prioritizing discovery and speed."
    }
  },
  {
    title: "Global Explorer",
    description: "An advanced data visualization tool for global country metrics with real-time filtering.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&q=80&w=800&fit=crop",
    tech: ["React", "REST Countries API", "Tailwind"],
    live: "https://country-app-react-zeta.vercel.app",
    github: "https://github.com/ihsanqfpp/CountryApp-react",
    category: "frontend",
    role: "Frontend Developer",
    impact: "250+ Countries Indexed",
    caseStudy: {
      problem: "Visualizing complex geographical data performantly on mobile.",
      solution: "Built a React application with optimized state and debounced search.",
      implementation: [
        "Custom hooks for efficient API fetching and caching.",
        "Highly responsive Tailwind CSS grid system.",
        "Dark mode with system preference detection.",
        "Optimized rendering with React.memo."
      ],
      result: "Sub-100ms search results across 250+ countries."
    }
  }
];
