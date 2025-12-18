import { PageTransition } from '@/components/animations/PageTransition';
import { Services as ServicesSection } from '@/components/sections/Services';

export const Services = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 md:pt-28 lg:pt-32">
        {/* Services Section */}
        <ServicesSection />
      </div>
    </PageTransition>
  );
};

