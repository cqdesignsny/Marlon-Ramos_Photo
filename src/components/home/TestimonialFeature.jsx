import { motion } from 'framer-motion';

const TestimonialFeature = () => {
    return (
        <section className="py-24 md:py-32 bg-bg-primary relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center space-y-12"
                >
                    <span className="text-6xl md:text-8xl font-heading text-accent-gold opacity-30">
                        &ldquo;
                    </span>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading italic leading-relaxed text-text-primary">
                        Marlon beautifully and thoughtfully captured our wedding day. We could not be more thrilled with the pictures. He was organized, professional, and very patient with us and our non-traditional wedding. Incredible value for your money.
                    </h3>

                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-20 h-px bg-accent-gold"></div>
                        <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">
                            Carson & Lex Rose
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialFeature;
