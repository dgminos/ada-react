import React from 'react'
import { Nav } from '../../components'

export const Header = () => { //exporto el componente Header
    return (
        <header>
            <div>
                Esta es la cabecera de mi web
            </div>
            <Nav />
        </header>
    )
}

//el return renderiza el jsx del header,que tiene un div con texto y otro componente más, el Nav que está adentro de la carpeta components