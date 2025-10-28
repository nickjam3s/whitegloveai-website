
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface BeliefProps {
  number: number;
  title: string;
  description: string;
}

const Belief: React.FC<BeliefProps> = ({ number, title, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div 
      ref={ref}
      className="mb-6" 
    >
      <div className="flex items-start gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: number * 0.1 }}
          className="text-5xl md:text-6xl font-bold text-[#7021EE]/80"
        >
          {number}
        </motion.div>
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: number * 0.1 + 0.1 }}
            className="text-xl font-bold mb-2 text-white"
          >
            {title}:
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: number * 0.1 + 0.2 }}
            className="text-gray-300 text-sm"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

const CoreBeliefs: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const beliefs = [
    {
      number: 1,
      title: "AI as a Collaborative Force",
      description: "We see AI as a collaborative partner to human effort, enhancing our creativity and problem-solving capabilities."
    },
    {
      number: 2,
      title: "Responsible Innovation",
      description: "Ethical considerations and responsible innovation are at the heart of our AI initiatives."
    },
    {
      number: 3,
      title: "Security and Trust",
      description: "We prioritize the security of AI systems as essential to protecting data and preserving privacy."
    },
    {
      number: 4,
      title: "Empowerment Through Education",
      description: "We invest in educating our employees about the benefits and challenges of AI."
    },
    {
      number: 5,
      title: "Adaptive Growth",
      description: "Our philosophy embraces a forward-looking mindset, ensuring that our strategies evolve with technological advancements."
    },
    {
      number: 6,
      title: "Strategic Integration",
      description: "We advocate for strategic integration of AI, ensuring that every implementation adds tangible value."
    },
    {
      number: 7,
      title: "Universal Accessibility",
      description: "We strive to democratize AI, making its benefits accessible across all levels of our organization."
    },
    {
      number: 8,
      title: "Customer-Centricity",
      description: "Our AI solutions are designed with the customer in mind, delivering exceptional experiences."
    },
    {
      number: 9,
      title: "Cross-Disciplinary Approach",
      description: "Our interdisciplinary approach draws from diverse expertise to innovate and solve complex problems."
    },
    {
      number: 10,
      title: "Unified Framework",
      description: "Our AI-AMF framework provides a structured pathway for AI integration and measurable business outcomes."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-10"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Our <span className="text-[#7021EE]">Core Beliefs</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-x-8">
          {beliefs.map((belief) => (
            <Belief
              key={belief.number}
              number={belief.number}
              title={belief.title}
              description={belief.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreBeliefs;
