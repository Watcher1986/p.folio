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
  appstore,
  catsgallery,
  photosgallery,
  threejs,
  ndaicon,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'Freelance',
    icon: ndaicon,
    iconBg: '#383E56',
    date: 'Jan 2020 - July 2021',
    points: [
      'Designed and improved markup layouts based on client-specific requirements',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Bodyvic',
    icon: ndaicon,
    iconBg: '#E6DEDD',
    date: 'July 2021 - Dec 2021',
    points: [
      'Worked on transitioning a legacy project from JQuery to Next.js.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Collaborated with the team to develop optimal architectural solutions for scalability, flexibility, and maintenance of the codebase.',
    ],
  },
  {
    title: 'Frontend Engineer',
    company_name: 'Under NDA',
    icon: ndaicon,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developed microservices using React, JS/TS within a project structured as microservices.',
      'Employed technologies and tools including React (react-redux and react-router-dom), Redux (thunk and conditional reducers), React Context API, TypeScript, NodeJS, GraphQL, Apollo Client, Styled-components, React Bootstrap, and Lodash.',
      'Created dynamic views displaying company data and analytics through diverse visualizations like charts, tables, and diagrams.',
      'Maintained and refactored existing code, while also creating new micro-frontends to enhance the development experience.',
      'Ensured code quality and adherence to best practices throughout the development process',
      'Collaborated with a large team of approximately 30 developers, testers, business analysts, and a product owner',
      "Leveraged various approaches, design patterns, and object-oriented programming principles within the project's architecture",
      'Utilized internal libraries for the creation of complex, multi-layered components with advanced data flow dependencies',
    ],
  },
  {
    title: 'Frontend Engineer',
    company_name: 'Under NDA',
    icon: ndaicon,
    iconBg: '#E6DEDD',
    date: 'Dec 2021 - Present',
    points: [
      'Developed and maintained CMS platforms for two separate company departments.',
      'I developed a mobile-first application with a focus on improving customer support and enhancing overall user experience. Through this project, I honed my skills in creating intuitive user interfaces and optimizing performance for mobile devices. By leveraging best practices and cutting-edge technologies, I was able to deliver a high-quality application that exceeded user expectations.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
      'Built a new cross-domain CMS platform with a whole new UI/UX, using SOLID patterns, and best practices approach for handling business logic and client-server data flow, which led to a tangible performance and overall view more predictable and consistency.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Denis proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Denis does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Denis optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: "Cat's Gallery",
    description:
      "Animated cat's breeds gallery that allows users to search for cats by breed, view images, and view detailed information about each breed.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: catsgallery,
    source_code_link: 'https://github.com/Watcher1986/kitty-gallery',
  },
  {
    name: 'Apple Store',
    description:
      'Interactive analouge for the Apple Store with animated 3D models and a customizable interface that allows users to interact with the store and view relevant information about the products they are interested in.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'gsap',
        color: 'green-text-gradient',
      },
      {
        name: 'webgi',
        color: 'pink-text-gradient',
      },
    ],
    image: appstore,
    source_code_link: 'https://github.com/Watcher1986/iphone-3D',
  },
  {
    name: 'Photo Gallery',
    description:
      'Interactive photo gallery that allows users to search for photos by tags, view images, and view detailed information about each photo. Build with vanilla JavaScript, HTML, and CSS.',
    tags: [
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: photosgallery,
    source_code_link: 'https://github.com/Watcher1986/gallery.github.io',
  },
];

export { services, technologies, experiences, testimonials, projects };
