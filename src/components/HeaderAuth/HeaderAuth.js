import React from "react";
import "./HeaderAuth.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import account from "../../images/account.svg"
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function HederAuth() {

  const location = useLocation();
  
  return(
    <header className={`header__auth ${location.pathname === "/" ? 'header__auth-yes':''}`}>
      <div className="header__auth-container"> 
        <div className="header__position">
          <Link to="/" className="header__auth-logo">
            <img src={logo} alt="Логотип" />
          </Link>
            <div className="header__container_films">
              <Link to="/movies" className="header__button-films">
                Фильмы
              </Link>
                 <Link to="/saved-movies" className="header__button-savefilms">
                   Сохранённые фильмы
                 </Link>
            </div>
          </div>
        <div>
        <BurgerMenu />
        <div className="header__button-container">
        <Link to="/profile" className="header__button-account">
            Аккаунт
            <img className="header__button-image" src={account} alt="аккаунт" />
          </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HederAuth;