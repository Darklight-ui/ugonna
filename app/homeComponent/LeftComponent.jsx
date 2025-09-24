import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function LeftComponent() {
    const router = useRouter()

    const techStack = [
        { tech: "React" },
        { tech: "TailwindCss" },
        { tech: "Next.js" },
        { tech: "Core PHP" },
        { tech: "Docker" },
        { tech: "Node.js" },
        { tech: "Vs Code" },
        { tech: "Canva" },
    ]
    return (
        <section className="w-full">
            <div className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-neutral-900 rounded-xl shadow">
                {/* Profile Image */}
                <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-neutral-200 dark:border-neutral-700"
                />

                {/* Full Name */}
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-white text-center">
                    Ogankpa Ugonna Emmanuel
                </h1>

                {/* Username */}
                <p className="text-neutral-600 dark:text-neutral-400">@whopushedtoprod</p>

                {/* Tech Stack & Tools */}
                <div className="flex flex-wrap justify-center gap-2">
                    {techStack.map((tech) => (
                        <span className="px-3 py-1 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-sm text-neutral-800 dark:text-neutral-200">
                            {tech.tech}
                        </span>
                    ))}

                </div>

                {/* Button (uses your Button component) */}
                <Button variants="primary" onClick={() => router.push("/contact")}>Hire Me</Button>
            </div>

        </section>
    )
};
