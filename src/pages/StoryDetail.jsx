import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '../components/shared/SEOHead';
import { allProjects } from '../content/portfolioData';

const StoryDetail = () => {
    const { slug } = useParams();
    const project = allProjects.find(p => p.slug === slug);

    if (!project) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-bg-primary text-center">
                <h1 className="text-2xl font-heading">Story not found</h1>
                <Link to="/portfolio" className="text-accent-gold uppercase tracking-widest text-xs mt-4 inline-block">Back to Portfolio</Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-bg-primary">
            <SEOHead
                title={`${project.couple} | Marlon Ramos Photography`}
                description={`View the photo gallery for ${project.couple} at ${project.venue}, captured by Hudson Valley wedding photographer Marlon Ramos.`}
            />
            <div className="container mx-auto px-6">

                <Link to="/portfolio" className="inline-flex items-center space-x-2 text-text-secondary hover:text-accent-gold mb-12 uppercase tracking-widest text-xs">
                    <ArrowLeft size={14} />
                    <span>Back to Portfolio</span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <p className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Featured Story</p>
                    <h1 className="text-4xl md:text-6xl font-heading text-text-primary mb-8">{project.couple}</h1>

                    <div className="aspect-video w-full bg-bg-secondary mb-12 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.couple}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-1 space-y-8">
                            <div>
                                <h3 className="font-heading text-xl text-text-primary mb-2">Venue</h3>
                                <p className="text-text-secondary">{project.venue}</p>
                            </div>
                            <div>
                                <h3 className="font-heading text-xl text-text-primary mb-2">Category</h3>
                                <p className="text-text-secondary uppercase tracking-widest text-sm">{project.type}</p>
                            </div>
                            <div className="pt-8">
                                <Link to="/contact" className="inline-block bg-accent-gold text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-accent-gold-hover transition-colors">
                                    Book Your Date
                                </Link>
                            </div>
                        </div>

                        <div className="md:col-span-2 prose prose-lg text-text-secondary">
                            <p>
                                {project.description || "Every love story is unique, and this day was no exception. From the quiet moments of getting ready to the joyous celebration on the dance floor, every detail reflected the couple's personality and deep connection."}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
                                {project.images && project.images.slice(1).map((img, idx) => (
                                    <div key={idx} className="aspect-[2/3] overflow-hidden bg-neutral-100">
                                        <img src={img} alt={`${project.couple} - ${idx + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <p>
                                This gallery represents just a small selection of the hundreds of images delivered. If you feel a connection to this style of storytelling, I'd love to chat about capturing your day.
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default StoryDetail;
