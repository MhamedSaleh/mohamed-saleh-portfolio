// Project Types
export type ProjectType = "company" | "personal";

export interface Project {
  readonly type: ProjectType;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly role?: readonly string[];
  readonly features: readonly string[];
  readonly stack: readonly string[];
  readonly github?: string;
  readonly live?: string;
  readonly confidentialNote?: string;
}

// Skill Types
export interface SkillGroup {
  readonly title: string;
  readonly items: readonly string[];
}

// Contact Types
export interface ContactInfo {
  readonly email: string;
  readonly linkedin: string;
  readonly github?: string; // Make github optional
}

// Navigation Types
export type NavSection = "home" | "about" | "skills" | "projects" | "contact";

// Component Props Types
export interface SectionHeaderProps {
  readonly title: string;
  readonly subtitle: string;
}

export interface ButtonProps {
  readonly variant?: "primary" | "secondary" | "ghost";
  readonly size?: "sm" | "md" | "lg";
  readonly children: React.ReactNode;
  readonly onClick?: () => void;
  readonly href?: string;
  readonly disabled?: boolean;
  readonly className?: string;
}
