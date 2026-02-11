import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
            <CustomCursor />
            <Navbar />
            <main className="w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
