
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl font-semibold mb-6">About WhitegloveAI</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering excellence in AI integration through personalized service and expert guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-up">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At WhitegloveAI, we focus on making AI adoption simple and successful. Our mission is to guide organizations through the complexities of AI integration while maintaining the highest standards of security and ethical practices.
              </p>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />
                    <div>
                      <h3 className="font-medium">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Company Overview</h2>
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600">Guided by experience, driven by innovation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="p-6 bg-background rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-sm text-gray-500">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Join Our Journey</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to experience the future of AI integration? Connect with our team to learn more about how we can help transform your organization.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

const values = [
  {
    title: "Excellence in Service",
    description: "We provide white-glove service in every interaction, ensuring our clients receive the highest level of attention and support.",
  },
  {
    title: "Security First",
    description: "We prioritize the security and privacy of our clients' data through robust protocols and continuous monitoring.",
  },
  {
    title: "Ethical AI",
    description: "We commit to responsible AI development and deployment, ensuring transparency and fairness in all our solutions.",
  },
  {
    title: "Innovation",
    description: "We stay at the forefront of AI technology, constantly evolving our solutions to meet emerging challenges.",
  },
];

const stats = [
  {
    value: "100+",
    label: "Enterprise Clients",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
  {
    value: "5★",
    label: "Average Rating",
  },
];

const team = [
  {
    name: "Nick James",
    role: "CEO & Founder",
    description: "Leading innovation in AI integration with over 15 years of enterprise technology experience.",
  },
  {
    name: "Daniel Valencia",
    role: "Chief Information Security Officer",
    description: "Expert in cybersecurity and compliance with a focus on AI systems protection.",
  },
  {
    name: "Ankur Desai",
    role: "Chief Marketing Officer",
    description: "Driving strategic growth and market presence through innovative marketing approaches.",
  },
  {
    name: "Dr. Donnie Wendt",
    role: "Virtual Chief AI Officer",
    description: "Specializing in AI strategy and implementation for enterprise solutions.",
  },
  {
    name: "Jason Hess",
    role: "Virtual Chief AI Officer",
    description: "Expert in AI transformation and organizational change management.",
  },
  {
    name: "Albert Ramos Jr.",
    role: "Virtual Chief AI Officer",
    description: "Leading AI innovation and strategic implementation for enterprise clients.",
  },
];

export default About;
