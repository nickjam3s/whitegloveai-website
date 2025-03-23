
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
        
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center">
            <img 
              src="/lovable-uploads/9ac70883-95e8-469e-af2c-3e433eb3bf17.png" 
              alt="npower logo" 
              className="h-12 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="/lovable-uploads/9ac70883-95e8-469e-af2c-3e433eb3bf17.png" 
              alt="Tackle Tomorrow logo" 
              className="h-16 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="/lovable-uploads/9ac70883-95e8-469e-af2c-3e433eb3bf17.png" 
              alt="TLT logo" 
              className="h-12 object-contain"
            />
          </div>
        </div>
        
        <div className="w-full mx-auto rounded-lg overflow-hidden mb-16">
          <img 
            src="/lovable-uploads/9ac70883-95e8-469e-af2c-3e433eb3bf17.png" 
            alt="Partner example showing a chatbot integration" 
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="bg-black p-6 rounded-lg mx-auto w-full max-w-4xl">
          <div className="rounded-md overflow-hidden">
            <Table>
              <TableBody>
                <TableRow className="border-b border-gray-800">
                  <TableCell className="py-4 px-6 bg-gray-900 text-white font-medium">ABOUT US</TableCell>
                  <TableCell className="py-4 px-6 bg-gray-900 text-white font-medium">HOW WE SERVE</TableCell>
                  <TableCell className="py-4 px-6 bg-gray-900 text-white font-medium">EVENTS</TableCell>
                  <TableCell className="py-4 px-6 bg-gray-900 text-white font-medium">DONATE</TableCell>
                  <TableCell className="py-4 px-6 bg-gray-900 text-white font-medium">NEWS</TableCell>
                  <TableCell className="py-4 px-6 bg-gray-900 text-white font-medium">CONTACT</TableCell>
                  <TableCell className="py-4 px-6 bg-gray-900 text-white font-medium">COURSES</TableCell>
                  <TableCell className="py-4 px-6 bg-gray-900 text-white font-medium">GALLERY</TableCell>
                  <TableCell className="py-4 px-6 bg-gray-900 text-white font-medium">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full">DONATE</span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
