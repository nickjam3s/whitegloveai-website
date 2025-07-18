
import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const logos = [
  { src: '/lovable-uploads/546436a1-1e57-4c15-bcb5-67b2a4387326.png', alt: 'Frisco Logo', height: 96 }, // 20% bigger (80 * 1.2)
  { src: '/lovable-uploads/7a4a8a1b-9c9a-4bb0-96f4-4e10213073d5.png', alt: 'McKinney Texas Unique By Nature Logo', height: 166 }, // 20% bigger (138 * 1.2)
  { src: '/lovable-uploads/1ca9f7e9-12e2-46cd-9d26-bf3264c8282c.png', alt: 'Allen Star Logo', height: 96 }, // 20% bigger (80 * 1.2)
  { src: '/lovable-uploads/f0ca996d-42e2-4524-b115-7ff8ed634282.png', alt: 'Principal Logo', height: 72 }, // 20% bigger (60 * 1.2)
  { src: '/lovable-uploads/cbc64b44-084f-482b-8637-adfe22d6c0ec.png', alt: 'University Logo', height: 144 }, // 40% bigger (103 * 1.4)
  { src: '/lovable-uploads/31ce2c79-4446-474c-944b-387098eef691.png', alt: 'Kofile Logo', height: 72 }, // 20% bigger (60 * 1.2)
  { src: '/lovable-uploads/b6a654ad-cab3-433b-b6d1-d7783e010859.png', alt: 'MEDC Logo', height: 72 }, // 20% bigger (60 * 1.2)
  { src: '/lovable-uploads/17e63cce-7a22-4959-b5a9-2ba2208cb774.png', alt: 'Black Dome Logo', height: 166 }, // 20% bigger (138 * 1.2)
  { src: '/lovable-uploads/347f5cb7-7b00-4459-8370-240641f6d41a.png', alt: 'City of Anna Logo', height: 96 }, // 20% bigger (80 * 1.2)
  { src: '/lovable-uploads/70c9104c-d289-4a52-b28e-49337cc8409a.png', alt: 'Tackle Tomorrow Logo', height: 96 }, // 20% bigger (80 * 1.2)
  { src: '/lovable-uploads/59a4884a-03e1-43ef-a6d1-e79c5ca8e3ea.png', alt: 'New Logo', height: 86 }, // 20% bigger (72 * 1.2)
];

// Static grid logos with the new logo added at the beginning
const staticGridLogos = [
  { src: '/lovable-uploads/c0e45a43-6f9f-4579-af85-ed5c9bfa2e58.png', alt: 'New Client Logo', height: 103 }, // 20% bigger (86 * 1.2)
  ...logos
];

const reviews = [
  {
    text: `Working with WhitegloveAI was a truly refreshing experience. From the start, their team demonstrated a high level of knowledge and innovation—bringing creative solutions to the table. They didn't just meet the requirements —they elevated them.

What stood out most was their level of engagement. Every step of the way, Nick and team were communicative, responsive, and genuinely invested in the success of the project. They took the time to understand our goals and worked collaboratively to deliver results that aligned with our vision.

Overall, Whiteglove delivered exceptional value and proved to be a forward-thinking, engaged partner. I would highly recommend them to anyone looking for a team that combines creativity, strategy, and dedication.`,
    author: "Omar Rodriguez",
    title: "Chief Information Officer",
    company: "City of McKinney",
  },
  {
    text: `Whiteglove.ai has been a great partner in helping us modernize city services through voice AI. They supported our Traffic department in understanding service requests and building automated workflows that now provide valuable data analytics. Their agile project management approach gave us visibility into the product early on and allowed for continuous input, ensuring the final solution met our needs.

What really stood out was how reusable the model is—we're now able to apply it to other departments that handle citizen inquiries. The Whiteglove.ai team was easy to work with, highly responsive, and their Texas-based location made collaboration even smoother. Based on this successful engagement, we've already brought them in on a new project with another department. They've truly proven themselves as a trusted and innovative partner.`,
    author: "Melissa Kraft",
    title: "Chief Information Officer",
    company: "City of Frisco",
  },
  {
    text: `WhitegloveAI is a MUST HAVE! Between their experts on staff, great customer support, and a forward-thinking approach, WhitegloveAI is THE BEST AI adoption partner to have on your side. They will build ground up or help you to scale in an already made platform.

We rely on them them to be our Expert AI Brokers/Integrators.

This year, they helped us to successful pilot/onboard TeamGPT, which is a must have. We hope to roll out several more initiatives in 25'-26'.`,
    author: "Theodore Mackey III",
    title: "CTE Director",
    company: "Anna ISD",
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
  return (
    <>
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-white text-3xl font-semibold mb-8">Trusted By</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {staticGridLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-h-[120px] group"
                style={{ height: `${Math.max(120, logo.height + 20)}px` }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain w-auto grayscale opacity-70 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-300"
                  style={{ height: `${logo.height}px` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-black">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <Card
                key={idx}
                className="bg-[#111] border border-[#333] shadow-lg h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#7021EE] hover:shadow-[#7021EE]/20 card-glow group"
              >
                <CardContent className="py-8 px-8 flex flex-col items-center">
                  <StarRow />
                  <div className="w-full flex-1 flex flex-col">
                    <p className="text-gray-200 font-light italic text-sm whitespace-pre-line mb-6">{review.text}</p>
                    <div className="mt-auto text-center not-italic">
                      <span className="block text-white font-semibold not-italic">{review.author}</span>
                      <span className="block text-gray-400 not-italic text-sm">{review.title}</span>
                      <span className="block text-gray-400 not-italic text-sm">{review.company}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedBy;
