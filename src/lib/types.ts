import type { StaticImageData } from "next/image";

export type ResumeIcon = React.ComponentType<React.SVGProps<SVGSVGElement>> | StaticImageData;

export type IconType = "github" | "linkedin" | "x" | "globe" | "mail" | "phone";

export type LinkGeneral = {
  url: string,
  name: string,
  label: string;
}

export interface LinkGeneralWithIcon extends LinkGeneral {
  icon?: IconType; // <-- La nueva propiedad
}

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string | React.ReactNode;
  avatarUrl: string;
  personalWebsiteUrl: LinkGeneral | null;
  contact: {
    email: string;
    tel: string;
    social: Array<LinkGeneralWithIcon>;
  };
  education: Array<{
    school: string;
    degree: string;
    start: string;
    end: string;
  }>;
  courses: Array<{
    name: string;
    start: string;
    end: string;
  }>;
  languages: Array<{
    name: string;
    level: string;
  }>;
  work: Array<{
    company: string;
    link: string;
    badges: string[];
    title: string;
    start: string;
    end: string | null;
    description: string | React.ReactNode;
    highlights?: readonly string[];
  }>;
  skills: string[];
  projects: Array<{
    title: string;
    techStack: string[];
    description: string;
    link?: {
      label: string;
      href: string;
    };
  }>;
}

// Helper function to convert React content to string
// (usado para exportar la data del CV como JSON plano)
export function reactToString(content: React.ReactNode): string {
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content.map(reactToString).join("");
  }
  if (typeof content === "object" && content && "props" in content) {
    const { children } = content.props;
    if (children) return reactToString(children);
  }
  return "";
}
