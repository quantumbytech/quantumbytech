import { motion } from 'framer-motion';
import { PageTransition } from '@/components/animations/PageTransition';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Smartphone, Zap, Shield, Users, Bell, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Zap,
    title: 'Seamless User Experience',
    description: 'Intuitive and engaging mobile apps with smooth navigation and beautiful interfaces.',
  },
  {
    icon: Layers,
    title: 'Cross-Platform Development',
    description: 'Reach more users with apps that work perfectly on both iOS and Android.',
  },
  {
    icon: Shield,
    title: 'App Security',
    description: 'Latest encryption techniques and industry-standard compliance for data protection.',
  },
  {
    icon: Users,
    title: 'Scalable Architecture',
    description: 'Built to grow with your business, handling increased traffic effortlessly.',
  },
  {
    icon: Bell,
    title: 'Real-Time Features',
    description: 'Push notifications, live updates, and real-time synchronization.',
  },
  {
    icon: Smartphone,
    title: 'Native Performance',
    description: 'Optimized for speed and performance with native-like experiences.',
  },
];

export const MobileApps = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <motion.div className="max-w-4xl mx-auto text-center">
                <motion.div
                  className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-6"
                  initial={{ opacity: 0.9, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <Smartphone className="text-blue-500" size={20} />
                  <span className="text-sm">Mobile App Development</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Empowering Your World,
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    One Tap at a Time
                  </span>
                </h1>

                <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
                  In today's mobile-driven world, having a high-performing, user-centric app is key 
                  to standing out. We bring your ideas to life with custom mobile applications.
                </p>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Start Your Project
                  </motion.button>
                </Link>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Amazing <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <motion.div
                    className="glass-effect rounded-2xl p-8"
                    whileHover={{ y: -10 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                      <feature.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                  We Build for All <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Platforms</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    className="text-center p-8 rounded-xl bg-white/5"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-6xl mb-4">📱</div>
                    <h3 className="text-2xl font-bold mb-2">iOS</h3>
                    <p className="text-white/70">
                      Native iOS apps with Swift and SwiftUI for optimal performance
                    </p>
                  </motion.div>
                  <motion.div
                    className="text-center p-8 rounded-xl bg-white/5"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-6xl mb-4">🤖</div>
                    <h3 className="text-2xl font-bold mb-2">Android</h3>
                    <p className="text-white/70">
                      Native Android apps with Kotlin and Jetpack Compose
                    </p>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <motion.div
                className="glass-effect rounded-3xl p-12 text-center max-w-4xl mx-auto"
                whileHover={{ scale: 1.02 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Turn Your Ideas into Reality
                </h2>
                <p className="text-xl text-white/70 mb-8">
                  Ready to build a powerful mobile app? Let's create something extraordinary together.
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

