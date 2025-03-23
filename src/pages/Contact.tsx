
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you shortly.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen pt-24 bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[10%] bg-[radial-gradient(circle_at_50%_50%,#7021EE,transparent_60%)] opacity-20" 
          style={{
            transformOrigin: '60% 40%',
            animation: 'morphing 12s ease-in-out infinite, rotating 15s linear infinite'
          }}
        />
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>
      
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl font-semibold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get in <span className="text-[#7021EE]">Touch</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to transform your business with AI? We're here to help.
              Contact us to discuss your needs and discover how we can help you succeed.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card p-8">
                <h2 className="text-2xl font-semibold mb-6 text-white">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-[#7021EE]/20 text-[#7021EE]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Visit Us</h3>
                      <p className="text-gray-400">
                        5 Cowboys Way, Suite 300<br />
                        Frisco, TX 75034
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-[#7021EE]/20 text-[#7021EE]">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Email Us</h3>
                      <a 
                        href="mailto:workwith@whitegloveai.com" 
                        className="text-gray-400 hover:text-[#7021EE] transition-colors"
                      >
                        workwith@whitegloveai.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-[#7021EE]/20 text-[#7021EE]">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Call Us</h3>
                      <a 
                        href="tel:+14692099907" 
                        className="text-gray-400 hover:text-[#7021EE] transition-colors"
                      >
                        +1-469-209-9907
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="overflow-hidden border-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.536268039456!2d-96.84199752422122!3d33.0974300760351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3cb3b5c12fb9%3A0x552c807f3c812ed8!2s5%20Cowboys%20Way%2C%20Frisco%2C%20TX%2075034!5e0!3m2!1sen!2sus!4v1715201236404!5m2!1sen!2sus" 
                  width="100%" 
                  height="250" 
                  className="border-0" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="WhitegloveAI office location"
                />
              </Card>
            </motion.div>

            <motion.div 
              className="glass-card p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-white">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-black/40 border-[#333333] focus-visible:ring-[#7021EE] focus-visible:border-[#7021EE]"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="bg-black/40 border-[#333333] focus-visible:ring-[#7021EE] focus-visible:border-[#7021EE]"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="bg-black/40 border-[#333333] focus-visible:ring-[#7021EE] focus-visible:border-[#7021EE]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    className="bg-black/40 border-[#333333] focus-visible:ring-[#7021EE] focus-visible:border-[#7021EE] resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section 
        className="relative py-16 px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            Want to join our team?
          </h2>
          <p className="text-gray-400 mb-8">
            We're always looking for talented individuals to join our growing team. Check out our
            current openings and apply today!
          </p>
          <Button asChild size="lg">
            <a href="/about/apprentice" className="px-8">
              View Opportunities
            </a>
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
