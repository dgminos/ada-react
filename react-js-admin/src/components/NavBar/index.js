import React from "react";

const NavBar = (props) => {
    return (
        <nav>
            <ul>
                <li>{props.number}</li>
                <li>
                    <button onClick={() => props.setNewPage("Dashboard")}>Inicio</button>
                </li>
                <li>
                    <button onClick={() => props.setNewPage("Products")}>
                        Productos
          </button>
                </li>
                <li>
                    <button onClick={() => props.setNewPage("Users")}>Users</button>
                </li>
            </ul>
        </nav>
    );
};

export { NavBar };