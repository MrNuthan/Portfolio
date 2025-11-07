
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');

    const sections: { [key: string]: React.RefObject<HTMLElement> } = {
        home: useRef<HTMLElement>(null),
        about: useRef<HTMLElement>(null),
        skills: useRef<HTMLElement>(null),
        projects: useRef<HTMLElement>(null),
        experience: useRef<HTMLElement>(null),
        education: useRef<HTMLElement>(null),
        contact: useRef<HTMLElement>(null),
    };

    useEffect(() => {
        const handleScroll = () => {
            let current = 'home';
            Object.keys(sections).forEach(id => {
                const section = sections[id].current;
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (window.scrollY >= sectionTop - 200) {
                        current = id;
                    }
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const scrollToSection = (id: string) => {
        const section = sections[id]?.current;
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    
    return (
        <>
            {/* Background Gradient Effect */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[radial-gradient(circle_at_20%_50%,_rgba(0,240,255,0.1)_0%,_transparent_50%),radial-gradient(circle_at_80%_80%,_rgba(255,0,230,0.1)_0%,_transparent_50%)]"></div>

            <Header activeSection={activeSection} onLinkClick={scrollToSection} />
            <main>
                <Hero ref={sections.home} />
                <About ref={sections.about} />
                <Skills ref={sections.skills} />
                <Projects ref={sections.projects} />
                <Experience ref={sections.experience} />
                <Education ref={sections.education} />
                <Contact ref={sections.contact} />
            </main>
            <Footer />
        </>
    );
};

export default App;
