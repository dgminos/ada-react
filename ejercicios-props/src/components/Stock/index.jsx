import React from 'react'

const Stock = ({ producto, cantidad, maximo }) => {

    let color = '';

    if (cantidad <= maximo * 0.1) {
        color = 'red'
        //console.log("color: " + color)
    }
    else if (cantidad > maximo * 0.1 && cantidad <= maximo * 0.25) {
        color = 'orange'
    }
    else if (cantidad > maximo * 0.25 && cantidad <= maximo * 0.40) {
        color = 'yellow'
    }
    else if (cantidad > maximo * 0.40) {
        color = 'green'

    }
    let colorStyle = { color }
    // console.log("color: " + color)

    return (
        <>
            {/* <ListaStock /> */}
            <li style={colorStyle}>
                {producto}
            </li>
        </>
    )
}

export default Stock