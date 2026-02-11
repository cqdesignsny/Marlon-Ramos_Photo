import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <section className="py-24 md:py-32 bg-bg-primary overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
                            <img
                                src="https://marlonramosphotography.com/wp-content/uploads/2023/10/SelftPortraits10-9-23-4-scaled.jpg"
                                alt="Marlon Ramos"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 border-[1px] border-white/20 m-4 pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full md:w-1/2 space-y-8"
                    >
                        <div className="space-y-4">
                            <p className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase">
                                Meet Your Photographer
                            </p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-primary leading-tight">
                                Hi, I'm Marlon
                            </h2>
                        </div>

                        <div className="space-y-6 text-text-secondary font-light text-lg leading-relaxed">
                            <p>
                                I'm a Hudson Valley-based photographer with a love of the outdoors, serving the entire Tri-State area. I specialize in intimate imagery through a documentary style — looking for the smaller moments that make up the whole of a story, with a touch of elegance.
                            </p>
                            <p>
                                You can relax and focus on making the best memories while I capture those genuine moments.
                            </p>
                        </div>

                        <div className="inline-flex items-center space-x-3 px-4 py-2 border border-accent-gold/30 rounded-full bg-accent-gold/5">
                            <span className="text-accent-gold font-heading italic text-xl">Hablo Español!</span>
                        </div>

                        <div className="pt-4">
                            <Link
                                to="/about"
                                className="group inline-flex items-center space-x-2 text-accent-gold uppercase tracking-widest text-sm font-medium hover:text-accent-gold-hover transition-colors"
                            >
                                <span>More about me</span>
                                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div >
        </section >
    );
};

export default Intro;
