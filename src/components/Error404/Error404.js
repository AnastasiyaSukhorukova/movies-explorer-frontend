import React from "react";
import "./Error404.css";
import { Link } from 'react-router-dom';

function Error404() {
  return(
    <section className="error404">
      <h1 className="error404__title">404</h1>
      <p className="error404__text">Страница не найдена</p>
      <Link to="/">
      <button type="button" className="error404__button">
        <p className="error404__text error404__text-blue">
        Назад
        </p>
      </button>
      </Link>
    </section>
  );
}

export default Error404;