import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "We Connect",
        description: "We'll hop on a call to get to know each other, talk about your vision, and make sure we're the right fit."
    },
    {
        number: "02",
        title: "We Plan",
        description: "Together we'll build a timeline for your day so every important moment is captured."
    },
    {
        number: "03",
        title: "I Capture",
        description: "On your wedding day, relax and be present. I'll be there for every laugh, tear, and stolen glance."
    },
    {
        number: "04",
        title: "You Relive",
        description: "Within 48 hours you'll get sneak peeks. Your full gallery arrives in 2-4 weeks — ready to share forever."
    }
];

const Experience = () => {
    return (
        <section className="py-24 md:py-32 bg-bg-dark text-text-light">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="mb-20 md:mb-24 px-4 text-center md:text-left">
                    <p className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
                        The Experience
                    </p>
                    <h2 className="text-4xl md:text-5xl font-heading text-white">
                        Effortless from start to finish
                    </h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/10 w-full" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="relative space-y-6 text-center md:text-left p-4"
                        >
                            <span className="block text-4xl md:text-5xl font-heading text-accent-gold relative z-10 bg-bg-dark inline-block px-2">
                                {step.number}
                            </span>
                            <h3 className="text-2xl font-heading text-white">
                                {step.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;
