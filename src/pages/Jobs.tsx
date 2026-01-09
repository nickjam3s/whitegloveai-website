import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Brain, Sparkles, Users, Target, Lightbulb, Briefcase, GraduationCap, ArrowRight, Upload, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import PageWrapper from '@/components/layout/PageWrapper';
import SEO from '@/components/SEO';
import { supabase } from '@/integrations/supabase/client';

const benefits = [
  {
    title: "Cutting-Edge Technology",
    description: "Work with the latest AI technologies and tools, staying at the forefront of innovation.",
    icon: Sparkles
  },
  {
    title: "Growth & Learning",
    description: "Continuous learning opportunities with mentorship from industry veterans.",
    icon: Lightbulb
  },
  {
    title: "Collaborative Culture",
    description: "Join a team that values collaboration, diverse perspectives, and innovative thinking.",
    icon: Users
  },
  {
    title: "Meaningful Impact",
    description: "Solve real business challenges and see your work make a tangible difference.",
    icon: Target
  },
  {
    title: "Ethical AI Focus",
    description: "Be part of a company committed to responsible and secure AI development.",
    icon: Brain
  },
  {
    title: "Flexible Work",
    description: "Enjoy a modern hybrid work model that prioritizes flexibility and work-life balance.",
    icon: Shield
  }
];

const openPositions = [
  {
    title: "Apprenticeship Program",
    description: "6-month foundational program for aspiring AI professionals. Unpaid with opportunity for paid positions based on performance.",
    type: "Apprenticeship",
    link: "/about-us/apprenticeship",
    icon: GraduationCap
  },
  {
    title: "Internship Program",
    description: "Year-round internship for students seeking real-world AI experience. Paid hourly on 1099.",
    type: "Internship",
    link: "/about-us/internship",
    icon: Briefcase
  }
];

const Jobs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    positionInterest: '',
    message: ''
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 10MB.",
          variant: "destructive"
        });
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and email.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let resumeUrl = '';
      
      // Upload resume if provided
      if (resumeFile) {
        const fileExt = resumeFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `job-applications/${fileName}`;
        
        const { error: uploadError, data: uploadData } = await supabase.storage
          .from('resumes')
          .upload(filePath, resumeFile);
        
        if (uploadError) {
          throw new Error('Failed to upload resume: ' + uploadError.message);
        }
        
        const { data: publicUrlData } = supabase.storage
          .from('resumes')
          .getPublicUrl(filePath);
        
        resumeUrl = publicUrlData.publicUrl;
      }

      // Send application email
      const { error } = await supabase.functions.invoke('send-job-application', {
        body: {
          ...formData,
          resumeUrl
        }
      });

      if (error) throw error;

      toast({
        title: "Application submitted!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        positionInterest: '',
        message: ''
      });
      setResumeFile(null);
      
      // Reset file input
      const fileInput = document.getElementById('resume') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error: any) {
      console.error('Error submitting application:', error);
      toast({
        title: "Submission failed",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans font-sora">
      <SEO
        title="Careers at WhitegloveAI | Join Our AI Team"
        description="Join WhitegloveAI and help shape the future of AI. Explore internships, apprenticeships, and career opportunities in enterprise AI."
        canonicalPath="/about-us/jobs"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7021EE]/30 via-[#7021EE]/10 to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(112, 33, 238, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(112, 33, 238, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#7021EE]/20 border border-[#7021EE]/40 text-[#9b4dff] text-sm font-medium tracking-wide uppercase">
              Join Our Team
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Build the Future of </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7021EE] to-[#9b4dff]">
              AI With Us
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            At WhitegloveAI, we're pioneering AI-driven transformations. Join a team that values innovation, 
            collaboration, and making a real impact in the world of enterprise AI.
          </motion.p>
        </div>
      </section>

      <PageWrapper>
        {/* Why Work With Us */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Why Work at <span className="text-[#7021EE]">WhitegloveAI</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-xl bg-gradient-to-br from-[#7021EE]/10 to-transparent border border-[#7021EE]/20 hover:border-[#7021EE]/40 transition-all duration-300"
              >
                <benefit.icon className="h-8 w-8 text-[#7021EE] mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Open Positions */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Open Opportunities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={position.link}
                  className="block p-8 rounded-xl bg-[#7021EE]/10 border border-[#7021EE]/30 hover:border-[#7021EE] transition-all duration-300 group h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#7021EE]/20">
                      <position.icon className="h-8 w-8 text-[#7021EE]" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium text-[#9b4dff] uppercase tracking-wider">
                        {position.type}
                      </span>
                      <h3 className="text-xl font-semibold text-white mt-1 mb-2 group-hover:text-[#7021EE] transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {position.description}
                      </p>
                      <span className="inline-flex items-center text-[#7021EE] font-medium text-sm group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="h-4 w-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* General Application Form */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-16"
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Don't See Your Role?
              </h2>
              <p className="text-gray-400 text-lg">
                We're always looking for talented individuals. Submit your resume and tell us how you'd like to contribute to WhitegloveAI.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-[#7021EE]/5 border border-[#7021EE]/20 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-white">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="mt-2 bg-black/50 border-[#7021EE]/30 text-white"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="mt-2 bg-black/50 border-[#7021EE]/30 text-white"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-white">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    className="mt-2 bg-black/50 border-[#7021EE]/30 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="positionInterest" className="text-white">Position of Interest</Label>
                  <Input
                    id="positionInterest"
                    name="positionInterest"
                    type="text"
                    value={formData.positionInterest}
                    onChange={handleInputChange}
                    placeholder="e.g., Full-time AI Engineer"
                    className="mt-2 bg-black/50 border-[#7021EE]/30 text-white"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-white">Tell us about yourself</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share your background, skills, and what excites you about working at WhitegloveAI..."
                  rows={5}
                  className="mt-2 bg-black/50 border-[#7021EE]/30 text-white resize-none"
                />
              </div>

              <div>
                <Label htmlFor="resume" className="text-white">Upload Resume</Label>
                <div className="mt-2 flex items-center gap-4">
                  <label
                    htmlFor="resume"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg border border-dashed border-[#7021EE]/50 bg-black/30 cursor-pointer hover:border-[#7021EE] transition-colors flex-1"
                  >
                    <Upload className="h-5 w-5 text-[#7021EE]" />
                    <span className="text-gray-400">
                      {resumeFile ? resumeFile.name : 'Choose file (PDF, DOC, DOCX - Max 10MB)'}
                    </span>
                  </label>
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7021EE] hover:bg-[#5a1ab8] text-white py-6 text-lg font-semibold rounded-full shadow-lg shadow-[#7021EE]/30 hover:shadow-[#7021EE]/50 transition-all duration-300"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.section>
      </PageWrapper>
    </div>
  );
};

export default Jobs;
