
import React from 'react';
import { motion } from 'framer-motion';
import ExecutiveProfile from './ExecutiveProfile';

const ExecutiveTeam: React.FC = () => {
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // First row executives
  const topRowExecutives = [
    {
      name: "Nick James",
      title: "Chief Executive Officer",
      secondaryTitle: "& Chief AI Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Jade Skariah",
      title: "Chief of Staff",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Jeffrey Bankard",
      title: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Peter Santis",
      title: "Chief Revenue Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      linkedin: "https://linkedin.com"
    }
  ];

  // Second row executives
  const bottomRowExecutives = [
    {
      name: "Hena Venugopal",
      title: "Chief Product Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Daniel Valencia",
      title: "Chief Information Security Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Ankur Desai",
      title: "Chief Marketing Officer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Binni Skariah",
      title: "Chief Executive Officer",
      secondaryTitle: "in Residence of Lucidis.Ai",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      linkedin: "https://linkedin.com"
    }
  ];

  return (
    <section className="pt-16 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#7021EE]">Meet the Executive Team</h2>
        <p className="text-xl text-gray-300 max-w-3xl">
          Our leadership team brings decades of experience in AI innovation, enterprise transformation, 
          and technology excellence to help organizations thrive in the digital era.
        </p>
      </motion.div>

      {/* Top row executives */}
      <motion.div 
        variants={containerAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
      >
        {topRowExecutives.map((executive, index) => (
          <motion.div key={index} variants={itemAnimation}>
            <ExecutiveProfile {...executive} />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom row executives */}
      <motion.div 
        variants={containerAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {bottomRowExecutives.map((executive, index) => (
          <motion.div key={index} variants={itemAnimation}>
            <ExecutiveProfile {...executive} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExecutiveTeam;
