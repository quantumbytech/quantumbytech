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
    up: { y: 8, x: 0 },
    down: { y: -8, x: 0 },
    left: { y: 0, x: 8 },
    right: { y: 0, x: -8 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0.8, 
        ...directions[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0 
      } : {}}
      transition={{
        duration: 0.3,
        delay: delay * 0.2, // Minimal delay
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

