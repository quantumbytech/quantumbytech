import { motion } from 'framer-motion';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ParallaxSection } from '../animations/ParallaxSection';
import { Target, Users, Zap, Award } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Innovative Solutions',
    description: 'We specialize in delivering cutting-edge technology solutions to elevate your business. From web development to advanced software systems.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Our team is dedicated to understanding your unique goals and challenges. We craft tailored strategies that exceed expectations.',
  },
  {
    icon: Target,
    title: 'Driven by Excellence',
    description: 'With a passion for innovation and a commitment to quality, we transform ideas into impactful digital experiences.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Years of experience delivering successful projects across various industries, helping businesses achieve their digital goals.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              We Believe in <span className="text-gradient">Passionate People</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              At Quantum ByTech, we're more than just a tech company. We're your partners 
              in digital transformation, committed to turning your vision into reality through 
              innovation, expertise, and unwavering dedication.
            </p>
          </div>
        </ScrollReveal>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {values.map((value) => (
            <ScrollReveal key={value.title}>
              <motion.div
                className="glass-effect rounded-2xl p-8 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.4 }}
                >
                  <value.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-500 transition-colors">
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats Section */}
        <ParallaxSection speed={0.3}>
          <ScrollReveal>
            <div className="glass-effect rounded-3xl p-12 md:p-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '100+', label: 'Projects Delivered' },
                  { value: '50+', label: 'Happy Clients' },
                  { value: '5+', label: 'Years Experience' },
                  { value: '24/7', label: 'Support' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center"
                  >
                    <motion.div
                      className="text-4xl md:text-5xl font-bold text-primary-500 mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm md:text-base text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </ParallaxSection>

      </div>
    </section>
  );
};

