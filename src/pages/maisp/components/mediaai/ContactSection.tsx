
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#9b87f5]/10 to-transparent border border-[#9b87f5]/20 rounded-xl p-10 max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Podcasting Journey Today</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with our team to learn how our podcasting services can elevate your content strategy and help you reach your audience effectively.
          </p>
        </motion.div>
        
        <div data-tf-live="01JMAMXNY7NHGYM2YQDXCDRDW6"></div>
      </div>
    </section>
  );
};

export default ContactSection;
