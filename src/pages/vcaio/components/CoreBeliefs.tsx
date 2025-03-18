
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
      className="mb-8" // Reduced from mb-10 to mb-8
    >
      <div className="flex items-start gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: number * 0.1 }}
          className="text-6xl md:text-7xl font-bold text-[#7021EE]/80"
        >
          {number}
        </motion.div>
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: number * 0.1 + 0.1 }}
            className="text-2xl font-bold mb-2 text-white"
          >
            {title}:
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: number * 0.1 + 0.2 }}
            className="text-gray-300"
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
      description: "We see AI as a collaborative partner to human effort, enhancing our creativity and problem-solving capabilities. Our goal is to integrate AI seamlessly into the workflow, augmenting the skills and strengths of our workforce."
    },
    {
      number: 2,
      title: "Responsible Innovation",
      description: "Ethical considerations and responsible innovation are at the heart of our AI initiatives. We are committed to developing and deploying AI solutions that uphold the highest standards of fairness, accountability, and transparency."
    },
    {
      number: 3,
      title: "Security and Trust",
      description: "We believe that trust is the cornerstone of any successful AI strategy. Our approach prioritizes the security of AI systems as essential to protecting data, preserving privacy, and maintaining the integrity of our operations."
    },
    {
      number: 4,
      title: "Empowerment Through Education",
      description: "AI adoption requires a well-informed team. We invest in educating our employees about the benefits and challenges of AI, fostering a culture of knowledge-sharing and continuous learning."
    },
    {
      number: 5,
      title: "Adaptive Growth",
      description: "Technology evolves rapidly; so do we. Our philosophy embraces a forward-looking mindset, ensuring that our strategies and services are adaptable and evolve with technological advancements."
    },
    {
      number: 6,
      title: "Strategic Integration",
      description: "AI should align with and further business objectives. We advocate for strategic integration of AI, ensuring that every implementation is purpose-driven and adds tangible value."
    },
    {
      number: 7,
      title: "Universal Accessibility",
      description: "We strive to democratize AI, making its benefits accessible across all levels of our organization. Every employee, regardless of role or expertise, should be empowered to leverage AI in their work."
    },
    {
      number: 8,
      title: "Customer-Centricity",
      description: "Our AI solutions are designed with the customer in mind. By understanding and anticipating customer needs, we leverage AI to deliver exceptional experiences and services."
    },
    {
      number: 9,
      title: "Cross-Disciplinary Approach",
      description: "We recognize that the true power of AI lies in its ability to fuse insights from various fields. Our interdisciplinary approach draws from diverse expertise to innovate and solve complex problems."
    },
    {
      number: 10,
      title: "Unified Framework",
      description: "Our AI Adoption and Management Framework (AI-AMF) embodies our philosophy by providing a structured pathway for AI integration. It guides and supports organizations through every step, from conceptualization to achieving measurable business outcomes."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-10" // Reduced from py-16 to py-10
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-8" // Reduced from mb-12 to mb-8
        >
          Our <span className="text-[#7021EE]">Core Beliefs</span>
        </motion.h2>
        <div>
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
