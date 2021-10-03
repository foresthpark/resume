export const data = {
  bio: {
    name: "Forest Park",
    title: "Full Stack Developer",
    summary: "I enjoy building great products with great teams.",
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
      id: "4",
      company: "Keto Clock",
      startDate: "2021-03-01",
      endDate: null,
      location: "Calgary, Canada",
      employmentType: "FULL_TIME",
      title: "Full Stack Developer / Team Lead",
      description: [
        "Communicating design and development standards to shareholders and developers",
        "Managing ongoing projects and task delegation for junior developers",
        "Performing code reviews to maintain quality code standards",
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
        "Working closely with stakeholders to meet requirements and desin standards",
      ],
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
    },
  ],
};
