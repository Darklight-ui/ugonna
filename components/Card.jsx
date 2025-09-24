"use client";
import React from "react";

const Card = ({ children, className = "", hover = true }) => {
    return (
        <div
            className={`
        bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-gray-200 dark:border-neutral-700
        ${hover ? "hover:shadow-lg hover:-translate-y-1 transition-all duration-300" : ""}
        ${className}
      `}
        >
            {children}
        </div>
    );
};

export default Card;
