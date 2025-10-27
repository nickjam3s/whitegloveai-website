import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';

const GovAIHighlight = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--secondary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
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
