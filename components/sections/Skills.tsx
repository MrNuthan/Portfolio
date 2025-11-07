
import React, { forwardRef } from 'react';
import Section from '../Section';
import AnimatedElement from '../AnimatedElement';

const skillsData = [
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fas fa-code', name: 'C++' },
    { icon: 'fas fa-database', name: 'SQL' },
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-html5', name: 'HTML5' },
    { icon: 'fab fa-css3-alt', name: 'CSS3' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fas fa-server', name: 'Django' },
    { icon: 'fas fa-flask', name: 'Flask' },
    { icon: 'fas fa-database', name: 'MySQL' },
    { icon: 'fas fa-database', name: 'PostgreSQL' },
    { icon: 'fab fa-git-alt', name: 'Git & GitHub' },
    { icon: 'fas fa-shield-alt', name: 'Cybersecurity' },
    { icon: 'fas fa-brain', name: 'Data Structures' },
    { icon: 'fas fa-lightbulb', name: 'Problem Solving' },
    { icon: 'fas fa-robot', name: 'Machine Learning' },
];

const SkillCard: React.FC<{ icon: string; name: string; }> = ({ icon, name }) => (
    <AnimatedElement>
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00f0ff] hover:shadow-[0_10px_30px_rgba(0,240,255,0.2)]">
            <i className={`${icon} text-5xl mb-4 bg-gradient-to-r from-[#00f0ff] to-[#ff00e6] bg-clip-text text-transparent`}></i>
            <h3 className="text-base font-medium">{name}</h3>
        </div>
    </AnimatedElement>
);

const Skills = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Section id="skills" title="Technical Skills" ref={ref}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skillsData.map((skill, index) => (
                    <SkillCard key={index} icon={skill.icon} name={skill.name} />
                ))}
            </div>
        </Section>
    );
});

export default Skills;
