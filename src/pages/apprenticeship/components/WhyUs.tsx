
import { motion } from 'framer-motion';

const benefits = [
  "Work with cutting-edge AI technologies",
  "Solve real business challenges",
  "Learn from industry leaders",
  "Build a powerful professional network",
  "Shape the future of AI implementation"
];

const WhyUs = () => {
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
            Why Choose WhitegloveAI
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {benefits.slice(0, 3).map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#7021EE] p-6 rounded-lg"
            >
              <p className="text-white font-medium">{benefit}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {benefits.slice(3).map((benefit, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 3) * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#7021EE] p-6 rounded-lg"
            >
              <p className="text-white font-medium">{benefit}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-lg">
            Transform your career trajectory and join a team that's revolutionizing how businesses leverage AI technology. 
            Apply now to become part of WhitegloveAI's next generation of AI leaders.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
