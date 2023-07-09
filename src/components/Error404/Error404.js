import React from "react";
import "./Error404.css";
import { Link } from 'react-router-dom';

function Error404() {
  return(
    <main className="error404">
      <h1 className="error404__title">404</h1>
      <p className="error404__text">Страница не найдена</p>
      <Link to="/" className="error404__button">
        Назад
      </Link>
    </main>
  );
}

export default Error404;