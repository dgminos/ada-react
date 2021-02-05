import React from "react";
import PuntajeItem from "../PuntajeItem";


const Puntaje = ({ puntaje }) => {

    const lleno = puntaje
    const vacio = 5 - puntaje

    const itemsprops = []
    for (let i = 1; i <= lleno; i++) {
        itemsprops.push('lleno')
    }
    for (let i = 0; i <= vacio; i++) {
        if (i > 0) {
            itemsprops.push('vacio')
        }
    }
    return (<div>
        {itemsprops.map(item => (<PuntajeItem tipo={item} colorItem='coral' />))}
        <p>{puntaje} de 5 estrellas</p>
    </div>);
};

export default Puntaje;