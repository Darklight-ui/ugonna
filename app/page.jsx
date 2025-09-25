"use client";
import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import RightComponent from "./homeComponent/RightComponent";
import LeftComponent from "./homeComponent/LeftComponent";
import TimeLine from "@/components/TimeLine";
import TitleHeader from "@/components/TitleHeader";


export default function HomePage({ setCurrentPage }) {
  const router = useRouter();
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-neutral-900 dark:to-neutral-800">
      <Header />
      <div className="flex flex-col lg:flex-row justify-center align-middle gap-6">
        {/* Left */}
        <div className="p-4 w-full flex-grow">
          <LeftComponent />
        </div>
        {/* Right */}
        <div className="p-4 w-full flex-grow">
          <RightComponent />
        </div>
      </div>
      <div className="p-4 w-full flex-grow">
        <div className="w-full">
          <div className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-neutral-900 rounded-xl shadow border border-neutral-200 dark:border-neutral-700">
            <TitleHeader title="Professional Work Experience" sub="My Career Overview" />
            <TimeLine />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
