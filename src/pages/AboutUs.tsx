import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Heart, Shield, Brain, Sparkles, Users, Target, Lock, Lightbulb, ChartBar, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ExecutiveTeam from '@/components/about/ExecutiveTeam';
import GetInTouch from '@/components/about/GetInTouch';
import CoreBeliefs from '@/pages/vcaio/components/CoreBeliefs';

const AboutUs = () => {
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

  const stats = [
    { value: "98%", label: "Client Retention" },
    { value: "250+", label: "AI Projects" },
    { value: "24/7", label: "Support" },
    { value: "12+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans font-sora">
      {/* Hero Section with Dynamic Background */}
      <section className="relative h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        
        {/* Animated Elements */}
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
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
            >
              Transforming Businesses with AI Excellence
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
            >
              At WhitegloveAI, we're pioneering AI-driven transformations to elevate enterprise operations through innovative, ethical, and secure solutions.
            </motion.p>
          
            {/* Stats Section */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-12"
              variants={containerAnimation}
              initial="hidden"
              animate="show"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  variants={itemAnimation}
                >
                  <p className="text-4xl md:text-5xl font-bold text-[#7021EE]">{stat.value}</p>
                  <p className="text-gray-300 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ y: 0, opacity: 0.5 }}
            animate={{ y: 10, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            <a href="#mission" aria-label="Scroll to learn more">
              <ArrowDown className="h-8 w-8 text-[#7021EE]" />
            </a>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Mission Section */}
        <motion.section
          id="mission"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="scroll-mt-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#7021EE]">Our Mission</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            At WhitegloveAI, our mission is to empower organizations to adopt secure, responsible, and scalable AI solutions. 
            We believe in reshaping organizational efficiency through AI, unlocking new potentials in business processes, 
            customer experiences, and digital transformation strategies.
          </p>
        </motion.section>

        {/* Vision Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#7021EE]">Our Vision</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our vision is to be at the forefront of AI-driven digital transformations, catalyzing growth and efficiency 
            through emerging technologies. We aim to establish AI as a transformative force that helps businesses 
            solve complex problems, streamline operations, and enhance decision-making capabilities.
          </p>
        </motion.section>
        
        {/* AI Philosophy Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#7021EE]">AI Philosophy</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            At WhitegloveAI, our philosophy is founded on the principle of harmonizing human ingenuity with the power 
            of artificial intelligence to forge a brighter and more efficient future for enterprises. We believe AI is 
            not just a tool but a transformative ally that amplifies human potential, drives innovation, and reshapes 
            the very fabric of business.
          </p>
        </motion.section>
        
        {/* Core Beliefs Section */}
        <CoreBeliefs />
        
        {/* Core Beliefs Philosophy Text */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-[#7021EE]/10 to-transparent border border-[#7021EE]/20 p-8 rounded-xl mb-8"
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            At WhitegloveAI, we are not just practitioners but advocates of an AI-enabled future where businesses thrive through the ethical, secure, and intelligent application of technology. We are dedicated to leading this charge, providing our clients and stakeholders with the tools and guidance to realize the full potential of artificial intelligence. Our philosophy isn't just about what AI can do for us today, but how it will shape our tomorrow.
          </p>
        </motion.section>
        
        {/* Core Values Grid */}
        <motion.section
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#7021EE] col-span-full">Our Core Values</h2>
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="group p-6 rounded-xl bg-gradient-to-br from-[#7021EE]/10 to-transparent border border-[#7021EE]/20 hover:border-[#7021EE]/40 transition-all duration-300"
            >
              <value.icon className="h-8 w-8 text-[#7021EE] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.section>
        
        {/* Executive Team Section - After Core Values */}
        <ExecutiveTeam />
        
        {/* Get in Touch Section - After Executive Team */}
        <GetInTouch />
      </div>
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
