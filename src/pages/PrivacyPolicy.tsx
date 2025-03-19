
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Lock } from "lucide-react";

const PrivacyPolicy = () => {
  const policyRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-black min-h-screen" ref={policyRef}>
      {/* Privacy Policy Hero Section - Based on provided image */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/10 to-black/95">
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
                Privacy Policy
              </h1>
              <p className="text-gray-400 mb-4">Effective Date: 01/01/2025</p>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl">
                WhitegloveAI LLC("Company," "we," "us," or "our") is committed 
                to protecting your privacy. This Privacy Policy describes how we 
                collect, use, and disclose your information when you visit our 
                website, use our services, or interact with us in any way.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="relative">
                <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Document with shield security icon */}
                  {/* Main document/phone outline */}
                  <rect x="180" y="80" width="140" height="200" rx="10" fill="#f8f9ff" fillOpacity="0.1" stroke="white" strokeWidth="1.5" />
                  <rect x="190" y="100" width="120" height="160" rx="5" fill="#f8f9ff" fillOpacity="0.15" />
                  
                  {/* Document folds/pages */}
                  <rect x="200" y="130" width="30" height="10" rx="2" fill="#333" />
                  <rect x="200" y="150" width="30" height="10" rx="2" fill="#333" />
                  <rect x="200" y="170" width="30" height="10" rx="2" fill="#333" />
                  <rect x="200" y="190" width="30" height="10" rx="2" fill="#333" />
                  
                  {/* Shield in document */}
                  <path d="M250 150 L280 150 L280 185 L265 200 L250 185 Z" fill="none" stroke="white" strokeWidth="1.5" />
                  <circle cx="265" cy="170" r="7" fill="none" stroke="white" strokeWidth="1.5" />
                  <path d="M265 170 L265 175" stroke="white" strokeWidth="1.5" />
                  
                  {/* Decorative lines */}
                  <line x1="150" y1="100" x2="170" y2="100" stroke="white" strokeWidth="1" opacity="0.5" />
                  <line x1="150" y1="120" x2="170" y2="120" stroke="white" strokeWidth="1" opacity="0.5" />
                  <line x1="330" y1="150" x2="350" y2="150" stroke="white" strokeWidth="1" opacity="0.5" />
                  <line x1="330" y1="170" x2="350" y2="170" stroke="white" strokeWidth="1" opacity="0.5" />
                  
                  {/* Decorative leaves/elements */}
                  <path d="M340 200 C350 190, 360 200, 350 210" stroke="white" strokeWidth="1" opacity="0.7" fill="none" />
                  <path d="M350 210 C360 220, 350 230, 340 220" stroke="white" strokeWidth="1" opacity="0.7" fill="none" />
                  <path d="M160 200 C150 190, 140 200, 150 210" stroke="white" strokeWidth="1" opacity="0.7" fill="none" />
                  <path d="M150 210 C140 220, 150 230, 160 220" stroke="white" strokeWidth="1" opacity="0.7" fill="none" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            Our Commitment to Your Privacy
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl">
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
