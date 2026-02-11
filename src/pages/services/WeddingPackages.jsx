import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Plus } from 'lucide-react';
import { useState } from 'react';

import SEOHead from '../../components/shared/SEOHead';

const WeddingPackages = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "What is your photography style?",
            answer: "I specialize in intimate imagery through a documentary style, looking for smaller moments that make up the whole of a story with a touch of elegance through simplicity. I like to blend in but I’m also not afraid to take the lead and capture important shots."
        },
        {
            question: "How much of a deposit do you require?",
            answer: "There is a non-refundable 25% deposit at the time of booking. Full payment is due a month before the wedding. If you cancel within 30 days of the wedding you will get a 50% refund."
        },
        {
            question: "Do you have liability insurance?",
            answer: "Yes, I am fully insured."
        },
        {
            question: "Why choose me as your photographer?",
            answer: "My foundation is great customer service. I show up ready to capture the day. Making things easy for you from beginning to end is my priority. My attention to detail, my eye, and my creativity are what set me apart."
        },
        {
            question: "How long after the wedding will we receive the images?",
            answer: "You will get a sneak peek within 48-hrs of the wedding and full delivery is 2-4 weeks because I don’t like waiting, and I don’t like making you wait. The photos will be delivered via an online gallery as high-resolution files edited with my style."
        },
        {
            question: "Can I customize a package to fit my needs?",
            answer: "Yes, once we have our first call or zoom nowadays, we can dive deep and customize packages to your needs."
        }
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-bg-primary">
            <SEOHead
                title="Wedding Photography Packages | Hudson Valley & Tri-State"
                description="Explore wedding photography packages for Hudson Valley and Tri-State area weddings. Candid, documentary-style photography for your special day."
            />
            <div className="container mx-auto px-6">

                {/* Hero */}
                <div className="text-center mb-16 md:mb-24 space-y-6">
                    <p className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase">Services</p>
                    <h1 className="text-4xl md:text-6xl font-heading text-text-primary">Wedding Photography</h1>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Your wedding day is filled with once-in-a-lifetime moments—and we’re here to preserve them all. From candid glances to joyful celebrations, we capture your love story with intention, artistry, and deep connection. From micro-weddings to large celebrations, I’m here for you.
                    </p>
                </div>

                {/* Image */}
                <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden mb-24 bg-bg-secondary">
                    <img
                        src="https://marlonramosphotography.com/wp-content/uploads/2022/11/StephanieJames-569-scaled.jpg"
                        alt="Wedding Photography"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                        <h2 className="text-3xl font-heading text-text-primary">You can trust me…</h2>
                        <p>
                            Your wedding day is one of the most important days of your life, and you deserve a photographer who invests as much care into capturing it as you did in planning it.
                        </p>
                        <p>
                            I understand the trust you place in me to document these fleeting moments. My approach is grounded in being present, attentive, and prepared for every emotion, ensuring that when you look back at your photos, you don't just see how it looked—you remember exactly how it felt.
                        </p>
                    </div>

                    <div className="bg-bg-secondary p-8 md:p-12 border border-border-light">
                        <h3 className="text-xl font-heading text-text-primary mb-6">Every Photography Package Includes:</h3>
                        <ul className="space-y-4">
                            {[
                                "High-Resolution Files",
                                "Sneak Peeks within 48-hours",
                                "Full Gallery within 4-weeks",
                                "Online Gallery",
                                "Second Photographer Optional",
                                "Videographer Optional"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start space-x-3 text-text-secondary">
                                    <Check size={18} className="text-accent-gold mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <Link to="/contact" className="inline-block w-full text-center bg-accent-gold text-white px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-accent-gold-hover transition-colors">
                                Inquire Availability
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
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

export default WeddingPackages;
