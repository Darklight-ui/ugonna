import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ image, title, tech, live, github }) {
    return (
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-700 p-4 shadow-sm bg-white dark:bg-neutral-900 hover:shadow-md transition">
            {/* Project image */}
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Title */}
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>

            {/* Stack / Tools */}
            <div className="flex flex-wrap gap-2 mt-2">
                {tech.map((tech, i) => (
                    <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-4">
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        <Github className="w-4 h-4" /> Code
                    </a>
                )}
                {live && (
                    <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        <ExternalLink className="w-4 h-4" /> Live
                    </a>
                )}
            </div>
        </div>
    );
}
