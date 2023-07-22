import React, { useEffect, useState, useContext } from "react";
import "./Profile.css";
import { mainApi } from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from "../App/App";
import { PROFILE_UPDATE_MESSAGE } from "../../constants/constants"

const Profile = () => {
  const { currentUser, setcurrentUser, setLogedId, openPopup } = useContext(CurrentUserContext);
  
  const [name, setName] = useState(currentUser.name)
  const [email, setEmail] = useState(currentUser.email)
  const [isSameValues, setIsSameValues] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();

  const handleMakeEditable = () => {
    setIsEditing(true);
  }

  useEffect(()=>{
    mainApi.getProfile()
    .then(data => {
      setcurrentUser(data);
      setName(data.name)
      setEmail(data.email)
    }).catch(error=>{
        console.error('getProfile error ', error)
    });
  },[])

  useEffect(() => {
    if((currentUser.name !== name || currentUser.email !== email)){
      setIsSameValues(true)
    } else {
      setIsSameValues(false)
    }
  }, [currentUser, email, name])
  
  const handleProfileUpdate = (e) => {
    e.preventDefault();

    mainApi.editUser({name: name, email: email})
    .then(data => {
      setcurrentUser(data);
      if (data.message) {
        openPopup(data.message)
      } else {
        openPopup(PROFILE_UPDATE_MESSAGE)
      }
    })
    .catch(error => {
      console.error('handleProfileUpdate error ', error)
    })
    .finally(() => {
      setIsSameValues(true);
    })

    setIsEditing(false);
  }

  const signOut = () => {
    localStorage.clear();
    setLogedId(false);
    navigate("/");
    window.location.reload();
  }
  return(
    <>
    <main className="profile">
      <section className='profile__content'>
        <h1 className='profile__title'>Привет, {currentUser?.name}!</h1>
        <form className='profile__form' onSubmit={handleProfileUpdate}>
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
                        value={name}
                        required
                        onChange={(event)=> setName(event.target.value)}
                    />
                </label>
                <div className="profile__line"></div>
                <label className='profile__fields'>
                    <p className='profile__input-email'>E-mail</p>
                    <input className='profile__input'
                        disabled={!isEditing}
                        type='email'
                        name='email'
                        value={email}
                        onChange={(event)=> setEmail(event.target.value)}
                        placeholder='E-mail'
                        required />
                </label>
            </fieldset>

            {
          isEditing
            ? <button
                type="submit"
                className="profile__submit"
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
                  onClick={signOut}
                >
                  Выйти из аккаунта
                </button>
              </div>
}
        
        </form>
      </section>
    </main>
  </>
  );
}

export default Profile;