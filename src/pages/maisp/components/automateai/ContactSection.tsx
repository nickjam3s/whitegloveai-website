
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Contact Us
        </h2>
        
        {/* Ensure the Typeform element is rendered and script loaded */}
        <div data-tf-live="01JMAMXNY7NHGYM2YQDXCDRDW6" className="min-h-[400px]">
          {/* Fallback in case Typeform doesn't load */}
          <div className="text-center p-8">
            <p className="mb-6 text-gray-400">If the form doesn't load, please click the button below:</p>
            <Button 
              onClick={() => window.open('https://whitegloveai.com/contact', '_blank')}
              className="px-8 py-4"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
