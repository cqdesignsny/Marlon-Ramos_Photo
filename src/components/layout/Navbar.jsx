import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';

const navLinks = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Investment', path: '/investment' },
    { name: 'Kind Words', path: '/kind-words' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const scrolled = useScroll();
    const location = useLocation();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
        setServicesOpen(false);
    }, [location]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-bg-dark/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link to="/" className="relative z-50">
                        <img
                            src="https://marlonramosphotography.com/wp-content/uploads/2021/10/Marlon-Ramos_logo_Long_logo.svg"
                            alt="Marlon Ramos Photography"
                            className="h-10 md:h-14 transition-all duration-300 brightness-0 invert"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {/* Services Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <button
                                className={`text-sm uppercase tracking-widest hover:text-accent-gold transition-colors flex items-center ${(scrolled || location.pathname !== '/') ? 'text-white' : 'text-white'
                                    }`}
                            >
                                Services
                            </button>

                            <AnimatePresence>
                                {servicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-48 bg-bg-dark border border-zinc-800 rounded-sm shadow-xl py-2"
                                    >
                                        <Link to="/wedding-photo-packages" className="block px-4 py-2 text-sm text-zinc-300 hover:text-accent-gold hover:bg-zinc-800/50 uppercase tracking-wider">Weddings</Link>
                                        <Link to="/elopement-photographer" className="block px-4 py-2 text-sm text-zinc-300 hover:text-accent-gold hover:bg-zinc-800/50 uppercase tracking-wider">Elopements</Link>
                                        <Link to="/engagements" className="block px-4 py-2 text-sm text-zinc-300 hover:text-accent-gold hover:bg-zinc-800/50 uppercase tracking-wider">Engagements</Link>
                                        <Link to="/portraits" className="block px-4 py-2 text-sm text-zinc-300 hover:text-accent-gold hover:bg-zinc-800/50 uppercase tracking-wider">Portraits</Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm uppercase tracking-widest hover:text-accent-gold transition-colors ${location.pathname === link.path ? 'text-accent-gold' : 'text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-accent-gold text-white px-6 py-2 rounded-full text-sm uppercase tracking-wider hover:bg-accent-gold-hover transition-colors"
                        >
                            Book Your Date
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative z-50 text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-bg-dark flex flex-col items-center justify-center"
                    >
                        <nav className="flex flex-col items-center space-y-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`text-3xl font-heading text-white hover:text-accent-gold transition-colors ${location.pathname === link.path ? 'text-accent-gold' : ''
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <Link
                                    to="/contact"
                                    className="mt-8 inline-block bg-accent-gold text-white px-8 py-3 rounded-full text-lg uppercase tracking-wider hover:bg-accent-gold-hover transition-colors"
                                >
                                    Book Your Date
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
