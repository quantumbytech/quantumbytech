import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { QuoteForm } from '@/components/sections/QuoteForm';
import { PageTransition } from '@/components/animations/PageTransition';

export const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Services />
      <About />
      <Contact />
      <QuoteForm />
    </PageTransition>
  );
};

