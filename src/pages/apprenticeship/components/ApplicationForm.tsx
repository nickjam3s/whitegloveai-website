
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft } from 'lucide-react';

const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: ''
  });

  const totalSteps = 4;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Application submitted successfully!');
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: ''
    });
    setStep(1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <Label htmlFor="firstName" className="text-white text-lg">What's your first name?</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-[#222] border-[#444] text-white"
              placeholder="Enter your first name"
              required
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <Label htmlFor="lastName" className="text-white text-lg">What's your last name?</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-[#222] border-[#444] text-white"
              placeholder="Enter your last name"
              required
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <Label htmlFor="email" className="text-white text-lg">What's your email address?</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#222] border-[#444] text-white"
              placeholder="Enter your email address"
              required
            />
            <Label htmlFor="phone" className="text-white text-lg mt-4">What's your phone number?</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="bg-[#222] border-[#444] text-white"
              placeholder="Enter your phone number"
            />
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <Label htmlFor="experience" className="text-white text-lg">Tell us about your experience with AI</Label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full h-32 bg-[#222] border-[#444] text-white rounded-md p-3 resize-none"
              placeholder="Share your background, interests, and why you want to join our apprenticeship"
              required
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Apply for the Apprenticeship
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Fill out this short form to get started with your application. We'll collect some basic information to help us understand your background and interests.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-[#111] rounded-lg overflow-hidden border border-[#333]"
        >
          <form onSubmit={handleSubmit}>
            <div className="p-8 bg-[#0F0F0F]">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-semibold text-white">Step {step} of {totalSteps}</h3>
                  <div className="flex space-x-2">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-2 w-2 rounded-full ${i + 1 === step ? 'bg-[#7021EE]' : i + 1 < step ? 'bg-green-500' : 'bg-gray-600'}`} 
                      />
                    ))}
                  </div>
                </div>
                {renderStep()}
              </div>
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <Button 
                    type="button" 
                    onClick={prevStep} 
                    variant="outline" 
                    className="flex items-center justify-center border-[#444]"
                  >
                    <span><ArrowLeft className="mr-2 h-4 w-4" /> Back</span>
                  </Button>
                )}
                <div className="ml-auto">
                  {step < totalSteps ? (
                    <Button 
                      type="button" 
                      onClick={nextStep} 
                      className="flex items-center justify-center"
                      disabled={
                        (step === 1 && !formData.firstName) || 
                        (step === 2 && !formData.lastName) || 
                        (step === 3 && !formData.email)
                      }
                    >
                      <span>Next <ArrowRight className="ml-2 h-4 w-4" /></span>
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      className="flex items-center justify-center"
                      disabled={!formData.experience}
                    >
                      <span>Submit Application</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationForm;
