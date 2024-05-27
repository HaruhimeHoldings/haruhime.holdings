'use client';

import React, {useEffect, useState} from 'react';

import { ProjectCard }              from "@component/ProjectCard";

const PROJECTS_URL = "https://raw.githubusercontent.com/HaruhimeHoldings/assets/main/json/projects.json";

const Feature = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(PROJECTS_URL)
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Feature;

// path: src/app/container/feature/Feature.tsx
