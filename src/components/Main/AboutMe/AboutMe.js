// AboutMe — компонент с информацией о студенте.

import React from "react";
import "./AboutMe.css";
import Avatar from "../../../images/avatar.png";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__container">
        <div className="aboutme__information">
          <h3 className="aboutme__name">Анастасия</h3>
          <p className="aboutme__job">Фронтенд разработчик, 23 года</p>
          <p className="aboutme__info">Я родилась и живу в городе Белгород. Я закончила институт экономики и управления НИУ "БелГУ". В данный момент я сотрудничаю с аутсорсинговой 
          бухгалтерской компанией как ИП. Я люблю пробовать себя в новых направлениях. Планирую совмещать разные виды деятельности, 
          развиваться и в бухгалтерии, и в it.
          </p>
          <a className="aboutme__github" href="https://github.com/AnastasiyaSukhorukova" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img className="aboutme__avatar" src={Avatar} alt="Сухорукова Анастасия"></img>
      </div>
      <Portfolio/>
    </section>
  );
}

export default AboutMe;