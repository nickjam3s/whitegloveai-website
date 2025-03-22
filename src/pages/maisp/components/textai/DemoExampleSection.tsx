
import React from "react";
import { MessageSquare } from "lucide-react";

const DemoExampleSection = () => {
  return (
    <section className="py-20 bg-background w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 heading-highlight-scroll">
            TextAI in Action
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how TextAI provides intelligent responses to user queries
          </p>
        </div>

        <div className="bg-card/30 rounded-lg overflow-hidden border border-gray-800 max-w-4xl mx-auto">
          <div className="p-4 bg-black/40 border-b border-gray-800 flex items-center">
            <MessageSquare className="h-5 w-5 text-primary mr-2" />
            <span className="font-medium">TextAI Demo Conversation</span>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex-shrink-0 flex items-center justify-center">
                <span className="text-sm font-semibold">U</span>
              </div>
              <div className="ml-4 bg-gray-800/60 p-3 rounded-lg rounded-tl-none">
                <p className="text-gray-200">What are your business hours?</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-primary/80 flex-shrink-0 flex items-center justify-center">
                <span className="text-sm font-semibold">AI</span>
              </div>
              <div className="ml-4 bg-primary/20 p-3 rounded-lg rounded-tl-none">
                <p className="text-gray-200">Our main office is open Monday through Friday from 9:00 AM to 5:00 PM Central Time. However, our online services and support resources are available 24/7. If you need assistance outside of business hours, you can send an email to support@example.com or use this chat system, and we'll respond at the earliest opportunity. Is there something specific I can help you with today?</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex-shrink-0 flex items-center justify-center">
                <span className="text-sm font-semibold">U</span>
              </div>
              <div className="ml-4 bg-gray-800/60 p-3 rounded-lg rounded-tl-none">
                <p className="text-gray-200">Do you offer weekend support?</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-primary/80 flex-shrink-0 flex items-center justify-center">
                <span className="text-sm font-semibold">AI</span>
              </div>
              <div className="ml-4 bg-primary/20 p-3 rounded-lg rounded-tl-none">
                <p className="text-gray-200">Yes, we do offer weekend support through our automated TextAI system, which is available 24/7. For urgent matters requiring human assistance on weekends, we have an on-call support team available from 10:00 AM to 4:00 PM on Saturdays. You can reach them by selecting "Urgent Support" from our support portal or by calling our emergency support line at (555) 123-4567. Non-urgent requests submitted over the weekend will be addressed on the next business day.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoExampleSection;
