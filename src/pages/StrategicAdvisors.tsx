
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
  { name: 'Michael Jones', title: 'President', company: 'B1 Bank' },
  { name: 'Paul Kanneman', title: 'Former CIO', company: 'Simmons Bank' },
  { name: 'Rehan Kauser', title: 'CEO and Founder', company: 'Agile Advantages' },
  { name: 'Steven Kazan', title: 'CEO', company: 'Inner Onion' },
  { name: 'Chris Lee', title: 'CIO', company: 'City of Lewisville' },
  { name: 'Lloyd Nelson', title: 'Vice President', company: 'Lockton Dunning' },
  { name: 'Tommy Perniciaro', title: 'Vice President', company: 'Halcyon' },
  { name: 'Randy Potts', title: 'CISO', company: 'Realtime Recovery' },
  { name: 'Sameer Ranjan', title: 'CEO', company: 'Catenate' },
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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans font-sora overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>

        <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7021EE]">
              Strategic Advisors
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Our strategic advisors bring decades of experience across various industries, providing invaluable guidance and expertise to shape the future of WhitegloveAI.
            </p>
          </motion.div>
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
