// MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.

import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  
  return(
    <section className="movieCardList">
      <div className="movieCardList__box">
            <MoviesCard />
      </div>
    </section>
  );
}

export default MoviesCardList;