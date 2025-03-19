
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PrivacyPolicy = () => {
  const policyRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-black min-h-screen" ref={policyRef}>
      {/* Hero Section - Based on provided image */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 text-white">
                Transform Your Career in<br />AI with WhitegloveAI
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl">
                Our exclusive 6-month apprenticeship program offers an
                unparalleled opportunity to master cutting-edge AI technology
                while working on real-world solutions. You'll collaborate
                directly with seasoned professionals who are shaping the future
                of AI implementation across industries.
              </p>
              <Button 
                size="lg" 
                className="bg-[#7021EE] hover:bg-[#7021EE]/90"
              >
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="relative">
                <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Laptop with lightbulb */}
                  <rect x="120" y="180" width="160" height="100" fill="white" fillOpacity="0.1" rx="4" />
                  <rect x="145" y="190" width="110" height="70" fill="white" fillOpacity="0.2" rx="2" />
                  
                  {/* Lightbulb */}
                  <circle cx="200" cy="130" r="20" fill="none" stroke="white" strokeWidth="2" />
                  <path d="M190 130 L210 130 M200 120 L200 140" stroke="white" strokeWidth="2" />
                  <path d="M180 140 L220 140 L215 160 L185 160 Z" fill="none" stroke="white" strokeWidth="2" />
                  
                  {/* Graph */}
                  <path d="M260 120 L280 100 L300 110 L320 80" stroke="white" strokeWidth="2" fill="none" />
                  <circle cx="320" cy="80" r="5" fill="white" />
                  
                  {/* Flag */}
                  <path d="M320 120 L320 50" stroke="white" strokeWidth="2" />
                  <path d="M320 50 L350 65 L320 80" fill="white" fillOpacity="0.5" />
                  
                  {/* Pen */}
                  <path d="M340 150 L360 120" stroke="white" strokeWidth="2" />
                  <path d="M358 118 L362 122 L342 152 L338 148 Z" fill="white" />
                  
                  {/* Coffee mug */}
                  <rect x="120" y="150" width="20" height="25" rx="3" fill="none" stroke="white" strokeWidth="2" />
                  <path d="M140 155 C150 155, 150 170, 140 170" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 heading-highlight">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-2">Effective Date: 01/01/2025</p>
          <p className="text-lg text-gray-300 max-w-3xl">
            This page has been cleared. A new privacy policy will be added soon.
          </p>
          <div className="mt-8">
            <Link to="/" className="inline-block px-6 py-3 bg-[#7021EE] text-white rounded-lg hover:bg-[#7021EE]/80 transition-colors">
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
