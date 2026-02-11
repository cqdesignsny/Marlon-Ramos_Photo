import { motion } from 'framer-motion';
import { Check, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEOHead from '../components/shared/SEOHead';

const packages = [
    {
        name: "Elopement",
        price: "Starting at $2,500",
        features: [
            "Up to 4 hours of coverage",
            "High-resolution files",
            "Sneak peeks within 48 hours",
            "Full gallery within 2 weeks",
            "Online gallery",
            "Location scouting assistance"
        ]
    },
    {
        name: "Wedding",
        price: "Starting at $4,000",
        features: [
            "Up to 8 hours of coverage",
            "High-resolution files",
            "Sneak peeks within 48 hours",
            "Full gallery within 4 weeks",
            "Online gallery",
            "Engagement session included",
            "Second photographer available"
        ],
        featured: true
    },
    {
        name: "Premium",
        price: "Starting at $6,000",
        features: [
            "Full-day coverage (10+ hours)",
            "High-resolution files",
            "Sneak peeks within 48 hours",
            "Full gallery within 4 weeks",
            "Online gallery",
            "Engagement session included",
            "Second photographer included",
            "Videography add-on available",
            "Custom wedding album"
        ]
    }
];

const faqs = [
    {
        question: "What is your photography style?",
        answer: "I specialize in intimate imagery through a documentary style, looking for smaller moments that make up the whole of a story with a touch of elegance. I like to blend in but I'm also not afraid to take the lead and capture important shots."
    },
    {
        question: "How much of a deposit do you require?",
        answer: "There is a non-refundable 25% deposit at the time of booking. Full payment is due one month before the wedding."
    },
    {
        question: "How long until we receive our images?",
        answer: "You'll get a sneak peek within 48 hours and your full gallery in 2-4 weeks. I don't like waiting, and I don't like making you wait."
    },
    {
        question: "Can I customize a package?",
        answer: "Absolutely. Once we have our first call, we can dive deep and customize a package to fit your specific needs."
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-border-light py-6">
            <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-heading text-text-primary">{question}</span>
                <Plus className={`text-accent-gold transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-text-secondary font-light">{answer}</p>
            </div>
        </div>
    );
};

const Investment = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-bg-primary">
            <SEOHead
                title="Investment | Hudson Valley Wedding Photography"
                description="Transparent pricing for Hudson Valley weddings, elopements, and engagements. Invest in timeless memories with Marlon Ramos Photography."
            />

            {/* Hero */}
            <div className="container mx-auto px-6 text-center mb-16 md:mb-24 space-y-4">
                <p className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase">Investment</p>
                <h1 className="text-4xl md:text-6xl font-heading text-text-primary">Memories that last forever</h1>
                <p className="text-text-secondary max-w-2xl mx-auto">
                    Your wedding day happens once. The photographs are how you'll relive it for the rest of your lives.
                </p>
            </div>

            <div className="container mx-auto px-6">

                {/* Packages */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-8 md:p-10 border ${pkg.featured ? 'border-accent-gold bg-bg-secondary relative' : 'border-border-light bg-white'}`}
                        >
                            {pkg.featured && (
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-gold text-white text-xs uppercase tracking-widest px-4 py-1 rounded-full">
                                    Most Popular
                                </span>
                            )}
                            <h3 className="text-2xl font-heading text-text-primary mb-2">{pkg.name}</h3>
                            <p className="text-xl text-accent-gold font-medium mb-8">{pkg.price}</p>

                            <ul className="space-y-4 mb-10">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start space-x-3 text-sm text-text-secondary">
                                        <Check size={16} className="text-accent-gold mt-1 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/contact"
                                className={`block w-full text-center py-3 px-6 rounded-full text-sm uppercase tracking-widest transition-colors ${pkg.featured
                                    ? 'bg-accent-gold text-white hover:bg-accent-gold-hover'
                                    : 'border border-text-primary text-text-primary hover:bg-text-primary hover:text-white'
                                    }`}
                            >
                                Book Consultation
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Add-ons */}
                <div className="max-w-4xl mx-auto mb-24">
                    <h3 className="text-2xl font-heading text-text-primary mb-8 text-center">Customize Your Package</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-text-secondary">
                        <div className="flex justify-between border-b border-border-light pb-2">
                            <span>Second Photographer</span>
                            <span>Inquire</span>
                        </div>
                        <div className="flex justify-between border-b border-border-light pb-2">
                            <span>Videography Package</span>
                            <span>Inquire</span>
                        </div>
                        <div className="flex justify-between border-b border-border-light pb-2">
                            <span>Engagement Session</span>
                            <span>Inquire</span>
                        </div>
                        <div className="flex justify-between border-b border-border-light pb-2">
                            <span>Custom Wedding Album</span>
                            <span>Inquire</span>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-3xl font-heading text-text-primary mb-12 text-center">Common Questions</h3>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Investment;
