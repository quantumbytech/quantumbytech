import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ScrollReveal } from '../animations/ScrollReveal';
import { 
  DevicePhoneMobileIcon, 
  ShoppingCartIcon, 
  GlobeAltIcon, 
  WrenchScrewdriverIcon, 
  CircleStackIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline';
import { scrollToTop } from '@/lib/scrollToTop';

const services = [
  {
    icon: ShoppingCartIcon,
    title: 'E-Commerce',
    description: 'Transforming E-Commerce with Innovation and Excellence',
    features: ['Custom platforms', 'Payment integration', 'Analytics & insights', 'Mobile optimization'],
    link: '/services/e-commerce',
    gradient: 'from-primary-500 to-emerald-500',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile Apps',
    description: 'Empowering Your World, One Tap at a Time',
    features: ['iOS & Android', 'Cross-platform', 'Real-time features', 'Push notifications'],
    link: '/services/mobile-apps',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: GlobeAltIcon,
    title: 'Informative Websites',
    description: 'Knowledge. Innovation. Transformation',
    features: ['Responsive design', 'SEO optimized', 'Content management', 'Fast loading'],
    link: '/services/informative-websites',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: CircleStackIcon,
    title: 'Database Solutions',
    description: 'Robust and scalable database architecture',
    features: ['Data modeling', 'Cloud databases', 'Migration services', 'Performance tuning'],
    link: '/services/database-solutions',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Maintenance',
    description: 'Keep your systems running smoothly',
    features: ['Regular updates', 'Bug fixes', 'Performance monitoring', 'Security patches'],
    link: '/services/maintenance',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Tech Support',
    description: '24/7 technical assistance for your business',
    features: ['Quick response', 'Expert guidance', 'Remote assistance', 'Training sessions'],
    link: '/services/tech-support',
    gradient: 'from-teal-500 to-green-500',
  },
];

export const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (link: string) => {
    navigate(link);
    scrollToTop();
  };

  return (
    <section id="services" className="py-20 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our <span className="text-gradient">Services</span>
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive solutions tailored to your business needs, 
              powered by cutting-edge technology and expert craftsmanship.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.05}>
              <motion.div
                onClick={() => handleServiceClick(service.link)}
                className="group relative glass-effect rounded-2xl p-8 h-full overflow-hidden cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2 }}
              >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 relative z-10`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <service.icon className="text-white w-8 h-8" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/70 mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-sm text-white/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More */}
                    <motion.div
                      className="flex items-center space-x-2 text-primary-500 font-semibold"
                      whileHover={{ x: 5 }}
                    >
                      <span>Learn More</span>
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </div>

                  {/* Hover Border Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.6}>
          <div className="text-center mt-16">
            <motion.button
              onClick={() => handleServiceClick('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get Started Today
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

