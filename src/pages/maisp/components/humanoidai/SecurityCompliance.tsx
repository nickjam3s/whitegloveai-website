
import { ShieldCheck, Users, Brain, ClipboardList } from "lucide-react";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "ISO 27001",
    description: "Internationally recognized information security standard ensuring systematic management of sensitive company and customer data. Our certification demonstrates our commitment to protecting your information assets."
  },
  {
    icon: Users,
    title: "GDPR",
    description: "Full compliance with European Union's General Data Protection Regulation, giving you complete control over your personal data. We implement strict data handling procedures and maintain transparent data processing practices."
  },
  {
    icon: Brain,
    title: "Encrypted Communication",
    description: "State-of-the-art encryption protocols protect all data transmissions and storage. We use industry-leading encryption standards to ensure your sensitive information remains confidential and secure at all times."
  },
  {
    icon: ClipboardList,
    title: "Compliance Audits",
    description: "Regular third-party audits verify our adherence to security protocols and compliance standards. We conduct quarterly internal reviews and annual external audits to maintain the highest level of security assurance."
  }
];

const SecurityCompliance = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-16 text-center heading-highlight-scroll">
          Security and Compliance
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-background/50 p-6 rounded-lg border border-gray-800">
              <div className="flex items-start">
                <feature.icon className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
