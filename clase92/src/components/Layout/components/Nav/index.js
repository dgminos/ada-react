import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <ul className="navList">
                <li className="navListItem">
                    Inicio
                </li>
                <li className="navListItem">
                    Productos
                </li>
                <li className="navListItem">
                    Contacto
                </li>
                <li className="login">
                    Login
                </li>
            </ul>

        </nav>
    );
}

export default Nav;