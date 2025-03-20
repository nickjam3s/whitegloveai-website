
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // All executives in a 5x2 grid
  const executives = [
    // First row (5 executives)
    {
      name: "Nick James",
      title: "Founder & CEO",
      image: "/lovable-uploads/12a890f3-210e-4059-8cbc-6647b5effb9a.png",
      linkedin: "https://www.linkedin.com/in/nickjam3s/"
    },
    {
      name: "Nick James",
      title: "Founder & CEO",
      image: "/lovable-uploads/5cbfcfd0-e713-43d1-9e25-c1d4a1e33007.png",
      linkedin: "https://www.linkedin.com/in/nickjam3s/"
    },
    {
      name: "Nick James",
      title: "Founder & CEO",
      image: "/lovable-uploads/5fe7ee0d-30ab-40a0-aaba-118ec81ae989.png",
      linkedin: "https://www.linkedin.com/in/nickjam3s/"
    },
    {
      name: "Nick James",
      title: "Founder & CEO",
      image: "/lovable-uploads/af73101a-e2b9-40b2-984d-d17644865d5a.png",
      linkedin: "https://www.linkedin.com/in/nickjam3s/"
    },
    {
      name: "Nick James",
      title: "Founder & CEO",
      image: "/lovable-uploads/9dbaee7c-d928-4958-92dd-4dd39b8923bc.png",
      linkedin: "https://www.linkedin.com/in/nickjam3s/"
    },
    // Second row (5 executives)
    {
      name: "Nick James",
      title: "Founder & CEO",
      image: "/lovable-uploads/76017f57-7d97-4d16-bda6-8b044af1fb67.png",
      linkedin: "https://www.linkedin.com/in/nickjam3s/"
    },
    {
      name: "Nick James",
      title: "Founder & CEO",
      image: "/lovable-uploads/207a70e3-956b-44a6-b40a-c068e899c8b9.png",
      linkedin: "https://www.linkedin.com/in/nickjam3s/"
    },
    {
      name: "Nick James",
      title: "Founder & CEO",
      image: "/lovable-uploads/d7b0052a-c6ed-455e-8426-7f7e9fb79d26.png", 
      linkedin: "https://www.linkedin.com/in/nickjam3s/"
    },
    {
      name: "Nick James",
      title: "Founder & CEO",
      image: "/lovable-uploads/cbc85045-41f1-434b-a70d-69aca08e4e66.png",
      linkedin: "https://www.linkedin.com/in/nickjam3s/"
    },
    {
      name: "Nick James",
      title: "Founder & CEO",
      image: "/lovable-uploads/e2aecc5a-30c7-4e28-8721-c6af1153d26e.png",
      linkedin: "https://www.linkedin.com/in/nickjam3s/"
    }
  ];

  return (
    <section className="pt-16 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#7021EE] font-sora">Meet the Executive Team</h2>
        <p className="text-xl text-gray-300 max-w-full font-sora mb-8">
          We are collective of highly experienced and passionate cybersecurity principal practitioners and executives who have come together to explore the promises
          <br />and address the risks that AI presents to humanity.
        </p>
      </motion.div>

      {/* All executives in a 5x2 grid */}
      <motion.div 
        variants={containerAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
      >
        {executives.map((executive, index) => (
          <motion.div 
            key={index} 
            variants={itemAnimation}
            className="executive-card-shadow col-span-1"
          >
            <ExecutiveProfile {...executive} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExecutiveTeam;
