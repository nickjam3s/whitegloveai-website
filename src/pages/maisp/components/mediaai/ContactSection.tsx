
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
          className="bg-gradient-to-br from-[#9b87f5]/10 to-transparent border border-[#9b87f5]/20 rounded-xl p-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Podcasting Journey Today</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with our team to learn how our podcasting services can elevate your content strategy and help you reach your audience effectively.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 bg-[#9b87f5] hover:bg-[#9b87f5]/90 hover:shadow-[0_0_15px_rgba(155,135,245,0.4)] transition-all duration-300">
            Schedule a Consultation <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
            Contact Us
          </h2>
          <div data-tf-live="01JMAMXNY7NHGYM2YQDXCDRDW6"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
