import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, label, summary, .cursor-pointer';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);

    // Inner dot follows quickly, outer ring trails behind.
    const dotX = useSpring(pointerX, { stiffness: 520, damping: 48, mass: 0.7 });
    const dotY = useSpring(pointerY, { stiffness: 520, damping: 48, mass: 0.7 });
    const ringX = useSpring(pointerX, { stiffness: 300, damping: 36, mass: 0.9 });
    const ringY = useSpring(pointerY, { stiffness: 300, damping: 36, mass: 0.9 });

    useEffect(() => {
        const handlePointerMove = (event) => {
            const boundedX = clamp(event.clientX, 24, window.innerWidth - 24);
            const boundedY = clamp(event.clientY, 24, window.innerHeight - 24);

            pointerX.set(boundedX);
            pointerY.set(boundedY);
            setIsVisible(true);

            const target = event.target instanceof Element ? event.target : null;
            const hoveringInteractive = Boolean(target?.closest(INTERACTIVE_SELECTOR));
            setIsHovering((current) => (current === hoveringInteractive ? current : hoveringInteractive));
        };

        const handleWindowLeave = () => setIsVisible(false);

        window.addEventListener('pointermove', handlePointerMove, { passive: true });
        window.addEventListener('mouseleave', handleWindowLeave);
        window.addEventListener('blur', handleWindowLeave);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('mouseleave', handleWindowLeave);
            window.removeEventListener('blur', handleWindowLeave);
        };
    }, [pointerX, pointerY]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-gold pointer-events-none z-[100] md:block mix-blend-difference will-change-transform"
                style={{ x: dotX, y: dotY }}
                animate={{
                    scale: isHovering ? 1.8 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 36,
                    mass: 0.45
                }}
            />
            <motion.div
                className="fixed top-0 left-0 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-gold pointer-events-none z-[100] md:block mix-blend-difference will-change-transform"
                style={{ x: ringX, y: ringY }}
                animate={{
                    scale: isHovering ? 1.35 : 1,
                    opacity: isVisible ? 0.95 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 34,
                    mass: 0.6
                }}
            />
        </>
    );
};

export default CustomCursor;
