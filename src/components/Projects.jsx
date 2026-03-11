import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import iceCoreImg from '../assets/IceCore img.png';
import hospitalLitoImg from '../assets/HospitalLito img.png';
import videoImg from '../assets/video img.png';
import video2Img from '../assets/video 2 img.png';
import video3Img from '../assets/video 3 img.png';

const projectsData = [
    {
        id: 1,
        title: "IceCore",
        category: "Full Stack",
        image: iceCoreImg,
        type: "web",
        description: "Sistema de pedidos intuitiva diseñada para modernizar la experiencia de compra en heladerías.",
        tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Tailwind CSS"],
        links: { github: "https://github.com/Thiagom05/IceCore.git", live: "https://icecoreapp.vercel.app/" }
    },
    {
        id: 2,
        title: "Hospital Lito",
        category: "Full Stack",
        image: hospitalLitoImg,
        type: "web",
        description: "Sistema de gestión hospitalaria enfocada en la administración eficiente de recursos físicos (camas) y humanos (enfermeras).",
        tech: ["Java", "Spring Boot", "Thymeleaf", "Bootstrap", "PostgreSQL"],
        links: { github: "https://github.com/Thiagom05/proyecto-hospital-lito.git", live: "https://hospital-lito.onrender.com/" }
    },
    {
        id: 3,
        title: "Próximamente...",
        category: " ",
        image: null,
        description: " ",
        type: "web",
        tech: [" "],
        links: { github: " ", live: " " }
    },
    {
        id: 4,
        title: "5 videos de youtube para volverte fuerte",
        category: "Premiere Pro",
        image: videoImg,
        description: " ",
        type: "video",
        tech: ["Premiere Pro"],
        driveUrl: "https://drive.google.com/file/d/1Drfh7fcCQrbhIH_Zs4V5uJSMcSohi77d/view?usp=drive_link",
        videoUrl: "https://www.instagram.com/reel/DRznFX0Dhr4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        id: 5,
        title: "Datos sobre la creatina",
        category: "Premiere Pro",
        image: video2Img,
        description: " ",
        type: "video",
        tech: ["Premiere Pro"],
        driveUrl: "https://drive.google.com/file/d/1aLavGgDiIL3eVkNeMu3NYdSIkOf6AgkK/view?usp=drive_link",
        videoUrl: "https://www.instagram.com/reel/DRfqYSPgZ86/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        id: 6,
        title: "Perder peso comiendo mas",
        category: "Premiere Pro",
        image: video3Img,
        description: " ",
        type: "video",
        tech: ["Premiere Pro"],
        driveUrl: "https://drive.google.com/file/d/1kpXUP8tzfrj80rPi-5V22Qe8ZyMXjcIv/view?usp=drive_link",
        videoUrl: "https://www.instagram.com/reel/DQ9dzYsjqEL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
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
                    {/* Condicional para proyectos WEB */}
                    {project.type === 'web' && (
                        <>
                            <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold hover:underline">
                                <FaGithub /> CODE
                            </a>
                            <a href={project.links.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold hover:underline">
                                <FaExternalLinkAlt /> DEMO
                            </a>
                        </>
                    )}

                    {/* Condicional para proyectos de VIDEO */}
                    {project.type === 'video' && (
                        <>
                            {/* Este botón abre el Modal, no te saca de la página */}
                            <button
                                onClick={() => project.videoUrl && window.dispatchEvent(new CustomEvent('open-video', { detail: project.videoUrl }))}
                                className="flex items-center gap-2 text-sm font-bold hover:underline cursor-pointer"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                VER REEL
                            </button>

                            <a href={project.driveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold hover:underline">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                DRIVE
                            </a>
                        </>
                    )}
                </div>

            </div>
        </motion.div>
    );
};



const Projects = () => {

    const [filter, setFilter] = useState('web');
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        const handleOpenVideo = (e) => setSelectedVideo(e.detail);
        window.addEventListener('open-video', handleOpenVideo);
        return () => window.removeEventListener('open-video', handleOpenVideo);
    }, []);


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

                {/* Botones de Filtro */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {['web', 'video'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-6 py-2 rounded-full font-bold text-sm uppercase transition-all duration-300 cursor-pointer ${filter === f
                                ? 'bg-tertiary text-primary scale-105'
                                : 'bg-transparent border border-tertiary/20 text-tertiary/70 hover:border-tertiary/50 hover:text-tertiary'
                                }`}
                        >
                            {f === 'web' ? 'Desarrollo Web' : 'Video / Edición'}
                        </button>
                    ))}
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.filter(p => p.type === filter)
                        .map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                </div>

                {/* MODAL DE VIDEO FLOTANTE */}
                <AnimatePresence>
                    {selectedVideo && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedVideo(null)}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-tertiary/90 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()} // Evita que se cierre si clickeas adentro
                                className="relative w-full max-w-sm h-[600px] bg-white rounded-2xl overflow-hidden shadow-2xl"
                            >
                                {/* Botón Cerrar */}
                                <button
                                    onClick={() => setSelectedVideo(null)}
                                    className="absolute top-4 right-4 z-10 p-2 text-tertiary bg-white rounded-full shadow hover:bg-gray-100"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>

                                {/* Iframe de Instagram Embed */}
                                <iframe
                                    className="w-full h-full border-0"
                                    src={`${selectedVideo.split('?')[0]}embed`}
                                    allowTransparency="true"
                                    allow="encrypted-media"
                                    title="Instagram Reel Player"
                                ></iframe>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
