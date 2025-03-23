
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, CalendarDays, Users, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section - Similar to About page */}
      <section className="w-full relative overflow-hidden bg-black">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute h-full w-full bg-gradient-radial from-[#7021EE]/20 to-transparent opacity-50"></div>
          <div className="absolute h-full w-full bg-gradient-to-b from-black/0 via-black/0 to-black"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32 lg:py-40 flex flex-col items-start">
          {/* Pre-heading badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-[#7021EE]/30 bg-[#7021EE]/10 px-4 py-1.5 text-xs md:text-sm font-medium text-[#7021EE] mb-8"
          >
            Contact Lovable AI
          </motion.div>
          
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mb-6"
          >
            Get in <span className="text-[#7021EE]">Touch</span> with our team
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mb-12"
          >
            Ready to transform your business with AI? We're here to help.
            Contact us to discuss your needs and discover how we can help you succeed.
          </motion.p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
              
              {/* New section: Business Hours */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-semibold mb-6 text-white">Business Hours</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-[#7021EE]/20 text-[#7021EE]">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Weekdays</h3>
                      <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM CST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-[#7021EE]/20 text-[#7021EE]">
                      <CalendarDays size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Weekends</h3>
                      <p className="text-gray-400">By appointment only</p>
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
                  title="Lovable AI office location"
                />
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card p-8 mb-8">
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
              </div>
              
              {/* New section: FAQ */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-semibold mb-6 text-white">
                  <span className="flex items-center">
                    <Sparkles className="mr-2 text-[#7021EE]" size={20} />
                    Frequently Asked Questions
                  </span>
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">What services do you offer?</h3>
                    <p className="text-gray-400">
                      We offer a comprehensive suite of AI solutions including virtual CAIO services, 
                      AI implementation, and custom AI development for businesses of all sizes.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">How quickly can you respond to inquiries?</h3>
                    <p className="text-gray-400">
                      We typically respond to all inquiries within 24 business hours. For urgent matters, 
                      please call our office directly.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Do you offer consultations?</h3>
                    <p className="text-gray-400">
                      Yes, we offer initial consultations to understand your needs and determine how our 
                      AI solutions can best serve your business goals.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New section: Our Team */}
      <motion.section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#0c0318]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Meet Our <span className="text-[#7021EE]">Team</span></h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our experts are ready to help you navigate the world of AI innovation and implementation.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <motion.div 
            className="glass-card p-6 text-center"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-[#7021EE]/20 flex items-center justify-center">
                <Users size={40} className="text-[#7021EE]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Strategy Team</h3>
            <p className="text-gray-400 mb-4">
              Our strategists help businesses identify opportunities for AI integration and develop roadmaps for implementation.
            </p>
            <Link to="/about" className="text-[#7021EE] hover:text-[#9b69f8] transition-colors">
              Meet the strategists →
            </Link>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 text-center"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-[#7021EE]/20 flex items-center justify-center">
                <Users size={40} className="text-[#7021EE]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Development Team</h3>
            <p className="text-gray-400 mb-4">
              Our developers build custom AI solutions tailored to your specific business needs and objectives.
            </p>
            <Link to="/about" className="text-[#7021EE] hover:text-[#9b69f8] transition-colors">
              Meet the developers →
            </Link>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 text-center sm:col-span-2 lg:col-span-1"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-[#7021EE]/20 flex items-center justify-center">
                <Users size={40} className="text-[#7021EE]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Implementation Team</h3>
            <p className="text-gray-400 mb-4">
              Our implementation experts ensure smooth integration of AI solutions into your existing business processes.
            </p>
            <Link to="/about" className="text-[#7021EE] hover:text-[#9b69f8] transition-colors">
              Meet the experts →
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Career CTA Section - Similar to About page CTA */}
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
          <Link to="/about/apprentice">
            <Button size="lg" className="px-8">
              View Opportunities
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
