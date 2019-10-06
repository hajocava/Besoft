import React from 'react'
import { NavLink } from 'react-router-dom'


export default function footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 logo mb-5">Besoft</div>
                    <div className="col-6 col-md-4 col-lg-3 mb-5">
                        <h4>Solutions</h4>
                        <ul>
                            <li><NavLink to={"#"}>Aplicaciones Mobiles</NavLink></li>
                            <li><NavLink to={"#"}>Desarrollo web</NavLink></li>
                            <li><NavLink to={"#"}>Organizacion</NavLink></li>
                            <li><NavLink to={"#"}>Diseño de experiencias</NavLink></li>
                            <li><NavLink to={"#"}>Consultoria</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-5">
                        <h4>Consulting</h4>
                        <ul>
                            <li><NavLink to={"#"}>Sobre nosotros</NavLink></li>
                            <li><NavLink to={"#"}>Clientes</NavLink></li>
                            <li><NavLink to={"#"}>Noticias</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-5">
                        <h4>About</h4>
                        <ul>
                            <li><NavLink to={"#"}>Portafolio</NavLink></li>
                            <li><NavLink to={"#"}>Blog</NavLink></li>
                            <li><NavLink to={"#"}>Contacto</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-5">
                        <h4>Follow us</h4>
                        <div className="iconos d-flex flex-wrap">
                            <NavLink to={"#"}><i className="fab fa-facebook-square"></i></NavLink>
                            <NavLink to={"#"}><i className="fab fa-youtube-square"></i></NavLink>
                            <NavLink to={"#"}><i className="fab fa-instagram"></i></NavLink>
                            <NavLink to={"#"}><i className="fab fa-linkedin"></i></NavLink>
                            <NavLink to={"#"}><i className="fab fa-twitter-square"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
