import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

// Layout
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import StoryDetail from './pages/StoryDetail';
import About from './pages/About';
import Investment from './pages/Investment';
import KindWords from './pages/KindWords';

// Service Pages
import WeddingPackages from './pages/services/WeddingPackages';
import ElopementPackages from './pages/services/ElopementPackages';
import EngagementPackages from './pages/services/EngagementPackages';
import PortraitPackages from './pages/services/PortraitPackages';

import Journal from './pages/Journal';
import Venues from './pages/Venues';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<StoryDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/investment" element={<Investment />} />

        {/* Service Routes */}
        <Route path="/wedding-photo-packages" element={<WeddingPackages />} />
        <Route path="/elopement-photographer" element={<ElopementPackages />} />
        <Route path="/engagements" element={<EngagementPackages />} />
        <Route path="/portraits" element={<PortraitPackages />} />

        <Route path="/kind-words" element={<KindWords />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
