import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  offset?: number;
}

export const ParallaxSection = ({ children, offset = 50 }: ParallaxSectionProps) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  const ref = useRef(null);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Enhanced parallax effect with multiple layers
  const y = useTransform(scrollYProgress, [0, 1], 
    [0, windowSize.width < 768 ? offset * 0.5 : offset]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <motion.div 
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
      style={{ 
        y,
        scale,
        opacity,
        background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 1))'
      }}
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10">
        {children}
      </div>
    </motion.div>
  );
};