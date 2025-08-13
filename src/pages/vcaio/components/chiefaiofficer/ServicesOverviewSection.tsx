import { ArrowRight, Rocket, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ServicesOverviewSection = () => {
  const services = [
    {
      icon: <Rocket className="h-8 w-8 text-secondary mb-4" />,
      title: "AI Launchpad Workshop",
      description: "Designed for organizations ready to embrace AI but unwilling to compromise security, accuracy, or compliance. We eliminate the fear and uncertainty holding teams back.",
      keyBenefits: [
        "Secure AI implementation strategy",
        "Risk mitigation planning", 
        "Team empowerment and training",
        "Tailored AI solutions roadmap"
      ],
      ctaText: "Learn More",
      ctaLink: "/vcaio/launch"
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary mb-4" />,
      title: "AI Adoption Service",
      description: "Seamlessly integrate artificial intelligence into your operations with our structured, step-by-step approach using our proven AI Adoption & Management Framework (AI-AMF).",
      keyBenefits: [
        "Structured AI integration process",
        "Business goal alignment",
        "Risk assessment and mitigation",
        "Measurable outcome tracking"
      ],
      ctaText: "Explore Adoption",
      ctaLink: "/vcaio/adopt"
    },
    {
      icon: <Zap className="h-8 w-8 text-secondary mb-4" />,
      title: "AI Enablement Service", 
      description: "Comprehensive solution designed to help organizations adopt and leverage Large Language Models (LLMs) like ChatGPT effectively and securely.",
      keyBenefits: [
        "LLM implementation guidance",
        "Security-first approach",
        "Compliance adherence",
        "Effective AI tool utilization"
      ],
      ctaText: "Get Enabled",
      ctaLink: "/vcaio/enable"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-highlight-scroll">
            Our AI Services Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the right service for your organization's AI journey. From initial workshops to full adoption and enablement, we provide comprehensive solutions at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/60 backdrop-blur-sm border-gray-800 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20 animate-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                {service.icon}
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3 text-white">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.keyBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button asChild className="w-full group">
                  <Link to={service.ctaLink} className="flex items-center justify-center">
                    {service.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 border border-secondary/20">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Not sure which service is right for you?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Our vCAIO experts can help you determine the best path forward based on your organization's current AI maturity level and strategic objectives.
            </p>
            <Button asChild size="lg">
              <Link to="/contact" className="inline-flex items-center">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;