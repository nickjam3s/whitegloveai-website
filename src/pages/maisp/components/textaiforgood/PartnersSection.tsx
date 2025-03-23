
import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const PartnersSection = () => {
  return (
    <section className="py-12 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-white">NonProfit Partners</h2>
        <p className="text-xl text-white mb-12">
          We are proud to partner with local Texas, national and international nonprofits.
        </p>
        
        <div className="mx-auto mb-16">
          <img 
            src="/lovable-uploads/281b93ec-555c-44bf-b36c-fea8412f1d13.png" 
            alt="NonProfit Partners including NPower, Tackle Tomorrow, and TLT" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
