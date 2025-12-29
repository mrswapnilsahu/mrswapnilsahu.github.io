import { Project, Skill, Experience, Testimonial } from '../types';

/**
 * todo:
 *   1. workex description updates required
 */

export const about = {
  name: "Swapnil Sahu",
  role: "Software Engineer",
  // bio: "Software Engineer transforming chaos into clean, scalable code. Focusing on performance, accessibility, and brutally effective UI.",
  avatar: "https://avatars.githubusercontent.com/u/23381895?v=4", // GitHub avatar for mrswapnilsahu
  location: "Jabalpur, India",
  experience: "6+ years",
  projectsCount: "50+",
  resumeUrl: "https://drive.google.com/file/d/1I7uWjh7lZ_mVhhm2eFG4d8HsBg_UXvLZ/view",
  social: {
    github: "https://github.com/mrswapnilsahu",
    linkedin: "https://www.linkedin.com/in/mrswapnilsahu/",
    twitter: "https://twitter.com/mrswapnilsahu",
    email: "mailto:swapnilsahu4@gmail.com"
  }
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Yellow Paper Platform',
    description: 'An AI-powered SaaS platform for automated question generation with secure authentication.',
    tags: ['NodeJS', 'React', 'MaterialUI', 'AWS'],
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: 'http://yellowpaper.co.in/',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Airbnb Clone',
    description: 'A web application replicating Airbnb functionality using modern frontend technologies.',
    tags: ['NextJS', 'React', 'JavaScript', 'TailwindCSS'],
    image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: 'https://airbnb-clone-nine-beta.vercel.app/',
    githubUrl: 'https://github.com/mrswapnilsahu/airbnb-clone',
    featured: true,
  },
  // {
  //   id: 'project-3',
  //   title: 'Messenger Clone',
  //   description: 'A Facebook Messenger clone with real-time chat using Firebase.',
  //   tags: ['React', 'Firebase', 'MaterialUI', 'CSS'],
  //   image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   liveUrl: '',
  //   githubUrl: 'https://github.com/mrswapnilsahu/messenger-clone',
  //   featured: false,
  // },
  {
    id: 'project-4',
    title: 'Library Automation System',
    description: 'An automated system for self-issue and return of books using a simple PHP backend.',
    tags: ['JavaScript', 'PHP', 'HTML', 'CSS'],
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: '',
    githubUrl: 'https://github.com/mrswapnilsahu/Library-Automation-System',
    featured: false,
  },
];

export const skills: Skill[] = [
  { name: 'React', icon: 'react' },
  { name: 'Redux', icon: 'redux' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'HTML', icon: 'html' },
  { name: 'Webpack', icon: 'webpack' },
  { name: 'TailwindCSS', icon: 'tailwind' },
  { name: 'NextJS', icon: 'nextjs' },
  { name: 'NodeJS', icon: 'node' },
  { name: 'Express', icon: 'express' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Python', icon: 'python' },
  { name: 'Go', icon: 'go' },
  { name: 'Git', icon: 'git' },
  { name: 'Linux', icon: 'linux' },
  // { name: 'Web Vitals', icon: 'performance' }
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Lead Software Development Engineer - Frontend',
    company: 'Freecharge (Axis DBAT)',
    duration: 'July 2024 – Present',
    description: [
      'Led frontend development for multiple fintech products such as Gold Loan, Credit Card, and strategic POCs, owning architecture design and implementation end‑to‑end.',
      'Built reusable UI components and scalable frontend features using React, Redux Toolkit, TypeScript, and MaterialUI, integrating seamlessly with internal APIs.',
      'Enhanced build speed and developer experience by implementing Rspack, Rsbuild, and Parcel in CI / CD pipelines, resulting in 40 % faster delivery cycles.',
      'Collaborated with design, product, and backend teams to ship high‑impact features with a focus on quality, scalability, and performance.',
      'Core contributor to internal frontend team, managing boilerplates, design systems, and shared tooling that streamlined development across teams.',
      'Mentored developers, conducted code reviews, and introduced internal tooling to improve onboarding and maintainability'
    ],
    technologies: ['React', 'Redux', 'MaterialUI', 'SCSS']
  },
  {
    id: 'exp-2',
    role: 'Frontend Engineer - III',
    company: 'IGP.com',
    duration: 'Feb 2022 – Present',
    description: [
      'Developed over 50 scalable and reusable frontend components for multiple web stores, contributing to a 25% increase in user engagement and serving a user base of over 100,000.',
      'Utilized React, Redux, NextJS, SCSS and TailwindCSS to develop user interfaces, resulting in a 30% improvement in page load times.',
      'Developed and crafted the IGP Retail POS system with integrated payment processing. Achieved a 25% increase in sales and is used by 15+ businesses, processing over 500 transactions daily.',
      'Engineered and implemented a comprehensive SCSS-based text style design system, resulting in a 40% reduction in user confusion and improving UX.',
      'Collaborated with UI/UX designers and Product Managers to build visually appealing and user-friendly features, boosting user satisfaction by 15%.',
      'Mentored 4 junior developers, supporting their technical growth and integration into team workflows.',
      'Achieved a 50% improvement in website performance by enhancing core web vitals.'
    ],
    technologies: ['React', 'Redux', 'NextJS', 'SCSS', 'TailwindCSS']
  },
  {
    id: 'exp-3',
    role: 'Full Stack Developer',
    company: 'REAK Infotech LLP',
    duration: 'Aug 2020 – Dec 2021',
    description: [
      'Enhanced and deployed 3 SaaS products using React, Redux, NodeJS, and Express (MERN stack) while maintaining high code quality.',
      'Improved REST API response time by 10%, enhancing user experience and increasing client satisfaction.',
      'Built a reliable exchange connector for a cryptocurrency trading bot, enabling integration with 5 exchanges.'
    ],
    technologies: ['React', 'Redux', 'Node.js', 'Express']
  },
  {
    id: 'exp-4',
    role: 'Associate Software Engineer',
    company: 'Mphasis',
    duration: 'Jul 2019 – Jul 2020',
    description: [
      'Debugged client applications built on React, Node, and Express to resolve over 10 issues with detailed RCA documentation.',
      'Created Root Cause Analysis documents and coordinated with developers for issue resolution.'
    ],
    technologies: ['React', 'Node.js', 'Express']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp Inc.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: "One of the most talented developers I've worked with. Their technical skills and problem-solving abilities are exceptional."
  },
  {
    id: 'testimonial-2',
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateSoft',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Delivered complex features ahead of schedule and consistently exceeded expectations with high-quality code and attention to detail.'
  },
  {
    id: 'testimonial-3',
    name: 'Emily Rodriguez',
    role: 'UI/UX Designer',
    company: 'WebSolutions Ltd',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'A pleasure to work with. They have an exceptional ability to transform designs into pixel-perfect, performant interfaces.'
  }
];
