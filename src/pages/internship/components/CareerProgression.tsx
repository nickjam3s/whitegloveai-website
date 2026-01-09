import { motion } from 'framer-motion';

const steps = [
  {
    number: "1",
    title: "Begin your internship program"
  },
  {
    number: "2",
    title: "Work on real AI projects with mentorship"
  },
  {
    number: "3",
    title: "Mid-internship performance review"
  },
  {
    number: "4",
    title: "Final project presentation"
  },
  {
    number: "5",
    title: "Full-time offer consideration for top performers"
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
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Your Internship Journey
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#7021EE] rounded flex items-center justify-center text-white font-bold text-lg">
                {step.number}
              </div>
              <p className="text-gray-300 text-lg">{step.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerProgression;
