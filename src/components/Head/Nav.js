import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
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
        <nav className={visible || menuMovil ? `${prevScroll < 90 ? '' : 'shadow'}` : 'hidden'}>
            <div className={`logo movil ${menuMovil ? 'active' : ''}`}>Besoft</div>
            <div className={`${width > 767 ? 'container' : ''}`}>
                <ul className={`nav-links ${menuMovil ? 'open' : ''}`}>
                    <NavLink to={"#"}>
                        <li>Services</li>
                    </NavLink>
                    <NavLink to={"#"}>
                        <li>About</li>
                    </NavLink>
                    <NavLink className="d-none d-md-inline" to={"#"}>
                        <li className="logo mb-2">Besoft</li>
                    </NavLink>
                    <NavLink to={"#"}>
                        <li>Projects</li>
                    </NavLink>
                    <NavLink to={"#"}>
                        <li>Contact</li>
                    </NavLink>
                </ul>
            </div>
            <div onClick={showMenuMovil} className={`hamburguer ${menuMovil ? 'active' : ''}`}>
                <span className="d-block"></span>
                <span className="d-block align-self-end"></span>
            </div>
        </nav>
    )
}
