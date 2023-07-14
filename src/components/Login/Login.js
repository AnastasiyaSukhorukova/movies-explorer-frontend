import React, { useState, useContext, useEffect } from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../utils/MainApi";
import { CurrentUserContext } from "../App/App";

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [errorMessageEmail, setErrorMessageEmail] = useState('Введите email')
  const [errorMessagePassword, setErrorMessagePassword] = useState('Введите пароль')
  const [inputValid, setInputValid] = useState(false)
  const { setLogedId } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const hendleLogin = () => {
    signin({email, password})
    .then(data => {
      if(data.message) {
        console.error(data.message)
      } else {
        localStorage.setItem('token', data.token)
        setLogedId(true)
        navigate("/movies")
      }
    }).catch(error=>{
        console.log('signin error ', error)
    });
  }

  useEffect(() => {
    if (errorMessageEmail || errorMessagePassword) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [errorMessageEmail, errorMessagePassword])

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email": 
        setEmailDirty(true)
        break

      case "password": 
        setPasswordDirty(true)
        break

        // no default
    }
  }

  const emailHandler = (e) => {
    blurHandler(e)
    setEmail(e.target.value)
    const pattern = /^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/
    if (!pattern.test(String(e.target.value).toLocaleLowerCase())) {
      setErrorMessageEmail("Неккоректный email")
    } else {
      setErrorMessageEmail("")
    }
  }

  const passwordHandler = (e) => {
    blurHandler(e)
    setPassword(e.target.value)
      if (e.target.value.length < 4 || e.target.value.length > 8) {
        setErrorMessagePassword("Пароль должен содержать от 4 до 8 символов")
        if (!e.target.value) {
          setErrorMessagePassword("Пароль не может быть пустым")
        }
      } else {
        setErrorMessagePassword("")
      }
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
                         value={email}
                         onChange={e => emailHandler(e)}
                  />
              {(emailDirty && errorMessageEmail) && <div className="login__error">{errorMessageEmail}</div>}
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
                         value={password}
                         onChange={e => passwordHandler(e)}
                   />
                   {(passwordDirty && errorMessagePassword) && <div className="login__error">{errorMessagePassword}</div>}
              </label>
          </div>
          <div className="login__button-box">
              <button className="login__button" 
              type="submit" 
              onClick={hendleLogin} 
              disabled={!inputValid}>Войти</button>
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