import React from "react";
import oneRoom from "../img/oneroom-img.png";
import { Link } from "react-router-dom";

export const FeaturedProject = () => {
  return (
    <section>
      <div className="container mt-1 p-1">
        <h3
          className="text-center p-5 mb-2 display-4 featured-title "
          id="featured"
        >
          Особый проект
        </h3>
        <div className="title-line" />
        <div className="row ">
          <div className="col-10 mx-auto featured-card p-0 ">
            <div className="card">
              <div className="img-container">
                <img
                  className="card-img-top"
                  src={oneRoom}
                  alt="featured project"
                />

                <a
                  href="https://one-room-hotel.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links card-btn text-center"
                >
                  Посмотреть сайт
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">One Room Отель</h4>
                <p className="card-text">
                  React.js SPA где можно заказать одну комнату...(читать дальше
                  для видео)
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <Link to="/one-room-hotel" className="links link-3">
                  Читать дальше
                </Link>
                <a
                  href="https://github.com/keepyourarrow/One-Room-Hotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links link-2"
                >
                  Посмотреть Код
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr" />
      </div>
    </section>
  );
};
