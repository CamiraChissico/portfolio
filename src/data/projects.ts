export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github?: string;
  demo?: string;
  images: string[];
  category: "Web App" | "System" | "Portfolio" | "UI/UX";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "queue-management",
    title: "Queue Management System",
    description: "Real-time queue tracking platform for service-based businesses.",
    longDescription:
      "A full-featured queue management platform with live ticket tracking, multi-counter support, SMS notifications, and an analytics dashboard for operators. Built with a focus on accessibility and sub-second updates.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "WebSockets"],
    github: "https://github.com/camirachissico",
    demo: "#",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80",
    ],
    category: "System",
    featured: true,
  },
  {
    id: "travel-management",
    title: "Travel Management System",
    description: "End-to-end booking and itinerary platform for travel agencies.",
    longDescription:
      "A modern travel agency platform handling flight & hotel booking, dynamic itinerary building, customer CRM, and invoice generation. Includes role-based access for agents and managers.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    github: "https://github.com/camirachissico",
    demo: "#",
    images: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    ],
    category: "Web App",
    featured: true,
  },
  {
    id: "portfolio-v2",
    title: "Portfolio Website",
    description: "This very portfolio — engineered as a product.",
    longDescription:
      "A premium developer portfolio built with React, Tailwind CSS, and Framer Motion. Features animated sections, glassmorphism, gradient borders, custom cursor and a fully scalable project system.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "TanStack Router"],
    github: "https://github.com/camirachissico",
    demo: "#",
    images: [
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80",
    ],
    category: "Portfolio",
    featured: true,
  },
];

export const categories = ["All", "Web App", "System", "Portfolio", "UI/UX"] as const;
