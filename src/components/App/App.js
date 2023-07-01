// корневой компонент приложения, его создаёт CRA.
import '../App/App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React, { createContext } from 'react';

import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Error404 from '../Error404/Error404';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import Layout from '../Layout/Layout';


export const CurrentUserContext = createContext();

function App() {

  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/signin", {replace: true});
  }

  const handleLogin = () => {
    setIsLogged(true);
    navigate("/", {replace: true});
  }

  const handleLogout = () => {
    setIsLogged(false);
    navigate("/signin", {replace: true});
  }

  return (
      <CurrentUserContext.Provider>
        <div className='App'>
          <Routes>
            {/* по роуту / отображается страница «О проекте»; */}
            <Route exact path="/" element={
            <Layout isLogged={!isLogged}>
              <Main />
            </Layout>} />

              {/* по роуту /movies отображается страница «Фильмы»; */}
              <Route exact path="/Movies" 
                element={
                    <Layout isLogged={isLogged}>
                      <Movies />
                    </Layout>
                }
              />
  
              {/* по роуту /saved-movies отображается страница «Сохранённые фильмы»; */}
              <Route exact path="/saved-movies" 
                element={
                  <Layout isLogged={isLogged}>
                    <SavedMovies />
                  </Layout>
              }
              />

              <Route exact path="/profile" 
                element={
                  <>
                    <Header isLogged={isLogged}/>
                    <Profile onLogout={handleLogout} />
                  </>
                }
              />

            {/* по роутам /signin и /signup отображаются страницы авторизации и регистрации.     */}
            <Route exact path="/signin" 
              element={
                <Login onLogin={handleLogin}/>
              } 
              />
  
              <Route exact path="/signup" 
                element={
                  <Register onRegister={handleRegister} />
                }
              />

              <Route exact path="*" element={<Error404/>} />
            </Routes>
          </div>
        </CurrentUserContext.Provider>
    );
}

export default App;