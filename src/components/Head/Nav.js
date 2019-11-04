import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll';
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

    const hideMenuMovil = () => setState({ ...state, menuMovil: false })


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
            delay: anime.stagger(200)
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

                    <li>
                        <Link to="services" spy={true} smooth={true} offset={-70} duration={500} onClick={hideMenuMovil}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={hideMenuMovil}>
                            About
                        </Link>
                    </li>
                    <li className="d-none d-md-inline">
                        <Link to="services" className="logo mb-2" spy={true} smooth={true} offset={-70} duration={500} onClick={hideMenuMovil}>
                            Besoft
                        </Link>
                    </li>
                    <li>
                        <Link to="build-form" spy={true} smooth={true} offset={-70} duration={500} onClick={hideMenuMovil}>
                            Build
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={hideMenuMovil}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div onClick={showMenuMovil} className={`hamburguer ${menuMovil ? 'active' : ''}`}>
                <span className="d-block"></span>
                <span className="d-block align-self-end"></span>
            </div>
        </nav>
    )
}