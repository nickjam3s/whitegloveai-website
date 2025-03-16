
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = [
  "Immersive learning through hands-on client projects",
  "One-on-one mentorship from industry veterans",
  "Fast-track opportunity for full-time roles after 3 months",
  "Modern hybrid work model that prioritizes flexibility",
  "Comprehensive training in latest AI technologies"
];

const ProgramFeatures = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          What Makes Our Program Unique
        </h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 bg-[#7021EE]/10 p-6 rounded-lg border border-[#7021EE]/20"
            >
              <CheckCircle2 className="h-6 w-6 text-[#7021EE] flex-shrink-0" />
              <p className="text-gray-300">{feature}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramFeatures;
