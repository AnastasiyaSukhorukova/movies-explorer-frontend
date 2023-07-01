import React, { useState } from "react";
import "./BurgerMenu.css";
import account from "../../images/account.svg"
import burgermenuOpen from "../../images/burgermenu-open.svg";
import burgermenuButtonClose from "../../images/burgermenu-close.svg";
import { Link } from "react-router-dom";

function BurgerMenu() {

  const [menuIsActive, setMenuIsActive] = useState(false)

  return(
    <div className="burgermenu">
      
      {!menuIsActive &&
        <div className="hamburger-menu__notactive"> 
          <button className="hamburger-menu__button" onClick={()=>setMenuIsActive(prev=>setMenuIsActive(!prev))}>
            <img src={burgermenuOpen} alt="логотип меню" />
          </button>
        </div>
      }

      {menuIsActive && 
      <div className="hamburger-bg">
        <div className="hamburger-menu__active">
          <button className="hamburger-menu__close" onClick={()=>setMenuIsActive(prev=>setMenuIsActive(!prev))}>
            <img src={burgermenuButtonClose} alt="бургер меню закрыть" />
          </button>
          <nav className="hamburger-menu__links">
              <Link className="hamburger-menu__link" to="/">Главная</Link>
              <Link className="hamburger-menu__link hamburger-menu__link_active" to="/movies">Фильмы</Link>
              <Link className="hamburger-menu__link" to="/saved-movies">Сохранённые фильмы</Link>
          </nav>
          <nav className='hamburger-menu__footer'>
            <div className="hamburger-menu__footer-box">
            <Link to="/profile" className="header__button-account">
            Аккаунт
            <img className="header__button-image" src={account} alt="аккаунт" />
            </Link>
            </div>
          </nav>
        </div>
      </div>
      
      }
    </div>
  );
}

export default BurgerMenu;