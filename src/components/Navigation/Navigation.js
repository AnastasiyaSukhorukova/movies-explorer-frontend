import React, { useState } from "react";
import "./Navigation.css";
import account from "../../images/account.svg"
import burgermenuOpen from "../../images/burgermenu-open.svg";
import burgermenuButtonClose from "../../images/burgermenu-close.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navigation() {

  const [menuIsActive, setMenuIsActive] = useState(false)

  return(
      <div className="burgermenu">
      
      {!menuIsActive &&
        <div className="hamburger-menu__notactive"> 
          <button type="button" className="hamburger-menu__button" onClick={()=>setMenuIsActive(prev=>setMenuIsActive(!prev))}>
            <img src={burgermenuOpen} alt="логотип меню" />
          </button>
        </div>
      }

      {menuIsActive && 
      <div className="hamburger-bg">
        <div className="hamburger-menu__active">
          <button type="button" className="hamburger-menu__close" onClick={()=>setMenuIsActive(prev=>setMenuIsActive(!prev))}>
            <img src={burgermenuButtonClose} alt="бургер меню закрыть" />
          </button>


          <ul className="hamburger-menu__links">
          <li><Link className="hamburger-menu__link" to="/">Главная</Link></li>
            <li>
            <NavLink
            to="/movies"
            className={({ isActive }) =>
            isActive ? "hamburger-menu__link hamburger-menu__link_active" : "hamburger-menu__link"
            }
            >
            Фильмы
            </NavLink>
            </li>
            <li><Link className="hamburger-menu__link" to="/saved-movies">Сохранённые фильмы</Link></li>
          </ul>

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

export default Navigation;