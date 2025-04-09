
import { HeadphonesIcon, UserCheck } from "lucide-react";

const Support = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Ongoing Support and Client Responsibilities
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background/50 p-6 rounded-lg border border-gray-800">
            <HeadphonesIcon className="h-10 w-10 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Our Support</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Access to AI experts</li>
              <li>Regular performance reviews</li>
              <li>Roadmap updates</li>
              <li>Training refreshers</li>
            </ul>
          </div>
          <div className="bg-background/50 p-6 rounded-lg border border-gray-800">
            <UserCheck className="h-10 w-10 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Client Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Provide data access</li>
              <li>Designate a point of contact</li>
              <li>Participate in training</li>
              <li>Share business goals</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
