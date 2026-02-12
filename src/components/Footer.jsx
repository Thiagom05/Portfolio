import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-tertiary text-primary border-t border-white/10 mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="font-bold text-lg tracking-tighter">Thiago Masson.</span>
                    <p className="text-gray-400 text-sm mt-1 font-medium">Creando experiencias digitales.</p>
                </div>

                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a href="https://github.com/Thiagom05" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <span className="sr-only">GitHub</span>
                        <FaGithub size={20} />
                    </a>
                    <a href="https://linkedin.com/in/thiago-masson-4030832a9/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <FaLinkedin size={20} />
                    </a>
                    <a href="mailto:massont280@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        <span className="sr-only">Email</span>
                        <FaEnvelope size={20} />
                    </a>
                </div>

                <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
