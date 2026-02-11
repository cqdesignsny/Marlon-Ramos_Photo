import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-bg-dark text-text-light py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

                    {/* Column 1: Brand */}
                    <div className="space-y-6 flex flex-col items-center md:items-center">
                        <Link to="/" className="flex justify-center">
                            <img
                                src="https://marlonramosphotography.com/wp-content/uploads/2021/10/Marlon-Ramos_logo_Main_logo.svg"
                                alt="Marlon Ramos Photography"
                                className="h-32 md:h-36 invert brightness-0"
                            />
                        </Link>
                        <p className="text-sm tracking-widest uppercase font-heading text-accent-gold text-center">
                            Intimate moments. Timeless stories.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-heading tracking-wide">Explore</h4>
                        <nav className="flex flex-col space-y-3">
                            <Link to="/portfolio" className="text-sm hover:text-accent-gold transition-colors">Portfolio</Link>
                            <Link to="/wedding-photo-packages" className="text-sm hover:text-accent-gold transition-colors">Weddings</Link>
                            <Link to="/elopement-photographer" className="text-sm hover:text-accent-gold transition-colors">Elopements</Link>
                            <Link to="/engagements" className="text-sm hover:text-accent-gold transition-colors">Engagements</Link>
                            <Link to="/portraits" className="text-sm hover:text-accent-gold transition-colors">Portraits</Link>
                            <Link to="/about" className="text-sm hover:text-accent-gold transition-colors">About</Link>
                            <Link to="/investment" className="text-sm hover:text-accent-gold transition-colors">Investment</Link>
                            <Link to="/kind-words" className="text-sm hover:text-accent-gold transition-colors">Kind Words</Link>
                            <Link to="/journal" className="text-sm hover:text-accent-gold transition-colors">Journal</Link>
                            <Link to="/contact" className="text-sm hover:text-accent-gold transition-colors">Contact</Link>
                        </nav>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-heading tracking-wide">Get in Touch</h4>
                        <div className="space-y-3 text-sm">
                            <p className="flex items-center space-x-3">
                                <Phone size={16} className="text-accent-gold" />
                                <span>914-733-2309</span>
                            </p>
                            <p className="flex items-center space-x-3">
                                <Mail size={16} className="text-accent-gold" />
                                <a href="mailto:mramos@marlonramosphotography.com" className="hover:text-accent-gold transition-colors">
                                    mramos@marlonramosphotography.com
                                </a>
                            </p>
                            <div className="flex space-x-4 pt-2">
                                <a
                                    href="https://instagram.com/marlonramosphotography"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-zinc-800 p-2 rounded-full hover:bg-accent-gold hover:text-white transition-all"
                                >
                                    <Instagram size={18} />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-zinc-800 p-2 rounded-full hover:bg-accent-gold hover:text-white transition-all"
                                >
                                    <Facebook size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Service Areas */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-heading tracking-wide">Serving the Hudson Valley</h4>
                        <div className="flex items-start space-x-3 text-sm text-zinc-400">
                            <MapPin size={16} className="text-accent-gold mt-1 flex-shrink-0" />
                            <p className="leading-relaxed">
                                Newburgh, Middletown, Poughkeepsie, Fishkill, New Paltz, White Plains, Peekskill, Ossining, Tarrytown, New Rochelle, Yonkers, Kingston, Rhinebeck, the entire Tri-State Area, and beyond.
                            </p>
                        </div>

                        {/* Newsletter */}
                        <div className="pt-6">
                            <h5 className="text-xs uppercase tracking-widest text-accent-gold mb-3">Stay in the loop</h5>
                            <form className="flex border-b border-zinc-700 pb-1">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="bg-transparent w-full text-sm outline-none placeholder-zinc-600 focus:placeholder-zinc-400"
                                />
                                <button type="submit" className="text-xs uppercase tracking-widest hover:text-accent-gold transition-colors">
                                    Join
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
                    <p>&copy; {new Date().getFullYear()} Marlon Ramos Photography. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
                        <span>Website by CQ Marketing</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
