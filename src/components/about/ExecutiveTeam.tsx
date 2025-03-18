
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

  // First row executives with updated images
  const topRowExecutives = [
    {
      name: "Nick James",
      title: "Chief Executive Officer",
      secondaryTitle: "& Chief AI Officer",
      image: "/lovable-uploads/09629b88-ce65-4e5b-b223-f80df036229b.png",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Jade Skariah",
      title: "Chief of Staff",
      image: "/lovable-uploads/76017f57-7d97-4d16-bda6-8b044af1fb67.png",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Jeffrey Bankard",
      title: "Chief Operations Officer",
      image: "/lovable-uploads/48dc0aa9-6670-48ee-bf78-17fd3db050c2.png",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Peter Santis",
      title: "Chief Revenue Officer",
      image: "/lovable-uploads/207a70e3-956b-44a6-b40a-c068e899c8b9.png",
      linkedin: "https://linkedin.com"
    }
  ];

  // Second row executives
  const bottomRowExecutives = [
    {
      name: "Hena Venugopal",
      title: "Chief Product Officer",
      image: "/lovable-uploads/197ddc10-c159-4f39-a269-e35142af32c5.png", 
      linkedin: "https://linkedin.com"
    },
    {
      name: "Daniel Valencia",
      title: "Chief Information Security Officer",
      image: "/lovable-uploads/4647222e-2cb8-4c83-a56c-fafa2c6b70a0.png",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Ankur Desai",
      title: "Chief Marketing Officer",
      image: "/lovable-uploads/8d6b7902-56b6-4ba7-86ba-67aa9f3bccb8.png",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Binni Skariah",
      title: "Chief Executive Officer",
      secondaryTitle: "in Residence of Lucidis.Ai",
      image: "/lovable-uploads/cbc85045-41f1-434b-a70d-69aca08e4e66.png",
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
