import React, { useState } from 'react'
import { api } from '../../../utils/api'
//import './tasks.css'


const Card = ({ id, titulo, fecha, descripcion, asignada, estado }) => {

    const [taskStatus, setTaskStatus] = useState(estado) //taskStatus=variable de estado;setTaskStatus=función para actualizar el estado;useState=nos da el estado actual al renderizar


    const handleClick = (status) => {
        api.patch(`/tasks/${id}.json`, { estado: status })
            .then(response => setTaskStatus(response.data.estado))
    }

    return (

        <div key={id} className="card border-dark mb-2">
            <div className="card-header text-center">
                <button className='btn btn-outline-info btn-sm' onClick={() => handleClick('pendiente')}>Pendiente</button>
                <button className='btn btn-outline-success btn-sm' onClick={() => handleClick('realizada')}>Realizada</button>
                <button className='btn btn-outline-danger btn-sm' onClick={() => handleClick('cancelada')}>Cancelada</button>
            </div>
            <div className="card-body p-3">
                <h5 className="card-title mt-2 mb-2">Titulo: {titulo}</h5>
                <h6 className="float-right text-muted"><b>Fecha:</b>{fecha}</h6>
                <p className=" card-text mb-0 pr-2 mb-2 d-inline-block"><b>Descripción:</b> {descripcion}</p>
                <p className=" card-text align-middle"><b>Asignada a: {asignada}</b></p>
            </div>
        </div>
    )
}

export { Card }