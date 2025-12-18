import { PageTransition } from '@/components/animations/PageTransition';
import { Services as ServicesSection } from '@/components/sections/Services';

export const Services = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24">
        {/* Services Section */}
        <ServicesSection />
      </div>
    </PageTransition>
  );
};

