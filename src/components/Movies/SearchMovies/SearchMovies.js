// Компонент с формой поиска фильмов и с чекбоксом "Корометражки"

import React, { useState, useEffect } from "react";
import "./SearchMovies.css"

function SearchMovies(props) {
  const [filmDirty, setFilmDirty] = useState(false)
  const [errorMessageFilm, setErrorMessageFilm] = useState('Введите название фильма')
  const {searchText, searchHandler, findeMovies, switchHandler, switchCheked, nameLocal} = props;
  
  useEffect(() => {
    if(filmDirty && searchText.length){
      setFilmDirty(false)
    }
  }, [searchText, filmDirty])
  
  return (
    <section>
      <form noValidate className="searchmovies" onSubmit={(e)=>{e.preventDefault()}}>
        <div className="searchmovies__block">
          <div className="searchmovies__container">
          <input
            type="text"
            name="text"
            className="searchmovies__input"
            placeholder="Фильм"
            required
            onChange={(event) => {searchHandler(event.target.value, nameLocal)}}
            value={searchText}
            onClick={e =>setFilmDirty(true)}
          />
        </div>
        <button className="searchmovies__button" type="submit" onClick={()=>findeMovies(searchText)}>Найти</button>
        </div>

        {(filmDirty && errorMessageFilm) && <div className="searchmovies__error">{errorMessageFilm}</div>}

        <label className="searchmovies__switch">
          <input className="searchmovies__checkbox-input" type="checkbox" checked={switchCheked} onChange={(event)=>switchHandler(event.target.checked)}/>
          <div className="searchmovies__checkbox-custom"></div>
          <p className="searchmovies__shorts">Короткометражки</p>
        </label>
      </form>
    </section>
  );
}

export default SearchMovies;