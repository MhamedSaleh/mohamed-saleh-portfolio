import type { ContactInfo, Project } from '../types';

export const CONTACT: ContactInfo = {
  email: "mohamedsaleh@sci.asu.edu.eg",
  linkedin: "https://www.linkedin.com/in/mohamed-saleh-241483172",
} as const;

export const SKILL_GROUPS = [
  {
    title: "Frontend Architecture",
    items: ["React 18", "TypeScript", "Next.js", "State Management (Zustand/Redux)", "Performance Optimization"],
  },
  {
    title: "AI & Research",
    items: ["Python", "PyTorch", "Neural Networks", "EEG Signal Processing", "Feature Extraction"],
  },
  {
    title: "AI-Assisted Development",
    items: ["Cursor & AI Agents", "MCP (Model Context Protocol)", "Prompt Engineering", "LLM Integration"],
  },
  {
    title: "CMS & Backend",
    items: ["PHP", "WordPress (Custom Themes/Plugins)", "OpenCart", "MySQL", "RESTful APIs"],
  },
  {
    title: "Modern Styling",
    items: ["Tailwind CSS", "SASS/SCSS", "Framer Motion", "Atomic Design"],
  },
  {
    title: "Tools & DevOps",
    items: ["Git/GitHub", "Docker", "Vite/Webpack", "Postman", "Figma"],
  }
] as const;
export const PROJECTS: readonly Project[] = [
  {
    type: "company",
    title: "Rakaz Real Estate Platform",
    description: "A high-performance real estate ecosystem featuring an advanced property booking engine and integrated secure payment gateways. Built with a focus on seamless user experience and type-safe architecture.",
    image: "/projects/rakaz.gif",
    role: ["Frontend Developer", "UI Architect"],
    features: [
      "Dynamic unit booking & reservation system",
      "Seamless payment gateway integration",
      "Advanced geospatial search & filtering",
      "Real-time availability synchronization",
      "Custom UI component library via Storybook"
    ],
    stack: ["React", "TypeScript", "TailwindCSS", "Redux Toolkit", "Axios"],
    live: "https://pub.rh.net.sa/front/rakaz/"
  },
  {
    type: "company",
    title: "Rakaz Analytics Dashboard",
    description: "An enterprise-grade administrative dashboard for managing real estate operations, sales analytics, and unit inventory with complex data visualization.",
    image: "/projects/rakazDash.gif",
    role: ["Lead Frontend Developer"],
    features: [
      "Interactive sales & market trend charts",
      "Unit inventory & status management",
      "Financial reporting & transaction tracking",
      "Role-based access control (RBAC)",
      "Performance-optimized data tables"
    ],
    stack: ["React", "TypeScript", "Chart.js", "TailwindCSS", "Vite"],
  },
  {
    type: "company",
    title: "Future Academy LMS",
    description: "A comprehensive Learning Management System (LMS) featuring automated enrollment, interactive testing engines, and integrated real-time communication channels.",
    image: "/projects/futureAcademy.gif",
    role: ["Frontend Developer"],
    features: [
      "End-to-end course booking & payment flow",
      "Interactive quiz engine with instant grading",
      "Real-time student-instructor chat system",
      "Course progress tracking & certifications",
      "Immersive video learning interface"
    ],
    stack: ["React", "TypeScript", "TailwindCSS", "React Router", "Vite"],
    live: "https://pub.rh.net.sa/front/eduvate/"
  },
  {
    type: "company",
    title: "Future Academy Analytics Dashboard",
    description: "Dual-interface analytics ecosystem providing tailored dashboards for both Instructors and Administrators to monitor academic performance.",
    image: "/projects/FutureAcademyDash.gif",
    role: ["Frontend Developer"],
    features: [
      "Multi-tenant dashboard (Admin & Instructor)",
      "Student performance & engagement metrics",
      "Financial revenue tracking & reports",
      "Assignment & exam result analytics",
      "Automated notification & scheduling system"
    ],
    stack: ["React", "TypeScript", "Chart.js", "CSS Modules", "Vite"],
  },
  {
    type: "company",
    title: "Saad Group Healthcare",
    description: "A professional medical portal allowing patients to access published reports and medical data, synchronized with a robust internal management system.",
    image: "/projects/saadGroup.gif",
    role: ["Frontend Developer"],
    features: [
      "Secure patient portal for report access",
      "Dynamic medical information display",
      "Mobile-first responsive healthcare UI",
      "Public-facing services & doctor profiles",
      "Real-time announcement & news system"
    ],
    stack: ["React", "TypeScript", "TailwindCSS", "Vite", "Git"],
    live: "https://pub.rh.net.sa/front/saadgroup/"
  },
  {
    type: "company",
    title: "Saad Healthcare Dashboard",
    description: "An advanced Hospital Management Dashboard designed for generating medical reports, statistical analytics, and patient data monitoring.",
    image: "/projects/saadGroupDash.gif",
    role: ["Frontend Developer"],
    features: [
      "Medical report generation engine",
      "Department-wise statistical analytics",
      "Patient record & history management",
      "Interactive data visualization for clinics",
      "Encrypted data handling & secure login"
    ],
    stack: ["React", "TypeScript", "Chart.js", "CSS3", "Vite"],
  },
  {
    type: "personal",
    title: "Diaar Real Estate UI",
    description: "A modern React-based property showcase project focusing on optimized state management and fluid UI animations using Zustand.",
    image: "/projects/diaar.gif",
    role: ["Frontend Developer", "UI Designer"],
    features: [
      "Lightweight state management via Zustand",
      "Advanced filtering with zero-latency UI",
      "Dynamic property detail visualization",
      "Smooth layout transitions & animations",
      "Component-driven architecture"
    ],
    stack: ["React", "TypeScript", "TailwindCSS", "Zustand", "Vite"],
    live: "https://diaar-demo.vercel.app"
  },
  {
    type: "personal",
    title: "Yanbaa Academy & Events",
    description: "An innovative platform for managing educational events and academy programs with a focus on asynchronous data fetching.",
    image: "/projects/yanbaa.gif",
    role: ["Frontend Developer", "UI/UX Designer"],
    features: [
      "Event registration & management system",
      "Async data handling via React Query",
      "Interactive academic calendars",
      "Modern educational UI patterns",
      "Program-specific dashboard views"
    ],
    stack: ["React", "TypeScript", "TailwindCSS", "React Query", "Vite"],
    live: "https://yanbaa-demo.vercel.app"
  },
  {
    type: "company",
    title: "Dor Omran Real Estate",
    description: "A premium WordPress-based real estate platform with custom PHP logic for property unit bookings and elegant listings.",
    image: "/projects/Omran.gif",
    role: ["WordPress Developer"],
    features: [
      "Custom unit booking integration",
      "Advanced property search (PHP/MySQL)",
      "Highly optimized corporate SEO",
      "Custom ACF-driven data structure",
      "Lead generation & inquiry system"
    ],
    stack: ["WordPress", "PHP", "JavaScript", "MySQL", "CSS3"],
    live: "https://demo2.rh.net.sa/em7/Dor-Omran/"
  },
  {
    type: "company",
    title: "VitaCare Health Solution",
    description: "A comprehensive healthcare WordPress platform built for medical services showcase and automated doctor appointment booking.",
    image: "/projects/Vita.gif",
    role: ["WordPress Developer"],
    features: [
      "Automated doctor appointment system",
      "Medical service directory & profiles",
      "Mobile-optimized patient experience",
      "Performance-tuned CMS architecture",
      "Secure patient inquiry management"
    ],
    stack: ["WordPress", "PHP", "JavaScript", "MySQL", "CSS3"],
    live: "https://demo2.rh.net.sa/em7/VitaCare/"
  }
] as const;