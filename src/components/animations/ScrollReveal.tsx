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
    up: { y: 15, x: 0 },
    down: { y: -15, x: 0 },
    left: { y: 0, x: 15 },
    right: { y: 0, x: -15 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0.4, 
        ...directions[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0 
      } : {}}
      transition={{
        duration: 0.4,
        delay: delay * 0.3, // Reduce delay impact even more
        ease: [0.25, 0.1, 0.25, 1], // Custom ease for smoother motion
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

