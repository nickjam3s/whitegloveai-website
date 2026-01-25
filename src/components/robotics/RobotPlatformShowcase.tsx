import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Dog, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RobotProduct {
  id: string;
  model: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
}

const humanoids: RobotProduct[] = [
  {
    id: "h1",
    model: "Unitree H1",
    tagline: "The Powerhouse Humanoid",
    description: "A full-size, general-purpose humanoid robot with world-class power and mobility. The H1 is designed for complex, dynamic tasks that require human-like strength and agility.",
    specs: [
      { label: "Height", value: "~1.8m" },
      { label: "Weight", value: "~47kg" },
      { label: "Max Speed", value: ">3.3 m/s" },
      { label: "Peak Joint Torque", value: "360 N.m" },
    ],
  },
  {
    id: "g1",
    model: "Unitree G1",
    tagline: "The Agile AI Avatar",
    description: "A highly flexible and intelligent humanoid agent. The G1 excels at tasks requiring dexterity and AI-driven interaction, making it a perfect avatar for remote operations or human-robot collaboration.",
    specs: [
      { label: "Height", value: "~1.3m" },
      { label: "Weight", value: "~35kg" },
      { label: "DOF", value: "Up to 43" },
      { label: "Features", value: "Force-controlled dexterous hands" },
    ],
  },
  {
    id: "r1",
    model: "Unitree R1",
    tagline: "The Customizable Explorer",
    description: "An ultra-lightweight and fully customizable research platform. The R1 is ideal for developing and testing new robotic applications in a versatile, bipedal form factor.",
    specs: [
      { label: "Height", value: "~1.2m" },
      { label: "Weight", value: "~25kg" },
      { label: "Customizable", value: "Yes" },
      { label: "Open-source", value: "Supported" },
    ],
  },
];

const quadrupeds: RobotProduct[] = [
  {
    id: "b2",
    model: "Unitree B2",
    tagline: "The Rugged Industrial Workhorse",
    description: "The B2 is built for the toughest jobs. With its high payload capacity, extreme terrain adaptability, and IP67 rating, it's the go-to platform for industrial inspection, public safety, and emergency response.",
    specs: [
      { label: "Max Speed", value: ">6 m/s" },
      { label: "Payload", value: ">40kg (walking)" },
      { label: "Endurance", value: ">5 hours" },
      { label: "Protection", value: "IP67" },
    ],
  },
  {
    id: "a2",
    model: "Unitree A2",
    tagline: "The Agile Inspector",
    description: "The A2 is a medium-sized, high-performance quadruped designed for long-duration inspection and reconnaissance tasks. Its dual-battery system allows for hot-swapping in the field for continuous operation.",
    specs: [
      { label: "Max Speed", value: "~3.7 m/s" },
      { label: "Payload", value: "~25kg (walking)" },
      { label: "Endurance", value: ">5 hours" },
      { label: "Features", value: "Dual hot-swappable batteries" },
    ],
  },
  {
    id: "go2",
    model: "Unitree Go2",
    tagline: "The Intelligent Companion",
    description: "The Go2 combines advanced AI with a lightweight, agile frame. Equipped with 4D LiDAR, it has a near-360° field of view, making it perfect for autonomous navigation, mapping, and security patrols.",
    specs: [
      { label: "Weight", value: "~15kg" },
      { label: "Sensors", value: "4D LiDAR L1" },
      { label: "AI", value: "Embodied AI" },
      { label: "Features", value: "Intelligent Side-follow System (ISS 2.0)" },
    ],
  },
];

const attachments: RobotProduct[] = [
  {
    id: "z1",
    model: "Z1 Robotic Arm",
    tagline: "Dexterous Manipulation",
    description: "Add a new level of capability to your quadruped robot. The Z1 arm provides 6-axis freedom of movement for tasks like opening doors, retrieving objects, and interacting with control panels.",
    specs: [
      { label: "Payload", value: "2kg - 3kg" },
    ],
  },
  {
    id: "l2",
    model: "L2 4D LiDAR",
    tagline: "Advanced 3D Perception",
    description: "Upgrade your robot's perception with this state-of-the-art 4D LiDAR sensor. It provides a 360° x 96° field of view for superior mapping, navigation, and obstacle avoidance in complex environments.",
    specs: [
      { label: "Range", value: "30m" },
    ],
  },
];

const ProductCard = ({ product, index }: { product: RobotProduct; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="h-full"
  >
    <div className="bg-card p-8 rounded-lg border border-gray-800 hover:border-secondary/50 transition-all hover:scale-[1.02] h-full flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-white">{product.model}</h3>
        <p className="text-secondary italic text-sm">{product.tagline}</p>
      </div>
      
      {/* Description */}
      <p className="text-gray-400 mb-6 flex-grow">
        {product.description}
      </p>
      
      {/* Specs as bullet points */}
      <ul className="space-y-2 mb-6">
        {product.specs.map((spec, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">
              <span className="font-medium">{spec.label}:</span> {spec.value}
            </span>
          </li>
        ))}
      </ul>
      
      {/* CTA Button */}
      <Button 
        className="w-full bg-secondary/20 hover:bg-secondary/30 text-white border border-secondary/50"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Request Quote
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </motion.div>
);

const RobotPlatformShowcase = () => {
  return (
    <Tabs defaultValue="humanoids" className="w-full">
      <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3 bg-background/50 border border-gray-800 mb-10">
        <TabsTrigger 
          value="humanoids" 
          className="data-[state=active]:bg-secondary data-[state=active]:text-white flex items-center gap-2"
        >
          <Bot className="w-4 h-4" />
          <span className="hidden sm:inline">Humanoids</span>
        </TabsTrigger>
        <TabsTrigger 
          value="quadrupeds" 
          className="data-[state=active]:bg-secondary data-[state=active]:text-white flex items-center gap-2"
        >
          <Dog className="w-4 h-4" />
          <span className="hidden sm:inline">Quadrupeds</span>
        </TabsTrigger>
        <TabsTrigger 
          value="attachments" 
          className="data-[state=active]:bg-secondary data-[state=active]:text-white flex items-center gap-2"
        >
          <Wrench className="w-4 h-4" />
          <span className="hidden sm:inline">Attachments</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="humanoids" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {humanoids.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="quadrupeds" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quadrupeds.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="attachments" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {attachments.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default RobotPlatformShowcase;
