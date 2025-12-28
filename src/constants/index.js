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
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  dlithe,
  queue,
  threejs,
  django,
  postgre,
  sql,
  go,
  pet,
  php,
  hashtime,
  portfolio
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },
  { 
    id: "projects", 
    title: "Projects" 
  },
  {  
    id: "education", 
    title: "Education",
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python full stack",
    icon: creator,
  },
  {
    title: "QA Engineer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
  name: "Django",
  icon: django,
 },

  {
    name: "sql",
    icon: sql,
   },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
   
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  
  {
    name: "postgre",
    icon: postgre,
  },
  {
    name:"php",
    icon: php,
  },

  {
    name: "git",
    icon: git,
  },

  

  
];

const experiences = [
  {
    title: "Cybersecurity Intern",
    company_name: "DLithe Consultancy Services Pvt. Ltd. - Bangalore",
    icon: dlithe, // replace with DLithe logo if available
    iconBg: "#0188E3",
    date: "Dec 2024 - Feb 2025",
    points: [
      "Worked on Network Security, Vulnerability Assessment, and Penetration Testing using Kali Linux.",
      "Gained hands-on experience with Firewall & UTM configuration and Web Application Security.",
      "Practiced Cyber Forensics, Threat Intelligence, and Secure Communication Protocols.",
      "Conducted web monitoring and security assessments for enterprise applications.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "QueueTech Solutions Pvt. Ltd. - Mangalore",
    icon: queue, // replace with QueueTech logo if available
    iconBg: "#ffffff",
    date: "jan 2023 - Mar 2023",
    points: [
      "Learned and applied Full Stack Web Development using HTML, CSS, JavaScript, and PHP.",
      "Developed web-based projects with seamless front-end and back-end integration.",
      "Collaborated with team members to design and build functional web applications.",
      "Gained practical experience in responsive design and user experience optimization.",
    ],
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution:
      "Mangalore Institute of Technology and Engineering (MITE), Moodbidri",
    duration: "February 2024 – October 2025",
    points: ["CGPA: 7.9 / 10"],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Sharada Degree College, Mangalore",
    duration: "June 2020 – August 2023",
    points: ["CGPA: 8.03 / 10"],
  },
  {
    degree: "Pre University Course (PUC)",
    institution: "SDM PU College, Ujire",
    duration: "June 2018 – March 2020",
    points: ["Percentage: 77.5%"],
  },
  {
    degree: "SSLC (KSEEB Board)",
    institution: "Government Junior College, Kalasa",
    duration: "June 2017 – April 2018",
    points: ["Percentage: 86.72%"],
  },
];



const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GO4GIVE - Online Charity Platform",
    description:
      "A comprehensive donation platform that enables users to contribute money, food, clothes, and essential items for orphans and disaster relief, simplifying the process of humanitarian contributions online.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "php", color: "blue-text-gradient" },
    ],
    image: go, // ✅ existing image
    source_code_link: "https://github.com/MrNuthan",
    live_website_link: "",
  },
  {
    name: "Pet E-Commerce Platform",
    description:
      "A full-featured e-commerce website for pet food and accessories with user authentication, detailed product listings, and an admin panel for efficient order management.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind css", color: "pink-text-gradient" },
      { name: "django", color: "blue-text-gradient" },
    ],
    image: pet, // ✅ existing image
    source_code_link: "https://github.com/MrNuthan",
    live_website_link: "",
  },
  {
    name: "Personal 3D Portfolio Website",
    description:
      "An interactive and user-friendly personal portfolio showcasing skills, projects, and academic achievements in a structured and visually appealing manner.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "vite", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
      { name: "node.js", color: "blue-text-gradient" },
    ],
    image: portfolio, // ✅ existing image
    source_code_link: "https://github.com/MrNuthan",
    live_website_link: "",
  },
  // {
  //   name: "Penetration Testing Suite",
  //   description:
  //     "Performed comprehensive penetration testing on vulnerable systems using Kali Linux and industry-standard tools including Nmap, Metasploit, Hydra, Nikto, and Netcat.",
  //   tags: [
  //     { name: "kali linux", color: "blue-text-gradient" },
  //     { name: "nmap", color: "green-text-gradient" },
  //     { name: "metasploit", color: "pink-text-gradient" },
  //     { name: "network security", color: "blue-text-gradient" },
  //   ],
  //   image: falverra, // reuse safely
  //   source_code_link: "https://github.com/MrNuthan",
  //   live_website_link: "",
  // },
  {
    name: "Social Media Engagement Optimizer",
    description:
      "A data-driven system using Machine Learning, NLP, and Computer Vision to recommend optimal posting times and hashtags, improving engagement prediction by 20–30%.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "ML", color: "green-text-gradient" },
      { name: "NLP", color: "pink-text-gradient" },
      { name: "CV", color: "blue-text-gradient" },
    ],
    image: hashtime, // reuse safely
    source_code_link: "https://github.com/MrNuthan",
    live_website_link: "",
  },
];


export { services, technologies, experiences,education, testimonials, projects };
