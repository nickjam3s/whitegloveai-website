
import React from 'react';
import StrategicAILeadership from './StrategicAILeadership';
import ManagedAIServices from './ManagedAIServices';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StrategicAILeadership />
        <ManagedAIServices />
      </div>
      
      {/* Add ScrollAnimation to point to the AI Incubation Lab Section */}
      <ScrollAnimation targetId="ai-incubation-lab" />
    </section>
  );
};

export default ServicesSection;
