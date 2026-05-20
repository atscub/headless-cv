export interface DetailItem {
  icon: string;
  label: string;
  lines: string[];
  highlight?: boolean;
}

export interface HeaderData {
  firstName: string;
  lastName: string;
  title: string;
}

export interface Badge {
  label: string;
}

export interface Language {
  name: string;
  level: number;
  note?: string;
}

export interface SideProject {
  name: string;
  meta?: string;
  description: string;
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
  badges: Badge[];
  languages: Language[];
  profile: string;
  experience: JobExperience[];
  openSource?: OpenSourceItem[];
  sideProjects?: SideProject[];
  education: EducationItem[];
}
