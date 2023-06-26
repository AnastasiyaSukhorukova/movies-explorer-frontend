import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchMovies from "./SearchMovies/SearchMovies";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
// import Preloader from "./Preloader/Preloader";

function Movies() {
  
  return (
    <>
      <Header />
      <main className="main__box">
        <SearchMovies/>
          <MoviesCardList/>
          {/* <Preloader /> */}
          <button className="movies__button">
            Ещё
          </button>
      </main>
      <Footer />
    </>
  );
}

export default Movies;