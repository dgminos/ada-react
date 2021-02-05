import React from "react";
import { Star } from "react-bootstrap-icons";
import { StarFill } from "react-bootstrap-icons";
import './PuntajeItem.css'

const PuntajeItem = ({ tipo, colorItem }) => {

    return (
        <div style={{ color: `${colorItem}`, display: 'inline-flex' }}>
            {tipo === 'lleno'
                ? <StarFill />
                : <Star />}
        </div>
    )
}

export default PuntajeItem;