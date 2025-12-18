import { motion } from 'framer-motion';
import { PageTransition } from '@/components/animations/PageTransition';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Globe, Layout, Search, Smartphone, Zap, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Layout,
    title: 'Clear Communication',
    description: 'Deliver your message in a clear and concise manner with professional design.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Seamless experience across all devices, from desktops to mobile phones.',
  },
  {
    icon: Zap,
    title: 'Fast Loading',
    description: 'Optimized for speed with modern technologies and best practices.',
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Built with SEO best practices to improve your search engine rankings.',
  },
  {
    icon: Lock,
    title: 'Secure & Reliable',
    description: 'Latest security measures to protect your data and visitors.',
  },
  {
    icon: Globe,
    title: 'Easy Management',
    description: 'User-friendly CMS for effortless content updates and management.',
  },
];

export const InformativeWebsites = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <motion.div className="max-w-4xl mx-auto text-center">
                <motion.div
                  className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Globe className="text-purple-500" size={20} />
                  <span className="text-sm">Informative Websites</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Knowledge. Innovation.
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Transformation
                  </span>
                </h1>

                <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
                  We specialize in creating informative websites that deliver clear, concise, 
                  and engaging content to your audience in a user-friendly format.
                </p>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Get Your Website
                  </motion.button>
                </Link>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Key <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Features</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <motion.div
                    className="glass-effect rounded-2xl p-8"
                    whileHover={{ y: -10 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
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

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="glass-effect rounded-2xl p-8">
                  <h3 className="text-3xl font-bold mb-6">Perfect For</h3>
                  <ul className="space-y-4">
                    {[
                      'Corporate websites',
                      'Portfolio sites',
                      'Blog platforms',
                      'Educational content',
                      'News and media sites',
                      'Documentation portals',
                    ].map((item, index) => (
                      <motion.li
                        key={item}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                        <span className="text-white/80">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div>
                  <h2 className="text-4xl font-bold mb-6">
                    Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Websites?</span>
                  </h2>
                  <p className="text-white/70 mb-6">
                    Our informative websites are designed to effectively communicate your message 
                    while providing an exceptional user experience.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Professional and modern design',
                      'Optimized for search engines',
                      'Fast loading times',
                      'Mobile-first approach',
                      'Easy content management',
                      'Analytics integration',
                    ].map((item, index) => (
                      <motion.li
                        key={item}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-purple-500" />
                        </div>
                        <span className="text-white/80">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
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
                  Start Your Journey Today
                </h2>
                <p className="text-xl text-white/70 mb-8">
                  Let us create an informative website that speaks volumes about your business.
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Contact Us
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

