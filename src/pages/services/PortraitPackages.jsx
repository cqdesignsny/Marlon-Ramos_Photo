import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Plus } from 'lucide-react';
import { useState } from 'react';

import SEOHead from '../../components/shared/SEOHead';

const PortraitPackages = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

    const faqs = [
        {
            question: "Do you do corporate headshot photography?",
            answer: "Yes, contact me for a custom quote based on your needs."
        },
        {
            question: "How do I dress up?",
            answer: "The ingredients to a great photo are location, photographer, and you! Dress to impress and bring your smile."
        },
        {
            question: "Do you do Holiday Photos?",
            answer: "We live in the beautiful Hudson Valley with great locations for family portraits so Yes, I can shoot family holiday photos."
        }
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-bg-primary">
            <SEOHead
                title="Portrait Photography | Hudson Valley Family & Individual Portraits"
                description="Professional portrait photography in the Hudson Valley. Corporate headshots, family portraits, and holiday photos with a relaxed, natural style."
            />
            <div className="container mx-auto px-6">

                <div className="text-center mb-16 md:mb-24 space-y-6">
                    <p className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase">Services</p>
                    <h1 className="text-4xl md:text-6xl font-heading text-text-primary">Portraits</h1>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Portraits should feel like more than just a photo—they should feel like you. We create relaxed, personal sessions that bring out your best self.
                    </p>
                </div>

                <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden mb-24 bg-bg-secondary">
                    <img
                        src="https://marlonramosphotography.com/wp-content/uploads/2021/12/Marlon-Ramos-Portrait-CO-L-6.jpg"
                        alt="Portrait Photography"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                        <h2 className="text-3xl font-heading text-text-primary">Put your best foot forward…</h2>
                        <p>
                            Whether you’re looking to update your portfolio with a professional photo, hoping to capture nostalgic moments with your family, or simply looking to pamper yourself, professional portrait photography is the perfect way to celebrate the moments that are important to you.
                        </p>
                        <p>
                            My style of portrait photography uses the atmosphere of the background you choose to enhance what makes you “you”, through a combination of light, natural posing, and paying attention to candid moments.
                        </p>
                        <p>
                            The key to a great portrait photograph is creating an atmosphere that allows you, as the subject, to feel comfortable enough to be yourself!
                        </p>
                    </div>

                    <div className="bg-bg-secondary p-8 md:p-12 border border-border-light">
                        <h3 className="text-xl font-heading text-text-primary mb-6">Every Session Includes:</h3>
                        <ul className="space-y-4">
                            {[
                                "High-Resolution Files",
                                "Professional Retouching",
                                "Online Gallery",
                                "Location Guidance",
                                "Style Advice"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start space-x-3 text-text-secondary">
                                    <Check size={18} className="text-accent-gold mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <Link to="/contact" className="inline-block w-full text-center bg-accent-gold text-white px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-accent-gold-hover transition-colors">
                                Book Portrait Session
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <h3 className="text-3xl font-heading text-text-primary mb-12 text-center">Common Questions</h3>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-border-light py-6">
                                <button
                                    className="flex justify-between items-center w-full text-left focus:outline-none"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="text-lg font-heading text-text-primary">{faq.question}</span>
                                    <Plus className={`text-accent-gold transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`} />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-text-secondary font-light">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PortraitPackages;
