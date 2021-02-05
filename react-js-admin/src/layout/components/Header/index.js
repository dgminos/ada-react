import React from "react";
import { NavBar } from "./components";
import "./styles.css";

const Header = (props) => {
    const { title } = props;

    return (
        <header className="header">
            <NavBar title={title} />
        </header>
    );
};

export { Header };
