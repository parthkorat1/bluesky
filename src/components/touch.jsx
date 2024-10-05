"use client";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {  Globe,  Zap, Sparkles} from "lucide-react";
import axios from "axios";
import { motion } from 'framer-motion'

import { useToast } from "@/hooks/use-toast"

import SmallWhiteParticles from "./rectengle";




export default function Touch() {
  // State to hold form data, including phone
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Add phone to the formData state
    message: "",
  });

  // Handler to update form data
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // dynamically update state based on input name
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submission behavior
    console.log("Form Data:", formData); // log the form data to the console

    try {
      const upload = await axios.post('api/touch', formData);
      console.log("Form data uploaded successfully:", upload.data);

      if (upload) {
        setFormData({
          name: "",
          email: "",
          phone: "", // Reset phone to empty string after form submission
          message: "",
        });
        toast({
          title: "Message sent successfully",
          description: "we connect with you soon....",
        })
      }
    } catch (error) {
      console.log("Error while upload form data:", error);
      toast({
        title: "Something went wrong",
        description: "Plese try angain carefully....",
      })

    }
  };

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 relative bg-gradient-to-br bg-sky-400 overflow-hidden"
    >
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-white opacity-10"
        style={{ top: '10%', right: '5%' }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-white opacity-10"
        style={{ bottom: '10%', right: '10%' }}
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse' }}
      />
      
      <SmallWhiteParticles />
      <div className="container px-4 md:px-6 mx-auto relative  z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ready to transform your business? Reach out to us and let &apos s create something amazing together.
            </p>
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>Global Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>Expert Consultation</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full  max-w-md">
            <form onSubmit={handleSubmit} className="space-y-4 bg-sky-100 dark:bg-gray-800 p-8 rounded-lg shadow-xl">
              <Input
                name="name"
                placeholder="Your Name"
                className="border-primary/20 focus:border-primary"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border-primary/20 focus:border-primary"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                type="tel" // Set input type to "tel" for phone number
                name="phone"
                placeholder="Your Phone Number"
                className="border-primary/20 focus:border-primary"
                value={formData.phone}
                onChange={handleChange}
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                className="min-h-[100px] border-primary/20 focus:border-primary"
                value={formData.message}
                onChange={handleChange}
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
