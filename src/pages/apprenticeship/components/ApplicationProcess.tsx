
import { motion } from 'framer-motion';

const steps = [
  {
    number: "1",
    title: "Submit your application"
  },
  {
    number: "2",
    title: "Initial screening"
  },
  {
    number: "3",
    title: "Technical assessment"
  },
  {
    number: "4",
    title: "Culture fit interview"
  },
  {
    number: "5",
    title: "Final team interview"
  }
];

const ApplicationProcess = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Application Process
          </h2>
        </motion.div>

        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-800 transform -translate-y-1/2 z-0"></div>
          <div className="flex justify-between relative z-10 max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-10 h-10 bg-[#7021EE] rounded flex items-center justify-center text-white font-bold text-lg mb-2">
                  {step.number}
                </div>
                <p className="text-gray-300 text-sm text-center max-w-[100px]">{step.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-300 text-lg">
            Don't miss this opportunity to jumpstart your career in AI. Apply today (below) and take the first step toward becoming a WhitegloveAI apprentice.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
