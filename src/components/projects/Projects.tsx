import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "nitrous-oxi.de",
    imgSrc: "https://avatars1.githubusercontent.com/u/156565097",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["TypeScript", "Python"],
    description:
      "Open source OSINT tool with an exposed RESTful API and web search panel written for research purposes.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deleniti quibusdam assumenda ipsa consequuntur accusamus, tempora quis, quas, exercitationem illum culpa aliquam quidem. Voluptas repellat dolore quibusdam temporibus impedit perferendis.
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deleniti quibusdam assumenda ipsa consequuntur accusamus, tempora quis, quas, exercitationem illum culpa aliquam quidem. Voluptas repellat dolore quibusdam temporibus impedit perferendis.
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deleniti quibusdam assumenda ipsa consequuntur accusamus, tempora quis, quas, exercitationem illum culpa aliquam quidem. Voluptas repellat dolore quibusdam temporibus impedit perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "yoshi.rest",
    imgSrc: "https://avatars1.githubusercontent.com/u/168873145",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["TypeScript"],
    description:
      "Competitive fitness & lifestyle analytical platform with a web based dashboard and social integrations.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel molestias, ullam est illo recusandae, soluta perferendis praesentium optio nulla dolor reiciendis consectetur earum. Officia voluptates, fugiat eaque aut similique placeat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quod sint labore sit sunt et libero eveniet porro qui accusamus perferendis id blanditiis provident sed, ipsum alias. Eveniet, nesciunt suscipit!
        </p>
        <p>
          This isn't real add smoe fucking Gibberish idk
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "roxipr.in",
    imgSrc: "https://avatars.githubusercontent.com/u/132955252",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["TypeScript", "C++", "Java"],
    description:
      "Block game software marketplace featuring both free to use and premium software; intending to serve as a historic archieve for some software lost to time.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum voluptatibus veritatis sed inventore ad quae aliquid pariatur, aspernatur ea voluptate neque, porro nisi officia, repellat dolorum maxime! Mollitia, magnam.
        </p>
        <p>
          Grrrrrrrrrrrrrrrrrrrrrr you got rick rolled Lol
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "pivotpoint.social",
    imgSrc: "https://avatars.githubusercontent.com/u/170899890",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["TypeScript"],
    description:
      "Social media marketing platform with a machine learning powered core and a beautiful analytics dashboard.",
    modalContent: (
      <>
        <p>Meow</p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum voluptatibus veritatis sed inventore ad quae aliquid pariatur, aspernatur ea voluptate neque, porro nisi officia, repellat dolorum maxime! Mollitia, magnam.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
];
