import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const heroImages = [
    "https://marlonramosphotography.com/wp-content/uploads/2022/11/StephanieJames-569-scaled.jpg",
    "https://marlonramosphotography.com/wp-content/uploads/2022/11/OliviaDillon-164-scaled.jpg",
    "https://marlonramosphotography.com/wp-content/uploads/2022/11/LinaKevin-451-scaled.jpg",
    "https://marlonramosphotography.com/wp-content/uploads/2022/11/SkarlethCarlos2024-32-scaled.jpg",
    "https://marlonramosphotography.com/wp-content/uploads/2024/03/CierraOliver-41-scaled.jpg"
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 6000); // 6 seconds per slide

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-bg-dark">
            {/* Slideshow */}
            <AnimatePresence mode='popLayout'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <motion.img
                        src={heroImages[currentIndex]}
                        alt="Wedding photography"
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.05 }}
                        transition={{ duration: 6, ease: "linear" }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="space-y-6"
                >
                    <img
                        src="https://marlonramosphotography.com/wp-content/uploads/2021/10/Marlon-Ramos_logo_Long_logo.svg"
                        alt="Marlon Ramos Photography"
                        className="h-12 md:h-16 mx-auto invert brightness-0 mb-8"
                    />
                    <h1 className="text-white font-heading text-xl md:text-2xl tracking-[0.2em] uppercase">
                        Intimate moments. Timeless stories.
                        <span className="block text-sm md:text-base mt-4 font-body normal-case tracking-wider opacity-90">
                            Hudson Valley & Tri-State Wedding Photography
                        </span>
                    </h1>
                    <div className="pt-8">
                        <Link
                            to="/contact"
                            className="inline-block bg-accent-gold text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-accent-gold-hover transition-colors"
                        >
                            Book Your Date
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={32} strokeWidth={1} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
