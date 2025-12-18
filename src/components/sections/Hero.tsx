import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { scrollToTop } from '@/lib/scrollToTop';

export const Hero = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const handleNavigation = (path: string) => {
    navigate(path);
    scrollToTop();
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-500 via-dark-400 to-dark-500" />
        
        {/* Animated Orbs - Reduced complexity on mobile */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Grid Pattern - Hidden on mobile for better performance */}
        <div className="hidden md:block absolute inset-0 bg-[linear-gradient(rgba(15,194,109,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,194,109,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 glass-effect px-3 py-2 md:px-4 md:py-2 rounded-full mb-6 md:mb-8"
          >
            <Sparkles className="text-primary-500" size={16} />
            <span className="text-xs md:text-sm">Transforming Ideas into Digital Reality</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight"
          >
            Boost Your
            <br />
            <span className="text-gradient">Online Presence</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-xl text-white/70 mb-8 md:mb-12 max-w-3xl mx-auto px-4"
          >
            At Quantum ByTech, we specialize in delivering cutting-edge technology solutions 
            to elevate your business. From web development to advanced software systems, 
            we provide the tools you need to thrive in the digital age.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
          >
            <motion.button
              onClick={() => handleNavigation('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2 group"
            >
              <span>Request a Quote</span>
              <ArrowRight 
                className="group-hover:translate-x-1 transition-transform" 
                size={20} 
              />
            </motion.button>
            <motion.button
              onClick={() => handleNavigation('/services')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Explore Services
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-20 max-w-2xl mx-auto"
          >
            {[
              { value: '100+', label: 'Projects Completed' },
              { value: '50+', label: 'Happy Clients' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="text-2xl md:text-4xl font-bold text-primary-500 mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

