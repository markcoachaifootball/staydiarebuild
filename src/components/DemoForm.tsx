
import React from 'react';
import { useToast } from "@/hooks/use-toast";
import WhatsAppContactSection from './forms/WhatsAppContactSection';
import DemoRequestForm from './forms/DemoRequestForm';
import * as z from "zod";

const formSchema = z.object({
  clubName: z.string().min(2, "Club name must be at least 2 characters"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const DemoForm = () => {
  const { toast } = useToast();

  const handleFormSubmit = async (data: FormData) => {
    try {
      // Create a formatted email body
      const emailBody = `
        Club/League Name: ${data.clubName}
        Contact Name: ${data.contactName}
        Email: ${data.email}
        Phone: ${data.phone}
        Message: ${data.message || 'No additional information provided'}
      `;

      // Update to use info@staydiasports.com as recipient
      const response = await fetch("https://formsubmit.co/info@staydiasports.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: data.contactName,
          email: data.email,
          message: emailBody,
          _subject: `Demo Request from ${data.clubName}`,
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your demo request has been sent. We'll be in touch soon.",
        });
      } else {
        throw new Error("Server responded with an error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-black mb-2">Book Demo</h2>
        <p className="text-gray-600">Fill in your details below to request a demo</p>
      </div>
      
      <WhatsAppContactSection />
      <DemoRequestForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default DemoForm;
