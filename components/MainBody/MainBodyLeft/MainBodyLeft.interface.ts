export default interface IMainBodyLeftProps {
  data: IMainBodyLeft;
}

export interface IMainBodyLeft {
  name: string;
  title: string;
  summary: string;
  links: ILink[];
  skills: ISkills;
  hobbies: string[];
}

interface ILink {
  text: string;
  url: string;
}

interface ISkills {
  tech: string[];
  soft: string[];
}
