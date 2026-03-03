import type { ContactInfo, SkillGroup, Project } from '../types';

export const CONTACT: ContactInfo = {
  email: "mohamedsaleh@sci.asu.edu.eg",
  linkedin: "https://www.linkedin.com/in/mohamed-saleh-241483172?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
} as const;

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Styling",
    items: ["Tailwind CSS", "SCSS", "CSS Modules", "Responsive Design"],
  },
  {
    title: "State & Data",
    items: ["Redux Toolkit", "Zustand", "React Query", "Axios"],
  },
  {
    title: "Tools",
    items: ["Git & GitHub", "Vite", "Figma", "ESLint"],
  },
] as const;

export const PROJECTS: readonly Project[] = [
  {
    type: "company",
    title: "Rakaz Real Estate",
    description: "Complete real estate platform with property listings, search functionality, and comprehensive user interface for property management.",
    image: "/projects/rakaz.gif",
    role: ["Frontend Developer", "UI/UX Designer"],
    features: [
      "Property listings system",
      "Advanced search & filters",
      "Responsive property cards",
      "User dashboard",
      "Interactive map integration"
    ],
    stack: ["React", "TypeScript", "TailwindCSS", "Figma", "Storybook"],
    github: "https://github.com/YOUR_USERNAME/rakaz",
    live: "https://YOUR_USERNAME.vercel.app/rakaz-demo"
  },
  {
    type: "company",
    title: "Rakaz Analytics Dashboard",
    description: "Real estate analytics dashboard for Rakaz with comprehensive property data visualization, market trends, and administrative reporting tools.",
    image: "/projects/rakazDash.gif",
    role: ["Frontend Developer", "UI Designer"],
    features: [
      "Property analytics dashboard",
      "Market trend visualization",
      "Real estate reporting",
      "Interactive data charts",
      "Performance metrics"
    ],
    stack: ["React", "TypeScript", "Chart.js", "TailwindCSS", "Vite"],
    github: "https://github.com/YOUR_USERNAME/rakazdash",
    live: "https://YOUR_USERNAME.vercel.app/rakazdash-demo"
  },
  {
    type: "company",
    title: "Future Academy Platform",
    description: "Complete educational platform for Future Academy with course management, student enrollment, and comprehensive learning interface.",
    image: "/projects/futureAcademy.gif",
    role: ["Frontend Developer"],
    features: [
      "Course management system",
      "Student enrollment interface",
      "Learning progress tracking",
      "Educational content display",
      "Interactive learning tools"
    ],
    stack: ["React", "TypeScript", "CSS3", "Vite", "Git"],
    github: "https://github.com/YOUR_USERNAME/futureacademy",
    live: "https://YOUR_USERNAME.vercel.app/futureacademy-demo"
  },
  {
    type: "company",
    title: "Future Academy Analytics",
    description: "Educational analytics dashboard for Future Academy with student performance tracking, course analytics, and comprehensive administrative reporting.",
    image: "/projects/FutureAcademyDash.gif",
    role: ["Frontend Developer"],
    features: [
      "Student performance analytics",
      "Course engagement metrics",
      "Educational data visualization",
      "Administrative reporting tools",
      "Real-time learning insights"
    ],
    stack: ["React", "TypeScript", "Chart.js", "CSS3", "Vite"],
    github: "https://github.com/YOUR_USERNAME/futureacademydash",
    live: "https://YOUR_USERNAME.vercel.app/futureacademydash-demo"
  },
  {
    type: "personal",
    title: "Saad Portfolio",
    description: "Personal portfolio website showcasing frontend development skills with modern React architecture, responsive design, and interactive components.",
    image: "/projects/saadGroup.gif",
    role: ["Frontend Developer"],
    features: [
      "Portfolio showcase system",
      "Project galleries",
      "Interactive animations",
      "Contact forms",
      "Responsive design"
    ],
    stack: ["React", "TypeScript", "CSS3", "Vite", "Git"],
    github: "https://github.com/YOUR_USERNAME/saad",
    live: "https://YOUR_USERNAME.vercel.app/saad-demo"
  },
  {
    type: "personal",
    title: "Saad Analytics Dashboard",
    description: "Personal analytics dashboard with real-time data visualization, custom metrics tracking, and modern frontend development patterns.",
    image: "/projects/saadGroupDash.gif",
    role: ["Frontend Developer"],
    features: [
      "Personal analytics dashboard",
      "Custom data visualization",
      "Real-time metrics display",
      "Interactive charts",
      "Performance monitoring"
    ],
    stack: ["React", "TypeScript", "Chart.js", "CSS3", "Vite"],
    github: "https://github.com/YOUR_USERNAME/saaddash",
    live: "https://YOUR_USERNAME.vercel.app/saaddash-demo"
  }
] as const;
