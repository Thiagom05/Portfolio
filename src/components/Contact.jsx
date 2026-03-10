import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32 bg-tertiary text-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
                            CONTACTAME.
                        </h2>
                        <p className="text-xl text-primary/80 mb-12 max-w-md font-medium">
                            ¿Tienes un proyecto en mente? <br />
                            Siempre estoy abierto a nuevas oportunidades y colaboraciones.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:massont280@gmail.com" className="flex items-center gap-4 text-xl hover:text-secondary transition-colors">
                                <FaEnvelope className="text-2xl" />
                                <span>massont280@gmail.com</span>
                            </a>
                            <a href="https://www.linkedin.com/in/thiago-masson-4030832a9/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl hover:text-gray-300 transition-colors">
                                <FaLinkedin className="text-2xl" />
                                <span>Linkedin</span>
                            </a>
                            <a href="https://github.com/Thiagom05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl hover:text-gray-300 transition-colors">
                                <FaGithub className="text-2xl" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10"
                    >
                        <form className="space-y-6" action="https://formspree.io/f/xykdkjpv" method="POST">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold mb-2 text-primary/70">NOMBRE</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-secondary focus:bg-white/10 transition-all outline-none font-medium"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold mb-2 text-primary/70">EMAIL</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-secondary focus:bg-white/10 transition-all outline-none font-medium"
                                    placeholder="tu@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold mb-2 text-primary/70">MENSAJE</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    name="message"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-secondary focus:bg-white/10 transition-all outline-none resize-none font-medium"
                                    placeholder="Cuéntame sobre tu proyecto..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-tertiary font-bold py-4 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
                            >
                                ENVIAR MENSAJE
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
