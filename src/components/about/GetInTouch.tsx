
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const GetInTouch: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="pt-24 pb-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
        Get in <span className="text-[#7021EE]">Touch</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <p className="text-gray-400 mb-2 uppercase tracking-wide text-sm">Office</p>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-[#7021EE] mt-1" />
              <p className="text-xl text-white font-medium">
                5 Cowboys Way, Suite 300<br />
                Frisco, TX 75034
              </p>
            </div>
          </div>

          <Separator className="bg-[#333333] my-4" />

          <div>
            <p className="text-gray-400 mb-2 uppercase tracking-wide text-sm">Email</p>
            <a 
              href="mailto:workwith@whitegloveai.com" 
              className="text-xl text-white font-medium flex items-center gap-2 hover:text-[#7021EE] transition-colors group contact-link"
            >
              <Mail className="w-5 h-5 text-[#7021EE]" />
              workwith@whitegloveai.com
              <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </a>
          </div>

          <Separator className="bg-[#333333] my-4" />

          <div>
            <p className="text-gray-400 mb-2 uppercase tracking-wide text-sm">Phone</p>
            <a 
              href="tel:+14692099907" 
              className="text-xl text-white font-medium flex items-center gap-2 hover:text-[#7021EE] transition-colors group contact-link"
            >
              <Phone className="w-5 h-5 text-[#7021EE]" />
              +1-469-209-9907
              <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </a>
          </div>

          <Separator className="bg-[#333333] my-4" />

          <div>
            <p className="text-gray-400 mb-2 uppercase tracking-wide text-sm">Follow WhitegloveAI</p>
            <a 
              href="https://www.linkedin.com/company/whitegloveai/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white font-medium flex items-center gap-2 hover:text-[#7021EE] transition-colors group contact-link"
            >
              <Linkedin className="w-5 h-5 text-[#7021EE]" />
              LinkedIn
              <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#111111]/70 rounded-xl p-8 border border-[#333333]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-4 bg-black/60 border border-[#333333] rounded-md text-white focus:outline-none focus:border-[#7021EE] transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-4 bg-black/60 border border-[#333333] rounded-md text-white focus:outline-none focus:border-[#7021EE] transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={6}
                className="w-full p-4 bg-black/60 border border-[#333333] rounded-md text-white focus:outline-none focus:border-[#7021EE] transition-colors resize-none"
              />
            </div>
            <div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default GetInTouch;
