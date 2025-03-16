
import { motion } from 'framer-motion';
import { ChartBar } from 'lucide-react';

const stages = [
  {
    title: "Month 1-2",
    description: "Foundation training and initial project exposure"
  },
  {
    title: "Month 3-4",
    description: "Direct client project involvement and specialized training"
  },
  {
    title: "Month 5-6",
    description: "Lead project responsibilities and career path selection"
  },
  {
    title: "Beyond",
    description: "Full-time opportunities and leadership roles"
  }
];

const CareerProgression = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Your Career Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A clear path to success in AI technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#7021EE]/10 p-6 rounded-lg border border-[#7021EE]/20"
            >
              <ChartBar className="h-12 w-12 text-[#7021EE] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">{stage.title}</h3>
              <p className="text-gray-300">{stage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerProgression;
