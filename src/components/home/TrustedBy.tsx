
import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const logos = [
  { src: '/lovable-uploads/546436a1-1e57-4c15-bcb5-67b2a4387326.png', alt: 'Frisco Logo', height: 80 },
  { src: '/lovable-uploads/7a4a8a1b-9c9a-4bb0-96f4-4e10213073d5.png', alt: 'McKinney Texas Unique By Nature Logo', height: 80 },
  { src: '/lovable-uploads/1ca9f7e9-12e2-46cd-9d26-bf3264c8282c.png', alt: 'Allen Star Logo', height: 80 },
  { src: '/lovable-uploads/f0ca996d-42e2-4524-b115-7ff8ed634282.png', alt: 'Principal Logo', height: 60 },
  { src: '/lovable-uploads/427931fd-d653-41d3-bbfa-1c3f3a160044.png', alt: 'Insight One Logo', height: 60 },
  { src: '/lovable-uploads/31ce2c79-4446-474c-944b-387098eef691.png', alt: 'Kofile Logo', height: 60 },
  { src: '/lovable-uploads/b6a654ad-cab3-433b-b6d1-d7783e010859.png', alt: 'MEDC Logo', height: 60 },
  { src: '/lovable-uploads/17e63cce-7a22-4959-b5a9-2ba2208cb774.png', alt: 'Black Dome Logo', height: 80 },
  { src: '/lovable-uploads/347f5cb7-7b00-4459-8370-240641f6d41a.png', alt: 'City of Anna Logo', height: 80 },
  { src: '/lovable-uploads/ffe8ec7f-c754-4b67-9abf-358cf9af31cf.png', alt: 'McKinney Texas Logo', height: 80 },
  { src: '/lovable-uploads/a95e8c96-a49c-4c52-bb1b-c2a6241c1d1f.png', alt: 'Patriot Logo', height: 60 },
];

const reviews = [
  {
    text: `Working with WhitegloveAI was a truly refreshing experience. From the start, their team demonstrated a high level of knowledge and innovation—bringing creative solutions to the table. They didn’t just meet the requirements —they elevated them.

What stood out most was their level of engagement. Every step of the way, Nick and team were communicative, responsive, and genuinely invested in the success of the project. They took the time to understand our goals and worked collaboratively to deliver results that aligned with our vision.

Overall, Whiteglove delivered exceptional value and proved to be a forward-thinking, engaged partner. I would highly recommend them to anyone looking for a team that combines creativity, strategy, and dedication.`,
    author: "Omar Rodriguez",
    title: "Chief Information Officer",
    company: "City of McKinney",
  },
  {
    text: `Whiteglove.ai has been a great partner in helping us modernize city services through voice AI. They supported our Traffic department in understanding service requests and building automated workflows that now provide valuable data analytics. Their agile project management approach gave us visibility into the product early on and allowed for continuous input, ensuring the final solution met our needs.

What really stood out was how reusable the model is—we’re now able to apply it to other departments that handle citizen inquiries. The Whiteglove.ai team was easy to work with, highly responsive, and their Texas-based location made collaboration even smoother. Based on this successful engagement, we’ve already brought them in on a new project with another department. They’ve truly proven themselves as a trusted and innovative partner.`,
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

const starAnimKeyframes = [
  [0, 10],   // star 0 starts at 0%, peak at 10%
  [10, 30],  // star 1 starts at 10%, peak at 30%
  [30, 50],  // star 2 starts at 30%, peak at 50%
  [50, 70],  // star 3 starts at 50%, peak at 70%
  [70, 90],  // star 4 starts at 70%, peak at 90%
];

const getStarFill = (progress: number, i: number) => {
  const [start, end] = starAnimKeyframes[i];
  if (progress >= start && progress < end) {
    const frac = (progress - start) / (end - start);
    return Math.min(1, 0.5 + frac * 0.5);
  } else if (progress >= end) {
    return 1;
  }
  return 0.5;
};

const StarRow = () => {
  const [progress, setProgress] = React.useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 1400;

    const loop = (timestamp: number) => {
      if (!start) start = timestamp;
      const delta = timestamp - start;
      let pct = ((delta % duration) / duration) * 100;
      setProgress(pct);
      frame = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-6 h-6 transition-all duration-300"
          color="#FEF7CD"
          fill={`rgba(254, 247, 205, ${getStarFill(progress, i)})`}
          strokeWidth={i === 0 ? 1.5 : 1}
          aria-label="Star"
          style={{
            filter: `drop-shadow(0 0 ${getStarFill(progress, i) * 6}px #FEF7CD${getStarFill(progress, i) > 0.7 ? '99' : ''})`
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
        <div className="container mx-auto overflow-hidden">
          <h2 className="text-center text-white text-2xl font-semibold mb-8">Trusted By</h2>

          <div className="relative w-full overflow-hidden">
            <div className="flex items-center gap-8 animate-scroll whitespace-nowrap w-max h-[100px]">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-full"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ height: `${logo.height}px` }}
                    className="object-contain w-auto"
                  />
                </div>
              ))}
            </div>
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

