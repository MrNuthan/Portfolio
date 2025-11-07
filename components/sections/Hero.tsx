
import React, { forwardRef } from 'react';

const Hero = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="home" ref={ref} className="min-h-screen flex items-center justify-center px-[5%] py-24 relative">
            <div className="max-w-[1400px] text-center lg:text-left">
                <div className="hero-text">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                        Hi, I'm <span className="bg-gradient-to-r from-[#00f0ff] to-[#ff00e6] bg-clip-text text-transparent">Nuthan N V</span>
                    </h1>
                    <p className="text-xl text-[#b0b0b0] mb-8">MCA Student | Full-Stack Developer | Cybersecurity Enthusiast</p>
                    <p className="text-[#b0b0b0] mb-8 max-w-2xl mx-auto lg:mx-0">
                        Passionate about building innovative solutions and exploring the intersection of web development and cybersecurity.
                    </p>
                    <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                        <a href="#contact" className="px-8 py-3 rounded-full font-semibold transition-all duration-300 text-[#0a0a0f] bg-gradient-to-r from-[#00f0ff] to-[#ff00e6] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,240,255,0.3)]">
                            Get In Touch
                        </a>
                        <a href="#projects" className="px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-transparent border-2 border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-[#0a0a0f]">
                            View Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Hero;
