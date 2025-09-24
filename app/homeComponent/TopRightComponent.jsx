import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { useRouter } from "next/navigation";
import { useEffect, useState, } from "react";
import { projects } from "../data/data";

export default function TopRightComponent() {
    const router = useRouter();
    const [randomProjects, setRandomProjects] = useState([]);

    useEffect(() => {
        const shuffled = [...projects].sort(() => 0.5 - Math.random())
        setRandomProjects(shuffled.slice(0, 2))
    }, []);

    if (randomProjects === 0) {
        return <p>Loading...</p>
    }
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {randomProjects.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>
            <div className="flex justify-center py-3">
                <Button variants="ghost" onClick={() => router.push("/projects")}>
                    View All Projects
                </Button>
            </div >
        </>
    );
};
