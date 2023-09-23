import {
  IconGitBranch,
  IconGitCommit,
  IconGitFork,
  IconGitMerge,
  IconGitPullRequest,
  IconWorldCode,
} from "@tabler/icons-react";
import { PersonalInfo } from "../components/HomePage/InfoBlock/Personalnfo";
import { ProyectInfo, WorkHistory } from ".";
import { Icon } from "@iconify/react/dist/iconify.js";
import Teletubie from "../img/Teletubie.png";
import WebDevHunt from "../img/WebDevHunt.png";
import SearchBar from "../img/Searchbar.png";

/*************************** Block HomePage ************************************************/
export const personalInfo = [
  {
    title: `Front-end Developer`,
    icon: <IconWorldCode className="w-10 h-10 text-danger-50" />,
    link: `https://github.com/montoyitadevelp?tab=repositories`,
  },
  {
    title: `Freelancer`,
    icon: <IconWorldCode className="w-10 h-10 text-danger-50" />,
    link: `https://www.behance.net/simonrestrepo4`,
  },
];

export const personalInfoComponents = personalInfo.map((info, index) => (
  <PersonalInfo
    key={index}
    title={info.title}
    icon={info.icon}
    link={info.link}
  />
));

export const resume = `I am a developer who has adopted a self-taught and
self-supported learning approach.. I like to Code, Design,
Innovate and Experiment. I am an enthusiastic and a social
person who loves to take up new challenges and learn new
skills. Passionate developer with a love for problem-solving
and creating innovative solutions. Experienced in various
programming languages and frameworks. Dedicated to continuous
learning and growth in the ever-evolving world of technology.
Open to collaboration and exploring new opportunities.`;

/************************ Block Projects ************************************************/
export const listProjects: ProyectInfo[] = [
  {
    Teletubie: {
      icons: {
        ts: <Icon width={30} height={30} icon="skill-icons:typescript" />,
        react: (
          <Icon
            className="animate-spin"
            width={30}
            height={30}
            icon="logos:react"
          />
        ),
        next: <Icon width={30} height={30} icon="skill-icons:nextjs-light" />,
        supabase: <Icon width={30} height={30} icon="logos:supabase-icon" />,
      },
      img: <img src={Teletubie} alt="Proyecto Teletubie" />,
      link: "https://github.com/No-Country/c13-44-front-js-supabase",
    },
    WebDevHunt: {
      icons: {
        js: <Icon width={30} height={30} icon="skill-icons:javascript" />,
        react: (
          <Icon
            className="animate-spin"
            width={30}
            height={30}
            icon="logos:react"
          />
        ),
        tailwind: <Icon width={30} height={30} icon="devicon:tailwindcss" />,
        lerna: (
          <Icon
            width={30}
            height={30}
            icon="vscode-icons:file-type-light-lerna"
          />
        ),
      },
      img: (
        <img className="h-full " src={WebDevHunt} alt="Proyecto WebDevHunt" />
      ),
      link: "https://github.com/montoyitadevelp/Web-Dev-Hut-Open-Source",
    },
    ReactSearchBar: {
      icons: {
        js: <Icon width={30} height={30} icon="skill-icons:javascript" />,
        react: (
          <Icon
            className="animate-spin"
            width={30}
            height={30}
            icon="logos:react"
          />
        ),
        reactquery: (
          <Icon
            className="animate-spin"
            width={30}
            height={30}
            icon="logos:react-query-icon"
          />
        ),
        scss: (
          <Icon width={30} height={30} icon="vscode-icons:file-type-scss2" />
        ),
      },
      img: <img className="h-full" src={SearchBar} alt="Proyecto ReactSearchBar" />,
      link: "https://github.com/montoyitadevelp/react-avanzado",
    },
  },
];

/********************************** Block Work Page ********************************************/
export const listHistory: WorkHistory[] = [
  {
    main: {
      commit: {
        title: "Git commit",
        icons: <IconGitCommit className="text-white w-10 h-10" />,
        text: "A decade ago, a boy with a passion for technology had his first encounter with a computer. At that time, he discovered a world full of possibilities and had great fun exploring it.",
      },
      branch: {
        title: "Git branch",
        icons: <IconGitBranch className="text-white w-10 h-10" />,
        text: "That child, who in 2014 was finally able to disassemble a computer and understand how it works along with its components",
      },
    },

    dev: {
      merge: {
        title: "Git merge",
        icons: <IconGitMerge className="text-white w-10 h-10" />,
        text: "In 2021, that passion manifested itself in his quest to understand more about hardware and software, exploring web development and how it works on the computer.",
      },
      fork: {
        title: "Git push",
        icons: <IconGitFork className="text-white w-10 h-10" />,
        text: "In 2022, the essential fundamentals for web page creation began to come to fruition, enabling the construction of a basic structure for a page and its functionality on both the server and the client.",
      },
      pull: {
        title: "Git pull",
        icons: <IconGitPullRequest className="text-white w-10 h-10" />,
        text: "Today, my love and passion for technology continues to grow as I aspire toward a future in the IT field. This enthusiasm is fueled by the ever-expanding community and my desire for personal growth. For me, helping others and working in a team is the greatest value for learning.",
      },
    },
  },
];
