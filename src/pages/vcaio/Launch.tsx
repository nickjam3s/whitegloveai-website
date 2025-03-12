
import { useEffect } from "react";
import HeroSection from "./components/launch/HeroSection";
import ImportanceSection from "./components/launch/ImportanceSection";
import UrgencySection from "./components/launch/UrgencySection";
import ProcessSection from "./components/launch/ProcessSection";
import DeliverablesSection from "./components/launch/DeliverablesSection";
import ResultsSection from "./components/launch/ResultsSection";
import NextStepsSection from "./components/launch/NextStepsSection";

const Launch = () => {
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
      <ImportanceSection />
      <UrgencySection />
      <ProcessSection />
      <DeliverablesSection />
      <ResultsSection />
      <NextStepsSection />
      
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Work With Us
          </h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Take the first step towards confident AI adoption. Contact us to schedule your AI Launchpad Workshop and start your journey to AI success.
          </p>
          <div data-tf-live="01JMANX32Q8N97C9RXW4GRN312"></div>
        </div>
      </section>
    </div>
  );
};

export default Launch;
