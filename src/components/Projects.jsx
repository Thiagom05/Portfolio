import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import iceCoreImg from '../assets/IceCore img.png';
import hospitalLitoImg from '../assets/HospitalLito img.png';

const projectsData = [
    {
        id: 1,
        title: "IceCore",
        category: "Full Stack",
        image: iceCoreImg,
        description: "Sistema de pedidos intuitiva diseñada para modernizar la experiencia de compra en heladerías.",
        tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Tailwind CSS"],
        links: { github: "https://github.com/Thiagom05/IceCore.git", live: "https://icecoreapp.vercel.app/" }
    },
    {
        id: 2,
        title: "Hospital Lito",
        category: "Full Stack",
        image: hospitalLitoImg,
        description: "Sistema de gestión hospitalaria enfocada en la administración eficiente de recursos físicos (camas) y humanos (enfermeras).",
        tech: ["Java", "Spring Boot", "Thymeleaf", "Bootstrap", "PostgreSQL"],
        links: { github: "https://github.com/Thiagom05/proyecto-hospital-lito.git", live: "https://proyecto-hospital-lito-production.up.railway.app/" }
    },
    {
        id: 3,
        title: "Próximamente",
        category: "En Desarrollo",
        image: null,
        description: "Trabajando en algo nuevo y emocionante. Pronto habrá más detalles disponibles sobre este proyecto.",
        tech: [""],
        links: { github: "#", live: "#" }
    }
];

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-secondary/20"
        >
            {/* Image Area */}
            <div className="h-64 overflow-hidden bg-gray-200">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 group-hover:bg-gray-300 transition-colors">
                        <span className="text-gray-400 font-bold text-2xl group-hover:scale-110 transition-transform duration-500">
                            {project.title}
                        </span>
                    </div>
                )}
            </div>

            <div className="p-8">
                <div className="text-xs font-bold tracking-widest text-tertiary/60 mb-2 uppercase">
                    {project.category}
                </div>
                <h3 className="text-2xl font-black mb-3 text-tertiary group-hover:text-secondary transition-colors">
                    {project.title}
                </h3>
                <p className="text-tertiary/70 mb-6 font-medium">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, idx) => (
                        <span key={idx} className="text-xs font-bold text-tertiary/50">
                            #{t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    <a href={project.links.github} className="flex items-center gap-2 text-sm font-bold hover:underline">
                        <FaGithub /> CODE
                    </a>
                    <a href={project.links.live} className="flex items-center gap-2 text-sm font-bold hover:underline">
                        <FaExternalLinkAlt /> DEMO
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-tertiary"
                    >
                        MIS<br />PROYECTOS.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-tertiary/70 max-w-xl font-medium"
                    >
                        Una colección de proyectos que destacan el desarrollo y el diseño.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
