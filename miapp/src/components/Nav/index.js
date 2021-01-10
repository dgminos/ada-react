import React from 'react'
//import { List } from '../../components' //esta es la carpeta COMPONENTS GENERAL
import { UserOptions } from './components';//esta es la carpeta COMPONENTS QUE PERTENECE A LA CARPETA DE NAV

export const Nav = () => {
    return (
        <nav>
            {/* <List /> */}
            <UserOptions />
        </nav>
    )
}