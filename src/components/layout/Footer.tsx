import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { scrollToTop } from '@/lib/scrollToTop';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    scrollToTop();
  };

  return (
    <footer className="bg-dark-900 border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary-500">Q</span>uantum ByTech
            </h3>
            <p className="text-white/60 mb-4">
              Your trusted partner for professional website development, innovative software solutions, and IT consulting.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="text-white/60 hover:text-primary-500 transition-colors text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { name: 'E-Commerce', path: '/services/e-commerce' },
                { name: 'Mobile Apps', path: '/services/mobile-apps' },
                { name: 'Informative Websites', path: '/services/informative-websites' },
                { name: 'Database Solutions', path: '/services/database-solutions' },
                { name: 'Maintenance', path: '/services/maintenance' },
                { name: 'Tech Support', path: '/services/tech-support' }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="text-white/60 hover:text-primary-500 transition-colors text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-white/60">
                <MapPin size={18} className="text-primary-500" />
                <span>Lebanon, Beirut</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-primary-500" />
                <a
                  href="tel:+96170790677"
                  className="text-white/60 hover:text-primary-500 transition-colors"
                >
                  +961 70 790 677
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-primary-500" />
                <a
                  href="mailto:quantumbytech@gmail.com"
                  className="text-white/60 hover:text-primary-500 transition-colors"
                >
                  quantumbytech@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <motion.a
                href="https://www.instagram.com/quantumbytech/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/60 hover:text-primary-500 transition-colors"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/quantumbytech/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/60 hover:text-primary-500 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:quantumbytech@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/60 hover:text-primary-500 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/10 pt-8 text-center text-white/60"
        >
          <p>© {currentYear} Quantum ByTech. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

