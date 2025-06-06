
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const StepByStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    toast.success('Your information has been submitted. We will contact you shortly.');
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      message: ''
    });
    setStep(1);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
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
            <div className="flex justify-end mt-6">
              <Button 
                type="button" 
                onClick={nextStep}
                disabled={!formData.firstName}
                className={`px-6 py-2 text-base font-medium ${formData.firstName ? '' : 'opacity-50 cursor-not-allowed'}`}
              >
                <span className="relative z-20">Next</span>
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
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
            <div className="flex justify-between mt-6">
              <Button 
                type="button" 
                onClick={prevStep}
                className="px-6 py-2 text-base font-medium"
                variant="outline"
              >
                <span className="relative z-20">Back</span>
              </Button>
              <Button 
                type="button" 
                onClick={nextStep}
                disabled={!formData.lastName}
                className={`px-6 py-2 text-base font-medium ${formData.lastName ? '' : 'opacity-50 cursor-not-allowed'}`}
              >
                <span className="relative z-20">Next</span>
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
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
            
            <Label htmlFor="companyName" className="text-white text-lg mt-6">Company Name</Label>
            <Input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="bg-[#222] border-[#444] text-white"
              placeholder="Enter your company name"
              required
            />
            
            <Label htmlFor="message" className="text-white text-lg mt-6">Additional Information</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-[#222] border-[#444] text-white min-h-[100px]"
              placeholder="Share any specific requirements or questions you have"
            />
            
            <div className="flex justify-between mt-6">
              <Button 
                type="button" 
                onClick={prevStep}
                className="px-6 py-2 text-base font-medium"
                variant="outline"
              >
                <span className="relative z-20">Back</span>
              </Button>
              <Button 
                type="submit"
                disabled={!formData.email || !formData.companyName}
                className={`px-6 py-2 text-base font-medium ${(!formData.email || !formData.companyName) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span className="relative z-20">Submit</span>
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default StepByStepForm;
