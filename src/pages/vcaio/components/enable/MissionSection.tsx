
import { Rocket } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Rocket className="h-12 w-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-semibold mb-8 heading-highlight-scroll">Our Mission</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            To enable secure, responsible, and impactful AI adoption, empowering organizations to unlock the full potential of generative AI while maintaining enterprise-grade security and compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
