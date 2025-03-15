
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with fixed background */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <AspectRatio ratio={16 / 9}>
            <div 
              className="w-full h-full bg-fixed"
              style={{
                backgroundImage: 'url("https://whitegloveai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-hero.06d9b7c6.jpg&w=3840&q=75")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.4
              }}
            />
          </AspectRatio>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-6xl font-bold mb-6 heading-highlight">Building the Future of AI</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At WhitegloveAI, we're not just building technology – we're crafting the future of secure, 
              responsible AI adoption for organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-300 text-lg">
                  To lead secure and responsible AI adoption, reshaping organizational efficiency and digital transformations
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Core Values</h2>
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-2 h-2 bg-[#7021EE] rounded-full mt-2" />
                      <div>
                        <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                        <p className="text-gray-300">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://whitegloveai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-values.776dff78.jpg&w=1920&q=75"
                alt="Our Values"
                className="rounded-lg shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Company Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold mb-2 text-[#7021EE]">{stat.value}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-300">Guided by experience, driven by innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-[#111111] p-8 rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-6 mx-auto object-cover"
                />
                <h3 className="text-2xl font-bold mb-2 text-center">{member.name}</h3>
                <p className="text-[#7021EE] mb-4 text-center font-medium">{member.role}</p>
                <p className="text-gray-300 text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your AI Strategy?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with our expert team to discover how WhitegloveAI can guide your organization's AI journey.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8 py-6">
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
    description: "Every decision is made with our clients' success and satisfaction in mind. We prioritize understanding and meeting their unique needs.",
  },
  {
    title: "Security & Trust",
    description: "We maintain the highest standards of data security and trust in every interaction, ensuring our clients' information is always protected.",
  },
  {
    title: "Innovation Leadership",
    description: "We stay at the forefront of AI technology, continuously innovating to deliver cutting-edge solutions that drive real business value.",
  },
  {
    title: "Ethical AI Practice",
    description: "We ensure responsible AI development and deployment, maintaining transparency and fairness in all our AI implementations.",
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
    image: "https://whitegloveai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnick.42c8ca5a.jpg&w=1920&q=75"
  },
  {
    name: "Daniel Valencia",
    role: "Chief Information Security Officer",
    description: "Expert in cybersecurity and compliance with a focus on AI systems protection.",
    image: "https://whitegloveai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdaniel.4f936027.jpg&w=1920&q=75"
  },
  {
    name: "Dr. Donnie Wendt",
    role: "Virtual Chief AI Officer",
    description: "Specializing in AI strategy and implementation for enterprise solutions.",
    image: "https://whitegloveai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdonnie.9d2d0f9d.jpg&w=1920&q=75"
  },
  {
    name: "Jason Hess",
    role: "Virtual Chief AI Officer",
    description: "Expert in AI transformation and organizational change management.",
    image: "https://whitegloveai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjason.b4e4ba74.jpg&w=1920&q=75"
  },
  {
    name: "Albert Ramos Jr.",
    role: "Virtual Chief AI Officer",
    description: "Leading AI innovation and strategic implementation for enterprise clients.",
    image: "https://whitegloveai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falbert.6c3dac75.jpg&w=1920&q=75"
  },
  {
    name: "Ankur Desai",
    role: "Chief Marketing Officer",
    description: "Driving strategic growth and market presence through innovative marketing approaches.",
    image: "https://whitegloveai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fankur.67f4d5a4.jpg&w=1920&q=75"
  },
];

export default About;
