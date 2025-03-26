
import { useEffect } from "react";
import HeroSection from "./components/mediaai/HeroSection";
import ServiceOverview from "./components/mediaai/ServiceOverview";
import ServicePlans from "./components/mediaai/ServicePlans";
import AddOns from "./components/mediaai/AddOns";
import PlanComparison from "./components/mediaai/PlanComparison";
import GettingStarted from "./components/mediaai/GettingStarted";
import ContactSection from "./components/mediaai/ContactSection";
import ScrollAnimation from '@/components/animations/ScrollAnimation';

const MediaAI = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    window.scrollTo(0, 0);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServiceOverview />
      <ServicePlans />
      <AddOns />
      <PlanComparison />
      <GettingStarted />
      <ContactSection />
      <ScrollAnimation targetId="service-overview" />
    </div>
  );
};

export default MediaAI;
