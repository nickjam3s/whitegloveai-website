
import { useEffect } from "react";
import HeroSection from "./components/humanoidai/HeroSection";
import ServiceFeatures from "./components/humanoidai/ServiceFeatures";
import MethodologySection from "./components/humanoidai/MethodologySection";
import BusinessOutcomes from "./components/humanoidai/BusinessOutcomes";
import Deliverables from "./components/humanoidai/Deliverables";
import SecurityCompliance from "./components/humanoidai/SecurityCompliance";
import StepByStepForm from "./components/vendorai/StepByStepForm";

const HumanoidAI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServiceFeatures />
      <MethodologySection />
      <BusinessOutcomes />
      <Deliverables />
      <SecurityCompliance />
      
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Contact Us
          </h2>
          <div className="bg-card/50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <StepByStepForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanoidAI;
