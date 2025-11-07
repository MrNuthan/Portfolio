
import React, { forwardRef } from 'react';
import Section from '../Section';
import AnimatedElement from '../AnimatedElement';

const projectsData = [
    {
        title: "GO4GIVE - Online Charity Platform",
        github: "https://github.com/MrNuthan/GO4GIVE",
        description: "A comprehensive donation website that enables users to contribute money, food, clothes, and essentials for orphans and disaster relief. Simplified the process of making humanitarian contributions online.",
        stack: ["HTML", "CSS", "JavaScript", "PHP"]
    },
    {
        title: "Pet E-Commerce Platform",
        github: "https://github.com/MrNuthan/pet-ecommerce",
        description: "Built a full-featured e-commerce site for pet food and accessories with user authentication, product listings with detailed information, and an admin panel for order management.",
        stack: ["HTML", "CSS", "JavaScript", "Django"]
    },
    {
        title: "Personal Portfolio Website",
        github: "https://github.com/MrNuthan/portfolio",
        description: "Created an interactive and user-friendly portfolio website showcasing skills, projects, and academic achievements in a structured and visually appealing format.",
        stack: ["React", "Vite", "TypeScript", "Node.js"]
    },
    {
        title: "Penetration Testing Suite",
        github: "https://github.com/MrNuthan/penetration-testing",
        description: "Performed comprehensive penetration testing on vulnerable systems using Kali Linux. Utilized industry-standard tools including Nmap, Metasploit, Hydra, Nikto, and Netcat.",
        stack: ["Kali Linux", "Nmap", "Metasploit", "Network Security"]
    },
    {
        title: "Social Media Engagement Optimizer",
        github: "https://github.com/MrNuthan/social-media-optimizer",
        description: "Developed a data-driven system using Machine Learning, NLP, and Computer Vision to recommend optimal posting times and hashtags. Improved engagement prediction by 20-30%.",
        stack: ["Python", "ML", "NLP", "Computer Vision"]
    }
];

const ProjectCard: React.FC<typeof projectsData[0]> = ({ title, github, description, stack }) => (
    <AnimatedElement>
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,240,255,0.2)]">
            <div className="flex justify-between items-start mb-4 gap-4">
                <h3 className="text-[#00f0ff] text-xl font-bold flex-1">{title}</h3>
                <a href={github} target="_blank" rel="noopener noreferrer" title="View on GitHub" className="text-[#b0b0b0] text-2xl transition-all duration-500 hover:text-[#00f0ff] hover:rotate-[360deg]">
                    <i className="fab fa-github"></i>
                </a>
            </div>
            <p className="text-[#b0b0b0] mb-4 flex-grow">{description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
                {stack.map(tech => <span key={tech} className="bg-[rgba(0,240,255,0.1)] text-[#00f0ff] py-1 px-3 rounded-full text-sm border border-[rgba(0,240,255,0.3)]">{tech}</span>)}
            </div>
        </div>
    </AnimatedElement>
);

const Projects = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Section id="projects" title="Featured Projects" ref={ref}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </Section>
    );
});

export default Projects;
