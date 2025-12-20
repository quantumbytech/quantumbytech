import { motion } from 'framer-motion';
import { PageTransition } from '@/components/animations/PageTransition';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ChatBubbleLeftRightIcon, BoltIcon, AcademicCapIcon, ComputerDesktopIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: BoltIcon,
    title: 'Quick Response Time',
    description: 'Get help when you need it with our fast response times and dedicated support team.',
  },
  {
    icon: UserGroupIcon,
    title: 'Expert Guidance',
    description: 'Access to experienced professionals who understand your technology stack.',
  },
  {
    icon: ComputerDesktopIcon,
    title: 'Remote Assistance',
    description: 'Secure remote access to diagnose and fix issues quickly without delays.',
  },
  {
    icon: AcademicCapIcon,
    title: 'Training Sessions',
    description: 'Comprehensive training for your team to maximize productivity and efficiency.',
  },
  {
    icon: ClockIcon,
    title: '24/7 Availability',
    description: 'Round-the-clock support to ensure your business never stops running.',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Multi-Channel Support',
    description: 'Reach us via phone, email, chat, or WhatsApp - whatever works best for you.',
  },
];

const supportLevels = [
  {
    title: 'Hardware Support',
    items: ['Computer repairs', 'Network setup', 'Peripheral troubleshooting', 'Equipment upgrades'],
    icon: '💻',
  },
  {
    title: 'Software Support',
    items: ['Application issues', 'Software installation', 'License management', 'Updates & patches'],
    icon: '⚙️',
  },
  {
    title: 'Network Support',
    items: ['Connectivity issues', 'WiFi optimization', 'Security configuration', 'VPN setup'],
    icon: '🌐',
  },
  {
    title: 'Cloud Support',
    items: ['Cloud migration', 'Backup solutions', 'Access management', 'Performance optimization'],
    icon: '☁️',
  },
];

export const TechSupport = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <motion.div className="max-w-4xl mx-auto text-center">
                <motion.div
                  className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-6"
                  initial={{ opacity: 0.5, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <ChatBubbleLeftRightIcon className="text-teal-500 w-5 h-5" />
                  <span className="text-sm">Technical Support</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  24/7 Technical
                  <br />
                  <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                    Assistance
                  </span>
                </h1>

                <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
                  Expert technical support when you need it most. Our dedicated team is ready to 
                  help you solve any technical challenge, big or small, ensuring your business 
                  operations run smoothly 24/7.
                </p>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Get Support Now
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
                Comprehensive <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">Support Services</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <motion.div
                    className="glass-effect rounded-2xl p-8"
                    whileHover={{ y: -10 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center mb-6">
                      <feature.icon className="text-white w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Support Areas */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                We Support <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">Everything</span>
              </h2>
              <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto">
                From hardware to software, networks to cloud - we've got you covered.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {supportLevels.map((level, index) => (
                <ScrollReveal key={level.title} delay={index * 0.1}>
                  <motion.div
                    className="glass-effect rounded-2xl p-8"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-5xl">{level.icon}</div>
                      <h3 className="text-2xl font-bold">{level.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {level.items.map((item) => (
                        <li key={item} className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-green-500 flex-shrink-0" />
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Response Time Guarantee */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="glass-effect rounded-3xl p-12 max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                  Our Response Time Guarantee
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { priority: 'Critical', time: '< 1 hour', description: 'System down or major outage' },
                    { priority: 'High', time: '< 4 hours', description: 'Significant impact on operations' },
                    { priority: 'Normal', time: '< 24 hours', description: 'General support requests' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.priority}
                      className="text-center p-6 rounded-xl bg-white/5"
                      initial={{ opacity: 0.5, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03, duration: 0.4, ease: 'easeOut' }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent mb-2">
                        {item.time}
                      </div>
                      <div className="text-xl font-semibold mb-2">{item.priority}</div>
                      <div className="text-sm text-white/60">{item.description}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                  How to Reach Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { method: 'Phone', detail: '+961 70 790 677', icon: '📞' },
                    { method: 'Email', detail: 'quantumbytech@gmail.com', icon: '📧' },
                    { method: 'WhatsApp', detail: 'Quick messaging', icon: '💬' },
                    { method: 'Live Chat', detail: 'Instant support', icon: '💭' },
                  ].map((contact, index) => (
                    <motion.div
                      key={contact.method}
                      className="flex items-center space-x-4 p-6 rounded-xl bg-white/5"
                      initial={{ opacity: 0.5, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03, duration: 0.4, ease: 'easeOut' }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-4xl">{contact.icon}</div>
                      <div>
                        <div className="font-semibold text-lg">{contact.method}</div>
                        <div className="text-white/60">{contact.detail}</div>
                      </div>
                    </motion.div>
                  ))}
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
                  Need Help Right Now?
                </h2>
                <p className="text-xl text-white/70 mb-8">
                  Our support team is standing by to assist you with any technical challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary"
                    >
                      Contact Support
                    </motion.button>
                  </Link>
                  <a href="tel:+96170790677">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary"
                    >
                      Call Now
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

