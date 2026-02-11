import { useEffect } from 'react';
import { motion } from 'framer-motion';

import SEOHead from '../components/shared/SEOHead';

const Contact = () => {
    useEffect(() => {
        const scriptId = 'honeybook-widget-script';
        const existingScript = document.getElementById(scriptId);

        const loadScript = () => {
            (function (h, b, s, n, i, p, e, t) {
                h._HB_ = h._HB_ || {}; h._HB_.pid = i;
                t = b.createElement(s); t.id = scriptId; t.type = "text/javascript"; t.async = !0; t.src = n;
                e = b.getElementsByTagName(s)[0]; e.parentNode.insertBefore(t, e);
            })(window, document, "script", "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js", "6097f1d8262b83000c3f54f5");
        };

        if (!existingScript) {
            loadScript();
        } else {
            // If script exists, we might need to re-trigger it
            // Some widgets scan on load, others have an global object to call.
            // Re-injecting the script (removing and adding) is a brute force way to ensure it re-scans for the div.
            existingScript.remove();
            loadScript();
        }

        return () => {
            // Optional: cleanup
        };
    }, []);

    return (
        <div className="pt-32 pb-24 min-h-screen bg-bg-primary">
            <SEOHead
                title="Contact | Marlon Ramos Photography"
                description="Get in touch with Marlon Ramos to discuss your wedding, elopement, or engagement photography needs in the Hudson Valley and Tri-State area."
            />
            <div className="container mx-auto px-6">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Info Side */}
                    <div className="w-full lg:w-4/12 space-y-12">
                        <div className="space-y-4">
                            <p className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase">Contact</p>
                            <h1 className="text-4xl md:text-5xl font-heading text-text-primary">Let's create something beautiful</h1>
                            <p className="text-text-secondary font-light text-lg">
                                I'd love to hear about your plans. Whether you're recently engaged, planning an elopement, or just exploring your options — let's connect.
                            </p>
                        </div>

                        <div className="space-y-6 text-sm">
                            <div>
                                <h4 className="font-heading text-lg text-text-primary mb-2">Email</h4>
                                <a href="mailto:mramos@marlonramosphotography.com" className="text-text-secondary hover:text-accent-gold transition-colors">
                                    mramos@marlonramosphotography.com
                                </a>
                            </div>
                            <div>
                                <h4 className="font-heading text-lg text-text-primary mb-2">Phone</h4>
                                <p className="text-text-secondary">914-733-2309</p>
                            </div>
                            <div>
                                <h4 className="font-heading text-lg text-text-primary mb-2">Social</h4>
                                <a href="https://instagram.com/marlonramosphotography" className="text-text-secondary hover:text-accent-gold transition-colors block">
                                    @marlonramosphotography
                                </a>
                            </div>
                            <div className="pt-6 border-t border-border-light">
                                <p className="text-accent-gold font-heading italic text-xl">Hablo Español!</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="w-full lg:w-8/12">
                        <div className="bg-white p-8 md:p-12 border border-border-light relative min-h-[600px]">
                            <div className="hb-p-6097f1d8262b83000c3f54f5-1"></div>
                            <img height="1" width="1" style={{ display: 'none' }} src="https://www.honeybook.com/p.png?pid=6097f1d8262b83000c3f54f5" alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Contact;
