import React from "react";
import { useEffect, useState } from 'react';
import SearchMovies from "../Movies/SearchMovies/SearchMovies";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import { apiRequestEmulation } from '../../utils/utils';
import { savedMoviesData } from '../../constants/saveMoviesData';
import "./SavedMovies.css";

function SavedMovies() {

  const [isLoadind, setIsLoading] = useState(false);

  // Эмилируем загрузку фильмов
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
  
  return(
       <main className="main__box main__savedMovies">
         <SearchMovies/>
         {isLoadind
        ? <Preloader />
        : <MoviesCardList moviesData={savedMoviesData}/>
      }
         {/* {<button className="movies__button">Еще</button>} */}
       </main>
  )

}

export default SavedMovies;