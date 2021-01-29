import React, { useState } from 'react'

const P = () => {
    const [color, setColor] = useState()

    const changeColor = () => {
        setColor(color === 'red' ? 'black' : 'red')
    }

    return (
        <p onClick={changeColor} style={{ color }}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. </p>
    )
}

export { P }