
import { useEffect } from "react";
import HeroSection from "./components/vendorai/HeroSection";
import VendorManagement from "./components/vendorai/VendorManagement";
import BusinessOutcomes from "./components/vendorai/BusinessOutcomes";
import ComprehensiveDeliverables from "./components/vendorai/ComprehensiveDeliverables";
import ExpertTeam from "./components/vendorai/ExpertTeam";
import SecurityCompliance from "./components/vendorai/SecurityCompliance";
import PricingModels from "./components/vendorai/PricingModels";
import Support from "./components/vendorai/Support";
import ContactSection from "./components/vendorai/ContactSection";
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
      <ContactSection />
      
    </div>
  );
};

export default VendorAI;
