import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const loadingPhrases = [
  "Initializing quantum systems...",
  "Loading cutting-edge technology...",
  "Preparing your experience...",
  "Optimizing performance...",
  "Almost there...",
  "Welcome to Quantum ByTech!"
];

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    // 5-second loading with smooth progress
    const totalDuration = 5000; // 5 seconds
    const intervalTime = 50; // Update every 50ms
    const totalSteps = totalDuration / intervalTime;
    const incrementPerStep = 100 / totalSteps;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + incrementPerStep, 100);
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            onLoadingComplete?.();
          }, 300);
        }
        return newProgress;
      });
    }, intervalTime);

    // Change phrases every ~800ms
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => {
        if (prev < loadingPhrases.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(phraseInterval);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-dark-500 via-dark-400 to-dark-500"
        >
          {/* Animated Background Orbs - Responsive sizes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary-500/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary-600/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.4, 1],
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center space-y-6 sm:space-y-8 px-4 w-full max-w-md sm:max-w-lg">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-center"
            >
              <motion.div
                animate={{
                  textShadow: [
                    '0 0 20px rgba(15, 194, 109, 0.5)',
                    '0 0 40px rgba(15, 194, 109, 0.8)',
                    '0 0 20px rgba(15, 194, 109, 0.5)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold"
              >
                <span className="text-primary-500 text-5xl sm:text-6xl md:text-8xl">Q</span>
                <span className="text-white">uantum</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xl sm:text-2xl md:text-4xl font-bold text-white mt-2"
              >
                ByTech
              </motion.div>
            </motion.div>

            {/* Animated Loading Bar */}
            <div className="w-full max-w-xs sm:w-64 md:w-96 space-y-3 sm:space-y-4">
              {/* Progress Bar Container */}
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {/* Animated Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
              </div>

              {/* Progress Percentage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-white/60 text-sm md:text-base font-medium"
              >
                {Math.round(progress)}%
              </motion.div>
            </div>

            {/* Loading Text with Phrases */}
            <motion.div
              key={currentPhrase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-white/70 text-xs sm:text-sm md:text-base font-medium text-center min-h-[24px]"
            >
              {loadingPhrases[currentPhrase]}
            </motion.div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary-500/50 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Bottom Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 sm:bottom-12 left-0 right-0 text-center px-4"
          >
            <p className="text-white/30 text-xs sm:text-sm">
              Transforming Ideas into Digital Reality
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

