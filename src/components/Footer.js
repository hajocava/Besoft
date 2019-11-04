import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { NavLink } from 'react-router-dom'


export default function footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 logo mb-5">Besoft</div>
                    <div className="col-6 col-md-3 mb-5">
                        <h4>Solutions</h4>
                        <ul>
                            <li><NavLink to={"#"}>Aplicaciones Mobiles</NavLink></li>
                            <li><NavLink to={"#"}>Desarrollo web</NavLink></li>
                            <li><NavLink to={"#"}>Organizacion</NavLink></li>
                            <li><NavLink to={"#"}>Diseño de experiencias</NavLink></li>
                            <li><NavLink to={"#"}>Consultoria</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3 mb-5">
                        <h4>Consulting</h4>
                        <ul>
                            <li><NavLink to={"#"}>Sobre nosotros</NavLink></li>
                            <li><NavLink to={"#"}>Clientes</NavLink></li>
                            <li><NavLink to={"#"}>Noticias</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3 mb-5">
                        <h4>About</h4>
                        <ul>
                            <li><NavLink to={"#"}>Portafolio</NavLink></li>
                            <li><NavLink to={"#"}>Blog</NavLink></li>
                            <li><NavLink to={"#"}>Contacto</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3 mb-5">
                        <h4>Follow us</h4>
                        <div className="iconos d-flex flex-wrap">
                            <NavLink to={"#"}><i className="la la-facebook-square"></i></NavLink>
                            <NavLink to={"#"}><i className="la la-twitter"></i></NavLink>
                            <NavLink to={"#"}><i className="la la-youtube-square"></i></NavLink>
                            <NavLink to={"#"}><i className="la la-instagram"></i></NavLink>
                        </div>
                        <button className="btn" style={{marginTop: '1rem'}} onClick={() => scroll.scrollToTop()}>
                            Scroll to top
                        </button>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="container d-flex justify-content-between flex-wrap">
                    <div className="mb-4 mb-sm-0">© 2019 Besoft. All rights reserved.</div>
                    <div>
                        <NavLink className="mr-5" to={"#"}>Privacy Policy</NavLink>
                        <NavLink to={"#"}>Terms & Conditions</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
