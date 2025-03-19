
import { useRef } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const policyRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-black min-h-screen" ref={policyRef}>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 heading-highlight">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-2">Effective Date: 01/01/2025</p>
          <p className="text-lg text-gray-300 max-w-3xl">
            This page has been cleared. A new privacy policy will be added soon.
          </p>
          <div className="mt-8">
            <Link to="/" className="inline-block px-6 py-3 bg-[#7021EE] text-white rounded-lg hover:bg-[#7021EE]/80 transition-colors">
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
