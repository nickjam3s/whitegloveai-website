import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  HardHat, 
  Building2, 
  Zap, 
  Flame,
  Siren,
  AlertTriangle,
  Wrench,
  Camera,
  ClipboardCheck,
  Lock,
  Package,
  ScanLine,
  Thermometer,
  Users,
  ShieldCheck,
  Droplets,
  Sun,
  Server,
  Cable
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Industry images
import governmentImage from '@/assets/robotics/industry-government.jpg';
import constructionImage from '@/assets/robotics/industry-construction.jpg';
import realEstateImage from '@/assets/robotics/industry-realestate.jpg';
import energyImage from '@/assets/robotics/industry-energy.jpg';

interface UseCase {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface IndustryContent {
  id: string;
  tabLabel: string;
  icon: React.ReactNode;
  headline: string;
  bodyCopy: string;
  useCases: UseCase[];
  image: string;
}

const industries: IndustryContent[] = [
  {
    id: 'government',
    tabLabel: 'Government & Public Safety',
    icon: <Shield className="h-5 w-5" />,
    headline: 'Augmenting Human Potential, Enhancing Citizen Safety',
    bodyCopy: 'In high-stakes environments, robotics provides a critical advantage. By sending an autonomous or remotely operated robot into harm\'s way, agencies can gather crucial intelligence, perform tasks, and manage incidents without risking human lives. Our secure, managed platforms are designed for the rigors of public service.',
    useCases: [
      {
        title: 'Fire Departments',
        description: 'Conduct HazMat reconnaissance, perform search and rescue in unstable structures, and provide real-time thermal imaging from inside active fire scenes.',
        icon: <Flame className="h-5 w-5 text-secondary" />
      },
      {
        title: 'Police & SWAT',
        description: 'Serve as a forward scout in hostage situations, inspect suspicious packages, and patrol large perimeters or critical infrastructure.',
        icon: <Siren className="h-5 w-5 text-secondary" />
      },
      {
        title: 'Emergency Management',
        description: 'Assess damage after natural disasters, map inaccessible areas, and deliver critical supplies to stranded individuals.',
        icon: <AlertTriangle className="h-5 w-5 text-secondary" />
      },
      {
        title: 'Public Works',
        description: 'Inspect culverts, sewer lines, and other infrastructure that is difficult or dangerous for humans to access.',
        icon: <Wrench className="h-5 w-5 text-secondary" />
      }
    ],
    image: governmentImage
  },
  {
    id: 'construction',
    tabLabel: 'Construction',
    icon: <HardHat className="h-5 w-5" />,
    headline: 'Building Smarter, Safer, and More Efficiently',
    bodyCopy: 'The modern construction site is a complex, dynamic environment. Robotics can automate routine data collection, monitor progress, and enhance worker safety, leading to more predictable timelines and budgets.',
    useCases: [
      {
        title: 'Site Progress Monitoring',
        description: 'Autonomously patrol sites daily to capture 3D scans (using LiDAR attachments), creating a digital twin to track progress against BIM models.',
        icon: <Camera className="h-5 w-5 text-secondary" />
      },
      {
        title: 'Quality Control',
        description: 'Use high-resolution cameras to inspect welds, concrete pours, and MEP installations, flagging potential issues early.',
        icon: <ClipboardCheck className="h-5 w-5 text-secondary" />
      },
      {
        title: 'Safety & Security',
        description: 'Patrol sites after hours to detect unauthorized entry or unsafe conditions, providing a 24/7 security presence.',
        icon: <Lock className="h-5 w-5 text-secondary" />
      },
      {
        title: 'Asset & Material Tracking',
        description: 'Scan and inventory materials and equipment on-site, reducing loss and improving logistics.',
        icon: <Package className="h-5 w-5 text-secondary" />
      }
    ],
    image: constructionImage
  },
  {
    id: 'real-estate',
    tabLabel: 'Commercial Real Estate',
    icon: <Building2 className="h-5 w-5" />,
    headline: 'Intelligent Operations for Modern Properties',
    bodyCopy: 'Managing large commercial properties requires constant vigilance. Robotic platforms can automate inspections, enhance security, and provide valuable data for property managers, ensuring a safer and more efficient environment for tenants.',
    useCases: [
      {
        title: 'Facade & Roof Inspections',
        description: 'Autonomously inspect building exteriors for damage, water intrusion, or maintenance needs without the cost and risk of manual inspections.',
        icon: <ScanLine className="h-5 w-5 text-secondary" />
      },
      {
        title: 'MEP & HVAC Audits',
        description: 'Use thermal cameras to identify leaks, inefficiencies, or failing equipment in mechanical rooms and along utility lines.',
        icon: <Thermometer className="h-5 w-5 text-secondary" />
      },
      {
        title: 'Tenant Experience',
        description: 'Deploy humanoid robots as interactive concierges in lobbies to provide information, wayfinding, and a futuristic tenant amenity.',
        icon: <Users className="h-5 w-5 text-secondary" />
      },
      {
        title: 'Security Patrols',
        description: 'Augment human guard forces with autonomous patrols of parking garages, common areas, and perimeters.',
        icon: <ShieldCheck className="h-5 w-5 text-secondary" />
      }
    ],
    image: realEstateImage
  },
  {
    id: 'energy',
    tabLabel: 'Energy',
    icon: <Zap className="h-5 w-5" />,
    headline: 'Powering the Future with Autonomous Asset Management',
    bodyCopy: 'The energy sector operates some of the world\'s most critical and hazardous infrastructure. From oil and gas refineries to sprawling solar farms and secure data centers, robotics is essential for safe and efficient inspection, maintenance, and operations.',
    useCases: [
      {
        title: 'Oil & Gas',
        description: 'Perform leak detection (with gas sensors), inspect pipelines, and monitor equipment in potentially explosive or toxic environments.',
        icon: <Droplets className="h-5 w-5 text-secondary" />
      },
      {
        title: 'Solar & Wind',
        description: 'Autonomously inspect thousands of solar panels or wind turbine bases for damage or defects, dramatically reducing inspection time.',
        icon: <Sun className="h-5 w-5 text-secondary" />
      },
      {
        title: 'Data Centers',
        description: 'Conduct routine thermal scans of server racks to identify hotspots, monitor for unauthorized access, and ensure operational uptime.',
        icon: <Server className="h-5 w-5 text-secondary" />
      },
      {
        title: 'Utilities',
        description: 'Patrol substations and power lines to read gauges, inspect equipment, and identify vegetation encroachment.',
        icon: <Cable className="h-5 w-5 text-secondary" />
      }
    ],
    image: energyImage
  }
];

const IndustryUseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState('government');

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      {/* Tab Navigation */}
      <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
        {industries.map((industry) => (
          <TabsTrigger
            key={industry.id}
            value={industry.id}
            className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-700 
                       data-[state=active]:bg-secondary data-[state=active]:text-white data-[state=active]:border-secondary
                       data-[state=inactive]:bg-background/50 data-[state=inactive]:text-gray-400
                       hover:border-secondary/50 transition-all duration-300"
          >
            {industry.icon}
            <span className="hidden sm:inline">{industry.tabLabel}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tab Content */}
      {industries.map((industry) => (
          <TabsContent key={industry.id} value={industry.id} className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8"
            >
              {/* Media - Top (Centered) */}
              <div className="flex justify-center">
                <div className="w-full max-w-3xl aspect-video rounded-lg border border-secondary/30 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.headline}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content - Full Width */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-white text-center">
                  {industry.headline}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                  {industry.bodyCopy}
                </p>

                {/* Use Cases List - 2 columns on desktop */}
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {industry.useCases.map((useCase, index) => (
                    <motion.div
                      key={useCase.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 p-4 rounded-lg bg-background/50 border border-gray-800 hover:border-secondary/50 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {useCase.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {useCase.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {useCase.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </TabsContent>
        ))}
    </Tabs>
  );
};

export default IndustryUseCases;
