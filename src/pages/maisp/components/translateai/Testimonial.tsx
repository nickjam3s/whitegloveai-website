import React from "react";
import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const StarRow = () => {
  return (
    <div className="flex gap-1 justify-center mb-6">
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

const Testimonial = () => {
  const review = {
    text: `"WhitegloveAI provided outstanding service in every aspect of our needs. I was initially apprehensive about this new project—there was a lot at stake—but within 15 minutes of rollout, it was clear the product and service were both impeccable. Even with the complexity of our setup, WhitegloveAI addressed every detail flawlessly. The feedback from our attendees was overwhelmingly positive: 94% of survey responders said they were 'satisfied' or 'very satisfied' with the AI translation service. That is a huge win!"`,
    author: "Phil Armstrong",
    title: "Director of Global Community",
    company: "Dallas Baptist University",
    photo: "/lovable-uploads/1c858f73-9c43-41d9-92ea-f3233a1efc2f.png",
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#111] border border-[#333] rounded-lg p-12 transition-all duration-300 hover:border-[#7021EE] hover:shadow-lg hover:shadow-[#7021EE]/20">
            <StarRow />
            
            <blockquote className="text-center mb-8">
              <p className="text-gray-200 font-light italic text-xl leading-relaxed max-w-5xl mx-auto">
                {review.text}
              </p>
            </blockquote>
            
            {/* Author Information */}
            <div className="flex items-center justify-center gap-6 pt-8 border-t border-[#333] relative">
              {/* Company Logo - Bottom Left */}
              <div className="absolute left-0 bottom-0">
                <img 
                  src="https://84d297c6-114c-4cb6-a6bc-83e359f1d6cb.lovableproject.com/lovable-uploads/cbc64b44-084f-482b-8637-adfe22d6c0ec.png"
                  alt="Dallas Baptist University Logo"
                  className="h-12 w-auto opacity-60 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              <Avatar className="w-20 h-20 flex-shrink-0">
                <AvatarImage 
                  src={review.photo} 
                  alt={review.author}
                  className="object-cover"
                />
                <AvatarFallback className="bg-[#7021EE]/10 text-[#7021EE] text-xl font-semibold">
                  {review.author.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="text-center">
                <div className="text-white font-semibold text-lg mb-1">{review.author}</div>
                <div className="text-gray-400 text-base mb-1">{review.title}</div>
                <div className="text-gray-400 text-base">{review.company}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;