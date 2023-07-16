import React, { useEffect, useState, useContext } from "react";
import "./Profile.css";
import { getProfile, updateProfile } from "../../utils/MainApi"
import { CurrentUserContext } from "../App/App";
import { useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
// import { PROFILE_UPDATE_MESSAGE } from "../../constants/constants"

const Profile = () => {
  const { user, setUser, setLogedId, openPopup } = useContext(CurrentUserContext);
  
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [isUpdate, setIsUpdate] = useState(false)
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    getProfile()
    .then(data => {
      setUser(data);
      setName(data.name)
      setEmail(data.email)
    }).catch(error=>{
        console.error('getProfile error ', error)
    });
  },[])

  useEffect(() => {
    if((user.name !== name || user.email !== email)){
      setIsUpdate(true)
    } else {
      setIsUpdate(false)
    }
  }, [user, email, name])
  
  const handleProfileUpdate = (name, email) => {
    updateProfile({name: name, email: email})
    .then(data => {
      setUser(data);
      if (data.message) {
        openPopup(data.message)
      } else {
        openPopup('Изменения в профиль внесены!')
      }
    })
    .catch(error => {
      console.error('handleProfileUpdate error ', error)
    });
  }

  const signOut = () => {
    localStorage.clear();
    setLogedId(false);
    navigate("/");
    window.location.reload();
  }

  return(
    <>
    <Header loged={true}/>
    <main className="profile">
      <section className='profile__content'>
        <h1 className='profile__title'>{`Привет, ${user.name}!`}</h1>
        <form className='profile__form' onSubmit={e => e.preventDefault()}>
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
                        onChange={(event)=> setName(event.target.value)}
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
                // disabled={isSameValues || !isValid}
              >
                Сохранить
              </button>
            : <div className="profile__nav">
                <button
                  type="button"
                  className="profile__button profile__button_type_edit"
                  onClick={()=>handleProfileUpdate(name, email)} 
                  disabled={!isUpdate}
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