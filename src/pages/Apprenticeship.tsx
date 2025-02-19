
import { ArrowRight, CheckCircle2, GraduationCap, Users, Brain, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const Apprenticeship = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Transform Your Career in AI with WhitegloveAI</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Our exclusive 6-month apprenticeship program offers an unparalleled opportunity to master cutting-edge AI technology while working on real-world solutions.
          </p>
          <Button size="lg" variant="secondary">
            Apply Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">What Makes Our Program Unique</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programFeatures.map((feature, index) => (
              <div key={index} className="flex items-start bg-background p-6 rounded-lg border border-gray-800">
                <CheckCircle2 className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-400">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Profile */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Ideal Candidate Profile</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {candidateProfile.map((requirement, index) => (
              <div key={index} className="flex items-start bg-card p-6 rounded-lg border border-gray-800">
                <CheckCircle2 className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-400">{requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Progression */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Your Career Progression</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerSteps.map((step, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-gray-800">
                <step.icon className="h-10 w-10 text-secondary mb-4" />
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Why Choose WhitegloveAI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-gray-800">
                <p className="text-gray-400">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Application Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-gray-800 text-center">
                <p className="text-gray-400">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Apply Now</h2>
          <p className="text-gray-400 mb-8">
            Don't miss this opportunity to jumpstart your career in AI.
          </p>
          <div className="max-w-3xl mx-auto">
            <div data-tf-live="01JMG0VZKDB3FJJAD0TEGB04ZT"></div>
          </div>
          <script async src="https://embed.typeform.com/next/embed.js"></script>
        </div>
      </section>
    </div>
  );
};

const programFeatures = [
  "Immersive learning through hands-on client projects",
  "One-on-one mentorship from industry veterans",
  "Fast-track opportunity for full-time roles after 3 months",
  "Modern hybrid work model that prioritizes flexibility",
  "Comprehensive training in latest AI technologies"
];

const candidateProfile = [
  "Demonstrated passion for artificial intelligence",
  "Strong analytical and problem-solving abilities",
  "Excellent communication and teamwork skills",
  "Self-starter mentality with proven work ethic",
  "Cultural fit with our innovative environment",
  "Full-time availability required",
  "Must be US-based (no visa sponsorship)",
  "Degree in Data Science or AI, or related field"
];

const careerSteps = [
  {
    icon: GraduationCap,
    description: "Begin with 6-month foundational apprenticeship (unpaid)"
  },
  {
    icon: Target,
    description: "Comprehensive performance review at 3-month mark"
  },
  {
    icon: Users,
    description: "Opportunity for paid positions based on performance"
  },
  {
    icon: Brain,
    description: "Leadership track for exceptional performers"
  }
];

const reasons = [
  "Work with cutting-edge AI technologies",
  "Solve real business challenges",
  "Learn from industry leaders",
  "Build a powerful professional network",
  "Shape the future of AI implementation"
];

const applicationSteps = [
  "Submit your application",
  "Initial screening",
  "Technical assessment",
  "Culture fit interview",
  "Final team interview"
];

export default Apprenticeship;
