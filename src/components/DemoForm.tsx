
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  clubName: z.string().min(2, "Club name must be at least 2 characters"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().optional(),
});

const DemoForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clubName: "",
      contactName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
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
        
        form.reset();
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
  
  const handleWhatsAppClick = () => {
    const phoneNumber = "353861935525"; // Irish number format without +
    const message = encodeURIComponent("Hi, I'm interested in learning more about Staydia Sports.");
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Form {...form}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-black mb-2">Book Demo</h2>
        <p className="text-gray-600">Fill in your details below to request a demo</p>
      </div>
      
      {/* WhatsApp Option */}
      <div className="mb-6 p-4 bg-green-600/10 border border-green-600/30 rounded-lg">
        <h3 className="text-lg font-semibold text-green-600 mb-2">Quick Response via WhatsApp</h3>
        <p className="text-gray-700 mb-3">For immediate assistance, chat directly with our team</p>
        <Button 
          onClick={handleWhatsAppClick}
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white mb-4"
          type="button"
        >
          <MessageCircle className="h-5 w-5" />
          Contact via WhatsApp
        </Button>
        <p className="text-sm text-gray-600 text-center">or fill in the form below</p>
      </div>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="clubName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Club/League Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter your club or league name" 
                  {...field}
                  className="text-black placeholder:text-gray-400" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Contact Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your name" 
                  {...field} 
                  className="text-black placeholder:text-gray-400"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Email</FormLabel>
              <FormControl>
                <Input 
                  placeholder="your@email.com" 
                  type="email" 
                  {...field}
                  className="text-black placeholder:text-gray-400"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Phone Number</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your phone number" 
                  type="tel" 
                  {...field}
                  className="text-black placeholder:text-gray-400"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Additional Information</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us more about your club/league..." 
                  {...field}
                  className="text-black placeholder:text-gray-400"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-staydia-gold text-staydia-black hover:bg-opacity-90 py-6 text-lg font-medium shadow-md"
        >
          Submit Demo Request
        </Button>
      </form>
    </Form>
  );
};

export default DemoForm;
