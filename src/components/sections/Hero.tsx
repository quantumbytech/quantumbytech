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
    if (path === '/contact') {
      // Scroll to contact section on same page
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If not on home page, navigate to home and then scroll
        navigate('/');
        setTimeout(() => {
          const section = document.getElementById('contact');
          section?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(path);
      scrollToTop();
    }
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-24 md:pb-32 px-4 sm:px-6 lg:px-8"
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
        className="container mx-auto z-10 w-full"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-effect px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6">
            <Sparkles className="text-primary-500" size={14} />
            <span className="text-xs">Transforming Ideas into Digital Reality</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-4 lg:mb-6 leading-tight">
            Boost Your
            <br />
            <span className="text-gradient">Online Presence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-6 md:mb-8 lg:mb-10 max-w-3xl mx-auto px-4">
            At Quantum ByTech, we specialize in delivering cutting-edge technology solutions 
            to elevate your business. From web development to advanced software systems, 
            we provide the tools you need to thrive in the digital age.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <motion.button
              onClick={() => handleNavigation('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="btn-primary flex items-center space-x-2 group"
            >
              <span>Request a Quote</span>
              <ArrowRight 
                className="group-hover:translate-x-1 transition-transform duration-200" 
                size={20} 
              />
            </motion.button>
            <motion.button
              onClick={() => handleNavigation('/services')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="btn-secondary"
            >
              Explore Services
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 lg:gap-8 mt-8 md:mt-12 lg:mt-16 max-w-3xl mx-auto">
            {[
              { value: '100+', label: 'Projects Completed' },
              { value: '50+', label: 'Happy Clients' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-500 mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ 
              y: [0, 16, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 bg-primary-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

