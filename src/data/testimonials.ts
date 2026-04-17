export type Testimonial = {
  name: string;
  role: string;
  content: string;
  avatar: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Product Manager @ TechFlow",
    content:
      "Ihsan transformed our sluggish monolithic frontend into a lightning-fast React application. His attention to detail and performance optimization is unmatched.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    initials: "SJ",
  },
  {
    name: "Marcus Chen",
    role: "CEO @ Startup X",
    content:
      "We hired Ihsan to build our MVP, and he delivered a full-scale, production-ready MERN application ahead of schedule. Truly a world-class developer.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    initials: "MC",
  },
  {
    name: "Elena Rodriguez",
    role: "Lead Designer @ Agency",
    content:
      "As a designer, I'm picky about implementations. Ihsan nailed every single micro-interaction and glassmorphic detail from my Figma files perfectly.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    initials: "ER",
  },
];
