import React, { useState, useEffect } from 'react'
import scrollPos from './getScrollPos'


export default function Nav() {
    const [state, setState] = useState(false)
    const showMenu = () => setState(!state)


    return (
        <nav className={scrollPos() > 0 ? 'shadow' : ''}>
            <div className="container">
                <ul className="d-none d-md-flex justify-content-between align-items-center">
                    <li>Services</li>
                    <li>About</li>
                    <li className="logo">Besoft</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <div className="movil d-flex d-md-none justify-content-between align-items-center">
                    <div className="logo d-md-none">
                        Besoft
                    </div>
                    <div onClick={showMenu} className={`icono-menu d-md-none d-flex flex-column ${state ? 'active' : ''}`}>
                        <span className="d-block"></span>
                        <span className="d-block align-self-end"></span>
                    </div>
                </div>
                <div className={`slide d-none d-md-none ${state ? 'active d-flex align-items-center justify-content-end' : ''}`}>
                    <ul className="d-flex flex-column align-items-end mr-4">
                        <li>Services</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
