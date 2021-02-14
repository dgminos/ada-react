
import React from 'react'
import { Header } from './components'
import { useHistory } from 'react-router-dom'
import './main.css'

const Main = ({ children, title, showAddButton, handleClick }) => {
    let history = useHistory();

    const onclick = () => {
        history.push("/tasks/add");
    }
    return (
        <main className="main bg-light">
            <Header title={title} showAddButton={showAddButton} value={""} handleClick={onclick} />
            {children}
        </main>
    )
}

export { Main };