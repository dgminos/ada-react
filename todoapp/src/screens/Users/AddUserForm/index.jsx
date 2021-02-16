
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Main } from '../../../components'
import { api } from '../../../utils'

const AddUserForm = () => {

    let history = useHistory();

    const [usuaries, setUsuaries] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        contraseña: '',
    })

    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        //console.log(event.target.name)
        //console.log(event.target.value)
        setUsuaries({
            ...usuaries,
            [event.target.name]: event.target.value
        })
    }

    const redirectToListUsers = () => {
        history.push("/users/list")
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        //console.log('enviando datos...' + tareas.titulo + ' ' + tareas.fecha)
        //console.log(tareas.descripcion);
        if (!usuaries.nombre.trim() || !usuaries.apellido.trim() || !usuaries.correo.trim() || !usuaries.contraseña.trim()) {
            setError("Revise los campos")
            return
        }

        api.post('/users.json', {
            nombre: usuaries.nombre,
            apellido: usuaries.apellido,
            correo: usuaries.correo,
            contraseña: usuaries.contraseña,
        })
            .then(redirectToListUsers)
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <Layout >
            <Main title='Agregar Usuarie' showAddButton>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <form className='form-agregar-usuarie mt-5' onSubmit={enviarDatos}>
                                <div className='form-group'>
                                    <label htmlFor='nombre'><b>Nombre</b></label>
                                    <input type='text' name='nombre' className='form-control' id='nombre' placeholder='Escriba su nombre' onChange={(event) => handleInputChange(event)} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='apellido'><b>Apellido</b></label>
                                    <input type='text' name='apellido' className='form-control' id='apellido' placeholder='Escriba su apellido' onChange={(event) => handleInputChange(event)} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='correo electronico'><b>Correo electrónico</b></label>
                                    <input type='email' name='correo' className='form-control' id='correo' placeholder='Escriba su correo electrónico' onChange={(event) => handleInputChange(event)} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='contraseña'><b>Contraseña</b></label>
                                    <input type='password' name='contraseña' className='form-control' id='contraseña' placeholder='Escriba su contraseña' onChange={(event) => handleInputChange(event)} />
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button className='btn btn-primary btn-agregar-usuarie mt-5' type='submit'>Agregar usuarie</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {
                    error != null ? (
                        <div className='alert alert-danger mt-2' role='alert'>{error} </div>
                    ) : (<div></div>)
                }
            </Main >
        </Layout >


    )
}

export { AddUserForm }
