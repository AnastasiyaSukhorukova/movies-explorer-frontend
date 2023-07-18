import React, { useState, useContext } from "react";
import { useLocation } from 'react-router-dom';
import { convertDuration } from '../../../utils/utils';
import "./MoviesCard.css";
import saveFilmButton from "../../../images/like-no-active.svg";
import deleteFilmButton from "../../../images/deleteFilmButton.svg";
import saveButton from "../../../images/like-active.svg";
import { CurrentUserContext } from "../../App/App";
import { DURATION_CONVERT } from "../../../constants/constants";
import { setLocalStorage } from "../../../utils/localStorage";
import { mainApi } from '../../../utils/MainApi';

const MoviesCard = ({card, saveMoviesCards, deliteFilm}) => {

  const location = useLocation();
  const [isSaved, setIsSaved] = useState(card.inSaved);
  const { setFindeSaveMoviesStore, setSaveMoviesStore, setFilms, setCards } = useContext(CurrentUserContext);

  function handleClick() {
    if(isSaved){

      setCards(prev=> prev.map(item=> item.id === card.id ? {...item, inSaved: false} : item))
      setFilms(prev=> prev.map(item=> item.id === card.id ? {...item, inSaved: false} : item))
      
      setSaveMoviesStore(prev=> {
        const newData = prev.filter(item=> item.id !== card.id)
        setLocalStorage("SaveMoviesSearch", newData)
        return newData
      })
      setFindeSaveMoviesStore(prev => prev.filter(item=> item.id !== card.id))
      mainApi.deleteSaveMovies(card._id)
    } else {
     
          mainApi.saveMovies(card).then(data=>{
            
            setCards(prev=> prev.map(item=> {
              if(data.movieId === item.id){
                return {...item, inSaved: true, _id: data._id}
              }
              return item
            }))

            setFilms(prev=> prev.map(item =>{
              if(data.movieId === item.id){
                return {...item, inSaved: true, _id: data._id}
              }
              return item
            }))
            const saveCard = {...data, id: data.movieId, image: card.image }

            setFindeSaveMoviesStore(prev=>[...prev, saveCard])
            setSaveMoviesStore(prev=>[...prev, saveCard])
          });
    }
    setIsSaved(!isSaved);
  }
  
  const handleDelete = () => {
      setFilms(prev=> prev.map(item =>{
        if(item.id === card.id){
          item.inSaved = false;
        }
        return item
      }))
      setCards(prev=> prev.map(item =>{
        if(item.id === card.id){
          item.inSaved = false;
        }
        return item
      }))
    deliteFilm(card._id)
    mainApi.deleteSaveMovies(card._id)
  }
  let src = `https://api.nomoreparties.co/${card.image.url}`;

  return(
    <div className="moviesCard">
      <a 
        href={card.trailerLink}
        target="_blank"
        className="card__link"
        rel="noreferrer"
      >
        <img className="moviesCard__image" src={src} alt={`Постер ${card.nameRU}`} />
        </a>
      <div className="moviesCard__container">
        <h2 className="moviesCard__title">
          {card.nameRU}
        </h2>

        {location.pathname === "/saved-movies" &&
              <button type="button" aria-label="удалить фильм" className="moviesCard__button-del">
                  <img className="moviesCard__delete" alt="удалить" src={deleteFilmButton} />
              </button>}
          {location.pathname === "/movies" &&
              <button type="button" aria-label="сохранить" className={isSaved ? "moviesCard__button-save" : "moviesCard__button"} onClick={handleClick}
                  >
                  {isSaved ? <img className="moviesCard__delete" alt="добавлено" src={saveButton}/> :
                      <img className="moviesCard__add" alt="добавить" src={saveFilmButton}/>}
              </button>}
        </div>
        <div className="moviesCard__line"/>
        <span className="moviesCard__duration">
          {convertDuration(+card.duration)}
        </span>
    </div>
  );
}

export default MoviesCard;