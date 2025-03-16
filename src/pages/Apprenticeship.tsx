
import { useEffect } from "react";
import HeroSection from "./apprenticeship/components/HeroSection";
import ProgramFeatures from "./apprenticeship/components/ProgramFeatures";
import CandidateProfile from "./apprenticeship/components/CandidateProfile";
import { motion } from "framer-motion";
import { GraduationCap, Users, Brain, Target, ChartBar } from "lucide-react";

const Apprenticeship = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <ProgramFeatures />
      <CandidateProfile />
      
      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Our Vision for AI Talent
            </h2>
            <p className="text-xl text-gray-300">
              "At WhitegloveAI, we believe in nurturing talent that will drive the next generation of AI innovation. 
              Our apprentices are selected not just for their technical potential, but for their vision and dedication 
              to excellence in everything they do."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career Progression */}
      <section className="py-20 bg-[#7021EE]/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            Your Career Progression
          </h2>
          <div className="max-w-3xl mx-auto">
            {[
              "Begin with 6-month foundational apprenticeship (unpaid)",
              "Comprehensive performance review at 3-month mark",
              "Opportunity for paid positions based on performance",
              "Ongoing professional development and advancement",
              "Leadership track for exceptional performers"
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="bg-[#7021EE] text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-300">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Apply Now</h2>
          <p className="text-gray-300 mb-12">
            Don't miss this opportunity to jumpstart your career in AI.
          </p>
          <div className="max-w-3xl mx-auto">
            <div data-tf-live="01JMG0VZKDB3FJJAD0TEGB04ZT"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apprenticeship;
