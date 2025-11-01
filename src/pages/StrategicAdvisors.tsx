
import React from 'react';
import { motion } from "framer-motion";
import PageWrapper from '@/components/layout/PageWrapper';
import { Card } from '@/components/ui/card';
import { useIsMobile } from "@/hooks/use-mobile";
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import HeroSection from './advisors/heroSection';
import SEO from '@/components/SEO';

interface AdvisorProps {
  name: string;
  title: string;
  company: string;
}

const advisorData: AdvisorProps[] = [
  { name: 'Prakash Adi', title: 'CEO', company: 'Stealth Mode' },
  { name: 'Bindu Chowritmootoo', title: 'CEO', company: 'Manifest with Bindu' },
  { name: 'Josh Hernandez', title: 'President', company: 'Innuvis' },
  { name: 'Reggie Hillard', title: 'CEO', company: 'TeleTechTX' },
  { name: 'Young Han', title: 'Partner', company: 'Forever Young Agency' },
  { name: 'Ken Huang', title: 'CEO & CAIO', company: 'DistributedApps.ai' },
  { name: 'Steven Kazan', title: 'CEO', company: 'Inner Onion' },
  { name: 'Lloyd Nelson', title: 'Vice President', company: 'Lockton Dunning' },
  { name: 'Rodriguez Richard', title: 'CEO', company: 'ClearSync' },
  { name: 'Michelle Rider', title: 'CMO', company: 'Endeavor Management' },
  { name: 'Jill Stelfox', title: 'CEO', company: 'FounderGro' },
  { name: 'Ichan Stall', title: 'Partner', company: 'Forever Young Agency' },
  { name: 'Tim Tatarowicz', title: 'Co-Founder', company: 'Phoenix Power Supply' },
  { name: 'Rick Thompson', title: 'Head of McKinney', company: 'Plug and Play' },
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
  return (
    <PageWrapper>
      <div className="min-h-screen bg-black text-white font-sans font-sora overflow-x-hidden">
        <SEO
          title="Strategic Advisors | WhitegloveAI Leadership"
          description="Meet the strategic advisors guiding WhitegloveAI's vision. Industry leaders bringing decades of expertise across AI and business."
          canonicalPath="/aboutus/strategic-advisors"
        />
        {/* Make hero section go edge-to-edge */}
        <section className="relative w-full h-[100vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
            <div className="absolute inset-0 backdrop-blur-sm" />
          </div>
          <div className="w-full flex flex-col items-center justify-center relative z-10">
            <HeroSection />
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">Our Strategic Advisors</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                WhitegloveAI's Strategic Advisors bring decades of expertise across various industries, helping guide our company's vision and strategic direction. Their leadership and insights enable us to stay at the forefront of AI innovation while delivering exceptional value to our clients.
              </p>
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
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default StrategicAdvisors;
