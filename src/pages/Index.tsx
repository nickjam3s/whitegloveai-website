
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Premium AI Solutions with
              <br />
              White Glove Service
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We deliver exceptional artificial intelligence solutions with
              unparalleled attention to detail and personalized service.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-semibold mb-4">Why Choose White Glove AI</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge AI technology with exceptional service to deliver
              solutions that drive your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-up">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "Personalized Service",
    description:
      "Experience AI solutions tailored to your specific needs with our white-glove approach to service.",
  },
  {
    title: "Cutting-edge Technology",
    description:
      "Stay ahead with our state-of-the-art AI technologies and innovative solutions.",
  },
  {
    title: "Expert Support",
    description:
      "Get dedicated support from our team of AI experts throughout your journey.",
  },
];

export default Index;
