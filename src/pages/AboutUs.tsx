
import { Link } from "react-router-dom";
import { ArrowRight, Users, Shield, Brain, Lightbulb, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-semibold mb-4">Mission</h2>
                <p className="text-gray-400">
                  To lead secure and responsible AI adoption, reshaping organizational efficiency and digital transformations.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-semibold mb-4">Vision</h2>
                <p className="text-gray-400">
                  To catalyze digital transformations through secure, stable, and sustainable emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Philosophy */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-semibold mb-6">Our AI Philosophy</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We believe that AI is not merely a tool but a transformative ally that amplifies human potential, drives innovation, and reshapes business landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Core Beliefs: Shaping Responsible AI</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreBeliefs.map((belief, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-gray-800">
                <belief.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{belief.title}</h3>
                <p className="text-gray-400">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhitegloveAI Approach */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">The WhitegloveAI Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-3">{approach.title}</h3>
                <p className="text-gray-400">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-gray-800 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-secondary transition-colors"
                    >
                      {member.name}
                    </a>
                  ) : (
                    member.name
                  )}
                </h3>
                <p className="text-gray-400">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apprenticeship CTA */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Join our Apprenticeship Program</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Transform your career in AI with our exclusive 6-month apprenticeship program.
          </p>
          <Link to="/aboutus/apprenticeship">
            <Button variant="secondary" size="lg">
              Learn More <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

const coreBeliefs = [
  {
    icon: Brain,
    title: "AI as a Collaborative Force",
    description: "AI is an essential partner that enhances creativity and problem-solving capabilities, seamlessly integrating into workflows to augment human skills."
  },
  {
    icon: Shield,
    title: "Responsible Innovation",
    description: "Ethical considerations are at the heart of our initiatives. We develop and deploy AI solutions that adhere to the highest standards of fairness, accountability, and transparency."
  },
  {
    icon: Shield,
    title: "Security and Trust",
    description: "Trust is the cornerstone of any successful AI strategy. We prioritize the security of our systems to protect data, preserve privacy, and maintain operational integrity."
  },
  {
    icon: BookOpen,
    title: "Empowerment Through Education",
    description: "AI adoption requires a well-informed team. We invest in education and knowledge-sharing so that every member understands both the benefits and challenges of AI."
  }
];

const approaches = [
  {
    title: "Adaptive Growth",
    description: "Technology evolves rapidly, and so do we. Our forward-looking mindset ensures that our strategies remain adaptable and evolve alongside technological advancements."
  },
  {
    title: "Strategic Integration",
    description: "AI must align with business objectives. We advocate for its strategic implementation to ensure every integration adds tangible value."
  },
  {
    title: "Universal Accessibility",
    description: "We are committed to democratizing AI so that all employees, regardless of role or expertise, can leverage its benefits."
  },
  {
    title: "Customer-Centricity",
    description: "Our AI solutions are crafted with the customer in mind, ensuring that we constantly anticipate needs and deliver exceptional experiences and services."
  },
  {
    title: "Cross-Disciplinary Approach",
    description: "The full potential of AI is unlocked when insights from various fields are integrated. Our interdisciplinary approach brings together diverse expertise for innovative problem-solving."
  },
  {
    title: "Unified Framework",
    description: "Our AI Adoption and Management Framework (AI-AMF) provides a structured pathway for integrating AI, guiding organizations from concept to measurable outcomes."
  }
];

const team = [
  {
    name: "Nick James",
    title: "Chief Executive Officer & Founder",
    linkedin: "https://www.linkedin.com/in/nickjam3s/"
  },
  {
    name: "Jason Hess",
    title: "Virtual Chief AI Officer"
  },
  {
    name: "Dr. Donnie Wendt",
    title: "Virtual Chief AI Officer"
  },
  {
    name: "Albert Ramos Jr.",
    title: "Virtual Chief AI Officer"
  },
  {
    name: "Daniel Valencia",
    title: "Chief Information Security Officer"
  },
  {
    name: "Tobalo Torres",
    title: "VP of AI Incubation Labs"
  },
  {
    name: "Ankur Desai",
    title: "Chief Marketing Officer",
    linkedin: "https://www.linkedin.com/in/ankdes/"
  },
  {
    name: "Binni Skariah",
    title: "Chief Executive Officer in Residence of Lucidis.Ai",
    linkedin: "https://www.linkedin.com/in/bskariah/"
  },
  {
    name: "Ken Knapp",
    title: "VP of Growth"
  }
];

export default AboutUs;
