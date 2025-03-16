
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const TuitionSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Investment in Your Future
          </h2>
          <div className="bg-[#7021EE]/10 p-8 rounded-lg border border-[#7021EE]/20">
            <h3 className="text-2xl font-bold mb-4 text-white">No Upfront Tuition</h3>
            <p className="text-xl text-gray-300 mb-6">
              We believe in investing in talented individuals. Our apprenticeship program is offered at no upfront cost, 
              with the opportunity to earn while you learn through project work.
            </p>
            <Button size="lg" className="bg-[#7021EE] hover:bg-[#7021EE]/90">
              Learn More About Funding
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TuitionSection;
