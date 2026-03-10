import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const skillsData = [
    {
        category: "Frontend",
        skills: ["React", "JavaScript", "Tailwind CSS", "Bootstrap", "Thymeleaf", "HTML5", "CSS3"]
    },
    {
        category: "Backend",
        skills: ["Java", "Spring Boot", "MySQL", "PostgreSQL", "MongoDB"]
    },
    {
        category: "Herramientas",
        skills: ["Git & GitHub", "Docker", "Postman", "Render", "Vercel", "Railway", "NeonDB"]
    }
];

const AccordionItem = ({ category, skills }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-none">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex justify-between items-center text-left focus:outline-none group"
            >
                <span className="text-xl font-bold text-tertiary group-hover:text-secondary transition-colors">
                    {category}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 group-hover:text-gray-600"
                >
                    <FaChevronDown />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 pt-2 flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-secondary/20 rounded-md text-sm font-medium text-tertiary hover:bg-secondary/40 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

                    {/* Column 1: Title & Bio */}
                    <div className="space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-black tracking-tighter"
                        >
                            SOBRE MÍ.
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-6 text-lg md:text-xl text-tertiary/70 font-medium"
                        >
                            <p>
                                Creo soluciones digitales que resuelven problemas reales. Me enfoco en construir aplicaciones web escalables, eficientes y con una gran experiencia de usuario.
                            </p>
                            <p>
                                Transformo ideas complejas en productos funcionales y elegantes, cuidando cada detalle desde la arquitectura hasta la interfaz final.
                            </p>
                        </motion.div>
                    </div>

                    {/* Column 2: Tech Stack Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-secondary/20"
                    >
                        <h3 className="text-xl font-black mb-6">Tecnologías</h3>
                        <div className="space-y-4">
                            {skillsData.map((section, index) => (
                                <AccordionItem
                                    key={index}
                                    category={section.category}
                                    skills={section.skills}
                                />
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
