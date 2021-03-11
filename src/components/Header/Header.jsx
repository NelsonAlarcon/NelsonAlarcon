import React from 'react'
import Barra from './Barra'

import './header.css';

const Header = () => {

    return (
        <header className="h-screen">
            <Barra />
            <div className="container mx-auto lg:pl-28 mt-28 lg:mt-56 contenido-header text-center lg:text-left">
                <p className="text-white text-4xl sm:text-7xl lg:text-5xl">Hi,</p>
                <p className="text-white text-4xl sm:text-7xl lg:text-5xl">I'm <span className="text-secondary">Nelson</span></p>
                <p className="text-white text-4xl sm:text-7xl lg:text-5xl">Web Developer</p>
                <i className="fas fa-chevron-down mt-8 sm:mt-24 lg:pl-28"></i>
            </div>
        </header>
    )
}

export default Header
