export interface Url {
  label: string;
  href: string;
}

export interface Picture {
  url: string;
  size: number;
  aspectRatio: number;
  borderRadius: number;
  effects: {
    hidden: boolean;
    border: boolean;
    grayscale: boolean;
  };
}

export interface Basics {
  name: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  url: Url;
  customFields: any[];
  picture: Picture;
}

export interface Item {
  id: string;
  visible: boolean;
  name?: string;
  title?: string; // For awards
  description?: string;
  summary?: string;
  date?: string;
  url?: Url;
  institution?: string; // For education
  studyType?: string; // For education
  area?: string; // For education
  score?: string; // For education
  company?: string; // For experience
  position?: string; // For experience
  location?: string; // For experience
  issuer?: string; // For certifications
  awarder?: string; // For awards
  network?: string; // For profiles
  username?: string; // For profiles
  icon?: string; // For profiles
  keywords?: string[]; // For skills/projects
  level?: number; // For skills
}

export interface Section {
  name: string;
  columns: number;
  separateLinks: boolean;
  visible: boolean;
  id: string;
  content?: string; // For summary
  items?: Item[];
}

export interface Sections {
  summary: Section;
  awards: Section;
  certifications: Section;
  education: Section;
  experience: Section;
  volunteer: Section;
  interests: Section;
  languages: Section;
  profiles: Section;
  projects: Section;
  publications: Section;
  references: Section;
  skills: Section;
  custom: any;
}

export interface Metadata {
  template: string;
  layout: string[][][];
  css: {
    value: string;
    visible: boolean;
  };
  page: {
    margin: number;
    format: string;
    options: {
      breakLine: boolean;
      pageNumbers: boolean;
    };
  };
  theme: {
    background: string;
    text: string;
    primary: string;
  };
  typography: {
    font: {
      family: string;
      subset: string;
      variants: string[];
      size: number;
    };
    lineHeight: number;
    hideIcons: boolean;
    underlineLinks: boolean;
  };
  notes: string;
}

export interface ResumeData {
  basics: Basics;
  sections: Sections;
  metadata: Metadata;
}
