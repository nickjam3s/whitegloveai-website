import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import PageWrapper from '@/components/layout/PageWrapper';
import HeroSection from "./internship/components/HeroSection";
import ProgramFeatures from "./internship/components/ProgramFeatures";
import CandidateProfile from "./internship/components/CandidateProfile";
import CareerProgression from "./internship/components/CareerProgression";
import WhyUs from "./internship/components/WhyUs";
import VisionSection from "./internship/components/VisionSection";
import ApplicationProcess from "./internship/components/ApplicationProcess";
import FAQSection from "./internship/components/FAQSection";
import ContactSection from "./internship/components/ContactSection";
import SEO from '@/components/SEO';
import '@/styles/animations.css';

const Internship = () => {
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

    document.querySelectorAll('.heading-highlight-scroll').forEach(heading => {
      observer.observe(heading);
    });

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
        title="AI Internship Program | Launch Your AI Career"
        description="Join WhitegloveAI's internship program. Gain hands-on AI experience, mentorship, and career opportunities in enterprise AI."
        canonicalPath="/about-us/internship"
      />
      <HeroSection />

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

export default Internship;
