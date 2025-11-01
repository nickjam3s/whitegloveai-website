import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import PageWrapper from '@/components/layout/PageWrapper';
import ScrollAnimation from '@/components/animations/ScrollAnimation';
import HeroSection from "./apprenticeship/components/HeroSection";
import ProgramFeatures from "./apprenticeship/components/ProgramFeatures";
import CandidateProfile from "./apprenticeship/components/CandidateProfile";
import CareerProgression from "./apprenticeship/components/CareerProgression";
import WhyUs from "./apprenticeship/components/WhyUs";
import VisionSection from "./apprenticeship/components/VisionSection";
import ApplicationProcess from "./apprenticeship/components/ApplicationProcess";
import FAQSection from "./apprenticeship/components/FAQSection";
import ContactSection from "./apprenticeship/components/ContactSection";
import SEO from '@/components/SEO';
import '@/styles/animations.css';

const Apprenticeship = () => {
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

    // Observe headings
    document.querySelectorAll('.heading-highlight-scroll').forEach(heading => {
      observer.observe(heading);
    });

    // Observe animated sections
    const animateSections = document.querySelectorAll('.animate-section, .animate-on-scroll');
    animateSections.forEach(section => {
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
      <SEO
        title="AI Apprenticeship Program | Launch Your AI Career"
        description="Join WhitegloveAI's apprenticeship program. Gain hands-on AI experience, mentorship, and career opportunities in enterprise AI."
        canonicalPath="/about-us/apprenticeship"
      />
      <section className="relative h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/20 to-black/90">
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>

        <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
          <HeroSection />
        </div>
      </section>

      <PageWrapper>
        <motion.section
          id="why-us"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="scroll-mt-20"
        >
          <WhyUs />
        </motion.section>

        <motion.section
          id="program-features"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 scroll-mt-20"
        >
          <ProgramFeatures />
        </motion.section>

        <motion.section
          id="career-progression"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 scroll-mt-20"
        >
          <CareerProgression />
        </motion.section>

        <motion.section
          id="vision"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 scroll-mt-20"
        >
          <VisionSection />
        </motion.section>

        <motion.section
          id="candidate-profile"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 scroll-mt-20"
        >
          <CandidateProfile />
        </motion.section>

        <motion.section
          id="application-process"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 scroll-mt-20"
        >
          <ApplicationProcess />
        </motion.section>

        <motion.section
          id="faq"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 scroll-mt-20"
        >
          <FAQSection />
        </motion.section>
      </PageWrapper>
      
      <ContactSection />
    </div>
  );
};

export default Apprenticeship;