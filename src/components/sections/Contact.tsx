import { motion } from 'framer-motion';
import { ScrollReveal } from '../animations/ScrollReveal';
import { MapPin, Phone, Mail, Instagram, Linkedin } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    value: 'Lebanon, Beirut',
    link: null,
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+961 70 790 677',
    link: 'tel:+96170790677',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'quantumbytech@gmail.com',
    link: 'mailto:quantumbytech@gmail.com',
  },
];

const socialLinks = [
  {
    icon: Instagram,
    name: 'Instagram',
    link: 'https://www.instagram.com/quantumbytech/',
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/quantumbytech/',
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Get in <span className="text-gradient">Touch</span>
            </motion.h2>
            <motion.p
              className="text-lg text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to transform your digital presence? Let's start a conversation 
              and bring your vision to life.
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-start space-x-4 glass-effect rounded-xl p-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white/70 hover:text-primary-500 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white/70">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg glass-effect flex items-center justify-center hover:bg-primary-500/20 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Map or Additional Info */}
          <ScrollReveal direction="right">
            <div className="glass-effect rounded-2xl p-8 h-full flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  'Expert team with years of experience',
                  'Cutting-edge technology solutions',
                  'Customer-centric approach',
                  'Competitive pricing',
                  '24/7 support and maintenance',
                  'Proven track record of success',
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-8 p-6 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl border border-primary-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-white/90 italic">
                  "Quantum ByTech transformed our online presence completely. 
                  Their expertise and dedication are unmatched!"
                </p>
                <p className="text-primary-500 font-semibold mt-2">- Happy Client</p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

