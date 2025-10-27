import React from 'react';
import UnifiedServicesSection from './UnifiedServicesSection';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <UnifiedServicesSection />
      </div>
      
      <ScrollAnimation targetId="aiamf-framework" showArrow={true} />
    </section>
  );
};

export default ServicesSection;
