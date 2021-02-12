import React, { useState } from 'react'
import { Layout, Main } from '../../../components'
import './add.css'
import Api from '../../../utils/api'


const AddTaskForm = () => {

    const [tareas, setTareas] = useState({
        titulo: '',
        fecha: '',
        descripcion: '',
        asignada: '',
    })

    const handleInputChange = (event) => {
        //console.log(event.target.name)
        //console.log(event.target.value)
        setTareas({
            ...tareas,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        //console.log('enviando datos...' + tareas.titulo + ' ' + tareas.fecha)
        console.log(tareas.descripcion);
        Api.post('/tasks.json', {
            titulo: tareas.titulo,
            fecha: tareas.fecha,
            descripcion: tareas.descripcion,
            asignada: tareas.asignada,
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <Layout >
            <Main title="Agregar Tarea" showAddButton>
                <form className='form-agregar-tarea' onSubmit={enviarDatos}>
                    <div className="form-group">
                        <label htmlFor="titulo">Título</label>
                        <input type="text" name="titulo" className="form-control" id="titulo" placeholder="Título" onChange={(event) => handleInputChange(event)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fecha">Fecha</label>
                        <input type="date" name="fecha" className="form-control" id="fecha" placeholder="" onChange={(event) => handleInputChange(event)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="textarea">Descripción</label>
                        <textarea className="form-control" type='text' name='descripcion' id="textarea" rows="3" onChange={(event) => handleInputChange(event)}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="asignado">Asignada a:</label>
                        <select className="form-control" id="asignado" name='asignado' onChange={(event) => handleInputChange(event)}>
                            <option value='Juan Altamirano' >Juan Altamirano</option>
                            <option value='Natalia Suarez'>Natalia Suarez</option>
                            <option value='Gala Lantier'>Gala Lantier</option>
                            <option value='Nicolas Weber'>Nicolas Weber</option>
                            <option value='Mariana Cadifi'>Mariana Cadifi</option>
                        </select>
                    </div>
                    <button className='btn btn-primary btn-agregar-tarea' type='submit'>Agregar</button>
                </form>

            </Main >
        </Layout >

    )
}

export { AddTaskForm }