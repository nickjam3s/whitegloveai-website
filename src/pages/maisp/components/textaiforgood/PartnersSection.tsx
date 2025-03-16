
import { HandHeart } from "lucide-react";

const PartnersSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <HandHeart className="h-12 w-12 text-secondary mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-6 heading-highlight-scroll">NonProfit Partners</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We are proud to partner with local Texas, national and international nonprofits, helping them leverage AI technology to amplify their mission and impact.
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;
