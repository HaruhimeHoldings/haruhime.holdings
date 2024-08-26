import React,  {useEffect, useState } from "react";

import { SectionHeader }              from "@components/util/SectionHeader";
import Project                        from "@components/projects/Project";

const PROJECTS_URL = "https://raw.githubusercontent.com/HaruhimeHoldings/.github/main/assets/json/projects.json";

interface ProjectData {
    title: string;
    description: string;
    projectLink: string;
    imgSrc: string;
    tech: string[];
    code: string;
}

export const Projects = () => {
    const [projects, setProjects] = useState<ProjectData[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(PROJECTS_URL);
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className="section-wrapper" id="projects">
            <SectionHeader title="Projects" dir="r" />
            <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
                {projects.map((project) => (
                    <Project
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        projectLink={project.projectLink}
                        imgSrc={project.imgSrc}
                        tech={project.tech}
                        code={project.code}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;

// path: src/app/containers/Projects.tsx