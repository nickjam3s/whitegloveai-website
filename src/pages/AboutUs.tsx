import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Sparkles, Users, Target, Lightbulb } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ExecutiveTeam from '@/components/about/ExecutiveTeam';
import GetInTouch from '@/components/about/GetInTouch';
import CoreBeliefs from '@/pages/vcaio/components/chiefaiofficer/CoreBeliefs';
import { useIsMobile } from '@/hooks/use-mobile';
import PageWrapper from '@/components/layout/PageWrapper';

const AboutUs = () => {
  const isMobile = useIsMobile();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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

  const titleAnimation = {
    initial: { opacity: 0, scale: 0.9, y: -10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 1.2, type: "spring", stiffness: 80 }
  };
  
  const textAnimation = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, delay: 0.3 }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans font-sora">
      <section className="relative h-[100vh] flex items-center overflow-hidden bg-gradient-to-br from-secondary/5 via-background to-primary/5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--secondary)) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-8 md:mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
            >
              Transforming Businesses with AI Excellence
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto px-3 sm:px-0 text-shadow-sm"
            >
              At WhitegloveAI, we're pioneering AI-driven transformations to elevate enterprise operations through innovative, ethical, and secure solutions.
            </motion.p>

            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
              initial={{ y: 0, opacity: 0.5 }}
              animate={{ y: 10, opacity: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
            
            </motion.div>
          </div>
        </div>
      </section>

      <PageWrapper>
        <div className="container mx-auto px-4">
          <motion.section
            id="mission"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="scroll-mt-20 bg-gradient-to-br from-[#7021EE]/10 to-transparent border border-[#7021EE]/20 p-4 sm:p-8 rounded-xl"
          >
          <motion.h2 
            variants={titleAnimation} 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-8 text-[#7021EE]"
          >
            Our Mission
          </motion.h2>
          <motion.p 
            variants={textAnimation}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            At WhitegloveAI, our mission is to empower organizations to adopt secure, responsible, and scalable AI solutions. 
            We believe in reshaping organizational efficiency through AI, unlocking new potentials in business processes, 
            customer experiences, and digital transformation strategies.
          </motion.p>
          </motion.section>

          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-[#7021EE]/10 to-transparent border border-[#7021EE]/20 p-4 sm:p-8 rounded-xl mt-16"
          >
          <motion.h2 
            variants={titleAnimation}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-8 text-[#7021EE]"
          >
            Our Vision
          </motion.h2>
          <motion.p 
            variants={textAnimation}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            Our vision is to be at the forefront of AI-driven digital transformations, catalyzing growth and efficiency 
            through emerging technologies. We aim to establish AI as a transformative force that helps businesses 
            solve complex problems, streamline operations, and enhance decision-making capabilities.
          </motion.p>
          </motion.section>
          
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-[#7021EE]/10 to-transparent border border-[#7021EE]/20 p-4 sm:p-8 rounded-xl mt-16"
          >
          <motion.h2 
            variants={titleAnimation}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-8 text-[#7021EE]"
          >
            AI Philosophy
          </motion.h2>
          <motion.p 
            variants={textAnimation}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            At WhitegloveAI, our philosophy is founded on the principle of harmonizing human ingenuity with the power 
            of artificial intelligence to forge a brighter and more efficient future for enterprises. We believe AI is 
            not just a tool but a transformative ally that amplifies human potential, drives innovation, and reshapes 
            the very fabric of business.
          </motion.p>
          </motion.section>
          
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CoreBeliefs />
            </motion.div>
          </div>
          
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-[#7021EE]/10 to-transparent border border-[#7021EE]/20 p-4 sm:p-8 rounded-xl mt-16"
          >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            At WhitegloveAI, we are not just practitioners but advocates of an AI-enabled future where businesses thrive through the ethical, secure, and intelligent application of technology. We are dedicated to leading this charge, providing our clients and stakeholders with the tools and guidance to realize the full potential of artificial intelligence. Our philosophy isn't just about what AI can do for us today, but how it will shape our tomorrow.
          </p>
          </motion.section>
          
          <motion.section
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16"
          >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-[#7021EE] col-span-full">Our Core Values</h2>
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="group p-4 sm:p-6 rounded-xl bg-gradient-to-br from-[#7021EE]/10 to-transparent border border-[#7021EE]/20 hover:border-[#7021EE]/40 transition-all duration-300 hover-lift mx-2 sm:mx-0"
            >
              <value.icon className="h-7 w-7 md:h-8 md:w-8 text-[#7021EE] mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">{value.title}</h3>
              <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
                {value.description}
              </p>
            </motion.div>
          ))}
          </motion.section>
          
          <ExecutiveTeam />
          
          <GetInTouch />
        </div>
      </PageWrapper>
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
