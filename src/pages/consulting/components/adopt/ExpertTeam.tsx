
import { Users, Award } from "lucide-react";

const ExpertTeam = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Expert Team and Credentials
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background/50 p-6 rounded-lg border border-gray-800">
            <Users className="h-10 w-10 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Experienced Practitioners</h3>
            <p className="text-gray-400">
              Our team consists of seasoned AI consultants and change management experts with extensive experience in applying AI-AMF across industries.
            </p>
          </div>
          <div className="bg-background/50 p-6 rounded-lg border border-gray-800">
            <Award className="h-10 w-10 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Certifications</h3>
            <p className="text-gray-400">
              Team members hold certifications in AI technologies, project management, and compliance standards, ensuring credibility and expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;
