import React from "react";
import { Link } from "react-router-dom";

export const Project = ({ project }) => {
  return (
    <article className="col-lg-6 col-md-10 mx-auto projects-card p-0 ">
      <div className="card ml-5 mb-5">
        <div className="img-container">
          <img
            className="card-img-top"
            src={project.image}
            alt={project.name}
          />
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="links card-btn text-center"
          >
            Посмотреть сайт
          </a>
        </div>

        <div className="card-body">
          <h4 className="card-title">{project.name}</h4>
          <p className="card-text">{project.description}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <Link to={`/${project.slug}`} className="links link-3">
            Читать дальше
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="links link-2"
          >
            Посмотреть Код
          </a>
        </div>
      </div>
    </article>
  );
};
