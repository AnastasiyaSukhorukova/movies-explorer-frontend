import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register() {

  return(
    <main className="register">
      <section className="register__box">
        <div className="register__logo-box">
          <Link to="/">
            <img src={logo} alt="Логотип" className="register__logo" />
          </Link>
        </div>

        <h1 className="register__title">Добро пожаловать!</h1>

        <form noValidate className="register__form" name="register-form">
          <div className="register__field">
          <label>
                  <span className="register__name">Имя</span>
                  <input 
                        className="register__input"
                         type="text" 
                         name="name" 
                         placeholder="Введите Ваше Имя"
                         autoComplete="off"
                         minLength={4}
                         maxLength={30}
                         pattern="^[A-Za-zА-Яа-яЁё /s -]{4,30}"
                         required={true}
                         defaultValue={'Виталий'}
                   />
                   <span className="register__field-error" ></span>
              </label>
              <label>
                  <span className="register__email">E-mail</span>
                  <input 
                        className="register__input"
                         type="email" 
                         name="email" 
                         placeholder="Введите Ваш E-mail"
                         autoComplete="off"
                         pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$"
                         required={true}
                         minLength={2}
                         maxLength={30}
                         defaultValue={'pochta@yandex.ru'}
                        //  onChange={handleChange}
                  />
                  <span className="register__field-error" ></span>
              </label>
              <label>
                    <span className="register__password">Пароль</span>
                    <input 
                          className="register__input register__input-invalid"
                         type="password" 
                         name="password" 
                         placeholder="Введите Ваш Пароль"
                         autoComplete="off"
                         minLength={4}
                         maxLength={8}
                         required={true}
                         defaultValue={'••••••••••••••'}
                        //  onChange={handleChange}
                    />
              </label>
              <span className="register__field-error" >{'Что-то пошло не так...'}</span>
          </div>
          <div className="register__button-box">
              <button 
              className="register__button"
              type="button">
                Зарегистрироваться</button>
              <p className="register__link">
                  Уже зарегистрированы?
                  <Link to="/signin" className="register__login">Войти</Link>
              </p>
          </div>
        </form>

      </section>
    </main>
  );
}

export default Register;