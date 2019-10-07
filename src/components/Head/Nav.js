import React, { useState, useEffect } from 'react'
import anime from 'animejs'
import getWindowDimensions from '../Workflow/getWindowDimensions'


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

            if (currentScrollPos > 50)
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
    }, [])

    const { width } = getWindowDimensions();

    return (
        <nav className={visible ? `${prevScroll < 90 ? '' : 'shadow'}` : 'hidden'}>
            <div className={`logo movil ${menuMovil ? 'active' : ''}`}>Besoft</div>
            <ul className={`nav-links ${menuMovil ? 'open' : ''} ${width > 767 ? 'container' : ''}`}>
                <li>Services</li>
                <li>About</li>
                <li className="logo mb-2 d-none d-md-inline">Besoft</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <div onClick={showMenuMovil} className={`hamburguer ${menuMovil ? 'active' : ''}`}>
                <span className="d-block"></span>
                <span className="d-block align-self-end"></span>
            </div>
        </nav>
    )
}
