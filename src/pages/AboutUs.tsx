
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Shield, Brain, Sparkles, Users, Target, Lock, Lightbulb, ChartBar } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section with Dynamic Background */}
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]">
              About WhitegloveAI
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Leading the Future of AI Innovation
            </p>
            <Button
              className="group bg-[#7021EE] hover:bg-[#7021EE]/90 text-white"
              asChild
            >
              <a href="#mission">
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
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
      </div>

      {/* Updated Footer */}
      <footer className="bg-black border-t border-[#7021EE]/20 text-white py-16 mt-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Site Map</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-[#7021EE] transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-[#7021EE] transition-colors">About</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-[#7021EE] transition-colors">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-[#7021EE] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-400 hover:text-[#7021EE] transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-[#7021EE] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-sm text-gray-400">© Copyright WhitegloveAI LLC 2025</p>
            <p className="text-sm text-[#7021EE] mt-2">Managed AI Service Provider™</p>
          </div>
        </div>
      </footer>
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
