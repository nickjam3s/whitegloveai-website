
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ApplicationForm = () => {
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
            Application
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111] rounded-lg overflow-hidden border border-[#333]"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 flex items-center justify-center border-r border-[#333]">
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-white mb-2">Typeform</h3>
                </div>
              </div>
              <div className="p-8 bg-[#0F0F0F]">
                <div>
                  <div className="flex items-start mb-2">
                    <div className="bg-[#222] rounded p-1 mr-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="4" fill="#222"/>
                        <path d="M7 7h10v10H7z" fill="#fff"/>
                      </svg>
                    </div>
                    <h4 className="text-white text-sm font-medium">WGAI - AvatarAI Website Contact Form</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Turn data collection into an experience with Typeform. Create beautiful online forms, surveys, quizzes, and so much more. Try it for FREE.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <a href="#" className="text-[#7021EE] hover:text-[#9b87f5] inline-flex items-center">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span className="text-sm">Open form</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't miss this opportunity to jumpstart your career in AI. Apply today and take the first step toward becoming a WhitegloveAI apprentice.
            </p>
            <Button size="lg" className="bg-[#7021EE] hover:bg-[#7021EE]/90">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
