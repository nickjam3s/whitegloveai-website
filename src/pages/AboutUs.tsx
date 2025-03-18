
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Heart, Shield, Brain, Sparkles, Users, Target, Lock, Lightbulb, ChartBar, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
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

        {/* Meet the Executive Section */}
        <motion.section
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="scroll-mt-20"
          id="team"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#7021EE]">Meet the Executive Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executives.map((executive, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                className="group"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="glass-card overflow-hidden cursor-pointer group relative">
                      <div className="aspect-square overflow-hidden">
                        <motion.div
                          className="w-full h-full relative"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img 
                            src={executive.image} 
                            alt={executive.name} 
                            className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          />
                          <div className="absolute inset-0 bg-[#7021EE]/0 group-hover:bg-[#7021EE]/20 transition-colors duration-300"></div>
                        </motion.div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-white">{executive.name}</h3>
                        <p className="text-[#7021EE] mb-3">{executive.title}</p>
                        <p className="text-gray-400 line-clamp-3">{executive.shortBio}</p>
                        <div className="mt-4 flex justify-between items-center">
                          <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">View Details</span>
                          <a 
                            href={executive.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#7021EE] hover:text-[#9b87f5] transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="bg-black/95 border-[#7021EE]/20">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-semibold text-white">{executive.name}</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col md:flex-row gap-6 mt-4">
                      <div className="w-full md:w-1/3">
                        <div className="aspect-square overflow-hidden rounded-lg">
                          <img 
                            src={executive.image} 
                            alt={executive.name} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="mt-4">
                          <h3 className="text-xl font-semibold text-white">{executive.name}</h3>
                          <p className="text-[#7021EE]">{executive.title}</p>
                          <div className="mt-4">
                            <a 
                              href={executive.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[#7021EE] hover:text-[#9b87f5] transition-colors"
                            >
                              <Linkedin className="w-5 h-5" />
                              <span>LinkedIn Profile</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-2/3">
                        <h4 className="text-lg font-semibold text-white mb-3">Biography</h4>
                        <p className="text-gray-300 whitespace-pre-line">{executive.fullBio}</p>
                        {executive.achievements && (
                          <>
                            <h4 className="text-lg font-semibold text-white mt-6 mb-3">Key Achievements</h4>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                              {executive.achievements.map((achievement, idx) => (
                                <li key={idx}>{achievement}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </motion.section>
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

const executives = [
  {
    name: "Jane Smith",
    title: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3",
    shortBio: "Over 15 years driving innovation in AI and machine learning with a focus on enterprise solutions.",
    fullBio: "Jane Smith has been at the forefront of AI innovation for over 15 years. As CEO, she leads our strategic vision and ensures we deliver exceptional value to clients.\n\nBefore joining WhitegloveAI, Jane led digital transformation initiatives at Fortune 500 companies and founded two successful AI startups. Her unique blend of technical expertise and business acumen drives our company's growth and innovation.",
    achievements: [
      "Named Top 40 Under 40 Tech Leaders by Forbes",
      "Led AI initiatives that increased client ROI by 150%",
      "Published author on enterprise AI implementation strategies"
    ],
    linkedin: "https://linkedin.com"
  },
  {
    name: "David Johnson",
    title: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    shortBio: "AI researcher and architect who has built enterprise-scale solutions for global organizations.",
    fullBio: "David Johnson leads our technology strategy and oversees all product development efforts. With a Ph.D. in Machine Learning and extensive experience in enterprise software architecture, David drives our technical innovation and ensures our solutions meet the highest standards of performance and security.\n\nHis approach combines cutting-edge research with practical implementation, allowing WhitegloveAI to deliver AI solutions that actually work in complex business environments.",
    achievements: [
      "Holds 12 patents in machine learning and natural language processing",
      "Former Research Scientist at OpenAI",
      "Regular speaker at NVIDIA AI Conference and NeurIPS"
    ],
    linkedin: "https://linkedin.com"
  },
  {
    name: "Sarah Chen",
    title: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3",
    shortBio: "Operations expert specializing in scaling AI implementations for enterprise clients.",
    fullBio: "Sarah Chen oversees all operational aspects of WhitegloveAI, ensuring we deliver exceptional service while maintaining operational excellence. Her background in management consulting and enterprise software implementation gives her unique insight into the challenges of organizational AI adoption.\n\nSarah's strategic approach to operations has allowed WhitegloveAI to scale rapidly while maintaining our commitment to quality and client success.",
    achievements: [
      "Scaled operations from 20 to 200+ employees across 3 continents",
      "Improved client implementation time by 60%",
      "Developed our industry-leading AI governance framework"
    ],
    linkedin: "https://linkedin.com"
  },
  {
    name: "Michael Williams",
    title: "Chief Strategy Officer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    shortBio: "Former management consultant specializing in digital transformation and AI strategy.",
    fullBio: "Michael Williams guides our company's strategic direction, identifying new market opportunities and ensuring our solutions address the most critical challenges facing enterprises today. His background in management consulting at McKinsey and his experience leading digital transformation at scale gives him unique insight into how AI can create sustainable business value.\n\nMichael works closely with our executive team to align our technical capabilities with market needs and future trends.",
    achievements: [
      "Led WhitegloveAI's expansion into healthcare and financial services verticals",
      "Former Digital Transformation Practice Leader at McKinsey",
      "MBA from Harvard Business School with distinction"
    ],
    linkedin: "https://linkedin.com"
  }
];

export default AboutUs;
