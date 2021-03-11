import React from 'react'
import logo from '../../img/MyLogo.png';

const Barra = () => {
    // let menuOpen = false;
    const handleClick = () => {
        const menuBtn = document.querySelector('.menu-btn');
        const menuNav = document.querySelector('.nav-links');
        menuBtn.classList.toggle('open');
        menuNav.classList.toggle('open');
    }
    /* 
        //#C004D9 rosado
        //#138AF2 celeste
    */
    return (

        <div className="barra px-8 py-1 flex justify-between items-center">
            <img src={ logo } alt="logo" />
            <nav className="lg:space-x-28">
                <div className="menu-btn lg:hidden" onClick={ handleClick }>
                    <div className="menu-btn__burger"></div>
                </div>
                <div className="nav-links lg:block">
                    <a href="www.google.com" className="text-white">About me</a>
                    <a href="www.google.com" className="text-white">Resume</a>
                    <a href="www.google.com" className="text-white">Portafolio</a>
                    <a href="www.google.com" className="text-white">Contact</a>
                </div>
            </nav>
        </div>
    )
}

export default Barra
