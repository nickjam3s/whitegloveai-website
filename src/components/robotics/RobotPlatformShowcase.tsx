import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Dog, Wrench } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

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
  >
    <Card className="bg-card/50 border-gray-800 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] h-full">
      <CardContent className="p-0">
        {/* Image Placeholder */}
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border-b border-gray-800">
          <div className="text-center text-muted-foreground">
            <Bot className="w-16 h-16 mx-auto mb-2 opacity-30" />
            <p className="text-sm">Image Coming Soon</p>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">{product.model}</h3>
            <p className="text-primary italic text-sm">{product.tagline}</p>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {product.description}
          </p>
          
          {/* Specs Table */}
          <div className="pt-2">
            <Table>
              <TableBody>
                {product.specs.map((spec, i) => (
                  <TableRow key={i} className="border-gray-800">
                    <TableCell className="py-2 px-0 text-muted-foreground font-medium text-sm">
                      {spec.label}
                    </TableCell>
                    <TableCell className="py-2 px-0 text-foreground text-right text-sm">
                      {spec.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const RobotPlatformShowcase = () => {
  return (
    <Tabs defaultValue="humanoids" className="w-full">
      <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3 bg-background/50 border border-gray-800 mb-10">
        <TabsTrigger 
          value="humanoids" 
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
        >
          <Bot className="w-4 h-4" />
          <span className="hidden sm:inline">Humanoids</span>
        </TabsTrigger>
        <TabsTrigger 
          value="quadrupeds" 
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
        >
          <Dog className="w-4 h-4" />
          <span className="hidden sm:inline">Quadrupeds</span>
        </TabsTrigger>
        <TabsTrigger 
          value="attachments" 
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
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
