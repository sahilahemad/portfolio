"use client";

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projects";

export default function Projects() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="projects" className="py-32">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
