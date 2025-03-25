import { motion } from 'framer-motion';

const VisionSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Vision for AI Talent
            </h2>
            <div className="bg-[#7021EE]/10 p-6 rounded-lg border-l-4 border-[#7021EE] mb-6">
              <p className="text-gray-300 text-lg italic">
                "At WhitegloveAI, we believe in nurturing talent that will drive the next generation of AI innovation. Our apprentices are selected not just for their technical potential, but for their vision and dedication to excellence in everything they do."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;