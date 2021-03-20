
import React, { FC } from 'react'
import { Header } from './components'
import './main.css'

interface Props {
    title?: string
    showAddButton?: boolean
    handleClick?: () => void
}

const Main: FC<Props> = ({ children, title, showAddButton, handleClick }) => {

    return (
        <main className='main bg-light'>
            <Header title={title} showAddButton={showAddButton} handleClick={handleClick} />
            {children}
        </main>
    )
}

export { Main };