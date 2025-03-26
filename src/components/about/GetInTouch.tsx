
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";

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
    toast.success('Message sent! We will get back to you soon.');
  };

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="pt-24 pb-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
        Get in <span className="text-[#7021EE]">Touch</span>
      </h2>

      <div className="max-w-xl mx-auto">
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
              <Button type="submit" className="w-full py-6 text-lg relative">
                <span className="relative z-10">
                  Submit
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default GetInTouch;
