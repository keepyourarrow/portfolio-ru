import React from "react";
import { VideoPlayer } from "./VideoPlayer";

export const DisplaySingleProject = ({ project }) => {
  return (
    <section className="single-project">
      <h1 className="mx-auto project-name"> {project.name}</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-12  mx-auto mt-5">
            <VideoPlayer video={project.video} />
          </div>
          <div className="col-lg-6 col-sm-10 mx-auto project-description">
            <h5 className="pb-4">
             Сделано с: <strong>{project.made}</strong>
            </h5>
          </div>
          <div className="col-10 mx-auto pb-5 mb-5">
            <h4 className="pb-3">Project Description</h4>
            <p className="desc">
              {project.description}. <br />
              Можно посмотреть сайт {" "}
              <a href={project.site} target="_blank" rel="noopener noreferrer">
                здесь...
              </a>
            </p>
          </div>
          {project.how !== undefined && (
            <div className="col-10 mx-auto p-4">
              <h4 className="pb-4 pt-4 mt-3">Как начать</h4>
              <ul>
                <li>Вначале нажать на populate data.</li>
                <li>
                Можно создать нового юзера, но также использовать прежних:
                </li>
                <li>admin admin для админа</li>
                <li>normaluser normaluser для обычного юзера</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
