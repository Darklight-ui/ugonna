"use client";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-neutral-800 border-t border-gray-200 dark:border-neutral-700 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <p className="text-gray-600 dark:text-gray-400">© 2025 Ogankpa E. Ugonna. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com/Darklight-ui" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/emmanuel-ogankpa-3a1b651a8/" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"><Linkedin size={20} /></a>
          <a href="ogankpaugo@gmail.com" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
