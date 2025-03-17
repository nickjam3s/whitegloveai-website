
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
    { name: "Monthly Sessions", basic: "4", professional: "4", premium: "8" },
    { name: "Episodes Produced", basic: "3 (30 min each)", professional: "5 (60 min each)", premium: "5+ (60 min each)" },
    { name: "Strategy Hours", basic: "Up to 5 hours", professional: "Up to 10 hours", premium: "Unlimited" },
    { name: "Promotional Clips", basic: "1 per episode", professional: "3 per episode", premium: "3+ per episode" },
    { name: "Add-Ons Included", basic: <X className="h-5 w-5 text-red-500 mx-auto" />, professional: <X className="h-5 w-5 text-red-500 mx-auto" />, premium: <Check className="h-5 w-5 text-green-500 mx-auto" /> }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="comparison">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white heading-highlight-scroll">
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
                    <TableCell className="font-medium text-white">{feature.name}</TableCell>
                    <TableCell className="text-center text-gray-300">
                      {feature.basic}
                    </TableCell>
                    <TableCell className="text-center text-gray-300">
                      {feature.professional}
                    </TableCell>
                    <TableCell className="text-center text-gray-300">
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
