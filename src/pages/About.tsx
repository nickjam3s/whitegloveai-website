
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe all scroll-animated headings
    document.querySelectorAll('.heading-highlight-scroll').forEach(heading => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with fixed background */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <AspectRatio ratio={16 / 9}>
            <div 
              className="w-full h-full bg-fixed"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.4
              }}
            />
          </AspectRatio>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-6xl font-bold mb-6 heading-highlight">Building the Future of AI Editing</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At Lovable AI, we're not just building an editor – we're crafting the future of secure, 
              intuitive AI development for creators worldwide.
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
                  To democratize AI development through intuitive tools, making powerful web application creation accessible to everyone.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Core Values</h2>
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-2 h-2 bg-[#9b87f5] rounded-full mt-2" />
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold mb-2 text-[#9b87f5]">{stat.value}</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {team.map((member, index) => (
              <div key={index} className="bg-[#111111] p-8 rounded-lg w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-6 mx-auto object-cover"
                />
                <h3 className="text-2xl font-bold mb-2 text-center">{member.name}</h3>
                <p className="text-[#9b87f5] mb-4 text-center font-medium">{member.role}</p>
                <p className="text-gray-300 text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Development Process?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with Lovable AI to discover how our AI-powered editor can revolutionize your web application development.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8 py-6 bg-[#9b87f5] hover:bg-[#9b87f5]/90">
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
    title: "User-First Approach",
    description: "Every decision is made with our users' success and satisfaction in mind. We prioritize understanding and meeting their unique development needs.",
  },
  {
    title: "Accessibility & Trust",
    description: "We maintain the highest standards of accessibility and trust in every interaction, ensuring our platform is available to all skill levels.",
  },
  {
    title: "Innovation Leadership",
    description: "We stay at the forefront of AI technology, continuously innovating to deliver cutting-edge solutions that drive real development value.",
  },
  {
    title: "Ethical AI Practice",
    description: "We ensure responsible AI development and deployment, maintaining transparency and fairness in all our AI implementations.",
  },
];

const stats = [
  {
    value: "100K+",
    label: "Active Users",
  },
  {
    value: "99%",
    label: "User Satisfaction",
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
    name: "Sofia Rodriguez",
    role: "CEO & Founder",
    description: "Leading innovation in AI development with over 15 years of experience in machine learning and enterprise technology.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    description: "Expert in AI systems architecture with a focus on creating intuitive developer experiences.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Dr. Aisha Johnson",
    role: "AI Research Director",
    description: "Specializing in natural language processing and machine learning algorithms for coding assistance.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
  },
  {
    name: "David Park",
    role: "Head of Product",
    description: "Leading product strategy with a focus on user experience and accessibility in AI tools.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Emma Wilson",
    role: "UX Design Lead",
    description: "Creating intuitive interfaces that make complex AI functionality accessible to all users.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  },
  {
    name: "James Taylor",
    role: "Chief Marketing Officer",
    description: "Driving strategic growth and market presence through innovative approaches to AI tool marketing.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
];

export default About;
