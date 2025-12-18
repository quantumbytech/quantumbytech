import { PageTransition } from '@/components/animations/PageTransition';
import { Contact as ContactSection } from '@/components/sections/Contact';
import { QuoteForm } from '@/components/sections/QuoteForm';

export const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 md:pt-28 lg:pt-32">
        {/* Contact Section */}
        <ContactSection />
        
        {/* Quote Form */}
        <QuoteForm />
      </div>
    </PageTransition>
  );
};

