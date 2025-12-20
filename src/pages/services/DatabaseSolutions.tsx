import { motion } from 'framer-motion';
import { PageTransition } from '@/components/animations/PageTransition';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { CircleStackIcon, CloudIcon, ArrowPathIcon, ChartBarIcon, ShieldCheckIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: CircleStackIcon,
    title: 'Data Modeling & Design',
    description: 'Expert database architecture and schema design tailored to your business needs.',
  },
  {
    icon: CloudIcon,
    title: 'Cloud Database Solutions',
    description: 'Scalable cloud-based databases with AWS, Azure, and Google Cloud Platform.',
  },
  {
    icon: ArrowPathIcon,
    title: 'Database Migration',
    description: 'Seamless migration services with zero downtime and data integrity.',
  },
  {
    icon: ChartBarIcon,
    title: 'Performance Tuning',
    description: 'Optimize query performance and database efficiency for faster operations.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with encryption, backup, and disaster recovery.',
  },
  {
    icon: CpuChipIcon,
    title: 'Database Automation',
    description: 'Automated backups, monitoring, and maintenance for peace of mind.',
  },
];

const technologies = [
  { 
    name: 'PostgreSQL', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    color: 'from-blue-500 to-blue-600'
  },
  { 
    name: 'MySQL', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    color: 'from-cyan-500 to-blue-500'
  },
  { 
    name: 'MongoDB', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: 'from-green-500 to-emerald-600'
  },
  { 
    name: 'Redis', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    color: 'from-red-500 to-red-600'
  },
  { 
    name: 'Oracle', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    color: 'from-red-600 to-orange-600'
  },
  { 
    name: 'Microsoft SQL Server', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
    color: 'from-gray-500 to-red-500'
  },
];

export const DatabaseSolutions = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
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
                  <CircleStackIcon className="text-orange-500 w-5 h-5" />
                  <span className="text-sm">Database Solutions</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Robust & Scalable
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Database Architecture
                  </span>
                </h1>

                <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
                  Build a solid foundation for your applications with our expert database design, 
                  implementation, and optimization services. We ensure your data is secure, 
                  accessible, and performs at peak efficiency.
                </p>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Consult Our Experts
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
                Comprehensive <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Database Services</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <motion.div
                    className="glass-effect rounded-2xl p-8"
                    whileHover={{ y: -10 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6">
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

        {/* Technologies Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="glass-effect rounded-3xl p-12 max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                  Technologies We <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Master</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                      initial={{ opacity: 0.5, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.02, duration: 0.4, ease: 'easeOut' }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex justify-center mb-4">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tech.color} p-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow`}>
                          <div className="w-full h-full bg-white rounded-lg p-2 flex items-center justify-center">
                            <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-white">{tech.name}</h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                  Why Choose Our Database Solutions?
                </h2>
                <div className="space-y-6">
                  {[
                    'High availability and fault tolerance',
                    'Automatic scaling to handle growth',
                    'Real-time data replication and backup',
                    'Advanced security and access control',
                    'Performance monitoring and optimization',
                    '24/7 support and maintenance',
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0.5, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03, duration: 0.4, ease: 'easeOut' }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex-shrink-0" />
                      <p className="text-lg text-white/80">{benefit}</p>
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
                  Ready to Optimize Your Data?
                </h2>
                <p className="text-xl text-white/70 mb-8">
                  Let's build a database solution that scales with your business and keeps your data secure.
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Get Started Today
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

