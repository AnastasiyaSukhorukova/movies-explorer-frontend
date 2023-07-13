import React from "react";
import "./Profile.css";
import { useState } from 'react';

const Profile = ({ onLogout }) => {

  const [user, setUser] = useState({name: 'Анастасия', email: 'email@mail.ru'});

  const [isEditing, setIsEditing] = useState(false);

  const handleMakeEditable = () => {
    setIsEditing(true);
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({...user, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile edit form submitted');
    setIsEditing(false);
  }

  const handleLogout = () => {
    onLogout();
  }

  return(
    <main className="profile">
      <section className='profile__content'>
        <h1 className='profile__title'>{`Привет, ${user.name}!`}</h1>
        <form className='profile__form' onSubmit={handleSubmit}>
            <fieldset className='profile__fieldset'>
                <label className='profile__fields'>
                    <p className='profile__input-name'>Имя</p>
                    <input className='profile__input'
                        disabled={!isEditing}
                        type='text'
                        name='name'
                        placeholder='Имя'
                        minLength={2}
                        maxLength={30}
                        defaultValue={user.name || ''}
                        onChange={handleChange}
                        required
                    />
                </label>
                <div className="profile__line"></div>
                <label className='profile__fields'>
                    <p className='profile__input-email'>E-mail</p>
                    <input className='profile__input'
                        disabled={!isEditing}
                        type='email'
                        name='email'
                        value={user.email || ''}
                        onChange={handleChange}
                        placeholder='E-mail'
                        required />
                </label>
            </fieldset>

            {
          isEditing
            ? <button
                type="submit"
                className="profile__submit"
                // disabled={isSameValues || !isValid}
              >
                Сохранить
              </button>
            : <div className="profile__nav">
                <button
                  type="button"
                  className="profile__button profile__button_type_edit"
                  onClick={handleMakeEditable}
                >
                  Редактировать
                </button>
                <button
                  type="button"
                  className="profile__button profile__button_type_logout"
                  onClick={handleLogout}
                >
                  Выйти из аккаунта
                </button>
              </div>
        }

            {/* <div className='profile__nav'>
                <button className='profile__button_edit' type='submit' onClick={handleMakeEditable}>Редактировать</button>
                <button className='profile__button_signin' type='button' onClick={handleLogout}>Выйти из аккаунта</button>
            </div> */}
        </form>
      </section>
    </main>
  );
}

export default Profile;