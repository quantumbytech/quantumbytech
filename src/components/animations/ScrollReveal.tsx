import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const ScrollReveal = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const directions = {
    up: { y: 5, x: 0 },
    down: { y: -5, x: 0 },
    left: { y: 0, x: 5 },
    right: { y: 0, x: -5 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0.85, 
        ...directions[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0 
      } : {}}
      transition={{
        duration: 0.6,
        delay: delay * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94], // Smooth, graceful easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

