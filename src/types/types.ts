export interface ProjectLink {
  name: string;
  url?: string; // Optional since not all links have it
  imageSrc: string;
  title?: string;
  text: string;
}

export interface WorkProject {
  name: string;
  icons?: string[]; // Optional as not all projects might have icons
  description?: string; // Optional
  links: ProjectLink[];
}
