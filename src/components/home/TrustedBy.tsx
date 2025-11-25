
import React, { useState } from "react";
import { Star, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const logos = [
  { src: '/lovable-uploads/blackdome-logo.png', alt: 'Black Dome Logo', height: 64 },
  { src: '/lovable-uploads/7a4a8a1b-9c9a-4bb0-96f4-4e10213073d5.png', alt: 'McKinney Texas Unique By Nature Logo', height: 64 },
  { src: '/lovable-uploads/1ca9f7e9-12e2-46cd-9d26-bf3264c8282c.png', alt: 'Allen Star Logo', height: 64 },
  { src: '/lovable-uploads/347f5cb7-7b00-4459-8370-240641f6d41a.png', alt: 'City of Anna Logo', height: 64 },
  { src: '/lovable-uploads/cbc64b44-084f-482b-8637-adfe22d6c0ec.png', alt: 'University Logo', height: 64 },
  { src: '/lovable-uploads/c0e45a43-6f9f-4579-af85-ed5c9bfa2e58.png', alt: 'Mastercard Logo', height: 64 },
  { src: '/lovable-uploads/b6a654ad-cab3-433b-b6d1-d7783e010859.png', alt: 'MEDC Logo', height: 64 },
  { src: '/lovable-uploads/31ce2c79-4446-474c-944b-387098eef691.png', alt: 'Kofile Logo', height: 64 },
  { src: '/lovable-uploads/f0ca996d-42e2-4524-b115-7ff8ed634282.png', alt: 'Principal Logo', height: 64 },
  { src: '/lovable-uploads/70c9104c-d289-4a52-b28e-49337cc8409a.png', alt: 'Tackle Tomorrow Logo', height: 64 },
  { src: '/lovable-uploads/59a4884a-03e1-43ef-a6d1-e79c5ca8e3ea.png', alt: 'New Logo', height: 64 },
];

// Static grid logos with North Texas Tollway added at the beginning
const staticGridLogos = [
  { src: '/lovable-uploads/north-texas-tollway.png', alt: 'North Texas Tollway Authority Logo', height: 77 },
  ...logos
];

const reviews = [
  {
    text: `"WhitegloveAI provided outstanding service in every aspect of our needs. I was initially apprehensive about this new project—there was a lot at stake—but within 15 minutes of rollout, it was clear the product and service were both impeccable. Even with the complexity of our setup, WhitegloveAI addressed every detail flawlessly. The feedback from our attendees was overwhelmingly positive: 94% of survey responders said they were 'satisfied' or 'very satisfied' with the AI translation service. That is a huge win!"`,
    author: "Phil Armstrong",
    title: "Director of Global Community",
    company: "Dallas Baptist University",
    photo: "/lovable-uploads/1c858f73-9c43-41d9-92ea-f3233a1efc2f.png",
  },
  {
    text: `"Working with WhitegloveAI was a truly refreshing experience. From the start, their team demonstrated a high level of knowledge and innovation—bringing creative solutions to the table. They didn't just meet the requirements —they elevated them.

What stood out most was their level of engagement. Every step of the way, Nick and team were communicative, responsive, and genuinely invested in the success of the project. They took the time to understand our goals and worked collaboratively to deliver results that aligned with our vision.

Overall, WhitegloveAI delivered exceptional value and proved to be a forward-thinking, engaged partner. I would highly recommend them to anyone looking for a team that combines creativity, strategy, and dedication."`,
    author: "Omar Rodriguez",
    title: "Chief Information Officer",
    company: "City of McKinney",
    photo: "/lovable-uploads/02a9184c-e861-4abd-8a19-024fe98adb3c.png",
  },
  {
    text: `"WhitegloveAI has been a great partner in helping us modernize city services through voice AI. They supported our Traffic department in understanding service requests and building automated workflows that now provide valuable data analytics. Their agile project management approach gave us visibility into the product early on and allowed for continuous input, ensuring the final solution met our needs.

What really stood out was how reusable the model is—we're now able to apply it to other departments that handle citizen inquiries. The WhitegloveAI team was easy to work with, highly responsive, and their Texas-based location made collaboration even smoother. Based on this successful engagement, we've already brought them in on a new project with another department. They've truly proven themselves as a trusted and innovative partner."`,
    author: "Melissa K.",
    title: "Chief Information Officer",
    company: "Major Texas City",
    photo: "/lovable-uploads/d2501a15-0ffe-4eb6-9740-6626443d0c30.png",
  },
  {
    text: `"WhitegloveAI is a MUST HAVE! Between their experts on staff, great customer support, and a forward-thinking approach, WhitegloveAI is THE BEST AI adoption partner to have on your side. They will build ground up or help you to scale in an already made platform.

We rely on them them to be our Expert AI Brokers/Integrators.

This year, they helped us to successful pilot/onboard TeamGPT, which is a must have. We hope to roll out several more initiatives in 25'-26'."`,
    author: "Theodore Mackey III",
    title: "CTE Director",
    company: "Anna ISD",
    photo: "/lovable-uploads/7e89aadd-c98c-472f-ba16-a81b59318135.png",
  }
];

const StarRow = () => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-6 h-6"
          color="#7021EE"
          fill="#7021EE"
          strokeWidth={1.5}
          aria-label="Star"
          style={{
            filter: 'drop-shadow(0 0 8px #7021EE) drop-shadow(0 0 16px rgba(112, 33, 238, 0.5))'
          }}
        />
      ))}
    </div>
  );
};

