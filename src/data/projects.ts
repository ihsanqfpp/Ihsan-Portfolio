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
  caseStudy?: {
    problem: string;
    solution: string;
    metrics: string[];
  };
};

export const projects: Project[] = [
  {
    title: "Jsons Solutionz",
    description: "Professional company website for a software agency specializing in Oracle APEX & Flutter development, showcasing 35+ completed projects including ERP systems, hospital management, and school information systems.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&q=80&w=800&fit=crop",
    tech: ["React", "JavaScript", "CSS", "Vercel"],
    live: "https://jsons-project.vercel.app",
    github: "https://github.com/ihsanqfpp/jsons-project",
    category: "frontend",
    role: "Frontend Developer",
    impact: "35+ projects showcased",
    caseStudy: {
      problem: "The company needed a modern, professional web presence to showcase their diverse portfolio of ERP and management systems to potential clients.",
      solution: "Built a sleek, responsive company website highlighting services, live project demos, technology stack, and client statistics. Integrated smooth animations and a clean visual hierarchy.",
      metrics: [
        "Showcases 7+ live project demos",
        "310+ happy clients highlighted",
        "Fully responsive across all devices",
        "Integrated contact and social media channels"
      ]
    }
  },
  {
    title: "FoodiePK",
    description: "A feature-rich food recipe platform with Afghani sweets collection, popular Pakistani recipes, trending meals from an external API, and WhatsApp channel integration for community engagement.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&q=80&w=800&fit=crop",
    tech: ["React", "API Integration", "CSS", "JavaScript"],
    live: "https://fyp-project-rouge.vercel.app",
    github: "https://github.com/ihsanqfpp/FYP_Project",
    category: "fullstack",
    role: "Full Stack Developer",
    impact: "15K+ recipes available",
    caseStudy: {
      problem: "Users lacked a centralized platform for discovering authentic Pakistani and Afghani recipes with modern features like filtering, ratings, and community engagement.",
      solution: "Developed a comprehensive recipe platform integrating TheMealDB API for trending recipes, curated local recipe collections with YouTube video links, and a WhatsApp community channel for engagement.",
      metrics: [
        "15K+ recipes available across categories",
        "98% user satisfaction rate",
        "24/7 AI Chef Support integrated",
        "Real-time trending recipes from external API"
      ]
    }
  },
  {
    title: "Global Explorer",
    description: "An interactive country explorer application with dark mode support, allowing users to browse and discover information about countries worldwide with a clean, modern UI.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&q=80&w=800&fit=crop",
    tech: ["React", "REST Countries API", "CSS", "JavaScript"],
    live: "https://country-app-react-zeta.vercel.app",
    github: "https://github.com/ihsanqfpp/CountryApp-react",
    category: "frontend",
    role: "Frontend Developer",
    impact: "250+ countries indexed",
    caseStudy: {
      problem: "Needed an intuitive way to explore global country data with search, filtering, and a visually appealing dark/light mode interface.",
      solution: "Built a React application consuming the REST Countries API with real-time search, region-based filtering, dark mode toggle, and detailed country pages with responsive design.",
      metrics: [
        "250+ countries with detailed information",
        "Dark/Light mode toggle for accessibility",
        "Real-time search and region filtering",
        "Fully responsive mobile-first design"
      ]
    }
  },
  {
    title: "SkyCast Pro",
    description: "A sleek weather forecasting application with real-time weather data, temperature display in Celsius, and a modern UI for checking current weather conditions at a glance.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&q=80&w=800&fit=crop",
    tech: ["React", "Weather API", "CSS", "JavaScript"],
    live: "https://weather-app-ruby-seven-19.vercel.app",
    github: "https://github.com/ihsanqfpp/Weather-App",
    category: "frontend",
    role: "Frontend Developer",
    impact: "Real-time weather data",
    caseStudy: {
      problem: "Users needed a clean, minimal interface to quickly check weather conditions without being overwhelmed by complex meteorological data.",
      solution: "Designed and developed a modern weather app with a clean UI, real-time API integration for current conditions, and Celsius/Fahrenheit toggle for global usability.",
      metrics: [
        "Real-time weather data fetching",
        "Clean, distraction-free UI design",
        "Celsius and Fahrenheit support",
        "Fast load times with optimized API calls"
      ]
    }
  },
  {
    title: "Foodpanda Clone",
    description: "A pixel-perfect UI clone of the popular Foodpanda food delivery platform, featuring city-based delivery listings, restaurant partnerships section, and mobile app download promotion.",
    image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&q=80&w=800&fit=crop",
    tech: ["React", "CSS", "JavaScript", "Responsive Design"],
    live: "https://food-panda-clone-hazel.vercel.app",
    github: "https://github.com/ihsanqfpp/FoodPanda-Clone",
    category: "frontend",
    role: "Frontend Developer",
    impact: "Pixel-perfect UI clone",
    caseStudy: {
      problem: "Wanted to demonstrate advanced frontend skills by replicating a production-grade food delivery platform with complex layouts and responsive design.",
      solution: "Recreated the Foodpanda interface with 15+ city listings, partner onboarding section, app download promotion, and a fully responsive footer with proper navigation links.",
      metrics: [
        "15+ cities with delivery coverage displayed",
        "Pixel-perfect match with original design",
        "Fully responsive across all screen sizes",
        "Complete footer with Help Center and legal links"
      ]
    }
  },
  {
    title: "YouTube Clone",
    description: "A fully responsive YouTube UI clone featuring video thumbnails, sidebar navigation, category filters, search functionality, and a pixel-perfect recreation of YouTube's modern layout.",
    image: "https://images.unsplash.com/photo-1521302200778-33500795e128?auto=format&q=80&w=800&fit=crop",
    tech: ["React", "CSS", "JavaScript", "YouTube API"],
    live: "https://youtube-clone-seven-roan.vercel.app",
    github: "https://github.com/ihsanqfpp/youtube-clone",
    category: "frontend",
    role: "Frontend Developer",
    impact: "Pixel-perfect YouTube UI",
    caseStudy: {
      problem: "Wanted to demonstrate advanced frontend skills by replicating YouTube's complex, responsive layout with dynamic content and navigation.",
      solution: "Built a complete YouTube UI clone with sidebar navigation, category filter chips, video grid layout with thumbnails, and integrated real YouTube video links for an authentic experience.",
      metrics: [
        "Pixel-perfect recreation of YouTube's modern UI",
        "Sidebar with Home, Shorts, and Subscriptions navigation",
        "Category-based filtering (Music, Gaming, Live, etc.)",
        "Fully responsive across all screen sizes"
      ]
    }
  },
  {
    title: "FoodFlow - Food Delivery",
    description: "A premium food delivery platform featuring multi-cuisine restaurants (Chinese, Italian, Indian, Pakistani), menu exploration, ordering system, and a polished gourmet-themed UI.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&q=80&w=800&fit=crop",
    tech: ["React", "CSS", "JavaScript", "Node.js"],
    live: "https://frontend-nine-azure-59.vercel.app",
    github: "https://github.com/ihsanqfpp/Food-Delivery",
    category: "fullstack",
    role: "Full Stack Developer",
    impact: "Multi-cuisine ordering system",
    caseStudy: {
      problem: "Users needed a visually appealing and easy-to-use platform to browse multiple cuisine types and place food orders seamlessly.",
      solution: "Built a gourmet food delivery app with featured restaurant destinations, average pricing display, menu exploration pages, and a contact section with opening hours.",
      metrics: [
        "4+ cuisine categories (Chinese, Italian, Indian, Pakistani)",
        "Restaurant menu exploration with pricing",
        "Clean hero section with call-to-action ordering",
        "Fully responsive with contact and location info"
      ]
    }
  }
];
