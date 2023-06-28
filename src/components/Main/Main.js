// компонент страницы «О проекте». Он будет содержать только презентационные компоненты 
//и в будущем, за исключением шапки навигации. 

import React from "react";
import "./Main.css";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs"
import AboutMe from "./AboutMe/AboutMe";

function Main() {

    return (
        <div className="main">
            <main>
              <Promo/>
              <AboutProject/>
              <Techs/>
              <AboutMe/>
            </main>
        </div>
    );
}

export default Main;