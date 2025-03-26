
import { useEffect } from "react";
import HeroSection from "./components/adopt/HeroSection";
import ServiceDescription from "./components/adopt/ServiceDescription";
import BusinessOutcomes from "./components/adopt/BusinessOutcomes";
import Deliverables from "./components/adopt/Deliverables";
import ExpertTeam from "./components/adopt/ExpertTeam";
import SecurityCompliance from "./components/adopt/SecurityCompliance";
import Support from "./components/adopt/Support";
import ScrollAnimation from '@/components/animations/ScrollAnimation';

const Adopt = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServiceDescription />
      <BusinessOutcomes />
      <Deliverables />
      <ExpertTeam />
      <SecurityCompliance />
      <Support />
      <ScrollAnimation targetId="service-description" />
      
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Contact Us
          </h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Ready to start your AI adoption journey? Get in touch with our team of experts.
          </p>
          <div data-tf-live="01JMANX32Q8N97C9RXW4GRN312"></div>
        </div>
      </section>
    </div>
  );
};

export default Adopt;
