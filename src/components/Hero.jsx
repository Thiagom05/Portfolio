import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="space-y-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-tertiary/80 text-lg sm:text-xl font-medium"
                >
                    Hola, soy Thiago.
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-tertiary leading-[0.9]"
                >
                    SOFTWARE<br />
                    DEVELOPER.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl text-xl sm:text-2xl text-tertiary/70 font-medium"
                >
                    Desarrollador de software enfocado en la construcción de sistemas escalables y eficientes.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="pt-8"
                >
                    <a
                        href="#projects"
                        className="group relative inline-block pb-1 text-lg font-bold text-tertiary transition-all duration-300 hover:scale-105 transform"
                    >
                        Ver Proyectos
                        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-tertiary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
