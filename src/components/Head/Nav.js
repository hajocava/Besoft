import React, { useState, useEffect } from 'react'
import anime from 'animejs'


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
            const currentScrollPos = window.pageYOffset

            if(currentScrollPos > 50)
                setState(state => {
                    return {
                        ...state,
                        prevScroll: currentScrollPos,
                        visible: state.prevScroll > window.pageYOffset
                    }
                })
        }

        anime.timeline().add({
            targets: ['nav li'],
            translateX: [-20, 0],
            opacity: [0, 1],
            duration: 500,
            easing: "easeOutSine",
            delay: anime.stagger(100)
        })


        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    return (
        <nav className={visible ? `${prevScroll < 90 ? '' : 'shadow'}` : 'hidden'}>
            <div className="container">
                <ul className="d-none d-md-flex justify-content-between align-items-center">
                    <li>Services</li>
                    <li>About</li>
                    <li className="logo mb-2">Besoft</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <div className="movil d-flex d-md-none justify-content-between align-items-center">
                    <div className="logo d-md-none mb-2">
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
