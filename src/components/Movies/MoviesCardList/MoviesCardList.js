// MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.

import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { SHORTS_MOVIES_DURATION } from "../../../constants/constants"

const MoviesCardList = ({cards, switchCheked, counterCard, setDurationLength, saveMoviesCards, deliteFilm, searchText, titleName, isSearch}) => {
  
  let films = cards;
  if(switchCheked){
    films =  cards.filter(film => film.duration < SHORTS_MOVIES_DURATION)
    setDurationLength(films.length)
  }
  films = films.filter((a, index)=> index < counterCard)

  return(

    <section className="movieCardList">
    <ul className="movieCardList__box">
    {films.length ? films.map((card) => (
                <MoviesCard
                key={card.id} card={card} saveMoviesCards={saveMoviesCards} deliteFilm={deliteFilm}
                />
                )) : isSearch ? <span  className="movieCardList__text">Ничего не найдено!</span>: ''}
            </ul>
  </section>

  );
}

export default MoviesCardList;