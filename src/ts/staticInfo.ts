export type TProjectInfo = {
  name: string;
  description: string;
  githubRepoUrl: string;
  githubPageUrl: string | null;
  images: string[];
  technologies: string[];
};
/*
export const exampleProject: TProjectInfo = {
  name: "Example",
  description: "example, example y example",
  githubRepoUrl: "https://github.com/Soni295",
  githubPageUrl: "https://github.com/Soni295",
  images: ['example.jpg'],
  technologies: ["Javascript"]
}
*/

const staticInfo: TProjectInfo[] = [
  {
    name: "ClickArt",
    githubRepoUrl: "https://github.com/Soni295/ClickArt",
    images: ["ClickArt01.jpg", "ClickArt02.jpg", "ClickArt03.jpg"],
    githubPageUrl: "https://soni295.github.io/ClickArt/",
    technologies: [
      "JavaScript",
      "Css",
      "Html",
      "React",
      "Axios",
      "Bootstrap",
      "React-Router-Dom",
      "Socket.io",
      "Express",
      "MySql",
      "Nodejs",
      "Bcrypt",
      "Jest",
    ],
    description:
      "It is a rest full api art gallery style page where you can post images and search by artist title and drawing.",
  },
  {
    name: "Snake Game",
    githubRepoUrl: "https://github.com/Soni295/Snake-Game",
    images: ["SnakeGame01.jpg", "SnakeGame02.jpg"],
    githubPageUrl: "https://soni295.github.io/Snake-Game",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Css",
      "Html",
      "Node",
      "Express",
    ],
    description: "It's the snake game works by listening to browser events",
  },
  {
    name: "InstaClon",
    githubRepoUrl: "https://github.com/Soni295/InstaClon",
    images: ["example.jpg"],
    githubPageUrl: null,
    technologies: ["JavaScript"],
    description: "it is an instagram clone web with backend",
  },
  {
    name: "Replace px for rem",
    githubRepoUrl: "https://github.com/Soni295/ReplacePxForRem",
    images: ["example.jpg"],
    githubPageUrl: null,
    technologies: ["JavaScript"],
    description:
      "It is a tool that you create to change all the values of a px repository for their equivalence in rem",
  },
  {
    name: "Chat Server",
    githubRepoUrl: "https://github.com/Soni295/Chat-ts",
    images: ["example.jpg"],
    githubPageUrl: null,
    technologies: ["JavaScript"],
    description: "It is a group chat room. testing typescript",
  },
  {
    name: "Dog team",
    githubRepoUrl: "https://github.com/Soni295/dog-team",
    images: ["example.jpg"],
    githubPageUrl: null,
    technologies: ["JavaScript"],
    description:
      "It is a page with can search breed of dog and save some in a storage",
  },
  {
    name: "Princing Toggle",
    githubRepoUrl: "https://github.com/Soni295/Princing-Toggle",
    images: [
      "PricingToggle01.jpg",
      "PricingToggle02.jpg",
      "PricingToggle03.jpg",
    ],
    githubPageUrl: null,
    technologies: ["JavaScript", "Css", "Html", "React"],
    description: "Sort practice with react",
  },
  {
    name: "Easybank landing page",
    githubRepoUrl: "https://github.com/Soni295/Easybank-landing-page",
    images: [
      "EasyBank01.jpg",
      "EasyBank02.jpg",
      "EasyBank03.jpg",
      "EasyBank04.jpg",
      "EasyBank05.jpg",
      "EasyBank06.jpg",
      "EasyBank07.jpg",
    ],
    githubPageUrl: null,
    technologies: ["JavaScript", "Sass", "Css", "Html"],
    description: "It is a landing page for practice sass",
  },
];
const omit = ["InstaClon", "Replace px for rem", "Chat Server", "Dog team"];

export const staticInfoVisible = staticInfo
  .map((p) => {
    p.images = p.images.map((img) => `./img/${img}`);
    return p;
  })
  .filter((p) => !omit.includes(p.name));
