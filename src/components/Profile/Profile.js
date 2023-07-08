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
    <>
    <section className="profile">
      <div className='profile__content'>
        <h2 className='profile__title'>{`Привет, ${user.name}!`}</h2>
        <form className='profile__form' onSubmit={handleSubmit}>
            <fieldset className='profile__fieldset'>
                <label className='profile__fields'>
                    <p className='profile__input-name'>Имя</p>
                    <input className='profile__input'
                        disabled={isEditing}
                        type='text'
                        name='name'
                        placeholder='Имя'
                        minLength={2}
                        maxLength={30}
                        value={user.name || ''}
                        onChange={handleChange}
                        required
                    />
                </label>
                <div className="profile__line"></div>
                <label className='profile__fields'>
                    <p className='profile__input-email'>E-mail</p>
                    <input className='profile__input'
                        disabled={isEditing}
                        type='email'
                        name='email'
                        value={user.email || ''}
                        onChange={handleChange}
                        placeholder='E-mail'
                        required />
                </label>
            </fieldset>
            <div className='profile__nav'>
                <button className='profile__button_edit' type='submit' onClick={handleMakeEditable}>Редактировать</button>
                <button className='profile__button_signin' onClick={handleLogout}>Выйти из аккаунта</button>
            </div>
        </form>
      </div>
    </section>
    </>
  );
}

export default Profile;