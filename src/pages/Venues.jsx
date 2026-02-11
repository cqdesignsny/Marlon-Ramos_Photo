import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const venues = [
    {
        name: "Minnewaska State Park Preserve",
        location: "New Paltz, NY",
        description: "Breathtaking cliffside views and sweeping mountain landscapes make this a destination for adventurous couples.",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/SkarlethCarlos2024-32-scaled.jpg"
    },
    {
        name: "Stonegate Farm",
        location: "Hudson Valley, NY",
        description: "Rustic elegance surrounded by rolling fields and warm natural light.",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/LinaKevin-451-scaled.jpg"
    },
    {
        name: "Blooming Hill Farm",
        location: "Blooming Grove, NY",
        description: "Farm-to-table charm with gardens and open-air ceremony spaces.",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/StephanieJames-569-scaled.jpg"
    },
    {
        name: "Gather Greene",
        location: "Coxsackie, NY",
        description: "A bohemian retreat in the Catskills with handcrafted cabins and natural beauty.",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/AnaAdam-147-scaled.jpg"
    },
    {
        name: "Feast at Round Hill",
        location: "Washingtonville, NY",
        description: "A historic estate with lush grounds and an intimate atmosphere.",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/ZoeWills2022-71-scaled.jpg"
    },
    {
        name: "Wylder Hotel Windham",
        location: "Windham, NY",
        description: "Modern mountain getaway vibes with Catskill Mountain charm.",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/WylderWindhamWedding-19.jpg"
    },
    {
        name: "Red Maple Vineyard",
        location: "West Park, NY",
        description: "Vineyard views, barrel rooms, and Hudson Valley wine country at its finest.",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/RedMapleWinery-12.jpg"
    },
    {
        name: "Hollow Brook Golf Club",
        location: "Cortlandt Manor, NY",
        description: "Manicured greens and elegant ballroom spaces for classic celebrations.",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/MorganGarret-38-scaled.jpg"
    },
    {
        name: "Hildene",
        location: "Manchester, VT",
        description: "A historic Lincoln family estate with formal gardens and mountain backdrops.",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/MarlonRamosPhotography.jpg"
    },
    {
        name: "The Factoria at Charles Point",
        location: "Peekskill, NY",
        description: "Industrial-chic waterfront venue with stunning Hudson River views.",
        image: "https://marlonramosphotography.com/wp-content/uploads/2024/03/CierraOliver-41-scaled.jpg"
    },
    {
        name: "Tilly's Table",
        location: "Brewster, NY",
        description: "A hidden gem with farm-fresh cuisine and intimate garden settings.",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/EmilyThomas-437-scaled.jpg"
    },
    {
        name: "The Graham & Co",
        location: "Phoenicia, NY",
        description: "A stylish Catskills lodge with mid-century modern flair.",
        image: "https://marlonramosphotography.com/wp-content/uploads/2022/11/CarsonLex-329-scaled.jpg"
    }
];

import SEOHead from '../components/shared/SEOHead';

const Venues = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-bg-secondary">
            <SEOHead
                title="Best Wedding Venues in Hudson Valley & Catskills"
                description="A curated list of the most stunning wedding venues in the Hudson Valley, Catskills, and Tri-State area, vetted by Marlon Ramos Photography."
            />
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 md:mb-24 space-y-4">
                    <p className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase">Venues</p>
                    <h1 className="text-4xl md:text-6xl font-heading text-text-primary max-w-4xl mx-auto">
                        Hudson Valley's most stunning wedding venues
                    </h1>
                    <p className="text-text-secondary max-w-lg mx-auto">
                        I've had the privilege of capturing love stories at some of the Hudson Valley's most beautiful locations.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {venues.map((venue, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group cursor-pointer bg-white overflow-hidden shadow-sm"
                        >
                            <div className="overflow-hidden aspect-[4/3] relative">
                                <img
                                    src={venue.image}
                                    alt={venue.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-6 md:p-8 space-y-3">
                                <h3 className="text-xl font-heading text-text-primary group-hover:text-accent-gold transition-colors">
                                    {venue.name}
                                </h3>
                                <p className="text-xs uppercase tracking-wider text-text-secondary font-medium">
                                    {venue.location}
                                </p>
                                <p className="text-text-secondary font-light text-sm leading-relaxed">
                                    {venue.description}
                                </p>

                                <div className="pt-4">
                                    <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-accent-gold font-medium">
                                        <span>See weddings here</span>
                                        <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Venues;
