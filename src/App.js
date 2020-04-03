import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ResumePage } from "./pages/ResumePage";
import { SingleProject } from "./pages/SingleProject";
import { Navbar } from "./components/Navbar";
import oneRoom from "./img/oneroom-img.png";
import restaraunt from "./img/restaraunt-img.png";
import grandma from "./img/grandma-img.png";
import sushibar from "./img/sushibar-img.png";

const cardProjects = [
  {
    id: 1,
    image: oneRoom,
    name: "One Room Отель",
    slug: "one-room-hotel",
    description:
      "React.js SPA где можно заказать одну комнату...(читать дальше для видео)",
    site: "https://one-room-hotel.netlify.com/",
    github: "https://github.com/keepyourarrow/One-Room-Hotel"
  },
  {
    id: 2,
    image: restaraunt,
    name: "Суши Ресторан",
    slug: "sushi-restaraunt",
    description:
      "Хорошо выглядюящая страница с крутыми функциями...(читать дальше для видео)",
    site: "https://responsive-restaraunt.netlify.com/",
    github: "https://github.com/keepyourarrow/responsive_restaraunt"
  },
  {
    id: 3,
    image: grandma,
    name: "Магазин Сладостей",
    slug: "sweets-shop",
    description:
      "Обычный, казуальный стиль с немного javascriptом для корзины...(читать дальше для видео)",
    site: "https://sweets-restaraunt.netlify.com/",
    github: "https://github.com/keepyourarrow/grandma-sweets"
  },
  {
    id: 4,
    image: sushibar,
    name: "Анимированый Суши Бар",
    slug: "animated-sushi-bar",
    description:
      "CSS с библиотекой Wow.js для анимаций и Bootstrapом...(читать дальше для видео)",
    site: "https://sushi-restaraunt-animated.netlify.com/",
    github: "https://github.com/keepyourarrow/sushi_restaraunt_animated"
  }
];

function App() {
  let [projectCards] = useState(cardProjects);
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage projectCards={projectCards} />}
        />
        <Route exact path="/resume" component={ResumePage} />
        <Route exact path="/:slug" component={SingleProject} />
      </Switch>
    </>
  );
}

export default App;
