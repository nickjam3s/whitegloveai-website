import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
  phone: z.string().optional(),
  services: z.string().min(1, { message: "Please select a service" }),
  message: z.string().optional(),
  consent: z.boolean().refine(val => val === true, {
    message: "You must agree to be contacted",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      services: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulating form submission
      console.log("Form submitted:", data);
      
      // Show success toast
      toast({
        title: "Form submitted successfully",
        description: "We'll be in touch shortly!",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error submitting form",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Contact Us</h2>
        <p className="text-lg mb-6 text-gray-200">
          Ready to transform your organization's AI journey? Contact us today to schedule a personalized consultation where we'll discuss your specific needs and demonstrate how WhitegloveAI can help you implement AI solutions securely and effectively.
        </p>
        <p className="text-lg mb-10 text-gray-200">
          Our team of experts is ready to guide you through every step of the AI adoption process, from initial assessment to full implementation. Let's work together to unlock the power of AI while ensuring compliance and security remain top priorities.
        </p>
        
        <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800">
          <h3 className="text-xl font-semibold mb-6 text-white">Get in Touch</h3>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-background text-white border-gray-700" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@company.com" {...field} className="bg-background text-white border-gray-700" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company" {...field} className="bg-background text-white border-gray-700" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 123-4567" {...field} className="bg-background text-white border-gray-700" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Which vCAIO Services are you interested in?</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-background text-white border-gray-700">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-background border-gray-700">
                        <SelectItem value="ai-launchpad" className="text-white">AI Launchpad Workshop</SelectItem>
                        <SelectItem value="ai-enablement" className="text-white">AI Enablement</SelectItem>
                        <SelectItem value="ai-adoption" className="text-white">AI Adoption</SelectItem>
                        <SelectItem value="ai-security" className="text-white">AI Security & Compliance</SelectItem>
                        <SelectItem value="ai-strategy" className="text-white">AI Strategy Consulting</SelectItem>
                        <SelectItem value="other" className="text-white">Other Services</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your AI needs and challenges..." 
                        className="min-h-32 bg-background text-white border-gray-700" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-white">
                        I agree to be contacted regarding my inquiry
                      </FormLabel>
                    </div>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
