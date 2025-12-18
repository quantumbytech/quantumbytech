import { motion } from 'framer-motion';
import { ScrollReveal } from '../animations/ScrollReveal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

const serviceOptions = [
  'Mobile App',
  'Website',
  'E-Commerce',
  'Maintenance',
  'Database',
  'Tech Support',
];

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export const QuoteForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/xanybdvr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          services: data.services.join(', '),
          message: data.message || 'No additional message',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl" />
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
              Request a <span className="text-gradient">Quote</span>
            </motion.h2>
            <motion.p
              className="text-lg text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tell us about your project and we'll get back to you with a 
              customized solution and competitive pricing.
            </motion.p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="glass-effect rounded-2xl p-8 md:p-12"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-20 h-20 text-primary-500 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                  <p className="text-white/70">
                    We've received your request and will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Services Selection */}
                  <div>
                    <label className="block text-lg font-semibold mb-4">
                      What services are you interested in? *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {serviceOptions.map((service) => (
                        <motion.label
                          key={service}
                          className="relative flex items-center space-x-3 glass-effect rounded-lg p-4 cursor-pointer hover:bg-white/10 transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <input
                            type="checkbox"
                            value={service}
                            {...register('services')}
                            className="w-5 h-5 rounded border-2 border-primary-500 text-primary-500 focus:ring-primary-500 focus:ring-offset-0 bg-transparent"
                          />
                          <span className="text-sm">{service}</span>
                        </motion.label>
                      ))}
                    </div>
                    {errors.services && (
                      <p className="text-red-400 text-sm mt-2">{errors.services.message}</p>
                    )}
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register('name')}
                        className="w-full glass-effect rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register('email')}
                        className="w-full glass-effect rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      id="message"
                      {...register('message')}
                      rows={4}
                      className="w-full glass-effect rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                      placeholder="Tell us more about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send Request</span>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

