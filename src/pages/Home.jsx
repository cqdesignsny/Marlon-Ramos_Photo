import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import FeaturedStories from '../components/home/FeaturedStories';
import TestimonialFeature from '../components/home/TestimonialFeature';
import Experience from '../components/home/Experience';
import SEOHead from '../components/shared/SEOHead';

const Home = () => {
    return (
        <div className="bg-bg-primary">
            <SEOHead
                title="Marlon Ramos Photography | Hudson Valley Wedding Photographer"
                description="Marlon Ramos is a Hudson Valley wedding photographer specializing in intimate, documentary-style photography for couples in the Tri-State area."
            />
            <Hero />
            <Experience />
            <FeaturedStories />
            <TestimonialFeature />
            <Intro />
        </div>
    );
};

export default Home;
