import React from "react";
import "./Movies.css";
import SearchMovies from "./SearchMovies/SearchMovies";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
// import Preloader from "./Preloader/Preloader";

function Movies() {
  
  return (
    <>
      <main className="main__box">
        <SearchMovies/>
          <MoviesCardList/>
          {/* <Preloader /> */}
          <button className="movies__button">
            Ещё
          </button>
      </main>
    </>
  );
}

export default Movies;