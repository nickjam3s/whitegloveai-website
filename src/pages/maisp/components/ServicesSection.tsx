
import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "VendorAI",
    description: "Strategic selection, implementation, and management of AI vendors",
    link: "/maisp/vendorai",
  },
  {
    title: "TextAI",
    description: "Intelligent text-based AI solutions for customer service",
    link: "/maisp/textai",
  },
  {
    title: "VoiceAI",
    description: "Voice-powered AI assistants and automation solutions",
    link: "/maisp/voiceai",
  },
  {
    title: "MediaAI",
    description: "AI-driven media content creation and management",
    link: "/maisp/mediaai",
  },
  {
    title: "AutomateAI",
    description: "Process automation with intelligent AI workflows",
    link: "/maisp/automateai",
  },
  {
    title: "AvatarAI",
    description: "Custom digital avatars for brand representation",
    link: "/maisp/avatarai",
  },
  {
    title: "HumanoidAI",
    description: "Integration and management of humanoid robotic systems",
    link: "/maisp/humanoidai",
  },
  {
    title: "TranslateAI",
    description: "AI-powered live translation services",
    link: "/maisp/translateai",
  },
  {
    title: "TextAI for Good",
    description: "Nonprofit solutions using text-based AI technology",
    link: "/maisp/textaiforgood",
  },
];

const ServicesSection = () => {
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-[#7021EE]"
        >
          Our Services
        </motion.h2>
        
        <motion.div 
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="glass-card p-6 transition-all hover-lift"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <Link 
                to={service.link} 
                className="flex items-center text-[#7021EE] hover:text-[#7021EE]/80 transition-colors"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
