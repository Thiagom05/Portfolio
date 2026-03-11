import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsWordpress } from 'react-icons/bs';

const Hero = () => {
    const oficios = [
        {
            title: "SOFTWARE DEVELOPER.",
            description: "Desarrollador de software enfocado en la construcción de sistemas web escalables y eficientes."
        },
        {
            title: "VIDEO EDITOR.",
            description: "Editor de video especializado en crear contenido audiovisual dinámico y visualmente atractivo."
        }
    ];

    const [oficioIndex, setOficioIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setOficioIndex((prevIndex) => (prevIndex + 1) % oficios.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

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

                <div className="h-[100px] sm:h-[140px] md:h-[180px] overflow-hidden relative">
                    <AnimatePresence mode='popLayout'>
                        <motion.h1
                            key={oficioIndex}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-tertiary leading-[0.9]"
                        >
                            {oficios[oficioIndex].title.split(' ').map((word, idx) => (
                                <React.Fragment key={idx}>
                                    {word}
                                    {idx === 0 && <br />}
                                    {' '}
                                </React.Fragment>
                            ))}
                        </motion.h1>
                    </AnimatePresence>


                </div>

                <div className="relative h-[80px] sm:h-[60px] overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={oficioIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-2xl text-xl sm:text-2xl text-tertiary/70 font-medium absolute w-full"
                        >
                            {oficios[oficioIndex].description}
                        </motion.p>
                    </AnimatePresence>
                </div>

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
