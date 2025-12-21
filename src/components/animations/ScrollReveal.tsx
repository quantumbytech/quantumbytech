import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export const ScrollReveal = ({ 
  children, 
  className = ''
}: ScrollRevealProps) => {
  // NO ANIMATIONS - instant visibility to prevent any blinking/flashing
  return (
    <div className={className}>
      {children}
    </div>
  );
};

