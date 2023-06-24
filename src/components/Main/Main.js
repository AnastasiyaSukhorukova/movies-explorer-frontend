// компонент страницы «О проекте». Он будет содержать только презентационные компоненты 
//и в будущем, за исключением шапки навигации. 

// Portfolio — компонент со ссылками на другие проекты.

import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs"
import AboutMe from "./AboutMe/AboutMe";
// import Footer from "../Footer/Footer";

function Main() {

    return (
        <div className="main">
            <Header />
            <main>
                <Promo/>
                <AboutProject/>
                <Techs/>
                <AboutMe/>
            </main>
            {/* <Footer/> */}
        </div>
    );
}

export default Main;