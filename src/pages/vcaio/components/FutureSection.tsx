
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FutureSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 heading-highlight-scroll">The Future of AI Leadership</h2>
        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          <p className="text-gray-400">
            AI is transforming industries at an unprecedented pace, and staying ahead of the curve is essential for business growth.
          </p>
          <p className="text-gray-400">
            Our vCAIO service provides a flexible and cost-effective way to access the expert AI leadership you need to thrive.
          </p>
          <p className="text-gray-400">
            Partner with WhiteGloveAI to unlock the power of AI and secure your organization's future.
          </p>
        </div>
        <div className="w-full max-w-3xl mx-auto mt-12 bg-card/60 backdrop-blur-sm rounded-xl border border-gray-800 p-8">
          <h3 className="text-2xl font-semibold mb-6">Ready to Transform Your AI Strategy?</h3>
          <div className="mb-6">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700">
              <Link to="/contact">
                <span className="flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2" />
                </span>
              </Link>
            </Button>
          </div>
          <iframe
            src="https://jzaxt350p9j.typeform.com/to/jiKH5Ab2?typeform-medium=embed-oembed"
            allow="camera; microphone; autoplay; encrypted-media;"
            className="w-full aspect-[3/2] border-0 rounded-lg"
            title="vCAIO Contact Form"
          />
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
