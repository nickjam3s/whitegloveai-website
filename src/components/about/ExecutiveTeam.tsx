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

  // Executives in a 5x2 grid
  const executives = [
    // First row
    {
      name: "Nick James",
      title: "Founder & CEO",
      image: "/lovable-uploads/12a890f3-210e-4059-8cbc-6647b5effb9a.png",
      linkedinUrl: "https://www.linkedin.com/in/nickjam3s/"
    },
    {
      name: "Jason Hess",
      title: "Chief Technology Officer & virtual Chief AI Officer",
      image: "/lovable-uploads/5cbfcfd0-e713-43d1-9e25-c1d4a1e33007.png",
      imagePosition: "object-top", // Keeping image position to adjust for Jason's head
      linkedinUrl: "https://www.linkedin.com/in/jasonhess/"
    },
    {
      name: "Binni Skariah",
      title: "Product Owner of Lucidis.AI",
      image: "/lovable-uploads/fceb5744-7f22-4174-ab60-aec65e9b5205.png",
      linkedinUrl: "https://www.linkedin.com/in/bskariah/"
    },
    {
      name: "Tobalo Torress",
      title: "VP of AI Labs", 
      image: "/lovable-uploads/9dbaee7c-d928-4958-92dd-4dd39b8923bc.png",
      linkedinUrl: "https://www.linkedin.com/in/tobalo/"
    },
    {
      name: "Albert Ramos",
      title: "virtual Chief AI Officer",
      image: "/lovable-uploads/5fe7ee0d-30ab-40a0-aaba-118ec81ae989.png",
      linkedinUrl: "https://www.linkedin.com/in/albertramosjr/"
    },
    
    // Second row
    {
      name: "Dr. Donnie Wendt",
      title: "virtual Chief AI Officer",
      image: "/lovable-uploads/b660279c-7698-487d-b20e-3a04479508d4.png",
      linkedinUrl: "https://www.linkedin.com/in/dr-donnie-wendt/"
    },
    {
      name: "Kenneth Knapp",
      title: "VP of Growth",
      image: "/lovable-uploads/c4b72a4e-5b61-46cb-8462-ac71114f9af3.png",
      linkedinUrl: "https://www.linkedin.com/in/yourcloudexperts/"
    },
    {
      name: "Daniel Valencia",
      title: "Chief Information Security Officer",
      image: "/lovable-uploads/15e1ef3c-8f52-4735-b48e-159dea83470c.png",
      linkedinUrl: "https://www.linkedin.com/in/daniel-valencia/"
    },
    {
      name: "Ankur Desai",
      title: "Chief Marketing Officer",
      image: "/lovable-uploads/980b7b84-6ac2-4825-a061-cf071a14cf9e.png",
      linkedinUrl: "https://www.linkedin.com/in/ankdes/"
    },
    
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

      {/* Executive grid with 5 columns */}
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
            className="executive-card executive-card-shadow col-span-1 hover:border-[#7021EE]/40 transition-all duration-300"
            whileHover={{ 
              boxShadow: "0 10px 25px -5px rgba(112, 33, 238, 0.3)"
            }}
          >
            <ExecutiveProfile {...executive} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExecutiveTeam;
