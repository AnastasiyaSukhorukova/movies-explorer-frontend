// Portfolio — компонент со ссылками на другие проекты.

import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__container">

        <li className="portfolio__item">
          <a
              className="portfolio__link"
              href="https://github.com/AnastasiyaSukhorukova/how-to-learn"
              target="_blank"
              rel="noreferrer"
          >
            Статичный сайт
            <p className="portfolio__link-icon"></p>
          </a>
        </li>

        <li className="portfolio__item">
          <a
              className="portfolio__link"
              href="https://github.com/AnastasiyaSukhorukova/russian-travel"
              target="_blank"
              rel="noreferrer"
          >
            Адаптивный сайт
            <p className="portfolio__link-icon"></p>
          </a>
        </li>

        <li className="portfolio__item">
          <a
              className="portfolio__link"
              href="https://github.com/AnastasiyaSukhorukova/react-mesto-auth"
              target="_blank"
              rel="noreferrer"
          >
            Одностраничное приложение
            <p className="portfolio__link-icon"></p>
          </a>
        </li>

      </ul>
    </section>
  );
}

export default Portfolio;