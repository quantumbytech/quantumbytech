import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  // NO ANIMATIONS - instant visibility to prevent any blinking/flashing
  return <>{children}</>;
};

