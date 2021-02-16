import React from 'react'
import './header.css'

const Header = ({ title, showAddButton, handleClick }) => {


    return (
        <header className='main-header'>
            <h1>{title}</h1>
            {!showAddButton && <button className='btn btn-success btn1' onClick={handleClick}>Agregar</button>}
        </header>
    )
}

Header.defaultProps = {
    showAddButton: false
}
export { Header }

