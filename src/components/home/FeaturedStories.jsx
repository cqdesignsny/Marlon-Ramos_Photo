import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const stories = [
    {
        id: 1,
        couple: "Olivia & Dillon",
        venue: "Indian Ridge Preserve",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/OliviaDillon-164-scaled.jpg",
        link: "/portfolio/olivia-dillon"
    },
    {
        id: 2,
        couple: "Stephanie & James",
        venue: "Blooming Hill Farm",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/StephanieJames-569-scaled.jpg",
        link: "/portfolio/stephanie-james"
    },
    {
        id: 3,
        couple: "Lina & Kevin",
        venue: "Stonegate Farm",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/LinaKevin-451-scaled.jpg",
        link: "/portfolio/lina-kevin"
    },
    {
        id: 4,
        couple: "Skarleth & Carlos",
        venue: "Minnewaska State Park",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/SkarlethCarlos2024-32-scaled.jpg",
        link: "/portfolio/skarleth-carlos"
    },
    {
        id: 5,
        couple: "Carson & Lex",
        venue: "The Graham & Co",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/CarsonLex-329-scaled.jpg",
        link: "/portfolio/carson-lex"
    },
    {
        id: 6,
        couple: "Cierra & Oliver",
        venue: "The Factoria",
        image: "https://marlonramosphotography.com/wp-content/uploads/2024/03/CierraOliver-41-scaled.jpg",
        link: "/portfolio/cierra-oliver"
    }
];

const FeaturedStories = () => {
    return (
        <section className="py-24 md:py-32 bg-bg-secondary">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24 space-y-4">
                    <p className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase">
                        Portfolio
                    </p>
                    <h2 className="text-4xl md:text-5xl font-heading text-text-primary">
                        Featured Stories
                    </h2>
                    <p className="text-text-secondary max-w-lg mx-auto">
                        Every wedding is a love story waiting to be told. Here are a few of my favorites.
                    </p>
                </div>

                {/* Masonry-ish Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group cursor-pointer ${index % 3 === 1 ? 'md:translate-y-16' : ''}`}
                        >
                            <Link to={story.link} className="block">
                                <div className="overflow-hidden mb-6 relative">
                                    <motion.div
                                        className="aspect-[2/3] w-full"
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <img
                                            src={story.image}
                                            alt={`${story.couple} at ${story.venue}`}
                                            className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
                                        />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white uppercase tracking-widest text-sm font-medium border-b border-white pb-1">
                                            View Story
                                        </span>
                                    </div>
                                </div>

                                <div className="text-center space-y-2">
                                    <h3 className="text-2xl font-heading text-text-primary group-hover:text-accent-gold transition-colors">
                                        {story.couple}
                                    </h3>
                                    <p className="text text-text-secondary uppercase tracking-wider text-xs">
                                        {story.venue}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-24 md:mt-32 text-center">
                    <Link
                        to="/portfolio"
                        className="inline-flex items-center space-x-2 text-text-primary uppercase tracking-widest text-sm font-medium hover:text-accent-gold transition-colors border-b border-text-primary hover:border-accent-gold pb-1"
                    >
                        <span>View Full Portfolio</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default FeaturedStories;
