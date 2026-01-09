import { motion } from 'framer-motion';

const features = [
  "Hands-on experience with real client projects",
  "Direct mentorship from AI industry professionals",
  "Opportunity for full-time conversion based on performance",
  "Flexible hybrid work environment",
  "Exposure to cutting-edge AI technologies and tools",
  "Year-round program with flexible start dates"
];

const ProgramFeatures = () => {
  return (
    <section id="program-features" className="py-20 bg-black scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-white"
        >
          What Makes Our Internship Unique
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#7021EE]/10 p-6 rounded-lg border border-[#7021EE]/20"
            >
              <div className="w-4 h-4 bg-[#7021EE] mb-4"></div>
              <p className="text-gray-300">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramFeatures;
