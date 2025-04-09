
import { motion } from "framer-motion";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from "@/components/ui/table";
import { Check, X } from "lucide-react";

const PlanComparison = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  const features = [
    { 
      name: "Monthly Episodes Tokens\nEach Token = 15 mins\n(Live-streamed or Pre-recorded)", 
      basic: "8 Tokens", 
      professional: "20 Tokens", 
      premium: "40 Tokens" 
    },
    { 
      name: "Initial Strategy Session", 
      basic: "Included", 
      professional: "Included", 
      premium: "Included" 
    },
    { 
      name: "Calibration Meetings (Monthly)", 
      basic: "Included", 
      professional: "Included", 
      premium: "Included" 
    },
    { 
      name: "Podcast Account Delivery\n(Spotify, Apple and/or YouTube)", 
      basic: "1", 
      professional: "2", 
      premium: "3 (All)" 
    },
    { 
      name: "Social Account Delivery\n(LinkedIn, YouTube, Instagram,\nTikTok, Facebook and/or X)", 
      basic: "1", 
      professional: "3", 
      premium: "6 (All)" 
    },
    { 
      name: "Social & Podcast Banner Design", 
      basic: "Included", 
      professional: "Included", 
      premium: "Included" 
    },
    { 
      name: "Guest booking and\ncoordination", 
      basic: <X className="h-5 w-5 text-red-500 mx-auto" />, 
      professional: "Included", 
      premium: "Included" 
    },
    { 
      name: "Short-Form and Clip Creation\nand Distribution", 
      basic: "2 per episode with\ncaption and hashtags\noptimized for social\nalgorithms", 
      professional: "4 per episode with\ncaption and hashtags\noptimized for social\nalgorithms", 
      premium: "8 per episode with\ncaption and hashtags\noptimized for social\nalgorithms" 
    },
    { 
      name: "Episode Thumbnail Creation", 
      basic: "Included", 
      professional: "Included", 
      premium: "Included" 
    },
    { 
      name: "Topic Research and Script\nDrafting", 
      basic: "Included", 
      professional: "Included", 
      premium: "Included" 
    },
    { 
      name: "Studio Software and Setup", 
      basic: "Included", 
      professional: "Included", 
      premium: "Included" 
    },
    { 
      name: "In-Virtual-Studio Producer", 
      basic: "Included", 
      professional: "Included", 
      premium: "Included" 
    },
    { 
      name: "Post-Production Editing", 
      basic: "Included", 
      professional: "Included", 
      premium: "Included" 
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="comparison">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#9b87f5] heading-highlight-scroll">
            Plan Comparison
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Finding Your Perfect Podcasting Solution
          </p>
        </div>
        
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <p className="text-gray-300">
            When selecting your plan, consider your podcasting goals, production volume needs, and desired level of support. 
            The Basic Plan offers essential services for those just starting their podcasting journey, while Professional and 
            Premium plans provide increasingly comprehensive support for established podcasters looking to scale their production 
            quality and audience reach.
          </p>
        </div>
        
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="overflow-x-auto relative"
        >
          <div className="min-w-[600px] lg:w-full">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="border-[#9b87f5]/20">
                  <TableHead className="text-white">Feature</TableHead>
                  <TableHead className="text-white text-center">Basic</TableHead>
                  <TableHead className="text-white text-center">Professional</TableHead>
                  <TableHead className="text-white text-center">Premium</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((feature, index) => (
                  <TableRow 
                    key={index}
                    className="border-[#9b87f5]/20 hover:bg-[#9b87f5]/5"
                  >
                    <TableCell className="font-medium text-white whitespace-pre-line">{feature.name}</TableCell>
                    <TableCell className="text-center text-gray-300 whitespace-pre-line">
                      {feature.basic}
                    </TableCell>
                    <TableCell className="text-center text-gray-300 whitespace-pre-line">
                      {feature.professional}
                    </TableCell>
                    <TableCell className="text-center text-gray-300 whitespace-pre-line">
                      {feature.premium}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlanComparison;
