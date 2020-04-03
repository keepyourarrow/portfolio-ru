import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { About } from "../components/About";
import { FeaturedProject } from "../components/FeaturedProject";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";

export const HomePage = ({ projectCards }) => {
  return (
    <>
      <Helmet>
        <title>Добро пожаловать на мою страницу</title>
      </Helmet>
      <header className="container-fluid">
        <div className="row header justify-content-center align-items-center">
          <div className="col-12 mx-auto text-center">
            <h1 className="display-3">Я Дима Токарев</h1>
            <h1 className="display-4 ">Frontend разработчик</h1>
            <p className="mb-5">Ищю работу</p>
            <Link to="/resume">Мое резюме</Link>
          </div>
          <a href="#featured" className="arrow">
            <i className="fa fa-chevron-down"></i>
          </a>
        </div>
      </header>
      <FeaturedProject />
      <About />
      <Projects projectCards={projectCards} />
      <Footer />
    </>
  );
};
