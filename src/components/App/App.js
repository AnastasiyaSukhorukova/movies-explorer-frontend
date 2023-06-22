// корневой компонент приложения, его создаёт CRA.
import '../App/App.css';
// import logo from "../../images/logo.svg";
import { Routes, Route } from "react-router-dom";
import React, { createContext } from 'react';

import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Page404 from '../Error404/Error404';
import Movies from '../Movies/Movies';


export const CurrentUserContext = createContext();

function App() {
  return (
      <CurrentUserContext.Provider>
        <div className='App'>
          <Routes>
            {/* по роуту / отображается страница «О проекте»; */}
            <Route exact path="/" element={<Main/>} />

              {/* по роуту /movies отображается страница «Фильмы»; */}
              <Route exact path="/Movies" 
                element={
                  // <ProtectedRoute logedId={logedId}>
                    <Movies/>
                      // </ProtectedRoute>
                }
              />
  
              {/* по роуту /saved-movies отображается страница «Сохранённые фильмы»; */}
              <Route exact path="/saved-movies" 
                element={
                  // <ProtectedRoute logedId={logedId}>
                   <SavedMovies/>
                      // </ProtectedRoute>
              }
              />

              <Route exact path="/profile" 
                element={
                // <ProtectedRoute logedId={logedId}>
                  <Profile/>
                    // </ProtectedRoute>
                }
              />

            {/* по роутам /signin и /signup отображаются страницы авторизации и регистрации.     */}
            <Route exact path="/signin" 
              element={
                // <ProtectedRoute logedId={!logedId}>
                  <Login/>
                    // </ProtectedRoute>
              } 
              />
  
              <Route exact path="/signup" 
                element={
                // <ProtectedRoute logedId={!logedId}>
                  <Register />
                    // </ProtectedRoute>
                }
              />
  
              <Route exact path="*" element={<Page404/>} />
            </Routes>
            {/* <Popup popupOpen={popupOpen} popupMessage={popupMessage} closePopup={closePopup} /> */}
          </div>
        </CurrentUserContext.Provider>
    );
}

export default App;