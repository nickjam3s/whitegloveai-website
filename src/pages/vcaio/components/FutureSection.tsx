
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FutureSection = () => {
  return (
    <section className="py-24 bg-card">
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
        <Link to="/contact">
          <Button size="lg" className="text-lg px-8 py-6">
            Get Started Today <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FutureSection;
