import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login({onLogin}) {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin();
  }
  
  return(
    <main className="login">
      <div className="login__box">
            <div className="login__logo-box">
              <Link to="/">
                <img src={logo} alt="Логотип" className="login__logo" />
              </Link>
            </div>
        <h1 className="login__title">Рады видеть!</h1>
        <form noValidate className="login__form" name="login-form" onSubmit={handleSubmit}>
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
                         value={'pochta@yandex.ru'}
                  />
              </label>
              <label>
                  <span className="login__password">Пароль</span>
                  <input className="login__input" 
                         type="password"
                         name="password"
                         autoComplete="off" 
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
                  <button className="login__register" type="submit">Регистрация</button>
              </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;