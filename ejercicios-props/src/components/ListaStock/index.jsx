import React from 'react'
import Stock from '../Stock';
import './ListaStock.css'

const ListaStock = ({ productos }) => {

    return (
        <ul>
            {productos.map(producto => <Stock producto={producto.producto} cantidad={producto.cantidad} maximo={producto.maximo} />)}
        </ul>
    )
}

export default ListaStock