const TrustedBy = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const visibleReviews = isExpanded ? reviews : reviews.slice(0, 3);

  return (
    <>
      <section className="py-12 bg-[hsl(270,50%,15%)]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-white text-3xl font-semibold mb-8">Trusted By</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {staticGridLogos.map((logo, index) => {
              // Mobile-specific alignment adjustments for specific logos
              let mobileTransform = '';
              if (logo.alt === 'Allen Star Logo') {
                mobileTransform = 'md:transform-none transform translate-y-2'; // Lower on mobile
              } else if (logo.alt === 'University Logo') {
                mobileTransform = 'md:transform-none transform -translate-y-1'; // Raise on mobile
              } else if (logo.alt === 'City of Anna Logo') {
                mobileTransform = 'md:transform-none transform translate-y-1'; // Lower on mobile
              }
              
              return (
                <div
                  key={index}
                  className={`flex items-center justify-center h-[100px] group ${mobileTransform}`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="object-contain w-auto grayscale opacity-70 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-300"
                    style={{ height: `${logo.height}px` }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-black">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleReviews.map((review, idx) => (
              <Card
                key={idx}
                className="bg-[#111] border border-[#333] shadow-lg h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#7021EE] hover:shadow-[#7021EE]/20 card-glow group animate-fade-in"
              >
                <CardContent className="py-8 px-8 flex flex-col h-full">
                  <StarRow />
                  <div className="flex-1 flex flex-col">
                    <p className="text-gray-200 font-light italic text-sm whitespace-pre-line mb-6 flex-1">{review.text}</p>
                    
                    {/* Author Information Subsection */}
                    <div className="mt-auto pt-6 border-t border-[#333]">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-16 h-16 flex-shrink-0">
                          <AvatarImage 
                            src={review.photo} 
                            alt={review.author}
                            className="object-cover"
                          />
                          <AvatarFallback className="bg-[#7021EE]/10 text-[#7021EE] text-lg font-semibold">
                            {review.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex flex-col text-left">
                          <span className="text-white font-semibold text-base mb-1">{review.author}</span>
                          <span className="text-gray-400 text-sm mb-1">{review.title}</span>
                          <span className="text-gray-400 text-sm">{review.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {reviews.length > 3 && (
            <div className="flex justify-center mt-8">
              <Button
                onClick={() => setIsExpanded(!isExpanded)}
                variant="ghost"
                className="text-white hover:text-[#7021EE] hover:bg-[#7021EE]/10 transition-all duration-300 flex items-center gap-2"
                aria-label={isExpanded ? "Show fewer reviews" : "Show more reviews"}
              >
                <span>{isExpanded ? "Show Less" : "Show More"}</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                />
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TrustedBy;
