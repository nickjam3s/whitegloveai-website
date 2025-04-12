import React from 'react';
import { motion } from "framer-motion";
import PageWrapper from '@/components/layout/PageWrapper';
import { Card } from '@/components/ui/card';
import { useIsMobile } from "@/hooks/use-mobile";
import { Briefcase, Users } from 'lucide-react';
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import HeroSection from './advisors/heroSection';

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
  return (
    <PageWrapper>
      <div className="min-h-screen bg-black text-white font-sans font-sora overflow-x-hidden">
        <section className="relative h-[100vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
            <div className="absolute inset-0 backdrop-blur-sm" />
          </div>

          <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
            <HeroSection />
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
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