import React from "react";
import "./Movies.css";
import SearchMovies from "./SearchMovies/SearchMovies";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import { moviesData } from '../../constants/moviesData';
import { useEffect, useState } from 'react';
import { apiRequestEmulation } from '../../utils/utils';

function Movies() {

  const [isLoadind, setIsLoading] = useState(false);

  //Загрузка фильмов
  useEffect(() => {
    setIsLoading(true);
    apiRequestEmulation()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [])
  
  return (
    <>
      <main className="main__box">
      <SearchMovies/>
      {isLoadind
        ? <Preloader />
        : <MoviesCardList moviesData={moviesData}/>
      }
            <button className="movies__button" type="button">
              Еще
            </button>
      </main>
    </>
  );
}

export default Movies;
