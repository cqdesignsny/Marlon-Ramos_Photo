import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/shared/SEOHead';

import { allProjects } from '../content/portfolioData';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? allProjects
        : allProjects.filter(project => project.type === filter);

    return (
        <div className="bg-bg-primary min-h-screen pt-32 pb-24">
            <SEOHead
                title="Portfolio | Marlon Ramos Photography"
                description="Explore the wedding, elopement, and engagement photography portfolio of Marlon Ramos, serving the Hudson Valley, Catskills, and Tri-State area."
            />
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <p className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase">Portfolio</p>
                    <h1 className="text-4xl md:text-6xl font-heading text-text-primary">Love stories, beautifully told</h1>
                    <p className="text-text-secondary max-w-lg mx-auto">
                        Each wedding is unique. Each story deserves to be remembered exactly as it felt.
                    </p>
                </div>

                {/* Filter */}
                <div className="flex justify-center space-x-6 md:space-x-12 mb-16 overflow-x-auto pb-4">
                    {['all', 'wedding', 'elopement', 'engagement', 'portrait'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`text-sm uppercase tracking-widest pb-2 border-b-2 transition-colors whitespace-nowrap ${filter === type ? 'border-accent-gold text-text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'
                                }`}
                        >
                            {type === 'all' ? 'All Stories' : `${type}s`}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group cursor-pointer"
                            >
                                <Link to={`/portfolio/${project.slug}`}>
                                    <div className="overflow-hidden mb-4 relative aspect-[2/3] bg-bg-secondary">
                                        <motion.img
                                            src={project.image}
                                            alt={project.couple}
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="text-white uppercase tracking-widest text-sm font-medium border-b border-white pb-1">
                                                View Story
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-heading text-text-primary">{project.couple}</h3>
                                        <p className="text-xs uppercase tracking-wider text-text-secondary mt-1">{project.venue}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </div>
    );
};

export default Portfolio;
