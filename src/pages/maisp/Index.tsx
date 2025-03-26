
import React from 'react';
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import HeroSection from './components/HeroSection';
import PatentedExpertise from './components/PatentedExpertise';
import ServicesSection from './components/ServicesSection';
import ScalableSolutions from './components/ScalableSolutions';
import CaseStudy from './components/CaseStudy';
import SupportSection from './components/SupportSection';

const MAISP = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <PatentedExpertise />
      <ServicesSection />
      <ScalableSolutions />
      <CaseStudy />
      <SupportSection />
      <ScrollAnimation targetId="patented-expertise" />
    </div>
  );
};

export default MAISP;
