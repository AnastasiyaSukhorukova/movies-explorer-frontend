import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login() {
  
  return(
    <section className="login">
      <div className="login__box">
            <div className="login__logo-box">
              <Link to="/">
                <img src={logo} alt="Логотип" className="login__logo" />
              </Link>
            </div>
        <h2 className="login__title">Рады видеть!</h2>
        <form noValidate className="login__form" name="login-form" onSubmit={e=> e.preventDefault()}>
          <div className="login__field">
              <label>
                  <span className="login__email">E-mail</span>
                  <input className="login__input" 
                         type="email"
                         name="email"
                         autoComplete="off"
                         placeholder="Введите Ваш E-mail" 
                         minLength={2}
                         maxLength={30}
                         pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$"
                         required={true}
                         value={'email@mail.ru'}
                  />
              </label>
              <label>
                  <span className="login__password">Пароль</span>
                  <input className="login__input" 
                         type="password"
                         name="password"
                         autoComplete="off"
                         placeholder="Введите Ваш Пароль" 
                         minLength={4}
                         maxLength={8}
                         required={true}
                   />
              </label>
          </div>
          <div className="login__button-box">
              <button className="login__button" type="submit">Войти</button>
              <Link className="login__link" to="/signup">
                  Ещё не зарегистрированы?
                  <span className="login__register">Регистрация</span>
              </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;