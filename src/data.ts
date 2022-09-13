// export interface Link {
//   text: string;
//   url: string;
// }

// export interface Skills {
//   tech: string[];
//   soft: string[];
// }

// export interface Bio {
//   name: string;
//   title: string;
//   summary: string;
//   easterEgg: string;
//   links: Link[];
//   skills: Skills;
//   hobbies: string[];
// }

// export interface Experience {
//   id: string;
//   company: string;
//   startDate: string;
//   endDate: string;
//   location: string;
//   employmentType: string;
//   title: string;
//   description: string[];
//   tech: string[];
// }

// export interface OtherExperience {
//   id: string;
//   company: string;
//   startDate: string;
//   endDate: string;
//   location: string;
//   employmentType: string;
//   title: string;
//   description: string[];
// }

// export interface Resume {
//   bio: Bio;
//   experience: Experience[];
//   otherExperience: OtherExperience[];
// }

export const data = {
  bio: {
    name: "Forest Park",
    title: "Full Stack Developer",
    summary: "I enjoy building great products with great teams.",
    easterEgg:
      "https://raw.githubusercontent.com/foresthpark/resume/main/public/images/adventure.png",
    links: [
      {
        text: "email",
        url: "forestparks@protonmail.com",
      },
      {
        text: "github",
        url: "https://github.com/foresthpark",
      },
      {
        text: "website",
        url: "https://www.forestpark.dev",
      },
      {
        text: "linkedin",
        url: "https://www.linkedin.com/in/forestpark",
      },
    ],
    skills: {
      tech: [
        "NextJS",
        "React",
        "React Native",
        "Flutter",
        "Graphql",
        "Apollo Server",
        "MongoDB",
        "Prisma",
        "PostgreSQL",
        "AWS",
      ],
      soft: ["Leadership", "Mentorship", "Public Speaking", "Presentation"],
    },
    hobbies: ["Bouldering", "Baking", "Cooking", "Motorcycles", "Photography"],
  },

  experience: [
    {
      id: "6",
      company: "Vizzn",
      startDate: "2022-08-24",
      endDate: null,
      location: "Calgary, Canada",
      employmentType: "FULL_TIME",
      title: "Full Stack Developer",
      description: ["Creating REST API endpoints in Golang Gin"],
      tech: ["Golang", "Gin", "PostgreSQL", "AlloyDB"],
    },
    {
      id: "5",
      company: "Approach Controls",
      startDate: "2021-12-01",
      endDate: "2022-08-24",
      location: "Calgary, Canada",
      employmentType: "FULL_TIME",
      title: "Full Stack Developer",
      description: [
        "Writing and utilizing MQTT broker endpoints to send and receive events to control devices",
        "Implemented UI elements adhering to the Atomic Design principles with Storybook",
        "Created custom Angular pipes for improved productivity",
        "Integratred NGRX within the application to provide state management",
      ],
      tech: ["Angular", "MQTT", "NGRX", "Storybook"],
    },
    {
      id: "4",
      company: "Keto Clock",
      startDate: "2021-03-01",
      endDate: "2021-11-30",
      location: "Calgary, Canada",
      employmentType: "FULL_TIME",
      title: "Full Stack Developer / Team Lead",
      description: [
        "Communicating design and development standards to shareholders and developers",
        "Managing ongoing projects and task delegation for junior developers",
        "Performing code reviews to maintain quality code standards",
      ],
      tech: [
        "React Native",
        "GraphQL",
        "Apollo Server",
        "MongoDB",
        "Serverless",
        "AWS",
      ],
    },
    {
      id: "3",
      company: "EMCO Energy",
      startDate: "2020-05-01",
      endDate: null,
      location: "Calgary, Canada",
      title: "Full Stack Developer",
      employmentType: "FULL_CONTRACT",
      description: [
        "Redesigning and rebuilding EMCO energy website and CMS dashboard from the ground up with NextJS, Express, and MongoDB",
        "Working closely with stakeholders to meet feature requirements and design standards",
      ],
      tech: ["NextJS", "Prisma", "PostgreSQL", "PlanetScale"],
    },
    {
      id: "2",
      company: "Greengate Power",
      title: "VR Developer",
      startDate: "2019-06-01",
      endDate: "2020-03-31",
      location: "Calgary, Canada",
      employmentType: "CONTRACT",
      description: [
        "Creating VR experience to communicate the scale of solar and wind turbine farms in Alberta using Unreal Engine 4",
        "Creating a 1:1 VR level which is the largest solar farm project in North America",
      ],
      tech: ["Unreal Engine 4"],
    },
    {
      id: "1",
      company: "ClicBitz",
      title: "Full Stack Mobile Developer",
      startDate: "2019-08-01",
      endDate: "2020-10-31",
      location: "Calgary, Canada",
      employmentType: "CONTRACT",
      description: [
        "Delivering a full stack NFC scanner/writer app for STEM education in Android and iOS written in Flutter",
      ],
      tech: ["Flutter", "Dart", "Firebase"],
    },
  ],
  otherExperience: [
    {
      id: "1",
      company: "Hyundai Motors",
      startDate: "2017-06-01",
      endDate: "2018-10-31",
      location: "Seoul, South Korea",
      employmentType: "FULL_TIME",
      title: "Corporate Trainer",
      description: [
        "Coaching students 1:1 from beginner to executives to prepare for overseas relocation",
        "Preparing meaningful and constructive feedback to improve Hyundai/Kia Motors employees’ English ability in areas of grammar, vocabulary, pronunciation and etc.",
        "Improve cross-cultural communication for meeting and presentations in English",
      ],
    },
    {
      id: "2",
      company: "GM Motors",
      startDate: "2014-04-01",
      endDate: "2017-12-31",
      location: "Incheon, South Korea",
      employmentType: "FULL_TIME",
      title: "Coporate Trainer",
      description: [
        "Outlined cultural differences between Korea and European/North American countries for more effective cross-cultural communication",
        "Demonstrated presentation techniques and non-verbal communication methods for a more dynamic delivery",
        "Proofreading business documents and emails to improve trainees’ written English communication skills",
      ],
    },
    {
      id: "3",
      company: "JL Translations",
      startDate: "2012-01-01",
      endDate: "2017-06-30",
      location: "Incheon, South Korea",
      employmentType: "FULL_TIME",
      title: "Chief Translation Officer / Chief Interpreting Officer",
      description: [
        "Provided clients with English-Korean, Korean-English, Japanese-Korean, Japanese-English translation services of technical manuals and brochures",
        "English, Korean, and Japanese interpreting services for clients at global seminars and exhibitions",
      ],
    },
    {
      id: "4",
      company: "Qingyang Jewelry Exports",
      startDate: "2010-08-01",
      endDate: "2011-02-28",
      location: "Qingdao, Shandong, China",
      employmentType: "FULL_TIME",
      title: "Foreign Sales Representative/Chief Interpreter",
      description: [
        "Organized and interpreted business deals with potential buyers",
        "Responsible for presenting products and driving sales to potential buyers",
      ],
    },
    {
      id: "5",
      company: "Mitsubishi Shoji Seikyu Co. Ltd.",
      startDate: "2009-04-01",
      endDate: "2009-10-31",
      location: "Tokyo, Japan",
      employmentType: "FULL_TIME",
      title: "Corporate Trainer",
      description: [
        "Improved clients' commusnication skills in English and negotiating with American buyers",
        "Illustrated the difference between Asian and Western business cultures",
      ],
    },
  ],
};
