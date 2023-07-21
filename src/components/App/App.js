// корневой компонент приложения, его создаёт CRA.
import '../App/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { createContext, useState, useEffect } from 'react';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';

import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Error404 from '../Error404/Error404';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import Layout from '../Layout/Layout';
// import Preloader from "../Movies/Preloader/Preloader";


// import { SavedMoviesContextProvider } from '../../contexts/SavedMoviesContextProvider';
// import { CurrentUserContextProvider } from '../../contexts/CurrentUserContextProvider';

import { mainApi } from '../../utils/MainApi';
import Popup from '../Popup/Popup';
export const CurrentUserContext = createContext();

const initUser = {name: '', email: ''}

function App() {

  const [searchText, setSearchText] = useState('')
  const [user, setUser] = useState(initUser);
  const [logedId, setLogedId] = useState(true);
  console.log(logedId);
  const [saveMoviesStore, setSaveMoviesStore] = useState([]);
  const [findeSaveMoviesStore, setFindeSaveMoviesStore] = useState([]);
  const [cards, setCards] = useState([])
  const [films, setFilms] = useState([])
  const [popupOpen, setPopupOpen] = useState(false)
  const [popupMessage, setPopupMessage] = useState("");

  const closePopup = () => {
    setPopupOpen(false);
    setPopupMessage("");
  };

  const openPopup = (message) => {
    setPopupMessage(message);
    setPopupOpen(true);
  };
  
  const searchHandler = (text, name) =>{
    
    if(name === 'MoviesSearch'){
      const settings =  localStorage.getItem(`settings_${name}`)
      if(settings){
        const obj = JSON.parse(settings);
        obj.searchText = text;
        localStorage.setItem(`settings_${name}`, JSON.stringify(obj))
      } else {
        localStorage.setItem(`settings_${name}`, `{"searchText": "${text}", "shortSwich": ${false}}`)
      }
    }
    setSearchText(text)
  }

  useEffect(() => {
    if(!localStorage.getItem("token") || localStorage.getItem("token") === ''){
      setLogedId(false)
    } 
    else {
      mainApi.getProfile()
      .then(data=>{
        if(data.message){
          localStorage.removeItem("token")
          setLogedId(false)
          window.location.reload();
        }
      })
      .catch(error => {
        console.error('getProfile error ', error)
      })
    }
  }, [])


  return (
    <BrowserRouter>
    
     <CurrentUserContext.Provider value={{setSearchText, user, setUser, logedId, setLogedId, saveMoviesStore, setSaveMoviesStore, cards, setCards, films, setFilms, findeSaveMoviesStore, setFindeSaveMoviesStore, openPopup}}>
     <div className='App'>
          <Routes>

               <Route exact path="/" element={
               <Layout>
               <Main/>
               </Layout>} />

               <Route exact path="/signup" 
     
                element={
                  
                  <ProtectedRoute logedId={!logedId}>
                   <Register/>
                  </ProtectedRoute>
                 }
              />

            {/* по роутам /signin и /signup отображаются страницы авторизации и регистрации.     */}
            <Route exact path="/signin" 
            
              element={
                <ProtectedRoute logedId={!logedId}>
                 <Login/>
                </ProtectedRoute>
               } 
              />

              {/* по роуту /movies отображается страница «Фильмы»; */}
              <Route exact path="/movies" 
              
                element={
                  <ProtectedRoute logedId={logedId}>
                    <Header isLogged={logedId}/>
                    <Movies searchText={searchText} searchHandler={searchHandler}/>
                  </ProtectedRoute>
                 }
              />
  
              {/* по роуту /saved-movies отображается страница «Сохранённые фильмы»; */}
              <Route exact path="/saved-movies" 
            
              element={
                <ProtectedRoute logedId={logedId}>
                  <Layout>
                  <SavedMovies searchText={searchText} searchHandler={searchHandler}/>
                  </Layout>
                </ProtectedRoute>
               }
              />

              <Route exact path="/profile" 
               
                element={
                  <ProtectedRoute logedId={logedId}>
                    <>
                    {/* <Header isLogged={logedId}/> */}
                   <Profile/>
                   </>
                  </ProtectedRoute>
                 }
              />

              <Route exact path="*" element={<Error404/>} />
            </Routes>
            <Popup popupOpen={popupOpen} popupMessage={popupMessage} closePopup={closePopup} />
            </div>
          </CurrentUserContext.Provider>
           {/* <div className="preloader-wrapper">
              <Preloader />
            </div>
            
          </div> */}
          </BrowserRouter>
    );
}

export default App;