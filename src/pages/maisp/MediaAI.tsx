
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroSection from "./components/mediaai/HeroSection";
import ServiceOverview from "./components/mediaai/ServiceOverview";
import ServicePlans from "./components/mediaai/ServicePlans";
import PlanComparison from "./components/mediaai/PlanComparison";
import AddOns from "./components/mediaai/AddOns";
import GettingStarted from "./components/mediaai/GettingStarted";
import ContactSection from "./components/mediaai/ContactSection";

const MediaAI = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <ServiceOverview />
      <ServicePlans />
      <PlanComparison />
      <AddOns />
      <GettingStarted />
      
      {/* Equipment Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#1A0D33] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#E0BBE4]">
              Ready to Set Up Your Studio?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Take your podcast to the next level with our comprehensive equipment guide. 
              We'll walk you through setting up everything you need for professional-quality content creation.
            </p>
            <Link to="/maisp/mediaai/equipment">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#7021EE] to-[#E0BBE4] text-white font-semibold px-8 py-4 text-lg hover:opacity-90 transition-opacity"
              >
                View Our Recommended Equipment List
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      <ContactSection />
    </div>
  );
};

export default MediaAI;
