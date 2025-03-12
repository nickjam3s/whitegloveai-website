import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold mb-6 heading-highlight-scroll">
          Experience the Future of Business Operations
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Experience the future of business operations with AutomateAI. Visit Lucidis.ai to learn more about how our AI-powered solutions can transform your organization.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="group" asChild>
            <a href="#contact" className="inline-flex items-center">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
