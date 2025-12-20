import { motion } from 'framer-motion';
import { PageTransition } from '@/components/animations/PageTransition';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ShoppingCart, TrendingUp, Lock, Zap, Globe, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: ShoppingCart,
    title: 'Custom E-Commerce Platforms',
    description: 'Build platforms tailored to your brand\'s unique identity with seamless shopping experiences.',
  },
  {
    icon: Zap,
    title: 'AI-Powered Features',
    description: 'Integrate personalized recommendations and intelligent search functionalities.',
  },
  {
    icon: Lock,
    title: 'Secure Payment Solutions',
    description: 'Ensure secure and diverse payment gateway integrations for customer trust.',
  },
  {
    icon: BarChart,
    title: 'Analytics and Insights',
    description: 'Monitor performance and drive data-driven decisions with powerful analytics tools.',
  },
  {
    icon: Globe,
    title: 'Mobile Optimization',
    description: 'Create responsive designs for exceptional mobile shopping experiences.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Design solutions that grow with your business and handle increasing demands.',
  },
];

const benefits = [
  'Advanced product filtering and categorization',
  'Real-time inventory management',
  'Multi-language and multi-currency support',
  'Integration with third-party logistics and CRM tools',
  'Personalized customer experiences',
  'Automated marketing and email campaigns',
];

export const ECommerce = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 md:pt-28 lg:pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
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
                  <ShoppingCart className="text-primary-500" size={20} />
                  <span className="text-sm">E-Commerce Solutions</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Transforming <span className="text-gradient">E-Commerce</span>
                  <br />with Innovation
                </h1>

                <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
                  At Quantum ByTech, we redefine the boundaries of possibility with cutting-edge, 
                  innovative solutions designed to empower your e-commerce business for success.
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

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Our <span className="text-gradient">Services</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <motion.div
                    className="glass-effect rounded-2xl p-8"
                    whileHover={{ y: -10 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6">
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

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    Key <span className="text-gradient">Features</span>
                  </h2>
                  <p className="text-white/70 mb-8">
                    Our e-commerce solutions come packed with features designed to 
                    maximize your online sales and provide exceptional customer experiences.
                  </p>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.li
                        key={benefit}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0.9, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.01, duration: 0.25, ease: 'easeOut' }}
                      >
                        <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary-500" />
                        </div>
                        <span className="text-white/80">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="glass-effect rounded-2xl p-8">
                  <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-primary-500">Innovation</h4>
                      <p className="text-white/70">
                        Stay ahead with cutting-edge technologies like AI and machine learning.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-primary-500">Security</h4>
                      <p className="text-white/70">
                        Robust security protocols including SSL/TLS encryption and PCI compliance.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-primary-500">Scalability</h4>
                      <p className="text-white/70">
                        Solutions that grow with your business, handling increased traffic seamlessly.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-primary-500">Support</h4>
                      <p className="text-white/70">
                        24/7 ongoing support and maintenance to keep your platform running smoothly.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <motion.div
                className="glass-effect rounded-3xl p-12 text-center max-w-4xl mx-auto"
                whileHover={{ scale: 1.02 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Your E-Commerce?
                </h2>
                <p className="text-xl text-white/70 mb-8">
                  Let's build something extraordinary together. Get in touch for a free consultation.
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Request a Quote
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


