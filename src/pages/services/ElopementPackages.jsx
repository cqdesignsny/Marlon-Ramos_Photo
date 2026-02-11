import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Plus } from 'lucide-react';
import { useState } from 'react';

import SEOHead from '../../components/shared/SEOHead';

const ElopementPackages = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

    const faqs = [
        {
            question: "What is your photography style?",
            answer: "I specialize in intimate imagery through a documentary style, looking for smaller moments that make up the whole of a story with a touch of elegance through simplicity."
        },
        {
            question: "How much of a deposit do you require?",
            answer: "There is a non-refundable 25% deposit at the time of booking. Full payment is due a month before the wedding."
        },
        {
            question: "Do you have liability insurance?",
            answer: "Yes, I am fully insured."
        },
        {
            question: "How long after the wedding will we receive the images?",
            answer: "You will get a sneak peek within 48-hrs and full delivery is 2-4 weeks."
        }
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-bg-primary">
            <SEOHead
                title="Elopement Photography | Intimate Weddings in Hudson Valley"
                description="Specializing in elopement photography for intimate weddings in the Hudson Valley and Catskills. Capture your love story with authenticity."
            />
            <div className="container mx-auto px-6">

                <div className="text-center mb-16 md:mb-24 space-y-6">
                    <p className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase">Services</p>
                    <h1 className="text-4xl md:text-6xl font-heading text-text-primary">Elopement Photography</h1>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        For couples who want to skip the script and write their own adventure—our elopement photography celebrates intimacy, emotion, and the quiet power of just the two of you.
                    </p>
                </div>

                <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden mb-24 bg-bg-secondary">
                    <img
                        src="https://marlonramosphotography.com/wp-content/uploads/2021/12/Marlon-Ramos-Photos-H-5.jpg"
                        alt="Elopement Photography"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                        <h2 className="text-3xl font-heading text-text-primary">Picture this…</h2>
                        <p>
                            You and your partner are surrounded by a few of your closest friends and family, and you’re about to walk down the aisle to your favorite song. Your parents are beaming as you catch their eye, and your father sheds a tear as you pass them. This is the type of moment I, as your elopement photographer, would be ready to capture.
                        </p>
                        <p>
                            Elopements are typically classified as a smaller event meant to be focused on the couple specifically, but just because your wedding may be smaller does not mean there will be any less magic.
                        </p>
                        <p>
                            My goal as your elopement photographer on the day of your elopement is to capture the love behind the picture, so that you are reminded of the way you felt that day for years and years to come.
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

export default ElopementPackages;
