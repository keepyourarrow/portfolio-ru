import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import sushiBar from "../video/animated-sushi-bar.mp4";
import oneRoom from "../video/oneroom.mp4";
import restaraunt from "../video/restaraunt.mp4";
import sweets from "../video/sweets.mp4";
import { DisplaySingleProject } from "../components/DisplaySingleProject";
import { NoProjectFound } from "../components/NoProjectFound";

let projects = [
  {
    name: "One Room Отель",
    slug: "one-room-hotel",
    video: oneRoom,
    made: "React.js, Html,Css and Bootstrap",
    site: "https://one-room-hotel.netlify.com/",
    description:
      "Мой самый большой проект который я сделал с Реакт.js. Я использую функциональные компоненты, реакт роутер для роутинга, Хуки и Реакт Контекст. Цель этого сайта для юзера это найти комнату котарая ему понравится и заказать ее. Можно делать обычные вещи которые может делать не залогиненный юзер, как просматривать комнаты, но заказать комнату может только залогиненный юзер." +
      "Можно заказать только одну комнату. Также есть админ юзер у которого есть лишние способности типо удалить комнату, создать комнату или востановить все.",
    how: true
  },
  {
    name: "Магазин Сладостей",
    slug: "sweets-shop",
    video: sweets,
    made: "Html, Css, Javacsript and Bootstrap",
    site: "https://sweets-restaraunt.netlify.com/",
    description:
      "Я пытался сделать страницу чистой и професиональной с простым белым фоном. Я также добавил немного Javascripta чтобы можно было добавить предмет в корзину, убрать предмет, и полная цена и все остальное адаптируется."
  },
  {
    name: "Суши Ресторан",
    slug: "sushi-restaraunt",
    made: "Html, Css, Javacsript and Bootstrap",
    video: restaraunt,
    site: "https://responsive-restaraunt.netlify.com/",
    description:
      "В этом проекте я пытался чтобы страница создала впечатление, используя комбинации красивых цветов и разные ховер эффекты, но так чтобы не было слишком противно глазам. Также я использовал entrance анимацию в начале, липкую навигацую когда ты доскроллишь до определленой позиции, " +
      "чтобы дисплейнуть наших членов команды и другие вещи... С javascriptом я сделал окно которое открывается когда юзер нажмет на order online. Также кнопка скролл наверх появится только если ты скрольнешь достаточно вниз." +
      "Для галерии я использовал библиотеку magnificent popup."
  },
  {
    name: "Анимированый Суши Бар",
    slug: "animated-sushi-bar",
    made: "Html, Css, wow.js and Bootstrap",
    video: sushiBar,
    site: "https://sushi-restaraunt-animated.netlify.com/",
    description:
      "В этом проекте я ютилизирую wow.js библиотеку и пытаюсь показать немного другой подход к дизайну веб страниц. "
  }
];

export const SingleProject = (props) => {
  const [projectList] = useState(projects);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let project = projectList.find(
    (project) => project.slug === props.match.params.slug
  );

  if (!project) {
    return <NoProjectFound />;
  }

  return (
    <div>
      <Helmet>
        <title>Надеюсь вам понравится мой {project.name} проект!</title>
      </Helmet>
      <DisplaySingleProject project={project} />
    </div>
  );
};
