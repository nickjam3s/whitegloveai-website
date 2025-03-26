
import React from 'react';
import HeroSection from '@/components/layout/HeroSection';
import AnimatedSection from '@/components/layout/AnimatedSection';
import { motion } from 'framer-motion';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection 
        title="AI Solutions That Transform Business"
        subtitle="Discover our comprehensive range of AI solutions designed to drive innovation and efficiency across your organization."
        id="solutions"
      />

      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8" id="solutions">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-800"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <h2 className="text-xl font-semibold mb-4 text-white">{solution.title}</h2>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[#7021EE] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

const solutions = [
  {
    title: "AI Consulting",
    description:
      "Strategic guidance to help you leverage AI technology effectively.",
    features: [
      "Technology Assessment",
      "Implementation Strategy",
      "ROI Analysis",
      "Risk Management",
    ],
  },
  {
    title: "Custom AI Development",
    description: "Tailored AI solutions designed for your specific needs.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
    ],
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI into your existing systems.",
    features: [
      "API Development",
      "System Integration",
      "Data Pipeline Setup",
      "Performance Optimization",
    ],
  },
  {
    title: "AI Training",
    description: "Comprehensive training programs for your team.",
    features: [
      "Technical Workshops",
      "Best Practices",
      "Hands-on Training",
      "Ongoing Support",
    ],
  },
  {
    title: "AI Maintenance",
    description: "Ongoing support and maintenance for your AI systems.",
    features: [
      "Performance Monitoring",
      "System Updates",
      "Bug Fixes",
      "Security Patches",
    ],
  },
  {
    title: "AI Analytics",
    description: "Deep insights from your AI implementations.",
    features: [
      "Performance Metrics",
      "Usage Analytics",
      "ROI Tracking",
      "Optimization Recommendations",
    ],
  },
];

export default Solutions;
