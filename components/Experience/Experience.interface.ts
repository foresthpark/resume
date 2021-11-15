export default interface IExperienceMap {
  experiences?: IExperience[];
  experience?: IExperience;
  otherExperiences?: IExperience[];
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
}
