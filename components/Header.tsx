
import React, { useState } from 'react';

interface HeaderProps {
    activeSection: string;
    onLinkClick: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onLinkClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { id: 'home', title: 'Home' },
        { id: 'about', title: 'About' },
        { id: 'skills', title: 'Skills' },
        { id: 'projects', title: 'Projects' },
        { id: 'experience', title: 'Experience' },
        { id: 'education', title: 'Education' },
        { id: 'contact', title: 'Contact' },
    ];

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        onLinkClick(id);
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full bg-[rgba(10,10,15,0.8)] backdrop-blur-lg px-[5%] py-4 z-50 border-b border-white/10">
            <div className="container max-w-[1400px] mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#ff00e6] bg-clip-text text-transparent">
                    Portfolio
                </div>
                <div className="lg:hidden text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className="fas fa-bars"></i>
                </div>
                <ul className={`
                    lg:flex lg:items-center lg:gap-8 
                    fixed lg:static top-[70px] bg-[rgba(10,10,15,0.95)] lg:bg-transparent
                    w-full lg:w-auto h-full lg:h-auto
                    flex-col lg:flex-row p-8 lg:p-0 transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'left-0' : '-left-full'}
                `}>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={(e) => handleLinkClick(e, link.id)}
                                className={`font-medium transition-colors duration-300 hover:text-[#00f0ff] ${activeSection === link.id ? 'text-[#00f0ff]' : 'text-white'}`}
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
