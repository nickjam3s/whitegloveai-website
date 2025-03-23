
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
    alert('Your information has been submitted. We will contact you shortly.');
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
                className="mt-4"
              >
                Next
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
                variant="outline"
                className="border-[#444]"
              >
                Back
              </Button>
              <Button 
                type="button" 
                onClick={nextStep}
                disabled={!formData.lastName}
              >
                Next
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
                variant="outline"
                className="border-[#444]"
              >
                Back
              </Button>
              <Button 
                type="submit"
                disabled={!formData.email || !formData.companyName}
              >
                Submit
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default StepByStepForm;
