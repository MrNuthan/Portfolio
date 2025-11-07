
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="text-center py-8 px-[5%] border-t border-white/10 text-[#b0b0b0]">
            <p>&copy; {new Date().getFullYear()} Nuthan N V. All rights reserved. Built with passion and code.</p>
        </footer>
    );
};

export default Footer;
