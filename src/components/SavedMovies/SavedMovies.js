import React from "react";
import { useEffect, useState, useContext  } from 'react';
import SearchMovies from "../Movies/SearchMovies/SearchMovies";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import "./SavedMovies.css";
import { getMovies } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import { useResize } from "../../utils/UseResize";
import { CurrentUserContext } from "../App/App";
import {
  MOVIES_CARDS_1280,
  MOVIES_CARDS_768,
  MOVIES_CARDS_480,
  ADD_MOVIES_CARD_1280,
  ADD_MOVIES_CARD_768,
  ADD_MOVIES_CARD_480
} from "../../constants/constants";
import { setLocalStorage, getLocalStorage } from "../../utils/localStorage";
import { convertSaveMoviesData } from "../../utils/convertSaveMoviesData";

function SavedMovies(props) {

  const [preloader, setPreloader] = useState(false)
  const [counterCard, setCounterCard] = useState(0)
  const [switchCheked, setSwitchCheked] = useState(false)
  const [isOther, setisOther] = useState(false)
  const [durationLength, setDurationLength] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const { currentScreen } = useResize();
  const { findeSaveMoviesStore, setFindeSaveMoviesStore, saveMoviesStore, setSaveMoviesStore, setSearchText } = useContext(CurrentUserContext);
  const titleName =  "SaveMoviesSearch";

  const deliteFilm = (id) => {
    setSaveMoviesStore(prev=> prev.filter(film=> film._id !== id))
    setFindeSaveMoviesStore(prev=> prev.filter(film=> film._id !== id))
  }

  const switchHandler = (status) => {
    setSwitchCheked(status)
    setIsSearch(true)
  }

  useEffect(() => {
    if(switchCheked && durationLength > counterCard){
      setisOther(true)
    } else if(!switchCheked && (findeSaveMoviesStore.length > 0 && findeSaveMoviesStore.length > counterCard)){
      setisOther(true)
    } else {
      setisOther(false)
    }
  }, [findeSaveMoviesStore, counterCard, switchCheked, durationLength])
  
  useEffect(()=>{
    switch(currentScreen) {
      case 'SCREEN_XXL':
        setCounterCard(MOVIES_CARDS_1280)
        break;
      case "SCREEN_XL":
        setCounterCard(MOVIES_CARDS_1280)
        break;
      case "SCREEN_LG":
        setCounterCard(MOVIES_CARDS_1280)
        break;
      case "SCREEN_MD":
        setCounterCard(MOVIES_CARDS_768)
        break;
      default:
        setCounterCard(MOVIES_CARDS_480)
        break;
    }
  },[currentScreen])
  
  useEffect(() => {
    setPreloader(true)
    const data = getLocalStorage(titleName);
    if(!data?.length && findeSaveMoviesStore.length === 0){
      const fetchData = async () => {
        const saves = await mainApi.getSavedMovies();
          const data = await getMovies();
          const convertSaves = await convertSaveMoviesData(data, saves)
        setSaveMoviesStore(convertSaves);
        setFindeSaveMoviesStore(convertSaves)
      }
      fetchData();
    } else if(data?.length && findeSaveMoviesStore.length === 0 ) {
    setSaveMoviesStore(data);
    setFindeSaveMoviesStore(data)
    }
    setPreloader(false)
    setSearchText('')
  }, []);

  useEffect(() => {
    setLocalStorage(titleName, saveMoviesStore);
  }, [saveMoviesStore])
  
  const findeMovies = (text) => {
    setPreloader(true)
    if(text.length > 0) {
      const a = text.toLowerCase().trim()
      setFindeSaveMoviesStore(saveMoviesStore.filter((obg) => obg.nameRU.toLowerCase().indexOf(a) !== -1 || obg.nameEN.toLowerCase().indexOf(a) !== -1))
    }
    setIsSearch(true)
    setPreloader(false)
  }

  const addMoviesCard = () =>{
    let add = ADD_MOVIES_CARD_1280;
    if(currentScreen === 'SCREEN_MD'){
      add = ADD_MOVIES_CARD_768
    } else if(currentScreen === 'SCREEN_SM'){
      add = ADD_MOVIES_CARD_480
    }
    setCounterCard(prev => prev + add)
  }
  
  
  return(
    <>
       <main className="main__box main__savedMovies">
         <SearchMovies nameLocal={titleName} {...props} findeMovies={findeMovies} switchCheked={switchCheked} switchHandler={switchHandler}/>
         {preloader && <Preloader />}
         {!preloader && <MoviesCardList titleName={titleName}  {...props} cards={findeSaveMoviesStore} switchCheked={switchCheked} counterCard={counterCard} setDurationLength={setDurationLength} saveMoviesCards deliteFilm={deliteFilm}  isSearch={isSearch}/>}
         {isOther && <button className="movies__button" onClick={addMoviesCard}>Еще</button>}
       </main>
    </>
  )

}

export default SavedMovies;