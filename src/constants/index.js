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
  sofit,
  grafdom,
  weknow,
  shape,
  jobit,
  tripguide,
  threejs,
  epikprojectimg,
  koerberprojectimg,
  shapeprojectimg,
  simplybestacademy,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Simply Best Academy (Remote)",
    icon: simplybestacademy,
    iconBg: "#0000",
    date: "May 2022 - Nov 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with product managers to resolve blockers, communicating directly with clients for requirments and sprint planning.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "SHAPE Global Ltd, UK",
    icon: shape,
    iconBg: "#383E56",
    date: "Nov 2023 - Present",
    points: [
      "Built cross-browser compatible Web-application of company's product SHAPE from scartch on React.",
      "Moved Company's own website from PHP to GatsbyJS from scratch resulting in better user experience for static content",
      "Expertly utilize REST web services technologies to design different in-house products.",
      "Implemented Customized charts for visualizing complex data & Animations using gsap",
      "Mentoring frontend team, conducting Pull Request reviews of Junior team members, responsible for managing the CI/CD pipelines on Azure DevOps",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ahsan proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Koerber Pharma",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ahsan does.",
    name: "Ali Khan",
    designation: "CEO",
    company: "SHAPE",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ahsan optimized our website, our load times improved drastically. We can't thank them enough!",
    name: "Maryia Halauniova",
    designation: "COO",
    company: "We Know Buis",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Epik.io",
    description:
      "IOT Web-based application that faciliates the users to use their epikboxes directly.. Epik.io provides all the necessary tools and features to customize their modems.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: epikprojectimg,
    source_code_link: "https://my.epik.io/",
  },
  {
    name: "Koerber Pharma",
    description:
      "Koerber's front-end service for hosting live video sessions of their events. Koeber is a complete platform that lets users see koeber's showroom and buy products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: koerberprojectimg,
    source_code_link: "https://showroom.koerber-pharma.live/welcome",
  },
  {
    name: "SHAPE",
    description:
      "SHAPE is purpose-built product to enhance employee flourishing. SHAPE precisely measures and reports the degree of struggling, striving and flourishing.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Azure DevOps",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: shapeprojectimg,
    source_code_link: "https://shapepowered.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
