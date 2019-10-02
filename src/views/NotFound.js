import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
    <div>
        <p className="number">404</p>
        <p className="description">Pagina no encontrada</p>
        <NavLink to={"/"}>
            <button className="btn">Ir a inicio</button>
        </NavLink>
    </div>
)