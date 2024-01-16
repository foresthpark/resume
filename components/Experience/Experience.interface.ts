export default interface IExperienceMap {
  experiences?: IExperience[];
  experience?: IExperience;
  otherExperiences?: IExperience[];
  projects?: IProject[];
  project?: IProject;
  talks?: ITalk[];
  talk?: ITalk;
  key?: string;
}

export interface IExperience {
  company: string;
  startDate: string;
  endDate: string;
  months: number;
  years: number;
  title: string;
  location: string;
  description: string[];
  tech: string[];
}
