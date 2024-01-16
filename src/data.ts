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
      description: [
        "Developed visually appealing and interactive graphs using data visualization techniques to provide insights and facilitate decision-making processes",
        "Built efficient internal tools and applications to streamline workflows and enhance team productivity, resulting in improved efficiency and time savings",
        "Authored comprehensive documentation, both for internal team use and external clients, ensuring clear and concise instructions for seamless adoption and integration",
        "Collaborated closely with stakeholders, actively engaging in direct communication to gather and understand feature requirements, ensuring accurate implementation and alignment with business objectives",
      ],
      tech: ["NextJs", "React", "Tailwind", "Antd", "Golang"],
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

  talks: [
    {
      id: "5f30e4e6-d62b-4ead-b43f-6d21b3679a57",
      title: "Generic Typescript Components",
      organizer: "DEVFEST YYC",
      url: "https://devfestyyc.com/sessions/539477",
      description: [
        "Creating a generic pure component in React to increase reusability, improve type safety, and maintain easily.",
      ],
    },
  ],

  projects: [
    {
      id: "7676608c-274a-4496-8133-9d9b84eed4aa",
      name: "SDC",
      description: [
        "Software Developers of Calgary (SDC) is a community website that helps developers learn and build together through mini hackathon events",
        "Developed a website enabling administrators to create events, oversee user management, and manage projects.",
      ],
      url: "https://sdc.fyi",
    },
    {
      id: "7d52035d-70d1-47c8-bce1-eb9896a43440",
      name: "Care My Way",
      description: [
        "A caregivers app for aging loved ones. Care my Way offers resources and tools to help you navigate the care journey.",
        "Developed a website landing page for Care My Way, a caregiving app designed to support individuals caring for their aging loved ones.",
        "Implemented features and tools to provide valuable resources for users, including tools for hiring caregivers and a wide range of informative resources aimed at assisting families in providing the best care for their elderly family members.",
        "Contributed to the creation of a user-friendly platform, offering essential resources and guidance to facilitate the caregiving journey for users.",
      ],
      url: "https://caremyway-ca.vercel.app",
    },
    {
      id: "e46639de-217d-4a29-8e8f-27f5138b16f4",
      name: "Buy me a Coffee",
      description: [
        "Implemented a secure and efficient payment system using Stripe, allowing users to make donations with ease while ensuring the security of financial transactions.",
        "Leveraged Airtable to organize and manage user data and donation records, streamlining the administrative aspects of the website.",
      ],
      url: "https://coffee.forestp.dev",
    },
    {
      id: "88428469-5cef-4dd4-8f9c-481073326bd1",
      name: "Inuka",
      description: [
        "Earned the title of 'Best in Category' for Family and Community Centred Care at the Innovation 4 Health Hackathon.",
      ],
      url: "https://livewirecalgary.com/2020/04/02/future-calgary-inuka-inc-building-better-health-communication/",
    },
    {
      id: "99454e90-7f80-447f-97f8-08531213db22",
      name: "Expense Robot",
      description: ["Achieved 1st place in the ATB Open Banking Hackathon."],
    },
    {
      id: "4f97c1d8-d923-49a9-b3de-41afc8690b31",
      name: "Studio Phi Tattoos",
      description: [
        "Designed and developed a streamlined landing page for Studio Phi Tattoo Studio, featuring essential information and an engaging Shopify e-commerce integration",
      ],
      url: "https://studiophitattoos.com",
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
        "Improved clients' communication skills in English and negotiating with American buyers",
        "Illustrated the difference between Asian and Western business cultures",
      ],
    },
  ],
};
