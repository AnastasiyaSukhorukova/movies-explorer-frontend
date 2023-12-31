// MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.

import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ moviesData }) => {
  
  return(
    <section className="movieCardList">
      <ul className="movieCardList__box">
      {
          moviesData.map(({ _id, ...movie}) => (
            <MoviesCard key={_id} movieData={movie} />
          ))
        }
      </ul>
    </section>
  );
}

export default MoviesCardList;