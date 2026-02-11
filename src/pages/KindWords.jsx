import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SEOHead from '../components/shared/SEOHead';
import { allTestimonials } from '../content/testimonialsData';

const KindWords = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const reviewsPerPage = 9;
    const totalPages = Math.ceil(allTestimonials.length / reviewsPerPage);

    const currentReviews = allTestimonials.slice(
        currentPage * reviewsPerPage,
        (currentPage + 1) * reviewsPerPage
    );

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const googleReviewsUrl = "https://www.google.com/search?q=Marlon+Ramos+Photography+Hudson+Valley#lrd=0x89dd3386747dc011:0x8baf24f299afe94c,1";

    return (
        <div className="pt-32 pb-24 min-h-screen bg-bg-secondary">
            <SEOHead
                title="Kind Words | Client Reviews & Testimonials"
                description="Read 82+ five-star reviews from happy couples who trusted Marlon Ramos Photography to capture their wedding, elopement, and engagement stories."
            />
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 md:mb-24 space-y-4">
                    <p className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase">Kind Words</p>
                    <h1 className="text-4xl md:text-6xl font-heading text-text-primary">What couples are saying</h1>

                    <div className="flex flex-col items-center space-y-4 mt-8">
                        <a
                            href={googleReviewsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center space-y-2 hover:opacity-80 transition-opacity"
                        >
                            <div className="flex items-center space-x-1 bg-white px-4 py-2 rounded-full shadow-sm border border-neutral-100">
                                <span className="text-text-primary font-bold">5.0 on Google</span>
                                <div className="flex text-accent-gold">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" />
                                    ))}
                                </div>
                            </div>
                            <span className="text-xs uppercase tracking-widest text-accent-gold font-bold group-hover:underline">Check out all 82 reviews</span>
                        </a>
                    </div>
                </div>

                {/* Grid with Navigation */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Navigation Control Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10 space-y-6 md:space-y-0">
                        <div className="text-sm text-text-secondary uppercase tracking-widest font-medium">
                            Showing {currentPage * reviewsPerPage + 1}-{Math.min((currentPage + 1) * reviewsPerPage, allTestimonials.length)} of {allTestimonials.length} Reviews
                        </div>
                        <div className="flex items-center space-x-6">
                            <button
                                onClick={prevPage}
                                className="p-4 rounded-full border border-neutral-200 hover:border-accent-gold hover:text-accent-gold transition-all duration-300 bg-white shadow-sm disabled:opacity-30 disabled:cursor-not-allowed group"
                                aria-label="Previous Page"
                            >
                                <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
                            </button>

                            {/* Page Indicator (Dots) - Desktop only for spacing */}
                            <div className="hidden md:flex space-x-2">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPage === i ? 'w-8 bg-accent-gold' : 'bg-neutral-300 hover:bg-neutral-400'
                                            }`}
                                        aria-label={`Go to page ${i + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextPage}
                                className="p-4 rounded-full border border-neutral-200 hover:border-accent-gold hover:text-accent-gold transition-all duration-300 bg-white shadow-sm disabled:opacity-30 disabled:cursor-not-allowed group"
                                aria-label="Next Page"
                            >
                                <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {currentReviews.map((t, index) => (
                                <motion.div
                                    key={`${currentPage}-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-white p-10 shadow-sm border border-neutral-100 flex flex-col justify-between group hover:shadow-md transition-shadow duration-300"
                                >
                                    <div>
                                        <Quote className="text-accent-gold mb-6 opacity-30 group-hover:opacity-60 transition-opacity duration-300" size={32} />
                                        <p className="text-text-secondary italic mb-8 leading-relaxed text-[15px]">
                                            "{t.quote}"
                                        </p>
                                    </div>
                                    <div>
                                        <div className="w-8 h-px bg-accent-gold mb-4 opacity-30"></div>
                                        <p className="text-text-primary font-heading text-lg">— {t.name}</p>
                                        <p className="text-accent-gold text-xs uppercase tracking-widest mt-1 font-bold">{t.date}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Mobile Only Dots */}
                    <div className="flex md:hidden justify-center mt-12 space-x-2">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPage === i ? 'w-6 bg-accent-gold' : 'bg-neutral-300'
                                    }`}
                                aria-label={`Go to page ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-32 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-text-primary text-white p-12 md:p-24 rounded-sm relative overflow-hidden"
                    >
                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold opacity-5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                        <h2 className="text-3xl md:text-5xl font-heading mb-8 relative z-10">Ready to tell your story?</h2>
                        <p className="text-neutral-400 mb-12 max-w-lg mx-auto relative z-10 text-lg">
                            Every love story is unique. I'd love to hear yours and discuss how we can capture it authentically.
                        </p>
                        <a
                            href="/contact"
                            className="relative z-10 inline-block bg-accent-gold text-white px-12 py-5 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-text-primary transition-all duration-500 shadow-xl"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default KindWords;
