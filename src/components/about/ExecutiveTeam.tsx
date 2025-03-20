
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

  // Executives in a grid without Binni Skariah and Kenneth Knapp
  const executives = [
    // First row
    {
      name: "Nick James",
      title: "Founder & CEO",
      image: "/lovable-uploads/12a890f3-210e-4059-8cbc-6647b5effb9a.png"
    },
    {
      name: "Jason Hess",
      title: "CTO & vCAIO",
      image: "/lovable-uploads/5cbfcfd0-e713-43d1-9e25-c1d4a1e33007.png",
      imagePosition: "object-top" // Keeping image position to adjust for Jason's head
    },
    {
      name: "Albert Ramos",
      title: "vCAIO",
      image: "/lovable-uploads/5fe7ee0d-30ab-40a0-aaba-118ec81ae989.png"
    },
    {
      name: "Tobalo Torress",
      title: "VP of AI Labs",
      image: "/lovable-uploads/9dbaee7c-d928-4958-92dd-4dd39b8923bc.png"
    },
    // Second row (reduced by 2 executives)
    {
      name: "Dr. Donnie Wendt",
      title: "vCAIO",
      image: "/lovable-uploads/b660279c-7698-487d-b20e-3a04479508d4.png"
    },
    {
      name: "Daniel Valencia",
      title: "CISO",
      image: "/lovable-uploads/15e1ef3c-8f52-4735-b48e-159dea83470c.png"
    },
    {
      name: "Ankur Desai",
      title: "CMO",
      image: "/lovable-uploads/980b7b84-6ac2-4825-a061-cf071a14cf9e.png"
    },
    {
      name: "Rhea Kaithal",
      title: "AI Developer",
      image: "/lovable-uploads/b0e7ff9d-6be0-4ad6-969e-ffdc16b04f42.png"
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

      {/* Executive grid with removed members */}
      <motion.div 
        variants={containerAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
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
