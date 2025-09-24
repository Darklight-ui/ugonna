"use client";
import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import RightComponent from "./homeComponent/RightComponent";
import LeftComponent from "./homeComponent/LeftComponent";


export default function HomePage({ setCurrentPage }) {
  const router = useRouter();
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-neutral-900 dark:to-neutral-800">
      <Header />
      <div className="flex flex-col lg:flex-row justify-center align-middle gap-6">
        {/* Left */}
        <div className="p-4 w-full lex-grow">
          <LeftComponent />
        </div>
        {/* Right */}
        <div className="p-4 w-full flex-grow">
          <RightComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
}
