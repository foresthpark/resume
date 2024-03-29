export interface IBio {
  name: string;
  title: string;
  summary: string;
  links?: ILinks[];
  skills: ISkills;
  hobbies: string[];
}

export interface IExperience {
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  employmentType: string;
  title: string;
  description: string[];
  tech: string[];
}

export interface IOtherExperience {
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  employmentType: string;
  title: string;
  description: string[];
}

export interface IProjects {
  name: string;
  description: string[];
  url?: string;
}

export interface ITalks {
  title: string;
  organizer: string;
  description: string[];
  url?: string;
}

export interface ISkills {
  tech: string[];
  soft: string[];
}

export interface ILinks {
  text: string;
  url: string;
}
