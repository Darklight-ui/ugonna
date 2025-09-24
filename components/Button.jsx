"use client";
import React from "react";

const Button = ({ children, variant = "primary", size = "md", className = "", ...props }) => {
    const baseClasses =
        "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-neutral-600 hover:bg-neutral-700 text-white focus:ring-neutral-500",
        secondary: "bg-neutral-200 hover:bg-neutral-300 text-neutral-900 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-white focus:ring-neutral-500",
        outline: "border-2 border-neutral-600 text-neutral-600 hover:bg-neutral-600 hover:text-white dark:border-neutral-400 dark:text-neutral-400 focus:ring-neutral-500",
        ghost: "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
