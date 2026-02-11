import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const posts = [
    {
        id: 1,
        title: "Stephanie & James — A Blooming Hill Farm Wedding",
        category: "Real Weddings",
        date: "Fall 2024",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/StephanieJames-569-scaled.jpg",
        excerpt: "A beautiful autumn celebration filled with warm colors, farm-to-table dining, and endless laughter under the stars."
    },
    {
        id: 2,
        title: "Top 10 Hudson Valley Wedding Venues for 2026",
        category: "Venue Guides",
        date: "January 2026",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/ZoeWills2022-116-scaled.jpg",
        excerpt: "From rustic barns to elegant estates, here are my top picks for the perfect Hudson Valley wedding backdrop."
    },
    {
        id: 3,
        title: "Cierra & Oliver — Industrial Elegance at The Factoria",
        category: "Real Weddings",
        date: "Summer 2024",
        image: "https://marlonramosphotography.com/wp-content/uploads/2024/03/CierraOliver-41-scaled.jpg",
        excerpt: "Modern industrial vibes meet romantic details at this stunning waterfront venue in Peekskill."
    },
    {
        id: 4,
        title: "The Ultimate Hudson Valley Engagement Session Guide",
        category: "Tips & Advice",
        date: "December 2025",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/07/Adventure-Engagement-Shoot-1-scaled.jpg",
        excerpt: "Everything you need to know to prepare for your engagement shoot, from outfit choices to location scouting."
    },
    {
        id: 5,
        title: "Skarleth & Carlos — An Adventure at Minnewaska",
        category: "Real Weddings",
        date: "Fall 2024",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/SkarlethCarlos2024-32-scaled.jpg",
        excerpt: "A breathtaking cliffside ceremony blending adventure with deep emotion at Minnewaska State Park."
    },
    {
        id: 6,
        title: "What to Expect on Your Wedding Day with Marlon",
        category: "Tips & Advice",
        date: "November 2025",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/StephanieJames-569-scaled.jpg",
        excerpt: "A behind-the-scenes look at how I work to capture your day authentically while keeping you relaxed."
    }
];

import SEOHead from '../components/shared/SEOHead';

const Journal = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-bg-primary">
            <SEOHead
                title="Journal | Wedding Stories & Planning Tips"
                description="Real weddings, venue guides, and wedding planning advice from Hudson Valley photographer Marlon Ramos."
            />
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 md:mb-24 space-y-4">
                    <p className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase">Journal</p>
                    <h1 className="text-4xl md:text-6xl font-heading text-text-primary">Stories, tips, and adventures</h1>
                    <p className="text-text-secondary max-w-lg mx-auto">
                        Real weddings, venue spotlights, and advice for couples planning their dream day.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer flex flex-col h-full"
                        >
                            <div className="overflow-hidden mb-6 relative aspect-[3/2]">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wider font-medium text-accent-gold">
                                    {post.category}
                                </span>
                            </div>

                            <div className="space-y-3 flex-grow">
                                <div className="flex justify-between items-center text-xs text-text-secondary uppercase tracking-wider">
                                    <span>{post.date}</span>
                                </div>
                                <h3 className="text-2xl font-heading text-text-primary group-hover:text-accent-gold transition-colors leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-text-secondary font-light leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </div>

                            <div className="pt-6 mt-auto">
                                <span className="inline-flex items-center space-x-2 text-sm uppercase tracking-widest text-text-primary border-b border-gray-200 pb-1 group-hover:text-accent-gold group-hover:border-accent-gold transition-colors">
                                    <span>Read Article</span>
                                    <ArrowRight size={14} />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Journal;
