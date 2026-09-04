export interface Project {
  id: string;
  name: string;
  category: 'Data Analytics' | 'Software Development' | 'Web/App Development';
  shortDescription: string;
  highlight?: boolean;
  technologies: string[];
  githubUrl?: string;
  keyMetrics?: string[];
  statsBadge?: string;
}

export interface ExperienceItem {
  organization: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location?: string;
  score?: string;
  notes?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}
