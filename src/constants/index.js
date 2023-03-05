import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Front-End Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Intern",
    company_name: "NXT LOGICS",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Apr 16 to Apr 30 2022 (15 Days)",
    points: [
      "Intern in the specialization of Web development using HTML, CSS, and JavaScript..",
      "Developed a webpage on E-Commerce..",
      "Learn more about Front End Development..",
    ],
  },
  {
    title: "Intern",
    company_name: "INTERNEZY",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Intern in the Domain of Full Stack Development.",
      "Gained knowledge on Backend technologies.",
      "Build Web Pages using front-end technologies.",

    ],
  },
  {
    title: "Intern",
    company_name: "KAASHIV INFOTECH",
    icon: shopify,
    iconBg: "#383E56",
    date: "07 June 2021 - 22 June 2021 (15 Days)",
    points: [
      "Intern in the specialization Artificial Intelligence.",
      "Gained knowledge on AI.",
      "Deployed all the logics and algorithms.",
    ],
  },
  {
    title: "AIM 🔥💕",
    company_name: "Full stack Developer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "I have a strong desire to become a full stack web developer: My willingness to work as a full stack web developer indicates a strong desire to learn and work with both the front-end and back-end aspects of web development. This demonstrates a commitment to mastering the necessary skills to become proficient in this field.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I am pleased to announce that I have filled a patent for my groundbreaking invention, an AI-based Audio Stem Extractor, which effectively separates each stem of a song..",
    name: "Patent Filed",
    // designation: "CFO",
    // company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I have achieved significant milestones in my programming journey, including solving over 100 problems on Leetcode, maintaining a daily streak of problem-solving, and actively participating in coding contests on CodeChef platform, which has earned me the Bronze Badge..",
    name: "Achievements",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I possess strong personal skills in leadership management, active listening, adaptability, and time management. These skills enable me to motivate and guide teams, communicate effectively, adjust to new situations, and prioritize tasks efficiently.",
    name: "PERSONAL SKILLS",
    // designation: "CTO",
    // company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CODEX_AI_WEBSITE",
    description:
      "A Webpage powered by OpenAI which utilizes Node and Express to provide users with relevant information upon request. This AI-driven webpage is a valuable resource for users seeking information..",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Express JS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://codex-ai-seven.vercel.app",
  },
  {
    name: "IMAGIFY",
    description:
      "Imagify is a web application that leverages the power of OpenAI and utilizes React JS and TailWind CSS to generate new images based on user search queries. This uses  artificial intelligence.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MONGO_DB",
        color: "green-text-gradient",
      },
      {
        name: "Node JS",
        color: "pink-text-gradient",
      },
      {
        name: "Open-AI",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://sriramv2003.github.io/IMAGIFY/",
  },
  {
    name: "PRONEF-NFT WEBAPP",
    description:
      "The user interface (UI) webpage for an NFT exchange is designed with an intuitive landing page and user experience (UX) using React and Tailwind CSS. This UI webpage is also connected to a mobile UI built with React Native.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "React Native",
        color: "green-text-gradient",
      },
      {
        name: "TailWind-CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://shy-math-7930.on.fleek.co",
  },
];

export { services, technologies, experiences,testimonials, projects };
