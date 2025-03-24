
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    educationLevel: '',
    resume: null as File | null,
    coverLetter: '',
    source: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast.success('Application submitted successfully! We will contact you soon.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        educationLevel: '',
        resume: null,
        coverLetter: '',
        source: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Apply Now
            </h3>
            <p className="text-gray-400">
              If you're ready to accelerate your career with cutting-edge AI skills, apply to our apprenticeship program. Our selection process is thorough and positions are limited, so we encourage qualified candidates to apply early.
            </p>
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-white">What We're Looking For:</h4>
              <ul className="space-y-2 list-disc list-inside text-gray-400">
                <li>Passion for AI technology and innovation</li>
                <li>Strong logical thinking and problem-solving abilities</li>
                <li>Bachelor's degree (or equivalent experience)</li>
                <li>Basic understanding of programming concepts</li>
                <li>Excellent communication skills</li>
                <li>Self-motivated learner willing to tackle challenges</li>
              </ul>
            </div>
          </div>

          <div className="bg-card/40 rounded-lg border border-border p-6 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="educationLevel">Highest Level of Education</Label>
                <select
                  id="educationLevel"
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-md bg-background border border-border text-foreground"
                  required
                >
                  <option value="">Select education level</option>
                  <option value="High School">High School</option>
                  <option value="Associate's">Associate's Degree</option>
                  <option value="Bachelor's">Bachelor's Degree</option>
                  <option value="Master's">Master's Degree</option>
                  <option value="PhD">PhD</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Resume/CV</Label>
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  onChange={handleFileChange}
                  className="bg-background border border-border text-foreground"
                  accept=".pdf,.doc,.docx"
                />
                <p className="text-xs text-gray-400">Upload PDF, DOC, or DOCX (max 5MB)</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  placeholder="Tell us why you're interested in this program and what you hope to gain"
                  rows={4}
                  className="bg-background border border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="source">How did you hear about us?</Label>
                <Input
                  id="source"
                  name="source"
                  value={formData.source}
                  onChange={handleInputChange}
                  placeholder="LinkedIn, referral, website, etc."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full py-6 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
