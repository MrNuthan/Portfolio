import React, { forwardRef } from 'react';
import Section from '../Section';
import AnimatedElement from '../AnimatedElement';

const contactData = [
    {
        icon: "fas fa-envelope",
        title: "Email",
        link: "mailto:mr.nuthan07@gmail.com",
        text: "mr.nuthan07@gmail.com"
    },
    {
        icon: "fab fa-linkedin",
        title: "LinkedIn",
        link: "https://in.linkedin.com/in/nuthan-n-v-8055c045",
        text: "linkedin.com/NuthanNV"
    },
    {
        icon: "fab fa-github",
        title: "GitHub",
        link: "https://github.com/MrNuthan",
        text: "github.com/MrNuthan"
    },
    {
        icon: "fas fa-phone",
        title: "Phone",
        link: "tel:+919353152892",
        text: "+91 9353152892"
    }
];

const ContactCard: React.FC<typeof contactData[0]> = ({ icon, title, link, text }) => (
    <AnimatedElement>
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00f0ff]">
            <i className={`${icon} text-5xl text-[#00f0ff] mb-4`}></i>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#b0b0b0] break-words hover:text-[#00f0ff]">
                {text}
            </a>
        </div>
    </AnimatedElement>
);

const Contact = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Section id="contact" title="Get In Touch" ref={ref}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {contactData.map((item, index) => (
                    <ContactCard key={index} {...item} />
                ))}
            </div>
            <div className="text-center mt-12">
                <a href="https://drive.google.com/file/d/1FkKPKabl9Do62-ho5O8NtwvXeznm9nuM/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold transition-all duration-300 text-[#0a0a0f] bg-gradient-to-r from-[#00f0ff] to-[#ff00e6] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,240,255,0.3)]">
                    <i className="fas fa-download"></i> Download Resume
                </a>
            </div>
        </Section>
    );
});

export default Contact;