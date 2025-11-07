
import React, { forwardRef } from 'react';
import Section from '../Section';
import AnimatedElement from '../AnimatedElement';

const About = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Section id="about" title="About Me" ref={ref}>
            <AnimatedElement>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-12 leading-loose">
                    <p className="text-[#b0b0b0] mb-4">
                        I'm a highly motivated Master of Computer Applications (MCA) student with a deep passion for coding and a strong foundation in computer science principles. My journey in technology has been driven by curiosity and a desire to create meaningful solutions that make a difference.
                    </p>
                    <p className="text-[#b0b0b0] mb-4">
                        With hands-on experience in full-stack web development and cybersecurity, I've worked on diverse projects ranging from charity platforms to e-commerce sites and penetration testing environments. I thrive in collaborative settings and am always eager to learn new technologies and methodologies.
                    </p>
                    <p className="text-[#b0b0b0]">
                        My goal is to leverage my technical skills and innovative thinking to contribute to impactful projects in a dynamic and forward-thinking team. I bring fresh ideas, a proactive approach, and a commitment to excellence in everything I do.
                    </p>
                </div>
            </AnimatedElement>
        </Section>
    );
});

export default About;
