
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const McKinneyEDCSection = () => {
  return (
    <section className="py-20 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start space-y-6">
          <h2 className="text-5xl font-bold text-white">McKinney EDC Chatbot</h2>
          
          <p className="text-xl text-gray-300 max-w-3xl">
            The McKinney EDC leverages our chatbot to reduce the number of inquires on commonly asked
            questions.
          </p>
          
          <div className="mt-12 w-full">
            <Card className="bg-transparent border-none overflow-hidden rounded-lg shadow-2xl">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/83627764-91d7-49fd-b682-784b88c720aa.png" 
                  alt="McKinney EDC Website with TextAI Chatbot" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default McKinneyEDCSection;
