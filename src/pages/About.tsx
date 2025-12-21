import { motion } from 'framer-motion';
import { PageTransition } from '@/components/animations/PageTransition';
import { About as AboutSection } from '@/components/sections/About';

export const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 md:pt-28 lg:pt-32">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                About <span className="text-gradient">Quantum ByTech</span>
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Pioneering the future of digital innovation with cutting-edge technology 
                and unparalleled expertise.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />
      </div>
    </PageTransition>
  );
};

