import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } },
        open: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2 } }
    };

    const navLinks = [
        { title: 'Inicio', href: '#hero' },
        { title: 'Sobre mí', href: '#about' },
        { title: 'Proyectos', href: '#projects' },
        { title: 'Contacto', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full bg-tertiary shadow-md z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer text-primary">
                        <span className="font-bold text-2xl tracking-tighter">Thiago Masson</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className="text-primary hover:text-secondary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-primary hover:text-secondary focus:outline-none"
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="absolute top-16 left-0 w-full bg-primary shadow-xl md:hidden flex flex-col items-center py-4 space-y-4 border-t border-tertiary/10"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                onClick={toggleMenu}
                                className="text-tertiary hover:text-secondary text-lg font-medium py-2 w-full text-center hover:bg-tertiary transition-colors"
                            >
                                {link.title}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
