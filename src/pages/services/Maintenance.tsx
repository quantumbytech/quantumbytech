import { motion } from 'framer-motion';
import { PageTransition } from '@/components/animations/PageTransition';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { WrenchScrewdriverIcon, ArrowPathIcon, ShieldCheckIcon, ChartBarIcon, BoltIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: ArrowPathIcon,
    title: 'Regular Updates',
    description: 'Keep your systems up-to-date with the latest features, security patches, and improvements.',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Bug Fixes & Troubleshooting',
    description: 'Quick identification and resolution of issues to minimize downtime and disruption.',
  },
  {
    icon: ChartBarIcon,
    title: 'Performance Monitoring',
    description: 'Continuous monitoring of system performance with proactive optimization.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security Patches',
    description: 'Regular security updates to protect against vulnerabilities and threats.',
  },
  {
    icon: BoltIcon,
    title: 'Speed Optimization',
    description: 'Ongoing performance tuning to ensure fast loading times and smooth operation.',
  },
  {
    icon: ClockIcon,
    title: 'Scheduled Maintenance',
    description: 'Planned maintenance windows to update and optimize your systems without disruption.',
  },
];

const maintenancePlans = [
  {
    name: 'Basic',
    features: ['Monthly updates', 'Bug fixes', 'Email support', 'Performance reports'],
    color: 'from-yellow-500 to-orange-400',
  },
  {
    name: 'Professional',
    features: ['Weekly updates', 'Priority bug fixes', '24/7 support', 'Advanced monitoring', 'Security audits'],
    color: 'from-orange-500 to-red-500',
    popular: true,
  },
  {
    name: 'Enterprise',
    features: ['Daily monitoring', 'Instant fixes', 'Dedicated team', 'Custom SLA', 'Disaster recovery', 'Proactive optimization'],
    color: 'from-red-500 to-pink-500',
  },
];

export const Maintenance = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <motion.div className="max-w-4xl mx-auto text-center">
                <motion.div
                  className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-6"
                  initial={{ opacity: 0.85, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <WrenchScrewdriverIcon className="text-yellow-500 w-5 h-5" />
                  <span className="text-sm">Maintenance Services</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Keep Your Systems
                  <br />
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Running Smoothly
                  </span>
                </h1>

                <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
                  Don't let technical issues slow you down. Our comprehensive maintenance services 
                  ensure your websites and applications stay secure, fast, and up-to-date with 
                  minimal downtime.
                </p>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Choose Your Plan
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
                Complete <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Maintenance Coverage</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <motion.div
                    className="glass-effect rounded-2xl p-8"
                    whileHover={{ y: -10 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-6">
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

        {/* Maintenance Plans */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Flexible <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Maintenance Plans</span>
              </h2>
              <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto">
                Choose the plan that fits your needs. All plans include our commitment to excellence.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {maintenancePlans.map((plan, index) => (
                <ScrollReveal key={plan.name} delay={index * 0.1}>
                  <motion.div
                    className={`glass-effect rounded-2xl p-8 relative ${plan.popular ? 'border-2 border-orange-500' : ''}`}
                    whileHover={{ y: -10 }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 mx-auto`}>
                      <WrenchScrewdriverIcon className="text-white w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-center mb-6">{plan.name}</h3>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.color} flex-shrink-0 mt-2`} />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={plan.popular ? 'btn-primary w-full' : 'btn-secondary w-full'}
                      >
                        Get Started
                      </motion.button>
                    </Link>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Maintenance Matters */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                  Why Regular Maintenance Matters
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { stat: '99.9%', label: 'Uptime Guarantee' },
                    { stat: '< 2hrs', label: 'Average Response Time' },
                    { stat: '50+', label: 'Sites Maintained' },
                    { stat: '24/7', label: 'Support Available' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="text-center p-6 rounded-xl bg-white/5"
                      initial={{ opacity: 0.5, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03, duration: 0.4, ease: 'easeOut' }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                        {item.stat}
                      </div>
                      <div className="text-white/70">{item.label}</div>
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
                  Let Us Handle the Technical Details
                </h2>
                <p className="text-xl text-white/70 mb-8">
                  Focus on your business while we keep your systems running at peak performance.
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Start Maintenance Plan
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

