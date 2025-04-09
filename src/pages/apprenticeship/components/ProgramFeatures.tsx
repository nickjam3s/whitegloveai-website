import { motion } from 'framer-motion';

const features = [
  "Immersive learning through hands-on client projects",
  "One-on-one mentorship from industry veterans",
  "Fast-track opportunity for full-time roles after 3 months",
  "Modern hybrid work model that prioritizes flexibility",
  "Comprehensive training in latest AI technologies"
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
          What Makes Our Program Unique
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
