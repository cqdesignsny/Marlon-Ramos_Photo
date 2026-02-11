import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import SEOHead from '../components/shared/SEOHead';

const About = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <SEOHead
                title="About Marlon | Hudson Valley Wedding Photographer"
                description="Meet Marlon Ramos, a Hudson Valley wedding photographer with a passion for capturing intimate moments and timeless stories."
            />
            <div className="container mx-auto px-6">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Image */}
                    <div className="w-full lg:w-5/12 sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="aspect-[3/4] relative overflow-hidden bg-bg-secondary"
                        >
                            <img
                                src="https://marlonramosphotography.com/wp-content/uploads/2023/10/SelftPortraits10-9-23-4-scaled.jpg"
                                alt="Marlon Ramos"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-7/12 space-y-8"
                    >
                        <div className="space-y-4">
                            <p className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase">About</p>
                            <h1 className="text-4xl md:text-6xl font-heading text-text-primary">The man behind the lens</h1>
                        </div>

                        <div className="prose prose-lg text-text-secondary font-light space-y-6">
                            <p className="text-xl text-text-primary">
                                From the moment I picked up a camera, I knew I'd found my calling. There's something magical about freezing a moment in time — a stolen glance, a joyful tear, the way light falls on two people in love.
                            </p>
                            <p>
                                I'm a Hudson Valley-based photographer specializing in documentary-style wedding photography. My approach is simple: I blend into your day, anticipating the moments that matter, and capturing them with an eye for intimacy and elegance. I won't get in the way, but I'll never miss a moment.
                            </p>
                            <p>
                                When I'm not behind the camera, you'll find me exploring the trails and hidden gems of the Hudson Valley — the same landscapes that make your wedding photos so breathtaking.
                            </p>
                            <p>
                                My foundation is great customer service. From our first call to the delivery of your final gallery, my goal is to make the entire experience effortless and enjoyable. This is your day. I'm just here to make sure you remember every second of it.
                            </p>
                        </div>

                        {/* Bilingual Callout */}
                        <div className="bg-bg-secondary p-8 border border-accent-gold/20 rounded-sm">
                            <h3 className="text-2xl font-heading italic text-accent-gold mb-4">Hablo Español!</h3>
                            <p className="text-text-secondary">
                                I proudly serve the diverse Hudson Valley and Tri-State community. Si prefieres comunicarte en español, estoy aquí para ti.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center space-x-2 bg-accent-gold text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-accent-gold-hover transition-colors"
                            >
                                <span>Let's talk about your day</span>
                            </Link>
                        </div>

                    </motion.div>

                </div>

            </div>
        </div>
    );
};

export default About;
