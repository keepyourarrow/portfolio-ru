import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row ">
          <h2 className="display-4" id="contact">
            Контакт
          </h2>
          <div className="col-12 mx-auto text-center d-flex justify-content-center align-items-center">
            <div className="footer-content">
              <h6>
                Email: <span>dima_p_50@mail.ru</span>
              </h6>
              <h6>
                Номер: <span className="footer-phone">998901879091</span>
              </h6>
              <h6>
                Github:{" "}
                <a
                  href="https://github.com/keepyourarrow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/keepyourarrow
                </a>
              </h6>
              <p className="text-secondary">
                <em>&copy;3.28.2020</em>
              </p>
            </div>
          </div>
        </div>
      </div>
      <a href="#featured" className="arrow-up">
        <i className="fa fa-chevron-up"></i>
      </a>
    </footer>
  );
};
