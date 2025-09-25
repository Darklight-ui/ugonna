"use client"
import { timelineData } from "@/app/data/data";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react"


export default function TimeLine() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offsst: ["start end", "end start"],
    });

    return (
        <div className="relative w-full flex justify-center">
            {/* Vertical glowing line */}

            <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute left-1/2 -translate-x-1/2 w-[4px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full origin-top shadow-[0_0_20px_rgba(255,0,255,0.7)]"
            />

            <div ref={ref} className="flex flex-col space-y-16 py-10">
                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex items-start gap-6 max-w-xl"
                    >
                        {/* Title */}
                        <div className="text-lg font-semibold text-neutral-900 dark:text-white ">
                            {item.title}
                        </div>

                        {/* Marker */}
                        <div className="flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full border-4 border-purple-500 bg-neutral-900 flex items-center justify-center text-purple-400 text-xs">
                                ⨂
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="text-sm font-light text-neutral-900 dark:text-white mb-3">
                                {item.date}
                            </h3>
                            <p className="text-neutral-900 dark:text-white ">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

};
