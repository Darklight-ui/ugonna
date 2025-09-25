"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TitleHeader from "@/components/TitleHeader";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 pt-24 pb-16">
      <Header />
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <TitleHeader title="Get In Touch" sub=" Let's work together on your next project" />
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-neutral-600 mr-3" size={20} />
                <span className="text-gray-600 dark:text-gray-400">
                  ogankpaugo@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="text-neutral-600 mr-3" size={20} />
                <span className="text-gray-600 dark:text-gray-400">
                  +234 (818) 015 7032
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-neutral-600 mr-3" size={20} />
                <span className="text-gray-600 dark:text-gray-400">
                  FCT, Abuja. Nigeria
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a href="https://github.com/Darklight-ui" className="text-gray-400 hover:text-neutral-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/emmanuel-ogankpa-3a1b651a8/" className="text-gray-400 hover:text-neutral-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="ogankpaugo@gmail.com" className="text-gray-400 hover:text-neutral-600 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent bg-white dark:bg-neutral-800 text-gray-900 dark:text-white"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent bg-white dark:bg-neutral-800 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent bg-white dark:bg-neutral-800 text-gray-900 dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full flex items-center justify-center">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
