
import React from 'react'
import { Header } from './components'
import './main.css'

const Main = ({ children, title, showAddButton, handleClick }) => {

    return (
        <main className='main bg-light'>
            <Header title={title} showAddButton={showAddButton} value={''} handleClick={handleClick} />
            {children}
        </main>
    )
}

export { Main };