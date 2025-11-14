export type DetailIcon = 'mapPin' | 'phone' | 'mail' | 'linkedin' | 'github';

export interface DetailItem {
  icon: DetailIcon;
  label: string;
  lines: string[];
}

export interface HeaderData {
  firstName: string;
  lastName: string;
  title: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Language {
  name: string;
  level: number;
}

export type LocationIcon = 'mapPin' | 'globe';

export interface JobExperience {
  title: string;
  location: string;
  locationIcon?: LocationIcon;
  period: string;
  description: string;
  bullets?: string[];
  pageBreakAfter?: boolean;
  extraSpacing?: boolean;
}

export interface OpenSourceItem {
  name: string;
  stars: string;
  meta: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  location: string;
  institution: string;
  period: string;
}

export interface CVData {
  header: HeaderData;
  contact: {
    details: DetailItem[];
  };
  skills: Skill[];
  languages: Language[];
  profile: string;
  experience: JobExperience[];
  openSource: OpenSourceItem[];
  education: EducationItem[];
}
