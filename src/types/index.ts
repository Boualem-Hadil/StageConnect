
export interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  salary: string | null;
  duration: string;
  postedAt: string;
  logo: string;
  tags: string[];
  applicationLink: string;
}

export interface Company {
  id: number;
  name: string;
  logo: string;
  sector: string;
  location: string;
  description: string;
  website?: string;
  employees?: string;
  founded?: string;
}

export interface FilterOptions {
  location: string[];
  duration: string[];
  tags: string[];
}
