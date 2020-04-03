import React from "react";
import Helmet from "react-helmet";
import resumeImg from "../img/resume.jpg";

export const ResumePage = () => {
  return (
    <div>
      <Helmet>
        <title>Мое резюме</title>
      </Helmet>

      <div className="my-2 pt-2 resume">
        <img src={resumeImg} alt="resume" className="img-fluid" />
      </div>
    </div>
  );
};
