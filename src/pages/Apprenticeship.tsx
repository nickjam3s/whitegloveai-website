
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import HeroSection from '@/components/layout/HeroSection';
import AnimatedSection from '@/components/layout/AnimatedSection';
import ProgramFeatures from "./apprenticeship/components/ProgramFeatures";
import CandidateProfile from "./apprenticeship/components/CandidateProfile";
import CareerProgression from "./apprenticeship/components/CareerProgression";
import WhyUs from "./apprenticeship/components/WhyUs";
import TuitionSection from "./apprenticeship/components/TuitionSection";
import ApplicationProcess from "./apprenticeship/components/ApplicationProcess";
import FAQSection from "./apprenticeship/components/FAQSection";
import VisionSection from "./apprenticeship/components/VisionSection";
import ApplicationForm from "./apprenticeship/components/ApplicationForm";
import ContactSection from "./apprenticeship/components/ContactSection"

const Apprenticeship = () => {
  return (
    <div className="min-h-screen bg-black">
      <PageWrapper fullWidth>
        <HeroSection 
          title="AI Apprenticeship Program"
          subtitle="Join our immersive training program designed to transform beginners into AI professionals ready for industry challenges."
          id="why-us"
        />
        
        <AnimatedSection>
          <WhyUs />
        </AnimatedSection>
        
        <AnimatedSection>
          <ProgramFeatures />
        </AnimatedSection>
        
        <AnimatedSection>
          <CareerProgression />
        </AnimatedSection>
        
        <AnimatedSection>
          <VisionSection />
        </AnimatedSection>
        
        <AnimatedSection>
          <CandidateProfile />
        </AnimatedSection>
        
        <AnimatedSection>
          <ApplicationProcess />
        </AnimatedSection>
        
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
        
        <AnimatedSection>
          <FAQSection />
        </AnimatedSection>
      </PageWrapper>
    </div>
  );
};

export default Apprenticeship;
