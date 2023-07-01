import { useLocation } from 'react-router-dom';
import { convertDuration } from '../../../utils/utils';
import MovieButton from '../MovieButton/MovieButton';
import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({ movieData }) => {

  const { pathname } = useLocation();

  const saveMovieHandler = () => {
    console.log('Фильм сохранен');
  }

  const deleteMovieHandler = () => {
    console.log('Фильм удален');
  }

  return(
    <div className="moviesCard">
      <a 
        href={movieData.trailerLink}
        target="_blank"
        className="card__link"
        rel="noreferrer"
      >
        <img className="moviesCard__image" src={movieData.image} alt={movieData.nameRU} />
        </a>
      <div className="moviesCard__container">
        <h2 className="moviesCard__title">
          {movieData.nameRU}
        </h2>

            <MovieButton
              onClickHandler={pathname === "/movies" ? saveMovieHandler : deleteMovieHandler}
              className={ pathname === "/movies" ? "moviesCard__button-del" : "moviesCard__button-save"}
            >
            </MovieButton>

        </div>
        <span className="moviesCard__duration">
          {convertDuration(+movieData.duration)}
        </span>
    </div>
  );
}

export default MoviesCard;