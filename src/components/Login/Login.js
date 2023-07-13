import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login({onLogin, handleChange}) {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin();
  }
  
  return(
    <main className="login">
      <section className="login__box">
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
                         defaultValue={'pochta@yandex.ru'}
                        //  onChange={handleChange}
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
                        //  onChange={handleChange}
                   />
              </label>
          </div>
          <div className="login__button-box">
              <button className="login__button" type="button">Войти</button>
              <p className="login__link">
                  Ещё не зарегистрированы?
                  <Link to="/signup" className="login__register">Регистрация</Link>
              </p>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;