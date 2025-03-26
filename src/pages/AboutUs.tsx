
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Shield, Brain, Sparkles, Users, Target, Lightbulb } from 'lucide-react';
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
      <section className="relative h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#7021EE]/20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: isMobile ? `${Math.random() * 100 + 30}px` : `${Math.random() * 200 + 50}px`,
                height: isMobile ? `${Math.random() * 100 + 30}px` : `${Math.random() * 200 + 50}px`,
              }}
            />
          ))}
        </div>

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
              <a href="#mission" aria-label="Scroll to learn more">
                <ArrowDown className="h-6 w-6 md:h-8 md:w-8 text-[#7021EE]" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <PageWrapper>
        {/* Mission Section - Styled like the main homepage */}
        <motion.section
          id="mission"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 bg-background"
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2 
              variants={titleAnimation} 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white heading-highlight-scroll"
            >
              Our Mission
            </motion.h2>
            <motion.p 
              variants={textAnimation}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              At WhitegloveAI, our mission is to empower organizations to adopt secure, responsible, and scalable AI solutions. 
              We believe in reshaping organizational efficiency through AI, unlocking new potentials in business processes, 
              customer experiences, and digital transformation strategies.
            </motion.p>
          </div>
        </motion.section>

        {/* Vision Section - Styled like the main homepage */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-card"
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2 
              variants={titleAnimation}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white heading-highlight-scroll"
            >
              Our Vision
            </motion.h2>
            <motion.p 
              variants={textAnimation}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              Our vision is to be at the forefront of AI-driven digital transformations, catalyzing growth and efficiency 
              through emerging technologies. We aim to establish AI as a transformative force that helps businesses 
              solve complex problems, streamline operations, and enhance decision-making capabilities.
            </motion.p>
          </div>
        </motion.section>
        
        {/* AI Philosophy Section - Styled like the main homepage */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2 
              variants={titleAnimation}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white heading-highlight-scroll"
            >
              AI Philosophy
            </motion.h2>
            <motion.p 
              variants={textAnimation}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              At WhitegloveAI, our philosophy is founded on the principle of harmonizing human ingenuity with the power 
              of artificial intelligence to forge a brighter and more efficient future for enterprises. We believe AI is 
              not just a tool but a transformative ally that amplifies human potential, drives innovation, and reshapes 
              the very fabric of business.
            </motion.p>
          </div>
        </motion.section>
        
        {/* Core Beliefs Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white heading-highlight-scroll">
              Our Core Beliefs
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CoreBeliefs />
            </motion.div>
          </div>
        </div>
        
        {/* Philosophy Statement Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
        >
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-br from-[#7021EE]/10 to-transparent border border-[#7021EE]/20 p-8 rounded-xl max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                At WhitegloveAI, we are not just practitioners but advocates of an AI-enabled future where businesses thrive through the ethical, secure, and intelligent application of technology. We are dedicated to leading this charge, providing our clients and stakeholders with the tools and guidance to realize the full potential of artificial intelligence.
              </p>
            </div>
          </div>
        </motion.section>
        
        {/* Core Values Section */}
        <motion.section
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-card"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white heading-highlight-scroll">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemAnimation}
                  className="group p-6 rounded-xl bg-gradient-to-br from-[#7021EE]/10 to-transparent border border-[#7021EE]/20 hover:border-[#7021EE]/40 transition-all duration-300 hover-lift"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <value.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Executive Team Section */}
        <ExecutiveTeam />
        
        {/* Get In Touch Section */}
        <GetInTouch />
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
