// NavTab — компонент с навигацией по странице «О проекте».

import React from "react";
import "./NavTab.css";

function NavTab() {
    return (
        <div className="navtab">
            <a href="#about" className="navtab__link navtab__title">
                Узнать больше
            </a>
        </div>
    );
}

export default NavTab;