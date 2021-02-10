
import React from 'react'
import { Header } from './components'

const Main = ({ children, title, showAddButton }) => {
    return (
        <main className="main bg-light">

            <Header title={title} showAddButton={showAddButton} />
            {children}
        </main>
    )
}
export { Main }