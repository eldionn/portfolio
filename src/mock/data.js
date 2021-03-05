import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Eldion Nevruzi | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Personal Portfolio site of Eldion Nevruzi', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Eldion Nevruzi.',
  subtitle: "I'm a Web Developer.",
  cta: 'learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile eldion.jpg',
  paragraphOne:
    "I'm a Graphic Designer and Front-End Developer. I have been creating unique graphics and websites for clients for over three years now. Each of the websites I design and build captures a specific audience's attention and keeps them engaged.",
  paragraphTwo:
    "I like simplicity and clarity and strive to improve the quality of interaction between users and products. My focus is on modern web design, and crafting solutions to achieve various business goals. I'm highly proficient in Photoshop, Illustrator and InDesign, and use them when the job calls for it. On top of my UI/UX skills, I am also familiar with front-end development, having learned my way around HTML5, CSS3, JavaScript, ES6 and frameworks/libraries such as React, Gatsby, jQuery and more.",
  // paragraphThree: '',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project 1 eldion.jpg',
    title: 'A simple React Travel Webpage',
    info: 'This is a fully responsible travel webapage built with React',
    info2: '',
    url: 'https://react-travel-web.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project 2 eldion.jpg',
  //   title: 'Project Najda',
  //   info:
  //     '“Najda” means aid, assistance, relief and support. At PROJECT NAJDA we’ve combined our love for gaming with our love for fostering positive community growth. Our aim is to inspire and empower those who often feel disempowered or overlooked. Although gaming cannot directly remove these hurdles and obstacles PROJECT NAJDA passionately believes that gaming can provide the networking opportunities, and confidence building and safe environment that can improve lives for the better.',
  //   info2: '',
  //   url:
  //     'https://www.behance.net/gallery/74601595/Project-Najda-Social-Media-Banners-and-Twitch-Design',
  //   repo: '', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: "I'd love to hear more about you and your project!",
  btn: "let's talk",
  email: 'eldionevruzi@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/eldionevruzi?lang=en',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/eldion',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://al.linkedin.com/in/eldionnevruzi',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/eldionn',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
