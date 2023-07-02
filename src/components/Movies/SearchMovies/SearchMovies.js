// Компонент с формой поиска фильмов и с чекбоксом "Корометражки"

import React from "react";
import "./SearchMovies.css"

function SearchMovies(props) {
  
  return (
      <form noValidate className="searchmovies" onSubmit={(e)=>{e.preventDefault()}}>
        <div className="searchmovies__block">
          <div className="searchmovies__container">
          <input
            type="text"
            name="text"
            className="searchmovies__input"
            placeholder="Фильм"
            required
          />
        </div>
        <button className="searchmovies__button">Найти</button>
        </div>

        <label className="searchmovies__switch">
          <input className="searchmovies__checkbox-input" type="checkbox"/>
          <div className="searchmovies__checkbox-custom"></div>
          <p className="searchmovies__shorts">Короткометражки</p>
        </label>
      </form>
  );
}

export default SearchMovies;