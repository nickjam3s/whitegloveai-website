
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl font-bold mb-6">About WhitegloveAI</h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We deliver excellence in AI integration through personalized service and expert guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-400">
                  To lead secure and responsible AI adoption, reshaping organizational efficiency and digital transformations
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Core Values</h2>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <div>
                        <h3 className="font-bold text-lg">{value.title}</h3>
                        <p className="text-gray-400">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-8">Company Overview</h2>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <p className="text-3xl font-bold mb-2">{stat.value}</p>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Leadership */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-400">Guided by experience, driven by innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary mb-4">{member.role}</p>
                <p className="text-gray-400">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your AI Strategy?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Connect with our expert team to discover how WhitegloveAI can guide your organization's AI journey.
          </p>
          <Link to="/contact">
            <Button size="lg">
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
    title: "Client-First Approach",
    description: "Every decision is made with our clients' success and satisfaction in mind.",
  },
  {
    title: "Security & Trust",
    description: "We prioritize data security and maintain the highest standards of trust in every interaction.",
  },
  {
    title: "Innovation Leadership",
    description: "We stay at the forefront of AI technology to deliver cutting-edge solutions.",
  },
  {
    title: "Ethical AI Practice",
    description: "We ensure responsible AI development and deployment with transparency and fairness.",
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
  {
    name: "Ankur Desai",
    role: "Chief Marketing Officer",
    description: "Driving strategic growth and market presence through innovative marketing approaches.",
  },
];

export default About;
