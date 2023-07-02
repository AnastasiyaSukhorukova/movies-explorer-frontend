import React, { useState} from "react";
import { useLocation } from 'react-router-dom';
import { convertDuration } from '../../../utils/utils';
import "./MoviesCard.css";
import saveFilmButton from "../../../images/like-no-active.svg";
import deleteFilmButton from "../../../images/deleteFilmButton.svg";
import saveButton from "../../../images/like-active.svg";

const MoviesCard = ({ movieData }) => {

  const location = useLocation();
  const [isSaved, setIsSaved] = useState(movieData.inSaved);

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

        {location.pathname === "/saved-movies" &&
              <button type="button" aria-label="удалить фильм" className="moviesCard__button-del">
                  <img className="moviesCard__delete" alt="удалить" src={deleteFilmButton}/>
              </button>}
          {location.pathname === "/movies" &&
              <button type="button" aria-label="сохранить" className={isSaved ? "moviesCard__button-save" : "moviesCard__button"}
                  >
                  {isSaved ? <img className="moviesCard__delete" alt="добавлено" src={saveButton}/> :
                      <img className="moviesCard__add" alt="добавить" src={saveFilmButton}/>}
              </button>}

        </div>
        <span className="moviesCard__duration">
          {convertDuration(+movieData.duration)}
        </span>
    </div>
  );
}

export default MoviesCard;