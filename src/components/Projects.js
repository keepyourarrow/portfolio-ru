import React from "react";
import { Project } from "./Project";

export const Projects = ({ projectCards }) => {
  projectCards = projectCards.map((project) => {
    return <Project key={project.id} project={project} />;
  });
  return (
    <section className="projects-section mt-5" id="projects">
      <div className="projects-container">
        <div className="container-fluid">
          <h3 className="text-center p-5  mb-2 display-4 featured-title mx-auto">
            Проекты
            <div className="title-line" />
          </h3>
          <div className="row project-cards">{projectCards}</div>
        </div>
      </div>
    </section>
  );
};
