
import { useEffect } from "react";
import HeroSection from "./components/vendorai/HeroSection";
import VendorManagement from "./components/vendorai/VendorManagement";
import BusinessOutcomes from "./components/vendorai/BusinessOutcomes";
import ComprehensiveDeliverables from "./components/vendorai/ComprehensiveDeliverables";
import ExpertTeam from "./components/vendorai/ExpertTeam";
import SecurityCompliance from "./components/vendorai/SecurityCompliance";
import PricingModels from "./components/vendorai/PricingModels";
import Support from "./components/vendorai/Support";
import StepByStepForm from "./components/vendorai/StepByStepForm";

const VendorAI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VendorManagement />
      <BusinessOutcomes />
      <ComprehensiveDeliverables />
      <ExpertTeam />
      <SecurityCompliance />
      <PricingModels />
      <Support />
      
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

export default VendorAI;
