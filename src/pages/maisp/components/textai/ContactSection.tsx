
import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-card w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-center heading-highlight-scroll">
            Contact Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Ready to transform your customer service with TextAI? 
            Our team is here to help you implement the perfect solution.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:info@whitegloveai.com" 
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </a>
            <Button className="px-6 py-6 flex items-center gap-2">
              Schedule a Demo
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-16">
            <div data-tf-live="01JMAMXNY7NHGYM2YQDXCDRDW6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
