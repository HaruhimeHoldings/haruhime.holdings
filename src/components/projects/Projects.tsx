'use client';

import React, {useEffect, useState} from 'react';

import { SectionHeader }            from "../util/SectionHeader";
import { Project }                  from "./Project";

const PROJECTS_URL = "https://raw.githubusercontent.com/HaruhimeHoldings/assets/main/json/projects.json";

export const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(PROJECTS_URL)
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
            });
    }, []);

  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          // @ts-ignore
            return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};
