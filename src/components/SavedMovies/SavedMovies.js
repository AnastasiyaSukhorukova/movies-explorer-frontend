import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchMovies from "../Movies/SearchMovies/SearchMovies";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";

function SavedMovies() {
  
  return(
     <>
     <Header/>
       <main className="main__box">
         <SearchMovies/>
         {<Preloader />}
         {<MoviesCardList />}
         {<button className="movies__button">Еще</button>}
       </main>
     <Footer/>
   </>
  )

}

export default SavedMovies;