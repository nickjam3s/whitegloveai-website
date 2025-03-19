
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useEffect } from 'react';

const ApplicationForm = () => {
  useEffect(() => {
    // Ensure Typeform script is loaded
    const existingScript = document.getElementById('typeform-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'typeform-script';
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        if (document.getElementById('typeform-script')) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

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
                  <h3 className="text-xl font-bold text-white mb-2">Apply to WhitegloveAI Apprenticeship</h3>
                  <p className="text-gray-400">Fill out our application form to get started</p>
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
                    <h4 className="text-white text-sm font-medium">WhitegloveAI Apprenticeship Application</h4>
                  </div>
                  
                  <div className="mt-4">
                    <div data-tf-widget="01JMAMXNY7NHGYM2YQDXCDRDW6" data-tf-inline-on-mobile data-tf-medium="snippet" data-tf-hidden="utm_source=website,utm_medium=snippet"></div>
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
            <Button size="lg" className="bg-[#7021EE] hover:bg-[#7021EE]/90 flex items-center justify-center">
              <span className="flex items-center justify-center">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
