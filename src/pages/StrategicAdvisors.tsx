
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import PageWrapper from '@/components/layout/PageWrapper';
import { Card } from '@/components/ui/card';
import { useIsMobile } from "@/hooks/use-mobile";
import { Briefcase, Users } from 'lucide-react';

interface AdvisorProps {
  name: string;
  title: string;
  company: string;
}

const advisorData: AdvisorProps[] = [
  { name: 'Prakash Adi', title: 'CEO', company: 'Stealth Mode' },
  { name: 'Jeff Bankard', title: 'Dir of InfoSec', company: 'Baker Tilly' },
  { name: 'Joe Bernik', title: 'Cyber Executive', company: 'BNY Mellon' },
  { name: 'Kristoffer Brown', title: 'Director', company: 'Mongo DB' },
  { name: 'Bindu Chowritmootoo', title: 'CEO', company: 'Manifest with Bindu' },
  { name: 'Dre Graves', title: 'Senior Account Executive', company: 'CoreLogic' },
  { name: 'Josh Hernandez', title: 'President', company: 'Innuvis' },
  { name: 'Reggie Hillard', title: 'CEO', company: 'TeleTechTX' },
  { name: 'Young Han', title: 'Partner', company: 'Forever Young Agency' },
  { name: 'Ken Huang', title: 'CEO & CAIO', company: 'DistributedApps.ai' },
  { name: 'Jason James', title: 'Director of Security', company: 'Mirantis' },
  { name: 'Michael Jones', title: 'President', company: 'B1 Bank' },
  { name: 'Paul Kanneman', title: 'Former CIO', company: 'Simmons Bank' },
  { name: 'Rehan Kauser', title: 'CEO and Founder', company: 'Agile Advantages' },
  { name: 'Steven Kazan', title: 'CEO', company: 'Inner Onion' },
  { name: 'Chris Lee', title: 'CIO', company: 'City of Lewisville' },
  { name: 'Lloyd Nelson', title: 'Vice President', company: 'Lockton Dunning' },
  { name: 'Tommy Perniciaro', title: 'Vice President', company: 'Halcyon' },
  { name: 'Randy Potts', title: 'CISO', company: 'Realtime Recovery' },
  { name: 'Sameer Ranjan', title: 'CEO', company: 'Catenate' },
  { name: 'Rodriguez Richard', title: 'CEO', company: 'ClearSync' },
  { name: 'Michelle Rider', title: 'CMO', company: 'Endeavor Management' },
  { name: 'Ted Sanders', title: 'BISO', company: 'Bank of America' },
  { name: 'Binni Skariah', title: 'CEO', company: 'Interaxion' },
  { name: 'Jill Stelfox', title: 'CEO', company: 'FounderGro' },
  { name: 'Ichan Stall', title: 'Partner', company: 'Forever Young Agency' },
  { name: 'Tim Tatarowicz', title: 'Co-Founder', company: 'Phoenix Power Supply' },
  { name: 'Rick Thompson', title: 'Head of McKinney', company: 'Plug and Play' },
  { name: 'Matt Ussery', title: 'CIO', company: 'AustenTell' },
  { name: 'Richard Weiss', title: 'CISO', company: 'MRO' },
  { name: 'Clement Yu', title: 'VP of Engineering', company: 'LocaliQ' }
];

const AdvisorCard = ({ name, title, company }: AdvisorProps) => {
  return (
    <Card className="p-6 bg-gradient-to-br from-black to-[#7021EE]/10 border border-[#7021EE]/20 hover:border-[#7021EE]/40 transition-all duration-300 h-full flex flex-col">
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <div className="mt-2 flex-grow">
        <p className="text-[#9b87f5] font-medium">{title}</p>
        <p className="text-gray-400">{company}</p>
      </div>
    </Card>
  );
};

const StrategicAdvisors = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('.animate-section').forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const titleAnimation = {
    initial: { opacity: 0, scale: 0.9, y: -10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 1.2, type: "spring", stiffness: 80 }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans font-sora overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 flex items-center justify-center relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Animated floating elements */}
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
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/351136e7-c241-4c56-a606-3ff7a65a05ac.png" 
              alt="WGAI Logo" 
              width="100" 
              height="100" 
              className="logo-animation mx-auto"
              style={{ 
                filter: "hue-rotate(260deg) brightness(150%) drop-shadow(0 0 10px rgba(112, 33, 238, 0.6))",
                display: "block"
              }}
            />
          </div>
          <motion.h1 
            {...titleAnimation}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]"
          >
              Strategic Advisors
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Our strategic advisors bring decades of experience across various industries, providing invaluable guidance and expertise to shape the future of WhitegloveAI.
            </p>
        </div>
      </section>

      <PageWrapper>
        {/* Overview Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 mb-20 animate-section"
        >
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-[#7021EE]/20 border border-[#7021EE]/30">
                <Users size={isMobile ? 32 : 48} className="text-[#9b87f5]" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-highlight-scroll">The Role of Our Advisors</h2>
            <p className="text-lg text-gray-300 mb-8">
              Our strategic advisors play a crucial role in guiding WhitegloveAI's vision and direction. These industry leaders provide specialized expertise, business insights, and strategic guidance across various domains including artificial intelligence, cybersecurity, enterprise technology, and business transformation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-6 bg-black/30 backdrop-blur-md border border-[#7021EE]/20 rounded-xl">
                <div className="flex items-center mb-4">
                  <Briefcase size={24} className="text-[#9b87f5] mr-3" />
                  <h3 className="text-xl font-bold">Strategic Direction</h3>
                </div>
                <p className="text-gray-300">
                  Our advisors help shape WhitegloveAI's strategic vision and growth strategy, identifying emerging trends and opportunities in the rapidly evolving AI landscape.
                </p>
              </div>
              <div className="p-6 bg-black/30 backdrop-blur-md border border-[#7021EE]/20 rounded-xl">
                <div className="flex items-center mb-4">
                  <Users size={24} className="text-[#9b87f5] mr-3" />
                  <h3 className="text-xl font-bold">Industry Expertise</h3>
                </div>
                <p className="text-gray-300">
                  With diverse backgrounds spanning financial services, healthcare, government, technology, and more, our advisors bring specialized knowledge to help us deliver industry-specific AI solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Advisors Grid */}
          <h2 className="text-3xl font-bold mb-8 text-center heading-highlight-scroll">Meet Our Advisors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {advisorData.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AdvisorCard
                  name={advisor.name}
                  title={advisor.title}
                  company={advisor.company}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </PageWrapper>
    </div>
  );
};

export default StrategicAdvisors;
