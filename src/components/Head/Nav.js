import React, { useState, useEffect } from 'react'


export default function Nav() {
    const initialState = {
        menuMovil: false,
        visible: true,
        prevScroll: window.pageYOffset
    }

    const [state, setState] = useState(initialState)
    const { menuMovil, visible, prevScroll } = state

    const showMenuMovil = () => setState({ ...state, menuMovil: !menuMovil })

    useEffect(() => {
        function handleScroll() {
            setState(state => {
                return {
                    ...state,
                    prevScroll: window.pageYOffset,
                    visible: state.prevScroll > window.pageYOffset
                }
            })
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={visible ? `${prevScroll === 0 ? '' : 'shadow'}` : 'hidden'}>
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
                    <div onClick={showMenuMovil} className={`icono-menu d-md-none d-flex flex-column ${menuMovil ? 'active' : ''}`}>
                        <span className="d-block"></span>
                        <span className="d-block align-self-end"></span>
                    </div>
                </div>
                <div className={`slide d-none d-md-none ${menuMovil ? 'active d-flex align-items-center justify-content-end' : ''}`}>
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
