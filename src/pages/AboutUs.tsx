import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Sparkles, Users, Target, Lightbulb } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ExecutiveTeam from '@/components/about/ExecutiveTeam';
import GetInTouch from '@/components/about/GetInTouch';
import CoreBeliefs from '@/pages/vcaio/components/chiefaiofficer/CoreBeliefs';
import { useIsMobile } from '@/hooks/use-mobile';
import PageWrapper from '@/components/layout/PageWrapper';
import HeroSection from '@/components/layout/HeroSection';
import AnimatedSection from '@/components/layout/AnimatedSection';

const AboutUs = () => {
  const isMobile = useIsMobile();
  
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans font-sora">
      <HeroSection 
        title="Transforming Businesses with AI Excellence"
        subtitle="At WhitegloveAI, we're pioneering AI-driven transformations to elevate enterprise operations through innovative, ethical, and secure solutions."
      />

      {/* Add the rest of the content here, using AnimatedSection */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-card/50 p-6 rounded-lg shadow-md border border-gray-800"
                variants={itemAnimation}
              >
                <div className="flex items-center mb-4">
                  <value.icon className="h-6 w-6 mr-2 text-[#7021EE]" />
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                </div>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Executive Team</h2>
          <ExecutiveTeam />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
          <GetInTouch />
        </div>
      </AnimatedSection>
    </div>
  );
};

const coreValues = [
  {
    title: "Innovation Excellence",
    description: "Pushing boundaries and creating cutting-edge AI solutions that drive real business value.",
    icon: Sparkles
  },
  {
    title: "Security First",
    description: "Ensuring the highest standards of data protection and privacy in every solution.",
    icon: Shield
  },
  {
    title: "Client Success",
    description: "Dedicated to delivering exceptional results and long-term value for our clients.",
    icon: Target
  },
  {
    title: "Ethical AI",
    description: "Committed to responsible AI development and implementation.",
    icon: Brain
  },
  {
    title: "Collaborative Growth",
    description: "Building strong partnerships and fostering innovation together.",
    icon: Users
  },
  {
    title: "Continuous Learning",
    description: "Always evolving and adapting to stay ahead in AI technology.",
    icon: Lightbulb
  }
];

export default AboutUs;
