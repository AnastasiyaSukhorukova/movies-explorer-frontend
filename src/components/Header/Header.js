import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import { CurrentUserContext } from "../App/App";

const Header = () => {

  const { isLogged } = useContext(CurrentUserContext);

  return (
    <>
        {isLogged && <HeaderAuth />}
        {!isLogged && (
        <header className="header">
          <div className="header__container">
            <Link to="/">
              <img src={logo} alt="Логотип" className="header__logo" />
            </Link>
            <nav className="header__button-container">
          
              <Link to="/signup" className="header__button-signup">
              {/* <button type="button" className="header__button"> */}
                Регистрация
                {/* </button> */}
              </Link>

              {/* <button type="button" className="header__button"> */}
              <Link to="/signin" className="header__button-auth">
                Войти
              </Link>
              {/* </button> */}
            </nav>
          </div>
        </header>
        )}
    </>
  );
}

export default Header;