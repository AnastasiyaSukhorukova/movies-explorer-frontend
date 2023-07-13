// Preloader — отвечает за работу прелоадера.
//  https://code.s3.yandex.net/web-developer/archives/Preloader.zip

import React from 'react'
import './Preloader.css'

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader