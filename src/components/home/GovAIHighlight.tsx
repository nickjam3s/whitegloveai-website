import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';

const GovAIHighlight = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-secondary/10 p-4 rounded-full">
              <Shield className="h-12 w-12 text-secondary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Built for Government, Proven in Government
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            WhitegloveAI is a leader in public sector AI. As a TXShare-approved vendor, we provide cities, counties, and school districts with secure, compliant solutions that modernize services and improve citizen engagement.
          </p>
          <Link to="/govai">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore GovAI Solutions
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GovAIHighlight;
