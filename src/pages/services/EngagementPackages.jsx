import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Plus } from 'lucide-react';
import { useState } from 'react';

import SEOHead from '../../components/shared/SEOHead';

const EngagementPackages = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

    const faqs = [
        {
            question: "What is an Adventure Engagement shoot?",
            answer: "Think of it as a good hike where you get to dress up and look good while doing it. You get to choose from hand-selected locations with epic views. If you have a dream location we can go there too."
        },
        {
            question: "How soon do I get my photos?",
            answer: "You will get the first gallery within 2-3 days. As soon as you choose your top 25 photos, the final gallery will be delivered."
        },
        {
            question: "How many outfit changes am I allowed?",
            answer: "Typically the session allows for 2 outfit changes, subject to location."
        },
        {
            question: "When is the best time to do an engagement shoot?",
            answer: "The best time is the golden hour, just before sunset. We can coordinate depending on the time of the year."
        }
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-bg-primary">
            <SEOHead
                title="Engagement Sessions | Hudson Valley Adventure Photography"
                description="Book an adventure engagement session in the Hudson Valley. Celebrate your engagement with epic views and candid moments."
            />
            <div className="container mx-auto px-6">

                <div className="text-center mb-16 md:mb-24 space-y-6">
                    <p className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase">Services</p>
                    <h1 className="text-4xl md:text-6xl font-heading text-text-primary">Engagement Sessions</h1>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Your engagement marks the beginning of something beautiful. Let’s capture it in a way that feels authentically you—whether we’re hiking a favorite trail or exploring hidden gems of the Hudson Valley.
                    </p>
                </div>

                <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden mb-24 bg-bg-secondary">
                    <img
                        src="https://marlonramosphotography.com/wp-content/uploads/2021/11/Wedding-Photographer-Newburgh-NY-1-1.jpg"
                        alt="Engagement Photography"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                        <h2 className="text-3xl font-heading text-text-primary">Forever has a nice ring to it…</h2>
                        <p>
                            Now that you and your partner have decided on forever, it’s time to share your engagement with your friends and family! There is nothing quite like your love story, and I want to help you capture it as authentically as I can.
                        </p>
                        <p>
                            As your engagement photographer, I want to make you feel as comfortable as possible so that your love can shine through in your engagement photos in a way that not only represents who you are as a couple, but tells the genuine story of how your love came to be.
                        </p>
                        <p>
                            My job is easiest when you feel at ease in front of the camera, because this is when I can truly capture your connection.
                        </p>
                    </div>

                    <div className="bg-bg-secondary p-8 md:p-12 border border-border-light">
                        <h3 className="text-xl font-heading text-text-primary mb-6">Every Session Includes:</h3>
                        <ul className="space-y-4">
                            {[
                                "High-Resolution Files",
                                "Sneak Peeks within 48-hours",
                                "Full Gallery within 2-3 weeks",
                                "Online Gallery",
                                "Adventure Location Options",
                                "Outfit Consultation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start space-x-3 text-text-secondary">
                                    <Check size={18} className="text-accent-gold mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <Link to="/contact" className="inline-block w-full text-center bg-accent-gold text-white px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-accent-gold-hover transition-colors">
                                Book Session
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

export default EngagementPackages;
